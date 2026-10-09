<script setup lang="ts">
import { ref } from 'vue'

import HeaderBar from '../components/layout/HeaderBar.vue'
import OrderBar from '../components/layout/OrderBar.vue'
import AdvertisementBar from '../components/layout/AdvertisementBar.vue'
import MarketingBar from '../components/layout/MarketingBar.vue'
import FooterBar from '../components/layout/FooterBar.vue'

import GuestAccountZone from '../components/account/GuestAccountZone.vue'

import ModalOverlay from '../components/modals/ModalOverlay.vue'
import LoginModal from '../components/modals/LoginModal.vue'
import RegisterModal from '../components/modals/RegisterModal.vue'
import BuyModal from '../components/modals/BuyModal.vue'

type ActiveModal = 'login' | 'register' | 'buy' | null
const activeModal = ref<ActiveModal>(null)

function openModal(name: ActiveModal) {
  activeModal.value = name
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  activeModal.value = null
  document.body.style.overflow = ''
}

function switchToRegister() {
  activeModal.value = 'register'
}
</script>

<template>
  <RouterView />

  <ModalOverlay v-if="activeModal">
    <LoginModal
      v-if="activeModal === 'login'"
      @close="closeModal"
      @switch-to-register="switchToRegister"
    />
    <RegisterModal
      v-if="activeModal === 'register'"
      @close="closeModal"
    />
    <BuyModal
      v-if="activeModal === 'buy'"
      @close="closeModal"
    />
  </ModalOverlay>

  <div class="grid-container">
    <HeaderBar />
    <GuestAccountZone
      @login="openModal('login')"
      @register="openModal('register')"
    />
    <OrderBar @buy="openModal('buy')" />
    <AdvertisementBar />
  </div>

  <MarketingBar />
  <FooterBar />
</template>

<style scoped>
@import '../assets/style/main.css';
</style>