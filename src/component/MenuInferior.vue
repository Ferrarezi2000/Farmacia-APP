<style scoped>
    .rodape {background-color: red !important; color: white !important; bottom: 0px !important; position: fixed; z-index: 1 !important;}
    .branco {color: white !important;}
</style>
<template>
    <md-bottom-bar class="rodape">
        <md-bottom-bar-item md-icon="home" @click="home()" class="branco">Home</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="add" @click="vip()" class="branco">Farmácias</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="assignment_turned_in" @click="patrocinador()" class="branco">
            Patrocinadores
        </md-bottom-bar-item>
    </md-bottom-bar>
</template>
<script>
    export default {
        data () {
            return {
                activeHome: false,
                activeVip: false,
                activePatrocinador: false
            }
        },
        methods: {
            home () {
                this.activeHome = true
                this.activeVip = false
                this.activePatrocinador = false
                this.$router.push('/home')
            },
            vip () {
                this.activeHome = false
                this.activeVip = true
                this.activePatrocinador = false
                this.$router.push('/farmacias')
            },
            patrocinador () {
                this.activeHome = false
                this.activeVip = false
                this.activePatrocinador = true
                this.$router.push('/patrocinadores')
            }
        }
    }
</script>