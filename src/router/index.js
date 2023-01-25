import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

import AddHotel from '../views/hotel/AddHotel.vue'
import AddGov from '../views/hotel/AddGov.vue'
import AddCity from '../views/hotel/AddCity.vue'
import AddSquare from '../views/hotel/AddSquare.vue'
import AddMid from '../views/hotel/AddMid.vue'
import AddCountry from '../views/hotel/AddCountry.vue'
import HotelView from '../views/hotel/HotelView.vue'
import CityView from '../views/hotel/CityView.vue'
import SquareView from '../views/hotel/SquareView.vue'
import CountryView from '../views/hotel/CountryView.vue'
import MidView from '../views/hotel/MidView.vue'
import GovView from '../views/hotel/GovView.vue'
import updateehot from '../views/hotel/updateehot.vue'
import AddGuest from '../views/hotel/AddGuest.vue'
import GuestView from '../views/hotel/GuestView.vue'
import updategue from '../views/hotel/updategue.vue'
import updatecomp from '../views/hotel/updatecomp.vue'
import AddCompanion from '../views/hotel/AddCompanion.vue'
import CompanionView from '../views/hotel/CompanionView.vue'
import AddReport from '../views/hotel/AddReport.vue'
import ReportView from '../views/hotel/ReportView.vue'
import updateCom from '../views/hotel/updateCom.vue'
import updatereport from '../views/hotel/updatereport.vue'
import AddBlackList from '../views/hotel/AddBlackList.vue'
import formslot from '../views/hotel/formslot.vue'
import BlackListView from '../views/hotel/BlackListView.vue'
import updateBlackList from '../views/hotel/updateBlackList.vue'
import GuestPrint from '../views/hotel/GuestPrint.vue'
import Signup from '../views/hotel/Signup.vue'
import Log_in from '../views/hotel/Log_in.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/',
      redirect: {name: 'Log_in'}
    },
    {
      path: '/Log_in',
      name: 'Log_in',
      component: Log_in
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/AddHotel',
      name: 'AddHotel',
      component: AddHotel,
      meta: {requiresAuth: true}
    },
    {
      path: '/GuestPrint/:id', 
      name: 'GuestPrint',
      component: GuestPrint,
      props:true,
      meta: {owner: true}
  },
    {
      path: '/AddGov',
      name: 'AddGov',
      component: AddGov,
      meta: {requiresAuth: true}
    },
    {
      path: '/AddCity',
      name: 'AddCity',
      component: AddCity,
      meta: {requiresAuth: true}
    },
    {
      path: '/AddSquare',
      name: 'AddSquare',
      component: AddSquare,
      meta: {requiresAuth: true}
    },
    {
      path: '/AddMid',
      name: 'AddMid',
      component: AddMid,
      meta: {requiresAuth: true}
    },
    {
      path: '/AddCountry',
      name: 'AddCountry',
      component: AddCountry,
      meta: {requiresAuth: true}
    },
    {
      path: '/HotelView',
      name: 'HotelView',
      component: HotelView,
      meta: {owner: true}
    },
    {
      path: '/CityView',
      name: 'CityView',
      component: CityView,
      meta: {requiresAuth: true}
    },
    {
      path: '/SquareView',
      name: 'SquareView',
      component: SquareView,
      meta: {requiresAuth: true}
    },
    {
      path: '/CountryView', 
      name: 'CountryView',
      component: CountryView,
      meta: {requiresAuth: true}
    },
    {
      path: '/MidView', 
      name: 'MidView',
      component: MidView,
      meta: {requiresAuth: true}
    },
    {
      path: '/GovView', 
      name: 'GovView',
      component: GovView,
      meta: {requiresAuth: true}
    },
    {
      path: '/AddGuest', 
      name: 'AddGuest',
      component: AddGuest,
      meta: {owner: true}
    },
    {
      path: '/GuestView', 
      name: 'GuestView',
      component: GuestView,
      meta: {owner: true}
    },
    {
      path: '/AddCompanion', 
      name: 'AddCompanion',
      component: AddCompanion,
      meta: {owner: true}
    },
    {
      path: '/CompanionView/:idd', 
      name: 'CompanionView',
      component: CompanionView,
      props: true,
      meta: {owner: true}
    },
    {
      path: '/AddReport', 
      name: 'AddReport',
      component: AddReport,
      meta: {owner: true}
    },
    {
      path: '/AddBlackList', 
      name: 'AddBlackList',
      component: AddBlackList,
      meta: {requiresAuth: true}
    },
    {
      path: '/ReportView', 
      name: 'ReportView',
      component: ReportView,
      meta: {requiresAuth: true}
    },
    {
      path: '/updateehot/:idd', 
      name: 'updateehot',
      component: updateehot,
      props: true,
      meta: {requiresAuth: true}
    },
    {
      path: '/updateBlackList/:idd', 
      name: 'updateBlackList',
      component: updateBlackList,
      props: true,
      meta: {requiresAuth: true}
    },
    
    {
      path: '/formslot',
      name: 'formslot',
      component: formslot
    },
    {
      path: '/BlackListView',
      name: 'BlackListView',
      component: BlackListView,
      meta:{requiresAuth: true}
    },
    {
      path: '/updategue/:idd', 
      name: 'updategue',
      component: updategue,
      props: true,
      meta: {owner: true}
    },
    {
      path: '/updatecomp/:idd', 
      name: 'updatecomp',
      component: updatecomp,
      props: true,
      meta: {owner: true}
    },
  
    {
      path: '/updatereport/:idd', 
      name: 'updatereport',
      component: updatereport,
      props: true,
      meta: {requiresAuth: true}
    },

  ],
})
router.beforeEach((to, from, next) => {
  const user = useUserStore()
 user.token = JSON.parse( localStorage.getItem('token') )
 user.hotel =  localStorage.getItem('hotel') 
 user.is_woner = JSON.parse( localStorage.getItem('is_woner') )
 user.is_staff = JSON.parse( localStorage.getItem('is_staff') )
  if(to.matched.some((record)=> record.meta.requiresAuth)){
    if(user.token && user.is_staff){
      next()
      return
    }
    if(user.token)
    router.go(-1)
    else
    next("Log_in")
  } else{
    next()
  }
})
router.beforeEach((to, from, next) => {
  const user = useUserStore()
  user.token = JSON.parse( localStorage.getItem('token') )
  user.hotel = localStorage.getItem('hotel') 
  user.is_woner = JSON.parse( localStorage.getItem('is_woner') )
  user.is_staff = JSON.parse( localStorage.getItem('is_staff') )
  if(to.matched.some((record)=> record.meta.owner)){
    if(user.token){
      next()
      return
    }
    next("Log_in")
  } else{
    next()
  }
})

  

export default router
