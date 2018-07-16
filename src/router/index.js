import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/pages/Login'
import MainTabBar from '@/pages/MainTabBar'
import Discovery from '@/pages/Discovery'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainTabBar
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/discovery',
            name: 'discovery',
            component: Discovery
        }
    ]
})
