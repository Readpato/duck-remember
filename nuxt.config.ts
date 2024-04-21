// https://nuxt.com/docs/api/configuration/nuxt-config

const sassAdditionalData = () => {
  let additionalData = '@use "sass:math";'
  additionalData += '@import "@/assets/scss/_utils.scss";'
  additionalData += '@import "@/assets/scss/main.scss";'
  return additionalData
}

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Duck nuxt starter',
      link: [{ rel: 'icon', type: 'image/jpeg', href: '~public/favicon.ico' }],
    },
  },
  colorMode: {
    classSuffix: '',
  },
  modules: [
    '@nuxt/test-utils/module',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
    'shadcn-nuxt',
  ],
  shadcn: {
    prefix: 'SC',
    componentDir: './components/ui',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: sassAdditionalData() },
      },
    },
  },
})
