import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/Home'
import Register from "../views/Register";
import Login from "../views/Login";
import Post from "../views/Post";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/post',
            name: 'Post',
            component: Post,
        },
    ],
});

export default router;
