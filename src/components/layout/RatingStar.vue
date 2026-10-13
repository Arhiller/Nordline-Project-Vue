<script setup lang="ts">
interface Props{
    rating: number
}

withDefaults(defineProps<Props>(), {
    rating: 0
})
</script>

<template>
    <div class="rating-stars">
        <span v-for="star in 5" :key="star" class="star" :class="{'star--filled': star <= rating}">★</span>
    </div>
</template>

<style scoped>
.rating-stars {
  display: flex;
  gap: 4px;
  font-size: 24px; /* Размер звезд */
}

.star {
  color: #ccc; /* Серый цвет по умолчанию для пустых звезд */
  transition: color 0.2s ease;
}

.star--filled {
  color: #ffca28; /* Желтый цвет для закрашенных звезд */
}
</style>