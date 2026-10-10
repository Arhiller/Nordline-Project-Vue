import {ref} from 'vue'

type Theme = 'light' | 'dark' | 'system'
export const theme = ref<Theme>('system')
export const mql = matchMedia('(prefers-color-scheme: dark)')

export function onSystemChanged() {
  if (theme.value === 'system') applyTheme()
}

export function applyTheme() {
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

export function setTheme(value: Theme) {
  theme.value = value
  localStorage.setItem('theme', value)
  applyTheme()
}