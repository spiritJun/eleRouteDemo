import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const routes = [
   {
     path:'/',
     component:()=>import('@/view/Main'),
     redirect:"/index",
     children:[
       {
         path:'/',
         name:'index',
         component:()=>import('@/view/index'),
       },
      // {
      //   path:'/basic/basicContainer',
      //   name:'basicContainer',
      //   component:()=>import('@/view/basic/basicContainer'),
      // },
      // {
      //   path:'/basic/basicLayout',
      //   name:'basicLayout',
      //   component:()=>import('@/view/basic/basicLayout'),
      // },
      // {
      //   path:'/basic/basicLayout/basicLayoutSon',
      //   name:'basicLayoutSon',
      //   component:()=>import('@/view/basic/basicLayout/basicLayoutSon'),
      // },
      // {
      //   path:'/Form/FormCheckbox',
      //   name:'FormCheckbox',
      //   component:()=>import('@/view/Form/FormCheckbox'),
      // },
      // {
      //   path:'/Form/FormRadio',
      //   name:'FormRadio',
      //   component:()=>import('@/view/Form/FormRadio'),
      // },
     ]
   },
  {
      path:`/login`,
      name:'login',
      component:()=>import(`@/view/login`),  
  }
]
export default new Router({
  routes,
  mode: 'history', 
})
