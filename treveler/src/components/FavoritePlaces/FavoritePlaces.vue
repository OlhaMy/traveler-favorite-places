<script setup>
import { isVNode } from 'vue'
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'

import { ref, reactive } from 'vue'
const buttonVariant = ref('gradient')

const changeButtonVariant = () => {
  buttonVariant.value = buttonVariant.value === 'gradient' ? 'outlined' : 'gradient'
}
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери ({{ counter }})</div>
    <FavoritePlace v-for="n in 4" :key="n" />
    <IButton class="w-full mt-10" :variant="buttonVariant" @click="changeButtonVariant">
      Додати маркер
    </IButton>
  </div>
</template>
