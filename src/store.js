import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        logado: {}
    },
    mutations: {
        setarLogado (state, logado) {
            state.logado = logado
        },
        apagarLogado (state) {
            state.logado = {}
        }
    }
})
