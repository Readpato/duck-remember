<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'

const emit = defineEmits<{
  tokenSent: [email: string]
}>()

const supabase = useSupabaseClient()

const isSubmitting = ref(false)

const formSchema = toTypedSchema(z.object({
  email: z.string().email(),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true
  const { error, data } = await supabase.auth.signInWithOtp({
    email: values.email,
  })

  if (!data.user && !data.session && !error) {
    toast('Token sent', {
      description: `Check ${values.email} for your login token`,
    })
    emit('tokenSent', values.email)
  }

  if (error) {
    isSubmitting.value = false
    toast.error('Error sending token', {
      description: error.message,
    })
  }
})
</script>

<template>
  <form class="space-y-3" @submit="onSubmit">
    <SCFormField v-slot="{ componentField }" name="email">
      <SCFormItem>
        <SCInput v-bind="componentField" placeholder="Email" />
        <SCFormMessage />
      </SCFormItem>
    </SCFormField>
    <SCButton class="w-full" type="submit">
      <span v-if="!isSubmitting">Sign in with email</span>
      <span v-else>Sending token...</span>
    </SCButton>
  </form>
</template>
