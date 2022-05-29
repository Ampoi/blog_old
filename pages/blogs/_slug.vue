<template>
  <article class="flex flex-row h-screen">
    <div class="basis-60 pt-10 pl-4 bg-slate-100 md:block hidden
                dark:bg-slate-800 dark:text-white">
      <NuxtLink to="/" class="text-3xl">Skuronosuke</NuxtLink>
      <li v-for="link of article.toc" :key="link.id" class="py-2 text-lg list-none">
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </div>
    <div class="overflow-auto grow
                dark:bg-slate-900 dark:text-white">
      <div class="max-w-[600px] mx-auto">
        <div class="text-center text-2xl pt-5 md:hidden">
          <NuxtLink to="/">Skuronosuke</NuxtLink>
        </div>
        <div class="text-center pt-5">
          <p class="text-[80px] pb-4">{{ article.emoji }}</p>
          <h1 class="text-4xl font-bold">{{ article.title }}</h1>
          <p>最終更新日: {{ formatDate(article.updatedAt) }}</p>
        </div>
        <nuxt-content :document="article" class="mt-4 pt-4 border-t-2 border-slate-700"/>
      </div>
    </div>
  </article>
</template>

<style>
  .nuxt-content {
    font-size: 18px;
    white-space: pre-wrap;
  }
  .nuxt-content p {
    margin-bottom: 10px;
  }
  .nuxt-content h2 {
    font-size: 24px;
    font: bold;
    line-height: 1;
  }
  ul {
    list-style: inherit;
    margin-left: 40px;
    line-height: 1;
  }
  ol {
    list-style: number;
    margin-left: 40px;
    line-height: 1;
  }
  blockquote {
    background: rgb(235, 235, 235);
    padding: 10px;
    border-radius: 5px;
  }
  @media (prefers-color-scheme: dark) {
    blockquote {
      background: rgb(30 41 59);
    }
  }
</style>

<script>
  export default {
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('ja', options)
      }
    },
    async asyncData({ $content, params }) {
      const article = await $content('blog', params.slug).fetch()

      return { article }
    }
  }
</script>