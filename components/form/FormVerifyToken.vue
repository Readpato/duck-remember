<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'

const props = defineProps<{
  userEmail: string
}>()

const supabase = useSupabaseClient()

const formSchema = toTypedSchema(z.object({
  token: z.string().length(6, { message: 'Token must be 6 characters long' }),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  // TODO: add loading status when awaiting for the response
  const { data: { session }, error } = await supabase.auth.verifyOtp({
    email: props.userEmail,
    token: values.token,
    type: 'email',
  })

  console.log('session', session, 'session: acceess token', session?.access_token)
  if (session && session.access_token)
    navigateTo('/')

  if (error) {
    // TODO: Create a NuxtError page
    console.log(error)
  }
})
</script>

<template>
  <form class="space-y-3" @submit="onSubmit">
    <SCFormField v-slot="{ componentField }" name="token">
      <SCFormItem>
        <SCInput v-bind="componentField" placeholder="Token" type="text" />
        <SCFormMessage />
      </SCFormItem>
    </SCFormField>
    <SCButton class="w-full" type="submit">
      Confirm token
    </SCButton>
  </form>
</template>
