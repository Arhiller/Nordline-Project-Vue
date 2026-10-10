<script setup lang="ts">

</script>

<template>
  <div class="account-zone user-panel">
    <img class="avatar" src="/src/assets/Images/avatar.png" alt="avatar">
    <div class="account-name">
      <span>{{ 'User One' }}</span>
    </div>
  </div>
</template>

<style scoped>
.account-zone {
  grid-row: 1;
  grid-column: 4;
  justify-self: end;
  align-self: start;
  z-index: 2;
  min-width: 50%;

  display: flex;
  gap: 8px;
  padding: 10px;

  background: var(--surface-color);
  border: var(--border-style);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}

.user-panel {
  width: 60%;
  transition: all 0.2s ease;
  border: 2px solid var(--nl-user-panel-border-color) !important;
}

.user-panel:active {
  transform: scale(0.95) !important;
}

.user-panel:hover {
  background: var(--nl-user-panel-bg-hover) !important;
  transform: scale(1.05);
}

.account-name span {
  display: flex;
  flex-direction: column;
  color: var(--nl-user-panel-text-color-name);
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--nl-user-panel-bg-default);
}
</style>