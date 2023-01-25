<template>
  


  <div class="container">
      <h3 class="heading">اضافة مرافق</h3>

      <form @submit.prevent="postinfo">
          <div class="mb-3 input-in-con">
               <div v-if="this.err">
  <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">الاسم</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم المرافق " v-model="formdata.name" @keydown="">
</div>
        

  <div class="mb-3 input-in-con">
       <div v-if="this.err">
  <div v-if="this.err.document"  class="alert alert-danger" role="alert"> {{ this.err.document[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">الوثيقة</label>
 <select class="form-select " aria-label="Default select example" v-model="formdata.document">
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
 <select class="form-select " aria-label="Default select example" v-model="formdata.gender">
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
 <select class="form-select " aria-label="Default select example" v-model="formdata.nationality">
  <option disabled  selected>اختر الجنسية</option>
  <option value="1">يمني</option>
  <option value="2">غير يمني</option>
</select>
</div>

  <div class="mb-3 input-in-con ">
        <div v-if="this.err">
  <div v-if="this.err.number"  class="alert alert-danger" role="alert"> {{ this.err.number[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label"> رقم الوثيقة </label>
  <input type="text" class="form-control " id="exampleFormControlInput1" placeholder=" ادخل رقم الوثيقة " v-model="formdata.number">
</div>

 

 
 

<p @click="pp">kjjgyb</p>


      </form>

  </div>

  

</template>

<script>
import geturl from '../../composables/geturl'
import { useUserStore } from '@/stores/user'

export default {
name: 'AddCompanion',
data(){
  return{
    formdata:{
      name: "",
    document: "",
    gender: "",
    nationality: "",
    number: '',
    
    },
     formdata2:[],
     temguest: '',
     work:false,
     err:null,
     user : useUserStore()

  }
},
methods: {
  pp(){
    this.$emit('name',this.formdata);

  },
    postinfo(){
          
 this.formdata2 = this.formdata2.filter((e) => {
        return e.name === this.temguest
      })
                
                if(this.formdata2.length>0)
                this.formdata.guest =  this.formdata2[0].id     
                else
                this.formdata.guest = this.temguest == '' ? '' :'lorem ipsum'

    
    
    fetch(geturl()+"guest/companion/", {
         method: "POST",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      body: JSON.stringify(this.formdata)
      })
      .then(res => res.json())
      .then(data => {
         if(data.error)
           this.err = data.error.details
      else
            this.$router.push({name:'CompanionView' })
      }) 
    },

      getinfo(){
       fetch(geturl()+"guest/guest/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      })
      .then(res => res.json())
      .then(data => {this.formdata2 = data
      })
    },
   
    
}
}
</script>

<style>

</style>