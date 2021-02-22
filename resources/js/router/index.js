import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import About from '../views/About'
import Home from '../views/Home'

console.log('router index');

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
    ],
});

export default router;
