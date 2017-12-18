<style scoped>
    .ultimo {margin-bottom: 50px !important;}
    .container { padding-top: 64px }
    h3 {color: darkred}
    .nome {color: white; background: lightsalmon; min-height: 30px; padding-top: 68px; padding-bottom: 5px}
</style>
<template>
    <div>
        <menu-superior/>

        <div class="container">
            <md-card class="card-example ultimo"
                     style="margin-bottom: 15px">
                <md-card-area md-inset>
                    <md-card-media md-ratio="16:9">
                        <img src="http://www.petcidade.com.br/wp-content/uploads/2016/09/cachorro-tenta-pegar-petisco-imagem-1-reproducao.jpg"
                             alt="Coffee House">
                    </md-card-media>

                    <md-card-header>
                        <h2 class="md-title">{{ farmacia.farmaciaNome }}</h2>
                        <div class="md-subhead">
                            <md-icon>location_on</md-icon>
                            <span>{{ farmacia.enderecoLogradouro }}, Nº {{ farmacia.enderecoNumero }} - {{ farmacia.enderecoBairro }}</span>
                        </div>
                    </md-card-header>

                    <md-card-content>
                        {{ farmacia.farmaciaTexto }}
                    </md-card-content>
                </md-card-area>

                <md-card-content>
                    <h3 class="md-subheading">Funcionamento</h3>
                    <div class="card-reservation">

                        <md-button-toggle md-single class="md-button-group">
                            <md-icon style="color: grey; font-size: 20px; margin-top: 7px">access_time</md-icon>
                            <md-button>{{ farmacia.farmaciaHoraAbrir }} horas</md-button>
                            <md-button>{{ farmacia.farmaciaHoraFechar }} horas</md-button>
                        </md-button-toggle>

                        <h3 class="md-subheading" style="margin-top: 20px">Contatos</h3>
                        <md-table>
                            <md-table-body>
                                <md-table-row v-for="item in farmacia.contatos" :key="item.id">
                                    <md-table-cell>
                                        <md-icon style="color: grey; font-size: 20px; margin-top: 7px">phone</md-icon>
                                    </md-table-cell>
                                    <md-table-cell style="font-size: 14px">{{ item.texto }} -
                                        <span>{{ item.tipo }}</span>
                                    </md-table-cell>
                                </md-table-row>
                            </md-table-body>
                        </md-table>
                    </div>
                </md-card-content>
            </md-card>
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
            this.buscarFarmacia()
            this.setarAcesso()
        },
        data () {
            return {
                data: null,
                farmacia: {}
            }
        },
        methods: {
            setarAcesso () {
                this.$http.get(C.URL.FARMACIA.ACESSO + this.$route.params.id)
            },
            buscarFarmacia() {
                this.$http.get(C.URL.FARMACIA.BASE + this.$route.params.id).then(res => {
                    this.farmacia = res.body
                })
            }
        }
    }
</script>