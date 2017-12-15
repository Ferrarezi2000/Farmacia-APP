import Home from './page/Home.vue';
import PropagandasDia from './page/PropagandaInicial.vue';
import ListaPlantoes from './page/ListaPlantoes.vue';
import FarmaciasVip from './page/FarmaciasVip.vue';
import Patrocinadores from './page/Patrocinadores.vue';

export const routes = [
    { path: '/', redirect: '/propagandasDia' },
    { path: '/propagandasDia', component: PropagandasDia },
    { path: '/home', component: Home },
    { path: '/plantoes', component: ListaPlantoes },
    { path: '/farmacias/vip', component: FarmaciasVip },
    { path: '/patrocinadores', component: Patrocinadores },

    { path: '*', component: PropagandasDia }
];