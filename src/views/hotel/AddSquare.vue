<template>


  <div class="container">
      <h3 class="heading">المربع السكني</h3>

      <form @submit.prevent="postinfo">
        <div class="mb-3 input-in-con">
                <div v-if="this.err">
  <div v-if="this.err.city"  class="alert alert-danger" role="alert"> {{ this.err.city[0]}}</div>
</div>
              <label for="exampleFormControlInput1" class="form-label">المدينة</label>
  <input type="text" @keyup="getinfo" class="form-control" list="lis" id="exampleFormControlInput1" placeholder="ادخل اسم المدينة" v-model="temcity">
  <datalist id="lis">
      <option v-if="work" v-for="keyy in formdata2" >{{keyy.name}}</option>
  </datalist>
</div>
  <div class="mb-3 input-in-con">
     <div v-if="this.err">
  <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">الاسم</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل الاسم " v-model="formdata.name">
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
name: "AddSquare",
components:{looading},
data(){
  return{
    formdata:{
      city: '',
      name: '',
      status: '',
    },
      temcity: '',
     formdata2:[],
     load: false,
     err:null,
     user : useUserStore()

    
  }
},
methods: {
    postinfo(){
      this.load = true

    this.formdata2 = this.formdata2.filter((e) => {
        return e.name === this.temcity
      })
            if(this.formdata2.length>0)
       this.formdata.city =  this.formdata2[0].id 
        else
        this.formdata.city = this.temcity == '' ? '' :'lorem ipsum'
     
      
    fetch(geturl()+"places/residential/", {
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
            this.$router.push({name:'SquareView' })
      }) 
    },
    getinfo(){
    
       fetch(geturl()+"places/city/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      })
      .then(res => res.json())
      .then(data => {this.formdata2 = data
           
      this.work = true
      })
    }
}
}
</script>

<style>

</style>