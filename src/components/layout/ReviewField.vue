<script setup lang="ts">
import { ref } from 'vue';
import { user } from '@/assets/scripts/auth';
import { fetchReview, publishReview } from '@/assets/scripts/dataProvider';

interface Review {
    userId: number,
    rating: number,
    comment: string
}

const rating = ref<number>(0)
const hoveringRating = ref<number>(0)
const textReview = ref('')


const selectRating = (value: number): void => {
    rating.value = value
}

async function sendReview() {
  if (!user.value || !user.value.id) {
    alert("Пожалуйста, сначала авторизуйтесь!");
    return;
  }

  if(!rating.value){
    alert("Поставьте оценку")
    return
  }

  if(!textReview.value){
    alert("Введите текст отзыва")
    return
  }

  const newReview: Review = {
    userId: user.value.id,
    rating: rating.value,
    comment: textReview.value
  }

  await publishReview(newReview)
  
  await fetchReview()

  rating.value = 0;
  textReview.value = '';
}
</script>

<template>
    <form data-aos="fade-up" data-aos-once="false" class="review-form"
    @submit.prevent>
    <h3 style="margin-top: 0; color: var(--review-text-primary);">Оставить отзыв</h3>
    
    <div class="rating-stars" style="margin-bottom: 15px;" @mouseleave="hoveringRating = 0">
      <span v-for="star in 5" :key="star" class="star" :class="{'is-active': star <= (hoveringRating || rating)}"
      @mouseenter="hoveringRating = star" @click="selectRating(star)">★</span>
    </div>

    <div style="margin-bottom: 15px;">
      <textarea v-model="textReview"
        rows="4" 
        placeholder="Оставляя отзыв, вы соглашаетесь соблюдать правила компании, условия пользовательского соглашения и политику конфиденциальности." 
        required
      ></textarea>
    </div>

    <div style="text-align: right;">
      <button @click="sendReview" type="submit" class="btn-primary">
        Отправить отзыв
      </button>
    </div>
  </form>
</template>

<style scoped>

div textarea{
  background: var(--review-bg-main);
  border: 2px solid var(--review-border-input);
  width: 100%; 
  box-sizing: none;
  border-radius: 4px; 
  padding: 10px; 
  border-radius: 4px;
  resize: vertical; 
  font-family: inherit;
}

.review-form{
  background: var(--review-bg-main);
  margin: 10px;
  padding: 5px;
  color: var(--review-text-primary);
  border-radius: 10px;
}
.rating-stars {
  display: inline-flex;
  gap: 4px;
  cursor: pointer;
  font-size: 24px;
}

.star {
  color: var(--review-star-empty);
  transition: color 0.1s ease;
  font-size: 24px; 
  cursor: pointer;
  display: inline-block;
}

.star.is-active {
  color: var(--review-star-filled);
}

.btn-primary{
  color: var(--review-btn-text);
  margin: 10px;
  padding: 5px;
  height: 25%;
  width: 10%;
  background: var(--review-btn-bg);
  transition: all 0.3s ease-in-out;
  border: none;
}

.btn-primary:hover{
  transform: scale(1.05);
  background: var(--review-btn-hover);
}

.btn-primary:active{
  transform: scale(0.95);
}
</style>