<script setup>
import ScrambleTitle from './components/ScrambleTitle.vue'
</script>

<template>
  <main
    class="min-h-screen select-none bg-white px-10 pb-5 pt-20 text-black sm:px-16 lg:px-24"
    @copy.prevent
    @cut.prevent
    @contextmenu.prevent
  >
    <header class="fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-white px-10 py-5 sm:px-16 lg:px-24">
      <RouterLink class="text-2xl font-semibold tracking-tight" to="/">NPFolio</RouterLink>
      <div class="flex items-center gap-4">
        <a
          class="cursor-pointer text-sm font-semibold"
          href="https://www.linkedin.com/in/nicoletta-pelosi-811a4a285"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ScrambleTitle text="linkedin" :shift="false" />
        </a>
        <a
          class="cursor-pointer rounded-full border border-black bg-black px-3 py-1 text-sm font-semibold text-white"
          href="mailto:pelosinicoletta@gmail.com"
        >
          <ScrambleTitle text="contact me" :shift="false" />
        </a>
      </div>
    </header>

    <RouterView />
  </main>
</template>
