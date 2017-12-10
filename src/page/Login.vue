<template>
    <div class="body">
        <div class="login">
            <div class="logo  animated fadeIn" style="padding-top: 1.5em !important;">
                <router-link to="/home">
                    <img src="../assets/logo_novo.png">
                </router-link>
            </div>

            <form @submit.stop.prevent="logar">
                <md-card class="formulario  animated fadeInUp">

                    <md-card-content style="padding-bottom: 0px !important;">

                        <md-tabs class="md-transparent" md-right>
                            <md-tab id="fisico" md-icon="face">
                                <md-input-container>
                                    <md-icon>account_circle</md-icon>
                                    <label>CPF</label>
                                    <md-input type="tel" placeholder="999.999.999-99"
                                              v-model.lazy="usuario.login" v-mask="'###.###.###-##'"/>
                                </md-input-container>

                                <md-input-container md-has-password>
                                    <md-icon>lock</md-icon>
                                    <label>Senha</label>
                                    <md-input type="password" placeholder="Informe sua senha"
                                              v-model.trim="usuario.senha"/>
                                </md-input-container>
                            </md-tab>

                            <md-tab id="juridico" md-icon="business">
                                <md-input-container>
                                    <md-icon>account_circle</md-icon>
                                    <label>CNPJ</label>
                                    <md-input type="tel" placeholder="99.999.999/9999-99"
                                              v-model.lazy="usuario.login" v-mask="'##.###.###/####-##'"/>
                                </md-input-container>

                                <md-input-container md-has-password>
                                    <md-icon>lock</md-icon>
                                    <label>Senha</label>
                                    <md-input type="password" placeholder="Informe sua senha"                                           v-model.trim="usuario.senha"/>
                                </md-input-container>
                            </md-tab>
                        </md-tabs>

                    </md-card-content>

                    <md-card-actions>

                        <md-button type="submit" class="md-raised md-primary">Entrar


                            <md-icon>forward</md-icon>
                        </md-button>

                    </md-card-actions>

                    <md-divider/>
                    <md-card-actions>
                        <md-layout md-align="start">
                            <router-link to="/recuperarSenha">
                                <span>Esqueci minha senha0000</span>
                            </router-link>
                        </md-layout>
                    </md-card-actions>

                </md-card>
            </form>


            <air-aviso ref="aviso"/>
        </div>
        <div class="fundo_baixo">
            <img src="../assets/fundo_baixo.png" style="width: 100%">
        </div>
    </div>
</template>
<script>
    import { C } from '../constantes'

    export default {
        created() {
            this.data = new Date()
            this.carregarPlantao()
        },
        data() {
            return {
                data: {},
                farmacias: []
            }
        },
        methods: {
            carregarPlantao() {
                console.log('passou')
                this.$http.post(C.URL.PLANTAO.PORDIA, this.data).then(res => {
                    this.farmacias = res.body
                    console.log(this.farmacias)
                });
            }
        }
    }
</script>
<style scoped>
    .login {
        height: 100%;
        padding: 1em;
        background: #1976D2;
    }

    .formulario {
        margin-top: 2em;
    }

    .body {
        background-color: #1976D2 !important;
        height: 100%;
    }

    .fundo_baixo {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>