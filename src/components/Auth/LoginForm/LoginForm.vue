<script setup>
import { reactive, watch } from 'vue'
import IInput from '../../IInput/IInput.vue'
import FormContainer from '../FormContainer.vue'
import IButton from '../../IButton/IButton.vue'
const emit = defineEmits(['submit'])
const userData = reactive({
  email: '',
  password: '',
})
</script>
<template>
  <FormContainer
    @submit.prevent="emit('submit', toRaw(userData))"
    class="max-w-[500px] w-full bg-white p-10 rounded-2xl"
  >
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
  </FormContainer>
</template>
