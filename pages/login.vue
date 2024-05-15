<script setup lang="ts">
definePageMeta({
  layout: 'unauthenticated',
})

const config = useRuntimeConfig()
const supabase = useSupabaseClient()

const signInWithOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${config.public.baseUrl}/confirm`,
    },
  })
  if (error)
    console.log(error)
}
</script>

<template>
  <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">
        Login with
      </h1>
    </div>
    <CtaIcon icon="logo-google" class="mx-auto" @click="signInWithOAuth" />
    <p class="px-8 text-center text-sm text-muted-foreground">
      By clicking continue, you agree to our
      <a
        href="/terms"
        class="underline underline-offset-4 hover:text-primary"
      >
        Terms of Service
      </a>
      and
      <a
        href="/privacy"
        class="underline underline-offset-4 hover:text-primary"
      >
        Privacy Policy
      </a>
      .
    </p>
  </div>
</template>
