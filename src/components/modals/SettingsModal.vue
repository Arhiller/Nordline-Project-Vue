<script setup lang="ts">
import { ref } from 'vue'
import {setTheme} from '@/assets/scripts/theme.ts'
import { closeModal } from '@/assets/scripts/modal.ts'

const activeSection = ref<'theme' | 'delete' | null>(null)

function showTheme() {
  activeSection.value = 'theme'
}

function showDelete() {
  activeSection.value = 'delete'
}


</script>

<template>
  <div class="settings-modal">
    <div class="close-zone-modal">
      <div @click="closeModal">X</div>
    </div>

    <div class="left-bar">
      <button @click="showTheme">Внешний вид</button>
      <button @click="showDelete">Удалить аккаунт</button>
    </div>

    <div class="settings-zone">
      <div class="theme-settings" v-if="activeSection === 'theme'">
        <h2>Настройки оформления</h2>
        <button id="light" @click="setTheme('light')">Светлая тема</button>
        <button id="dark" @click="setTheme('dark')">Черная тема</button>
        <button id="system" @click="setTheme('system')">Системная тема</button>
      </div>

      <div class="delete-account" v-if="activeSection === 'delete'">
        <h2>Удаление аккаунта</h2>
        <button>Удалить аккаунт</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* базовые стили окна */
.settings-modal {
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: 10% auto;

  background-color: var(--bg-color);
  width: 80%;
  height: 80%;
}

.settings-modal .close-zone-modal {
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-bottom: 2px solid var(--border-strong);
}

.settings-modal .close-zone-modal div {
  background-color: var(--btn-danger-bg);
  width: 3%;
  height: 60%;
  margin: 5px;
  color: var(--text-on-accent);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: var(--btn-radius);
  transition: all var(--transition-base);
}

.settings-modal .close-zone-modal div:hover {
  transform: scale(1.05);
  background-color: var(--btn-danger-bg-hover);
}

.settings-modal .close-zone-modal div:active {
  transform: scale(0.95);
  background-color: var(--btn-danger-bg-active);
}

.settings-modal .left-bar {
  grid-row: 2;
  grid-column: 1;

  display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 2px solid var(--border-strong);
}

.settings-modal button {
  height: 60px;
  padding: 0 22px;
  margin-top: 20px;
  width: 90%;

  font-family: inherit;
  font-size: 16px;
  color: var(--text-color);
  background: var(--accent-2);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.4s ease;
}

.settings-modal #light {
  background: var(--milk-color);
}

.settings-modal #dark {
  background: black;
  color: white;
}

.settings-modal button:hover {
  background: var(--accent-2-hover);
  transform: scale(1.05);
  box-shadow: var(--shadow-hover);
}

.settings-modal button:active {
  transform: scale(0.95);
}

.settings-modal h2 {
  color: var(--text-color);
}

.settings-zone {
  grid-column: 2;
  grid-row: 2;
  text-align: center;
}
</style>