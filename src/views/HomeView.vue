<script setup>
import { ref } from 'vue'
import AsciiGif from '../components/AsciiGif.vue'
import ScrambleTitle from '../components/ScrambleTitle.vue'
import { projects } from '../content/projects'
import { sideQuests } from '../content/sideQuests'

const tabs = [
  { label: 'PROJECTS', value: 'PROJECTS' },
  { label: 'ABOUT', value: 'ABOUT' },
  { label: 'SIDE QUESTS', value: 'SIDE QUESTS' },
]
const activeTab = ref('PROJECTS')
const projectScroll = ref(0)
const sideQuestScroll = ref(0)
const skills = ['UX/UI', 'WEB', 'BRANDING', 'WEBFLOW', 'FRONT-END', 'ART DIRECTION', 'DIGITAL MARKETING']
const asciiImages = [1, 2, 3, 4, 5, 6].map((number) => `${import.meta.env.BASE_URL}seq%20${number}.png`)
const whatIDo = [
  'UX/UI Design',
  'Web Design',
  'Visual Design',
  'Brand Identity',
  'Art Direction',
  'Creative Development',
  'Front-end Development',
  'Webflow Development',
  'Digital Marketing',
  'Prototyping',
]
const tools = [
  {
    title: 'DESIGN',
    items: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
  },
  {
    title: 'BUILD',
    items: ['Webflow', 'Vue.js', 'Vite', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'GSAP'],
  },
  {
    title: 'CREATE & DIGITAL',
    items: ['Adobe After Effects', 'Blender', 'Digital Campaigns', 'Social Media Content', 'Content Strategy'],
  },
]

function updateScroll(event, target) {
  const scrollable = event.currentTarget
  const maxScroll = scrollable.scrollHeight - scrollable.clientHeight
  target.value = maxScroll > 0 ? (scrollable.scrollTop / maxScroll) * 100 : 100
}
</script>

