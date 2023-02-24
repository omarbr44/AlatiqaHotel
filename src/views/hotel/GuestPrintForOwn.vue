<template >
    <img class="print_back" src="../../assets/logo1.jpg" alt="">
  
    <looading v-if="load"/>
  
  <div v-else class="containerr">
      <div v-if="formdata2"  style="font-family: auto;" class="printc">
       <div style="display:flex ;justify-content: space-between;border-bottom: 2px solid black; margin-bottom: 1rem;
       margin-top: 1.5rem;
         padding: 0 1rem;">
             
             <div style=" width: 33.33%;">
                <img width="180px" src="../../assets/1211.jpg" alt="">
               </div>
         <div style="text-align: center;
      width: 33.33%;
      display: flex;
      justify-content: end;">
      <p style="font-size: 0.9rem;">
        الجمهورية اليمنية
        <br/>
وزارة الداخلية
             <br/>
              ادارة امن وشرطة م/ حضرموت للوادي والصحراء
             <br/>
الشرطة السياحية 
         </p>
        </div>
     
         </div>
        <div style="display: flex;
         justify-content: space-between;
         margin: 1rem;">
         <div style="border: 1px solid;
         padding: 10px;
         text-align: end; ">
                 <p style="margin: 0;margin-left: 5rem;"> {{Simple_date}} التاريخ</p>
                 <p style="margin: 0;margin-left: 5rem;"> اليوم {{day}} </p>
                 <p style="margin: 0;margin-left: 5rem;"> {{date.getHours()}}:{{date.getMinutes()}} الساعة</p>
             </div>
         <div v-if="typeOfplace=='فندق'" style="border: 1px solid;
         padding: 10px;
         text-align: end;">
                 <p style="margin: 0;margin-left: 5rem;">اسم الفندق : {{formdata3.name}} </p>
                 <!-- <p style="margin: 0;margin-left: 5rem;"> مالك الفندق : {{formdata3.owner}} </p> -->
                 <p style="margin: 0;margin-left: 5rem;"> منطقة الفندق : {{formdata3.residential_name}} </p>
                 <p  style="margin: 0;margin-left: 5rem;"> رقم الهاتف : {{formdata3.number_hotel}} </p>
             </div> 
         <div v-if="typeOfplace=='صالة'" style="border: 1px solid ;
         padding: 10px;
         text-align: end;">
                 <p style="margin: 0;margin-left: 5rem;">اسم الصالة : {{formdata3.name}} </p>
                 <p style="margin: 0;margin-left: 5rem;"> المنشأة  : {{formdata3.Installation_name}} </p>
             </div> 
         <div v-if="typeOfplace=='مسبح'" style="border: 1px solid;
         padding: 10px;
         text-align: end;">
                 <p style="margin: 0;margin-left: 5rem;">اسم المسبح : {{formdata3.name}} </p>
                 <p style="margin: 0;margin-left: 5rem;"> المنشأة  : {{formdata3.Installation_name}} </p>
             </div> 
         
       
             
        </div>
        
     
     
         <table class="table table-striped" style="text-align: center; " >
       <thead>
         <tr>
           <th  rowspan="2">تاريخ الخروج</th>
           <th rowspan="2">تاريخ الدخول</th>
           <th rowspan="2">رقم الهوية</th>
          <!-- <th rowspan="2"> الهوية</th> -->
           <th rowspan="2">  رقم الجوال  </th>
           <th rowspan="2">  المديرية </th>
           <!-- <th rowspan="2"> {{typeOfplace}}  </th> -->
           <th rowspan="2">الجنسية  </th>
           <th rowspan="2"> الاسم </th>
                 </tr>
       </thead>
       <tbody>
         <div v-for="key in formdata2" :key="key.id" style="display: contents;" class="my-2  ">
          <br>
         <tr >
            
           <th >{{moment( key.end ).format("YYYY-MM-DD HH:mm")}}</th>
           <th >{{ moment( key.start ).format("YYYY-MM-DD HH:mm")}}</th>
           <th >  {{key.number}} </th>
        <!--   <th >  <img :src="key.pic_document" alt="" class="wii"> </th> -->
           <th >{{key.phone}}</th>
           <th >{{key.directorates_name}}</th>
           <!-- <th v-if="typeOfplace=='فندق'">{{key.hotel_name}}</th>
           <th v-else-if="typeOfplace=='صالة'">{{key.hall_name}}</th>
           <th v-else-if="typeOfplace=='مسبح'">{{key.pool_name}}</th>
           <th v-else></th> -->
           <th >{{key.nationality == '1' ? 'يمني':'غير يمني'}}</th>
              <th >{{key.name}}</th>
              <th >النزيل </th>
            </tr>
            <tr v-for="keyy in key.companions" :key="keyy.id">
              <th style="background: #7e7e7e;"></th>
           <th style="background: #7e7e7e;"></th>
           <th >  {{keyy.number}} </th>
           <th style="background: #7e7e7e;"></th>
           <th style="background: #7e7e7e;"></th>
           <th >{{key.hotel_name}}</th>
           <th >{{keyy.nationality == '1' ? 'يمني':'غير يمني'}}</th>
              <th >{{keyy.name}}</th>
              <th >المرافق </th>
            </tr>
            <br>
        </div>
        
         
       </tbody>
     </table>
  
        
     
        
             <br/>
             
            <div style="display: flex;justify-content: space-between;">
          
             <div style="text-align: center;margin-left: 3rem;display: flex;
         align-items: center;">
                 <img src="../../assets/logoo2.png" alt="" style="width:3rem">
               </div>
         <div style="text-align: right; padding-right: 1rem;">
           
          <span> 774220772 - 715991480 
