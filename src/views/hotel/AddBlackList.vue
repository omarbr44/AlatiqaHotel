<template>
  
 <div class="container">
      <h3 class="heading">القائمة السوداء</h3>

      <form @submit.prevent="postinfo">
          
         <div class="mb-3 input-in-con">
            <div v-if="this.err">
  <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">اسم المطلوب</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم المطلوب " v-model="formdata.name">
</div>

 <div class="mb-3 input-in-con">
        <div v-if="this.err">
  <div v-if="this.err.document"  class="alert alert-danger" role="alert"> {{ this.err.document[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">الوثيقة</label>
 <select class="form-select half" aria-label="Default select example" v-model="formdata.document">
  <option disabled  selected>اختر الوثيقة</option>
  <option value="1">جواز سفر </option>
  <option value="2">بطاقة شخصية</option>
</select>
</div>

 <div class="mb-3 input-in-con">
    <div v-if="this.err">
  <div v-if="this.err.gender"  class="alert alert-danger" role="alert"> {{ this.err.gender[0]}}</div>
</div>
 <label for="exampleFormControlInput1" class="form-label">الجنس</label>
 <select class="form-select half" aria-label="Default select example" v-model="formdata.gender">
  <option disabled  selected>اختر الجنس</option>
  <option value="1">ذكر</option>
  <option value="2">انثى</option>
</select>
</div>


 <div class="mb-3 input-in-con ">
      
   <div v-if="this.err">
  <div v-if="this.err.number"  class="alert alert-danger" role="alert"> {{ this.err.number[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label"> رقم الوثيقة </label>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder=" ادخل رقم الهاتف " v-model="formdata.number">
</div>

 
 
 
 
<div class="flex">
 

  <div class="mb-3 input-in-con half">
    
    <div v-if="this.err">
  <div v-if="this.err.pic_document"  class="alert alert-danger" role="alert"> {{ this.err.pic_document[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">صورة الوثيقة </label>
  <input type="file" class="form-control half" id="exampleFormControlInput1" placeholder="ادخل رقم الهاتف " ref="file" @change="immg()">
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
name: 'AddBlackList',
components:{looading},
data(){
    return{
        
    formdata:{
      name: "",
    document: "",
    gender: "",
    number: '',
pic_document: '',
   
    },
    err:null,
    load: false,
    user : useUserStore()

    }
},
methods: {
  immg(){
  var reader = new window.FileReader();
  reader.readAsDataURL(this.$refs.file.files[0]);
  reader.onload = ()=>{
    var dataUrl = reader.result;
           this.formdata.pic_document = dataUrl

  }
},
    postinfo(){
      this.load = true


    fetch(geturl()+"guest/blacklist/", {
         method: "POST",
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
      else
            this.$router.push({name:'BlackListView' })
      }) 
    }, 
}
}
</script>

<style>

</style>