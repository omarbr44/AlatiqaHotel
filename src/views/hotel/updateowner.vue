<template>
  
    <div class="container">
        <h3 class="heading">المالك</h3>
  
        <form @submit.prevent="postinfo">
            <div class="mb-3 input-in-con">
              <div v-if="this.err">
    <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
  </div>
    <label for="exampleFormControlInput1" class="form-label">اسم المالك</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم المالك " v-model="formdata.name">
  </div>
          <div class="mb-3 input-in-con">
             <div v-if="this.err">
    <div v-if="this.err.phone"  class="alert alert-danger" role="alert"> {{ this.err.phone[0]}}</div>
  </div>
                <label for="exampleFormControlInput1" class="form-label">رقم المالك</label>
    <input type="text" maxlength="13"   class="form-control ltr" list="lis" id="exampleFormControlInput1" placeholder="ادخل رقم المالك" v-model="formdata.phone">
    
  </div>
  

  <div class="container">
  <div class="flex">
    <div class="mb-3 input-in-con half ">
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
    <div class="mb-3 input-in-con half">
      <div v-if="this.err">
    <div v-if="this.err.docm"  class="alert alert-danger" role="alert"> {{ this.err.docm[0]}}</div>
  </div>
    <label for="exampleFormControlInput1" class="form-label">صورة السجل التجاري </label>
    <input type="file" class="form-control half" id="exampleFormControlInput1" placeholder="ادخل رقم الهاتف " ref="file" @change="immg()">
  </div>
  </div>
  </div>
  
  <div class="container">
  
  <div class="flex">
    
    <div class="mb-3 input-in-con half">
       <div v-if="this.err">
    <div v-if="this.err.residential"  class="alert alert-danger" role="alert"> {{ this.err.residential[0]}}</div>
  </div>
    <label for="exampleFormControlInput1" class="form-label">مكان الاقامة </label>
    <select class="form-select half" aria-label="Default select example" v-model="formdata.residential">
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
  import looading from '@/components/looading.vue'
  
  export default {
  name: 'updateowner', 
  props: ['idd'], 
  components:{looading},
  data(){
    return{
      formdata:{
        name: "",
      phone: "+967",
      docm: "",
      residential: '',
      status:''
      },
       formdata3:[],
       formdata2:[],
        err:null,
        load: false,
        user : useUserStore()
    }
  
  },
  mounted(){
  
  fetch(geturl()+"hotels/owner/"+this.idd+'/', {
      
      headers: {"Content-Type": "application/json",
    "authorization": "Token "+this.user.token
},      })
    .then(res => res.json())
    .then(data => {this.formdata2 = data
        this.formdata.name = this.formdata2.name
        this.formdata.status = this.formdata2.status
        this.formdata.residential = this.formdata2.residential
        this.formdata.phone = this.formdata2.phone
        this.formdata.docm = this.formdata2.docm
    })
    fetch(geturl()+"places/residential/", {
        
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      })
      .then(res => res.json())
      .then(data => {this.formdata3 = data
      })
},
  methods: {
    
     immg(){
      
    var reader = new window.FileReader();
    reader.readAsDataURL(this.$refs.file.files[0]);
    reader.onload = ()=>{
      var dataUrl = reader.result;
             this.formdata.docm = dataUrl

    }
  },
  
      postinfo(){
        this.load = true

      fetch(geturl()+"hotels/owner/"+this.idd+'/', {
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
             this.$router.push({name:'OwnerView' })
            }
        }) 
      },
      
  }
  }
  </script>
  
  <style>
  
  </style>