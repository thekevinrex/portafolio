import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Theme from './theme.js';

const app = createApp(App)

app.provide('$theme', Theme);

app.mount('#app')
