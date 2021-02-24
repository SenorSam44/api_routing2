import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {getToken} from "./services/jwt.service";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cc: 1,
        // posts: [],
        token: null,
        user: null
    },
    getters: {},
    actions: {

        // getPosts(context) {
        //     context.commit('setPosts')
        // },

        getUser(context) {
            console.log('check user');
            context.commit('setUser');
        },
    },
    mutations: {
        increment(state) {
            state.cc++
        },

        // setPosts(state) {
        //     ApiService.get('/getPosts')
        //         .then(response => {
        //             console.log(response);
        //             state.posts = response.data;
        //         })
        // },
        setUser(state) {
            state.token = getToken();
            let localToken = JSON.parse(localStorage.getItem('auth'))
            if (localToken.access_token == state.token) {
                state.user = localToken.user
            } else {
                state.user = null
            }
        }
    }
})

export default store;
