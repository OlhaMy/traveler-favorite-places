<script setup>
import IInput from '../../IInput/IInput.vue'
import IButton from '../../IButton/IButton.vue'

const emit = defineEmits(['submit'])
</script>
<template>
  <form
    @submit.prevent="emit('submit', { name: 'name' })"
    class="max-w-[500px] w-full bg-white p-10 rounded-2xl"
  >
    <IInput class="mb-4" label="Повне імʼя" />
    <IInput class="mb-4" label="Електронна пошта" placeholder="email@gmail.com" />
    <IInput class="mb-4" label="Пароль" type="password" @focus="() => console.log('focused')" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Створити аккаунт</IButton>
  </form>
</template>
