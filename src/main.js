import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import VueMaterial from 'vue-material';
import VueResource from 'vue-resource';
import VueMask from 'v-mask';

import Aviso from './component/Aviso.vue';

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueResource);
Vue.use(VueMask);

Vue.component('air-aviso', Aviso);

Vue.http.options.root = 'http://api-sac.sumicity.net.br';
// Vue.http.options.root = 'http://127.0.0.1:9000';

Vue.material.registerTheme({
    sumicity: {
        primary: { color: 'blue', hue: 700 },
        accent : { color: 'orange', hue: 800 },
        warn  : { color: 'red', hue: 700 }
    }
});
Vue.material.setCurrentTheme('sumicity');

const router = new VueRouter({routes});
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
