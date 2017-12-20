<template>
    <div class="home">
        <air-menu/>
            <md-table-card style="margin-top: 65px">
                <md-toolbar>
                    <h1 class="md-title" style="font-size: 14px; font-weight: bold">
                        PLANTÕES - {{dto.data | moment("MMMM").toUpperCase()}}
                    </h1>
                </md-toolbar>
                <md-table>
                    <md-table-header>
                        <md-table-row>
                            <md-table-head md-numeric>Dia</md-table-head>
                            <md-table-head>Farmácia</md-table-head>
                            <md-table-head>Localidade</md-table-head>
                        </md-table-row>
                    </md-table-header>

                    <md-table-body>
                        <md-table-row v-for="(row, index) in plantoes" :key="index.id">
                            <md-table-cell style="text-align: right">{{ row.dia }}</md-table-cell>
                            <md-table-cell>{{ row.nomeFarmacia }}</md-table-cell>
                            <md-table-cell>{{ row.localidade }}</md-table-cell>
                        </md-table-row>
                    </md-table-body>
                </md-table>
            </md-table-card>


        <!--<menu-inferior/>-->
    </div>
</template>

<script>
    import { C } from '../constantes'
    import Menu from '../component/Menu.vue';
    import MenuInferior from '../component/MenuInferior.vue';

    export default{
        components: {'air-menu': Menu, MenuInferior},
        created () {
            this.dto.data = new Date()
            this.carregarPlantoes()
        },
        data() {
            return {
                dto: {data: null},
                plantoes: [],
            }
        },
        methods: {
            carregarPlantoes() {
                this.data = new Date()
                this.$http.post(C.URL.PLANTAO.PORMES, this.dto).then(res => {
                    this.plantoes = res.body
                    this.plantoes.sort(function(a, b) {
                        return parseInt(a.dia) - parseInt(b.dia);
                    });
                });
            }
        }
    }
</script>

<style scoped>
    body {background-color: lightyellow}
    .container {margin-left: 8%; margin-right: 8%; margin-top: 65%}
    .home {height: 100%; background: lightyellow}
</style>