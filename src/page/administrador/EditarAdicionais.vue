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

                <h3>{{ nomeLogado.tituloAdicionais }}</h3>
                <md-input-container>
                    <label>Título</label>
                    <md-input v-model="nomeLogado.tituloAdicionais"></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Texto informativo</label>
                    <md-input v-model="nomeLogado.textoAdicionais"></md-input>
                </md-input-container>

                <h3>Itens</h3>
                <md-button class="md-raised" style="margin-top: 15px"
                           @click="$refs.adcModal.open()">Novo</md-button>

                <md-list class="md-double-line md-dense">
                    <div v-for="(item, index) in nomeLogado.listaAdicionais" :key="item.id">
                        <md-list class="custom-list md-triple-line">
                            <md-list-item>
                                <div class="md-list-text-container">
                                    <span>{{ item.item }}</span>
                                    <p>{{ item.subItem}}</p>
                                </div>
                                <div>
                                    <money v-model="item.valor" disabled class="valor"/>
                                    <md-icon style="color: red" @click.native="remover(index)">delete</md-icon>
                                </div>
                                <md-divider class="md-inset"/>
                            </md-list-item>
                            <md-divider/>
                        </md-list>
                    </div>
                </md-list>

                <md-button class="md-raised md-primary" @click="salvar()">Salvar</md-button>

            </md-card-content>
        </md-card>

        <!--modal resposta-->
        <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
            <span>{{ mensagem }}</span>
            <md-button class="md-accent" @click="$refs.snackbar.close()">Fechar</md-button>
        </md-snackbar>


        <!--modal contatos-->
        <md-dialog md-open-from="#custom" md-close-to="#custom" ref="adcModal">
            <md-dialog-title>Novo Contato</md-dialog-title>
            <md-dialog-content>

                <md-input-container>
                    <label>Item</label>
                    <md-input v-model="adicional.item" required v-validate="'required'" name="item"/>
                </md-input-container>
                <span v-show="errors.has('item')" class="help is-danger">{{ errors.first('item') }}</span>

                <md-input-container>
                    <label>Sub-item</label>
                    <md-input v-model="adicional.subItem"/>
                </md-input-container>

                <md-input-container>
                    <label>Valor</label>
                    <md-input v-model="adicional.valor"/>
                </md-input-container>
            </md-dialog-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="$refs.adcModal.close()">Cancelar</md-button>
                <md-button class="md-raised md-primary" @click="adicionarNovoAdicional()">Adicionar</md-button>
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
                nomeLogado: {avaliacoes: []},
                adicional: {subItem: null, item: null, valor: null}
            }
        },
        methods: {
            adicionarNovoAdicional() {
                this.$validator.validateAll().then(res => {
                    if (res) {
                        this.nomeLogado.listaAdicionais.push(this.adicional)
                        this.$refs.adcModal.close()
                        this.adicional = {}
                    }
                })
            },
            remover (index) {
                this.nomeLogado.listaAdicionais.splice(index, 1)
            },
            voltar () {
              this.$router.push('/adm')
            },
            salvar () {
                this.$http.post(C.URL.FARMACIA.EDITAR_ADICIONAIS + this.nomeLogado.id, this.nomeLogado).then(res => {
                    this.mensagem = 'Adicionais atualizados com sucesso!'
                    this.$refs.snackbar.open()
                    console.log('passou')
                })
            }
        }
    }
</script>