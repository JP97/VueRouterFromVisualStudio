<template>
    <div id="app">
        <ResponsiveMenu v-bind:nav-links="navLinks"></ResponsiveMenu>
        <h1>lets go somewhere</h1>
        <!--<hr />-->
        <!-- <a href="/">Home</a> this works but always sends a new request to the server (reloads the page) -->
        <!-- this doesnt reload the page -->
        <!--<router-link to="/"> Home </router-link>-->
        <!-- you can send a parameter like /second/{id} -->
        <router-link to="/second/12"> SecondRoute with 12 </router-link>
        <hr />
        <!-- we need to add a router-view  and it works!!-->

        <router-view></router-view>
    </div>
</template>

<script>
    import ResponsiveMenu from './components/ResponsiveMenu.vue';

    export default {
        name: 'app',
        components: {
            ResponsiveMenu
        },
        // we will make an object that contains each navigation link and pass it down to header
        data() {
            return {
                navLinks: [
                    {
                        text: 'FirstComponent',
                        path: '/',
                        icon: 'favicon.ico'
                    },
                    {
                        text: 'SecondComponent',
                        path: '/second',
                        icon: 'favicon.ico'
                    }
                ]
            }
        }
    };
</script>

<style>

    body{
        /*margin:0px;*/
    }
</style>

