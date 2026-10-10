<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import HeaderBar from '../components/layout/HeaderBar.vue'
import OrderBar from '../components/layout/OrderBar.vue'
import AdvertisementBar from '../components/layout/AdvertisementBar.vue'
import MarketingBar from '../components/layout/MarketingBar.vue'
import FooterBar from '../components/layout/FooterBar.vue'

import UserAccountZone from '../components/account/UserAccountZone.vue'

import ModalOverlay from '../components/modals/ModalOverlay.vue'
import SettingsModal from '../components/modals/SettingsModal.vue'
import BuyModal from '../components/modals/BuyModal.vue'

import SettingsButton from '../components/layout/SettingsButton.vue'

import { activeModal, openModal, closeModal } from '@/assets/scripts/modal.ts'
import {theme, onSystemChanged, applyTheme, setTheme, mql} from '@/assets/scripts/theme.ts'


type Theme = 'light' | 'dark' | 'system'

onMounted(() => {
  theme.value = (localStorage.getItem('theme') as Theme) ?? 'system'
  mql.addEventListener('change', onSystemChanged)
  applyTheme()
})

onUnmounted(() => {
  delete document.documentElement.dataset.theme
  mql.removeEventListener('change', onSystemChanged)
})
</script>

<template>
  <RouterView />

  <ModalOverlay v-if="activeModal">
    <SettingsModal
      v-if="activeModal === 'settings'" />
    <BuyModal
      v-if="activeModal === 'buy'" />
  </ModalOverlay>

  <div class="grid-container">
    <SettingsButton @click="openModal('settings')" />

    <HeaderBar />
    <UserAccountZone />
    <OrderBar @buy="openModal('buy')" />
    <AdvertisementBar />
  </div>

  <MarketingBar />
  <FooterBar />
</template>

<style scoped>
@import '../assets/style/main.css';
</style>