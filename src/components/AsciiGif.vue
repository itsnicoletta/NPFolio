<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  width: {
    type: Number,
    default: 85,
  },
  speed: {
    type: Number,
    default: 750,
  },
  threshold: {
    type: Number,
    default: 205,
  },
  yoyo: {
    type: Boolean,
    default: false,
  },
  fontSize: {
    type: [Number, String],
    default: 9,
  },
  lineHeight: {
    type: [Number, String],
    default: 8,
  },
})

const ascii = ref('')
const frames = []
let currentFrame = 0
let interval

const chars =
  " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$░▒▓█"

function imageToAscii(src) {
  return new Promise((resolve) => {
    const image = new Image()

    image.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const ratio = image.height / image.width
      const height = Math.round(props.width * ratio * 0.5)

      canvas.width = props.width
      canvas.height = height

      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data
      let output = ''

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const i = (y * canvas.width + x) * 4
          const brightness = pixels[i] * 0.299 + pixels[i + 1] * 0.587 + pixels[i + 2] * 0.114

          if (brightness > props.threshold) {
            output += ' '
            continue
          }

          const darkness = 1 - brightness / props.threshold
          output += chars[Math.min(chars.length - 1, Math.floor(darkness * chars.length))]
        }

        output += '\n'
      }

      resolve(output)
    }

    image.onerror = () => resolve('')
    image.src = src
  })
}

onMounted(async () => {
  const images = props.yoyo ? [...props.images, ...props.images.slice(1, -1).reverse()] : props.images

  for (const image of images) {
    const frame = await imageToAscii(image)
    if (frame) frames.push(frame)
  }

  ascii.value = frames[0] || ''

  if (frames.length > 1) {
    interval = setInterval(() => {
      currentFrame = (currentFrame + 1) % frames.length
      ascii.value = frames[currentFrame]
    }, props.speed)
  }
})

onUnmounted(() => {
  clearInterval(interval)
})

function cssLength(value) {
  return typeof value === 'number' ? `${value}px` : value
}
</script>

<template>
  <pre
    class="m-0 overflow-visible whitespace-pre font-mono select-none"
    :style="{ fontSize: cssLength(fontSize), lineHeight: cssLength(lineHeight) }"
    aria-hidden="true"
  >{{ ascii }}</pre>
</template>
