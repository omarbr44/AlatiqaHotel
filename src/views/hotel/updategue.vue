<template>
  
  <div class="container">
      <h3 class="heading">النزلاء</h3>

      <form @submit.prevent="postinfo">
          <div class="mb-3 input-in-con">
            <div v-if="this.err">
  <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">اسم النزيل</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم النزيل " v-model="formdata.name">
</div>
        <div class="mb-3 input-in-con">
           <div v-if="this.err">
  <div v-if="this.err.phone"  class="alert alert-danger" role="alert"> {{ this.err.phone[0]}}</div>
</div>
              <label for="exampleFormControlInput1" class="form-label">رقم النزيل</label>
  <input type="text" maxlength="13"   class="form-control ltr" list="lis" id="exampleFormControlInput1" placeholder="ادخل رقم النزيل" v-model="formdata.phone">
  
</div>
<div class="form-check">
  
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="formdata.family">
  <label class="form-check-label" for="flexCheckDefault">
اسرة  </label>
</div>
  <div class="mb-3 input-in-con">
        <div v-if="this.err">
  <div v-if="this.err.document"  class="alert alert-danger" role="alert"> {{ this.err.document[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">الوثيقة</label>
 <select class="form-select half" aria-label="Default select example" v-model="formdata.document">
  <option disabled  selected>اختر الوثيقة</option>
  <option value="1">جواز سفر </option>
  <option value="2">بطاقة شخصية</option>
  <option value="3">اخرى</option>
</select>
</div>
  <div class="mb-3 input-in-con">
    <div v-if="this.err">
  <div v-if="this.err.gender"  class="alert alert-danger" role="alert"> {{ this.err.gender[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">الجنس</label>
 <select class="form-select half" aria-label="Default select example" v-model="formdata.gender">
  <option disabled  selected>اختر الجنس</option>
  <option value="1">ذكر</option>
  <option value="2">انثى</option>
</select>
</div>
  <div class="mb-3 input-in-con">
    <div v-if="this.err">
  <div v-if="this.err.nationality"  class="alert alert-danger" role="alert"> {{ this.err.nationality[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">الجنسية</label>
 <select class="form-select half" aria-label="Default select example" v-model="formdata.nationality">
  <option disabled  selected>اختر الجنسية</option>
  <option value="1">يمني</option>
  <option value="2">غير يمني</option>
</select>
</div>
  <div class="mb-3 input-in-con">
    <div v-if="this.err">
  <div v-if="this.err.purpose"  class="alert alert-danger" role="alert"> {{ this.err.purpose[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">الغرض من الحجز</label>
 <select class="form-select half" aria-label="Default select example" v-model="formdata.purpose">
  <option disabled  selected>اختر الغرض من الحجز</option>
  <option value="1">نشاط اجتماعي</option>
  <option value="2">الراحة</option>
  <option value="3">فعاليات</option>
  <option value="4">مؤتمر</option>
</select>
</div>
  <div class="mb-3 input-in-con" v-if="user.is_woner"> <!-- do v-if -->
    <div v-if="this.err">
  <div v-if="this.err.reservation"  class="alert alert-danger" role="alert"> {{ this.err.reservation[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">الحجز</label>
 <select class="form-select half" aria-label="Default select example" v-model="formdata.reservation">
  <option disabled  selected>اختر الحجز</option>
  <option value="1">غرفة</option>
  <option value="2">جناح</option>
  <option value="3">شقة</option>
</select>
</div>
<div class="mb-3 input-in-con" v-if="is_pool"> <!-- do v-if -->
    <div v-if="this.err">
  <div v-if="this.err.number_pool"  class="alert alert-danger" role="alert"> {{ this.err.number_pool[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">المسبح</label>
 <select class="form-select half" aria-label="Default select example" v-model="formdata.number_pool">
  <option disabled  selected>اختر المسبح</option>
  <option  v-for="keey in formdata4" :value="keey.id" :key="keey.id">{{keey.name}}</option>
</select>
</div>
<div class="mb-3 input-in-con" v-if="is_hall"> <!-- do v-if -->
    <div v-if="this.err">
  <div v-if="this.err.number_hall"  class="alert alert-danger" role="alert"> {{ this.err.number_hall[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">الصالة</label>
 <select class="form-select half" aria-label="Default select example" v-model="formdata.number_hall">
  <option disabled  selected>اختر الصالة</option>
  <option  v-for="keey in formdata5" :value="keey.id" :key="keey.id">{{keey.name}}</option>

</select>
</div>
<div class="container">
<div class="flex">
  <div class="mb-3 input-in-con half">
      
   <div v-if="this.err">
  <div v-if="this.err.number"  class="alert alert-danger" role="alert"> {{ this.err.number[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label"> رقم الوثيقة </label>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder=" ادخل رقم الهاتف " v-model="formdata.number">
</div>

  <div class="mb-3 input-in-con half">
    <div v-if="this.err">
  <div v-if="this.err.pic_document"  class="alert alert-danger" role="alert"> {{ this.err.pic_document[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">صورة الوثيقة </label>
  <input type="file" class="form-control half" id="exampleFormControlInput1" placeholder="ادخل رقم الهاتف " ref="file" @change="immg()">
</div>
</div>
</div>

  <div class="mb-3 input-in-con ">
       <div v-if="this.err">
  <div v-if="this.err.end"  class="alert alert-danger" role="alert"> {{ this.err.end[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">تاريخ الخروج</label>
  <input type="datetime-local" class="form-control  ltr" id="exampleFormControlInput1" placeholder="ادخل رقم الجوال " v-model="formdata.end">
</div>
<div class="container">

<div class="flex">
  
  <div class="mb-3 input-in-con half">
     <div v-if="this.err">
  <div v-if="this.err.directorates"  class="alert alert-danger" role="alert"> {{ this.err.directorates[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">المديرية </label>
  <select class="form-select half" aria-label="Default select example" v-model="formdata.directorates">
  <option v-for="keyy in formdata3" :key="keyy.id" :value="keyy.id">{{ keyy.name }} </option>
   </select>

</div>
</div>

</div>

<div class="flex last">
  <button ref="AddButton" class="btn btn-primary">
    <looading v-if="load"/>
    <span v-else>تعديل</span>
  </button>
</div>
      </form>

  </div>
</template>

<script>
import geturl from '../../composables/geturl'
import { useUserStore } from '@/stores/user'
import moment from 'moment'
import looading from '@/components/looading.vue'

export default {
name: 'updategue', 
props: ['idd'], 
components:{looading},
data(){
  return{
    formdata:{
      name: "",
    phone: "+967",
    family: false,
    document: "",
    gender: "",
    nationality: "",
    reservation: null,
    number: '',
    start: '',
    end: '',
    hotel: '',
    directorates: '',
    pic_document: '',
    purpose: '',
    number_pool: '',
    number_hall: '',
    },
       formdata2:[],
     formdata3:[],
     formdata4:[],
     formdata5:[],
     formdata6:[],
      err:null,
      errList: [],
      listt:[],
      inc : 0,
      ShowButton : false,
      load: false,
      user : useUserStore(),
      is_hall: JSON.parse( localStorage.getItem('is_hall') ),
      is_pool: JSON.parse( localStorage.getItem('is_pool') ),
      pool: localStorage.getItem('pool'),
      hall: localStorage.getItem('hall'),
     
  }

},
mounted(){
  fetch(geturl()+"places/directorates/", {
      
      headers: {"Content-Type": "application/json",
    "authorization": "Token "+this.user.token
},
    })
    .then(res => res.json())
    .then(data => {this.formdata3 = data
    })
  
  if(this.is_hall){
  fetch(geturl()+"hotels/number_hall/?hall="+this.hall, {
      
      headers: {"Content-Type": "application/json",
    "authorization": "Token "+this.user.token
},      })
    .then(res => res.json())
    .then(data => {this.formdata5 = data
    })
  }

  if(this.is_pool){
  fetch(geturl()+"hotels/number_pool/?pool="+this.pool, {
      
      headers: {"Content-Type": "application/json",
    "authorization": "Token "+this.user.token
},      })
    .then(res => res.json())
    .then(data => {this.formdata4 = data
    })
  }
  fetch(geturl()+"guest/guest/"+this.idd+'/', {
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      })
      .then(res => res.json())
      .then(data => {
            this.formdata6 = data

            this.formdata.name = this.formdata6.name
            this.formdata.directorates = this.formdata6.directorates
            this.formdata.document = this.formdata6.document
            this.formdata.end = this.formdata6.document
            this.formdata.phone = this.formdata6.phone
            this.formdata.family = this.formdata6.family
            this.formdata.pic_document = this.formdata6.pic_document
            this.formdata.gender = this.formdata6.gender
            this.formdata.nationality = this.formdata6.nationality
            this.formdata.reservation = this.formdata6.reservation
            this.formdata.number = this.formdata6.number
            this.formdata.start = this.formdata6.start
            this.formdata.purpose = this.formdata6.purpose
            this.formdata.number_hall = this.formdata6.number_hall
            this.formdata.number_pool = this.formdata6.number_pool
          this.formdata.start=  moment( this.formdata.start ).format("YYYY-MM-DDTHH:mm")
            this.formdata.end=  moment( this.formdata.end ).format("YYYY-MM-DDTHH:mm")

      }) 
},
methods: {
  
   immg(){
    
  var reader = new window.FileReader();
  reader.readAsDataURL(this.$refs.file.files[0]);
  reader.onload = ()=>{
    var dataUrl = reader.result;
           this.formdata.pic_document = dataUrl

  }
},


    postinfo(){
      this.load = true

      let dat = new Date()
     this.formdata.start = moment(  dat.toISOString(dat.toLocaleString()) ).format("YYYY-MM-DDTHH:mm")

      if(this.formdata.end == '')
            this.formdata.end = null
            if(this.user.is_woner)
            this.formdata.hotel = this.user.hotel
    fetch(geturl()+"guest/guest/"+this.idd+'/', {
         method: "PUT",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      body: JSON.stringify(this.formdata)
      })
      .then(res => res.json())
      .then(data => {
        this.load = false
         if(data.error){
           this.err = data.error.details
         }
      else {
           this.$router.push({name:'GuestView' })
          }
      }) 
      
    },
  }
}
</script>

<style>

</style>