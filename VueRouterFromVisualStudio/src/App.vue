<template>
    <div id="app">
        <h1>lets go somewhere</h1>
        <hr />
        <!-- <a href="/">Home</a> this works but always sends a new request to the server (reloads the page) -->
        <!-- this doesnt reload the page -->
        <router-link to="/"> Home </router-link>
        <!-- you can send a parameter like /second/{id} -->
        <router-link to="/second/12"> SecondRoute </router-link>
        <hr />
        <!-- we need to add a router-view  and it works!!-->

        <router-view></router-view>
    </div>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        components: {
            Home
        }
    };
</script>

<style>
</style>

