<script lang="ts" setup>
import { closeModal } from '@/assets/scripts/modal';
import { getBookingsHistory } from '@/assets/scripts/dataProvider';
import { onMounted } from 'vue';
import { user } from '@/assets/scripts/auth';
import {ref} from 'vue'
import { type BookingsHistory } from '@/assets/scripts/dataProvider';

const buyHistory = ref<BookingsHistory[]>([])
const isLoading = ref(true)

onMounted(async () => {
    if(!user.value?.id){
        alert("Нужно авторизоваться")
        return
    }

    try{
        isLoading.value = true
        buyHistory.value = await getBookingsHistory(user.value.id)
    } catch(error){
        console.log("Ошибка загрузки истории: " + error)
    } finally {
        isLoading.value = false
    }
})

</script>

<template>
    <div class="history-modal">
        <div class="close-zone-modal">
            <div @click="closeModal">X</div>
        </div>
        <div class="history-list">
             <div v-if="isLoading" class="loading-spinner">
                Загрузка истории...
            </div>

            <div class="history-card" v-for="hist in buyHistory" :key="hist.id" v-else-if="buyHistory.length > 0">
                {{ hist.passengerName }} - {{ hist.createdAt }} - {{ hist.price }} - {{ hist.bookingCode }}
            </div>

            <div v-if="buyHistory.length === 0" class="empty-message">
                История покупок пуста.
            </div>
        </div>
    </div>
</template>

<style scoped>
.history-modal {
  display: grid;
  grid-template-rows: 60px auto;

  background-color: var(--bg-color);
  width: 80%;
  max-width: 900px;
  height: 80%;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.close-zone-modal {
  grid-row: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--bg-color); 
  border-bottom: 1px solid var(--border-strong);
  padding: 0 20px;
}

.close-zone-modal div {
  background-color: var(--btn-danger-bg);
  width: 36px;
  height: 36px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  border-radius: 12px;
  transition: all var(--transition-base);
  cursor: pointer;
}

.close-zone-modal div:hover {
  transform: scale(1.05);
}

.history-list {
  grid-row: 2;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 12px;
  overflow-y: auto;
}

.history-list::-webkit-scrollbar {
  display: none;
}

.history-card {
  background-color: var(--bg-card, #ffffff);
  border: 1px solid var(--border-strong);     
  border-radius: 8px;  
  width: 100%;
  min-height: 80px;
  box-sizing: border-box;

  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;

  transition: all var(--transition-base);
}

.history-card:hover {
  background-color: var(--accent-2-hover); 
  border-color: var(--accent-color);  
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.loading-spinner,
.empty-message {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: var(--text-secondary, #888888);
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  flex-grow: 1; 
}
</style>