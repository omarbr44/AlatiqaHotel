<template>


  <div class="container">
      <h3 class="heading">المحافظة</h3>

      <form @submit.prevent="postinfo">
        <div class="mb-3 input-in-con">
           <div v-if="this.err">
  <div v-if="this.err.country"  class="alert alert-danger" role="alert"> {{ this.err.country[0]}}</div>
</div>
              <label for="exampleFormControlInput1" class="form-label">البلد</label>
  <input type="text" @keyup="getinfo" class="form-control" list="lis" id="exampleFormControlInput1" placeholder="اختر البلد" v-model="temcountry">
  <datalist id="lis" v-for="keyy in formdata2" :key="keyy.id">
    
      <option value="g">{{keyy.name}}</option>
  </datalist>
</div>
  <div class="mb-3 input-in-con">
    <div v-if="this.err">
  <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">اسم المحافظة</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم المحافظة " v-model="formdata.name">
</div>
<div class="flex">
  
  
  <div class="mb-3 input-in-con half ">
  <label for="exampleFormControlInput1" class="form-label">الحالة</label>
   <div v-if="this.err">
  <div v-if="this.err.status"  class="alert alert-danger" role="alert"> {{ this.err.status[0]}}</div>
</div>
 <select class="form-select half" aria-label="Default select example" v-model="formdata.status">
  <option disabled  selected>اختر الحالة</option>
 <option value="1">قيد الانشاء</option>
  <option value="2">تم الانشاء</option>
  <option value="3">تم التوقيف</option>
</select>
</div>
<div class="mb-3 input-in-con half">    
  <label for="exampleFormControlInput1" class="form-label">رقم المحافظة</label>
  <div v-if="this.err">
  <div v-if="this.err.code"  class="alert alert-danger" role="alert"> {{ this.err.code[0]}}</div>
</div>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder="ادخل رقم المحافظة" v-model="formdata.code">
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
name: "AddGov",
components:{looading},
 data(){
  return{
    formdata:{
      country: '',
      name: '',
      status: '',
      code: '',
    },
      temcountry: '',
     formdata2:[],
          err:null,
          load: false,
          user : useUserStore()


    
  }
},
methods: {
    postinfo(){
      this.load = true

    this.formdata2 = this.formdata2.filter((e) => {
        return e.name === this.temcountry
      })
       if(this.formdata2.length>0)
       this.formdata.country =  this.formdata2[0].id 
       else
      this.formdata.country = this.temcountry == '' ? '' :'lorem ipsum'
      
    fetch(geturl()+"places/governorate/", {
         method: "POST",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      body: JSON.stringify(this.formdata)
      })
      .then(res => res.json())
      .then(data =>{ 
        this.load = false

              if(data.error)
      this.err = data.error.details
      else
            this.$router.push({name:'GovView' })
      })
    },
    getinfo(){
       fetch(geturl()+"places/country/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      })
      .then(res => res.json())
      .then(data => {this.formdata2 = data
      })
    }
}
}

</script>

<style>

</style>