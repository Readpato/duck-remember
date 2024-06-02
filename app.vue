<script setup lang="ts">
useHead({
  titleTemplate: title => title ? `${title} - Remember` : 'Remember',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <SCToaster rich-colors />
</template>
