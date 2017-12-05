<template>
    <div>
        <air-menu titulo="Boletos em aberto" icone="event_available"/>

        <md-list class="lista">
            <md-whiteframe class="fatura" v-for="fatura in lista" :key="fatura.id">
                <md-list-item @click.native="carregarLinha(fatura, 'detalhe')">
                    <table>
                        <tr>
                            <td class="md-caption">
                                Fatura <b>{{ fatura.id }}</b> <br/> Venc. <b>{{ fatura.vencimento }}</b>
                            </td>
                            <td class="valor">R$ <span class="md-title">{{ fatura.valor }}</span></td>
                        </tr>
                    </table>
                </md-list-item>
            </md-whiteframe>
        </md-list>

        <div class="aviso" v-if="lista.length == 0">
            <md-icon class="md-size-3x">thumb_up</md-icon>
            <p><b>Você não possui boletos em aberto!</b></p>
        </div>

        <!--Dialog-->
        <md-dialog class="centralizado" md-open-from="#custom" md-close-to="#custom" ref="detalhe">
            <md-dialog-title>
                <p>{{ fatura.vencimento }}</p>
                <p>R$ {{ fatura.valor }}</p>
            </md-dialog-title>

            <md-dialog-content>
                Utilize o código de barras abaixo para realizar o pagamento
                <br/><br/>
                <b>{{ linha }}</b>
                <br/>
                <md-button class="md-raised md-primary" @click.native="copiarLinha()">
                    <md-icon>content_copy</md-icon> Copiar Linha
                </md-button>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button @click.native="closeDialog('detalhe')">Fechar</md-button>
            </md-dialog-actions>
        </md-dialog>


        <textarea id="textarea" v-model="linha"></textarea>

        <air-aviso ref="aviso" :mostrar="true"/>
    </div>
</template>
<script>
    import Menu from '../component/Menu.vue';
    import ClienteService from '../service/ClienteService';

    export default{
        created(){
            this.service = new ClienteService();
            this.iniciar();
        },
        components: {
            'air-menu': Menu
        },
        data(){
            return {
                lista: [],
                fatura: {},
                linha: ''
            }
        },
        methods: {
            carregarLinha(fatura, ref) {
                this.fatura = fatura;
                this.linha = fatura.linha;
                this.$refs[ref].open();
            },
            closeDialog(ref) {
                this.$refs[ref].close();
            },
            iniciar: function () {
                this.$http.get('fatura/find_all', this.service.httpHeader()).then(response => {
                    this.lista = response.body;
                    this.$refs.aviso.carregado();
                }, response => {
                    this.$refs.aviso.abrir(response);
                });
            },
            copiarLinha: function () {
                var copyTextarea = document.getElementById('textarea');
                copyTextarea.select();

                var successful = document.execCommand('copy');
                if(successful){
                    this.$refs.aviso.abrir({body:{mensagem:'Código copiado com sucesso!'}});
                }else{
                    this.$refs.aviso.abrir({body:{mensagem:'Falha ao copiar!'}});
                }
            }
        }
    }
</script>
<style scoped>
    #textarea{ position: absolute; height: 10px; top: -15px; }

    .lista{ padding: 0 .8em; }
    .centralizado{ text-align: center; }
    .fatura{ margin-bottom: .8em; }
    .fatura table { width: 100%; }
    .fatura .valor { text-align: right; }

    .aviso{ padding: 1.5em; text-align: center; color: #B0BEC5; }
</style>