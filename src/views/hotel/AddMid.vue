<template>


  <div class="container">
      <h3 class="heading">المديرية</h3>

      <form @submit.prevent="postinfo">
        <div class="mb-3 input-in-con">
           <div v-if="this.err">
  <div v-if="this.err.governorate"  class="alert alert-danger" role="alert"> {{ this.err.governorate[0]}}</div>
</div>
              <label for="exampleFormControlInput1" class="form-label">المحافظة</label>
  <input type="text" @keyup="getinfo" class="form-control" list="lis" id="exampleFormControlInput1" placeholder="ادخل اسم المحافظة " v-model="temgovernorate">
  <datalist  id="lis">
      <option v-if="work" v-for="keyy in formdata2" >{{keyy.name}}</option>
  </datalist>
</div>
  <div class="mb-3 input-in-con">
     <div v-if="this.err">
  <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">الاسم</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم المديرية " v-model="formdata.name">
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
  <button class="btn btn-primary">اضافة</button>
</div>
      </form>

  </div>

  

</template>

<script>
import geturl from '../../composables/geturl'
import { useUserStore } from '@/stores/user'

export default {
name: "AddMid",
data(){
  return{
    formdata:{
      governorate: '',
      name: '',
      status: '',
    },
      temgovernorate: '',
     formdata2:[],
     work: false,
     err:null,
     user : useUserStore()

    
  }
},
methods: {
    postinfo(){
    this.formdata2 = this.formdata2.filter((e) => {
        return e.name === this.temgovernorate
      })
      if(this.formdata2.length>0)
       this.formdata.governorate =  this.formdata2[0].id 
        else
        this.formdata.governorate = this.temgovernorate == '' ? '' :'lorem ipsum'
      
    fetch(geturl()+"places/directorates/", {
         method: "POST",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      body: JSON.stringify(this.formdata)
      })
      .then(res => res.json())
      .then(data => {if(data.error)
      this.err = data.error.details
      else
            this.$router.push({name:'MidView' })
      }) 
    },
    getinfo(){
    
       fetch(geturl()+"places/governorate/", {
      
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