<style scoped>
    .containerPagina { padding-top: 90px; margin-left: 30px; margin-right: 30px }
    .botao {position: absolute; width: 100%; bottom: 0; padding: .5em; text-align: center;
        background-image: linear-gradient(#4C69BA, #3B55A0)}
    .menu {z-index: 2 !important; position: fixed !important; top: 0px !important; width: 100% !important;}
    .corMenu {background-color: red !important;}
</style>
<template>
    <div>
        <!--Menu-->
        <md-toolbar class="corMenu menu">
            <md-button class="md-icon-button" @click.native="voltar()">
                <md-icon>keyboard_arrow_left</md-icon>
            </md-button>

            <div>
                <span style="font-weight: bold; font-size: 18px; font-style: italic">{{ patrocinadorNome }}</span>
                <!--<img src="../assets/sumicity.png" style="height: 15px;">-->
            </div>
        </md-toolbar>

        <div class="containerPagina">
            <form novalidate @submit.stop.prevent="enviar()">
                <span style="font-weight: bold">Nota:</span>
                <star-rating style="margin-bottom: 5px"
                             v-bind:max-rating="5"
                             v-bind:increment="0.5"
                             v-model="dto.valor"
                             :show-rating="false"
                             inactive-color="#DCDCDC"
                             active-color="#FFD700"
                             v-bind:star-size="40">
                </star-rating>
                <span v-if="!dto.valor" class="help is-danger" style="margin-bottom: 3px">{{ mensagem }}</span>

                <md-input-container style="margin-top: 20px">
                    <label>Comentário</label>
                    <md-textarea v-model="dto.comentario" maxlength="60"/>
                </md-input-container>
            </form>
        </div>

        <div v-show="dto.valor" class="animated fadeIn">
            <facebook-login class="button botao"
                            appId="1996582697249987"
                            @login="checkLoginState">
            </facebook-login>
        </div>
    </div>
</template>
<script>

    import facebookLogin from 'facebook-login-vuejs'
    import { C } from '../../constantes'

    export default {
        components: {facebookLogin},
        created () {
            this.patrocinadorNome = this.$store.state.patrocinadorNome
        },
        data () {
            return {
                patrocinadorNome: null,
                mensagem: 'Avaliação é obrigatório.',
                dto: {
                    usuarioNome: null,
                    facebookId: null,
                    usuarioImagem: null,
                    emailFacebook: null,
                    valor: null,
                    momento: null,
                    farmaciaId: null,
                    patrocinadorId: null,
                    comentario: null
                }
            }
        },
        methods: {
            voltar () {
                this.$router.push('/patrocinadores/info/' + this.$route.params.id)
            },
            checkLoginState() {
                FB.api('/me', 'GET', {fields: 'id,name,email,picture'},
                    userInformation => {
                        // console.log(userInformation)
                        this.dto.facebookId = userInformation.id;
                        this.dto.emailFacebook = userInformation.email;
                        this.dto.usuarioImagem = userInformation.picture.data.url
                        this.dto.usuarioNome = userInformation.name;
                        this.enviar()
                    }
                )
            },
            enviar() {
                this.dto.momento = new Date()
                this.dto.patrocinadorId = this.$route.params.id
                this.$http.post(C.URL.AVALIACAO.BASE, this.dto).then(res => {
                    this.$router.push('/patrocinadores/info/' + this.$route.params.id)
                })
            }
        }
    }
</script>