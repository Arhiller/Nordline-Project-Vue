<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'switch-to-register'): void
}>()
</script>

<template>
  <div class="modal-window">
    <div class="close-zone-modal">
      <div @click="emit('close')">X</div>
    </div>
    <div class="input-zone-modal">
      <input type="text" placeholder="Логин">
      <input type="password" placeholder="Пароль">
      <input type="text" placeholder="Телефон">
    </div>
    <div class="button-zone-modal">
      <button>Войти</button>
      <button @click="emit('switch-to-register')">Зарегистрироваться</button>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/style/modal-base.css';
</style>