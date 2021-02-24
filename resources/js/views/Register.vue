<template>

    <div class="py-5 container">
        <h1 class="text-dark font-weight-bold p-3">Register</h1>

        <form class="justify-content-center border rounded border-primary p-5" @submit.prevent="registerUser()">
            <div class="form-group row">
                <label class="col-2 align-self-lg-end text-right" for="name">
                    Name
                </label>
                <input type="text" class="col-10 form-control" id="name" placeholder="Enter your name" v-model="user.name">
            </div>

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

            <div class="form-group row">
                <label class="col-2 align-self-lg-end text-right" for="password_confirm">
                    Confirm password
                </label>
                <input type="password" class="col-10 form-control" id="password_confirm" placeholder="Confirm password" v-model="user.password_confirmation">
            </div>

            <div class="row">
                <button type="submit" class="btn btn-primary offset-11"> Register</button>
            </div>


        </form>

    </div>
</template>

<script>
import ApiService from "../services/api.service";
import {saveToken} from "../services/jwt.service";

export default {
    name: "Register",
    data() {
        return {
            user: {},
        }
    },methods: {
        registerUser(){
            let url='/register'
            ApiService.post(url, this.user)
            .then(response =>{
                if (response){
                    alert('success');
                }else{
                    alert('failed');
                }

                console.log("response");
                console.log(response);
                saveToken(response);
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
