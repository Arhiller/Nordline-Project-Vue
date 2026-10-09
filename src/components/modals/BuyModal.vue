<script setup lang="ts">
const emit = defineEmits<{ (e: 'close'): void }>()
</script>

<template>
  <div class="modal-window">
    <div class="close-zone-modal">
      <div @click="emit('close')">X</div>
    </div>
    <div class="input-zone-modal modal--register">
      <h2 style="color: var(--text-color)">Оформление покупки</h2>
      <input type="text" placeholder="Паспортные данные">
      <input type="text" placeholder="СНИЛС">
      <input type="text" placeholder="Номер карты">
      <div class="card-description">
        <input type="text" placeholder="Срок действия ММ/ГГ">
        <input type="text" placeholder="CVC/CVV">
      </div>
      <p>Итого к оплате: X XXX руб.</p>
      <div id="buy-button-zone">
        <button>Оплатить</button>
        <button @click="emit('close')">Отмена</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/style/modal-base.css';
</style>