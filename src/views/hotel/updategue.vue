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
  <input type="text" maxlength="13" class="form-control" list="lis" id="exampleFormControlInput1" placeholder="ادخل رقم النزيل" v-model="formdata.phone">
  
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
<div class="flex">
  <div class="mb-3 input-in-con half">
      <div v-if="this.err">
  <div v-if="this.err.start"  class="alert alert-danger" role="alert"> {{ this.err.start[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">تاريخ الدخول</label>
  <input type="datetime-local" class="form-control half ltr" id="exampleFormControlInput1" placeholder=" ادخل رقم الجوال " v-model="formdata.start">
</div>
  <div class="mb-3 input-in-con half">
      <div v-if="this.err">
  <div v-if="this.err.end"  class="alert alert-danger" role="alert"> {{ this.err.end[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">تاريخ الخروج</label>
  <input type="datetime-local" class="form-control half ltr" id="exampleFormControlInput1" placeholder="ادخل رقم الجوال " v-model="formdata.end">
</div>
</div>
<div class="flex">
  
  <div class="mb-3 input-in-con half">
     <div v-if="this.err">
  <div v-if="this.err.directorates"  class="alert alert-danger" role="alert"> {{ this.err.directorates[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">المديرية </label>
  <input type="text"  class="form-control half" list="lis"  id="exampleFormControlInput1" placeholder="ادخل المديرية  " v-model="temdirectorates">
 <datalist id="lis" v-for="keyy in formdata4" :key="keyy.id">
    
      <option >{{keyy.name}}</option>
  </datalist>
</div>


</div>




<div class="flex last">
  <button  class="btn btn-primary">اضافة</button>
</div>
      </form>

  </div>

  

</template>

<script>
import geturl from '../../composables/geturl'
import moment from 'moment'
import { useUserStore } from '@/stores/user'


export default {
name: 'updategue',
props: ['idd'],
data(){
  return{
    
    formdata:{
      name: "",
    phone: "",
    family: "",
    document: "",
    gender: "",
    nationality: "",
    reservation: '',
    number: '',
    start: '',
    end: '',
    hotel: '',
    directorates: '',
    },
    temdirectorates: '',

     formdata2:[],
     formdata3:[],
     temformdata3:[],
     formdata4:[],
     temformdata4:[],
     work:false,
          err:null,
          user : useUserStore()


    
  }
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


          this.temformdata4 = this.formdata4.filter((e) => {
        return e.name === this.temdirectorates
      })
                if(this.temformdata4.length>0)
                this.formdata.directorates =  this.temformdata4[0].id  
                else
                 this.formdata.directorates = this.temdirectorates == '' ? '' :'lorem ipsum'

          
            if(this.formdata.end == '')
            this.formdata.end = null
    fetch(geturl()+"guest/guest/"+this.idd+'/', {
         method: "PUT",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},       body: JSON.stringify(this.formdata)
      })
      .then(res => res.json())
      .then(data => { if(data.error){
      this.err = data.error.details
      }
      else
            this.$router.push({name:'GuestView' })
      }) 
    },
    
},
mounted() {
  
        
    
       fetch(geturl()+"guest/guest/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},       })
      .then(res => res.json())
      .then(data => {this.formdata2 = data
           
             this.formdata2 = this.formdata2.filter((e) => {
        return e.id == this.idd
      })
            this.formdata.hotel = this.user.hotel
            this.formdata.name = this.formdata2[0].name
            this.formdata.phone = this.formdata2[0].phone
            this.formdata.family = this.formdata2[0].family
            this.formdata.document = this.formdata2[0].document
            this.formdata.pic_document = this.formdata2[0].pic_document
            this.formdata.gender = this.formdata2[0].gender
            this.formdata.nationality = this.formdata2[0].nationality
            this.formdata.reservation = this.formdata2[0].reservation
            this.formdata.number = this.formdata2[0].number
            this.formdata.start = this.formdata2[0].start
          this.formdata.start=  moment( this.formdata.start ).format("YYYY-MM-DDTHH:mm")
            this.formdata.end = this.formdata2[0].end
            this.formdata.end=  moment( this.formdata.end ).format("YYYY-MM-DDTHH:mm")
            this.temdirectorates = this.formdata2[0].directorates_name
                     

           
      })

     

       fetch(geturl()+"places/directorates/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},       })
      .then(res => res.json())
      .then(data => {this.formdata4 = data
      })
    },
}
</script>

<style>

</style>