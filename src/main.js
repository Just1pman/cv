import Vue from 'vue'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalStyles from '@/assets/styles/main.scss'

Vue.config.productionTip = false
Vue.use(Chakra)

new Vue({
    router,
    store,
    globalStyles,
    render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount('#app')
