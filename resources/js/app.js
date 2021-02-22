require('./bootstrap');

import Vue from 'vue'
import App from './views/layout/App'

import router from './router/index'

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    render: h=>h(App)
});
