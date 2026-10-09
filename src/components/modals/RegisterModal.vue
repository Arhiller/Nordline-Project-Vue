<script setup lang="ts">
const emit = defineEmits<{ (e: 'close'): void }>()
</script>

<template>
  <div class="modal-window">
    <div class="close-zone-modal">
      <div @click="emit('close')">X</div>
    </div>
    <div class="input-zone-modal">
      <input type="text" placeholder="Логин">
      <input type="password" placeholder="Пароль">
      <input type="password" placeholder="Повторить пароль">
      <input type="text" placeholder="Телефон">
      <input type="email" placeholder="Email">
    </div>
    <div class="button-zone-modal">
      <button>Зарегистрироваться</button>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/style/modal-base.css';
</style>