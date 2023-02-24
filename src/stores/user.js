import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = ref(null)
  const hotel = ref('')
  const pool = ref('')
  const hall = ref('')
  const name = ref(null)
  const is_staff= ref(false)
  const is_woner= ref(false)
  const is_hall= ref(false)
  const is_pool= ref(false)
  //const doubleCount = computed(() => count.value * 2)
  function addToken(tok,user_name,hot,poo,hal) {
    token.value = tok
    hotel.value = hot
    pool.value = poo
    hall.value = hal
    name.value = user_name
    localStorage.setItem('token',JSON.stringify(token.value))
    localStorage.setItem('hotel',hotel.value)
    localStorage.setItem('pool',pool.value)
    localStorage.setItem('hall',hall.value)
  }
  function addRole(staff,woner,pooll,halll) {
    is_staff.value = staff
    is_woner.value = woner
    is_pool.value = pooll
    is_hall.value = halll
    localStorage.setItem('is_staff',JSON.stringify(is_staff.value))
    localStorage.setItem('is_woner',JSON.stringify(is_woner.value))
    localStorage.setItem('is_pool',JSON.stringify(is_pool.value))
    localStorage.setItem('is_hall',JSON.stringify(is_hall.value))
    console.log(is_pool.value,is_woner.value,is_hall.value)
  }
  function signOut() {
    token.value = null;
    is_staff.value = false
    is_woner.value = false
    is_pool.value = false
    is_hall.value = false
    pool.value = ''
    hall.value = ''
    hotel.value = ''
    localStorage.setItem('token',null)
    localStorage.setItem('hotel','')
    localStorage.setItem('is_staff',false)
    localStorage.setItem('is_woner',false)
    localStorage.setItem('is_pool',false)
    localStorage.setItem('is_hall',false)
  }

  return { is_pool,token,name,is_staff,is_woner,is_hall,hotel,pool,hall,addRole, addToken,signOut }
})
