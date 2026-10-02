import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark-theme',
    },
  },
  license:
    'eyJpZCI6ImNkYmRjYzE5LTkwZmEtNDY1OS1hNWY3LTYwYmQ5OWIwZDUxMSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3OTA5NDQ0NTksImV4cCI6MTgyMjQ4MDQ1OX0.f_rxWgIWNEW6gFB1ewz7nvw5jLHrPgqWca9oiBCmOjcPY9sWdRXZGYiUuud5qTJ-xbnJuT9_XjyRFg0JAi0lCw',
})

app.mount('#app')
