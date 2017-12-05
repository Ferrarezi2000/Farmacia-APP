<template>
    <div class="home">
        <div class="logo animated fadeIn" style="padding-top: 2.5em !important;">
            <img src="../assets/logo_novo.png">
        </div>

        <div class="md-display-1 titulo">{{ titulo }}</div>

        <div class="subTitulo">{{ subTitulo1 }}</div>
        <div class="subTitulo">{{ subTitulo2 }}</div>

        <router-link type="button" to="/login" class="botao botao_cliente animated fadeInUp">
            <md-ink-ripple/>
            <div class="conteudo">
                <div class="md-title">{{ cliente.titulo }}</div>
                <div class="md-caption subTituloBotao">{{ cliente.subtitulo }}</div>
            </div>
        </router-link>

        <router-link type="button" to="/viabilidade" class="botao botao_viabilidade animated fadeInUp">
            <md-ink-ripple/>
            <div class="conteudo">
                <div class="md-title">{{ viabilidade.titulo }}</div>
                <div class="md-caption subTituloBotao">{{ viabilidade.subtitulo }}</div>
            </div>
        </router-link>

        <div class="fundo_baixo">
            <img src="../assets/fundo_baixo.png" style="width: 100%">
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                titulo: 'Tudo em um só lugar.',
                subTitulo1: 'Você com a Sumicity,',
                subTitulo2: 'o tempo todo, aonde estiver!',
                cliente: {
                    titulo: 'Já sou cliente!',
                    subtitulo: 'Quero acessar minha conta.'
                },
                viabilidade: {
                    titulo: 'Ainda não sou cliente.',
                    subtitulo: 'Quero pedir a minha Sumicity.'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .home {
        height: 100%;
        background: #1976D2;
    }

    .titulo {
        color: #fff !important;
        padding: 1em;
        font-size: 20px;
        font-style: italic;
        font-weight: bold;
        text-align: center;
    }

    .subTitulo {
        color: #fff !important;
        font-size: 14px;
        font-style: italic;
        text-align: center;
    }

    .subTituloBotao {
        color: #009cde !important;
    }

    .botao {
        display: block;
        background: #00467e;
        color: #fff !important;

        .conteudo {
            height: 100px;
            padding: 2em;
        }
    }

    .botao_cliente {
        margin-left: 30px;
        margin-right: 30px;
        margin-bottom: 15px;
        margin-top: 30px;
    }

    .botao_viabilidade {
        margin-left: 30px;
        margin-right: 30px;
        margin-bottom: 20px;
    }

    .fundo_baixo {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>