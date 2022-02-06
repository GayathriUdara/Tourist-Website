import {createRouter,createWebHistory} from 'vue-router' 
import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Places from '../views/Places.vue'
const routes =[
    { 
        path:'/',
        name:'Home',
        component:Home,
    },
    {
        path:'/todo',
        name:'Todo',
        component:Todo,
    },
    {
        path:'/contactus',
        name:'Contact', 
        component:Contact,
    },
    {
        path:'/aboutus',
        name:'About', 
        component:About,
    },
    {
        path:'/places',
        name:'Places', 
        component:Places,
    }
    
]
const router= createRouter({
   history:createWebHistory(process.env.BASE_URL),
   routes
})


export default router
