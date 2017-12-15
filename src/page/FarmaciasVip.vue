<style scoped>
    .container {margin-left: 8%; margin-right: 8%; padding-top: 5px !important;}
    .ultimo {margin-bottom: 70px !important;}
    .nome {color: white; background: lightsalmon; min-height: 30px; padding-top: 68px; padding-bottom: 5px}
</style>
<template>
    <div>
        <menu-superior/>

        <md-subheader class="nome">
            {{ this.dataAtual | moment("ddd, DD MMM  YYYY -  HH:mm") }}
        </md-subheader>

        <div class="container">
            <md-card class="card-example" v-for="(item, index) in farmacias" :key="item.id"
                     style="margin-bottom: 15px"
                     :class="{'ultimo' : farmacias.length === index + 1}">
                <md-card-area md-inset>
                    <md-card-media md-ratio="16:9">
                        <img src="http://www.petcidade.com.br/wp-content/uploads/2016/09/cachorro-tenta-pegar-petisco-imagem-1-reproducao.jpg"
                             alt="Coffee House">
                    </md-card-media>

                    <md-card-header>
                        <h2 class="md-title">{{ item.nome }}</h2>
                        <div class="md-subhead">
                            <md-icon>location_on</md-icon>
                            <span>{{ item.endereco.logradouro }}, {{ item.endereco.numero }} - {{ item.endereco.bairro }}</span>
                        </div>
                    </md-card-header>

                    <md-card-content>
                        {{ item.texto }}
                    </md-card-content>
                </md-card-area>

                <md-card-content>
                    <h3 class="md-subheading">Funcionamento/Contatos</h3>
                    <div class="card-reservation">

                        <md-button-toggle md-single class="md-button-group">
                            <md-icon style="color: grey; font-size: 20px; margin-top: 7px">access_time</md-icon>
                            <md-button>{{ item.horaAbrir }} horas</md-button>
                            <md-button>{{ item.horaFechar }} horas</md-button>
                        </md-button-toggle>

                        <md-table>
                            <md-table-body>
                                <md-table-row v-for="(row, index) in item.contatos" :key="index.id">
                                    <md-table-cell>
                                        <md-icon style="color: grey; font-size: 20px; margin-top: 7px">phone</md-icon>
                                    </md-table-cell>
                                    <md-table-cell style="font-size: 14px">{{ row.texto }} -
                                        <span>{{ row.tipo }}</span>
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
            this.listarVip()
            this.dataAtual = new Date()
        },
        data () {
            return {
                data: null,
                farmacias: []
            }
        },
        methods: {
            listarVip() {
                this.$http.get(C.URL.FARMACIA.VIP).then(res => {
                    this.farmacias = res.body
                    console.log(res.body)
                })
            }
        }
    }
</script>