import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../components/Home')
const news = () => import('../views/News')
const comment = () => import('../views/Comment')
const contact = () => import('../views/Contact')
const intro = () => import('../views/Intro')
const product = () => import('../views/Product')
const prok = () => import('../views/Prok')
const prokna = () => import('../views/Prokna')
const proitem = () => import('../views/ProItem')
const gooditem = () => import('../views/GoodItem')
const newsitem = () => import('../views/NewsItem')
const newslist = () => import('../views/NewsList')
const homeitem = () => import('../views/HomeItem')
const homebus = () => import('../views/Homebus')
const paohua1 = () => import('../views/detail/paohua1')
const paohua2 = () => import('../views/detail/paohua2')
const paohua3 = () => import('../views/detail/paohua3')
const paohua4 = () => import('../views/detail/paohua4')
const paohua5 = () => import('../views/detail/paohua5')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home/homeitem'
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
      },
      {
        path:'homebus',
        component:homebus
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
      },
      {
        path: 'prok',
        component: prok
      },
      {
        path: 'prokna',
        component: prokna
      },
      {
        path:'paohua1',
        component:paohua1
      },
       {
         path: 'paohua2',
         component: paohua2
       },
        {
          path: 'paohua2',
          component: paohua2
        },
         {
           path: 'paohua3',
           component: paohua3
         },
          {
            path: 'paohua4',
            component: paohua4
          },
           {
             path: 'paohua5',
             component: paohua5
           },
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