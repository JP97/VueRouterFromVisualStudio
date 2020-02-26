<template>
    <div class="navbar">
        <div v-bind:key="index" v-for="(link, index) in navLinks" >
            <router-link v-bind:to="link.path" v-bind:color="{color: color || '#222'}">
                <img v-bind:src="link.icon" />
                {{link.text}}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['navLinks']
    }
</script>

<style scoped>

    .navbar{
        height:100%;
        width:25%;
        background-color:#333;
        overflow:auto;
    }

    .navbar a{

        text-decoration:none;
        font-size:20px;
        color:aliceblue;
        float:left;
        padding:12px;
        text-align:center;
    }


    img{
        height:20px;
        width:20px;
        margin-right:10px;
    }
</style>