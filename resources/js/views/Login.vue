<template>

    <div class="py-5 container">
        <h1 class="text-dark font-weight-bold p-3">Register</h1>

        <form class="justify-content-center border rounded border-primary p-5" @submit.prevent="loginUser()">
            <div class="form-group row">
                <label class="col-2 align-self-lg-end text-right" for="email">
                    Email
                </label>
                <input type="email" class="col-10 form-control" id="email" placeholder="Enter your email" v-model="user.email">
            </div>

            <div class="form-group row">
                <label class="col-2 align-self-lg-end text-right" for="password">
                    Password
                </label>
                <input type="password" class="col-10 form-control" id="password" placeholder="Password" v-model="user.password">
            </div>

            <div class="row">
                <button type="submit" class="btn btn-primary offset-11"> Login</button>
            </div>


        </form>

    </div>

</template>

<script>
import ApiService from "../services/api.service";
import {saveToken} from "../services/jwt.service";

export default {
    name: "Login",
    data() {
        return {
            user: {},
        }
    },methods: {
        loginUser(){
            let url='/login'
            ApiService.post(url, this.user)
                .then(response =>{
                    if (response){
                        alert('success');
                    }else{
                        alert('failed');
                    }

                    console.log("response");
                    console.log(response);
                    saveToken(response.data.access_token);
                    localStorage.setItem('auth', JSON.stringify(response.data));
                })
        }
    },
    created() {
        // this.registerUser();

    }
}
</script>

<style scoped>

</style>
