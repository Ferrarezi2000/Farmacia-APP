<style scoped></style>
<template>
    <div>

        <div style="width: 60%; float: left; text-align: center">
            <div style="font-size: 30px; color: orange">
                {{ farmacia.farmaciaMediaAvaliacao }}
            </div>
            <div>
                <star-rating style="margin-bottom: 5px; margin-left: 83px"
                             v-bind:max-rating="5"
                             v-model="estrelas5"
                             :show-rating="false"
                             :read-only="true"
                             inactive-color="#DCDCDC"
                             active-color="#FFD700"
                             v-bind:star-size="15">
                </star-rating>
            </div>

            <div>{{ farmacia.farmaciaTotalAvaliacoes }}
                <span v-if="farmacia.farmaciaTotalAvaliacoes === 1"
                      style="margin-left: 5px">avaliação</span>
                <span v-else style="margin-left: 5px">avaliações</span>
            </div>
        </div>


        <div style="width: 40%; float: right">
                <star-rating style="margin-bottom: 5px"
                             v-bind:max-rating="5"
                             v-model="estrelas5"
                             :show-rating="false"
                             :read-only="true"
                             inactive-color="#DCDCDC"
                             active-color="#FFD700"
                             v-bind:star-size="15">
                </star-rating>
                <!--<span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes5 }}</span>-->

                    <star-rating style="margin-bottom: 5px"
                                 v-bind:max-rating="5"
                                 v-model="estrelas4"
                                 :show-rating="false"
                                 :read-only="true"
                                 inactive-color="#DCDCDC"
                                 active-color="#FFD700"
                                 v-bind:star-size="15">
                    </star-rating>
                    <!--<span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes4 }}</span>-->


                    <star-rating style="margin-bottom: 5px"
                                 v-bind:max-rating="5"
                                 v-model="estrelas3"
                                 :show-rating="false"
                                 :read-only="true"
                                 inactive-color="#DCDCDC"
                                 active-color="#FFD700"
                                 v-bind:star-size="15">
                    </star-rating>
                    <!--<span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes3 }}</span>-->

                        <star-rating style="margin-bottom: 5px"
                                     v-bind:max-rating="5"
                                     v-model="estrelas2"
                                     :show-rating="false"
                                     :read-only="true"
                                     inactive-color="#DCDCDC"
                                     active-color="#FFD700"
                                     v-bind:star-size="15">
                        </star-rating>
                        <!--<span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes2 }}</span>-->

                        <star-rating style="margin-bottom: 5px"
                                     v-bind:max-rating="5"
                                     v-model="estrelas1"
                                     :show-rating="false"
                                     :read-only="true"
                                     inactive-color="#DCDCDC"
                                     active-color="#FFD700"
                                     v-bind:star-size="15">
                        </star-rating>
                        <!--<span class="nEstrelas">{{ farmacia.farmaciaTotalAvaliacoes1 }}</span>-->
        </div>











<div style="clear: right">

        teste



    </div>
    </div>
</template>
<script>
    export default {
        created () {},
        data () {
            return {
                estrelas5: 5,
                estrelas4: 4,
                estrelas3: 3,
                estrelas2: 2,
                estrelas1: 1,
                farmacia: {farmaciaMediaAvaliacao: 3.5, farmaciaTotalAvaliacoes: 5}
            }
        }
    }
</script>