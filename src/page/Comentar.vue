<style scoped>
    .container { padding-top: 90px; margin-left: 20px; margin-right: 20px }
    .danger {color: red}
</style>
<template>
    <div>
        <menu-superior/>

        <div class="container">
            <form novalidate @submit.stop.prevent="enviar()">
                <star-rating style="margin-bottom: 5px; margin-left: 50px"
                             v-bind:max-rating="5"
                             v-model="dto.valor"
                             :show-rating="false"
                             inactive-color="#DCDCDC"
                             active-color="#FFD700"
                             v-bind:star-size="50">
                </star-rating>
                <span v-if="mensagem" class="help is-danger" style="margin-left: 50px">{{ mensagem }}</span>

                <md-input-container style="margin-top: 20px">
                    <label :class="{'danger': errors.has('usuarioNome') }">Nome</label>
                    <md-input name="usuarioNome"
                              v-model="dto.usuarioNome" v-validate="'required'" required></md-input>
                </md-input-container>
                <span v-show="errors.has('usuarioNome')" class="help is-danger">Nome é obrigatório!</span>


                <md-input-container>
                    <label :class="{'danger': errors.has('usuarioSobrenome') }">Sobrenome</label>
                    <md-input name="usuarioSobrenome"
                              v-model="dto.usuarioSobrenome" v-validate="'required'" required></md-input>
                </md-input-container>
                <span v-show="errors.has('usuarioSobrenome')" class="help is-danger"
                      style="margin-bottom: 20px">Sobrenome é obrigatório!</span>

                <md-button style="width: 100%; background-color: red; color: white;
                 margin: 0px !important; padding: 0px !important; margin-bottom: 10px"
                           @click.stop.prevent="enviar()">Enviar
                </md-button>
            </form>
        </div>
    </div>
</template>
<script>
    import MenuSuperior from '../component/Menu.vue'
    import MenuInferior from '../component/MenuInferior.vue'
    import { C } from '../constantes'

    export default {
        components: {MenuSuperior},
        created () {},
        data () {
            return {
                vertical: 'bottom',
                horizontal: 'center',
                mensagem: null,
                duration: 4000,
                dto: {usuarioNome: null, usuarioSobrenome: null, valor: null, farmaciaId: null, patrocinadorId: null}
            }
        },
        methods: {
            enviar () {
                this.$validator.validateAll().then(res => {
                    if (res) {
                        if (this.dto.valor) {
                            this.dto.farmaciaId = this.$route.params.id
                            this.$http.post(C.URL.COMENTAR.BASE, this.dto).then(res => {
                                this.$router.push('/farmacias/info/' + this.$route.params.id)
                            })
                        } else {
                            this.mensagem = 'Avaliação é obrigatório!'
                        }
                    }
                })
            }
        }
    }
</script>