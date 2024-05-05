<template>
  <div class="app grid grid-cols-1 md:grid-cols-2">
    <div class="dark-mode:bg-background flex w-full flex-col items-center justify-center gap-y-2 bg-foreground">
      <h1 class="dark-mode:text-foreground scroll-m-20 text-4xl font-extrabold tracking-tight text-background lg:text-5xl">
        Remember
      </h1>
      <CtaIcon
        is-anchor
        as-child
        icon="logo-github"
        target="_blank"
        to="https://www.github.com/readpato/duck-remember"
        variant="outline"
        class="dark-mode:text-foreground dark-mode:border-foreground border-background bg-foreground text-background"
      />
    </div>
    <NuxtPage class="w-full" />
  </div>
</template>

<style scoped lang="css">
.app {
  min-height: 100vh;
  min-height: 100dvh;
}
</style>
