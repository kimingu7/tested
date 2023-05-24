import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

import SignUpView from '@/views/accounts/SignUpView'
import LogInView from '@/views/accounts/LogInView'

import CommunityView from '@/views/community/Community.vue'
import ArticleCreateView from '@/views/community/ArticleCreate'
import ArticleDetailView from '@/views/community/ArticleDetail'
import CommentCreateView from '@/components/community/CommentCreate'

import ProductsView from '@/views/products/Products.vue'
import DepositListView from '@/views/products/DepositList.vue'
import DepositDetailView from '@/views/products/DepositDetail.vue'
import SavingListView from '@/views/products/SavingList.vue'
import SavingDetailView from '@/views/products/SavingDetail.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // accounts
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },

  {
    path: '/login',
    name: 'LogInView',
    component: LogInView
  },
  // community
  {
    path: '/community',
    name: 'CommunityView',
    component: CommunityView
  },
  {
    path: '/articles',
    name: 'ArticleCreateView',
    component: ArticleCreateView
  },
  {
    path: '/articles/:id',
    name: 'ArticleDetailView',
    component: ArticleDetailView,
  },
  {
    path: '/articles/:id/comments',
    name: 'CommentCreateView',
    component: CommentCreateView
  },
  // products
  {
    path: '/products',
    name: 'ProductsView',
    component: ProductsView
  },
  { 
    path: '/products/deposit-products/', 
    name: 'DepositListView',
    component: DepositListView
  },
  { 
    path: '/products/deposit-products/:fin_prdt_cd', 
    name: 'DepositDetailView',
    component: DepositDetailView
  },
  { 
    path: '/products/saving-products/', 
    name: 'SavingListView',
    component: SavingListView
  },
  { 
    path: '/products/saving-products/:fin_prdt_cd', 
    name: 'SavingDetailView',
    component: SavingDetailView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router