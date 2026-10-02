<script setup lang="ts">
import { DatePicker } from 'primevue';
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
</script>

<template>
    <div class="grid-container">
            <div class="head-bar">
                <h1>Nordline</h1>
            </div>
            <div class="account-zone">
                <button id="register-button">Зарегистрироваться</button>
                <button id="enter-button">Войти</button>
            </div>
            <div class="order-bar">
                <input list="data-list" placeholder="Откуда">
                <datalist id="data-list">

                </datalist>
                <input list="data-list" placeholder="Куда">
                <datalist id="data-list">

                </datalist>
                <DatePicker dateFormat="dd.mm.yy"></DatePicker>
                
                <input>
                <datalist id="data-list">

                </datalist>
                <button>Купить</button>
            </div>
            <div class="advertisment-bar">
                <div class="advertisment-item">

                </div>
                 <div class="advertisment-item">

                </div>
                 <div class="advertisment-item">

                </div>
            </div>
            <div class="marketing-bar">

            </div>
        </div>
</template>

<style scoped>
* {
  user-select: none;
  font-family: Georgia, 'Times New Roman', Times, serif;
  box-sizing: border-box;
}

:global(:root) {
  --bg-color: #fdf6ec;
  --surface-color: #ffffff;
  --surface-alt: #fdfaf4;
  --text-color: #4a4a4a;
  --text-muted: #8a8a8a;

  --accent-color: #a8d5ba;
  --accent-hover: #8dc4a3;
  --accent-2: #ffd6a5;
  --accent-2-hover: #ffc477;

  --tile-1-start: #e8f3ec;
  --tile-2-start: #ffeeda;
  --tile-3-start: #e6e9f7;

  --dark-panel: #3f3d56;
  --border-color: #e6dfd3;

  --shadow-soft: 0 6px 18px rgba(180, 160, 140, 0.15);
  --shadow-hover: 0 10px 24px rgba(180, 160, 140, 0.28);
  --shadow-focus: 0 0 0 4px rgba(168, 213, 186, 0.35);

  --radius-lg: 24px;
  --radius-md: 16px;
  --radius-sm: 12px;

  --button-hover-color: #e8f3ec;
  --border-style: 2px solid var(--border-color);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10% auto auto auto;
  gap: 20px;
  padding: 24px;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  background: var(--bg-color);
  color: var(--text-color);
}

.head-bar {
  grid-row: 1;
  grid-column: 2 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.head-bar h1 {
  font-size: 40px;
  letter-spacing: 3px;
  padding: 14px 44px;
  color: var(--text-color);
  background: var(--surface-color);
  border: var(--border-style);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}

.account-zone {
  grid-row: 1;
  grid-column: 4;
  justify-self: end;
  align-self: start;
  z-index: 2;

  display: flex;
  gap: 8px;
  padding: 10px;

  background: var(--surface-color);
  border: var(--border-style);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}

.account-zone button {
  padding: 10px 16px;
  font-family: inherit;
  font-size: 16px;
  color: var(--text-color);
  background: var(--accent-color);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.4s ease;
}

.account-zone button:hover {
  background: var(--accent-hover);
  transform: scale(1.05);
  box-shadow: var(--shadow-hover);
}

.account-zone button:active {
  transform: scale(0.95);
}

.order-bar {
  grid-row: 2;
  grid-column: 1 / -1;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  padding: 18px 24px;

  background: var(--surface-color);
  border: var(--border-style);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  font-size: 20px;
}

.order-bar * {
  font-size: 16px;
}

.order-bar input {
  flex: 1 1 0;
  min-width: 80px;
  height: 42px;
  padding: 0 14px;

  font-family: inherit;
  font-size: 16px;
  color: var(--text-color);
  background: var(--surface-alt);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-sm);
  outline: none;
  transition: all 0.3s ease;
}

.order-bar input::placeholder {
  color: var(--text-muted);
}

.order-bar input:focus {
  background: var(--surface-color);
  border-color: var(--accent-color);
  box-shadow: var(--shadow-focus);
}

.order-bar button {
  flex: 0 0 auto;
  height: 42px;
  padding: 0 22px;

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

.order-bar button:hover {
  background: var(--accent-2-hover);
  transform: scale(1.05);
  box-shadow: var(--shadow-hover);
}

.order-bar button:active {
  transform: scale(0.95);
}

.advertisment-bar {
  grid-row: 3;
  grid-column: 1 / -1;

  display: flex;
  gap: 20px;
  width: 100%;
}

.advertisment-item {
  flex: 1;
  min-height: 200px;

  background: var(--surface-color);
  border: var(--border-style);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.advertisment-item:nth-child(1) {
  background: linear-gradient(135deg, var(--tile-1-start), var(--surface-color));
}

.advertisment-item:nth-child(2) {
  background: linear-gradient(135deg, var(--tile-2-start), var(--surface-color));
}

.advertisment-item:nth-child(3) {
  background: linear-gradient(135deg, var(--tile-3-start), var(--surface-color));
}

.advertisment-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.marketing-bar {
  grid-row: 4;
  grid-column: 1 / -1;

  min-height: 110px;
  width: 100%;

  background: var(--dark-panel);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}
</style>
