<template>
    <div class="home">

        <md-button class="md-raised" @click="fechar()">Home</md-button>
        <pre>{{propaganda}}</pre>

        <menu-inferior/>

    </div>
</template>

<script>
    import { C } from '../constantes'
    import MenuInferior from '../component/MenuInferior.vue';

    export default{
        components: {MenuInferior},
        created () {
            // this.dto.data = new Date()
            this.carregarPropaganda()
        },
        data() {
            return {
                propaganda: {},
                dto: {
                    segunda: false,
                    terca: true,
                    quarta: false,
                    quinta: false,
                    sexta: false,
                    sabado: false,
                    domingo: false
                }
            }
        },
        methods: {
            fechar() {
              this.$router.push('/home')
            },
            carregarPropaganda() {
                this.$http.post(C.URL.PROPAGANDA.PORDIA, this.dto).then(res => {
                    this.propaganda = res.body
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .rodape {background-color: red; color: white}
    .container {margin-left: 8%; margin-right: 8%; margin-top: 3%}
    .localidade {font-size: 12px; color: darkgray}
    .home {height: 100%; background: white}
    .contato {color: darkred; font-weight: bold}
</style>