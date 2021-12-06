import Vue from 'vue'
import Chakra, { CThemeProvider } from '@chakra-ui/vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalStyles from '@/assets/styles/main.scss'
import animateCss from 'animate.css';
import blackDashboard from "@/plugins/blackDashboard";

Vue.use(blackDashboard)

Vue.config.productionTip = false
Vue.use(Chakra)

new Vue({
    router,
    store,
    animateCss,
    globalStyles,
    render: (h) => h(CThemeProvider, [h(App)])
}).$mount('#app')
