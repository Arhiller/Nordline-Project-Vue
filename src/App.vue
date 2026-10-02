<script setup lang="ts">
import { DatePicker } from 'primevue';
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const isOpen = ref(false)
const isOpenEnter = ref(false)
const isOpenRegister = ref(false)
const isOpenBuy = ref(false)

function openModalWindow(arg: number) {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = ""
    isOpenEnter.value = false
    isOpenRegister.value = false
    isOpenBuy.value = false
    return
  }

  //1 - EnterWindow
  //2 - RegisterWindow
  //3 - BuyWindow
  const windows: Record<number, { value: boolean }> = {
    1: isOpenEnter,
    2: isOpenRegister,
    3: isOpenBuy
  }

  const target = windows[arg]
  if (target) {
    target.value = !target.value
  }
}

</script>

<template>
  <div class="modal-overlay" v-if="isOpen">
    <div class="modal-window" v-if="isOpenEnter">
      <div class="close-zone-modal">
        <div @click="openModalWindow(1)">X</div>
      </div>
      <div class="input-zone-modal">

      </div>
    </div>
    <div class="modal-window" v-if="isOpenRegister">
      <div class="close-zone-modal">
        <div @click="openModalWindow(2)">X</div>
      </div>
      <div class="input-zone-modal">

      </div>
    </div>
    <div class="modal-window" v-if="isOpenBuy">
      <div class="close-zone-modal">
        <div @click="openModalWindow(3)">X</div>
      </div>
      <div class="input-zone-modal">

      </div>
    </div>
  </div>
  <div class="grid-container">
    <div class="head-bar">
      <h1>Nordline</h1>
    </div>
    <div class="account-zone">
      <button id="register-button" @click="openModalWindow(2)">Зарегистрироваться</button>
      <button id="enter-button" @click="openModalWindow(1)">Войти</button>
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
      <button @click="openModalWindow(3)">Купить</button>
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

  /* =========================================================
     ФОН (доп. оттенки)
     ========================================================= */
  --bg-soft: #fdfaf4;
  /* чуть светлее основного */
  --bg-base: #fdf6ec;
  /* = bg-color, для единообразия */
  --bg-strong: #f5ead9;
  /* заметно темнее, для чередования полос */
  --bg-muted: #efe4d3;
  /* самый тёмный из светлых, для разделителей */

  /* =========================================================
     ПОВЕРХНОСТИ (карточки, панели)
     ========================================================= */
  --surface-soft: #ffffff;
  /* = surface-color */
  --surface-base: #fdfaf4;
  /* = surface-alt */
  --surface-strong: #f7f1e6;
  /* для вложенных блоков, полей */
  --surface-sunken: #f0e8da;
  /* «утопленная» — фон инпутов в покое */

  /* =========================================================
     ГРАНИЦЫ — три градации + акцентные
     ========================================================= */
  --border-soft: #efe7d9;
  /* едва видимая, для разделителей */
  --border-base: #e6dfd3;
  /* = border-color, основная */
  --border-strong: #cfc4b2;
  /* заметная, для активных элементов */

  --border-focus: #a8d5ba;
  /* рамка при фокусе (= accent-color) */
  --border-invalid: #e8a5a5;
  /* ошибка, мягкий красный */

  /* Готовые shorthand-значения */
  --border-style-soft: 1px solid var(--border-soft);
  --border-style-base: 2px solid var(--border-base);
  --border-style-strong: 2px solid var(--border-strong);

  /* =========================================================
     ТЕКСТ — три градации + служебные
     ========================================================= */
  --text-soft: #b0b0b0;
  /* самый бледный: подсказки, disabled */
  --text-muted: #8a8a8a;
  /* = из базы, для плейсхолдеров */
  --text-base: #4a4a4a;
  /* = text-color, основной */
  --text-strong: #2f2d2a;
  /* заголовки, акценты */
  --text-on-accent: #2f2d2a;
  /* текст на цветных кнопках */

  --text-link: #6fae8c;
  /* ссылки в тексте */
  --text-link-hover: #4f8f6d;
  /* ссылки при наведении */

  /* =========================================================
     ИНПУТЫ
     ========================================================= */
  --input-bg: #fdfaf4;
  --input-bg-hover: #ffffff;
  --input-bg-focus: #ffffff;
  --input-bg-disabled: #f0e8da;

  --input-border: var(--border-base);
  --input-border-hover: var(--border-strong);
  --input-border-focus: var(--accent-color);

  --input-text: var(--text-base);
  --input-placeholder: var(--text-muted);
  --input-text-disabled: var(--text-soft);

  --input-shadow-focus: 0 0 0 4px rgba(168, 213, 186, 0.35);

  /* =========================================================
     КНОПКИ
     ========================================================= */
  /* Основная (зелёная) */
  --btn-primary-bg: #a8d5ba;
  --btn-primary-bg-hover: #8dc4a3;
  --btn-primary-bg-active: #75b28e;
  --btn-primary-text: #2f2d2a;
  --btn-primary-border: transparent;

  /* Вторичная (персиковая) */
  --btn-secondary-bg: #ffd6a5;
  --btn-secondary-bg-hover: #ffc477;
  --btn-secondary-bg-active: #f5b25e;
  --btn-secondary-text: #2f2d2a;

  /* Нейтральная (тихая) */
  --btn-neutral-bg: #f7f1e6;
  --btn-neutral-bg-hover: #efe7d9;
  --btn-neutral-bg-active: #e6dfd3;
  --btn-neutral-text: #4a4a4a;

  /* Отключённая */
  --btn-disabled-bg: #efe7d9;
  --btn-disabled-text: #b0b0b0;

  --btn-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
  --btn-shadow-hover: 0 6px 14px rgba(180, 160, 140, 0.28);

  /* =========================================================
     СОСТОЯНИЯ (статусы)
     ========================================================= */
  --state-success-bg: #e8f3ec;
  --state-success-text: #4f8f6d;
  --state-success-border: #a8d5ba;

  --state-warning-bg: #ffeeda;
  --state-warning-text: #b57f2f;
  --state-warning-border: #ffd6a5;

  --state-error-bg: #f8e0e0;
  --state-error-text: #a82626;
  --state-error-border: #e8a5a5;

  --state-info-bg: #e6e9f7;
  --state-info-text: #4a5578;
  --state-info-border: #b7c0e0;

  /* =========================================================
     РАЗНОЕ
     ========================================================= */
  --divider-color: var(--border-soft);
  --overlay-color: rgba(63, 61, 86, 0.35);
  /* затемнение под модалками */
  --scrollbar-thumb: #d9cfbe;
  --scrollbar-track: #f5ead9;

  --transition-fast: 0.2s ease;
  --transition-base: 0.4s ease;
  --transition-slow: 0.6s ease;

  /* =========================================================
     КНОПКИ — расширенный набор (доп. к базовым btn-*)
     ========================================================= */

  /* Опасное действие (закрытие, удаление, отмена) */
  --btn-danger-bg: #f2b8b8;
  --btn-danger-bg-hover: #e79c9c;
  --btn-danger-bg-active: #d97f7f;
  --btn-danger-text: #4a1f1f;

  /* Успех (подтвердить, сохранить) */
  --btn-success-bg: #b8e0c4;
  --btn-success-bg-hover: #9ed1ae;
  --btn-success-bg-active: #82c096;
  --btn-success-text: #24402f;

  /* Предупреждение (осторожно, внимание) */
  --btn-warning-bg: #ffe0a8;
  --btn-warning-bg-hover: #f7cf85;
  --btn-warning-bg-active: #eabd66;
  --btn-warning-text: #4a3a17;

  /* Информация / нейтральный акцент */
  --btn-info-bg: #c5cdec;
  --btn-info-bg-hover: #aeb8e0;
  --btn-info-bg-active: #97a2d4;
  --btn-info-text: #2a2f4a;

  /* «Призрачная» (ghost) — только контур, без фона */
  --btn-ghost-bg: transparent;
  --btn-ghost-bg-hover: #f0e8da;
  --btn-ghost-bg-active: #e6dfd3;
  --btn-ghost-text: #4a4a4a;
  --btn-ghost-border: #cfc4b2;

  /* Круглая иконочная кнопка (закрытие, крестик) */
  --icon-btn-size: 32px;
  --icon-btn-radius: 50%;
  --icon-btn-bg: #f0e8da;
  --icon-btn-bg-hover: #e6dfd3;
  --icon-btn-bg-active: #d9cfbe;
  --icon-btn-text: #4a4a4a;

  /* Состояния у кнопок */
  --btn-disabled-opacity: 0.55;
  --btn-focus-ring-color: rgba(168, 213, 186, 0.45);

  /* Общие размеры */
  --btn-padding-y: 10px;
  --btn-padding-x: 18px;
  --btn-radius: var(--radius-sm);
  --btn-font-size: 16px;
  --btn-font-size-sm: 14px;
  --btn-font-size-lg: 18px;
}

.modal-window .close-zone-modal {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-bottom: 2px solid var(--border-strong);
}

.modal-window .close-zone-modal div {
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

.modal-window .close-zone-modal div:hover {
  transform: scale(1.05);
  background-color: var(--btn-danger-bg-hover);
}

.modal-window .close-zone-modal div:active {
  transform: scale(0.95);
  background-color: var(--btn-danger-bg-active);
}

.modal-window {
  display: grid;
  grid-template-rows: 10% auto;

  background-color: var(--bg-color);
  width: 80%;
  height: 80%;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10% auto auto repeat(4, 250px);
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
  grid-row: 5 / -1;
  grid-column: 1 / -1;

  height: 100%;
  width: 100%;

  background: var(--dark-panel);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}
</style>
