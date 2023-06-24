import { ref } from "vue";
import axios from "axios";
import geturl from "./geturl";

const awaitdata = ref(null)
const awaiterror = ref(null)
const loading = ref(true)
const url = geturl()
/* import { useUserStore } from '@/stores/user'
 */
/* const userStore= useUserStore()
 */

   export async function usePostMultipart(api,body){
   await axios({
        url:url+api,
        method: 'post',
        data: body,
        headers:{
          'content-type': 'multipart/form-data',
          /* "Authorization": "Bearer "+userStore.token */
        } 
      }).then((res)=>{
        awaitdata.value= res.data
        awaiterror.value= null
        loading.value = false
      }).catch((err)=>{
        awaiterror.value= err.response.data
        awaitdata.value= null
        loading.value = false
      })
      return { awaitdata,awaiterror,loading } 
      
                                 } 