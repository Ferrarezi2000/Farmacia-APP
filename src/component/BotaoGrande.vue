<template>

    <md-card class="botao" :class="classe">
        <md-ink-ripple/>
        <footer>
            <md-icon class="md-size-1x">{{icone}}</md-icon>
            <p class="md-subheading">{{texto}}</p>
        </footer>
    </md-card>
</template>
<script>
    export default{
        props: ['classe', 'icone', 'texto']
    }
</script>
<style scoped>
    .botao { padding: 1em; }
    .botao footer{ position: absolute; bottom: 1em; }
    /*.botao footer p{ color: #E65100; }*/
    .botao footer .md-icon{ color: #1976D2; }
</style>