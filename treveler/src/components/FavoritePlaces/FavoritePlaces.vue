<script setup>
import { isVNode } from 'vue'
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'

import { ref, reactive } from 'vue'
const counter = ref(0)

const increment = () => {
  counter.value += 1
}
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери ({{ counter }})</div>
    <FavoritePlace v-for="n in 4" :keyÄ="n" />
    <IButton class="w-full mt-10" variant="gradient" @click="increment">Додати маркер</IButton>
  </div>
</template>
