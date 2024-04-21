<script setup lang="ts">
const colorMode = useColorMode()

const colorModeIcon = computed(() => colorMode.preference === 'dark' ? 'sun' : 'moon')

const handleColorChange = () => {
  colorMode.preference === 'dark'
    ? colorMode.preference = 'light'
    : colorMode.preference = 'dark'
}
</script>

<template>
  <header class="flex items-center justify-between p-4">
    <h1 class="scroll-m-20 text-2xl font-semibold tracking-tight">
      Remember
    </h1>
    <div class="space-x-2">
      <CtaIcon icon="logo-github" as="anchor" to="https://www.github.com" target="_blank" />
      <CtaIcon
        :icon="colorModeIcon"
        @click="handleColorChange"
      />
    </div>
  </header>
</template>
