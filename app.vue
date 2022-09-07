<template>
  <main>
    <div class="p-4">
      <p class="text-black/10 font-bold text-7xl">00</p>
      <div class="relative w-screen">
        <h1 class="text-8xl font-bold font-[Poppins] text-center absolute top-0 left-0 w-screen">Ampoi's<br>portfolio</h1>
        <h1
          class="text-8xl font-bold font-[Poppins] text-center absolute top-4 left-2 hover:top-6 hover:left-3 transition-all w-screen text-transparent"
          style="-webkit-text-stroke: 1px black"
        >Ampoi's<br>portfolio</h1>
      </div>
      <div class="mt-56 justify-center flex flex-row gap-4">
        <a href="https://twitter.com/4mpoi"><i class="fa-brands fa-twitter text-xl"/></a>
        <a href="https://github.com/Ampoi"><i class="fa-brands fa-github text-xl"/></a>
      </div>
    </div>
    <div class="w-screen bg-black p-4 text-white pb-10">
      <div>
        <p class="text-white/20 font-bold text-7xl">01</p>
        <h2 class="text-6xl font-bold font-[poppins] -mt-10 ml-12">Projects</h2>
      </div>
      <div class="mt-4">
        <p class="ml-12">過去に作ったアプリとかWebサイトとか</p>
        <div class="mt-8 w-[620px] h-[400px] grid grid-cols-3 grid-rows-2 mx-auto gap-8">
          <NuxtLink
            v-for="project in projects"
            :key="project.key"
            class="text-black"
            :to="project.link">
            <div
              class="w-full h-full border-white border-2 transition-all mt-2 ml-1.5"
            />
            <!--:class="{'mt-4': project.hoverd, 'ml-3': project.hoverd}"-->
            <div
              class="bg-white w-full h-full p-4 -mt-[200px]"
            >
              <!--:class="{'-mt-52': project.hoverd}"-->
              <div
                class="w-24 h-24 mx-auto rounded-xl bg-center bg-cover shadow-xl"
                :style="`background-image: url(${project.img})`"/>
              <p class="font-bold text-center text-xl font-[poppins]">{{project.title}}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="w-screen p-4">
      <div>
        <p class="text-black/10 font-bold text-7xl">02</p>
        <h2 class="text-6xl font-bold font-[poppins] -mt-10 ml-12">Blogs</h2>
      </div>
      <div class="mt-4">
        <p class="ml-12">技術ブログなどはZennに投稿しています！ぜひご覧ください！</p>
        <NuxtLink to="https://zenn.dev/s_kuronosuke">
          <img src="@/assets/zenn.png" class="h-24 mx-auto mt-4">
        </NuxtLink>
      </div>
    </div>
  </main>
  <footer class="text-center">
    Created By Ampoi
  </footer>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Poppins:wght@700&display=swap');
body {
  font-family: 'Noto Sans JP', sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>
<script>
export default {
  data(){return{
    projects: [
      {title: "ToBe", img: "https://cdn.discordapp.com/attachments/1012671960301437019/1016357910353289296/1_1.png", hoverd: false, link: "https://tobe.ampoi.net"},
      {title: "KScord", img: "", hoverd: false, link: "https://github.com/ampoi/kscord"},
      {title: "URLMEMO", img: "", hoverd: false, link: "https://urlmemo.vercel.app"},
      {title: "131th KaijoFes", img: "https://cdn.discordapp.com/attachments/1012671960301437019/1012672014332465192/1.png", hoverd: false, link: "https://kaijofes.com"},
      {title: "KStalk", img: "", hoverd: false, link: "https://github.com/Ampoi/ChatApp"},
      {title: "KSchat", img: "", hoverd: false, link: ""},
    ]
  }}
}
</script>
<script setup>
useHead({
  title: 'Ampoi',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: {
    src: "https://kit.fontawesome.com/9f3463b573.js",
    crossorigin: "anonymous"
  }
})
</script>