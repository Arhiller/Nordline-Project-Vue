<template>
  <div class="advertisment-bar">
    <div class="advertisment-item"></div>
    <div class="advertisment-item"></div>
    <div class="advertisment-item"></div>
  </div>
</template>

<style scoped>
.advertisment-bar {
  grid-row: 3;
  grid-column: 1 / -1;

  display: flex;
  gap: 20px;
  width: 100%;
}

.advertisment-item {
  flex: 1;
  min-height: 200px;

  background: var(--surface-color);
  border: var(--border-style);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

.advertisment-item:nth-child(1) {
  background: linear-gradient(135deg, var(--tile-1-start), var(--surface-color));
}

.advertisment-item:nth-child(2) {
  background: linear-gradient(135deg, var(--tile-2-start), var(--surface-color));
}

.advertisment-item:nth-child(3) {
  background: linear-gradient(135deg, var(--tile-3-start), var(--surface-color));
}

.advertisment-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}
</style>