<template>
    <nav>
        <ul>
            <li v-bind:key="index" v-for="(link, index) in navLinks">
                <!-- this v-bind is nessecary for this to work shortcut is just :-->
                <router-link v-bind:to="link.path"  v-bind:style="{color: '#DDD'}">
                    {{link.text}}
                    <img v-bind:src="link.icon"/>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: ['navLinks']
    }
</script>

<style scoped>

    nav{
        height: 60px;
        width:100%;
        background-color:#333;
    }

    ul{
        list-style-type:none;
    }

    i{
        width:25px;
        height:25px;
    }
</style>