<style scoped>
    /*.ultimo {margin-bottom: 50px !important;}*/
    .container { padding-top: 64px }
    h3 {background-color: #e3e8e7; font-size: 12px; font-weight: bold; padding: 5px}
    .nEstrelas {font-size: 12px; margin-top: 3px; margin-left: 10px}
    .md-divider {height: 0.5px !important}
    .menu {z-index: 2 !important; position: fixed !important; top: 0px !important; width: 100% !important;}
    .corMenu {background-color: red !important;}
</style>
<template>
    <div>
        <!--menu-->
        <md-toolbar class="corMenu menu">
            <md-button class="md-icon-button" @click.native="voltar()">
                <md-icon>keyboard_arrow_left</md-icon>
            </md-button>

            <div>
                <span style="font-weight: bold; font-size: 18px; font-style: italic">{{ farmacia.farmaciaNome }}</span>
                <!--<img src="../assets/sumicity.png" style="height: 15px;">-->
            </div>
        </md-toolbar>

        <div class="container">
            <md-card class="card-example ultimo"
                     style="margin-bottom: 15px">
                <md-card-area md-inset>
                    <md-card-media md-ratio="16:9">
                        <img src="http://www.petcidade.com.br/wp-content/uploads/2016/09/cachorro-tenta-pegar-petisco-imagem-1-reproducao.jpg"
                             alt="Coffee House">
                    </md-card-media>
                    <h2 class="md-title" style="margin-left: 18px; font-weight: bold; font-size: 20px">
                        {{ farmacia.farmaciaNome }}
                    </h2>
                    <md-card-content>
                        {{ farmacia.farmaciaTexto }}
                    </md-card-content>
                </md-card-area>

                <md-card-content>
                    <md-list>
                        <md-list-item @click="openDialog('contato')">
                            <md-icon>phone</md-icon>
                            <span>Contatos</span>
                            <md-dialog md-open-from="#custom" md-close-to="#custom" ref="contato">
                                <md-dialog-title>Contatos</md-dialog-title>
                                <md-dialog-content>
                                    <div class="md-inset" v-for="item in farmacia.contatos" :key="item.id">
                                        <md-layout style="font-size: 14px">
                                            <md-layout md-flex="65">
                                                {{ item.texto }}
                                            </md-layout>
                                            <md-layout >
                                                {{ item.tipo }}
                                            </md-layout>
                                        </md-layout>
                                    </div>
                                </md-dialog-content>
                                <md-dialog-actions>
                                    <md-button class="md-primary" @click="closeDialog('contato')">Ok</md-button>
                                </md-dialog-actions>
                            </md-dialog>
                            <md-button class="md-icon-button">
                                <md-icon class="md-primary">keyboard_arrow_right</md-icon>
                            </md-button>
                        </md-list-item>
                        <md-divider/>

                        <md-list-item @click="openDialog('endereco')">
                            <md-icon>location_on</md-icon>
                            <span>Endereço</span>
                            <md-dialog md-open-from="#custom" md-close-to="#custom" ref="endereco">
                                <md-dialog-title>Endereço</md-dialog-title>
                                <md-dialog-content>
                                        <md-layout style="font-size: 14px">
                                            {{ farmacia.enderecoLogradouro }}, Nº {{ farmacia.enderecoNumero }}
                                             - {{ farmacia.enderecoBairro }}
                                        </md-layout>
                                </md-dialog-content>
                                <md-dialog-actions>
                                    <md-button class="md-primary" @click="closeDialog('endereco')">Ok</md-button>
                                </md-dialog-actions>
                            </md-dialog>
                            <md-button class="md-icon-button">
                                <md-icon class="md-primary">keyboard_arrow_right</md-icon>
                            </md-button>
                        </md-list-item>
                        <md-divider/>


                        <md-list-item @click="openDialog('funcionamento')">
                            <md-icon>access_time</md-icon>
                            <span>Funcionamento</span>
                            <md-dialog md-open-from="#custom" md-close-to="#custom" ref="funcionamento">
                                <md-dialog-title>Funcionamento</md-dialog-title>
                                <md-dialog-content>
                                    <div class="md-inset" v-for="funcionamento in farmacia.farmaciaFuncionamentos">
                                        <md-layout>
                                            <md-layout style="font-size: 14px">
                                                <md-layout md-flex="40">
                                                    {{ funcionamento.diaSemama }}
                                                </md-layout>
                                                <md-layout md-flex="20">
                                                    {{ funcionamento.inicio }}
                                                </md-layout>
                                                <md-layout md-flex="10">
                                                     às
                                                </md-layout>
                                                <md-layout md-flex="30">
                                                    {{ funcionamento.fim }}
                                                </md-layout>
                                            </md-layout>
                                        </md-layout>
                                    </div>
                                </md-dialog-content>
                                <md-dialog-actions>
                                    <md-button class="md-primary" @click="closeDialog('funcionamento')">Ok</md-button>
                                </md-dialog-actions>
                            </md-dialog>
                            <md-button class="md-icon-button">
                                <md-icon class="md-primary">keyboard_arrow_right</md-icon>
                            </md-button>
                        </md-list-item>
                        <md-divider/>

                        <md-list-item @click="openDialog('pagamento')">
                            <md-icon>payment</md-icon>
                            <span>Forma de Pagamento</span>
                            <md-dialog md-open-from="#custom" md-close-to="#custom" ref="pagamento">
                                <md-dialog-title>Forma de Pagamento</md-dialog-title>
                                <md-dialog-content>
                                    <div class="md-inset" v-for="pagamento in farmacia.farmaciaPagamentos">
                                        <md-layout style="font-size: 14px">
                                            {{ pagamento.tipo }}
                                        </md-layout>
                                    </div>
                                </md-dialog-content>
                                <md-dialog-actions>
                                    <md-button class="md-primary" @click="closeDialog('pagamento')">Ok</md-button>
                                </md-dialog-actions>
                            </md-dialog>
                            <md-button class="md-icon-button">
                                <md-icon class="md-primary">keyboard_arrow_right</md-icon>
                            </md-button>
                        </md-list-item>
                        <md-divider/>
                    </md-list>

                    <h3>Avaliações</h3>
                    <md-divider/>
                    <md-list>
                        <md-list-item @click="comentar()">
                            <md-icon>chat_bubble_outline</md-icon>
                            <span>Deixar minha avaliação</span>

                            <md-button class="md-icon-button" @click="comentar()">
                                <md-icon class="md-primary">keyboard_arrow_right</md-icon>
                            </md-button>
                        </md-list-item>
                    </md-list>
                    <md-divider style="margin-bottom: 10px"/>

                    <div style="width: 60%; float: left; text-align: center">
                        <div style="font-size: 35px; color: orange; margin-top: 20px; margin-bottom: 5px">
                            {{ farmacia.farmaciaMediaAvaliacao }}
                        </div>
                        <md-layout md-align="center" md-gutter="16">
                            <md-layout md-flex="35">
                                <star-rating style="margin-bottom: 5px"
                                             v-bind:max-rating="5"
                                             v-bind:increment="0.5"
                                             v-model="estrelas5"
                                             :show-rating="false"
                                             :read-only="true"
                                             inactive-color="#DCDCDC"
                                             active-color="#FFD700"
                                             v-bind:star-size="15">
                                </star-rating>
                            </md-layout>
                        </md-layout>

                        <div style="font-weight: bold">{{ farmacia.farmaciaTotalAvaliacoes }}
                            <span v-if="farmacia.farmaciaTotalAvaliacoes === 1"
                                  style="margin-left: 5px">avaliação</span>
                            <span v-else style="margin-left: 5px">avaliações</span>
                        </div>
                    </div>

                    <div style="width: 40%; float: right">
                        <md-layout>
                            <md-layout>
                                <star-rating style="margin-bottom: 5px"
                                             v-bind:max-rating="5"
                                             v-bind:increment="0.5"
                                             v-model="estrelas5"
                                             :show-rating="false"
                                             :read-only="true"
                                             inactive-color="#DCDCDC"
                                             active-color="#FFFF00"
                                             v-bind:star-size="15">
                                </star-rating>
                                <span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes5 }}</span>
                            </md-layout>
                        </md-layout>

                        <md-layout>
                            <md-layout>
                                <star-rating style="margin-bottom: 5px"
                                             v-bind:max-rating="5"
                                             v-bind:increment="0.5"
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
                            <md-layout>
                                <star-rating style="margin-bottom: 5px"
                                             v-bind:max-rating="5"
                                             v-bind:increment="0.5"
                                             v-model="estrelas3"
                                             :show-rating="false"
                                             :read-only="true"
                                             inactive-color="#DCDCDC"
                                             active-color="#FFA500"
                                             v-bind:star-size="15">
                                </star-rating>
                                <span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes3 }}</span>
                            </md-layout>
                        </md-layout>

                        <md-layout>
                            <md-layout>
                                <star-rating style="margin-bottom: 5px"
                                             v-bind:max-rating="5"
                                             v-bind:increment="0.5"
                                             v-model="estrelas2"
                                             :show-rating="false"
                                             :read-only="true"
                                             inactive-color="#DCDCDC"
                                             active-color="OrangeRed"
                                             v-bind:star-size="15">
                                </star-rating>
                                <span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes2 }}</span>
                            </md-layout>
                        </md-layout>

                        <md-layout>
                            <md-layout>
                                <star-rating style="margin-bottom: 5px"
                                             v-bind:max-rating="5"
                                             v-bind:increment="0.5"
                                             v-model="estrelas1"
                                             :show-rating="false"
                                             :read-only="true"
                                             inactive-color="#DCDCDC"
                                             active-color="#FF0000"
                                             v-bind:star-size="15">
                                </star-rating>
                                <span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes1 }}</span>
                            </md-layout>
                        </md-layout>
                    </div>

                    <div style="width: 100%; float: right">
                        <md-divider style="margin-top: 10px; margin-bottom: 10px "/>

                        <md-list class="md-double-line md-dense">
                            <div v-for="comentario in farmacia.farmaciaAvaliacoes" :key="comentario.id">
                                <md-list class="custom-list md-triple-line">
                                    <md-list-item>
                                        <md-avatar>
                                            <img :src="comentario.usuarioImagem" alt="Avatar">
                                        </md-avatar>
                                        <div class="md-list-text-container">
                                            <span style="font-weight: bold">{{comentario.usuarioNome }}</span>
                                            <span>
                                                <star-rating v-bind:increment="0.5" style="margin-bottom: 5px"
                                                             v-bind:max-rating="5"
                                                             :show-rating="false"
                                                             :read-only="true"
                                                             v-model="comentario.valor"
                                                             inactive-color="#DCDCDC"
                                                             active-color="#FFD700"
                                                             v-bind:star-size="15">
                                                </star-rating>
                                            </span>
                                            <p>{{ comentario.comentario }}</p>
                                        </div>
                                        <span style="font-size: 10px">{{ comentario.momento | moment("ddd, DD MMM  YYYY")}}</span>
                                    </md-list-item>
                                    <!--resposta-->
                                    <md-list-item>
                                        <div class="md-list-text-container">
                                        <span style="font-weight: bold; text-align: right" v-if="comentario.resposta">
                                            {{ farmacia.farmaciaNome }}
                                        </span>
                                            <span style="text-align: right; margin-bottom: 5px">
                                                {{ comentario.resposta }}
                                            </span>
                                        </div>
                                    </md-list-item>
                                    <md-divider/>
                                </md-list>
                            </div>
                        </md-list>
                    </div>
                </md-card-content>
            </md-card>




        </div>

        <!--<menu-inferior/>-->
    </div>
</template>
<script>
    // import MenuInferior from '../../component/MenuInferior.vue'
    import { C } from '../../constantes'
    export default {
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
                farmacia: {farmaciaAvaliacoes: 0},
                avaliacaoId: null,

            }
        },
        methods: {
            openDialog(ref) {
                this.$refs[ref].open()
                this.$emit('chamou')
            },
            closeDialog(ref) {
                this.$refs[ref].close()
            },
            voltar () {
                this.$router.push('/farmacias')
            },
            comentar () {
                this.$store.commit('setarFarmaciaNome', this.farmacia.farmaciaNome)
                this.$router.push('/comentar/farmacia/' + this.farmacia.farmaciaId)
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