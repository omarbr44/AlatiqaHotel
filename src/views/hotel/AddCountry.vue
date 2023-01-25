<template>



  <div class="container">
      <h3 class="heading">البلد</h3>

      <form @submit.prevent="postinfo">
  <div class="mb-3 input-in-con">
  <label for="exampleFormControlInput1" class="form-label">اسم البلد</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم البلد " v-model="formdata.name">
</div>
<div class="flex">
  
  
  <div class="mb-3 input-in-con half ">
  <label for="exampleFormControlInput1" class="form-label">الحالة</label>
 <select class="form-select half" aria-label="Default select example" v-model="formdata.status">
  <option disabled  selected>اختر الحالة</option>
 <option value="1">قيد الانشاء</option>
  <option value="2">تم الانشاء</option>
  <option value="3">تم التوقيف</option>
</select>
</div>
<div class="mb-3 input-in-con half">    
  <label for="exampleFormControlInput1" class="form-label">مفتاح الدولة</label>
  <input type="text" class="form-control half" id="exampleFormControlInput1" placeholder=" ادخل مفتاح الدولة " v-model="formdata.key_country">
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
name: "AddCountry",
data(){
  return{
    formdata:{
      name: '',
      status: '',
      key_country: '',
    },
    
          user : useUserStore()
  }
},
methods:{
postinfo(){

  fetch(geturl()+"places/country/", {
         method: "POST",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},
      body: JSON.stringify(this.formdata)
      })
      .then(res => res.json())
      .then(data =>{ 
              if(data.error){
                  console.log(data.error)
                this.err = data.error.details
              }
      else
            this.$router.push({name:'GovView' })
      })
}
}
}
</script>

<style>

</style>