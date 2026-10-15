<script setup lang="ts">
import { closeModal, switchToRegister } from '@/assets/scripts/modal';
import { ref } from 'vue';
import { loginUser } from '@/assets/scripts/dataProvider';
import { useRouter } from 'vue-router';

const router = useRouter()

export interface LoginRequest {
  login: string;
  password:  string;
}

export interface LoginResponse {
  token: string;
  role: string;
}

const login = ref("")
const password = ref("")

const isLoading = ref<boolean>(false);
const errorMessage = ref<string | null>(null)
  
async function goLogin(){
  isLoading.value = true
  errorMessage.value = null

  const loginData: LoginRequest = {
    login: login.value,
    password: password.value
  }

  const isSuccess = await loginUser(loginData)
  isLoading.value = false

  if(isSuccess){
    closeModal()

    router.push("/main")
  } else{
    errorMessage.value = "Неверный логин или пароль"

    setTimeout(() => {
      errorMessage.value = null
    }, 2000)
  }
}



</script>

<template>
  <div class="modal-window">
    <div class="close-zone-modal">
      <div @click="closeModal">X</div>
    </div>
    <form class="input-zone-modal" @submit.prevent @keyup.enter="goLogin">
        <input type="text" placeholder="Логин" v-model="login">
        <input type="password" placeholder="Пароль" v-model="password">
    </form>
    <div class="button-zone-modal">
      <p v-if="errorMessage" style="color: red; text-align: center;">{{ errorMessage }}</p>
      <button @click="goLogin">Войти</button>
      <button @click="switchToRegister">Зарегистрироваться</button>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/style/modal-base.css';
</style>