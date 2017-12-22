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
                <md-input-container>
                    <label>Texto informativo</label>
                    <md-input v-model="nomeLogado.texto"></md-input>
                </md-input-container>

                <h3>Login</h3>
                <md-input-container>
                    <label>Usuário</label>
                    <md-input v-model="nomeLogado.usuarioAcesso"></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Senha</label>
                    <md-input v-model="nomeLogado.senhaAcesso"></md-input>
                </md-input-container>

                <md-button class="md-raised md-primary" @click="salvar()">Salvar</md-button>

            </md-card-content>
        </md-card>

        <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
            <span>{{ mensagem }}</span>
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
            voltar () {
              this.$router.push('/adm')
            },
            salvar () {
                this.$http.post(C.URL.FARMACIA.EDITAR_PERFIL + this.nomeLogado.id, this.nomeLogado).then(res => {
                    this.mensagem = 'Perfil atualizado com sucesso!'
                    this.$refs.snackbar.open()
                })
            }
        }
    }
</script>