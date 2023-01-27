<template>

<looading v-if="load"/>

  <div v-else class="container" style="direction:rtl">

      <h3 class="heading" style="display:initial;margin-left:2rem">المديريات</h3>
       <form style="display:initial;">
 <router-link to="/AddMid"> <button type="button" class="btn btn-primary">اضافة</button> </router-link>
      </form>


<div class="container menu">
<div class="table-responsive">
<table class="table">
  <thead>
    <tr>
      <th scope="col"> الترتيب</th>
      <th scope="col"> المحافظة</th>
      <th scope="col"> اسم المديرية  </th>
     
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="keey in formdata2" :key="keey.id">
      
      <th scope="row" >{{keey.id}}</th>
      <td>{{keey.governorate_name}}</td>
    
      <td>       {{keey.name}} </td>
     
    
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
import looading from '@/components/looading.vue'

export default {
name:'MidView',
components:{looading},
data(){
  return{
    formdata:[],
     formdata2:[],
     load: true,
     user : useUserStore()

    
  }
},
mounted() {
  
 
   
    
       fetch(geturl()+"places/directorates/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},      })
      .then(res => res.json())
      .then(data => {this.formdata2 = data
        this.load = false
      })
    }
}
</script>

<style>

</style>