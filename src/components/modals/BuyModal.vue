<script setup lang="ts">
import { closeModal } from '@/assets/scripts/modal';
</script>

<template>
  <div class="modal-window">
    <div class="close-zone-modal">
      <div @click="closeModal()">X</div>
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
        <button @click="closeModal">Отмена</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/style/modal-base.css';
</style>