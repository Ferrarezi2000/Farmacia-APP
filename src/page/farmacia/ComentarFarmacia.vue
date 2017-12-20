<style scoped>
    .container { padding-top: 90px; margin-left: 30px; margin-right: 30px }
    .danger {color: red}
    .nota {color: red; font-weight: bold}
    .botao {position: absolute; width: 100%; bottom: 0; padding: .5em; text-align: center;
        border-top: 1px solid #ECEFF1; color: white; background-color: red}
</style>
<template>
    <div>
        <menu-superior/>

        <div class="container">
            <form novalidate @submit.stop.prevent="enviar()">
                <span style="font-weight: bold" :class="{'nota' : valor}">Nota:</span>
                <star-rating style="margin-bottom: 5px"
                             v-bind:max-rating="5"
                             v-bind:increment="0.5"
                             v-model="dto.valor"
                             :show-rating="false"
                             inactive-color="#DCDCDC"
                             active-color="#FFD700"
                             v-bind:star-size="40">
                </star-rating>
                <span v-if="mensagem" class="help is-danger">{{ mensagem }}</span>

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

                <md-input-container>
                    <label>Comentário</label>
                    <md-textarea v-model="dto.comentario" maxlength="60"/>
                </md-input-container>
            </form>
        </div>

        <md-button style="width: 100%; background-color: red; color: white;
                 margin: 0px !important; padding: 0px !important; margin-bottom: 10px" class="botao"
                   @click.stop.prevent="enviar()">Enviar
        </md-button>
    </div>
</template>
<script>
    import MenuSuperior from '../../component/Menu.vue'
    import MenuInferior from '../../component/MenuInferior.vue'
    import { C } from '../../constantes'

    export default {
        components: {MenuSuperior},
        created () {},
        data () {
            return {
                valor: false,
                vertical: 'bottom',
                horizontal: 'center',
                mensagem: null,
                duration: 4000,
                dto: {
                    usuarioNome: null,
                    usuarioSobrenome: null,
                    valor: null,
                    farmaciaId: null,
                    patrocinadorId: null,
                    comentario: null
                }
            }
        },
        methods: {
            enviar () {
                this.$validator.validateAll().then(res => {
                    if (res) {
                        if (this.dto.valor) {
                            this.dto.farmaciaId = this.$route.params.id
                            this.$http.post(C.URL.AVALIACAO.BASE, this.dto).then(res => {
                                this.$router.push('/farmacias/info/' + this.$route.params.id)
                            })
                        } else {
                            this.valor = true
                            this.mensagem = 'Avaliação é obrigatório!'
                        }
                    }
                })
            }
        }
    }
</script>