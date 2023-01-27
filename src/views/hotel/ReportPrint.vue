<template >
    <img class="print_back" src="../../assets/logo1.jpg" alt="">
  
    <looading v-if="load"/>
  
  <div v-else class="containerr">
      <div v-if="formdata2"  style="font-family: auto;" class="printc">
       <div style="display:flex ;justify-content: space-between;border-bottom: 2px solid black; margin-bottom: 1rem;
       margin-top: 1.5rem;
         padding: 0 1rem;">
             <div style="width: 33.33%;
                             display: flex;">
             </div>
             <div style="text-align: center;
                         width: 33.33%;"><img width="180px" src="../../assets/1211.jpg" alt="">
               </div>
         <div style="text-align: center;
      width: 35%;
      display: flex;
      justify-content: end;"><p style="font-size: 0.9rem;">الجمهورية اليمنية
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
         text-align: end;">
                 <p style="margin: 0;margin-left: 5rem;"> {{Simple_date}} التاريخ</p>
                 <p style="margin: 0;margin-left: 5rem;"> اليوم {{day}} </p>
                 <p style="margin: 0;margin-left: 5rem;"> {{date.getHours()}}:{{date.getMinutes()}} الساعة</p>
             </div>
         
        
             
        </div>
        
     
     
         <table class="table table-striped" style="text-align: center;" >
       <thead>
         <tr>
          
           <th rowspan="2">رقم الهوية</th>
           <th rowspan="2">  رقم الجوال  </th>
           <th rowspan="2">  النزيل </th>
           <th rowspan="2"> الفندق  </th>
           <th rowspan="2"> الشكوى </th>
                 </tr>
       </thead>
       <tbody>
         <div  style="display: contents;" class="my-2">
          <br>
         <tr > 
           <th >  {{formdata3.number}} </th>
           <th >{{formdata3.phone}}</th>
           <th >{{formdata3.name}}</th>
           <th >{{formdata3.hotel_name}}</th>
              <th >{{formdata2.name}}</th>
            </tr>
           
            <br>
        </div>
        
         
       </tbody>
     </table>
     <div>
        <p style="text-align: end;
    padding: 1rem;"> / تفاصيل الشكوى</p>
         <p style="word-break: break-word;text-align:right;margin: 2rem 2rem;"> {{formdata2.report}}   </p>
         <div>

           <img style="text-align: center;width: 11rem;" :src="formdata3.pic_document" alt="">
         </div>
     </div>

             <br/>
             
            <div style="display: flex;justify-content: space-between;">
          
             <div style="width: 33.33%;">
            
               </div>
             <div style="width: 33.33%;;text-align: center;margin-left: 3rem;display: flex;
         align-items: center;">
             <p>الشرطة في خدمة الشعب</p>
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
     import { useUserStore } from '@/stores/user'
     import looading from '@/components/looading.vue'
  
     
   const user = useUserStore()
  
     const formdata2 = ref(null)
     const formdata3 = ref(null)
     
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
             fetch(geturl()+"guest/report/"+route.params.id, {
             
              headers: {"Content-Type": "application/json",
        "authorization": "Token "+user.token
  },           })
             .then(res => res.json())
             .then(data => {
                formdata2.value = data

                fetch(geturl()+"guest/guest/"+formdata2.value.guest, {
             
             headers: {"Content-Type": "application/json",
       "authorization": "Token "+user.token
 },           })
            .then(res => res.json())
            .then(data1 => {
               
               formdata3.value = data1
             load.value = false
            })

             })
          
     
     
     
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
          
           
     </style>