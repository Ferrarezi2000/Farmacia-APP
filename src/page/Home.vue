<template>
    <div class="home">
        <air-menu/>

        <md-subheader class="nome">
            {{ this.dataAtual | moment("ddd, DD MMM  YYYY -  HH:mm") }}
        </md-subheader>

         <md-card class="container" v-for="(p, index) in plantoes" :key = "p.id" :class="{'ultimo' : plantoes.length === index + 1}">
            <md-card-header class="cabecalho">
                <md-avatar>
                    <img src="../assets/cruz.png" alt="Avatar">
                </md-avatar>

                <div class="md-title" style="width: 100%">{{ p.farmacia.nome }} - <span class="localidade">{{p.farmacia.localidade}}</span>
                    <span style="float: right; color: green; text-align: center" v-if="controleHora">
                        <md-icon>bookmark</md-icon><br/>
                        <span style="font-size: 10px">Aberto</span>
                    </span>

                    <span style="float: right; color: red; text-align: center" v-else>
                        <md-icon>bookmark</md-icon><br/>
                        <span style="font-size: 10px">Fechado</span>
                    </span>
                </div>
                <div class="md-subhead">{{ p.farmacia.endereco.logradouro }} - {{ p.farmacia.endereco.bairro }},
                    Nº {{ p.farmacia.endereco.numero }}</div>

            </md-card-header>

             <md-card-media style="height: 10%; margin: 15px; text-align: center">
                 <!--<img :src="'../dist/' + p.farmacia.codigo + '.png'" alt="logo" style="width: 80%">-->
                 <!--<img src="https://www.toptotal.com.br/media/com_jbusinessdirectory/pictures/companies/200/logotipofarmavipdrogariadopio-1468555129.png" alt="logo" style="width: 80%">-->
                 <img src="../assets/1.png" alt="logo" style="width: 80%">
             </md-card-media>
             <md-card-header class="contato"
                             style="padding: 10px !important; padding-left: 16px !important;">
                 Contatos
             </md-card-header>

             <md-card-header v-for="c in p.farmacia.contatos" :key = "c.id" class="cabecalho"
                             style="padding: 5px !important; padding-left: 16px !important;">
                 <md-avatar>
                     <md-icon class="md-primary">phone</md-icon>
                 </md-avatar>

                 <div class="md-title">{{ c.texto }}</div>
                 <div class="md-subhead">{{ c.tipo }}</div>
             </md-card-header>
         </md-card>

        <menu-inferior/>

    </div>
</template>

<script>
    import { C } from '../constantes'
    import Menu from '../component/Menu.vue';
    import MenuInferior from '../component/MenuInferior.vue'

    export default{
        components: {'air-menu': Menu, MenuInferior},
        created () {
            this.dto.data = new Date()
            this.carregarPlantao()
            this.dataAtual = new Date()
        },
        data() {
            return {
                dto: {data: null},
                plantoes: [],
                src: '01',
                data: null,
                controleHora: true
            }
        },
        methods: {
            carregarPlantao() {
                this.data = new Date()
                let hora = this.data.getHours()
                let minutos = this.data.getMinutes()
                if (hora === 22) {
                    if (hora < 8) {
                        this.controleHora = false
                    }
                }
                this.$http.post(C.URL.PLANTAO.PORDIA, this.dto).then(res => {
                    this.plantoes = res.body
                });
            }
        }
    }
</script>

<style scoped>
    .nome {color: white; background: lightsalmon; min-height: 30px; padding-top: 68px; padding-bottom: 5px}
    .ultimo {margin-bottom: 70px}
    .container {margin-left: 8%; margin-right: 8%; margin-top: 3%}
    .localidade {font-size: 12px; color: darkgray}
    .home {height: 100%}
    .contato {color: darkred; font-weight: bold}
    .cabecalho {background-color: lightgoldenrodyellow}
</style>