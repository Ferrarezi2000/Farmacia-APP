<template>
    <div class="home">
        <air-menu/>

         <md-card class="container" v-for="p in plantoes">
            <md-card-header>
                <md-avatar>
                    <img src="../assets/cruz.png" alt="Avatar">
                </md-avatar>

                <div class="md-title">{{ p.farmacia.nome }} - <span class="localidade">{{p.farmacia.localidade}}</span></div>
                <div class="md-subhead">{{ p.farmacia.endereco.logradouro }} - {{ p.farmacia.endereco.bairro }},
                    Nº {{ p.farmacia.endereco.numero }}</div>
            </md-card-header>

             <md-card-media style="height: 10%; margin: 15px; text-align: center">
                 <img :src="'../dist/' + p.farmacia.codigo + '.png'" alt="logo" style="width: 80%">
                 <!--<img src="../assets/1.png" alt="logo" style="width: 80%">-->
             </md-card-media>
             <md-card-header class="contato"
                             style="padding: 10px !important; padding-left: 16px !important;">
                 Contatos
             </md-card-header>

             <md-card-header v-for="c in p.farmacia.contatos"
                             style="padding: 5px !important; padding-left: 16px !important;">
                 <md-avatar>
                     <md-icon class="md-primary">phone</md-icon>
                 </md-avatar>

                 <div class="md-title">{{ c.texto }}</div>
                 <div class="md-subhead">{{ c.tipo }}</div>
             </md-card-header>
         </md-card>

        <div class="rodape">Stand By - Soluções em Informática</div>
    </div>
</template>

<script>
    import { C } from '../constantes'
    import Menu from '../component/Menu.vue';

    export default{
        components: {'air-menu': Menu},
        created () {
            this.dto.data = new Date()
            this.carregarPlantao()
        },
        data() {
            return {
                dto: {data: null},
                plantoes: [],
                src: '01'
            }
        },
        methods: {
            carregarPlantao() {
                this.$http.post(C.URL.PLANTAO.PORDIA, this.dto).then(res => {
                    this.plantoes = res.body
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .rodape {background-color: red; color: white; font-size: 12px; padding: 8px; margin-top: 3%}
    .container {margin-left: 8%; margin-right: 8%; margin-top: 3%}
    .localidade {font-size: 12px; color: darkgray}
    .home {height: 100%; background: white}
    .contato {color: darkred; font-weight: bold}
</style>