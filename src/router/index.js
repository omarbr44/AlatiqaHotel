import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

import AddHotel from '../views/hotel/AddHotel.vue'
import AddNumber_pool from '../views/hotel/AddNumber_pool.vue'
import AddNumber_hall from '../views/hotel/AddNumber_hall.vue'
import AddPool from '../views/hotel/AddPool.vue'
import AddHall from '../views/hotel/AddHall.vue'
import AddOwner from '../views/hotel/AddOwner.vue'
import AddInn from '../views/hotel/AddInn.vue'
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
import HallView from '../views/hotel/HallView.vue'
import Number_hallView from '../views/hotel/Number_hallView.vue'
import PoolView from '../views/hotel/PoolView.vue'
import Number_poolView from '../views/hotel/Number_poolView.vue'
import OwnerView from '../views/hotel/OwnerView.vue'
import InstallationView from '../views/hotel/InstallationView.vue' 
import updateehot from '../views/hotel/updateehot.vue'
import AddGuest from '../views/hotel/AddGuest.vue'
import GuestView from '../views/hotel/GuestView.vue'
import updategue from '../views/hotel/updategue.vue'
import updatecomp from '../views/hotel/updatecomp.vue'
import AddCompanion from '../views/hotel/AddCompanion.vue'
import CompanionView from '../views/hotel/CompanionView.vue'
import AddReport from '../views/hotel/AddReport.vue'
import ReportView from '../views/hotel/ReportView.vue'
import updatereport from '../views/hotel/updatereport.vue'
import AddBlackList from '../views/hotel/AddBlackList.vue'
import formslot from '../views/hotel/formslot.vue'
import BlackListView from '../views/hotel/BlackListView.vue'
import updateBlackList from '../views/hotel/updateBlackList.vue'
import GuestPrint from '../views/hotel/GuestPrint.vue'
import ReportPrint from '../views/hotel/ReportPrint.vue'
import GuestPrintForOwn from '../views/hotel/GuestPrintForOwn.vue'
import GuestPoolView from '../views/hotel/GuestPoolView.vue'
import GuestHallView from '../views/hotel/GuestHallView.vue'
import Signup from '../views/hotel/Signup.vue'
import Log_in from '../views/hotel/Log_in.vue'
import _404 from '../views/hotel/_404.vue'
import updatepool from '../views/hotel/updatepool.vue'
import updatenumber_pool from '../views/hotel/updatenumber_pool.vue'
import updatehall from '../views/hotel/updatehall.vue'
import numberhallupdate from '../views/hotel/numberhallupdate.vue'
import updateowner from '../views/hotel/updateowner.vue'
import updateInstallation from '../views/hotel/updateInstallation.vue'


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
      path: '/OwnerView',
      name: 'OwnerView',
      component: OwnerView,
      meta: {requiresAuth: true}
    },
    {
      path: '/updateowner/:idd',
      name: 'updateowner',
      component: updateowner,
      props:true,
      meta: {requiresAuth: true}
    },
    {
      path: '/updateInstallation/:idd',
      name: 'updateInstallation',
      component: updateInstallation,
      props:true,
      meta: {requiresAuth: true}
    },
    {
      path: '/updatepool/:idd',
      name: 'updatepool',
      component: updatepool,
      props:true,
      meta: {requiresAuth: true}
    },
    {
      path: '/updatehall/:idd',
      name: 'updatehall',
      component: updatehall,
      props:true,
      meta: {requiresAuth: true}
    },
    {
      path: '/numberhallupdate/:idd',
      name: 'numberhallupdate',
      component: numberhallupdate,
      props:true,
      meta: {requiresAuth: true}
    },
    {
      path: '/updatenumber_pool/:idd',
      name: 'updatenumber_pool',
      component: updatenumber_pool,
      props:true,
      meta: {requiresAuth: true}
    },
    {
      path: '/InstallationView',
      name: 'InstallationView',
      component: InstallationView,
      meta: {requiresAuth: true}
    },
    {
      path: '/AddHotel',
      name: 'AddHotel',
      component: AddHotel,
      meta: {requiresAuth: true}
    },
    {
      path: '/AddNumber_hall',
      name: 'AddNumber_hall',
      component: AddNumber_hall,
      meta: {requiresAuth: true}
    },
    {
      path: '/AddNumber_pool',
      name: 'AddNumber_pool',
      component: AddNumber_pool,
      meta: {requiresAuth: true}
    },
    {
      path: '/AddOwner',
      name: 'AddOwner',
      component: AddOwner,
      meta: {requiresAuth: true}
    },
    {
      path: '/AddHall',
      name: 'AddHall',
      component: AddHall,
      meta: {requiresAuth: true}
    },
    {
      path: '/HallView',
      name: 'HallView',
      component: HallView,
      meta: {requiresAuth: true}
    },
    {
      path: '/Number_hallView/:id',
      name: 'Number_hallView',
      component: Number_hallView,
      props:true,
      meta: {requiresAuth: true}
    },
    {
      path: '/PoolView',
      name: 'PoolView',
      component: PoolView,
      meta: {requiresAuth: true}
    },
    {
      path: '/Number_poolView/:id',
      name: 'Number_poolView',
      component: Number_poolView,
      props:true,
      meta: {requiresAuth: true}
    },
    {
      path: '/AddPool',
      name: 'AddPool',
      component: AddPool,
      meta: {requiresAuth: true}
    },
    {
      path: '/AddInn',
      name: 'AddInn',
      component: AddInn,
      meta: {requiresAuth: true}
    },
    {
      path: '/GuestPrint/:id', 
      name: 'GuestPrint',
      component: GuestPrint,
      props:true,
      meta: {requiresAuth: true}
  },
    {
      path: '/ReportPrint/:id', 
      name: 'ReportPrint',
      component: ReportPrint,
      props:true,
      meta: {requiresAuth: true}
  },
    {
      path: '/GuestPrintForOwn/:id', 
      name: 'GuestPrintForOwn',
      component: GuestPrintForOwn,
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
      meta: {requiresAuth: true}
    },
    {
      path: '/CityView',
      name: 'CityView',
      component: CityView,
      meta: {requiresAuth: true}
    },
    {
      path: '/GuestHallView',
      name: 'GuestHallView',
      component: GuestHallView,
      meta: {owner: true}
    },
    {
      path: '/GuestPoolView',
      name: 'GuestPoolView',
      component: GuestPoolView,
      meta: {owner: true}
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
      path: '/AddReport/:id', 
      name: 'AddReport',
      component: AddReport,
      props:true,
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
    {
      path: '/:catchAll(.*)', 
      name: '_404',
      component: _404,
    },

  ],
})
router.beforeEach((to, from, next) => {
  const user = useUserStore()
 user.token = JSON.parse( localStorage.getItem('token') )
 user.hotel =  localStorage.getItem('hotel') 
 user.pool = localStorage.getItem('pool') 
 user.hall = localStorage.getItem('hall') 
 user.is_woner = JSON.parse( localStorage.getItem('is_woner') )
 user.is_staff = JSON.parse( localStorage.getItem('is_staff') )
 user.is_pool = JSON.parse( localStorage.getItem('is_pool') )
 user.is_hall = JSON.parse( localStorage.getItem('is_hall') )
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
  user.pool = localStorage.getItem('pool') 
  user.hall = localStorage.getItem('hall') 
  user.is_woner = JSON.parse( localStorage.getItem('is_woner') )
  user.is_pool = JSON.parse( localStorage.getItem('is_pool') )
  user.is_hall = JSON.parse( localStorage.getItem('is_hall') )
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
