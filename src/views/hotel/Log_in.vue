<template>
    <div class="containerr ">
        <div class="card my-2" >
  <div class="card-body">
    <div class="img_con mb-2 ">
    <img src="../../assets/logoo2.png" alt="" style="width:5rem">
    <p style="color: #383838;">العتيقه تيكنولوجي</p>
    </div>
    <form @submit.prevent="postinfo">
    <div class="mb-3 input-in-con ">
                        <div v-if="err">
    <div v-if="err.username"  class="alert alert-danger" role="alert"> {{ err.username[0]}}</div>
                        </div>
    <label for="exampleFormControlInput1" class="form-label ">اسم المستخدم</label>
    <input type="text" class="form-control"  placeholder="ادخل اسم المستخدم " v-model="formdata.username">
                    </div>

                    <div class="mb-3 input-in-con">
                        <div v-if="err">
    <div v-if="err.password"  class="alert alert-danger" role="alert"> {{ err.password[0]}}</div>
                        </div>
    <label for="exampleFormControlInput1" class="form-label">كلمة المرور</label>
    <input type="password" class="form-control" placeholder="ادخل كلمة المرور " v-model="formdata.password">
                    </div>

                    
    <div class="d-grid gap-2">
  <button  style="background: #3d3a7d;" class="btn btn-primary" >
    <looading v-if="load"/>
    <span v-else>دخول</span>
</button>
</div>
</form>
  </div>
</div>
                   
                        

                    

                   

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
 import geturl from '../../composables/geturl'
 import looading from '@/components/looading.vue'

    const formdata = ref({
        username:'',
        password:''
    })
    const err = ref(null)
    const router = useRouter()
    const user = useUserStore()
    const load = ref(false)
                
    const postinfo = ()=>{
        load.value= true
        fetch(geturl()+"account/woner/login/", {
           method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formdata.value)
        })
        .then(res => res.json())
        .then(data => { 
            
            if(data.error){
                err.value = data.error.details
                load.value= false
       }
        else{
            user.addToken(data.token,data.user,data.hotel,data.pool,data.hall)
            user.addRole(data.is_staff,data.is_woner,data.is_pool,data.is_hall)
            if(data.is_woner)
             router.push({
                name:'GuestView'
             })
            else if(data.is_pool)
             router.push({
                name:'GuestPoolView'
             })
            else 
             router.push({
                name:'GuestHallView'
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
}
</style>