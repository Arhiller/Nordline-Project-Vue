<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { DatePicker } from 'primevue'
import { openModal } from '@/assets/scripts/modal';
import { loadCities } from '@/assets/scripts/dataProvider';
import * as Model from '@/assets/models'


const citiesList = ref<Model.Cities[]>([])

async function fetchCities() {
  citiesList.value = await loadCities()
  console.log(citiesList.value)
}

onMounted(() => {
  fetchCities()
})

</script>

<template>
  <div class="order-bar">
    <input list="data-list-from" placeholder="Откуда">
    <datalist id="data-list-from">
      <option v-for="city in citiesList" :key="city.id">{{ city.name}} — {{city.country}}</option>
    </datalist>

    <input list="data-list-to" placeholder="Куда">
    <datalist id="data-list-to">
      <option v-for="city in citiesList" :key="city.id">{{ city.name}} — {{city.country}}</option>
    </datalist>

    <DatePicker dateFormat="dd.mm.yy" placeholder="Когда" />
    <button @click="openModal('buy')">Купить</button>
  </div>
</template>

<style scoped>
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
</style>