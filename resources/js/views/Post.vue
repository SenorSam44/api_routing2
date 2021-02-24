<template>

    <div class="container">
        <h1>Post</h1>
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <span class="col p-3 text-center">Post</span>
                    <span @click="newPost=!newPost" class="col p-3 text-center cursor-pointer">Create Post</span>
                    <span @click="getPosts()" class="col p-3 text-center cursor-pointer">Refresh</span>
                </div>

                <div v-if="newPost" class="form-row">
                    <label class="p-2 w-100 " for="title">
                        Title
                        <input id="title" v-model="title" class="form-control w-100"/>
                    </label>

                    <label class="p-2 w-100" for="body">
                        Body
                        <textarea id="body" v-model="body" class="form-control w-100" rows="5"></textarea>
                    </label>

                    <button class="offset-10 col-2 btn btn-primary" id="post" @click="createPost()">Post</button>
                </div>

            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(post, index) in posts">
                        <td>{{ index + 1 }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.body }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from "../services/api.service";

export default {
    name: "Post",
    data() {

        return {
            posts: [],
            title: '',
            body: '',
            newPost: true,

        }
    },
    methods: {
        createPost() {
            let data = {
                title: this.title,
                body: this.body,
            }

            ApiService.post('/createPost', data)
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.error(err);

                }).finally(() => {

            })
            this.getPosts();
            this.resetForm();
        },
        getPosts() {
            ApiService.get('/getPosts')
                .then(response => {
                    console.log(response.data);
                    this.posts = response.data;
                })
                .finally(() => {
                    // this.$store.state.posts.push(this.posts)
                })
        },
        redirectToLogin() {
            if (this.$store.state.user == null) {
                window.location.href = '/login'
            }
        },
        resetForm() {
            this.title = '';
            this.body = ''

        }
    },
    mounted() {
        this.getPosts();
        this.redirectToLogin();
        // console.log(this.$store.state);
        // console.log(ApiService.default);
    },
}

</script>

<style scoped>

</style>
