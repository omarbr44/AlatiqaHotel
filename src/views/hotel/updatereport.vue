<template>
  


  <div class="container">
      <h3 class="heading">اضافة بلاغ</h3>

      <form @submit.prevent="postinfo">
          <div class="mb-3 input-in-con">
              <div v-if="this.err">
  <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">اسم البلاغ</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم المرافق " v-model="formdata.name">
</div>

     <div class="mb-3 input-in-con">
         <div v-if="this.err">
  <div v-if="this.err.report"  class="alert alert-danger" role="alert"> {{ this.err.report[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">البلاغ</label>
  <textarea type="text" class="form-control rtl" rows="5" id="exampleFormControlInput1" placeholder="اكتب البلاغ" v-model="formdata.report"></textarea>
</div>


 

  <div class="mb-3 input-in-con ">
        <div v-if="this.err">
  <div v-if="this.err.guest"  class="alert alert-danger" role="alert"> {{ this.err.guest[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label"> النزيل</label>
  <input type="text" @keyup="getinfo" class="form-control " id="exampleFormControlInput1" list="lis" placeholder=" ادخل اسم النزيل " v-model="temguest">
 <datalist id="lis" v-for="keyy in formdata2" :key="keyy.id">
    
      <option value="">{{keyy.name}}</option>
  </datalist>
</div>

 <div class="mb-3 input-in-con ">
       <div v-if="this.err">
  <div v-if="this.err.hotel"  class="alert alert-danger" role="alert"> {{ this.err.hotel[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label"> الفندق</label>
  <input type="text" @keyup="getinfo2" class="form-control " id="exampleFormControlInput1" list="lis" placeholder=" ادخل اسم الفندق " v-model="temhotel">
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
name: 'updatereport',
props: ['idd'],
data(){
  return{
    formdata:{
        name: "",
    report: '',
    guest: '',
    hotel: ''
    },
    temguest: '',
    temhotel: '',
     formdata2:[],
     formdata3:[],
     temformdata3:[],
     formdata4:[],
     temformdata4:[],
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


 this.temformdata4 = this.formdata4.filter((e) => {
        return e.name === this.temhotel
      })
       if(this.temformdata4.length>0)
       this.formdata.hotel =  this.temformdata4[0].id 
       else
       this.formdata.hotel = this.temhotel == '' ? '' :'lorem ipsum'

            
    fetch(geturl()+"guest/report/"+this.idd+'/', {
         method: "PUT",
         headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},       body: JSON.stringify(this.formdata)
      })
      .then(res => res.json())
      .then(data => {if(data.error)
      this.err = data.error.details
      else
            this.$router.push({name:'ReportView' })
      }) 
    },
    
},
mounted() {
  
 
    
       fetch(geturl()+"guest/report/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},       })
      .then(res => res.json())
      .then(data => {this.formdata2 = data
           
             this.formdata2 = this.formdata2.filter((e) => {
        return e.id == this.idd
      })
            this.formdata.name = this.formdata2[0].name
            this.formdata.report = this.formdata2[0].report
            this.temguest = this.formdata2[0].guest_name
            this.temhotel = this.formdata2[0].hotel_name
           
      })

      fetch(geturl()+"guest/guest/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},       })
      .then(res => res.json())
      .then(data => {this.formdata3 = data
      })

       fetch(geturl()+"hotels/hotel/", {
      
        headers: {"Content-Type": "application/json",
      "authorization": "Token "+this.user.token
},       })
      .then(res => res.json())
      .then(data => {this.formdata4 = data
      })
    },
}
</script>

<style>

</style>