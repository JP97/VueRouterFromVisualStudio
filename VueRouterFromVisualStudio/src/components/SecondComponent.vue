<template>
    <div>
        <h1>2. Route!!!</h1>
        <p>and a bit more text here.... this is the data from the variable in the link. teh passed data is: {{$route.params.id}}</p>
        <button @click="goHome">back to home</button>
    </div>
</template>

<script>
    export default {
        //whenever this component is created we run the create method
        //vue manages teh components eficently, therefor things in created will not always run, because it doesnt get created everytime
        //for this we make a watch proptery
        //we are watching the route and now the methods run everytime
        //watch: {
        //    '$route'(to, from) {
        //        alert(to.params.id);
        //    }
        //},
        //created() {
        //    alert(this.$route.params.id);
        //},
        methods: {
            goHome() {
                //we push a new route to the stack
                //navigate from inside the code
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
</style>