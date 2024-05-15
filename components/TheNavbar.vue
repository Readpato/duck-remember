<script setup lang="ts">
const supabase = useSupabaseClient()
const colorMode = useColorMode()
const hasError = ref()

const colorModeIcon = computed(() => colorMode.preference === 'dark' ? 'sun' : 'moon')

const handleColorChange = () => {
  colorMode.preference === 'dark'
    ? colorMode.preference = 'light'
    : colorMode.preference = 'dark'
}

const handleSignOut = async () => {
  const { error } = await supabase.auth.signOut()

  if (error)
    hasError.value = error

  navigateTo({ path: '/login' })
}
</script>

<template>
  <header class="flex items-center justify-between border-b p-4">
    <h1 class="scroll-m-20 text-2xl font-semibold tracking-tight">
      Remember
    </h1>
    <div class="space-x-2">
      <CtaIcon is-anchor as-child icon="logo-github" target="_blank" to="https://www.github.com/readpato/duck-remember" />
      <CtaIcon :icon="colorModeIcon" @click="handleColorChange" />
      <CtaIcon icon="logout" @click="handleSignOut" />
    </div>
  </header>
</template>
