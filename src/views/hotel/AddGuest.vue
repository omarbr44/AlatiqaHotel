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
  <input type="text" @keyup="getinfo2" class="form-control half" list="lis"  id="exampleFormControlInput1" placeholder="ادخل المديرية  " v-model="temdirectorates">
 <datalist id="lis" v-for="keyy in formdata3" :key="keyy.id">
    
      <option >{{keyy.name}}</option>
  </datalist>
</div>
</div>

</div>




 <div v-for=" keey,index in listt" :key="keey.inc" >
    <h3 class="heading" >{{ index+1 }} المرافق </h3>
     <div class="mb-3 input-in-con">
               <div v-if="this.errList">
  <div v-if="this.errList[index].name"  class="alert alert-danger" role="alert"> {{ this.errList[index].name[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">الاسم</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم المرافق " v-model="keey.name" >
</div>
        

  <div class="mb-3 input-in-con">
       <div v-if="this.errList">
  <div v-if="this.errList[index].document"  class="alert alert-danger" role="alert"> {{ this.errList[index].document[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">الوثيقة</label>
 <select class="form-select " aria-label="Default select example" v-model="keey.document">
  <option disabled  selected>اختر الوثيقة</option>
  <option value="1">جواز سفر </option>
  <option value="2">بطاقة شخصية</option>
  <option value="3">اخرى</option>
</select>
</div>

<div class="mb-3 input-in-con ">
  <div v-if="this.errList">
  <div v-if="this.errList[index].pic_document"  class="alert alert-danger" role="alert"> {{ this.errList[index].pic_document[0]}}</div>
</div>
    <label for="exampleFormControlInput1" class="form-label">صورة الوثيقة </label>
    <input type="file" class="form-control " id="exampleFormControlInput1" placeholder="ادخل رقم الهاتف " ref="file2" @change="immg2()">
  </div>

  <div class="mb-3 input-in-con">
        <div v-if="this.errList">
  <div v-if="this.errList[index].gender"  class="alert alert-danger" role="alert"> {{ this.errList[index].gender[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">الجنس</label>
 <select class="form-select " aria-label="Default select example" v-model="keey.gender">
  <option disabled  selected>اختر الجنس</option>
  <option value="1">ذكر</option>
  <option value="2">انثى</option>
</select>
</div>

  <div class="mb-3 input-in-con">
         <div v-if="this.errList">
  <div v-if="this.errList[index].nationality"  class="alert alert-danger" role="alert"> {{ this.errList[index].nationality[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">الجنسية</label>
 <select class="form-select " aria-label="Default select example" v-model="keey.nationality">
  <option disabled  selected>اختر الجنسية</option>
  <option value="1">يمني</option>
  <option value="2">غير يمني</option>
</select>
</div>

  <div class="mb-3 input-in-con ">
        <div v-if="this.errList">
  <div v-if="this.errList[index].number"  class="alert alert-danger" role="alert"> {{ this.errList[index].number[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label"> رقم الوثيقة </label>
  <input type="text" class="form-control " id="exampleFormControlInput1" placeholder=" ادخل رقم الوثيقة " v-model="keey.number">
</div>

 

 
 


</div>


<div v-if="ShowButton" class="flex last">
  <p @click="shoecom" class="btn btn-primary">اضافة مرافق</p>
</div>


<div class="flex last">
  <button ref="AddButton" class="btn btn-primary">
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
import moment from 'moment'
import looading from '@/components/looading.vue'

export default {
name: 'AddGuest', 
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
    reservation: '',
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
    companionss: {
      name: "",
      document: "",
    gender: "",
    nationality: "",
    number: '',
    pic_document: '',
    guest: ''
    },
    errcompanionss: {
      name: "",
      document: "",
    gender: "",
    nationality: "",
    number: '',
    pic_document: '',
    guest: ''
    },
    
    temdirectorates: '',
     formdata2:[],
     formdata3:[],
      err:null,
      errList: [],
      listt:[],
      inc : 0,
      ShowButton : false,
      load: false,
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
   immg2(ee){
  var reader2 = new window.FileReader();
  reader2.readAsDataURL(this.$refs.file2[0].files[0]);
  reader2.onload = ()=>{
    var dataUrl = reader2.result;
           this.listt[this.inc-1].pic_document = dataUrl
  } 
 },

  
  shoecom(){
        if(this.inc>0){
          fetch(geturl()+"guest/companion/", {
         method: "POST",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      body: JSON.stringify(this.listt[this.inc-1])
      })
      .then(res => res.json())
      .then(data => {
        if(data.error){
          
           this.errList[this.inc-1] = data.error.details
         }else{
          this.listt.push(this.companionss)
          this.listt[this.inc] = 
          { name: "",
          document: "",
          gender: "",
        nationality: "",
       number: '',
       pic_document: '',
        guest: this.listt[0].guest}

        this.errList.push({name: ""})
        this.errList[this.inc-1] = 
          { name: ""}
        
          this.errList[this.inc] = 
          { name: ""}
        
          this.inc = ++this.inc
         }
                
      })
        }else{
    this.listt.push(this.companionss)
    this.errList.push(this.errcompanionss)
    this.inc = ++this.inc
  }

  },
    postinfo(){
      this.load = true

      let dat = new Date()
     this.formdata.start = moment(  dat.toISOString(dat.toLocaleString()) ).format("YYYY-MM-DDTHH:mm")

      this.formdata3 = this.formdata3.filter((e) => {
        return e.name === this.temdirectorates
      })
       if(this.formdata3.length>0)
       this.formdata.directorates =  this.formdata3[0].id 
        else
        this.formdata.directorates = this.temdirectorates == '' ? '' :'lorem ipsum'
     
      if(this.formdata.end == '')
            this.formdata.end = null
            this.formdata.hotel = this.user.hotel
    fetch(geturl()+"guest/guest/", {
         method: "POST",
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
      this.$refs.AddButton.setAttribute('disabled',true)
        this.ShowButton = true;
        this.err = null
        this.companionss.guest= data.id
       
           // this.$router.push({name:'GuestView' })
          }
      }) 
    },

    
     getinfo2(){
       fetch(geturl()+"places/directorates/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      })
      .then(res => res.json())
      .then(data => {this.formdata3 = data
      })
    }
    
}
}
</script>

<style>

</style>