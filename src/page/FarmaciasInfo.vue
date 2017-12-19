<style scoped>
    .ultimo {margin-bottom: 50px !important;}
    .container { padding-top: 64px }
    h3 {color: darkred; background-color: #DCDCDC; padding: 5px}
    .nEstrelas {font-size: 12px; margin-top: 3px; margin-left: 10px}
    .md-divider {height: 0.5px !important}
    .nome {padding: 1px; font-size: 12px; color: white; background: black}
</style>
<template>
    <div>
        <menu-superior/>
        <div class="container">
            <div class="nome" v-if="nomeLogado.nome">
                <span>Olá, bem-vindo {{ nomeLogado.nome }}</span>
            </div>

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
                        <md-list-item>
                            <md-icon>phone</md-icon>
                            <span>Contatos</span>

                            <md-list-expand>
                                <md-list style="margin-left: 20px; font-size: 12px">
                                    <div class="md-inset" v-for="item in farmacia.contatos" :key="item.id">
                                        <md-layout>
                                            <md-layout>
                                                {{ item.texto }}
                                            </md-layout>
                                            <md-layout>
                                                {{ item.tipo }}
                                            </md-layout>
                                        </md-layout>
                                    </div>
                                </md-list>
                            </md-list-expand>
                        </md-list-item>
                        <md-divider/>

                        <md-list-item>
                            <md-icon>location_on</md-icon>
                            <span>Endereço</span>

                            <md-list-expand>
                                <md-list style="margin-left: 20px; font-size: 12px">
                                    <div class="md-inset">
                                        {{ farmacia.enderecoLogradouro }}, Nº {{ farmacia.enderecoNumero }}
                                    </div>
                                    <div class="md-inset">
                                        {{ farmacia.enderecoBairro }}
                                    </div>
                                </md-list>
                            </md-list-expand>
                        </md-list-item>
                        <md-divider/>

                        <md-list-item>
                            <md-icon>access_time</md-icon>
                            <span>Funcionamento</span>

                            <md-list-expand>
                                <md-list style="margin-left: 20px; font-size: 12px">
                                    <div class="md-inset" v-for="funcionamento in farmacia.farmaciaFuncionamentos">
                                        <md-layout>
                                            <md-layout>
                                                {{ funcionamento.diaSemama }}
                                            </md-layout>
                                            <md-layout>
                                                {{ funcionamento.inicio }}
                                            </md-layout>
                                            <md-layout>
                                                horas às
                                            </md-layout>
                                            <md-layout>
                                                {{ funcionamento.fim }}
                                            </md-layout>
                                            <md-layout>
                                                horas
                                            </md-layout>
                                        </md-layout>
                                    </div>
                                </md-list>
                            </md-list-expand>
                        </md-list-item>
                        <md-divider/>


                        <md-list-item>
                            <md-icon>payment</md-icon>
                            <span>Forma de Pagamento</span>

                            <md-list-expand>
                                <md-list style="margin-left: 20px; font-size: 12px">
                                    <div class="md-inset" v-for="pagamento in farmacia.farmaciaPagamentos">
                                        <md-layout>
                                            {{ pagamento.tipo }}
                                        </md-layout>
                                    </div>
                                </md-list>
                            </md-list-expand>
                        </md-list-item>
                        <md-divider/>
                    </md-list>

                    <h3 class="md-subheading" style="margin-top: 20px; margin-bottom: 15px">Avaliações</h3>
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
                        <div>
                            <star-rating style="margin-bottom: 5px; margin-left: 75px"
                                         v-bind:max-rating="5"
                                         v-model="estrelas5"
                                         :show-rating="false"
                                         :read-only="true"
                                         inactive-color="#DCDCDC"
                                         active-color="#FFD700"
                                         v-bind:star-size="15">
                            </star-rating>
                        </div>

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
                            <div v-for="(a, index) in farmacia.farmaciaAvaliacoes" :key="a.id">
                                <md-list-item>

                                    <div class="md-list-text-container">
                                        <md-layout>
                                            <md-layout>
                                            <span style="font-weight: bold">
                                                {{ a.usuarioNome.toUpperCase() }} {{ a.usuarioSobrenome.toUpperCase() }}
                                            </span>
                                            </md-layout>
                                            <md-layout>
                                            <span>
                                             {{ a.momento | moment("ddd, DD MMM  YYYY")}}
                                            </span>
                                                <md-icon style="margin-left: 10px"
                                                         v-if="a.comentario && farmacia.farmaciaId === nomeLogado.id"
                                                         @click.native="openDialog(a.id)">
                                                    mode_edit
                                                </md-icon>
                                            </md-layout>
                                        </md-layout>
                                        <star-rating v-bind:increment="0.5" style="margin-bottom: 5px"
                                                     v-bind:max-rating="5"
                                                     :show-rating="false"
                                                     :read-only="true"
                                                     v-model="a.valor"
                                                     inactive-color="#DCDCDC"
                                                     active-color="#FFD700"
                                                     v-bind:star-size="15">
                                        </star-rating>
                                        <span style="margin-bottom: 5px">{{ a.comentario }}</span>

                                        <span style="font-weight: bold; text-align: right" v-if="a.resposta">
                                        {{ farmacia.farmaciaNome }}
                                    </span>
                                        <span style="text-align: right; margin-bottom: 5px">{{ a.resposta }}</span>
                                    </div>
                                </md-list-item>
                                <md-divider/>
                            </div>
                        </md-list>
                    </div>
                </md-card-content>
            </md-card>
        </div>


        <!--Dialog Resposta-->
        <md-dialog-prompt
                :md-title="prompt.title"
                :md-ok-text="prompt.ok"
                :md-cancel-text="prompt.cancel"
                :md-input-maxlength="prompt.maxlength"
                :md-input-placeholder="prompt.placeholder"
                v-model="prompt.value"
                @close="onClose"
                ref="dialog6">
        </md-dialog-prompt>

        <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
            <span>Resposta cadastrada com sucesso!</span>
            <md-button class="md-accent"  @click="$refs.snackbar.close()">Fechar</md-button>
        </md-snackbar>

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
            if (this.$store.state.logado) {
                this.nomeLogado = this.$store.state.logado
            }
        },
        data () {
            return {
                nomeLogado: {nome: null},
                prompt: {
                    title: 'Olá, Digite sua resposta.',
                    ok: 'Salvar',
                    cancel: 'Cancelar',
                    id: 'name',
                    name: 'name',
                    placeholder: 'resposta...',
                    maxlength: 120,
                    value: ''
                },
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
                dto: {resposta: null}

            }
        },
        methods: {
            openDialog(id) {
                this.avaliacaoId = id
                this.$refs.dialog6.open();
                this.prompt.value = ''
            },
            onClose() {
                this.dto.resposta = this.prompt.value
                this.$http.put(C.URL.AVALIACAO.RESPOSTA + this.avaliacaoId, this.dto).then(res => {
                    this.$refs.snackbar.open()
                    this.buscarFarmacia()
                })
            },
            comentar () {
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