: واتساب -</span>
            <br/>
     <span> info@alatiqa.com : ايميل -</span>
             <br/>
     
     <span> رقم الطوارىء 199 -</span>
        </div>
     
         </div> 
            
     </div>
    </div>
     </template>
     
     <script setup>
     import { ref,onMounted } from 'vue'
     import geturl from '../../composables/geturl'
     import { useRoute } from 'vue-router';
     import moment from 'moment'
     import { useUserStore } from '@/stores/user'
     import looading from '@/components/looading.vue'
  
     
   const user = useUserStore()
  
     const formdata2 = ref(null)
     const formdata3 = ref(null)
     const typeOfplace = ref('')
    const hall =localStorage.getItem('hall')
    const pool =localStorage.getItem('pool')

    const route = useRoute()
     const date = new Date()
     const days =['الاحد',"الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعه","السبت"]
     const day = days[date.getDay()]
     const dd = String(date.getDate()).padStart(2, '0')
     const mm = String(date.getMonth()+1).padStart(2, '0')
     const yyyy = date.getFullYear()
     const Simple_date = mm + '/' + dd + '/' + yyyy
    
    const load = ref(true)
     onMounted(()=>{
      // get guest
      if(route.query.type=='hotel'){
        typeOfplace.value = 'فندق'
             fetch(geturl()+"guest/print/?create_at="+route.query.createAt+"&hotel="+route.params.id, {
             
              headers: {"Content-Type": "application/json",
        "authorization": "Token "+user.token
  },           })
             .then(res => res.json())
             .then(data => {formdata2.value = data
              load.value = false
             })

           fetch(geturl()+"hotels/hotel/"+user.hotel, {
             
             headers: {"Content-Type": "application/json",
       "authorization": "Token "+user.token
 },           })
            .then(res => res.json())
            .then(data => {formdata3.value = data
            
            })
          
          }
          else if(route.query.type=='hall'){
            typeOfplace.value = 'صالة'

            fetch(geturl()+"guest/print/?create_at="+route.query.createAt+"&number_hall="+route.params.id, {
             
             headers: {"Content-Type": "application/json",
       "authorization": "Token "+user.token
 },           })
            .then(res => res.json())
            .then(data => {formdata2.value = data
             load.value = false
            })
            fetch(geturl()+"hotels/hall/"+hall, {
             
             headers: {"Content-Type": "application/json",
       "authorization": "Token "+user.token
 },           })
            .then(res => res.json())
            .then(data => {formdata3.value = data
            })
          }
          else if(route.query.type=='pool'){
            typeOfplace.value = 'مسبح'

            fetch(geturl()+"guest/print/?create_at="+route.query.createAt+"&number_pool="+route.params.id, {
             
             headers: {"Content-Type": "application/json",
       "authorization": "Token "+user.token
 },           })
            .then(res => res.json())
            .then(data => {formdata2.value = data
             load.value = false
            })
            fetch(geturl()+"hotels/pool/"+pool, {
             
             headers: {"Content-Type": "application/json",
       "authorization": "Token "+user.token
 },           })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              formdata3.value = data
            })
          }
     
     
     })
    
     
     </script>
     
     <style scoped>
     th{
      border: 1px solid;
     }
                 .print_back{
             position: absolute;
         z-index: 0;
         top: 50%;
         opacity: 0.1;
         left: 50%;
         transform: translate(-50%, -50%);
           }
          /* .wii{
            width: 9rem;
           }*/
          
           
     </style>