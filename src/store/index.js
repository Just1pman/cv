import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isOpenedMenu: false
    },
    mutations: {
        changeStateMenu(state) {
            state.isOpenedMenu = !state.isOpenedMenu
        }
    },
    actions: {},
    modules: {
    }
})
