
import ES from './lang/es.json';
import EN from './lang/en.json';

const lang = localStorage.getItem('lang') || 'en';

export function __($key){

    let value = $key;

    if (lang === 'en') {
        if (Object.keys(EN).includes($key)){
            value = EN[$key];
        }
    } else if (lang === 'es') {
        if (Object.keys(ES).includes($key)){
            value = ES[$key];
        }
    }

    return value;
}

export function setLang(lang) {
    localStorage.setItem('lang', lang);
    window.location.reload();
}