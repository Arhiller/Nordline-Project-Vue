<script setup lang="ts">
import { closeModal, switchToRegister } from '@/assets/scripts/modal';
</script>

<template>
  <div class="modal-window">
    <div class="close-zone-modal">
      <div @click="closeModal">X</div>
    </div>
    <div class="input-zone-modal">
      <input type="text" placeholder="Логин">
      <input type="password" placeholder="Пароль">
      <input type="text" placeholder="Телефон">
    </div>
    <div class="button-zone-modal">
      <button>Войти</button>
      <button @click="switchToRegister">Зарегистрироваться</button>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/style/modal-base.css';
</style>