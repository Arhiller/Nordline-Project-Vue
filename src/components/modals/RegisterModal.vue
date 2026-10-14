<script setup lang="ts">
import { closeModal } from '@/assets/scripts/modal';
import { ref } from 'vue';
import {submitData} from '@/assets/scripts/register'

interface RegisterForm {
    email: string,
    password: string,
    copyPassword: string,
    phone: string,
    fullName: string,
    role: "User" | "Admin" | "Manager"
}

const registerData = ref<RegisterForm>({
  email: '',
  password: '',
  copyPassword: '',
  phone: '',
  fullName: '',
  role: 'User'
})


const handleFormSubmit = async () => {
  const success = await submitData(registerData.value);
  
  if (success) {
    closeModal()
  } else {
    console.log("Регистрация не удалась (ошибка валидации или сервера)");
  }
}
</script>

<template>
  <div class="modal-window">
    <div class="close-zone-modal">
      <div @click="closeModal">X</div>
    </div>
    <form @submit.prevent="handleFormSubmit()">
      <div class="input-zone-modal">
        <input type="text" placeholder="Email" v-model="registerData.email">
        <input type="password" placeholder="Пароль" v-model="registerData.password">
        <input type="password" placeholder="Повторить пароль" v-model="registerData.copyPassword">
        <input type="text" placeholder="Телефон" v-model="registerData.phone">
        <input type="text" placeholder="ФИО" v-model="registerData.fullName">
      </div>
      <div class="button-zone-modal">
        <button type="submit">Зарегистрироваться</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import '../../assets/style/modal-base.css';
</style>