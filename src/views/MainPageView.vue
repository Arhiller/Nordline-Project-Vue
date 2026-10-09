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

type ActiveModal = 'settings' | 'buy' | null
const activeModal = ref<ActiveModal>(null)

function openModal(name: ActiveModal) {
  activeModal.value = name
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  activeModal.value = null
  document.body.style.overflow = ''
}


type Theme = 'light' | 'dark' | 'system'
const theme = ref<Theme>('system')
const mql = matchMedia('(prefers-color-scheme: dark)')

function onSystemChanged() {
  if (theme.value === 'system') applyTheme()
}

function applyTheme() {
  let actual: Theme
  if (theme.value === 'system') {
    actual = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } else {
    actual = theme.value
  }
  document.documentElement.dataset.theme = actual

  if (actual === 'dark') {
    document.documentElement.classList.add('dark-theme')
  } else {
    document.documentElement.classList.remove('dark-theme')
  }
}

function setTheme(value: Theme) {
  theme.value = value
  localStorage.setItem('theme', value)
  applyTheme()
}

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
      v-if="activeModal === 'settings'"
      @close="closeModal"
      @set-theme="setTheme"
    />
    <BuyModal
      v-if="activeModal === 'buy'"
      @close="closeModal"
    />
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