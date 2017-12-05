<template>
    <div>
        <md-snackbar ref="snackbar" md-position="bottom center" md-duration="5000">
            {{ mensagem }}
        </md-snackbar>

        <div class="carregando" v-show="carregando">
            <md-spinner md-indeterminate :md-size="100" :md-stroke="1.5" class="spinner animated fadeIn"/>
        </div>

        <div class="semConexao" v-show="semConexao">
            <div class="texto">
                <md-icon class="md-size-3x">signal_wifi_off</md-icon>
                <p> Ops! Você está sem conexão. :( </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'aviso',
        props: {
            mostrar: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                mensagem: '',
                carregando: false,
                semConexao: false
            }
        },
        methods: {
            abrir: function (response) {
                this.mensagem = (response.status !== 404 && response.body !== null)
                    ? response.body.mensagem
                    : 'Ops! Não foi possível conectar ao servidor. Tente novamente mais tarde!';
                this.$refs.snackbar.open();
                this.carregando = false;
            },
            carregar: function(){
                this.carregando = true;
            },
            carregado: function(){
                this.carregando = false;
            },
            onOffline: function () {
                this.semConexao = true;
            },
            onOnline: function () {
                this.semConexao = false;
            }
        },
        mounted(){
            this.carregando = this.mostrar;
            document.addEventListener("offline", this.onOffline, false);
            document.addEventListener("online", this.onOnline, false);
        }
    }
</script>
<style scoped>
    .carregando {
        text-align: center;
        top:0; bottom:0;  left:0; right: 0;
        position: absolute;
        z-index: 9999;
        background-color: rgba(255,255,255,.8);
    }
    .spinner {
        top: 50%;
        margin-top: -50px;
    }
    .semConexao {
        top:0; bottom:0;  left:0; right: 0;
        position: absolute;
        z-index: 9999;
        background-color: rgba(10,10,10,.7);
    }
    .semConexao .texto {
        color: #fff;
        text-align: center;
        height: 120px;
        margin-top: -60px;
        top: 50%; left:0; right: 0;
        position: absolute;
    }
</style>