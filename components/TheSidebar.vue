<script setup lang="ts">
const links = [{
  key: 'remember',
  route: '/',
  text: 'Remember',
}, {
  key: 'write',
  route: '/write',
  text: 'Write',
}]
</script>

<template>
  <div class="h-full w-64 border-r p-4">
    <SCButton
      v-for="{ text, route, key } in links"
      :key="key"
      as-child
      variant="outline"
      size="sm"
      class="mb-2 w-full last:mb-0"
    >
      <NuxtLink :to="route">
        {{ text }}
      </NuxtLink>
    </SCButton>
  </div>
</template>
