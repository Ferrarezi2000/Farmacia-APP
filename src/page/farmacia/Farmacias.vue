<style scoped>
    .container {padding-top: 65px}
    .farmacias {padding: 6px; font-weight: bold; font-size: 12px ; background-color: #e3e8e7}
</style>
<template>
    <div>
        <menu-superior/>

        <div class="phone-viewport container">
            <div class="farmacias">
                <span> Farmácias</span>
            </div>
            <md-divider/>

            <md-list class="custom-list md-triple-line">
                <md-list-item v-for="item in farmacias" :key="item.id" @click="info(item.id)">

                    <div class="md-list-text-container">
                        <span>{{ item.nome }} - {{ item.localidade }}</span>
                        <md-layout>
                            <md-layout>
                                <star-rating v-bind:increment="0.5" style="margin-bottom: 5px"
                                             v-bind:max-rating="5"
                                             v-model="item.media"
                                             :show-rating="false"
                                             :read-only="true"
                                             inactive-color="#DCDCDC"
                                             active-color="#FFD700"
                                             v-bind:star-size="15">
                                </star-rating>
                                <span style="padding-top: 3.3px; margin-left: 12px; font-size: 12px; color: grey">
                                    {{ item.totalAvaliacoes }}
                                    <span v-if="item.totalAvaliacoes === 1">Comentário</span>
                                    <span v-else>Comentários</span>
                                </span>
                            </md-layout>
                        </md-layout>

                        <span style="padding-top: 2px; margin-bottom: 2px; font-size: 14px">
                            <md-icon style="margin-right: 5px; font-size: 20px">people</md-icon>
                            <span>{{ item.acesso }}</span>
                            <span v-if="item.acesso === 1">acesso</span>
                            <span v-else>acessos</span>
                        </span>
                    </div>
                    <md-icon>keyboard_arrow_right</md-icon>
                    <md-divider/>
                </md-list-item>
            </md-list>
        </div>
        <!--<menu-inferior/>-->
    </div>
</template>
<script>
    import MenuSuperior from '../../component/Menu.vue'
    import MenuInferior from '../../component/MenuInferior.vue'
    import { C } from '../../constantes'
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
            info(id) {
                this.$router.push('/farmacias/info/' + id)
            },
            listarVip() {
                this.$http.get(C.URL.FARMACIA.BASE).then(res => {
                    this.farmacias = res.body
                })
            }
        }
    }
</script>