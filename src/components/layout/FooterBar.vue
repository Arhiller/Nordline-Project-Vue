<template>
  <footer role="contentinfo">
    <div class="footer-logo">✈️ Авиакомпания Nordline</div>

    <div class="footer-links">
      <span>[ Контакты ]</span>
      <span>&bull;</span>
      <span>[ Пассажирам ]</span>
      <span>&bull;</span>
      <span>[ Популярные рейсы ]</span>
    </div>

    <div class="footer-copyright">&copy; 2026 Nordline. Все права защищены.</div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 40px;
  font-family: sans-serif;
  background-color: #f8f9fa;
}

.footer-links {
  display: flex;
  gap: 15px;
  color: #555;
}

footer div {
  margin-bottom: 10px;
}
</style>