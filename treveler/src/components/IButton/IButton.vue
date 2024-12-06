<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  default: 'primary',
  type: String,
  validator: (value) => {
    return ['primary', 'gradient', 'outlined'].includes(value)
  },
})
const bgStyles =
  props.variant === 'gradient' ? 'bg-gradient-to-r from-[#ffa279] to-[#f3743d]' : 'bg-[#ffa279]'
</script>

<template>
  <button class="btn rounded-xl py-3 px-10 text-white font-bold -tracking-wide" :class="bgStyles">
    <slot></slot>
  </button>
</template>
