<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { sideQuests } from '../content/sideQuests'

const route = useRoute()
const openImage = ref(null)
const sideQuest = computed(() => sideQuests.find((item) => item.slug === route.params.slug))
</script>

<template>
  <section v-if="sideQuest" class="mx-auto mt-16 max-w-5xl pb-20">
    <RouterLink class="text-sm font-semibold underline" to="/">back to side quests</RouterLink>

    <div class="mt-10 max-w-3xl">
      <p class="text-sm font-semibold">{{ sideQuest.year }} / {{ sideQuest.type }}</p>
      <h1 class="mt-3 text-5xl font-semibold leading-none tracking-tight sm:text-7xl">
        {{ sideQuest.title }}
      </h1>
      <p class="mt-6 text-xl leading-8">{{ sideQuest.summary }}</p>
      <p class="mt-6 leading-7">{{ sideQuest.description }}</p>
    </div>

    <div class="mt-12 grid gap-8 border-t-2 border-black pt-8 md:grid-cols-2">
      <div v-if="sideQuest.items?.length">
        <h2 class="text-sm font-bold uppercase">What I do</h2>
        <ul class="mt-3 space-y-1 leading-7">
          <li v-for="item in sideQuest.items" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div>
        <h2 class="text-sm font-bold uppercase">Why it matters</h2>
        <p class="mt-3 leading-7">{{ sideQuest.why }}</p>
      </div>
    </div>

    <div v-if="sideQuest.images.length" class="mt-12 grid gap-4 sm:grid-cols-2">
      <button
        v-for="image in sideQuest.images"
        :key="image"
        class="cursor-pointer overflow-hidden rounded-lg border-2 border-black"
        type="button"
        @click="openImage = image"
      >
        <img class="aspect-[4/3] w-full object-cover" :src="image" :alt="sideQuest.title" />
      </button>
    </div>

    <button
      v-if="openImage"
      class="fixed inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/90 p-5"
      type="button"
      @click="openImage = null"
    >
      <img class="max-h-full max-w-full rounded-lg object-contain" :src="openImage" :alt="sideQuest.title" />
    </button>
  </section>

  <section v-else class="mt-16">
    <h1 class="text-4xl font-semibold">Side quest not found.</h1>
    <RouterLink class="mt-6 inline-block underline" to="/">back home</RouterLink>
  </section>
</template>
