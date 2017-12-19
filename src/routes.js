import Home from './page/Home.vue';
import PropagandasDia from './page/PropagandaInicial.vue';
import ListaPlantoes from './page/ListaPlantoes.vue';
import FarmaciasVip from './page/FarmaciasVip.vue';
import Farmacias from './page/Farmacias.vue';
import FarmaciasInfo from './page/FarmaciasInfo.vue';
import PatrocinadorInfo from './page/PatrocinadorInfo.vue';
import Patrocinadores from './page/Patrocinadores.vue';
import ComentarioFarmacia from './page/ComentarFarmacia.vue';
import ComentarioPatrocinador from './page/ComentarPatrocinador.vue';
import Teste from './page/teste.vue';

export const routes = [
    { path: '/', redirect: '/propagandasDia' },
    { path: '/propagandasDia', component: PropagandasDia },
    { path: '/home', component: Home },
    { path: '/plantoes', component: ListaPlantoes },
    { path: '/teste', component: Teste },
    { path: '/farmacias/vip', component: FarmaciasVip },
    { path: '/farmacias/info/:id', component: FarmaciasInfo },
    { path: '/patrocinadores/info/:id', component: PatrocinadorInfo },
    { path: '/comentar/farmacia/:id', component: ComentarioFarmacia },
    { path: '/comentar/patrocinador/:id', component: ComentarioPatrocinador },
    { path: '/farmacias', component: Farmacias },
    { path: '/patrocinadores', component: Patrocinadores },

    { path: '*', component: PropagandasDia }
];