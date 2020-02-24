import Vue from 'vue';
// instal router with npm install --save vue-router to add it as a dependency
import VueRouter from 'vue-router';
//needs to import the two components that we are routing to
import App from './App.vue';
import Second from './components/SecondComponent.vue';
import First from './components/TestFirstRoute.vue';

Vue.use(VueRouter);

//sets up two routes
//you can declare a dynamic variable in rounds with writing :{variablename} with this you say the next part is a variable.
// like /second/:id
//you can extract the data from the variable
const routes = [
    { path: '/second/:id', component: Second },
    { path: '/', component: First }
];

// get the routes to our application
const router = new VueRouter({
    //routes: routes can be shortened too this because of es6
    routes,
    //mode: 'history' removes the # in the browser link- nicer url experience
    mode: 'history'
});

Vue.config.productionTip = true;

//now we add the routes to our vue instance via es6 syntax
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

//next step is in app.vue
