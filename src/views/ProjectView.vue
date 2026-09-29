<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../content/projects'

const route = useRoute()
const openImage = ref(null)
const project = computed(() => projects.find((item) => item.slug === route.params.slug))
</script>

<template>
  <section v-if="project" class="mx-auto mt-16 max-w-6xl pb-20">
    <RouterLink class="text-sm font-semibold underline" to="/">back to projects</RouterLink>

    <div class="mt-10 max-w-3xl">
      <p class="text-sm font-semibold">{{ project.type }}</p>
      <h1 class="mt-3 text-5xl font-semibold leading-none tracking-tight sm:text-7xl">
        {{ project.title }}
      </h1>
      <p class="mt-6 text-xl leading-8">{{ project.summary }}</p>
    </div>

    <dl class="mt-10 flex flex-wrap justify-between gap-6 border-y-2 border-black py-5 text-sm">
      <div>
        <dt class="font-bold uppercase">Role</dt>
        <dd class="mt-1">{{ project.role }}</dd>
      </div>
      <div>
        <dt class="font-bold uppercase">Year</dt>
        <dd class="mt-1">{{ project.year }}</dd>
      </div>
      <div>
        <dt class="font-bold uppercase">Context</dt>
        <dd class="mt-1">{{ project.client }}</dd>
      </div>
      <div>
        <dt class="font-bold uppercase">Tools</dt>
        <dd class="mt-1">{{ project.tools.join(' / ') }}</dd>
      </div>
      <div v-if="project.liveUrl">
        <dt class="font-bold uppercase">Live</dt>
        <dd class="mt-1">
          <a class="underline" :href="project.liveUrl" target="_blank" rel="noopener noreferrer">open project</a>
        </dd>
      </div>
      <div v-if="project.links.length">
        <dt class="font-bold uppercase">Links</dt>
        <dd class="mt-1 space-y-1">
          <a
            v-for="link in project.links"
            :key="link.url"
            class="block underline"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.label }}
          </a>
        </dd>
      </div>
    </dl>

    <div class="mt-12 grid gap-8 md:grid-cols-3">
      <div>
        <h2 class="text-sm font-bold uppercase">The project</h2>
        <p class="mt-3 leading-7">{{ project.summary }}</p>
      </div>
      <div>
        <h2 class="text-sm font-bold uppercase">The challenge</h2>
        <p class="mt-3 leading-7">{{ project.context }}</p>
      </div>
      <div>
        <h2 class="text-sm font-bold uppercase">My role</h2>
        <ul class="mt-3 space-y-1 leading-7">
          <li v-for="item in project.responsibilities" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="mt-12 border-t-2 border-black pt-8">
      <h2 class="text-sm font-bold uppercase">Approach</h2>
      <div class="mt-5 grid gap-6 md:grid-cols-3">
        <div v-for="(item, index) in project.approach" :key="item.title">
          <p class="text-sm font-bold">0{{ index + 1 }}</p>
          <h3 class="mt-2 text-xl font-semibold">{{ item.title }}</h3>
          <p class="mt-3 leading-7">{{ item.text }}</p>
        </div>
      </div>
    </div>

    <div class="mt-12 grid gap-6 border-t-2 border-black pt-8 md:grid-cols-2">
      <div v-for="item in project.decisions" :key="item.title">
        <h2 class="text-sm font-bold uppercase">{{ item.title }}</h2>
        <p class="mt-3 leading-7">{{ item.text }}</p>
      </div>
    </div>

    <div v-if="project.metrics?.length" class="mt-12 border-t-2 border-black pt-8">
      <h2 class="text-sm font-bold uppercase">Numbers</h2>
      <div class="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
        <div v-for="metric in project.metrics" :key="metric.label">
          <p class="text-3xl font-semibold tracking-tight">{{ metric.value }}</p>
          <p class="mt-1 text-sm leading-5">{{ metric.label }}</p>
        </div>
      </div>
    </div>

    <div v-if="project.images.length" class="mt-12 grid gap-4 sm:grid-cols-2">
      <button
        v-for="image in project.images"
        :key="image"
        class="cursor-pointer overflow-hidden rounded-lg border-2 border-black"
        type="button"
        @click="openImage = image"
      >
        <img class="aspect-[4/3] w-full object-cover" :src="image" :alt="project.title" />
      </button>
    </div>

    <div class="mt-12 grid gap-8 border-t-2 border-black py-8 md:grid-cols-2">
      <div>
        <h2 class="text-sm font-bold uppercase">Outcome</h2>
        <p class="mt-3 leading-7">{{ project.outcome }}</p>
      </div>
      <div>
        <h2 class="text-sm font-bold uppercase">What I brought</h2>
        <p class="mt-3 leading-7">{{ project.contribution }}</p>
      </div>
    </div>

    <button
      v-if="openImage"
      class="fixed inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/90 p-5"
      type="button"
      @click="openImage = null"
    >
      <img class="max-h-full max-w-full rounded-lg object-contain" :src="openImage" :alt="project.title" />
    </button>
  </section>

  <section v-else class="mt-16">
    <h1 class="text-4xl font-semibold">Project not found.</h1>
    <RouterLink class="mt-6 inline-block underline" to="/">back home</RouterLink>
  </section>
</template>
