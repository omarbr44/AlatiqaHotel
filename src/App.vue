
<template>
  <nav v-if="route_name" class="navbar navbar-expand-lg ">
    <div class="container-fluid">
     
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              النزلاء
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                     
                     <li> <router-link to="/GuestView" class="dropdown-item dropp" >نزيل</router-link> </li>
                     <li v-if="user.is_staff"> <router-link to="/ReportView" class="dropdown-item dropp" >شكاوي</router-link> </li>
                     <li v-if="!user.is_staff"> <router-link to="/AddReport" class="dropdown-item dropp" >شكاوي</router-link> </li>
            
            </ul>
          </li>
        
           <li class="nav-item dropdown" v-if="user.is_staff">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              الفنادق
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                     
                     <li> <router-link to="/HotelView" class="dropdown-item dropp" >فندق</router-link> </li>
            
            </ul>
          </li>
           <li class="nav-item dropdown" v-if="user.is_staff">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              الاماكن
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                     <li> <router-link to="/CountryView" class="dropdown-item dropp " >البلدان</router-link>    </li>
                     <li> <router-link to="/GovView" class="dropdown-item dropp" >المحافظات</router-link> </li>
                     <li> <router-link to="/MidView" class="dropdown-item dropp" >المديريات</router-link> </li>
                     <li> <router-link to="/CityView" class="dropdown-item dropp" >المدن</router-link> </li>
                     <li> <router-link to="/SquareView" class="dropdown-item dropp" > المربع السكني</router-link> </li>
                     
                    </ul>
                  </li>
                  <li v-if="user.is_staff"> <router-link to="/BlackListView" class="dropdown-item dropp" > القائمة السوداء</router-link> </li>
          <a class="nav-link " @click="signOutMeth"  role="button" >
              تسجيل الخروج
            </a>
        </ul>
       
      </div>
    </div>
  </nav>  
  
  <div :class="{flex:route_name} ">
  <router-view />
     
      <sidenavhot v-if="route_name"/>
  </div>
      
  </template>
  
  <script setup>
  import sidenavhot from '@/components/sidenavhot.vue'
  import { ref,watchEffect } from 'vue';
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/stores/user'

const user = useUserStore()
  const router = useRouter()
  const route_name= ref(false)
            
  const signOutMeth = ()=>{
    user.signOut()
    router.push({
               name:'Log_in', 
             })
  }
  watchEffect(()=>{
    if(router.currentRoute.value.name == 'Signup'
    || 
    router.currentRoute.value.name == 'Log_in'
    || 
    router.currentRoute.value.name == undefined
    || 
    router.currentRoute.value.name == 'GuestPrint'
    || 
    router.currentRoute.value.name == 'GuestPrintForOwn'
    || 
    router.currentRoute.value.name == 'ReportPrint'
     )
       route_name.value = false
    else
    route_name.value = true
  })
  
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@500&display=swap');
  #app {
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: 'Noto Sans Arabic', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border: none;
    box-sizing: border-box;
  }
  .flex{
    justify-content: flex-end
  }
  body,html{
  height: 100%;
  background: #f9f9f9
  }
  .navbar{
    direction: rtl;
  }
  .navbar-toggler{
    margin: 1rem
  }
  .show{
    text-align: right;
      padding: 0;
      margin: 0;
  }
  .last button, form a button, .green_but{
    background-color: #387e62 !important;
    border: none !important;
  } 
  </style>
  