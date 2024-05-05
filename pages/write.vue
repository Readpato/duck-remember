<script setup lang="ts">
</script>

<template>
  <main class="container flex h-full flex-col py-4">
    <h1 class="mb-2 text-xl font-bold">
      Write
    </h1>
    <form class="flex h-full flex-col gap-2">
      <SCTextarea placeholder="What would you like to remember in the future?" class="h-full resize-none" />
      <SCButton class="w-fit self-end" size="sm">
        Submit
      </SCButton>
    </form>
  </main>
</template>
