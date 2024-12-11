<script setup>
import { reactive, watch } from 'vue'
import IInput from '../../IInput/IInput.vue'

import IButton from '../../IButton/IButton.vue'
const emit = defineEmits(['submit'])
const userData = reactive({
  email: '',
  password: ''
})
</script>
<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput
      class="mb-4"
      label="Електронна пошта"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <IInput
      class="mb-4"
      label="Пароль"
      type="password"
      @focus="() => console.log('focused')"
      v-model="userData.password"
    />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Увійти</IButton>
  </form>
</template>
