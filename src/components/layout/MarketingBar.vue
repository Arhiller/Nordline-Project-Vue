<template>
  <div class="marketing-bar" data-aos="fade-up" data-aos-once="false"></div>
</template>

<style scoped>
.marketing-bar {
  width: 100%;
  padding: 0 24px 24px;
  min-height: 600px;

  background: var(--dark-panel);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
</style>