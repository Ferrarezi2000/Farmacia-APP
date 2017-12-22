<style scoped>
    .container { padding-top: 64px }
    .central {padding: 6px; font-weight: bold; font-size: 12px ; background-color: #e3e8e7}
    .menu {z-index: 2 !important; position: fixed !important; top: 0px !important; width: 100% !important;}
    .corMenu {background-color: red !important;}
    .valor {background-color: white; text-align: right; border: white}
    h3 {background-color: #e3e8e7; font-size: 12px; font-weight: bold; padding: 5px}
</style>
<template>
    <div>
        <!--Menu-->
        <md-toolbar class="corMenu menu">
                <md-button class="md-icon-button" @click="voltar()">
                    <md-icon>keyboard_arrow_left</md-icon>
                </md-button>
            <div>
                <span style="font-weight: bold; font-size: 18px; font-style: italic">{{ nomeLogado.nome }}</span>
            </div>
        </md-toolbar>


        <div class="container"></div>
        <div class="central">
            <span>Olá {{nomeLogado.nome}}, bem-vindo à Central do Administrador</span>
        </div>

        <md-card>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{ nomeLogado.nome }}</div>
                </md-card-header-text>
            </md-card-header>

            <md-card-content>

                <h3>Login</h3>
                <md-button class="md-raised" style="margin-top: 15px"
                           @click="$refs.contatoModal.open()">Novo</md-button>

                <md-table>
                    <md-table-header>
                        <md-table-row>
                            <md-table-head>Número</md-table-head>
                            <md-table-head>Tipo</md-table-head>
                            <md-table-head>Delete</md-table-head>
                        </md-table-row>
                    </md-table-header>

                    <md-table-body>
                        <md-table-row v-for="(item, index) in nomeLogado.contatos" :key="index">
                            <md-table-cell>{{ item.numero }}</md-table-cell>
                            <md-table-cell>{{ item.tipo }}</md-table-cell>
                            <md-table-cell>
                                <md-icon style="color: red" @click.native="remover(index)">delete</md-icon>
                            </md-table-cell>
                        </md-table-row>
                    </md-table-body>
                </md-table>

                <md-button class="md-raised md-primary" @click="salvar()">Salvar</md-button>

            </md-card-content>
        </md-card>

        <!--modal resposta-->
        <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
            <span>{{ mensagem }}</span>
            <md-button class="md-accent" @click="$refs.snackbar.close()">Fechar</md-button>
        </md-snackbar>


        <!--modal contatos-->
        <md-dialog md-open-from="#custom" md-close-to="#custom" ref="contatoModal">
            <md-dialog-title>Novo Contato</md-dialog-title>
            <md-dialog-content>

                <div class="field-group">
                    <md-input-container>
                        <label>Tipo</label>
                        <md-select name="tipo" id="movie" v-model="contato.tipo" required>
                            <md-option value="Fixo">Fixo</md-option>
                            <md-option value="Celular">Celular</md-option>
                        </md-select>
                    </md-input-container>
                    <span v-show="errors.has('tipo')" class="help is-danger">{{ errors.first('tipo') }}</span>
                </div>

                <md-input-container>
                    <label>Número</label>
                    <md-input v-model="contato.numero" required v-validate="'required'" name="numero"
                              v-mask="['(##) ####-####','(##) #####-####']"/>
                </md-input-container>
                <span v-show="errors.has('numero')" class="help is-danger">{{ errors.first('numero') }}</span>
            </md-dialog-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="$refs.contatoModal.close()">Cancelar</md-button>
                <md-button class="md-raised md-primary" @click="adicionarNovoContato()">Adicionar</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>
<script>
    import MenuSuperior from '../../component/Menu.vue'
    import { C } from '../../constantes'
    import {mask} from 'vue-the-mask'

    export default {
        components: {MenuSuperior},
        directives: { mask },
        created () {
            if (this.$store.state.logado) {
                this.nomeLogado = this.$store.state.logado
            }
        },
        data () {
            return {
                vertical: 'bottom',
                horizontal: 'center',
                mensagem: null,
                duration: 4000,
                dto: {resposta: null},
                removerItemLista: null,
                nomeLogado: {avaliacoes: []},
                contato: {tipo: null, numero: null}
            }
        },
        methods: {
            adicionarNovoContato() {
                this.$validator.validateAll().then(res => {
                    if (res) {
                        this.nomeLogado.contatos.push(this.contato)
                        this.$refs.contatoModal.close()
                        this.contato = {}
                    }
                })

            },
            remover (index) {
                this.nomeLogado.contatos.splice(index, 1)
            },
            voltar () {
              this.$router.push('/adm')
            },
            salvar () {
                this.$http.post(C.URL.FARMACIA.EDITAR_CONTATO + this.nomeLogado.id, this.nomeLogado).then(res => {
                    this.mensagem = 'Contatos atualizados com sucesso!'
                    this.$refs.snackbar.open()
                })
            }
        }
    }
</script>