<style scoped>
    .containerPagina { padding-top: 70px; margin-left: 30px; margin-right: 30px }
    .botao {position: absolute; width: 100%; bottom: 0; padding: .5em; text-align: center;
            background-image: linear-gradient(#4C69BA, #3B55A0)}
    .menu {z-index: 2 !important; position: fixed !important; top: 0px !important; width: 100% !important;}
    .corMenu {background-color: red !important;}
    .valor {background-color: white; text-align: right; border: white}
    .md-divider {height: 0.5px !important}
</style>
<template>
    <div>
        <!--Menu-->
        <md-toolbar class="corMenu menu">
            <md-button class="md-icon-button" @click.native="voltar()">
                <md-icon>keyboard_arrow_left</md-icon>
            </md-button>

            <div>
                <span style="font-weight: bold; font-size: 18px; font-style: italic">{{ farmaciaNome }}</span>
                <!--<img src="../assets/sumicity.png" style="height: 15px;">-->
            </div>
        </md-toolbar>

        <div class="containerPagina">
            <div style="font-weight: bold">{{ tituloAdicionais }}</div>
            <div style="margin-top: 10px; color: grey; font-size: 14px">{{ textoAdicionais }}</div>

            <md-list class="md-double-line md-dense">
                <div v-for="item in listaAdicionais" :key="item.id">
                    <md-list class="custom-list md-triple-line">
                        <md-list-item>
                                <div class="md-list-text-container">
                                    <span>{{ item.item }}</span>
                                    <p>{{ item.subItem}}</p>
                                </div>
                                <div>
                                    <money v-model="item.valor" disabled class="valor"/>
                                </div>
                                <md-divider class="md-inset"/>
                        </md-list-item>
                        <md-divider/>
                    </md-list>
                </div>
            </md-list>
        </div>
    </div>
</template>
<script>

    import { C } from '../../constantes'
    export default {
        created () {
            this.farmaciaNome = this.$store.state.farmaciaNome
            this.tituloAdicionais = this.$store.state.tituloAdicionais
            this.textoAdicionais = this.$store.state.textoAdicionais
            this.buscarAdicionais()
        },
        data () {
            return {
                farmaciaNome: null,
                tituloAdicionais: null,
                textoAdicionais: null,
                listaAdicionais: []
            }
        },
        methods: {
            buscarAdicionais() {
                this.$http.get(C.URL.ADICIONAIS.POR_FARMACIA + this.$route.params.id).then(res => {
                    this.listaAdicionais = res.body
                })
            },
            voltar () {
                this.$router.push('/farmacias/info/' + this.$route.params.id)
            }
        }
    }
</script>