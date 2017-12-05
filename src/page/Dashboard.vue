<template>
    <div>
        <air-menu/>

        <div class="conteudo">

            <div class="contrato">
                <air-botao icone="description" texto="Contratos"
                           classe="h150" @click.native="redirect('/contrato')"/>
            </div>

            <table>
                <tr valign="top">
                    <td rowspan="2" class="boletos">
                        <air-botao icone="event_available" texto="Boletos"
                                   classe="h205" @click.native="redirect('/boleto')"/>
                    </td>
                    <td>
                        <air-botao icone="lock_open" texto="Auto Desbloqueio"
                                   classe="h100" @click.native="openDialog()"/>
                    </td>

                </tr>
                <tr>
                    <td>
                        <air-botao icone="data_usage" texto="Franquia"
                                   classe="h100" @click.native="verificarFranquia()"/>
                    </td>
                </tr>

                <!--<tr>-->
                <!--<td class="centralizado">-->
                <!--<br/>Ligue grátis<br/>-->
                <!--<a href="tel:10353"><h2>103 53</h2></span></a>-->
                <!--</td>-->
                <!--</tr>-->
            </table>


            <div class="margemTop">
                <md-divider/>
                <md-layout md-gutter>
                    <md-layout md-column md-gutter>
                        <md-layout  md-align="end">
                            <span style="padding-top: 18px; margin-right: 10px">Ligue grátis</span>
                        </md-layout>
                    </md-layout>

                    <md-layout md-column md-gutter>
                        <md-layout md-align="start">
                            <span><a href="tel:10353"><h2>103 53</h2></a></span>
                        </md-layout>
                    </md-layout>

                </md-layout>

            </div>
        </div>

        <!--Dialog Auto Desbloqueio-->
        <md-dialog ref="confianca" class="centralizado">
            <md-dialog-title>Auto Desbloqueio</md-dialog-title>

            <md-dialog-content>
                Se você esqueceu de pagar sua fatura e foi suspenso, Não tem problema!!
                <br/> <br/>
                <b>Nós damos mais uma conexão para você!</b>
                <br/>
                <md-button class="md-raised md-primary" @click.native="desbloqueio()">
                    <md-icon>lock_open</md-icon>
                    Desbloquear Agora




                </md-button>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button @click.native="closeDialog('confianca')">Fechar</md-button>
            </md-dialog-actions>
        </md-dialog>

        <!--Dialog Franquia-->
        <md-dialog ref="franquia" class="centralizado">
            <md-dialog-title>Franquia</md-dialog-title>

            <md-dialog-content>
                No momento a franquia está liberada!
                <br/> <br/>
                <b>Aproveite!</b>
                <br/>
                <!--<md-button class="md-raised md-primary" @click.native="desbloqueio()">-->
                    <!--<md-icon>lock_open</md-icon>-->
                    <!--Desbloquear Agora-->




                <!--</md-button>-->
            </md-dialog-content>

            <md-dialog-actions>
                <md-button @click.native="closeDialog('franquia')">Fechar</md-button>
            </md-dialog-actions>
        </md-dialog>


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
        },
        components: {'air-menu': Menu, 'air-botao': Botao},
        methods: {
            redirect(url){
                this.$router.push(url);
            },
            openDialog() {
                this.$refs.confianca.open();
            },
            closeDialog() {
                this.$refs.confianca.close();
                this.$refs.franquia.close();
            },
            desbloqueio() {
                this.$refs.aviso.carregar();

                this.$http.post('contrato/desbloqueio', this.service.httpHeader()).then(response => {
                    this.$refs.confianca.close();
                    this.$refs.aviso.abrir(response);
                }, response => {
                    this.$refs.confianca.close();
                    this.$refs.aviso.abrir(response);
                });
            },
            verificarFranquia(){
                this.$refs.franquia.open();
            }
        }
    }
</script>
<style scoped>
    .centralizado {
        text-align: center;
    }

    .contrato {
        margin: 1em 0 1em;
    }

    table {
        width: 100%;
    }

    .h100 {
        height: 100px
    }

    .h120 {
        height: 120px
    }

    .h150 {
        height: 150px
    }

    .h205 {
        height: 205px
    }

    .boletos {
        width: 170px;
        padding-right: 1em;
    }

    .margemTop {
        margin-top: 1em !important;
    }
</style>