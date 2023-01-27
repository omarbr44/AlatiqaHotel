<template>



  <div class="container">
      <h3 class="heading">المدينة</h3>

      <form @submit.prevent="postinfo">
  <div class="mb-3 input-in-con">
    <div v-if="this.err">
  <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">اسم المدينة</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم المدينة " v-model="formdata.name">
</div>
        <div class="mb-3 input-in-con">
            <div v-if="this.err">
  <div v-if="this.err.directorates"  class="alert alert-danger" role="alert"> {{ this.err.directorates[0]}}</div>
</div>
              <label for="exampleFormControlInput1" class="form-label">اسم المديرية</label>
  <input type="text" @keyup="getinfo" class="form-control" list="lis" id="exampleFormControlInput1" placeholder="ادخل اسم المديرية" v-model="temdirectorates">
  <datalist id="lis">
      <option v-if="work" v-for="keyy in formdata2" >{{keyy.name}}</option>
  </datalist>
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
name: "AddCity",
components:{looading},
data(){
  return{
    formdata:{
      directorates: '',
      name: '',
      status: '',
    },
     formdata2:[],
     temdirectorates :'',
     load: false,
     err:null,
     user : useUserStore()
     
    
  }
},
methods: {
    postinfo(){
      this.load = true

this.formdata2 = this.formdata2.filter((e) => {
      if(e.name === this.temdirectorates)
      return true
      else
      return false
      })
              if(this.formdata2.length>0)
                this.formdata.directorates =  this.formdata2[0].id
              else
               this.formdata.directorates = this.temdirectorates == '' ? '' :'lorem ipsum'

              

     
      
    fetch(geturl()+"places/city/", {
         method: "POST",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      body: JSON.stringify(this.formdata)
      })
      .then(res => res.json())
      .then(data => { 
        if(data.error){
          this.load = false

          this.err = data.error.details
                  }
      else
            this.$router.push({name:'CityView' })

      })
    },
    getinfo(){
    
       fetch(geturl()+"places/directorates/", {
      
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