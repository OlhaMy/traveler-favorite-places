<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import FavoritePlacesVue from './components/FavoritePlaces/FavoritePlaces.vue'
import { mapSettings } from './map/settings.js'
import MarkerIcon from './components/icons/MarkerIcon.vue'
import { ref } from 'vue'

const favoritePlaces = [
  {
    id: 1,
    title: 'new place 1',
    description: 'super description 1',
    img: '',
    lngLat: [30.523333, 50.490001]
  },
  {
    id: 2,
    title: 'new place 2',
    description: 'super description 2',
    img: '',
    lngLat: [30.523333, 50.450001]
  }
]

const activeId = ref(null)
const changeActiveId = (id) => {
  activeId.value = id
}
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-screen w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlacesVue :items="favoritePlaces" :active-id="activeId" />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
      >
        <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lngLat="place.lngLat">
          <button @click="changeActiveId(place.id)"><MarkerIcon class="h-8 w-8" /></button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
