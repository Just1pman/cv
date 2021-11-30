import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalStyles from '@/assets/styles/main.scss'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    globalStyles,
    render: h => h(App)
}).$mount('#app')
