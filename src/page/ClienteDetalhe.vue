<template>
    <div>
        <air-menu titulo="Dados Cadastrais" icone="account_box"/>

        <air-aviso ref="aviso" :mostrar="true"/>

        <!--Dados Cadastrais-->
        <md-list>
            <md-list-item>
                <md-icon>account_circle</md-icon>
                <div class="md-list-text-container">
                    <span>{{cliente.nome}}</span>
                    <!--<span>Nome</span>-->
                </div>
            </md-list-item>
            <md-list-item>
                <md-icon>phone</md-icon>
                <div class="md-list-text-container">
                    <span>{{cliente.telefone}}</span>
                    <span>Telefone</span>
                </div>
            </md-list-item>
            <md-list-item>
                <md-icon>mail</md-icon>
                <div class="md-list-text-container">
                    <span>{{cliente.email}}</span>
                    <span>Email</span>
                </div>
            </md-list-item>
        </md-list>

        <!--Endereços-->
        <md-subheader class="md-title">Endereços cadastrados</md-subheader>

        <div v-for="endereco in cliente.enderecos" :key="endereco.id">
            <md-list>
                <md-list-item>
                    <md-icon>home</md-icon>
                    <div class="md-list-text-container">
                        <span>{{endereco.tipo}}</span>
                        <span>Tipo</span>
                    </div>
                </md-list-item>
            </md-list>

            <div class="endereco">
                {{endereco.logradouro}}, {{endereco.numero}} {{endereco.complemento}} <br/>
                {{endereco.bairro}}, CEP: {{endereco.cep}} <br/>
                {{endereco.cidade}} - {{endereco.uf}} <br/>
                {{endereco.referencia}}
            </div>
        </div>

    </div>

</template>
<script>
    import Menu from '../component/Menu.vue';
    import ClienteService from '../service/ClienteService';

    export default{
        created(){
            this.service = new ClienteService();
            this.init();
        },
        components: { 'air-menu': Menu },
        data(){ return { cliente: {} } },
        methods: {
            init: function () {
                this.$http.get('cliente', this.service.httpHeader()).then(response => {
                    this.cliente = response.body;
                    this.$refs.aviso.carregado();
                }, response => {
                    this.$refs.aviso.abrir(response);
                });
            }
        }
    }
</script>
<style scoped>
    .endereco { padding: 0 1em;}
</style>