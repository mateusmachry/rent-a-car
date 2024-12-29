// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/fonts.css'],
  colorMode: {
    preference: 'light'
  },
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  nitro: {
    firebase: {
      gen: 2
    }
  },
  app: {
    head: {
      title: 'Rent-A-Car',
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    }
  },
});