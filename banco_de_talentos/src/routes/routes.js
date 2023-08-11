//importando as funções necessarias do vue-router

import {createRouter, createWebHistory} from 'vue-router'

// importando as telas da aplicação

import Home from '../views/Home/Home.vue'
import About from '../views/About/About.vue'
import TalentNew from '../views/Talents/New/TalentNew.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        { 
            path:'/',
            name:'Home',
            component: Home

        },
        { 
            path:'/sobre',
            name:'About',
            component: About

        },
        { 
            path:'/Talentos/novo',
            name:'TalentNew',
            component: TalentNew

        },


    ]


})
export default router