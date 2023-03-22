import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import API from './api/api.js'

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Toast)
app.use(API)

app.mount('#app')
