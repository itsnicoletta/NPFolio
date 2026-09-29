<script setup>
import { onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  shift: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const output = ref(props.text)
let interval
let timeout

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*/<>_+-'

function randomize() {
  output.value = props.text
    .split('')
    .map((char) => (char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]))
    .join('')
}

function stop() {
  clearInterval(interval)
  clearTimeout(timeout)
  output.value = props.text
}

function scramble() {
  if (props.disabled) return

  stop()
  randomize()
  interval = setInterval(randomize, 38)
  timeout = setTimeout(stop, 420)
}

watch(() => props.text, stop)
onUnmounted(stop)
</script>

<template>
  <span
    class="inline-block transition-transform duration-200"
    :class="shift ? 'hover:translate-x-1' : ''"
    @mouseenter="scramble"
    @pointerdown="scramble"
    @focus="scramble"
  >
    {{ output }}
  </span>
</template>
