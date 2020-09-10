import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import Skills from '../views/Skills.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router