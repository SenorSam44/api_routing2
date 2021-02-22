<template>
    <div class="container-fluid px-0">
        <NavBar/>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavBar from "../partials/NavBar";
export default {
    name: "App",
    components: {NavBar}
}
</script>

<style scoped>

</style>
