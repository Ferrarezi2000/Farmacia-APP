import Home from './page/Home.vue';
import PropagandasDia from './page/PropagandaInicial.vue';
import ListaPlantoes from './page/ListaPlantoes.vue';
import FarmaciasVip from './page/FarmaciasVip.vue';
import Farmacias from './page/farmacia/Farmacias.vue';
import FarmaciasInfo from './page/farmacia/FarmaciasInfo.vue';
import PatrocinadorInfo from './page/patrocinador/PatrocinadorInfo.vue';
import Patrocinadores from './page/patrocinador/Patrocinadores.vue';
import ComentarioFarmacia from './page/farmacia/ComentarFarmacia.vue';
import ComentarioPatrocinador from './page/patrocinador/ComentarPatrocinador.vue';
import Teste from './page/teste.vue';
import ADM from './page/administrador/CentralAdm.vue'
import FarmaciaAdicionais from './page/farmacia/AdicionaisFarmacia.vue'
import PatrocinadorAdicionais from './page/patrocinador/AdicionaisPatrocinador.vue'
import EditarPerfil from './page/administrador/EditarPerfil.vue'
import EditarContatos from './page/administrador/EditarContato.vue'
import EditarEndereco from './page/administrador/EditarEndereco.vue'
import EditarAdicionais from './page/administrador/EditarAdicionais.vue'

export const routes = [
    { path: '/teste', component: Teste },
    { path: '/', redirect: '/propagandasDia' },
    { path: '/propagandasDia', component: PropagandasDia },
    { path: '/home', component: Home },
    { path: '/plantoes', component: ListaPlantoes },
    { path: '/adm', component: ADM },
    { path: '/farmacias/vip', component: FarmaciasVip },
    { path: '/farmacias/info/:id', component: FarmaciasInfo },
    { path: '/patrocinadores/info/:id', component: PatrocinadorInfo },
    { path: '/comentar/farmacia/:id', component: ComentarioFarmacia },
    { path: '/adicionais/farmacia/:id', component: FarmaciaAdicionais },
    { path: '/adicionais/patrocinador/:id', component: PatrocinadorAdicionais },
    { path: '/comentar/patrocinador/:id', component: ComentarioPatrocinador },
    { path: '/farmacias', component: Farmacias },
    { path: '/patrocinadores', component: Patrocinadores },
    { path: '/adiministrador/perfil/', component: EditarPerfil },
    { path: '/adiministrador/contatos/', component: EditarContatos },
    { path: '/adiministrador/endereco/', component: EditarEndereco },
    { path: '/adiministrador/adicionais/', component: EditarAdicionais },

    { path: '*', component: PropagandasDia }
];