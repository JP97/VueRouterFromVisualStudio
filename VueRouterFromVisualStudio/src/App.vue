<template>
    <div id="app">
        <h1>lets go somewhere</h1>
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

