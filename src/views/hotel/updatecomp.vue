<template>
  


    <div class="container">
        <h3 class="heading">المرافقين</h3>
  
        <form @submit.prevent="postinfo">
            <div class="mb-3 input-in-con">
              <div v-if="this.err">
    <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
  </div>
    <label for="exampleFormControlInput1" class="form-label">اسم المرافق</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم المرافق " v-model="formdata.name">
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
  
 
  
  
  
  
  <div class="flex last">
    <button  class="btn btn-primary">اضافة</button>
  </div>
        </form>
  
    </div>
  
    
  
  </template>
  
  <script>
  import geturl from '../../composables/geturl'
  import { useUserStore } from '@/stores/user'

  
  export default {
  name: 'updatecomp',
  props: ['idd'],
  data(){
    return{
      
      formdata:{
        name: "",
      document: "",
    gender: "",
    nationality: "",
    number: '',
    pic_document: '',
    guest: ''      
              },
    formdata2:null,
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
  
             
      fetch(geturl()+"guest/companion/"+this.idd+'/', {
           method: "PUT",
           headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
}, 
        body: JSON.stringify(this.formdata)
        })
        .then(res => res.json())
        .then(data => { if(data.error){
        this.err = data.error.details
    }
        else
              this.$router.push({
                name:'CompanionView', 
                params: {idd:  this.formdata.guest}
              })
        }) 
      },
      
  },
  mounted() {
    
          
      
         fetch(geturl()+"guest/companion/"+this.idd+'/', {
        
        headers: {"Content-Type": "application/json"},
        })
        .then(res => res.json())
        .then(data => {this.formdata2 = data
             
              this.formdata.name = this.formdata2.name
              this.formdata.document = this.formdata2.document
              this.formdata.pic_document = this.formdata2.pic_document
              this.formdata.gender = this.formdata2.gender
              this.formdata.nationality = this.formdata2.nationality
              this.formdata.number = this.formdata2.number
              this.formdata.guest = this.formdata2.guest
        })

      },
  }
  </script>
  
  <style>
  
  </style>