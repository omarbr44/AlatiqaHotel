
<template>
 


  <div class="container">
      <h3 class="heading">فندق</h3>

      <form @submit.prevent="postinfo">
          <div class="mb-3 input-in-con">
             <div v-if="this.err">
  <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">اسم الفندق</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم الفندق " v-model="formdata.name">
</div>
        <div class="mb-3 input-in-con">
             <div v-if="this.err">
  <div v-if="this.err.residential"  class="alert alert-danger" role="alert"> {{ this.err.residential[0]}}</div>
</div>
              <label for="exampleFormControlInput1" class="form-label">مكان الفندق</label>
  <input type="text" @keyup="getinfo" class="form-control" list="lis" id="exampleFormControlInput1" placeholder="اختر مكان الفندق" v-model="temresidential">
  <datalist id="lis">
      <option  v-for="keyy in formdata2" >{{keyy.name}}</option>
  </datalist>
</div>
  <div class="mb-3 input-in-con">
    <div v-if="this.err">
  <div v-if="this.err.owner"  class="alert alert-danger" role="alert"> {{ this.err.owner[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">اسم مالك الفندق</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم مالك الفندق " v-model="formdata.owner">
</div>
<div class="flex">
  <div class="mb-3 input-in-con half">
      <div v-if="this.err">
  <div v-if="this.err.number_hotel2"  class="alert alert-danger" role="alert"> {{ this.err.number_hotel2[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">2 رقم الهاتف</label>
  <input type="text" maxlength="13" class="form-control half ltr"  id="exampleFormControlInput1" placeholder=" ادخل رقم الهاتف " v-model="formdata.number_hotel2">
</div>
  <div class="mb-3 input-in-con half">
      <div v-if="this.err">
  <div v-if="this.err.number_hotel"  class="alert alert-danger" role="alert"> {{ this.err.number_hotel[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">رقم الهاتف</label>
  <input type="text"  maxlength="13" class="form-control half ltr" id="exampleFormControlInput1" placeholder="ادخل رقم الهاتف " v-model="formdata.number_hotel">
</div>
</div>
<div class="flex">
  <div class="mb-3 input-in-con half">
      <div v-if="this.err">
  <div v-if="this.err.number_phone_1"  class="alert alert-danger" role="alert"> {{ this.err.number_phone_1[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">2 رقم الجوال</label>
  <input type="text" class="form-control half ltr"  maxlength="13" id="exampleFormControlInput1" placeholder=" ادخل رقم الجوال " v-model="formdata.number_phone_1">
</div>
  <div class="mb-3 input-in-con half">
    <div v-if="this.err">
  <div v-if="this.err.number_phone"  class="alert alert-danger" role="alert"> {{ this.err.number_phone[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">رقم الجوال</label>
  <input type="text" class="form-control half ltr"  maxlength="13" id="exampleFormControlInput1" placeholder="ادخل رقم الجوال " v-model="formdata.number_phone">
</div>
</div>
<div class="flex">
  <div class="mb-3 input-in-con half">
    <div v-if="this.err">
  <div v-if="this.err.Floors"  class="alert alert-danger" role="alert"> {{ this.err.Floors[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">عدد الطوابق</label>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder=" ادخل عدد الطوابق " v-model="formdata.Floors">
</div>
  <div class="mb-3 input-in-con half">
     <div v-if="this.err">
  <div v-if="this.err.rooms"  class="alert alert-danger" role="alert"> {{ this.err.rooms[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">عدد الغرف</label>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder="ادخل عدد الغرف " v-model="formdata.rooms">
</div>
</div>
<div class="flex">
  <div class="mb-3 input-in-con half">
    <div v-if="this.err">
  <div v-if="this.err.Wings"  class="alert alert-danger" role="alert"> {{ this.err.Wings[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">عدد الاجنحة</label>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder=" ادخل عدد الاجنحة " v-model="formdata.Wings">
</div>
  <div class="mb-3 input-in-con half">
    <div v-if="this.err">
  <div v-if="this.err.apartment"  class="alert alert-danger" role="alert"> {{ this.err.apartment[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">عدد الشقق</label>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder="ادخل عدد الشقق " v-model="formdata.apartment">
</div>
</div>
<div class="mb-3 input-in-con  ">
           <div v-if="this.err">
  <div v-if="this.err.accounts"  class="alert alert-danger" role="alert"> {{ this.err.accounts[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">الحساب</label>
 <select class="form-select " aria-label="Default select example" v-model="formdata.accounts" >
  <option disabled selected>اختر الحساب</option>
  <option  v-for="keey in formdata3" :value="keey.id" :key="keey.id">{{keey.username}}</option>
</select>
</div>
<div class="flex last">
  <div class="mb-3 input-in-con half last-50">
        <div v-if="this.err">
  <div v-if="this.err.status"  class="alert alert-danger" role="alert"> {{ this.err.status[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">الحالة</label>
 <select class="form-select half" aria-label="Default select example" v-model="formdata.status">
  <option disabled  selected>اختر الحالة</option>
  <option value="1">قيد الانشاء</option>
  <option value="2">تم الانشاء</option>
  <option value="3">تم التوقيف</option>
</select>
</div>
</div>
<div class="flex last">
  <button  class="btn btn-primary">  
    <looading v-if="load"/>
    <span v-else>اضافة</span>
  </button>
</div>
      </form>

  </div>



  

 

</template>

<script>

import geturl from '../../composables/geturl'
import { useUserStore } from '@/stores/user'
import looading from '@/components/looading.vue'

export default {
name: "AddHotel",
components:{looading},
data(){
  return{
    formdata:{
      name: "",
    owner: "",
    number_hotel: "+967",
    number_hotel2: "+967",
    number_phone: "+967",
    number_phone_1: "+967",
    Floors: '',
    rooms: '',
    Wings: '',
    apartment: '',
    status: '',
    residential: '',
    accounts: '',
    },
    temresidential: '',
     formdata2:[],
     formdata3:[],
           err:null,
           load: false,
           user : useUserStore()

    
  }
},
mounted(){
  fetch(geturl()+"account/accounts/", {
      
      headers: {"Content-Type": "application/json",
    "authorization": "Token "+this.user.token
},      })
    .then(res => res.json())
    .then(data => {this.formdata3 = data
    })
},
methods: {
  
    postinfo(){
      this.load = true

    this.formdata2 = this.formdata2.filter((e) => {
        return e.name === this.temresidential
      })
          if(this.formdata2.length>0)
       this.formdata.residential =  this.formdata2[0].id 
        else
        this.formdata.residential = this.temresidential == '' ? '' :'lorem ipsum'
      
    fetch(geturl()+"hotels/hotel/", {
         method: "POST",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      body: JSON.stringify(this.formdata)
      })
      .then(res => res.json())
      .then(data => {
        this.load = false
         if(data.error)
      this.err = data.error.details
      else
            this.$router.push({name:'HotelView' })
      }) 
    },
    getinfo(){
    
       fetch(geturl()+"places/residential/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},      })
      .then(res => res.json())
      .then(data => {this.formdata2 = data
      })
    }
}
}
</script>

<style>
.container{
    margin: 2rem
}
.input-in-con{
   display: flex;
    justify-content: flex-end;
  flex-wrap: wrap;
}
input,select{
    direction: rtl;
}
.input-in-con label{
  width: 100%;
    text-align: end;
}
.heading{
    text-align: end;
    margin-bottom: 2rem
}
.flex{
    display: flex
}
.half{
    width: 95%;
}
.last{
    justify-content: end
}
.last-50{
    width: 50%
}
.input-in-con {
  position: relative;
}

.input-in-con > p {
  position: absolute;
  top: 40px;
  right: 10px;
  max-width: 25px;
}
/* .input-in-con > input,.input-in-con > textarea {
padding: 0.5rem 2.6rem  
}*/

.nav-right{
  height: 100vh;
    background: #3d3a7d !important;
    color: white !important;
    padding: 0.5rem;
}
.logo,.search{
    text-align: center;
    justify-content: center;
    margin-top: 1rem;
}
.search{
    margin: 1.3rem 0;
    outline: none;
    border-radius: 11px;
    border: none;
}
.pills{
    color: white;
}
.pill{
    display: flex;
    justify-content: space-between;
}
a.btn{
    width: 100%;
    direction: rtl;
}
a.btn,ul.dropdown-menu{
    background: none;
    border: none;
}
.dropdown-item{
    color: white
}
div.dropdown{
    width: 100%
}
.ltr{
  direction: ltr
}
.white{
  color: white !important
}
.text-right{
  text-align: right;
}

a{
  text-decoration: none;
}
.font-s{
  font-size: 1.2rem;
  border: none
}
.mb-1{
  margin-bottom: 1rem!important;
    border: 1px solid #9f9c9c;
    border-right: 0;
    border-left: 0;
    padding: 0.25rem;
    border-top: 0;
}
.p-0{
  padding: 0rem !important;
}
.li-nav{
  border-bottom: 1px solid #9f9c9c;
    padding-right: 2rem;
    padding-bottom: 0.5rem;
        padding-top: 0.5rem;
}
.border0{
  border: 0
}
.fleex{
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.arrow{
  margin: 0;
    padding-left: 1rem;
}
.icon{
  width: 1.8rem;
  margin-left: 0.50rem
}
.heading{
  font-weight: bold;
    font-size: 2rem;
}

</style>
