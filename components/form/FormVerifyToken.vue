<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'

const props = defineProps<{
  userEmail: string
}>()

const isVerifying = ref(false)
const supabase = useSupabaseClient()

const formSchema = toTypedSchema(z.object({
  token: z.string().length(6, { message: 'Token must be 6 characters long' }),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  isVerifying.value = true
  const { data: { session }, error } = await supabase.auth.verifyOtp({
    email: props.userEmail,
    token: values.token,
    type: 'email',
  })

  if (session && session.access_token) {
    isVerifying.value = false
    return navigateTo('/')
  }

  if (error) {
    toast.error('Error verifying token', {
      description: error.message,
    })
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
      <span v-if="!isVerifying">Confirm token</span>
      <span v-else>Verifying token...</span>
    </SCButton>
  </form>
</template>
