<template>
  <main class="dark:bg-slate-900 dark:text-white pt-20 h-screen overflow-auto">
  <div class="mx-5 max-w-2xl sm:mx-auto">
    <div class="text-center">
      <div class="z-10">
        <h1 class="text-6xl">Skuronosuke</h1>
        <p>一般的なパソコン好きの中学生</p>
        <div class="text-center mt-2 text-gray-500 text-xl">
          <div>
            <a href="https://github.com/shibata-kuronosuke" class="m-1">
              <i class="bi bi-github"></i>
            </a>
            <a href="https://twitter.com/Skuronosuke_o" class="m-1">
              <i class="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 pt-4 border-t-2 dark:border-slate-500">
      <h1 class="text-3xl font-bold text-center">今まで作った作品たち</h1>
      <div class="mt-4 grid grid-rows-2 sm:grid-cols-3 sm:h-[460px] gap-4">
        <Product
          v-for="product in products"
          :key="product.key"
          :data="product"
        />
      </div>
    </div>
    <div class="mt-4 pt-4 border-t-2 dark:border-slate-500">
      <h1 class="text-3xl font-bold text-center">ブログ</h1>
      <div class="grid gap-4 mt-4">
        <div v-for="article in articles" :key="article.slug"
            class="p-4 rounded-xl bg-slate-50 shadow-md
                   dark:bg-slate-800 dark:border-2 dark:border-slate-700">
          <NuxtLink :to="`/blogs/${article.slug}`" class="flex flex-row">
            <h1 class="text-3xl px-1.5 py-2 rounded-md bg-slate-100
                       dark:bg-slate-600">{{ article.emoji }}</h1>
            <div class="ml-2">
              <h2 class="text-2xl font-bold">{{ article.title }}</h2>
              <p>最終更新日：{{ formatDate(article.updatedAt) }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  </main>
</template>

<script>
  

  export default {
    data(){return{
      products:[
        {name:"URLMEMO",description:"URLにメモを埋め込んで保存公開できるウェブアプリです",image:"",url:"https://github.com/shibata-kuronosuke/urlmemo"},
        {name:"KSchat",description:"学内チャットアプリです(非公開)",image:"",url:""},
        {name:"KStalk",description:"KSchatの進化系です",image:"https://lh3.googleusercontent.com/pw/AM-JKLU9-X5WE2EG_rzF4zNPweEw5r5okhpS-aRjxJSxFXRbMO4rcea08IgUBaoDxDIDDWDbdczvXbD1wBeGQ6aWrH8bHv6kuN40yh8TC21fO4dbeioR63cwdw2wc2f6CXLMCYzdYQKHNS-5L4Evy62Pp0EQ=s152-no?authuser=0",url:"https://github.com/shibata-kuronosuke/ChatApp"},
        {name:"KScord",description:"学年Discord向けのBOTです",image:""}
      ]
    }},
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('ja', options)
      }
    },
    async asyncData({ $content, params }) {
      const articles = await $content('blog', params.slug)
        .only(["title", "emoji", "types", "slug", "createdAt", "updatedAt"])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
</style>