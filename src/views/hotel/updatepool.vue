<template>
  
    <div class="container">
        <h3 class="heading">المسابح</h3>
  
        <form @submit.prevent="postinfo">
            <div class="mb-3 input-in-con">
              <div v-if="this.err">
    <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
  </div>
    <label for="exampleFormControlInput1" class="form-label">اسم المسبح</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم المسبح " v-model="formdata.name">
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
  </div>
  </div>
  
  <div class="container">
  
  <div class="flex">
    
    <div class="mb-3 input-in-con  ">
           <div v-if="this.err">
  <div v-if="this.err.Installation"  class="alert alert-danger" role="alert"> {{ this.err.Installation[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">المنشأة</label>
 <select class="form-select " aria-label="Default select example" v-model="formdata.Installation" >
  <option disabled selected>اختر المنشاة</option>
  <option  v-for="keey in formdata2" :value="keey.id" :key="keey.id">{{keey.name}}</option>
</select>
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
  name: 'updatepool', 
  props: ['idd'],
  components:{looading},
  data(){
    return{
      formdata:{
        name: "",
        status:'',
        accounts:'',
        Installation:'',
      },
       formdata2:[],
       formdata3:[],
       formdata4:[],
        err:null,
        load: false,
        user : useUserStore()
    }
  
  },
  mounted(){
    console.log(this.idd)
  fetch(geturl()+"account/accounts/", {
      
      headers: {"Content-Type": "application/json",
    "authorization": "Token "+this.user.token
},      })
    .then(res => res.json())
    .then(data => {this.formdata3 = data
    })

  fetch(geturl()+"hotels/installation/", {
      
      headers: {"Content-Type": "application/json",
    "authorization": "Token "+this.user.token
},      })
    .then(res => res.json())
    .then(data => {this.formdata2 = data
    })

    fetch(geturl()+"hotels/pool/"+this.idd+'/', {
         
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
 },      })
       .then(res => res.json())
       .then(data => {this.formdata4 = data
        console.log(data)
         this.load = false
         this.formdata.name = this.formdata4.name
       this.formdata.Installation = this.formdata4.Installation
       this.formdata.accounts = this.formdata4.accounts
       this.formdata.status = this.formdata4.status
       })
       
},
  methods: {
    
      postinfo(){
        this.load = true
       console.log(this.formdata)
          fetch(geturl()+"hotels/pool/"+this.idd+'/', {
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
             this.$router.push({name:'PoolView' })
            }
        }) 
      },
  }
  }
  </script>
  
  <style>
  
  </style>