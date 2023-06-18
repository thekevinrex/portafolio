import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Theme from './theme.js';

const app = createApp(App)

app.provide('$theme', Theme);
app.provide('socialLinks', {
    github : 'https://github.com/thekevinrex',
    linkedin: 'https://www.linkedin.com/in/kevin-gonzalez-918015241/',
    mail : 'mailto:kevin.gomez010814@gmail.com',
});

app.mount('#app')
