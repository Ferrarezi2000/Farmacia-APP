<template>
    <div>
        <air-menu/>

        <div class="conteudo">
            <form @submit.stop.prevent="alterarSenha">
                <md-card class="formulario  animated fadeInUp">

                    <md-card-content>

                        <md-input-container md-has-password>
                            <md-icon>lock_outline</md-icon>
                            <label>Senha Atual</label>
                            <md-input type="password" placeholder="Informe sua senha" v-model.trim="usuario.senha"
                                      required/>
                        </md-input-container>

                        <md-input-container md-has-password>
                            <md-icon>lock</md-icon>
                            <label>Nova Senha</label>
                            <md-input type="password" placeholder="Informe sua nova senha"
                                      v-model.trim="usuario.novaSenha" required/>
                        </md-input-container>

                        <md-input-container md-has-password>
                            <md-icon>lock</md-icon>
                            <label>Confirmar Nova Senha</label>
                            <md-input type="password" placeholder="Confirme sua nova senha"
                                      v-model.trim="confirmarSenha" required/>
                        </md-input-container>

                    </md-card-content>

                    <md-card-actions>
                        <md-button type="submit" class="md-raised md-primary">Enviar</md-button>
                    </md-card-actions>

                </md-card>
            </form>
        </div>

        <!--Dialog Resposta-->
        <md-dialog ref="resposta" class="centralizado">
            <md-dialog-title style="color: green">Sucesso</md-dialog-title>

            <md-dialog-content>
                Sua senha foi alterada...
                <br/> <br/>
                <!--<b>{{ emailResposta }}</b>-->
                <br/>

            </md-dialog-content>

            <md-dialog-actions>
                <md-button @click.native="closeDialog('resposta')">Fechar</md-button>
            </md-dialog-actions>
        </md-dialog>

        <!--Dialog-->

        <air-aviso ref="aviso"/>
    </div>
</template>
<script>
    import Menu from '../component/Menu.vue';
    import Botao from '../component/BotaoGrande.vue';
    import ClienteService from '../service/ClienteService';

    export default{
        created(){
            this.service = new ClienteService();
            this.usuario.login = localStorage.getItem('login');
        },
        data() {
            return {
                usuario: {login: '', senha: '', novaSenha: ''},
                confirmarSenha: '',
                senha_resposta:""
            }
        },
        components: {'air-menu': Menu, 'air-botao': Botao},
        methods: {
            closeDialog() {
                this.$refs.resposta.close();
                this.$router.push('/dashboard');
            },

            alterarSenha: function () {

                if (this.usuario.novaSenha !== this.confirmarSenha) {
                    this.$refs.aviso.abrir({body: {mensagem: 'Senhas diferentes'}});
                    return;
                }

                this.$refs.aviso.carregar();
                this.$http.post('cliente/alterar_senha', this.usuario, {headers: {profile: 'producao'}}).then(response => {
                    this.$refs.aviso.carregado();
                    this.$refs.resposta.open();
                }, response => {
                    this.$refs.aviso.abrir(response);
                });
            }
        }
    }
</script>
<style scoped>

    table {
        width: 100%;
    }

    .formulario {
        margin-top: 3.5em;
    }
    .centralizado {
        text-align: center;
    }
</style>