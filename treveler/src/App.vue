<script setup>
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
// import HomepageView from './views/HomepageView.vue'
// import FavoritePlacesVue from './components/FavoritePlaces/FavoritePlaces.vue'
</script>

<template>
  <!-- <HomepageView /> -->
  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlacesVue />
  </div> -->
  <RegistrationForm @submit="console.log" />
</template>
