/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// const cors = require('cors');
// app.use(cors());


createApp(App).use(store).use(router).mount('#app')
