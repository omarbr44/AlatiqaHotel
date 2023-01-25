<template>
  


  <div class="container">
      <h3 class="heading">اضافة مرافق</h3>

      <form @submit.prevent="postinfo">
          <div class="mb-3 input-in-con">
               <div v-if="this.err">
  <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">الاسم</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم المرافق " v-model="formdata.name">
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

 

  <div class="mb-3 input-in-con ">
      <div v-if="this.err">
  <div v-if="this.err.guest"  class="alert alert-danger" role="alert"> {{ this.err.guest[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label"> النزيل</label>
  <input type="text" @keyup="getinfo" class="form-control " id="exampleFormControlInput1" list="lis" placeholder=" ادخل اسم النزيل " v-model="temguest">
 <datalist id="lis" v-for="keyy in formdata3" :key="keyy.id">
    
      <option value="">{{keyy.name}}</option>
  </datalist>
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
name: 'updateCom',
props: ['idd'],
data(){
  return{
    formdata:{
        name: "",
    document: "",
    gender: "",
    nationality: "",
    number: '',
    guest: ''
    },
    temguest: "",
     formdata2:[],
     formdata3:[],
     temformdata3:[],
     work:false,
          err:null,
          user : useUserStore()


    
  }
},
methods: {
    postinfo(){



          this.temformdata3 = this.formdata3.filter((e) => {
        return e.name === this.temguest
      })
                if(this.temformdata3.length>0)
                this.formdata.guest =  this.temformdata3[0].id  
                else
                this.formdata.guest = this.temguest == '' ? '' :'lorem ipsum'



            
    fetch(geturl()+"guest/companion/"+this.idd+'/', {
         method: "PUT",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},      body: JSON.stringify(this.formdata)
      })
      .then(res => res.json())
      .then(data => { if(data.error)
      this.err = data.error.details
      else
            this.$router.push({name:'CompanionView' })
      }) 
    },

    
    
},
mounted() {
  
 
    
       fetch(geturl()+"guest/companion/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},      })
      .then(res => res.json())
      .then(data => {this.formdata2 = data
           
             this.formdata2 = this.formdata2.filter((e) => {
        return e.id == this.idd
      })
            this.formdata.name = this.formdata2[0].name
            this.formdata.document = this.formdata2[0].document
            this.formdata.gender = this.formdata2[0].gender
            this.formdata.nationality = this.formdata2[0].nationality
            this.formdata.number = this.formdata2[0].number
            this.temguest = this.formdata2[0].guest_name
           
      })

      fetch(geturl()+"guest/guest/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},      })
      .then(res => res.json())
      .then(data => {this.formdata3 = data
      })
    },
}
</script>

<style>

</style>