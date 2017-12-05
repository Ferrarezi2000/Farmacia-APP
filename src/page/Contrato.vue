<template>
    <div>
        <air-menu titulo="Contratos" icone="description"/>

        <div class="contratos">
            <md-card class="card" v-for="contrato in lista" :key="contrato.id">
                <div class="titulo">
                    <b>{{ contrato.pacote }}</b>
                </div>
                <div class="detalhe">
                    <table>
                        <tr>
                            <td>{{ contrato.unidade }} -
                                <b :class="classeSituacao(contrato)">{{ contrato.situacao }}</b>
                            </td>
                            <td class="vencimento">Venc.: {{ contrato.vencimento }}</td>
                        </tr>
                    </table>
                </div>
            </md-card>
        </div>

        <air-aviso ref="aviso" :mostrar="true"/>
    </div>
</template>
<script>
    import Menu from '../component/Menu.vue';
    import ClienteService from '../service/ClienteService';

    export default {
        created() {
            this.service = new ClienteService();
            this.init();
        },
        components: { 'air-menu': Menu },
        data(){ return { lista: [] } },
        methods: {
            init: function () {
                this.$http.get('contrato/find_all', this.service.httpHeader()).then(response => {
                    this.lista = response.body;
                    this.$refs.aviso.carregado();
                }, response => {
                    this.$refs.aviso.abrir(response);
                });
            },
            classeSituacao: function (contrato) {
                return (contrato.situacao === 'Habilitado') ? 'habilitado' : 'suspenso';
            }
        }
    }
</script>
<style scoped>
    .card{ margin-bottom: .7em; }
    .contratos{ padding: 0 .8em; }
    .titulo{ padding: .5em 1em; }
    .detalhe{ padding: 0 1em; }
    .detalhe table { width: 100%; }
    .detalhe .vencimento{ text-align: right; }
    .habilitado{ color: #2E7D32; }
    .suspenso{ color: #2E7D32; }
</style>