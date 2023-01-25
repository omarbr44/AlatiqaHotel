<template>
  
 




  <div class="container" style="direction:rtl">

      <h3 class="heading" style="display:initial;margin-left:2rem">القائمة السوداء</h3>
      <form style="display:initial;">
 <router-link to="/AddBlackList"> <button type="button" class="btn btn-primary">اضافة</button> </router-link>
      </form>
<div class="container menu">
<div class="table-responsive">
<table class="table">
  <thead>
    <tr>
      <th scope="col"> الترتيب</th>
      <th scope="col"> الاسم</th>
      <th scope="col">الوثيقة </th>
      <th scope="col"> رقم الوثيقة</th>
      <th scope="col"> </th>
     
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="keey in formdata2" :key="keey.id">
      
      <th scope="row" >{{keey.id}}</th>
      <td>       {{keey.name}} </td>
      <td>{{keey.document}} </td>
      <td>{{keey.number}} </td>
 
  <div class="right">
      
         <router-link :to="{ name: 'updateBlackList', params: { idd: keey.id}}"> <button   class="icon-button orange" > 
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
name:'BlackListView',
data(){
    return{
        formdata2 : [],
        user : useUserStore()

    }
},
methods(){

},
mounted(){

     fetch(geturl()+"guest/blacklist/", {
      
      headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      })
      .then(res => res.json())
      .then(data => {this.formdata2 = data
           
      })
},
}

</script>

<style>

</style>