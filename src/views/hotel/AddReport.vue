<template>
  


  <div class="container">
      <h3 class="heading">اضافة بلاغ</h3>

      <form @submit.prevent="postinfo">
          <div class="mb-3 input-in-con">
              <div v-if="this.err">
  <div v-if="this.err.name"  class="alert alert-danger" role="alert"> {{ this.err.name[0]}}</div>
</div>
  <label for="exampleFormControlInput1" class="form-label">اسم البلاغ</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ادخل اسم البلاغ " v-model="formdata.name">
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
name: 'AddReport',
components:{looading},
props:['id'],
data(){
  return{
    formdata:{
      name: "",
    report: '',
    guest: '',
    hotel: '',
    pool: '',
    hall: '',
    },
    temguest: '',
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
        return e.name === this.temguest
      })
      if(this.formdata2.length>0)
       this.formdata.guest =  this.formdata2[0].id 
        else
        this.formdata.guest = this.temguest == '' ? '' :'lorem ipsum'

      if(this.user.hotel!='undefined')
        this.formdata.hotel = this.user.hotel
      else if(this.user.pool!='undefined')
    this.formdata.pool = this.user.pool
      else if(this.user.hall!='undefined')
    this.formdata.hall = this.user.hall

    console.log(this.formdata)
    fetch(geturl()+"guest/report/", {
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
      /*else
            this.$router.push({name:'GuestView' })*/
      })
    },

      getinfo(){
        if(this.user.pool!='undefined'){
          fetch(geturl()+"guest/guest/?create_at=&number_pool="+this.id, {
         
         headers: {"Content-Type": "application/json",
       "authorization": "Token "+this.user.token
 },
       })
       .then(res => res.json())
       .then(data => {
         console.log(data)
         this.formdata2 = data
       })
        }
       else if(this.user.hotel!='undefined'){
          fetch(geturl()+"guest/guest/?create_at=&hotel="+this.user.hotel+"&name=", {
         
           headers: {"Content-Type": "application/json",
         "authorization": "Token "+this.user.token
   },
         })
         .then(res => res.json())
         .then(data => {
           console.log(data)
           this.formdata2 = data
         })
        }
        
        else if(this.user.hall!='undefined'){
          fetch(geturl()+"guest/guest/?create_at=&number_hall="+this.id, {
         
         headers: {"Content-Type": "application/json",
       "authorization": "Token "+this.user.token
 },
       })
       .then(res => res.json())
       .then(data => {
         console.log(data)
         this.formdata2 = data
       })
        }
    },

     
   
    
}
}
</script>

<style>
.rtl{
    direction: rtl;
}
</style>