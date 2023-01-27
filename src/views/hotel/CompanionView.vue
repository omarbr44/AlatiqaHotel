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

<looading v-if="load"/>


  <div v-else class="container" style="direction:rtl">

      <h3 class="heading" style="display:initial;margin-left:2rem">المرافقين</h3>
     
<div class="container menu">
<div class="table-responsive">
<table class="table">
  <thead>
    <tr>
      <th scope="col"> الترتيب</th>
      <th scope="col"> الاسم</th>
      <th scope="col"> </th>
     
     
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="keey in formdata2" :key="keey.id">
      
      <th scope="row" >{{keey.id}}</th>
      <td>       {{keey.name}} </td>
      
 
      <div class="right">
        <form @submit.prevent="deelete(keey.id)">
          <button  class="icon-button red"> <img src="../../assets/x.png" alt="" class="icon-small">
          </button>
        </form>
        <router-link :to="{ name: 'updatecomp', params: { idd: keey.id}}"> <button   class="icon-button orange" > 
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
import looading from '@/components/looading.vue'

export default {
name: 'CompanionView',
components:{looading},
props: ['idd'],
data(){
  return{
    formdata:[],
     formdata2:[],
     load: true,
      id_del: 0,
     delete_act : false,
     delete_go : false,
     user : useUserStore()

  }
},
mounted() {
     fetch(geturl()+"guest/companion/?guest="+this.idd, {
      
      headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},      })
      .then(res => res.json())
      .then(data => {this.formdata2 = data     
        this.load = false
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
        
    fetch(geturl()+"guest/companion/"+this.id_del+'/', {
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