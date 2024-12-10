<script setup>
import { ref } from 'vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import createNewPlaceModal from './components/createNewPlaceModal/createNewPlaceModal.vue'
// import HomepageView from './views/HomepageView.vue'
// import FavoritePlacesVue from './components/FavoritePlaces/FavoritePlaces.vue'

const isOpen = ref(true)

const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <button @click="openModal">Click me</button>
  <!-- <HomepageView /> -->
  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlacesVue />
  </div> -->
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />

  <createNewPlaceModal :is-open="isOpen" @close="closeModal" @submit="console.log" />
</template>
