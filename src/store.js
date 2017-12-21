import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        logado: {},
        patrocinadorNome: '',
        farmaciaNome: ''
    },
    mutations: {
        setarLogado (state, logado) {
            state.logado = logado
        },
        setarPatrocinadorNome (state, patrocinadorNome) {
            state.patrocinadorNome = patrocinadorNome
        },
        setarFarmaciaNome (state, farmaciaNome) {
            state.farmaciaNome = farmaciaNome
        },
        apagarLogado (state) {
            state.logado = {}
        },
        apagarPatrocinadorNome (state) {
            state.patrocinadorNome = ''
        },
        apagarFarmaciaNome (state) {
            state.farmaciaNome = ''
        }
    }
})
