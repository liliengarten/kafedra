import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '/src/assets/fontawesome/css/all.min.css'
import Home from '@/pages/Home.vue'
import Profile from '@/pages/profile.vue'

const routes = [
  { path: '/', name: 'Home',component: Home},
  { path: '/profile', name: "Profile", component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
