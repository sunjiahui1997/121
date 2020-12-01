import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../components/Home')
const news = () => import('../views/News')
const comment = () => import('../views/Comment')
const contact = () => import('../views/Contact')
const intro = () => import('../views/Intro')
const product = () => import('../views/Product')
const proitem = () => import('../views/ProItem')
const gooditem = () => import('../views/GoodItem')
const newsitem = () => import('../views/NewsItem')
const newslist = () => import('../views/NewsList')
const homeitem = () => import('../views/HomeItem')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
    children:[
      {
        path:'/',
        redirect:'homeitem'
      },
      {
        path:'homeitem',
        component:homeitem
      }
    ]
  },
  {
    path: '/news',
    component: news,
    children:[
      {
        redirect:'newslist',
        path:'/'
      },
      {
        path:'newslist',
        component:newslist
      },
      {
        path:'newsitem',
        component:newsitem
      }
    ]
  },
  {
    path: '/comment',
    component: comment
  },
  {
    path: '/contact',
    component: contact
  },
  {
    path: '/intro',
    component: intro
  },
  {
    path: '/product',
    component: product,
    children:[
      {
        path:'/',
        redirect:'proitem',
      },
      {
        path:'proitem',
        component:proitem
      },
      {
        path:'gooditem',
        component:gooditem
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

export default router