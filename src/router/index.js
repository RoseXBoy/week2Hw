import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入需要的路由组件
const Login = () => import('@/views/Login/Login.vue')
const Register = () => import('@/views/Register/Register.vue')
const Welcome = () => import('@/views/Welcome/Welcome.vue')
const Index = () => import('@/components/system/Index.vue')

const Home = () => import('@/views/Home/Home.vue')
const User = () => import('@/components/system/User.vue')

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  // 带有 name 名称的路由规则，叫做"命名路由"
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login, name: 'login', meta: { title: '登录' } },
  // 注册页面
  { path: '/register', component: Register, name: 'register', meta: { title: '注册' } },
  { path: '/welcome', component: Welcome, name: 'welcome', redirect: '/welcome/index', 
      children: 
      [
        { path: 'index', component: Index, name: 'index', meta: { title: '首页' } }
      ]
   },
  {
    path: '/home', component: Home, redirect: '/home/user',
    children: [
      { path: 'user', component: User, name: 'user', meta: { title: '用户管理' } },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const paths = ['/welcome/index']
  if (to.meta.title) {
    document.title = to.meta.title
  }
  paths.forEach(item => {
    if (to.path === item) {
      const state = JSON.parse(localStorage.getItem('state'))
      if (state.tokenInfo) {
        next()
      } else {
        next('/login')
      }
    } else next()
  })
})

export default router
