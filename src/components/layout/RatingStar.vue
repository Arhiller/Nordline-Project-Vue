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
  font-size: 24px;
}

.star {
  color: var(--review-star-empty);
    transition: color 0.2s ease;
}

.star--filled {
  color: var(--review-star-filled);
}
</style>