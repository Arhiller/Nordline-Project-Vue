<script setup>
import { closeModal } from '@/assets/scripts/modal';
import { onMounted, onUnmounted } from 'vue';

const handleEsc = (event) => {
  if(event.key === 'Escape'){
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc)
})

</script>

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <slot />
  </div>
</template>

<style scoped>
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
</style>