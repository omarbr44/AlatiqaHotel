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
      <option v-if="work" v-for="keyy in formdata2" >{{keyy.name}}</option>
  </datalist>
</div>

<div class="flex">
  <div class="mb-3 input-in-con half">
       <div v-if="this.err">
  <div v-if="this.err.number_hotel2"  class="alert alert-danger" role="alert"> {{ this.err.number_hotel2[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">2 رقم الهاتف</label>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder=" ادخل رقم الهاتف " v-model="formdata.number_hotel2">
</div>
  <div class="mb-3 input-in-con half">
     <div v-if="this.err">
  <div v-if="this.err.number_hotel"  class="alert alert-danger" role="alert"> {{ this.err.number_hotel[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">رقم الهاتف</label>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder="ادخل رقم الهاتف " v-model="formdata.number_hotel">
</div>
</div>
<div class="flex">
  <div class="mb-3 input-in-con half">
      <div v-if="this.err">
  <div v-if="this.err.number_phone_1"  class="alert alert-danger" role="alert"> {{ this.err.number_phone_1[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">2 رقم الجوال</label>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder=" ادخل رقم الجوال " v-model="formdata.number_phone_1">
</div>
  <div class="mb-3 input-in-con half">
    <div v-if="this.err">
  <div v-if="this.err.number_phone"  class="alert alert-danger" role="alert"> {{ this.err.number_phone[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">رقم الجوال</label>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder="ادخل رقم الجوال " v-model="formdata.number_phone">
</div>
</div>
<div class="flex">
  <div class="mb-3 input-in-con half">
     <div v-if="this.err">
  <div v-if="this.err.Floors"  class="alert alert-danger" role="alert"> {{ this.err.Floors[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">عدد الطوابق</label>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder=" ادخل عدد الطوابق  " v-model="formdata.Floors">
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
  <option  v-for="keey in formdata4" :value="keey.id" :key="keey.id">{{keey.username}}</option>
</select>
</div>
<div class="mb-3 input-in-con  ">
           <div v-if="this.err">
  <div v-if="this.err.Installation"  class="alert alert-danger" role="alert"> {{ this.err.Installation[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">المنشأة</label>
 <select class="form-select " aria-label="Default select example" v-model="formdata.Installation" >
  <option disabled selected>اختر المنشاة</option>
  <option  v-for="keey in formdata5" :value="keey.id" :key="keey.id">{{keey.name}}</option>
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
  <button  class="btn btn-primary">تعديل</button>
</div>
      </form>

  </div>

  

</template>

<script>
import geturl from '../../composables/geturl'
import { useUserStore } from '@/stores/user'

export default {
name:"updateehot",
props: ['idd'],
data() {
    return{

        formdata:{
      name: "",
    owner: "",
    number_hotel: "",
    number_hotel2: "",
    number_phone: "",
    number_phone_1: "",
    Floors: '',
    rooms: '',
    Wings: '',
    apartment: '',
    Installation:'',
    accounts: '',
    status: '',
    residential: ''
    },
    temresidential: '',
     formdata2:[],
     formdata3:[],
     formdata4:[],
     formdata5:[],
     temformdata3:[],
     work:false,
     err:null,
     user : useUserStore()


    }
    },methods: {
    postinfo(){
            
       this.temformdata3 = this.formdata3.filter((e) => {
        return e.name === this.temresidential
      })
                if(this.temformdata3.length>0)
                this.formdata.residential =  this.temformdata3[0].id  
                else
                this.formdata.residential = this.temresidential == '' ? '' :'lorem ipsum'

    fetch(geturl()+"hotels/hotel/"+this.idd+'/', {
         method: "PUT",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},       body: JSON.stringify(this.formdata)
      })
      .then(res => res.json())
      .then(data => {if(data.error)
      this.err = data.error.details
      else
            this.$router.push({name:'HotelView' })
      }) 
    }

    },
    mounted() {
  
      fetch(geturl()+"account/accounts/", {
      
      headers: {"Content-Type": "application/json",
    "authorization": "Token "+this.user.token
},      })
    .then(res => res.json())
    .then(data => {this.formdata4 = data
    })
    fetch(geturl()+"hotels/installation/", {
      
      headers: {"Content-Type": "application/json",
    "authorization": "Token "+this.user.token
},      })
    .then(res => res.json())
    .then(data => {this.formdata5 = data
    })
    
       fetch(geturl()+"hotels/hotel/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},       })
      .then(res => res.json())
      .then(data => {this.formdata2 = data
          
             this.formdata2 = this.formdata2.filter((e) => {
        return e.id == this.idd
      })
            this.formdata.name = this.formdata2[0].name
            this.formdata.owner = this.formdata2[0].owner
            this.formdata.number_hotel = this.formdata2[0].number_hotel
            this.formdata.number_hotel2 = this.formdata2[0].number_hotel2
            this.formdata.number_phone = this.formdata2[0].number_phone
            this.formdata.number_phone_1 = this.formdata2[0].number_phone_1
            this.formdata.Floors = this.formdata2[0].Floors
            this.formdata.rooms = this.formdata2[0].rooms
            this.formdata.Wings = this.formdata2[0].Wings
            this.formdata.apartment = this.formdata2[0].apartment
            this.formdata.status = this.formdata2[0].status
            this.formdata.accounts = this.formdata2[0].accounts
            this.formdata.Installation = this.formdata2[0].Installation
            this.temresidential = this.formdata2[0].residential_name
           
      })

       fetch(geturl()+"places/residential/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},       })
      .then(res => res.json())
      .then(data => {this.formdata3 = data
      })
    },

}
</script>

<style>

</style>