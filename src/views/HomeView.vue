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

import { openModal, activeModal } from '@/assets/scripts/modal.ts'

</script>

<template>
  <RouterView />

  <ModalOverlay v-if="activeModal">
    <LoginModal
      v-if="activeModal === 'login'" />
    <RegisterModal
      v-if="activeModal === 'register'" />
    <BuyModal
      v-if="activeModal === 'buy'" />
  </ModalOverlay>

  <div class="grid-container">
    <HeaderBar />
    <GuestAccountZone />
    <OrderBar />
    <AdvertisementBar />
  </div>

  <MarketingBar />
  <FooterBar />
</template>

<style scoped>
@import '../assets/style/main.css';
</style>