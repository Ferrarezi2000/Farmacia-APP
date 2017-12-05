<template>
    <div>

        <md-toolbar>

            <md-button class="md-icon-button" @click.native="openNav">
                <md-icon>menu</md-icon>
            </md-button>

            <div>
                <img src="../assets/sumicity.png" style="height: 15px;">
            </div>
            <!--<h2 class="md-title">Sumicity APP</h2>-->
        </md-toolbar>

        <md-subheader class="nome"> Olá, {{ cliente.nome }} </md-subheader>

        <div class="subtitulo md-title" v-if="titulo">
            <md-icon>{{ icone }}</md-icon>
            {{ titulo }}

        </div>


        <md-sidenav :md-swipeable="true" class="md-left" ref="nav">
            <md-toolbar class="md-large">
                <div>
                    <h3 class="md-title">{{ cliente.nome }}</h3>
                    <p> Tel: {{ cliente.telefone }} <br/> Email: {{ cliente.email }} </p>
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
            this.service = new ClienteService();
            this.service.find(this.load.bind(this));
        },
        data() {
            return {cliente: {}}
        },
        methods: {
            sair: function () {
                this.service.logoff();
                this.$router.push('/login');
            },
            load: function (transaction, results) {
                this.cliente = results.rows.item(0);
            },
            openNav: function () {
                this.$refs.nav.toggle();
            }
        }
    }
</script>
<style scoped>
    .nome {
        color: #607D8B;
        background: #ECEFF1;
    }

    .subtitulo {
        padding-left: .5em;
        margin: .5em;
        color: #1976D2;
    }

    .sair {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: .5em;
        text-align: right;
        border-top: 1px solid #ECEFF1;
    }
</style>