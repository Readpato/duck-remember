<script setup lang="ts">
import type { ButtonVariants } from '~/components/ui/button'

withDefaults(defineProps<{
  icon: string
  variant?: ButtonVariants['variant']
}>(), {
  variant: 'outline',
})
</script>

<template>
  <SCButton size="icon" :variant="variant" class="size-8">
    <Icon :name="`carbon:${icon}`" class="size-5" />
  </SCButton>
</template>
