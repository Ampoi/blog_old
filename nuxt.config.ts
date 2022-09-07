import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: 'node',
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'], // <= ドキュメントからさらに追加
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    }
  },
})