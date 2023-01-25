import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = ref(null)
  const hotel = ref('')
  const name = ref(null)
  const is_staff= ref(false)
  const is_woner= ref(false)
  //const doubleCount = computed(() => count.value * 2)
  function addToken(tok,user_name,hot) {
    token.value = tok
    hotel.value = hot
    token.name = user_name
    localStorage.setItem('token',JSON.stringify(token.value))
    localStorage.setItem('hotel',hotel.value)
  }
  function addRole(staff,woner) {
    is_staff.value = staff
    is_woner.value = woner
    localStorage.setItem('is_staff',JSON.stringify(is_staff.value))
    localStorage.setItem('is_woner',JSON.stringify(is_woner.value))

  }
  function signOut() {
    token.value = null;
    is_staff.value = false
    is_woner.value = false
    hotel.value = ''
    localStorage.setItem('token',null)
    localStorage.setItem('hotel','')
    localStorage.setItem('is_staff',false)
    localStorage.setItem('is_woner',false)
  }

  return { token,name,is_staff,is_woner,addRole, addToken,signOut }
})
