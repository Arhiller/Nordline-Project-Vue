<script setup lang="ts">
import {onMounted, ref} from 'vue'
import * as Model from '@/assets/models';
import { loadReviews } from '@/assets/scripts/dataProvider';
import ratingStar from './ratingStar.vue';
import RatingStar from './ratingStar.vue';

const reviewsList = ref<Model.Reviews[]>([])

async function fetchRevies() {
  reviewsList.value = await loadReviews()
}

function formatDate(date: any) {
  const dateObj = new Date(date);
  
  return dateObj.toLocaleString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

onMounted(() => {
  fetchRevies()
})

</script>
<template>
  <div class="marketing-bar" data-aos="fade-up" data-aos-once="false">
    <div class="review-card" v-for="review in reviewsList" :key="review.fullName">
            <div class="user-container">
                <img class="avatar" src="../../assets/Images/avatar.png" alt="Avatar">
                <div class="user-info-meta">
                    <div class="user-name-row">
                        <span class="username">{{ review.fullName }}</span>
                        <span class="review-date">{{ formatDate( review.createdAt) }}</span>
                    </div>
                    <RatingStar :rating="review.rating" />
                </div>
            </div>
            <div class="text-review">
                {{ review.comment }}
            </div>
        </div>
  </div>
</template>

<style scoped>
.marketing-bar {
  width: 100%;
  padding: 0 24px 24px;
  min-height: 100px;

  background: var(--dark-panel);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);

  display: grid;
  gap: 20px;
  padding: 40px;
}
.review-card {
  display: flex;
  flex-direction: column;
  gap: 16px; 
  
  background-color: #ffffff; 
  border-radius: 12px; 
  padding: 24px;
  
  width: 100%; 
  height: auto;
  box-sizing: border-box;
  
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.review-card:hover{
  transform: scale(1.02);
}

.user-container {
  display: flex;
  align-items: center; 
  gap: 16px; 
}

.user-info-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
}

.user-name-row {
  display: flex;
  align-items: baseline;
  gap: 12px; 
  flex-wrap: wrap;
}

.username {
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
}

.review-date {
  font-family: sans-serif;
  font-size: 13px;
  color: #9ca3af;
}

.avatar {
  width: 56px;  
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e5e7eb;
}

.text-review {
  font-family: sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: #4b5563;
}
</style>