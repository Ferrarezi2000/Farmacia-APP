<style scoped>
    .ultimo {margin-bottom: 50px !important;}
    .container { padding-top: 64px }
    h3 {color: darkred}
    .nEstrelas {font-size: 12px; margin-top: 3px; margin-left: 10px}
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
                    <md-table>
                        <md-table-body>
                            <md-table-row>
                                <md-table-cell>
                                    <md-icon style="color: grey; font-size: 20px; margin-top: 7px">access_time</md-icon>
                                </md-table-cell>
                                <md-table-cell style="font-size: 14px">
                                    <span>{{ farmacia.farmaciaHoraAbrir }} horas às </span>
                                    <span>{{ farmacia.farmaciaHoraFechar }} horas</span>
                                </md-table-cell>
                            </md-table-row>
                        </md-table-body>
                    </md-table>

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

                    <h3 class="md-subheading" style="margin-top: 20px; margin-bottom: 15px">Avaliações</h3>

                    <md-layout>
                        <md-layout style="margin-left: 40px; font-size: 30px; color: orange">
                            {{ farmacia.farmaciaMediaAvaliacao }}
                        </md-layout>
                        <md-layout>
                            <star-rating style="margin-bottom: 5px"
                                         v-bind:max-rating="5"
                                         v-model="estrelas5"
                                         :show-rating="false"
                                         :read-only="true"
                                         inactive-color="#DCDCDC"
                                         active-color="#FFD700"
                                         v-bind:star-size="15">
                            </star-rating>
                            <span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes5 }}</span>
                        </md-layout>
                    </md-layout>

                    <md-layout>
                        <md-layout style="margin-left: 30px">
                            <star-rating v-bind:increment="0.5" style="margin-bottom: 5px"
                                         v-bind:max-rating="5"
                                         v-model="farmacia.farmaciaMediaAvaliacao"
                                         :show-rating="false"
                                         :read-only="true"
                                         inactive-color="#DCDCDC"
                                         active-color="#FFD700"
                                         v-bind:star-size="15">
                            </star-rating>
                        </md-layout>
                        <md-layout style="margin-left: 10px">
                            <star-rating style="margin-bottom: 5px"
                                         v-bind:max-rating="5"
                                         v-model="estrelas4"
                                         :show-rating="false"
                                         :read-only="true"
                                         inactive-color="#DCDCDC"
                                         active-color="#FFD700"
                                         v-bind:star-size="15">
                            </star-rating>
                            <span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes4 }}</span>
                        </md-layout>
                    </md-layout>

                    <md-layout>
                        <md-layout style="margin-left: 30px">{{ farmacia.farmaciaTotalAvaliacoes }}
                            <span v-if="farmacia.farmaciaTotalAvaliacoes === 1"
                                  style="margin-left: 5px">avaliação</span>
                            <span v-else style="margin-left: 5px">avaliações</span>
                        </md-layout>
                        <md-layout style="margin-left: 10px">
                            <star-rating style="margin-bottom: 5px"
                                         v-bind:max-rating="5"
                                         v-model="estrelas3"
                                         :show-rating="false"
                                         :read-only="true"
                                         inactive-color="#DCDCDC"
                                         active-color="#FFD700"
                                         v-bind:star-size="15">
                            </star-rating>
                            <span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes3 }}</span>
                        </md-layout>
                    </md-layout>

                    <md-layout>
                        <md-layout></md-layout>
                        <md-layout style="margin-left: 40px">
                            <star-rating style="margin-bottom: 5px"
                                         v-bind:max-rating="5"
                                         v-model="estrelas2"
                                         :show-rating="false"
                                         :read-only="true"
                                         inactive-color="#DCDCDC"
                                         active-color="#FFD700"
                                         v-bind:star-size="15">
                            </star-rating>
                            <span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes2 }}</span>
                        </md-layout>
                    </md-layout>

                    <md-layout>
                        <md-layout></md-layout>
                        <md-layout style="margin-left: 40px">
                            <star-rating style="margin-bottom: 5px"
                                         v-bind:max-rating="5"
                                         v-model="estrelas1"
                                         :show-rating="false"
                                         :read-only="true"
                                         inactive-color="#DCDCDC"
                                         active-color="#FFD700"
                                         v-bind:star-size="15">
                            </star-rating>
                            <span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes1 }}</span>
                        </md-layout>
                    </md-layout>

                    <md-table v-if="farmacia.farmaciaAvaliacoes.length > 0">
                        <md-table-header>
                            <md-table-row>
                                <md-table-head>#</md-table-head>
                                <md-table-head>Usuário</md-table-head>
                                <md-table-head>Classificação</md-table-head>
                            </md-table-row>
                        </md-table-header>


                        <md-table-body>
                            <md-table-row v-for="(a, index) in farmacia.farmaciaAvaliacoes" :key="a.id">
                                <md-table-cell>
                                    <span>{{ index + 1}}.</span>
                                </md-table-cell>
                                <md-table-cell style="font-size: 14px">
                                    <span>{{ a.usuarioNome }} {{ a.usuarioSobrenome }}</span>
                                </md-table-cell>
                                <md-table-cell>
                                    <star-rating v-bind:increment="0.5" style="margin-bottom: 5px"
                                                 v-bind:max-rating="5"
                                                 :show-rating="false"
                                                 :read-only="true"
                                                 v-model="a.valor"
                                                 inactive-color="#DCDCDC"
                                                 active-color="#FFD700"
                                                 v-bind:star-size="15">
                                    </star-rating>
                                </md-table-cell>

                            </md-table-row>
                        </md-table-body>
                    </md-table>
                </md-card-content>

                <md-button class="md-raised" style="width: 100%; background-color: red; color: white;
                 margin: 0px !important; padding: 0px !important; margin-bottom: 10px"
                           @click="comentar()">Avaliar
                </md-button>
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
                vertical: 'bottom',
                horizontal: 'center',
                mensagem: null,
                duration: 4000,
                data: null,
                estrelas5: 5,
                estrelas4: 4,
                estrelas3: 3,
                estrelas2: 2,
                estrelas1: 1,
                farmacia: {farmaciaAvaliacoes: 0}

            }
        },
        methods: {
            comentar () {
                this.$router.push('/comentar/' + this.farmacia.farmaciaId)
            },
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