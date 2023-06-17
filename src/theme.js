
let theme = localStorage.getItem('theme') || 'auto';

export default {
    updateTheme (newTheme) {
        this.value = newTheme;

        localStorage.removeItem('theme');
        if (['dark', 'light'].includes(newTheme)){
            localStorage.setItem('theme', newTheme);
        }

        this.setTheme ();
    },
    setTheme () {
        
        if (this.value === 'dark' || (this.value == 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }

    },

    value : theme,
}