<template>
  <div class="home-frame site-x fixed inset-0 overflow-hidden bg-white pb-5 pt-20 text-black">
    <aside class="home-ascii pointer-events-none absolute bottom-0 top-0 z-0 hidden items-center justify-end overflow-visible md:flex">
      <AsciiGif
        :images="asciiImages"
        :width="190"
        :speed="120"
        :threshold="205"
        yoyo
      />
    </aside>

    <div class="home-content relative z-10 max-w-3xl">
      <section class="home-hero mt-12 max-w-6xl sm:mt-16">
        <h1 class="home-title text-5xl font-semibold leading-[1.06] tracking-tight sm:text-7xl">
          <span class="font-medium">I design</span> <em class="font-thin">digital things</em>.<br />
          <span class="font-medium">Sometimes I</span> <strong class="mr-3 font-bold uppercase">build</strong>
          <span class="font-medium">them too</span>.
        </h1>

        <p class="home-intro mt-8 max-w-2xl text-lg leading-snug sm:text-xl">
          Multidisciplinary digital designer working across UX/UI, visual identity, web design,
          creative development and digital experiences.
        </p>

        <ul class="home-chips mt-8 flex max-w-3xl flex-wrap gap-x-3 gap-y-2 text-xs font-semibold tracking-wide lg:max-w-none lg:flex-nowrap">
          <li v-for="skill in skills" :key="skill" class="home-chip rounded-full border border-black bg-black px-3 py-1 text-white">
            {{ skill }}
          </li>
        </ul>
      </section>

      <section class="home-panel relative mt-8 max-w-3xl sm:mt-10">
        <div class="home-tabs flex justify-between border-y-2 border-black px-3 py-2 text-sm font-bold uppercase">
          <template v-for="(tab, index) in tabs" :key="tab.value">
            <button
              class="cursor-pointer py-1 transition-opacity duration-200"
              :class="activeTab === tab.value ? 'opacity-100' : 'opacity-45 hover:opacity-100'"
              type="button"
              @click="activeTab = tab.value"
            >
              <ScrambleTitle :text="tab.label" :shift="false" :disabled="activeTab === tab.value" />
            </button>
            <span v-if="index < tabs.length - 1" class="py-1 opacity-70">//</span>
          </template>
        </div>

        <div
          class="pt-5"
          :class="activeTab === 'ABOUT' ? 'w-[calc(100vw-5rem)] max-w-6xl sm:w-[calc(100vw-8rem)] lg:w-[calc(100vw-12rem)]' : ''"
        >
          <div v-if="activeTab === 'PROJECTS'">
            <div class="flex gap-5">
              <div class="home-list-height flex h-[calc(100vh-31rem)] min-h-[180px] max-h-[430px] flex-col items-center gap-2 text-[10px] font-bold uppercase opacity-60" aria-hidden="true">
                <span>01</span>
                <div class="relative w-[2px] flex-1 bg-black/20">
                  <div class="absolute left-0 top-0 w-full bg-black transition-[height] duration-150" :style="{ height: `${projectScroll}%` }"></div>
                </div>
                <span>{{ String(projects.length).padStart(2, '0') }}</span>
              </div>

              <div class="home-list-height hide-scrollbar h-[calc(100vh-31rem)] min-h-[180px] max-h-[430px] flex-1 overflow-y-auto" @scroll="updateScroll($event, projectScroll)">
                <ul class="space-y-3 pr-3 tracking-tight">
                  <li v-for="project in projects" :key="project.slug">
                    <RouterLink class="block cursor-pointer py-1" :to="`/projects/${project.slug}`">
                      <span class="home-project-title block text-2xl font-semibold">
                        <ScrambleTitle :text="project.title" />
                      </span>
                      <span class="home-project-subtitle mt-1 block text-xs font-semibold uppercase tracking-normal opacity-55">
                        {{ project.type }}
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'ABOUT'" class="home-about hide-scrollbar grid gap-10 overflow-y-auto text-base leading-7 lg:grid-cols-[1.35fr_1fr_0.9fr] xl:gap-14">
            <div class="space-y-4">
              <p>
                I'm Nicoletta Pelosi, a <strong>multidisciplinary digital designer</strong> based in
                Italy.
              </p>
              <p>
                I work across <strong>UX/UI, web design, visual identity, creative development and
                digital marketing</strong>. My work often sits somewhere between <strong>design and
                code</strong>: I like shaping how something looks, how it works and, when it makes
                sense, building it too.
              </p>
              <p>
                My background combines communication, visual design, digital marketing and front-end
                development, which allows me to approach projects from both a <strong>creative and
                functional perspective</strong>.
              </p>
            </div>

            <div class="home-about-box space-y-6 border-2 border-black p-4">
              <div>
                <h2 class="text-sm font-bold uppercase">What I do</h2>
                <ul class="home-about-list mt-3 grid grid-cols-2 gap-x-5 gap-y-1 text-sm font-semibold">
                  <li v-for="item in whatIDo" :key="item">{{ item }}</li>
                </ul>
              </div>

              <div>
                <h2 class="text-sm font-bold uppercase">Tools</h2>
                <div class="mt-3 space-y-4">
                  <div v-for="group in tools" :key="group.title">
                    <h3 class="text-xs font-bold">{{ group.title }}</h3>
                    <p class="mt-1 text-sm">{{ group.items.join(' / ') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 class="text-sm font-bold uppercase">Background</h2>
              <p class="mt-3">
                I graduated <strong>with full marks</strong> in Digital Design and Communication from
                LABA Brescia, after completing a Bachelor's degree in Modern Literature and
                Communication at Universita Cattolica del Sacro Cuore.
              </p>
              <p class="mt-3">
                My academic background combines communication, visual culture and digital design,
                giving me a multidisciplinary approach that moves naturally between
                <strong>concept, visual direction and implementation</strong>.
              </p>
            </div>
          </div>

          <div v-else>
            <div class="flex gap-5">
              <div class="home-list-height flex h-[calc(100vh-31rem)] min-h-[180px] max-h-[430px] flex-col items-center gap-2 text-[10px] font-bold uppercase opacity-60" aria-hidden="true">
                <span>01</span>
                <div class="relative w-[2px] flex-1 bg-black/20">
                  <div class="absolute left-0 top-0 w-full bg-black transition-[height] duration-150" :style="{ height: `${sideQuestScroll}%` }"></div>
                </div>
                <span>{{ String(sideQuests.length).padStart(2, '0') }}</span>
              </div>

              <div class="home-list-height hide-scrollbar h-[calc(100vh-31rem)] min-h-[180px] max-h-[430px] flex-1 overflow-y-auto" @scroll="updateScroll($event, sideQuestScroll)">
                <ul class="space-y-3 pr-3 tracking-tight">
                  <li v-for="sideQuest in sideQuests" :key="sideQuest.slug">
                    <RouterLink class="block cursor-pointer py-1" :to="`/side-quests/${sideQuest.slug}`">
                      <span class="home-project-title block text-2xl font-semibold">
                        <ScrambleTitle :text="sideQuest.title" />
                      </span>
                      <span class="home-project-subtitle mt-1 block text-xs font-semibold uppercase tracking-normal opacity-55">
                        {{ sideQuest.summary }}
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
