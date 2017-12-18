<style scoped>
    .container {padding-top: 65px}
</style>
<template>
    <div>
        <menu-superior/>



        <div class="phone-viewport container">
            <md-list class="custom-list md-triple-line">
                <md-list-item v-for="item in farmacias" :key="item.id">
                    <md-avatar>
                        <img src="https://placeimg.com/40/40/people/1" alt="People">
                    </md-avatar>

                    <div class="md-list-text-container">
                        <span>{{ item.nome }}</span>
                        <span style="padding-top: 2px; margin-bottom: 2px">
                            <md-icon style="margin-right: 10px">location_on</md-icon>
                            <span>{{ item.localidade }}</span>
                        </span>
                        <span style="padding-top: 2px; margin-bottom: 2px">
                            <md-icon style="margin-right: 10px">people</md-icon>
                            <span>{{ item.acesso }}</span>
                            <span v-if="item.acesso === 1">acesso</span>
                            <span v-else>acessos</span>
                        </span>

                    </div>

                    <md-button class="md-icon-button md-list-action">
                        <router-link :to="'/farmacias/info/' + item.id">
                            <md-icon class="md-primary">keyboard_arrow_right</md-icon>
                        </router-link>
                    </md-button>

                    <md-divider class="md-inset"></md-divider>
                </md-list-item>


            </md-list>
        </div>

        <menu-inferior/>
    </div>
</template>
<script>
    import MenuSuperior from '../component/Menu.vue'
    import MenuInferior from '../component/MenuInferior.vue'
    import { C } from '../constantes'
    export default {
        components: {MenuSuperior, MenuInferior},
        created () {
            this.listarVip()
        },
        data () {
            return {
                rating6: 3,
                farmacias: []
            }
        },
        methods: {
            listarVip() {
                this.$http.get(C.URL.FARMACIA.VIP).then(res => {
                    this.farmacias = res.body
                    console.log(res.body)
                })
            }
        }
    }
</script>