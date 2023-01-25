<template>

<div class="blur" v-if="delete_act">
 
</div>

<div class="mesa-con" v-if="delete_act">

 <div class="squa" v-if="user.is_staff">
    <h3 class="h3-t">تنبيه</h3>
    <p>هل انت متأكد من حذف هذا الحقل</p>
    <div class="flex ff"><button @click="Mdelete" class=" bb dele">حذف</button>
    <button class="bb canc" @click="cancal">الغاء</button>
    </div>
  </div>
</div>

  <div class="container" style="direction:rtl">

      <h3 class="heading" style="display:initial;margin-left:2rem">فندق</h3>
      <form style="display:initial;" v-if="user.is_staff">
 <router-link to="/AddHotel"> <button type="button" class="btn btn-primary">اضافة</button> </router-link>
      </form>
<div class="container menu">
<div class="table-responsive">
<table class="table">
  <thead>
    <tr>
      <th scope="col"> الترتيب</th>
      <th scope="col">اسم الفندق</th>
      <th scope="col"> مكان الفندق</th>
      <th scope="col">اسم المالك</th>
      <th scope="col" class="hidee"> رقم الهاتف</th>
      <th scope="col" class="hidee"> رقم الجوال </th>
      <th scope="col" class="hidee"> عدد الطوابق</th>
      <th scope="col" class="hidee"> عدد الغرف</th>
      <th scope="col" class="hidee">  عدد الاجنحة </th>
      <th scope="col">  </th>
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="keey in formdata2" :key="keey.id" class="reed" :class="{green: keey.status ==1,orangee: keey.status ==2}">
      
      <th  >{{keey.id}}</th>
      <td>       {{keey.name}} </td>
      <td>{{keey.residential_name}}</td>
      <td>{{keey.owner}}</td>
      <td class="hidee">{{keey.number_hotel}} </td>
      <td class="hidee">  {{keey.number_phone}} </td>
      <td class="hidee">  {{keey.Floors}} </td>
      <td class="hidee">  {{keey.rooms}}  </td>
      <td class="hidee">   {{keey.Wings}}  </td>
         <div v-if="user.is_staff" class="right">
        <form @submit.prevent="deelete(keey.id)">
          <button  class="icon-button red"> <img src="../../assets/x.png" alt="" class="icon-small">
</button>
        </form>
         <router-link :to="{ name: 'updateehot', params: { idd: keey.id}}"> <button   class="icon-button orange" > 
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
name:'HotelView',
data(){
  return{
     formdata1:[],
     formdata2:[],
     work:false,
     id_del: 0,
     delete_act : false,
     delete_go : false,
    user : useUserStore()
  }
},
mounted() {
       fetch(geturl()+"hotels/hotel/"+this.user.hotel, {
      
      headers: {
        "Content-Type": "application/json",
        "authorization": "Token "+this.user.token
      },
      })
      .then(res => res.json())
      .then(data => {
        if(!this.user.is_staff){
        this.formdata1 = data
        this.formdata2.push(this.formdata1)}
        else
        this.formdata2 = data
           
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
    fetch(geturl()+"hotels/hotel/"+this.id_del+'/', {
         method: "DELETE",
      headers: {"Content-Type": "application/json"},
      }).then(res => {
        if(res.ok){
         this.$router.go()
        }
      })      }
      
    }
}
</script>

<style>
nav{
  display: none!important;
}
.menu{
  text-align: center;
  margin-right: 0
}
.row-data{
    margin-top: 1rem;
    padding: 0.5rem 0;
}

.input-in-conn {
  position: relative;
}

.input-in-conn > img {
  position: absolute;
  top: 10px;
  right: -10px;
  max-width: 25px;
}
.col{
    padding: 0;
    margin: 0 0.2rem;
}
.right{
  display: flex;
  justify-content: center
}
.icon-small{
  width: 1rem;
}
.icon-button{
  border: none;
  border-radius: 4px;
    margin: 0 0.25rem ;
    display: flex;
    padding: 0.3rem;
}

.red{
  background: #b30000
}
.orange{
  background: #e59604;
}
.dropp{
  color: black!important
}
tbody tr{
  background: white;
box-shadow: -2px -3px 5px #888888;}

.green{
  border-bottom: 3px solid green !important;
}
.reed{
  border-bottom: 3px solid red;
}
.orangee{
    border-bottom: 3px solid orange;

}
.blur{
  background: aliceblue;
    width: 100%;
    height: 118%;
    opacity: 0.8;
    position: absolute;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mesa-con{
  width: 100%;
    position: absolute;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.squa{
  background: white;
    padding: 2rem 4rem;
    border-radius: 1.5rem;
    box-shadow: 1px 1px 10px 2px #888888;
}
.h3-t{
  text-align: center;
    font-weight: bold;
}
.ff{
  justify-content: space-around;
    margin-top: 2rem;
}
.bb{
  border: none;
    font-size: 1.4em;
    padding: 0 0.6rem;
    border-radius: 5px;
   
}
.dele{
 background: #c70e0e;
     color: white;
}
.canc{
 background: white;
     color: black;
     border: 1px solid black
}
 @media (max-width: 991.98px) {
  nav{
    display: inline!important

  }
  .nav-right{
    display: none
  }
  .hidee{
    display: none
  }
}
</style>