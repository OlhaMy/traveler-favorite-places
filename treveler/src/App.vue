<script setup>
import { ref } from 'vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import IModal from './components/IModal/IModal.vue'
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
  <!-- <HomepageView /> -->
  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlacesVue />
  </div> -->
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
  <IModal v-if="isOpen" @close="closeModal">Hello modal</IModal>
</template>
