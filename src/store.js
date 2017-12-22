import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        logado: {},
        patrocinadorNome: '',
        farmaciaNome: '',
        tituloAdicionais: '',
        textoAdicionais: ''
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
        setarTituloAdicionais (state, tituloAdicionais) {
            state.tituloAdicionais = tituloAdicionais
        },
        setarTextoAdicionais (state, textoAdicionais) {
            state.textoAdicionais = textoAdicionais
        },
        apagarTextoAdicionais (state) {
            state.textoAdicionais = ''
        },
        apagarTituloAdicionais (state) {
            state.textoAdicionais = ''
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
