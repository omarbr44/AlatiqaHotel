<template>
  
    <div class="container">
        <h3 class="heading">رقم المسبح</h3>
  
        <form @submit.prevent="postinfo">
            <div class="mb-3 input-in-con">
              <div v-if="this.err">
    <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
  </div>
    <label for="exampleFormControlInput1" class="form-label">رقم المسبح</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل رقم المسبح " v-model="formdata.name">
  </div>
  <div class="mb-3 input-in-con  ">
           <div v-if="this.err">
  <div v-if="this.err.pool"  class="alert alert-danger" role="alert"> {{ this.err.pool[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">المسبح</label>
 <select class="form-select " aria-label="Default select example" v-model="formdata.pool" >
  <option disabled selected>اختر المسبح</option>
  <option  v-for="keey in formdata2" :value="keey.id" :key="keey.id">{{keey.name}}</option>
</select>
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
  name: 'updatenumber_pool', 
  props: ['idd'],
  components:{looading},
  data(){
    return{
      formdata:{
        name: "",
        pool:'',
      },
       formdata2:[],
       formdata3:[],
        err:null,
        load: false,
        user : useUserStore()
    }
  
  },
  mounted(){
  fetch(geturl()+"hotels/pool/", {
      
      headers: {"Content-Type": "application/json",
    "authorization": "Token "+this.user.token
},      })
    .then(res => res.json())
    .then(data => {this.formdata2 = data
    })
  fetch(geturl()+"hotels/number_pool/"+this.idd+'/', {
      
      headers: {"Content-Type": "application/json",
    "authorization": "Token "+this.user.token
},      })
    .then(res => res.json())
    .then(data => {this.formdata3 = data

        this.formdata.name = this.formdata3.name
        this.formdata.pool = this.formdata3.pool
    })
},
  methods: {
    
      postinfo(){
        this.load = true
       
          fetch(geturl()+"hotels/number_pool/"+this.idd+'/', {
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