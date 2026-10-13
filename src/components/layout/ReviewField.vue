<script setup lang="ts">
import { ref } from 'vue';

const rating = ref<number>(0)
const hoveringRating = ref<number>(0)

const selectRating = (value: number): void => {
    rating.value = value
    console.log(rating.value)
}
</script>

<template>
    <form data-aos="fade-up" data-aos-once="false" class="review-form" style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <h3 style="margin-top: 0; color: #2D2C42;">Оставить отзыв</h3>
    
    <div class="rating-stars" style="margin-bottom: 15px;" @mouseleave="hoveringRating = 0">
      <span v-for="star in 5" :key="star" class="star" :class="{'is-active': star <= (hoveringRating || rating)}"
      @mouseenter="hoveringRating = star" @click="selectRating(star)">★</span>
    </div>

    <div style="margin-bottom: 15px;">
      <textarea 
        rows="4" 
        placeholder="Оставляя отзыв, вы соглашаетесь соблюдать правила компании, условия пользовательского соглашения и политику конфиденциальности." 
        required
        style="width: 100%; box-sizing: border-radius; padding: 10px; border: 1px solid #ccc; border-radius: 4px; resize: vertical; font-family: inherit;"
      ></textarea>
    </div>

    <div style="text-align: right;">
      <button type="submit" style="background-color: #2D2C42; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">
        Отправить отзыв
      </button>
    </div>
  </form>
</template>

<style scoped>

.rating-stars {
  display: inline-flex;
  gap: 4px;
  cursor: pointer;
  font-size: 24px;
}

.star {
  color: #ccc;
  transition: color 0.1s ease;
  font-size: 24px; 
  cursor: pointer;
  display: inline-block;
}

.star.is-active {
  color: #ffcc00;
}
</style>