require('./bootstrap');

import Vue from 'vue'
import App from './views/layout/App'
import ApiService from "./services/api.service";
import router from './router/index'

ApiService.init();

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    render: h=>h(App)
});
