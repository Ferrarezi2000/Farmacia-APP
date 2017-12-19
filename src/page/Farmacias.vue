<style scoped>
    .container {padding-top: 65px}
    .nome {padding: 1px; font-size: 12px; color: white; background: black}
</style>
<template>
    <div>
        <menu-superior/>

        <div class="phone-viewport container">
            <div class="nome" v-if="nomeLogado.nome">
                <span>Olá, bem-vindo {{ nomeLogado.nome }}</span>
            </div>

            <md-list class="custom-list md-triple-line">
                <md-list-item v-for="item in farmacias" :key="item.id">

                    <div class="md-list-text-container">
                        <span>{{ item.nome }} - {{ item.localidade }}</span>

                        <star-rating v-bind:increment="0.5" style="margin-bottom: 5px"
                                     v-bind:max-rating="5"
                                     v-model="item.media"
                                     :show-rating="false"
                                     :read-only="true"
                                     inactive-color="#DCDCDC"
                                     active-color="#FFD700"
                                     v-bind:star-size="15">
                        </star-rating>

                        <span style="padding-top: 2px; margin-bottom: 2px; font-size: 14px">
                            <md-icon style="margin-right: 5px; font-size: 20px">people</md-icon>
                            <span>{{ item.acesso }}</span>
                            <span v-if="item.acesso === 1">acesso</span>
                            <span v-else>acessos</span>
                        </span>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                        <router-link :to="'/farmacias/info/' + item.id">
                            <md-icon class="md-primary">keyboard_arrow_right</md-icon>
                        </router-link>
                    </md-button>
                    <md-divider/>
                </md-list-item>
            </md-list>
        </div>

        <menu-inferior/>
    </div>
</template>
<script>
    import MenuSuperior from '../component/Menu.vue'
    import MenuInferior from '../component/MenuInferior.vue'
    import { C } from '../constantes'
    import Rating from 'vue-bulma-rating'

    export default {
        components: {MenuSuperior, MenuInferior, Rating},
        created () {
            this.listarVip()
            if (this.$store.state.logado) {
                this.nomeLogado = this.$store.state.logado
            }
        },
        data () {
            return {
                nomeLogado: {nome: null},
                farmacias: []
            }
        },
        methods: {
            listarVip() {
                this.$http.get(C.URL.FARMACIA.BASE).then(res => {
                    this.farmacias = res.body
                })
            }
        }
    }
</script>