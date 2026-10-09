<template>
  <div class="head-bar">
    <h1>Nordline</h1>
  </div>
</template>

<style scoped>
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
</style>