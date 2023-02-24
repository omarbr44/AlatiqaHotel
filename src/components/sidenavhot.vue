<template>
  
  <div class="side-con">
<div class="flex-shrink-0 p-3 bg-white nav-right p-0" style="width: 280px;">
    <div class="img_con pb-3 mb-3 logo">
     <img src="../assets/logoo.png" alt="" style="width:5rem">
     <p >العتيقه تيكنولوجي</p>

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
                             <li v-if="user.is_staff || user.is_woner"  class="li-nav border0"> <router-link to="/GuestView" class=" rounded font-s white" >نزيل فندق</router-link>
                              <img src="../assets/guests.png" alt="" class="icon">
                            </li>
                            <li v-if="user.is_staff || user.is_pool"  class="li-nav border0"> <router-link to="/GuestPoolView" class=" rounded font-s white" >نزيل مسبح</router-link>  
                              <img src="../assets/guests.png" alt="" class="icon">
                            </li>
                            <li v-if="user.is_staff || user.is_hall" class="li-nav border0"> <router-link to="/GuestHallView" class=" rounded font-s white" >نزيل صالة</router-link>  
                              <img src="../assets/guests.png" alt="" class="icon">
                            </li>
  
                          
                             <li v-if="user.is_staff" class="li-nav border0"> <router-link to="/ReportView" class=" rounded font-s white" >بلاغات</router-link>  
                                       <img src="../assets/guests.png" alt="" class="icon">
   </li>
                             <li v-if="!user.is_staff && user.is_woner" class="li-nav border0"> <router-link to="/AddReport/1" class=" rounded font-s white" >بلاغات</router-link>  
                                       <img src="../assets/guests.png" alt="" class="icon">
   </li>

          </ul>
        </div>
      </li>
      <div v-if="user.is_staff" class="fleex  btn-toggle  rounded collapsed " data-bs-toggle="collapse" data-bs-target="#homee-collapse" aria-expanded="true">
        <h5 class="arrow">&lt;</h5>
        <button class="btn btn-toggle align-items-center rounded collapsed white font-s" >
           المنشئات والمالكين
           <img src="../assets/guests.png" alt="" class="icon">
        </button></div>
      <li class="mb-1">
        
        <div class="collapse " id="homee-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small mr-3">
                             
                            <li v-if="user.is_staff" class="li-nav border0"> <router-link to="/InstallationView" class=" rounded font-s white" >المنشئات</router-link>  
                              <img src="../assets/guests.png" alt="" class="icon">
                            </li>
                            <li v-if="user.is_staff" class="li-nav border0"> <router-link to="/OwnerView" class=" rounded font-s white" >المالكين</router-link>  
                              <img src="../assets/guests.png" alt="" class="icon">
                            </li>
  

          </ul>
        </div>
      </li>
      <li class="mb-1" v-if="user.is_staff">
         <div class="fleex  btn-toggle  rounded collapsed " data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
        <h5 class="arrow">&lt;</h5>
        <button class="btn btn-toggle align-items-center rounded collapsed white font-s" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          المباني
                    <img src="../assets/hotel.png" alt="" class="icon">
        </button></div>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small  mr-3">
                 <li  class="li-nav border0"> <router-link to="/HotelView" class=" rounded white font-s" >فندق</router-link> 
                                     <img src="../assets/hotel.png" alt="" class="icon">
                    </li>

           
          </ul>
        </div>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small  mr-3">
                 <li  class="li-nav border0"> <router-link to="/poolView" class=" rounded white font-s" >مسبح</router-link> 
                                     <img src="../assets/hotel.png" alt="" class="icon">
                    </li>

           
          </ul>
        </div>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small  mr-3">
                 <li  class="li-nav border0"> <router-link to="/hallView" class=" rounded white font-s" >صالة</router-link> 
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
.img_con{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>