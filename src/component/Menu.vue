<template>
    <div>
        <md-toolbar class="corMenu">

            <md-button class="md-icon-button" @click.native="openNav">
                <md-icon>menu</md-icon>
            </md-button>

            <div>
                <span>Farmácias</span>
                <!--<img src="../assets/sumicity.png" style="height: 15px;">-->
            </div>
        </md-toolbar>

        <md-subheader class="nome" style="min-height: 30px">
            {{ this.dataAtual | moment("ddd, DD MMM  YYYY -  HH:mm") }}
        </md-subheader>

        <!--<div class="subtitulo md-title" v-if="titulo">-->
            <!--<md-icon>{{ icone }}</md-icon>-->
            <!--{{ titulo }}-->
        <!--</div>-->

        <md-sidenav :md-swipeable="true" class="md-left" ref="nav">
            <md-toolbar class="md-large" style="background-color: red; color: white">
                <div>
                    <!--<h3 class="md-title">{{ cliente.nome }}</h3>-->
                    <!--<p> Tel: {{ cliente.telefone }} <br/> Email: {{ cliente.email }} </p>-->
                </div>
            </md-toolbar>

            <div>
                <md-list>
                    <md-subheader>Navegar no APP</md-subheader>

                    <md-list-item>
                        <router-link to="/home">
                            <md-icon>home</md-icon>
                            <span>Plantão do Dia</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <router-link to="/plantoes">
                            <md-icon>date_range</md-icon>
                            <span>Plantões do Mês</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <router-link to="/farmacias/vip">
                            <md-icon>star_rate</md-icon>
                            <span>Farmácias VIP</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <router-link to="/patrocinadores">
                            <md-icon>assignment_turned_in</md-icon>
                            <span>Patrocinadores</span>
                        </router-link>
                    </md-list-item>
                </md-list>
            </div>

            <div class="stand">
                <span>Stand By - Soluções em Informática</span>
            </div>
        </md-sidenav>
    </div>
</template>

<script>

    export default{
        created() {
            this.dataAtual = new Date()
        },
        data() {
            return {
                dataAtual: null,
                titulo: 'Farmácias',
                icone: 'add'
            }
        },
        methods: {
            openNav () {
                this.$refs.nav.toggle();
            }
        }
    }
</script>
<style scoped>
    .corMenu {background-color: red !important;}
    .nome {color: white; background: lightsalmon}
    .subtitulo {padding-left: .5em; margin: .5em; color: #1976D2}
    .stand {position: absolute; width: 100%; bottom: 0; padding: .5em; text-align: left;
        border-top: 1px solid #ECEFF1; color: white; background-color: red}
</style>