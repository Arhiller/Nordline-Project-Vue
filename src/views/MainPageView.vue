<script setup lang="ts">
import { DatePicker } from 'primevue';
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const isOpen = ref(false)
const isOpenSettings = ref(false)
const isOpenAccount = ref(false)
const isOpenBuy = ref(false)

function openModalWindow(arg: number) {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = ""
        isOpenSettings.value = false
        isOpenAccount.value = false
        isOpenBuy.value = false
        return
    }

    //1 - SettingWindow
    //2 - AccountWinodw
    //3 - BuyWindow
    const windows: Record<number, { value: boolean }> = {
        1: isOpenSettings,
        2: isOpenAccount,
        3: isOpenBuy
    }

    const target = windows[arg]
    if (target) {
        target.value = !target.value
    }
}

</script>

<template>
    <RouterView />
    <div class="modal-overlay" v-if="isOpen">
        <div class="settings-modal" v-if="isOpenSettings">
            <div class="close-zone-modal">
                <div @click="openModalWindow(1)">X</div>
            </div>
            <div class="left-bar">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>                
            </div>
            <div class="settings-zone">

            </div>
        </div>
        <div class="modal-window" v-if="isOpenBuy">
            <div class="close-zone-modal">
                <div @click="openModalWindow(3)">X</div>
            </div>
            <div class="input-zone-modal modal--register">
                <h2>Оформление покупки</h2>
                <input type="text" placeholder="Паспортные данные"></input>
                <input type="text" placeholder="СНИЛС"></input>
                <input type="text" placeholder="Номер карты"></input>
                <div class="card-description">
                    <input type="text" placeholder="Срок действия ММ/ГГ"></input>
                    <input type="text" placeholder="CVC/CVV"></input>
                </div>
                <p>Итого к оплате: X XXX руб.</p>
                <div id="buy-button-zone">
                    <button>Оплатить</button>
                    <button>Отмена</button>
                </div>
            </div>
        </div>
    </div>
    <div class="grid-container">
        <div class="settings-button gear-icon" @click="openModalWindow(1)"></div>
        <div class="head-bar">
            <h1>Nordline</h1>
        </div>
        <div class="account-zone user-panel">
            <img class="avatar" src="/src/assets/Images/avatar.png">
            <div class="account-name">
                <span>User One</span>
            </div>
        </div>
        <div class="order-bar">
            <input list="data-list" placeholder="Откуда">
            <datalist id="data-list">

            </datalist>
            <input list="data-list" placeholder="Куда">
            <datalist id="data-list">

            </datalist>
            <DatePicker dateFormat="dd.mm.yy" placeholder="Когда"></DatePicker>
            <button @click="openModalWindow(3)">Купить</button>
        </div>
        <div class="advertisment-bar">
            <div class="advertisment-item">

            </div>
            <div class="advertisment-item">

            </div>
            <div class="advertisment-item">

            </div>
        </div>
    </div>
    <div class="marketing-bar" data-aos="fade-up" data-aos-once="false">

    </div>
    <!-- Добавим пока что временно. Я не знаю как это будет выглядеть после, но в случай чего изменим -->
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

<style>
@import '../assets/style/main.css'
</style>
