// Vue modules
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Endpoints REST
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

// Vue components
import App from './App.vue';
import DisplayImages from './components/DisplayImages.vue';
import CreateImage from './components/CreateImage.vue';
import EditImage from './components/EditImage.vue';


// Application routes
const routes = [
    {
        name: 'DisplayImages',
        path: '/',
        component: DisplayImages
    },
    {
        name:'CreateImage',
        path: '/create/images',
        component: CreateImage
    },
    {
        name: 'EditImage',
        path: '/edit/images/:id',
        component: EditImage
    }
];

// Router config
const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({router}, App)).$mount('#app');