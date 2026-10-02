<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
</script>

<template>
    <div class="grid-container">
            <div class="head-bar">
                <h1>Nordline</h1>
            </div>
            <div class="account-zone">
                <button id="register-button">Зарегистрироваться</button>
                <button id="enter-button">Войти</button>
            </div>
            <div class="order-bar">
                <input list="data-list">
                <datalist id="data-list">

                </datalist>
                <input list="data-list">
                <datalist id="data-list">

                </datalist>
                <input list="data-list">
                <datalist id="data-list">

                </datalist>
                <button>Купить</button>
                <input placeholder="Поиск . . . " style="width: 32% !important;">
            </div>
            <div class="advertisment-bar">

            </div>
            <div class="marketing-bar">

            </div>
        </div>
</template>

<style scoped>
* {
  user-select: none;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

:root {
  --button-hover-color: rgb(201, 201, 201);

  --border-style: 2px solid black;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 20% 1fr 1fr 1fr;
}

.head-bar {
  grid-row: 1;
  grid-column: 1 / -1;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 10%;
  width: 99vw;
  margin-top: 40px;
}

.head-bar h1 {
  font-size: 40px;
  padding: 20px;
  border: var(--border-style);
  border-radius: 20px;
}

.account-zone {
  grid-row: 1;
  grid-column: 4;

  width: auto;
  height: 35%;
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  margin-top: 10px;
  margin-right: 10px;

  border: var(--border-style);
  border-radius: 20px;
}

.account-zone button {
  width: auto;
  padding-left: 10px;
  padding-right: 10px;

  font-size: 24px;
  margin: 5px;
  width: 90%;

  border-radius: 10px;

  transition: all 0.5s ease;
}

.account-zone button:hover {
  transform: scale(1.05);
  background: var(--button-hover-color);
}

.account-zone button:active {
  transform: scale(0.95);
}

.order-bar {
  grid-row: 2;
  grid-column: 1 / -1;

  height: 15vh;
  width: 99vw;
  margin-top: 10px;

  display: flex;
  align-items: center;
  font-size: 30px;
}

.order-bar * {
  font-size: 20px;
}

.order-bar input {
  width: 18%;
  height: 20%;

  margin: 10px;
}

.order-bar button {
  width: 7%;
  height: 25%;
}

.advertisment-bar {
  grid-row: 3;
  grid-column: 1 / -1;
  display: flex;

  height: 15vh;
  width: 99vw;
  background-color: black;
}

.marketing-bar {
  grid-row: 4;
  grid-column: 1 / -1;
  display: flex;

  height: 10vh;
  width: 99vw;
  background-color: black;
}
</style>
