import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Login from './pages/login/Login';
import Main from './pages/main/Main';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: Main,
        children: [],
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/',
    },
];

export  const router = createRouter({
    history: createWebHashHistory(),
    routes,
});