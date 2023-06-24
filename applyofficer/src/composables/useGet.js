import { ref } from "vue";
import axios from "axios";
import geturl from "./geturl";
/* import { useUserStore } from '@/stores/user'
 */
/* const userStore= useUserStore()
 */const awaitdata = ref(null)
const awaiterror = ref(null)
const loading = ref(true)
const url = geturl()

   export async function useGet(api){
   await axios({
        url:url+api,
        method: 'get',
        headers:{
          //'content-type': 'multipart/form-data'
          'content-type': 'application/json',
          /* "Authorization": "Bearer "+userStore.token */
        }
      }).then((res)=>{
        awaitdata.value= res.data
        loading.value = false
      }).catch((err)=>{
        awaiterror.value= err.data
        loading.value = false
      })
      return { awaitdata,awaiterror,loading } 
      
                                 } 