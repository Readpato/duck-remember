<script setup lang="ts">
useHead({
  title: 'Redirecting',
})

definePageMeta({
  layout: 'unauthenticated',
})

const user = useSupabaseUser()

watch(user, () => {
  if (user.value)
    return navigateTo('/')
}, { immediate: true })
</script>

<template>
  <div class="flex items-center justify-center">
    <h1 class="text-2xl font-semibold">
      Redirecting...
    </h1>
  </div>
</template>
