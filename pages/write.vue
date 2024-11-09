<script setup lang="ts">
import type { Database, PostgrestError } from '~/types'

useHead({
  title: 'Write',
})

const supabase = useSupabaseClient<Database>()
const entry = ref('')
const hasError = ref<PostgrestError | null>(null)

const handleSubmit = async () => {
  const { error } = await supabase.from('entries').update({
    data: entry.value,
    id: 1,
  })
  return hasError.value = error
}

watch(hasError, (error) => {
  if (error)
    console.error(error)
})
</script>

<template>
  <main class="container flex h-full flex-col py-4">
    <h1 class="mb-2 text-xl font-bold">
      Write
    </h1>
    <form class="flex h-full flex-col gap-2" @submit.prevent="handleSubmit">
      <SCTextarea v-model="entry" placeholder="What would you like to remember in the future?" class="h-full resize-none" />
      <SCButton class="w-fit self-end" size="sm" type="submit">
        Submit
      </SCButton>
    </form>
    <TipTapEditor />
  </main>
</template>
