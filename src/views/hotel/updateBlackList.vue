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
  <button  class="btn btn-primary">اضافة</button>
</div>
      </form>

  </div>


</template>


<script>
import geturl from '../../composables/geturl'
import { useUserStore } from '@/stores/user'

export default {
name: 'updateBlackList',
props: ['idd'],
data(){
    return{
 formdata:{
        name: "",
    document: '',
    gender: '',
    number: ''
    },
    formdata2 : [],
     err:null,
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

     fetch(geturl()+"guest/blacklist/"+this.idd+'/', {
         method: "PUT",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},      body: JSON.stringify(this.formdata)
      })
      .then(res => res.json())
      .then(data => {if(data.error){
      this.err = data.error.details
      }
      else
            this.$router.push({name:'BlackListView' })
      }) 
},
},
mounted(){

    fetch(geturl()+"guest/blacklist/", {
      
      headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},      })
      .then(res => res.json())
      .then(data => {this.formdata2 = data
             this.formdata2 = this.formdata2.filter((e) => {
        return e.id == this.idd
      })
            this.formdata.name = this.formdata2[0].name
            this.formdata.pic_document = this.formdata2[0].pic_document
            this.formdata.document = this.formdata2[0].document
            this.formdata.gender = this.formdata2[0].gender
            this.formdata.number = this.formdata2[0].number
          
           
      })
}
}
</script>

<style>

</style>