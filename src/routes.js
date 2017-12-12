import Login from './page/Login.vue';
import Home from './page/Home.vue';
import Dashboard from './page/Dashboard.vue';
import Viabilidade from './page/Viabilidade.vue';
import ClienteDetalhe from './page/ClienteDetalhe.vue';
import Contrato from './page/Contrato.vue';
import Boleto from './page/Boleto.vue';
import RecuperarSenha from './page/RecuperarSenha.vue';
import AlterarSenha from './page/AlterarSenha.vue';
import PropagandasDia from './page/PropagandaInicial.vue';

export const routes = [
    { path: '/', redirect: '/propagandasDia' },
    { path: '/propagandasDia', component: PropagandasDia },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/cliente', component: ClienteDetalhe },
    { path: '/viabilidade', component: Viabilidade },
    { path: '/contrato', component: Contrato },
    { path: '/boleto', component: Boleto },
    { path: '/recuperarSenha', component: RecuperarSenha},
    { path: '/alterarSenha', component: AlterarSenha},
    { path: '/PropagandasDia', component: AlterarSenha},

    { path: '*', component: Home }
];