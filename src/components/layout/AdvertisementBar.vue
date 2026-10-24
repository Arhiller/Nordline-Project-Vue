<template>
  <div class="advertisment-bar">
    <div class="advertisment-item">
      <img src="../../assets/Images/banner1.jpg">
    </div>
    <div class="advertisment-item">
      <img src="../../assets/Images/qwerty.jpg">
    </div>
    <div class="advertisment-item">
      <img src="../../assets/Images/fgf.jpg">
    </div>
  </div>
</template>

<style scoped>
.advertisment-bar {
  grid-row: 3;
  grid-column: 1 / -1;

  display: flex;
  gap: 20px;
  width: 100%;
  align-items: stretch;
}

.advertisment-item {
  flex: 1 0 200px;
  flex-shrink: 0;
  height: 550px;
  overflow: hidden;

  background: var(--surface-color);
  border: var(--border-style);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

img {
    width: 100%; 
    height: 100%;
    height: auto;
    object-fit: cover;
    display: block;
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