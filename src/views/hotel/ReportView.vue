<template>
  
  <div class="blur" v-if="delete_act">
 
</div>

<div class="mesa-con" v-if="delete_act">

 <div class="squa">
    <h3 class="h3-t">تنبيه</h3>
    <p>هل انت متأكد من حذف هذا الحقل</p>
    <div class="flex ff"><button @click="Mdelete" class=" bb dele">حذف</button>
    <button class="bb canc" @click="cancal">الغاء</button>
    </div>
  </div>
</div>


  <div class="container" style="direction:rtl">

      <h3 class="heading" style="display:initial;margin-left:2rem">البلاغات</h3>
      <form style="display:initial;" v-if="user.is_woner">
 <router-link to="/AddReport"> <button type="button" class="btn btn-primary">اضافة</button> </router-link>
      </form>
<div class="container menu">
<div class="table-responsive">
<table class="table">
  <thead>
    <tr>
      <th scope="col"> الترتيب</th>
      <th scope="col"> الاسم</th>
      <th scope="col">النزيل </th>
      <th scope="col"> البلاغ</th>
      <th scope="col"> </th>
     
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="keey in formdata2" :key="keey.id">
      
      <th scope="row" >{{keey.id}}</th>
      <td>       {{keey.name}} </td>
      <td>{{keey.guest_name}} </td>
      <td>{{keey.report}} </td>
 
  <div class="right">
        <form @submit.prevent="deelete(keey.id)">
          <button  class="icon-button red"> <img src="../../assets/x.png" alt="" class="icon-small">
</button>
        </form>
         <router-link :to="{ name: 'updatereport', params: { idd: keey.id}}"> <button   class="icon-button orange" > 
              <img src="../../assets/edit.png" alt="" class="icon-small">
</button> </router-link>
</div> 
    </tr>
   
  </tbody>
</table>
</div>
  

   
  
 
</div>
</div>


           


   

</template>

<script>
import geturl from '../../composables/geturl'
import { useUserStore } from '@/stores/user'

export default {
name: 'ReportView',
data(){
  return{
    formdata:[],
     formdata2:[],
     work:false,
      id_del: 0,
     delete_act : false,
     delete_go : false,
     user : useUserStore()

  }
},
mounted() {
  
     
    
       fetch(geturl()+"guest/report/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},      })
      .then(res => res.json())
      .then(data => {this.formdata2 = data
           
      })
      
    
      
    },
    methods: {
     deelete(id){
 this.id_del = id
        this.delete_act = true

      },
    
      cancal(){
         this.delete_act = false
      },

       Mdelete(){
    fetch(geturl()+"guest/report/"+this.id_del+'/', {
         method: "DELETE",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},      }).then(res => {
        if(res.ok){
         this.$router.go()
        }
      })      }
      
    }
}
</script>

<style>

</style>