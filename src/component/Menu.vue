<template>
    <div>
        <md-toolbar class="corMenu">

            <md-button class="md-icon-button" @click.native="openNav">
                <md-icon>menu</md-icon>
            </md-button>

            <div>
                <span>Farmácias</span>
                <!--<img src="../assets/sumicity.png" style="height: 15px;">-->
            </div>
        </md-toolbar>

        <md-subheader class="nome" style="min-height: 30px"> {{ this.dataAtual | moment("ddd, DD MMM  YYYY -  HH:mm") }}h </md-subheader>

        <div class="subtitulo md-title" v-if="titulo">
            <md-icon>{{ icone }}</md-icon>
            {{ titulo }}

        </div>


        <md-sidenav :md-swipeable="true" class="md-left" ref="nav">
            <md-toolbar class="md-large">
                <div>
                    <!--<h3 class="md-title">{{ cliente.nome }}</h3>-->
                    <!--<p> Tel: {{ cliente.telefone }} <br/> Email: {{ cliente.email }} </p>-->
                </div>
            </md-toolbar>

            <div>
                <md-list>
                    <md-subheader>Navegar no APP</md-subheader>

                    <md-list-item>
                        <router-link to="/dashboard">
                            <md-icon>home</md-icon>
                            <span>Início</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <router-link to="/cliente">
                            <md-icon>account_box</md-icon>
                            <span>Dados Cadastrais</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <router-link to="/contrato">
                            <md-icon>description</md-icon>
                            <span>Contratos</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <router-link to="/boleto">
                            <md-icon>event_available</md-icon>
                            <span>Boletos</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <router-link to="/alterarSenha">
                            <md-icon>lock</md-icon>
                            <span>Alterar Senha</span>
                        </router-link>
                    </md-list-item>
                </md-list>
            </div>

            <div class="sair">
                <md-button @click.native="sair">
                    <md-icon>exit_to_app</md-icon>
                    Sair
                </md-button>
            </div>
        </md-sidenav>
    </div>
</template>

<script>
    import ClienteService from '../service/ClienteService';

    export default{
        props: ['titulo', 'icone'],
        created() {
            this.dataAtual = new Date()
        },
        data() {
            return {dataAtual: null}
        },
        methods: {
            openNav () {
                this.$refs.nav.toggle();
            }
        }
    }
</script>
<style scoped>
    .corMenu {background-color: red !important;}
    .nome {color: white; background: lightsalmon}
    .subtitulo {padding-left: .5em; margin: .5em; color: #1976D2}
    .sair {position: absolute; width: 100%; bottom: 0; padding: .5em; text-align: right; border-top: 1px solid #ECEFF1}
</style>