<template>
    <div class="body">
        <div class="login">
            <div class="logo  animated fadeIn">
                <router-link to="/home">
                <img src="../assets/logo_novo.png">
                </router-link>
            </div>

            <form @submit.stop.prevent="recuperarSenha">
                <md-card class="formulario  animated fadeInUp">

                    <md-card-content>

                        <md-tabs class="md-transparent" md-right>
                            <md-tab id="fisico" md-icon="face">

                                <md-input-container>

                                    <md-icon>account_circle</md-icon>
                                    <label>CPF</label>
                                    <md-input type="tel" placeholder="999.999.999-99"
                                              v-model.lazy="usuario.login" v-mask="'###.###.###-##'"/>
                                </md-input-container>
                            </md-tab>

                            <md-tab id="juridico" md-icon="business">
                                <md-input-container>
                                    <md-icon>account_circle</md-icon>
                                    <label>CNPJ</label>
                                    <md-input type="tel" placeholder="99.999.999/9999-99"
                                              v-model.lazy="usuario.login" v-mask="'##.###.###/####-##'"/>
                                </md-input-container>
                            </md-tab>
                        </md-tabs>

                    </md-card-content>

                    <md-card-actions>
                        <md-layout md-align="start">
                            <router-link to="/login">
                                <span>Voltar</span>
                            </router-link>
                        </md-layout>

                        <md-button type="submit" class="md-raised md-primary">Enviar


                        </md-button>
                    </md-card-actions>

                </md-card>
            </form>


            <air-aviso ref="aviso"/>


            <!--Dialog Resposta-->
            <md-dialog ref="resposta" class="centralizado">
                <md-dialog-title style="color: green">Sucesso</md-dialog-title>

                <md-dialog-content>
                    Sua senha foi enviada para o email...
                    <br/> <br/>
                    <b>{{ emailResposta }}</b>
                    <br/>

                </md-dialog-content>

                <md-dialog-actions>
                    <md-button @click.native="closeDialog('resposta')">Fechar</md-button>
                </md-dialog-actions>
            </md-dialog>

        </div>


        <div class="fundo_baixo">
            <img src="../assets/fundo_baixo.png" style="width: 100%">
        </div>
    </div>
</template>
<script>
    import ClienteService from '../service/ClienteService';

    export default {
        created() {
            this.service = new ClienteService();
            this.usuario.login = localStorage.getItem('login');
        },
        data() {
            return {
                usuario: {login: '', senha: ''},
                emailResposta: ''
            }
        },
        methods: {
            closeDialog() {
                this.$refs.resposta.close();
                this.$router.push('/login');
            },

            recuperarSenha: function () {

                this.$refs.aviso.carregar();
                this.$http.post('cliente/recuperar_senha', this.usuario, {headers: {profile: 'producao'}}).then(response => {
                    this.$refs.aviso.carregado();
                    this.emailResposta = response.body.email;
                    this.$refs.resposta.open();
                }, response => {
                    this.$refs.aviso.abrir(response);
                });
            }
        }
    }
</script>
<style scoped>
    .centralizado {
        text-align: center;
    }

    .login {
        height: 100%;
        padding: 1em;
        background: #1976D2;
    }

    .formulario {
        margin-top: 3.5em;
    }

    .fundo_baixo {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .body{
        background-color: #1976D2 !important;
        height: 100%;
    }
</style>