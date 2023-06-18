import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Theme from './theme.js';

const app = createApp(App)

app.provide('$theme', Theme);
app.provide('socialLinks', {
    github : 'https://github.com',
    linkedin: 'https://linkedin.com',
    mail : 'mailto:kevin.gomez010814@gmail.com',
});

app.mount('#app')
