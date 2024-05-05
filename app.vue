<script setup lang="ts">
const navbarEl = ref<HTMLDivElement | null>(null)
const { height } = useElementBounding(navbarEl)
</script>

<template>
  <div class="app bg-background">
    <TheNavbar ref="navbarEl" />
    <div class="content flex">
      <TheSidebar :offset-height="height" />
      <NuxtPage class="h-full overflow-y-auto" />
    </div>
  </div>
</template>

<style scoped lang="css">
.app {
  min-height: 100vh;
  min-height: 100dvh;
}

.content {
  height: v-bind('`calc(100dvh - ${height}px)`');
}
</style>
