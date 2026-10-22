<script setup lang="ts">

const rawData = sessionStorage.getItem('booking_message');
const booking = rawData ? JSON.parse(rawData) : null;
</script>

<template>
    <div class="info-modal">
        <h2>{{ booking.title }}</h2>
        <p>Код бронирования: <strong>{{ booking.bookingCode }}</strong></p>
        <p>Рейс: {{ booking.flightNumber }}</p>
        <p>Место: {{ booking.seat }}</p>
        <p>Пассажир: {{ booking.passengerName }}</p>
        <p>Цена: {{ booking.price }} руб.</p>
        <p style="font-style: italic;">{{ booking.wishes }}</p>
    </div>
</template>