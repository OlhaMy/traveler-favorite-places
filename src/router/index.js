import { createRouter, createWebHistory } from 'vue-router'

const GreetingView = () => import('../views/GreetingView.vue')
const AuthView = () => import('../views/AuthView.vue')
const HomepageView = () => import('../views/HomepageView.vue')
const LoginForm = () => import('../components/Auth/LoginForm/LoginForm.vue')
const RegistrationForm = () => import('../components/Auth/RegistrationForm/RegistrationForm.vue')

const routes = [
  { path: '/', component: GreetingView },
  { path: '/map', component: HomepageView },
  {
    path: '/auth',
    component: AuthView,
    redirect: '/auth/login',
    children: [
      { path: 'login', component: LoginForm },
      { path: 'registration', component: RegistrationForm }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
