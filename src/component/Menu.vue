<template>
    <div>
        <md-toolbar class="corMenu menu">
            <md-button class="md-icon-button" @click.native="openNav">
                <md-icon>menu</md-icon>
            </md-button>

            <div>
                <span>Farmácias</span>
                <!--<img src="../assets/sumicity.png" style="height: 15px;">-->
            </div>
        </md-toolbar>

        <md-sidenav :md-swipeable="true" class="md-left" ref="nav">
            <md-toolbar class="md-large" style="background-color: red; color: white">
                <div style="text-align: center">
                    <md-avatar class="md-large">
                        <img src="../assets/cruz.png" alt="People">
                    </md-avatar>
                    <h3 class="md-title">Plantão de Farmácias</h3>
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
                        <router-link to="/farmacias">
                            <md-icon>add</md-icon>
                            <span>Farmácias</span>
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
        created() {},
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
    .menu {z-index: 2 !important; position: fixed !important; top: 0px !important; width: 100% !important;}
    .corMenu {background-color: red !important;}
    .stand {position: absolute; width: 100%; bottom: 0; padding: .5em; text-align: left;
        border-top: 1px solid #ECEFF1; color: white; background-color: red}
</style>