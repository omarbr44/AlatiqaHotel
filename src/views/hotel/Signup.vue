<template>
    <div class="containerr ">
        <div class="card my-2" >
  <div class="card-body">
    <div class="img_con mb-2">
    <img src="../../assets/logoo2.png" alt="" style="width:5rem">
    <p style="color: #383838;">العتيقه تيكنولوجي</p>
    </div>
    <form @submit.prevent="postinfo">
        <label style="text-align: center;
    width: 100%;">
    لمن هذا الحساب
  </label>
        <div class="flex my-4" style="justify-content: space-evenly;"> 
        <div class="form-check">
  <input class="form-check-input" value="1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked v-model="usertype">
  <label class="form-check-label" for="flexRadioDefault1">
    فندق
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" value="2"  type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="usertype">
  <label class="form-check-label" for="flexRadioDefault2">
    مسبح
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" value="3" type="radio" name="flexRadioDefault" id="flexRadioDefault3" v-model="usertype">
  <label class="form-check-label" for="flexRadioDefault3">
    صالة
  </label>
</div>
</div>

    <div class="mb-3 input-in-con ">
                        <div v-if="err">
    <div v-if="err.username"  class="alert alert-danger" role="alert"> {{ err.username[0]}}</div>
                        </div>
    <label for="exampleFormControlInput1" class="form-label ">اسم المستخدم</label>
    <input type="text" class="form-control"  placeholder="ادخل اسم المستخدم " v-model="formdata.username">
                    </div>
                    <div class="mb-3 input-in-con">
                        <div v-if="err">
    <div v-if="err.email"  class="alert alert-danger" role="alert"> {{ err.email[0]}}</div>
                        </div>
    <label for="exampleFormControlInput1" class="form-label"> البريد الالكتروني</label>
    <input type="email" class="form-control"  placeholder="ادخل  البريد الالكتروني " v-model="formdata.email">
                    </div>

                    <div class="mb-3 input-in-con">
                        <div v-if="err">
    <div v-if="err.password"  class="alert alert-danger" role="alert"> {{ err.password[0]}}</div>
                        </div>
    <label for="exampleFormControlInput1" class="form-label">كلمة المرور</label>
    <input type="password" class="form-control" placeholder="ادخل كلمة المرور " v-model="formdata.password">
                    </div>

                    <div class="mb-3 input-in-con">
                        <div v-if="err">
    <div v-if="err.password2"  class="alert alert-danger" role="alert"> {{ err.password2[0]}}</div>
                        </div>
    <label for="exampleFormControlInput1" class="form-label">تأكيد كلمة المرور</label>
    <input type="password" class="form-control"  placeholder="ادخل تأكيد كلمة المرور " v-model="formdata.password2">
                    </div>
    <div class="d-grid gap-2">
  <button style="background: #3d3a7d;" class="btn btn-primary" >تسجيل</button>
</div>
</form>

  </div>
</div>
                   
                        

                    

                   

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
 import geturl from '../../composables/geturl'
 import { useUserStore } from '@/stores/user'

    const formdata = ref({
        username:'',
        email:'',
        password:'',
        password2:''
    })
    const err = ref(null)
    const usertype = ref(1)
    const url = ref('')
    const router = useRouter()
    const user = useUserStore()

    const postinfo = ()=>{
        if(usertype.value==1)
        url.value = "account/woner/signup/" 
       else if(usertype.value==2)
        url.value = "account/pool/signup/" 
       else if(usertype.value==3)
        url.value = "account/hall/signup/" 
        console.log(url.value)
        fetch(geturl()+url.value, {
           method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": "Token "+user.token
    },
        body: JSON.stringify(formdata.value)
        })
        .then(res => res.json())
        .then(data => { if(data.error){
        err.value = data.error.details
        console.log(data)
      }
        else{
             router.push({
               name:'HotelView', 
             }) 
        }
        }) 
    }



</script>

<style scoped>
.containerr{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.card{
    width: 70%;
}
.img_con{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
img{
    width: 6rem;
    padding: 0.5rem;
    box-sizing: content-box;
    border-radius: 7px;
}
</style>