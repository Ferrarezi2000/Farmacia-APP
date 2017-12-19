<style scoped>
    .container {padding-top: 65px}
    .nomePatr {padding: 1px; font-size: 12px; color: white; background: black}
</style>
<template>
    <div>
        <menu-superior/>

        <div class="phone-viewport container">
            <div class="nomePatr" v-if="nomeLogado.nome">
                <span>Olá, bem-vindo {{ nomeLogado.nome }}</span>
            </div>

            <md-list class="custom-list md-triple-line">
                <md-list-item v-for="item in patrocinador" :key="item.id">

                    <div class="md-list-text-container">
                        <span>{{ item.nome }}</span>

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
                        <router-link :to="'/patrocinadores/info/' + item.id">
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
    export default {
        components: {MenuSuperior, MenuInferior},
        created () {
            this.patrocinadores()
            if (this.$store.state.logado) {
                this.nomeLogado = this.$store.state.logado
            }
        },
        data () {
            return {
                nomeLogado: {nome: null},
                patrocinador: []
            }
        },
        methods: {
            patrocinadores() {
                this.$http.get(C.URL.PATROCINADOR.BASE).then(res => {
                    this.patrocinador = res.body
                })
            }
        }
    }
</script>