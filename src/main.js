import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import VueMaterial from 'vue-material';
import VueResource from 'vue-resource';
import VueMask from 'v-mask';
import VueMoment from 'vue-moment';
import moment from 'moment';
import StarRating from 'vue-star-rating'
import VueLocalStorage from 'vue-localstorage'
import VeeValidate, { Validator } from 'vee-validate'
import {store} from './store'

moment.locale('pt-BR')

Vue.use(VeeValidate, { locale: 'pt_BR', delay: '5' })
Vue.use(VueRouter);
Vue.use(VueLocalStorage);
Vue.component('star-rating', StarRating);
Vue.use(VueMaterial);
Vue.use(VueResource);
Vue.use(VueMask);
Vue.use(VueMoment, {moment})

Vue.material.registerTheme({
    tema: {
        primary: { color: 'blue', hue: 700 },
        accent : { color: 'orange', hue: 800 },
        warn  : { color: 'red', hue: 700 }
    }
});
Vue.material.setCurrentTheme('tema');

const router = new VueRouter({routes});
new Vue({
    el: '#app',
    store,
    router: router,
    render: h => h(App)
});
