import {ref} from 'vue'

export type ActiveModal = 'settings' | 'buy' | 'register' | 'login' | null
export const activeModal = ref<ActiveModal>(null)

export function openModal(name: ActiveModal) {
  activeModal.value = name
  document.body.style.overflow = 'hidden'
}

export function closeModal() {
  activeModal.value = null
  document.body.style.overflow = ''
}

export function switchToRegister() {
  activeModal.value = 'register'
}