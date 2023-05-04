<template>
 
    <div class="blur" v-if="delete_act">
     
    </div>
    
    <div class="mesa-con" v-if="delete_act">
    
     <div class="squa">
        <h3 class="h3-t">تنبيه</h3>
        <p>هل انت متأكد من حذف هذا الحقل</p>
        <div class="flex ff"><button @click="Mdelete" class=" bb dele">حذف</button>
        <button class="bb canc" @click="cancal">الغاء</button>
        </div>
      </div>
    </div>
    
    <looading v-if="load"/>
    
    
      <div v-else class="container" style="direction:rtl">
    
    
    <div v-if="user.is_woner" class="mb-3 input-in-con ">
      <input type="date" class="form-control half ltr auto " id="exampleFormControlInput1" v-model="DateFilter">
    <button type="button" class="btn btn-primary green_but" @click="filter()"> تاريخ الدخول</button>
    </div>
        
    <div class="mb-3 input-in-con ">
      <select class="form-control half ltr auto " id="exampleFormControlInput1" v-model="PoolFilter" >
        <option disabled >اختر المسبح</option> 
        <option v-for="pool in formdata5" :key="pool.id" :value="pool.id">{{ pool.name }}</option> 
      </select>
    <button  type="button" class="btn btn-primary green_but" @click="filter()">اختيار المسبح</button>
    </div>
    
          <h3 class="heading" style="display:initial;margin-left:2rem">النزلاء</h3>
          <form style="display:initial;">
     <router-link class="mx-2" to="/AddGuest" v-if="!user.is_staff"> <button  class="btn btn-primary">اضافة</button> </router-link>
     
     <router-link v-if="user.is_staff" :to="{ name: 'GuestPrint', params: { id: pool_id} ,query:{createAt:DateFilter,type:'pool'}}"> 
      <button  class="btn btn-primary">طباعة</button>
    </router-link>
    
     <router-link v-if="!user.is_staff && PoolFilter" :to="{ name: 'GuestPrintForOwn', params: { id: PoolFilter} ,query:{createAt:DateFilter,type:'pool'}}"> 
      <button  class="btn btn-primary">طباعة</button>
    </router-link>
    <!-- <router-link v-if="!user.is_staff  && PoolFilter" :to="{ name: 'AddReport',  params: { id: PoolFilter}}"> 
              <button class="btn btn-primary mx-2" > 
              بلاغ
              </button> 
            </router-link> -->
          </form>
    <div class="container menu">
    <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col"> الاسم</th>
          <th scope="col" class="hidee">  الرقم</th>
          <th scope="col" class="hidee">  البطاقة</th>
          <th scope="col">المسبح </th>
          <th scope="col" class="hidee">المديرية </th>
          <th scope="col"> </th>
         
        </tr>
      </thead>
      <tbody>
        
        <tr v-for="keey in formdata2" :key="keey.id" >
          <td>       {{keey.name}} </td>
          <td class="hidee">{{keey.phone}}</td>
          <td class="hidee"><a :href="keey.pic_document" target="_blank">انقر هنا</a></td>
          <td>{{keey.number_pool}} </td>
          <td class="hidee">{{keey.directorates_name}} </td>
     
          <div class="right">
            <form @submit.prevent="deelete(keey.id)">
              <button  class="icon-button red"> <img src="../../assets/x.png" alt="" class="icon-small">
    </button>
            </form>

              <router-link :to="{ name: 'updategue', params: { idd: keey.id}}"> <button   class="icon-button orange" > 
                  <img src="../../assets/edit.png" alt="" class="icon-small">
    </button> </router-link> 
    <!--
    <router-link :to="{ name: 'GuestPrint', params: { id: keey.id}}"> <button   class="icon-button orange" > 
    </button> </router-link> -->
    
    </div> 
    
    
        </tr>
        
       
      </tbody>
    </table>
    
    </div>
      
    
       
      
     
    </div>
    </div>
    
    
               
    
    
      
    
    
    </template>
    
    <script>
    
    import geturl from '../../composables/geturl'
    import { useUserStore } from '@/stores/user'
    import looading from '@/components/looading.vue'
    import moment from 'moment'
    
    export default {
    name: 'GuestPoolView',
    components:{looading},
    data(){
      return{
        formdata:[],
         formdata2:[],
         formdata3:[],
         formdata4:{},
         formdata5:{},
         formdata6:{},
       /*  guestCheckout:{
          name: "",
        phone: "",
        family: "",
        document: "",
        gender: "",
        nationality: "",
        reservation: '',
        number: '',
        start: '',
        end: '',
        hotel: '',
        directorates: '',
         },*/
         work:false,
          id_del: 0,
         delete_act : false,
         delete_go : false,
         DateFilter: '',
         PoolFilter: '',
         pool_id: ' ',
          dat : new Date(),
         user : useUserStore(),
         load: true,
         pool: localStorage.getItem('pool'),
      }
    },
    mounted() {
        if(this.user.is_staff){
          this.DateFilter = moment(  this.dat.toISOString(this.dat.toLocaleString()) ).format("YYYY-MM-DD")
    
    
          fetch(geturl()+"hotels/number_pool/", {
          
          headers: {"Content-Type": "application/json",
        "authorization": "Token "+this.user.token
    },      })
        .then(res => res.json())
        .then(data => {
          this.formdata5 = data
          this.load = false

        })

      /*  fetch(geturl()+"guest/guest/?create_at="+this.DateFilter+"&number_pool=", {
          
          headers: {"Content-Type": "application/json",
        "authorization": "Token "+this.user.token
  },      })
        .then(res => res.json())
        .then(data => {this.formdata2 = data
          this.load = false
            // this.hotel_id = this.formdata2[0].hotel
        })*/
        }else{
        fetch(geturl()+"hotels/number_pool/?pool="+this.pool, {
          
          headers: {"Content-Type": "application/json",
        "authorization": "Token "+this.user.token
    },      })
        .then(res => res.json())
        .then(data => {
          this.formdata5 = data
          this.load = false

        })
      }
        },
        methods: {
    
            filter(){
              
              fetch(geturl()+"guest/guest/?create_at="+this.DateFilter+"&number_pool="+this.PoolFilter, {
          
                headers: {"Content-Type": "application/json",
          "authorization": "Token "+this.user.token
    },      })
          .then(res => res.json())
          .then(data => {
            this.formdata2 = data
            if(this.formdata2[0])
            this.pool_id = this.formdata2[0].number_pool
          })
            },
    
          deelete(id){
     this.id_del = id
            this.delete_act = true
    
          },
        
          cancal(){
             this.delete_act = false
          },
    
         /* checkout(id){
            let dat = new Date()
            
            this.formdata4 = this.formdata2.filter((e)=>{
              return e.id == id
            })
           
            
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
              var dataUrl = reader.result;
              console.log(dataUrl)
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', this.formdata4[0].pic_document);
        xhr.setRequestHeader("authorization", "Token "+this.user.token)
        xhr.responseType = 'blob';
        xhr.send();
    
        
    
            this.guestCheckout.end = moment(  dat.toISOString(dat.toLocaleString()) ).format("YYYY-MM-DDTHH:mm")
            this.guestCheckout.hotel = this.formdata4[0].hotel
                this.guestCheckout.name = this.formdata4[0].name
                this.guestCheckout.phone = this.formdata4[0].phone
                this.guestCheckout.family = this.formdata4[0].family
                this.guestCheckout.document = this.formdata4[0].document
                this.guestCheckout.pic_document = this.formdata4[0].pic_document
                this.guestCheckout.gender = this.formdata4[0].gender
                this.guestCheckout.nationality = this.formdata4[0].nationality
                this.guestCheckout.reservation = this.formdata4[0].reservation
                this.guestCheckout.number = this.formdata4[0].number
                this.guestCheckout.start = this.formdata4[0].start
              this.guestCheckout.start=  moment( this.formdata4[0].start ).format("YYYY-MM-DDTHH:mm")
                this.guestCheckout.directorates = this.formdata4[0].directorates
     
              console.log(this.guestCheckout);
            fetch(geturl()+"guest/guest/"+id+'/', {
             method: "PUT",
             headers: {"Content-Type": "application/json",
          "authorization": "Token "+this.user.token
    },       body: JSON.stringify(this.guestCheckout)
          })
          .then(res => res.json())
          .then(data => { if(data.error){
                          console.log(data)
          }
          else
          console.log(data)
               // this.$router.push({name:'GuestView' })
          }) 
          }*/
            
           Mdelete(){
        fetch(geturl()+"guest/guest/"+this.id_del+'/', {
             method: "DELETE",
             headers: {"Content-Type": "application/json",
          "authorization": "Token "+this.user.token
    },      }).then(res => {
            if(res.ok){
             this.$router.go()
            }
          })      }
    
    
          }
    
          
        }
    
    </script>
    
    <style>
    .star_fa{
      margin: 0;
        padding: 0 !important;
         position: inherit; 
    }
    .star{
      margin: 0;
      padding: 0; 
    }
    
    .sidenav {
      height: 100%;
      width: 200px;
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      background-color: #111;
      overflow-x: hidden;
      padding-top: 20px;
    }
    
    
    .auto{
      width: 50%;
      margin-left: 1rem
    }
    
    </style>