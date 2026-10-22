<script setup lang="ts">
import { closeModal, activeModal } from '@/assets/scripts/modal';
import { buyForm, generatePNR, getRandomInt } from '@/assets/scripts/buy';
import { user } from '@/assets/scripts/auth';
import { citiesList, airportsList } from '@/assets/scripts/buy';
import { buyBookings, type BookingResponse } from '@/assets/scripts/dataProvider';

const fixedPrice = 10000

async function handlePayment() {
  if(buyForm.passport === '') {
    alert("Заполните паспорт")
    return
  }
  if(buyForm.cardNumber === '') {
    alert("Заполните номер карты")
    return
  }

  if (!buyForm.date) {
    alert("Выберите дату вылета")
    return
  }

  const randomFlightId = getRandomInt(1, 10)
  const randomSeatId = getRandomInt(1, 30)
  const randomCode = generatePNR();

  const departureCity = citiesList.value.find(c => c.name === buyForm.cityFrom);
  const arrivalCity = citiesList.value.find(c => c.name === buyForm.cityTo);

  if(departureCity === arrivalCity){
    alert("Выбраны одикановые города")
    return
  }

  if (!departureCity || !arrivalCity) {
    alert("Пожалуйста, выберите корректные города из списка");
    return;
  }

  const departureAirport = airportsList.value.find(a => a.cityId === departureCity.id);
  const arrivalAirport = airportsList.value.find(a => a.cityId === arrivalCity.id);

  const formattedDepartureDate = new Date(buyForm.date).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });


  if (!user.value?.id || !user.value.fullName) {
    alert("Ой, похоже вы не авторизованы");
  } else{
    const bookingData = {
    userId: user.value.id,
    flightId: randomFlightId,
    seatId: randomSeatId,
    bookingCode: randomCode,
    passengerName: user.value?.fullName,
    passengerPassport: buyForm.passport,
    price: fixedPrice
   } 

    const res = await buyBookings(bookingData)


    if(res?.success){
        const formattedDate = new Date(buyForm.date).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
  
    const arrivalDate = new Date(buyForm.date);
    arrivalDate.setHours(arrivalDate.getHours() + 3);
  
    const formattedArrivalDate = arrivalDate.toLocaleDateString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    });


        const message = `
        🎉 Билет успешно оформлен!

        ✈️ Маршрут: ${departureCity.name} → ${arrivalCity.name}
        🛫 Вылет из: ${departureAirport?.name} (${departureAirport?.code}) в ${formattedDepartureDate}
        🛬 Прилет в: ${arrivalAirport?.name} (${arrivalAirport?.code}) около ${formattedArrivalDate}

        🎫 Номер рейса: NL-${randomFlightId}77
        💺 Ваше место: ${randomSeatId}
        🔑 Код бронирования (PNR): ${res.bookingCode}
        👤 Пассажир: ${user.value?.fullName}
        💳 Сумма к оплате: ${fixedPrice.toLocaleString()} руб.

        Приятного полёта с Nordline!
          `;

        const messageData = {
          title: "Билет успешно оформлен!",
          bookingCode: res.bookingCode,
          flightNumber: `NL-${randomFlightId}77`,
          seat: randomSeatId,

          route: {
            from: departureCity.name,
            to: arrivalCity.name
          },

          departure: {
            airport: departureAirport?.name || '',
            code: departureAirport?.code || '',
            date: formattedDepartureDate
          },

          arrival: {
            airport: arrivalAirport?.name || '',
            code: arrivalAirport?.code || '',
            date: formattedArrivalDate
          },

          passengerName: user.value?.fullName || '',
          price: fixedPrice,

          wishes: "Приятного полёта с Nordline!"
        };

        sessionStorage.setItem('booking_message', JSON.stringify(messageData));
        activeModal.value = 'bookingInfo';

        buyForm.passport = ''
        buyForm.cardNumber = ''
        buyForm.cityFrom = ''
        buyForm.cityTo = ''
        buyForm.date = null
      }
    }
  }
</script>

<template>
  <div class="modal-window">
    <div class="close-zone-modal">
      <div @click="closeModal()">X</div>
    </div>
    <form class="input-zone-modal modal--register" @submit.prevent="handlePayment">
      <h2 style="color: var(--text-color)">Оформление покупки</h2>
      <input type="text" placeholder="Паспортные данные" v-model="buyForm.passport">
      <input type="text" placeholder="Номер карты" v-model="buyForm.cardNumber">
      <div class="card-description">
        <input type="text" placeholder="Срок действия ММ/ГГ">
        <input type="text" placeholder="CVC/CVV">
      </div>
      <p>Итого к оплате: {{ fixedPrice.toLocaleString('ru-RU') }} ₽</p>
      <div id="buy-button-zone">
        <button type="submit">Оплатить</button>
        <button @click="closeModal">Отмена</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import '../../assets/style/modal-base.css';
</style>