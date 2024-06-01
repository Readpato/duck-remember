<script setup lang="ts">
definePageMeta({
  layout: 'unauthenticated',
})

const config = useRuntimeConfig()
const supabase = useSupabaseClient()
const hasSentOTPToken = ref(false)
const userEmail = ref('')

const handleTokenSent = (email: string) => {
  userEmail.value = email
  hasSentOTPToken.value = true
}

const signInWithOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${config.public.baseUrl}/confirm`,
    },
  })
  if (error) {
    // TODO: Create a NuxtError page
    console.log(error)
  }
}
</script>

<template>
  <div class="mx-auto flex w-full flex-col justify-center sm:w-[350px]">
    <div class="mb-4 flex flex-col text-center">
      <h1 class="text-2xl font-semibold tracking-tight">
        Login
      </h1>
    </div>
    <FormLoginWithEmail v-if="!hasSentOTPToken" @token-sent="handleTokenSent" />
    <FormVerifyToken v-else :user-email="userEmail" />
    <div class="relative my-4">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>
    <CtaIcon icon="logo-google" class="mx-auto" @click="signInWithOAuth" />
  </div>
</template>
