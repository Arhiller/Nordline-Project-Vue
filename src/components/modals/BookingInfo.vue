<script setup lang="ts">

const rawData = sessionStorage.getItem('booking_message');
const booking = rawData ? JSON.parse(rawData) : null;
</script>

<template>
    <div class="info-modal">
        <h2>Билет успешно оформлен!</h2>
        <p>Код бронирования: <strong>{{ booking.bookingCode }}</strong></p>
        <p>Рейс: {{ booking.flightNumber }}</p>
        <p>Место: {{ booking.seat }}</p>
        <p>Пассажир: {{ booking.passengerName }}</p>
        <p>Цена: {{ booking.price }} руб.</p>
        <p style="font-style: italic;">{{ booking.wishes }}</p>
    </div>
</template>

<style scoped>
.info-modal {
    background-color: var(--bg-muted);
    padding: 40px;
    width: 100%;
    max-width: 500px;
    border-radius: 4px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    text-align: left;
    border: 4px solid var(--accent-2);
}

.info-modal h2 {
    font-size: 24px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 25px;
    color: #000000;
}

.info-modal p {
    font-size: 16px;
    margin: 14px 0;
    color: #1a1a1a;
}

.info-modal strong {
    font-weight: bold;
}
</style>