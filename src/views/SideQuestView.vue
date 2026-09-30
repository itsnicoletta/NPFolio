<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { sideQuests } from '../content/sideQuests'

const route = useRoute()
const openImage = ref(null)
const sideQuest = computed(() => sideQuests.find((item) => item.slug === route.params.slug))
</script>

<template>
  <section v-if="sideQuest" class="mx-auto mt-8 max-w-5xl pb-12 md:mt-16 md:pb-20">
    <RouterLink class="text-sm font-semibold underline" to="/">back to side quests</RouterLink>

    <div class="mt-6 max-w-3xl md:mt-10">
      <p class="text-sm font-semibold">{{ sideQuest.year }} / {{ sideQuest.type }}</p>
      <h1 class="mt-3 text-4xl font-semibold leading-none tracking-tight sm:text-5xl md:text-7xl">
        {{ sideQuest.title }}
      </h1>
      <p class="mt-4 text-lg leading-7 md:mt-6 md:text-xl md:leading-8">{{ sideQuest.summary }}</p>
      <p class="mt-4 leading-7 md:mt-6">{{ sideQuest.description }}</p>
    </div>

    <div class="mt-8 grid gap-6 border-t-2 border-black pt-6 md:mt-12 md:grid-cols-2 md:gap-8 md:pt-8">
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

    <div v-if="sideQuest.pdfs?.length" class="mt-8 border-t-2 border-black pt-6 md:mt-12 md:pt-8">
      <h2 class="text-sm font-bold uppercase">PDF archive</h2>
      <div class="mt-4 grid gap-3 sm:grid-cols-2">
        <a
          v-for="pdf in sideQuest.pdfs"
          :key="pdf.url"
          class="flex items-center justify-between gap-4 border-2 border-black px-4 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white"
          :href="pdf.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{{ pdf.label }}</span>
          <span aria-hidden="true">PDF</span>
        </a>
      </div>
    </div>

    <div v-if="sideQuest.images.length" class="mt-8 grid gap-4 sm:grid-cols-2 md:mt-12">
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

  <section v-else class="mt-8 md:mt-16">
    <h1 class="text-4xl font-semibold">Side quest not found.</h1>
    <RouterLink class="mt-6 inline-block underline" to="/">back home</RouterLink>
  </section>
</template>
