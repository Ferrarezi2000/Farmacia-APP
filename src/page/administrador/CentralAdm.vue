<style scoped>
    .container { padding-top: 64px }
    .central {padding: 6px; font-weight: bold; font-size: 12px ; background-color: #e3e8e7}
</style>
<template>
    <div>
        <menu-superior/>
        <div class="container"></div>
        <div class="central">
            <span>Olá {{nomeLogado.nome}}, bem-vindo à Central do Administrador</span>
        </div>

        <md-card>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{ nomeLogado.nome }}</div>
                    <div class="md-subhead">Sua média é {{ nomeLogado.media }}
                        <star-rating style="margin-bottom: 5px"
                                     v-bind:max-rating="5"
                                     v-bind:increment="0.5"
                                     v-model="nomeLogado.media"
                                     :show-rating="false"
                                     :read-only="true"
                                     inactive-color="#DCDCDC"
                                     active-color="#FFFF00"
                                     v-bind:star-size="15">
                        </star-rating>
                    </div>
                </md-card-header-text>
                <!--Menu-->
                <md-menu md-size="4" md-direction="bottom left">
                    <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon>more_vert</md-icon>
                    </md-button>
                    <md-menu-content>
                        <md-menu-item @click="editarPerfil()">
                            <span>Editar Perfil</span>
                            <md-icon>assignment_ind</md-icon>
                        </md-menu-item>
                        <md-divider/>

                        <md-menu-item @click="editarContatos()">
                            <span>Editar Contatos</span>
                            <md-icon>phone</md-icon>
                        </md-menu-item>
                        <md-divider/>

                        <md-menu-item @click="editarEndereco()">
                            <span>Editar Endereço</span>
                            <md-icon>place</md-icon>
                        </md-menu-item>
                        <md-divider/>

                        <md-menu-item @click="editarAdicional()" v-if="nomeLogado.adicionais">
                            <span>Editar {{ nomeLogado.tituloAdicionais }}</span>
                            <md-icon>map</md-icon>
                        </md-menu-item>
                        <md-divider/>

                        <md-menu-item @click="sair()">
                            <span>Sair</span>
                            <md-icon>exit_to_app</md-icon>
                        </md-menu-item>
                    </md-menu-content>
                </md-menu>
            </md-card-header>

            <md-card-content>
                <div v-if="nomeLogado.avaliacoes.length !== 0">
                    <div class="md-subhead" v-if="nomeLogado.avaliacoes.length === 1">
                        Você tem {{ nomeLogado.avaliacoes.length }} avaliação sem resposta!
                    </div>
                    <div class="md-subhead" v-else>Você tem {{ nomeLogado.avaliacoes.length }} avaliações sem respostas!</div>
                    <div class="md-subhead">Para melhorar sua avaliação não esqueça de responder...</div>
                </div>
                <div v-else>
                    <div class="md-subhead">Parabéns... Você não possui nenhuma avaliação sem resposta..</div>
                </div>

                <md-list v-if="nomeLogado.avaliacoes.length !== 0">
                    <md-list-item>
                        <md-icon>phone</md-icon>
                        <span>Avaliações Esperando sua Resposta</span>

                        <md-list-expand>
                            <md-list>
                                <md-list class="md-double-line md-dense">
                                    <div v-for="(item, index) in nomeLogado.avaliacoes" :key="item.id">
                                        <md-list-item>
                                            <div class="md-list-text-container">
                                                <md-layout>
                                                    <md-layout>
                                                        <span style="font-weight: bold">
                                                            {{ item.usuarioNome }}
                                                            {{ item.usuarioSobrenome }}
                                                        </span>
                                                    </md-layout>
                                                    <md-layout>
                                                        <span>
                                                         {{ item.momento | moment("ddd, DD MMM  YYYY")}}
                                                        </span>
                                                     </md-layout>
                                                </md-layout>
                                                <star-rating v-bind:increment="0.5" style="margin-bottom: 5px"
                                                             v-bind:max-rating="5"
                                                             :show-rating="false"
                                                             :read-only="true"
                                                             v-model="item.valor"
                                                             inactive-color="#DCDCDC"
                                                             active-color="#FFD700"
                                                             v-bind:star-size="15">
                                                </star-rating>
                                                <span style="margin-bottom: 5px">{{ item.comentario }}</span>
                                            </div>
                                        </md-list-item>
                                        <div style="width: 100%; text-align: center">
                                        <md-button class="md-raised" @click="openDialog(item.id, index)">
                                           <span>Responder</span>
                                        </md-button>
                                        </div>
                                        <md-divider/>
                                    </div>
                                </md-list>
                            </md-list>
                        </md-list-expand>
                    </md-list-item>
                </md-list>
            </md-card-content>
        </md-card>



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
            <md-button class="md-accent" @click="$refs.snackbar.close()">Fechar</md-button>
        </md-snackbar>
    </div>
</template>
<script>
    import MenuSuperior from '../../component/Menu.vue'
    import { C } from '../../constantes'

    export default {
        components: {MenuSuperior},
        created () {
            if (this.$store.state.logado) {
                this.nomeLogado = this.$store.state.logado
            }
        },
        data () {
            return {
                prompt: {
                    title: 'Olá, Digite sua resposta.',
                    ok: 'Salvar',
                    cancel: 'Cancelar',
                    id: 'name',
                    name: 'name',
                    placeholder: 'resposta...',
                    maxlength: 60,
                    value: ''
                },
                vertical: 'bottom',
                horizontal: 'center',
                mensagem: null,
                duration: 4000,
                dto: {resposta: null},
                removerItemLista: null,
                nomeLogado: {avaliacoes: []}
            }
        },
        methods: {
            editarAdicional () {
                this.$router.push('/adiministrador/adicionais/')
            },
            editarEndereco () {
                this.$router.push('/adiministrador/endereco/')
            },
            editarPerfil () {
                this.$router.push('/adiministrador/perfil/')
            },
            editarContatos () {
                this.$router.push('/adiministrador/contatos/')
            },
            sair () {
                this.nomeLogado = {}
                this.$router.push('/home')
                this.$store.commit('setarLogado', this.nomeLogado)
            },
            openDialog(id, index) {
                this.avaliacaoId = id
                this.removerItemLista = index
                this.$refs.dialog6.open();
                this.prompt.value = ''
            },
            onClose() {
                this.dto.resposta = this.prompt.value
                if (this.dto.resposta) {
                    this.$http.put(C.URL.AVALIACAO.RESPOSTA + this.avaliacaoId, this.dto).then(res => {
                        this.$refs.snackbar.open()
                        this.nomeLogado.avaliacoes.splice(this.removerItemLista, 1)
                    })
                }
            },
        }
    }
</script>