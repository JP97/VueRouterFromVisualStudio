<template>
    <nav>
        <ul>
            <li v-bind:key="index" v-for="(link, index) in navLinks">
                <!-- this v-bind is nessecary for this to work shortcut is just ":" instead if "v-bind:"-->
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
        display: flex;
        flex-direction:row;
        align-items:center;
        height:100%;
        padding-left:5px;
        list-style-type:none;
    }

/*a because router-links convertes to an a*/
    a{
        display: flex;
        text-decoration:none;
        align-items:center;
        flex-direction:row-reverse;
    }

    li{
        padding: 10px 20px;
    }

    img{
        margin-right:10px;
        height:20px;
        width:20px;
    }
</style>