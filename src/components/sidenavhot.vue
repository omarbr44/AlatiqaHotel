<template>
  
  <div class="side-con">
<div class="flex-shrink-0 p-3 bg-white nav-right p-0" style="width: 280px;">
    <div class="d-flex align-items-center pb-3 mb-3 logo">
     <img src="../assets/logoo.png" alt="" style="width:5rem">
    </div>
       
    <ul class="list-unstyled ps-0 text-right bac">
      <div class="fleex  btn-toggle  rounded collapsed " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
        <h5 class="arrow">&lt;</h5>
        <button class="btn btn-toggle align-items-center rounded collapsed white font-s" >
          النزلاء
           <img src="../assets/guests.png" alt="" class="icon">
        </button></div>
      <li class="mb-1">
        
        <div class="collapse " id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small mr-3">
                             <li  class="li-nav border0"> <router-link to="/GuestView" class=" rounded font-s white" >نزيل</router-link>  
                                       <img src="../assets/guests.png" alt="" class="icon">
   </li>
                          
                             <li v-if="user.is_staff" class="li-nav border0"> <router-link to="/ReportView" class=" rounded font-s white" >بلاغات</router-link>  
                                       <img src="../assets/guests.png" alt="" class="icon">
   </li>
                             <li v-if="!user.is_staff" class="li-nav border0"> <router-link to="/AddReport" class=" rounded font-s white" >بلاغات</router-link>  
                                       <img src="../assets/guests.png" alt="" class="icon">
   </li>

          </ul>
        </div>
      </li>
      <li class="mb-1">
         <div class="fleex  btn-toggle  rounded collapsed " data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
        <h5 class="arrow">&lt;</h5>
        <button class="btn btn-toggle align-items-center rounded collapsed white font-s" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          الفنادق
                    <img src="../assets/hotel.png" alt="" class="icon">
        </button></div>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small  mr-3">
                 <li  class="li-nav border0"> <router-link to="/HotelView" class=" rounded white font-s" >فندق</router-link> 
                                     <img src="../assets/hotel.png" alt="" class="icon">
                    </li>

           
          </ul>
        </div>
      </li>
      
      <li class="mb-1" v-if="user.is_staff">
          <div class="fleex  btn-toggle  rounded collapsed " data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="true">
        <h5 class="arrow">&lt;</h5>
        <button class="btn btn-toggle align-items-center rounded collapsed white font-s" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          الاماكن
                                               <img src="../assets/place.png" alt="" class="icon">
        </button></div>
        <div class="collapse" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small  mr-3">
     <li class="li-nav"> <router-link to="/CountryView" class=" rounded  white font-s" >البلدان</router-link> 
                                          <img src="../assets/country.png" alt="" class="icon">
   </li>
     <li class="li-nav"> <router-link to="/GovView" class=" rounded  white font-s" >المحافظات</router-link>    
                                          <img src="../assets/gov.png" alt="" class="icon">
</li>
     <li class="li-nav"> <router-link to="/MidView" class=" rounded  white font-s" >المديريات</router-link>   
                                          <img src="../assets/mid.png" alt="" class="icon">
 </li>
     <li class="li-nav"> <router-link to="/CityView" class=" rounded  white font-s" >المدن</router-link>  
                                          <img src="../assets/city.png" alt="" class="icon">
  </li>
     <li class="li-nav border0"> <router-link to="/SquareView" class=" rounded  white font-s" > المربع السكني</router-link> 
                                          <img src="../assets/square.png" alt="" class="icon">
   </li>
   
  </ul>
</div>
</li>
<li v-if="user.is_staff" class="li-nav border0"> <router-link to="/BlackListView" class=" rounded  white font-s" > القائمة السوداء</router-link> 
                                     <img src="../assets/square.png" alt="" class="icon">
</li>
<li v-if="user.is_staff" class="li-nav border0"> <router-link to="/Signup" class=" rounded  white font-s" > انشاء حساب</router-link> 
                                     <img src="../assets/square.png" alt="" class="icon">
</li>
      <button @click="signOutMeth" class="btn btn-toggle align-items-center rounded collapsed white font-s" >
          تسجيل الخروج
           <img src="../assets/guests.png" alt="" class="icon">
        </button>
    </ul>
  </div>
</div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const user = useUserStore()
const router = useRouter()

  const signOutMeth = ()=>{
    user.signOut()
    router.push({
               name:'Log_in', 
             })
  }
</script>

<style>
.side-con{
    background: #3d3a7d;
    height: 100%;
}
.bac{
    background: #3d3a7d;
}
</style>