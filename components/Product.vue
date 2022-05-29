<template>
  <div class="bg-slate-50 dark:bg-slate-800 shadow-md dark:border-2 dark:border-slate-700 rounded-xl p-5">
  <a :href="data.url">
    <div class="h-24 w-24 bg-slate-100 shadow-md mx-auto rounded-2xl bg-center bg-cover"
         :style="`background-image:url(${data.image})`"></div>
    <h2 class="text-center font-bold text-xl mt-2">{{data.name}}</h2>
    <p class="text-sm">{{data.description}}</p>
  </a>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>