<template>
  
    <div class="container">
        <h3 class="heading">المنشأة</h3>
  
        <form @submit.prevent="postinfo">
            <div class="mb-3 input-in-con">
              <div v-if="this.err">
    <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
  </div>
    <label for="exampleFormControlInput1" class="form-label">اسم المنشأة</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم المنشأة " v-model="formdata.name">
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
    <label for="exampleFormControlInput1" class="form-label">الملف للمنشأة </label>
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
    <!-- <input type="text" @keyup="getinfo2" class="form-control half" list="lis"  id="exampleFormControlInput1" placeholder="ادخل مكان الاقامة  " v-model="temresidential">
   <datalist id="lis" v-for="keyy in formdata3" :key="keyy.id">
        <option >{{keyy.name}}</option>
    </datalist> -->
  </div>
    <div class="mb-3 input-in-con half">
       <div v-if="this.err">
    <div v-if="this.err.owner"  class="alert alert-danger" role="alert"> {{ this.err.owner[0]}}</div>
  </div>
    <label for="exampleFormControlInput1" class="form-label">مالك المنشأة </label>
    <select class="form-select half" aria-label="Default select example" v-model="formdata.owner">
  <option v-for="keyy in formdata2" :key="keyy.id" :value="keyy.id">{{ keyy.name }} </option>
    </select>
   <!--  <input type="text" @keyup="getinfo3" class="form-control half" list="lis"  id="exampleFormControlInput1" placeholder="ادخل مالك المنشاة  " v-model="temowner">
   <datalist id="lis" v-for="keyy in formdata2" :key="keyy.id">
      
        <option >{{keyy.name}}</option>
    </datalist> -->
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
  name: 'updateInstallation', 
  props: ['idd'], 
  components:{looading},
  data(){
    return{
      formdata:{
        name: "",
        docm: "",
        status:'',
        residential: '',
        owner: '',
      },
      temresidential: '',
      temowner: '',
       formdata2:[],
       formdata3:[],
       formdata4:[],
        err:null,
        load: false,
        user : useUserStore()
    }
  
  },
  mounted(){
  
  fetch(geturl()+"hotels/installation/"+this.idd+'/', {
      
      headers: {"Content-Type": "application/json",
    "authorization": "Token "+this.user.token
},      })
    .then(res => res.json())
    .then(data => {this.formdata4 = data
        this.formdata.name = this.formdata4.name
        this.formdata.status = this.formdata4.status
        this.formdata.residential = this.formdata4.residential
        this.formdata.owner = this.formdata4.owner
        this.formdata.docm = this.formdata4.docm
    })
    fetch(geturl()+"places/residential/", {
        
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      })
      .then(res => res.json())
      .then(data => {this.formdata3 = data
      })
      fetch(geturl()+"hotels/owner/", {
        
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      })
      .then(res => res.json())
      .then(data => {this.formdata2 = data

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

      fetch(geturl()+"hotels/installation/"+this.idd+'/', {
        
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
             this.$router.push({name:'InstallationView' })
            }
        }) 
      },
  
      
       /* getinfo2(){
         fetch(geturl()+"places/residential/", {
        
          headers: {"Content-Type": "application/json",
        "authorization": "Token "+this.user.token
  },
        })
        .then(res => res.json())
        .then(data => {this.formdata3 = data
        })
      }, */
       /* getinfo3(){
         fetch(geturl()+"hotels/owner/", {
        
          headers: {"Content-Type": "application/json",
        "authorization": "Token "+this.user.token
  },
        })
        .then(res => res.json())
        .then(data => {this.formdata2 = data

        })
      } */
      
  }
  }
  </script>
  
  <style>
  
  </style>