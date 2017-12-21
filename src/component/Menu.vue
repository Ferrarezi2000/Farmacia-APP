<style scoped>
    .danger {color: red}
    .menu {z-index: 2 !important; position: fixed !important; top: 0px !important; width: 100% !important;}
    .corMenu {background-color: red !important;}
    .stand {position: absolute; width: 100%; bottom: 0; padding: .5em; text-align: left;
            font-size: 13px; color: white; background-color: red}
</style>
<template>
    <div>
        <md-toolbar class="corMenu menu">
            <md-button class="md-icon-button" @click.native="openNav">
                <md-icon>menu</md-icon>
            </md-button>

            <div>
                <span style="font-weight: bold; font-size: 18px; font-style: italic">Farmácias</span>
                <!--<img src="../assets/sumicity.png" style="height: 15px;">-->
            </div>
        </md-toolbar>

        <md-sidenav :md-swipeable="true" class="md-left" ref="nav">
            <md-toolbar class="md-large" style="background-color: red; color: white">
                <div style="text-align: center">
                    <md-avatar class="md-large">
                        <img src="../assets/cruz.png" alt="People">
                    </md-avatar>
                    <h3 class="md-title">Plantão de Farmácias</h3>
                </div>
            </md-toolbar>

            <div>
                <md-list>
                    <md-subheader>Navegar no APP</md-subheader>

                    <md-list-item>
                        <router-link to="/home">
                            <md-icon>home</md-icon>
                            <span>Plantão do Dia</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <router-link to="/plantoes">
                            <md-icon>date_range</md-icon>
                            <span>Plantões do Mês</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <router-link to="/farmacias">
                            <md-icon>add</md-icon>
                            <span>Farmácias</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <router-link to="/patrocinadores">
                            <md-icon>assignment_turned_in</md-icon>
                            <span>Patrocinadores</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item v-if="nomeLogado.id">
                        <router-link to="/adm">
                            <md-icon>verified_user</md-icon>
                            <span>Painel do Administrador</span>
                        </router-link>
                    </md-list-item>

                </md-list>
            </div>


            <div class="stand">
                <span>
                    Stand By - Soluções em Informática
                </span>
                <span style="margin-left: 10px" v-if="!nomeLogado.id">
                    <md-icon style="color: yellow; font-size: 20px"
                             @click.native="openDialog()">
                        star_rate
                    </md-icon>
                </span>
            </div>
        </md-sidenav>


        <!--Logar-->
        <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1" @close="onClose">
            <md-dialog-title>Olá, é um Patrocinador?</md-dialog-title>

            <md-dialog-content>
                <md-input-container>
                    <label :class="{'danger': errors.has('sobrenome') }">Usuário</label>
                    <md-input name="sobrenome" v-model="dto.usuarioAcesso" v-validate="'required'" required/>
                </md-input-container>

                <md-input-container md-has-password>
                    <label :class="{'danger': errors.has('senha') }">Senha</label>
                    <md-input name="senha" v-validate="'required'" required v-model="dto.senhaAcesso" type="password" />
                </md-input-container>
            </md-dialog-content>

            <span style="color: red; margin-left: 20px">{{acessoNegado}}</span>

            <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog()">Fechar</md-button>
                <md-button class="md-primary" @click="logar()">Logar</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>

    import { C } from '../constantes'
    export default{
        created() {
            if (this.$store.state.logado) {
                this.nomeLogado = this.$store.state.logado
            }
        },
        data() {
            return {
                dto: {usuarioAcesso: null, senhaAcesso: null},
                dataAtual: null,
                titulo: 'Farmácias',
                icone: 'add',
                acessoNegado: '',
                logado: {},
                nomeLogado: {id: null}
            }
        },
        methods: {
            openDialog() {
                this.$refs.dialog1.open();
            },
            logar() {
                this.$validator.validateAll().then(res => {
                    if (res) {
                        this.$http.post(C.URL.LOGAR.BASE, this.dto).then(res => {
                            this.$store.commit('setarLogado', res.body)
                            this.$refs.dialog1.close()
                            this.$router.push('/adm')
                        }, res => {
                            this.acessoNegado = res.body.mensagem
                        })
                    }
                })
            },
            closeDialog() {
                this.$refs.dialog1.close()
            },
            onClose(type) {
                this.acessoNegado = null
            },
            openNav () {
                this.$refs.nav.toggle();
            }
        }
    }
</script>
