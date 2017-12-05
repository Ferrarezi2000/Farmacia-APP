<template>
    <div class="viabilidade">
        <div class="logoTopo animated fadeIn">
            <router-link to="/home">
                <img src="../assets/logo_novo.png">
            </router-link>
        </div>

        <div class="texto">Assine Já!</div>

        <a href="tel:10353" style="margin-top: 1em">
            <div class="md-display-1 titulo  animated fadeInUp">
                <md-icon style="font-size: 1em; color: #EF6C00">phone</md-icon> 103 53
            </div>
        </a>

        <div class="texto2">E encontre um plano <br/>ideal para você.</div>


        <div class="fundo_baixo">
            <md-button class="md-raised md-primary" @click.native="voltar">Voltar</md-button>
            <img src="../assets/fundo_baixo.png" style="width: 100%">
        </div>
    </div>

</template>
<script>
    export default {
        methods:{
            voltar () {
                this.$router.push('/home');
            }
        }
    }
</script>
<style scoped>
    .viabilidade {
        height: 100%;
        background: #1976D2;
        color: #fff;
        text-align: center;
    }

    .texto {
        margin-top: 1em;
        margin-bottom: 0.5em;
        font-size: 2.5em;
        font-weight: bold
    }

    .texto2 {
        margin-top: 3em;
        font-style: italic;
    }

    .titulo {
        color: #fff !important;
        font-weight: bold
    }

    .fundo_baixo {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .logoTopo {
        padding: 3em;
    }
</style>