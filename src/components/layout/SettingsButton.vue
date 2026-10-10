<script setup lang="ts">
import { openModal } from '@/assets/scripts/modal';
</script>

<template>
  <button class="settings-button" @click="openModal('settings')" aria-label="Настройки">
    <span class="gear-icon"></span>
  </button>
</template>

<style scoped>
.settings-button {
  grid-row: 1;
  grid-column: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  padding: 0;

  background: transparent;
  border: none;
  border-radius: 50%;

  cursor: pointer;

  transition: all 0.25s ease;
}

.gear-icon {
  display: inline-block;
  width: 32px;
  height: 32px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23dbe5ef' stroke='%231e2530' stroke-width='1.5' stroke-linejoin='round' d='M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.5.5 0 0 0 .12-.61l-1.92-3.32a.5.5 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.5.5 0 0 0-.5-.43h-3.84a.5.5 0 0 0-.5.43l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.5.5 0 0 0-.59.22L2.64 8.87a.5.5 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.5.5 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.43.5.43h3.84c.25 0 .45-.19.5-.43l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.5.5 0 0 0-.12-.61l-2.03-1.58z'/%3E%3Ccircle cx='12' cy='12' r='3' fill='%23faf6ee' stroke='%231e2530' stroke-width='1.5'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  transition: transform 0.4s ease-out;
}

.settings-button:hover .gear-icon {
  transform: rotate(90deg);
}
</style>