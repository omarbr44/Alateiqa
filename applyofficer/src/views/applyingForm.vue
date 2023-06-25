<template>
    <div style="position: fixed;
    width: 100%;
    top: 0;" v-if="msgQuery" class="alert alert-success d-flex align-items-center alert-dismissible fade show" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
    {{ msgQuery }}
  </div>
</div>
                <img style="position: absolute;
    width: 99%;
    z-index: -1;
    opacity: 0.1;
    top: 50%;" src="../assets/logoo.jpg" alt="" width="200">

    <div class="container my-4">
        <div style=" display: flex;
    justify-content: space-between;
    align-items: center;" class="flex jusify-content-center" >
            <img src="../assets/logoo.jpg" alt="" width="200">
            <div class="text-center">
                <img src="../assets/logo1.jpg" alt="" width="100">
                <p >إدارة أمن وشرطة الوادي والصحراء</p>
                <p > م / حضرموت</p>
            </div>
        </div>
        <h3 class="text-center mt-3" >تقديم طلب تجنيد</h3 >
        <form @submit.prevent="submit" >
            <div class="col-11 mt-5">
                        <BaseInput 
                            v-model="formdata.first_name"
                            type="text"
                            label="الاسم الاول"
                            :error="err.first_name"
                            required
                        />
                        <BaseInput 
                            v-model="formdata.second_name"
                            type="text"
                            label="الاسم الثاني"
                            :error="err.second_name"
                            required
                        />
                        <BaseInput 
                            v-model="formdata.third_name"
                            type="text"
                            label="الاسم الثالث"
                            :error="err.third_name"
                            required
                        />
                        <BaseInput 
                            v-model="formdata.fourth_name"
                            type="text"
                            label="الاسم الرابع"
                            :error="err.fourth_name"
                            required
                        />
                        <BaseInput 
                            v-model="formdata.b_day"
                            type="date"
                            label="تاريخ الميلاد "
                            :error="err.b_day"
                            required
                        />
                        <SelectInput 
                        v-model="formdata.Status_Ind"
                        label="حالة البطاقة "
                        :error="err.Status_Ind"
                        :list="[{id:1,name:'جواز سفر'},{id:2,name:'بطاقة شخصية'},{id:3,name:' غير معرف'}]"
                        required
                        />
                        <BaseInput 
                            v-model="formdata.ind"
                            type="number"
                            label=" رقم الهوية "
                            :error="err.ind"
                            required
                        />
                        <FileInput 
                            @filevalue="filevalue"
                            label="صورة شخصية"
                            :error="err.imge"
                        />
                        <FileInput 
                            @filevalue="filevalue2"
                            label="صورة الهوية"
                            :error="err.docm"
                        />
                        <SelectInput 
                        v-model="formdata.gender"
                        label=" نوع الجنس "
                        :error="err.gender"
                        :list="[{id:1,name:'ذكر '},{id:2,name:' انثى'}]"
                        required
                        />
                    
                        <SelectInput 
                        v-model="formdata.blood"
                        label="  فصيلة الدم "
                        :error="err.blood"
                        :list="[{id:1,name:'A '},{id:2,name:' B'},{id:3,name:'AB'},{id:4,name:'O'}]"
                        required
                        />
                        <SelectInput 
                        v-model="formdata.singl"
                        label=" الاشارة "
                        :error="err.singl"
                        :list="[{id:1,name:'+'},{id:2,name:'-'}]"
                        required
                        />
                        <SelectInput 
                        v-model="formdata.education_level"
                        label="  المستوى التعليمي "
                        :error="err.education_level"
                        :list="[{id:1,name:'بدون '},{id:2,name:' اساسي'},{id:3,name:'ثانوي '},{id:4,name:' جامعي'}]"
                        required
                        />
                        <FileInput v-if="formdata.education_level != 1 && formdata.education_level != ''" 
                            @filevalue="filevalue3"
                            label="الشهادة للمستوى التعليمي"
                            :error="err.education_docm"
                        />
                        <BaseInput 
                            v-model="formdata.phone"
                            type="text"
                            label=" رقم الهاتف الاساسي"
                            :error="err.phone"
                            required
                        />
                        <BaseInput 
                            v-model="formdata.phone_1"
                            type="text"
                            label=" رقم الهاتف الثانوي"
                            :error="err.phone_1"
                        />
                        <SelectInput 
                        v-model="formdata.directorate"
                        label=" مكان الاقامة "
                        :error="err.directorate"
                        :list="directorates"
                        required
                        />
                        <button  class="btn btn-primary">
                         <looading v-if="load"/>
                         <span v-else>ارسال</span>
                        </button>
                        
            </div>
        </form>
        <div style=" display: flex;
    justify-content: space-between;
    align-items: center;" class="flex jusify-content-center">
            <h5 style="opacity: 0.4;">خدمة نجد وطن</h5>
            <div class="mt-3" style="direction: rtl;">
                <p>للتواصل والأستفسار مع إدارة الأمن: </p>
                <p>هاتف : 05405670</p>
                <p>هاتف : 05403497</p>
                <p>عمليات إدارة أمن الوادي والصحراء م / حضرموت</p>
            </div>
    </div>
    </div >
</template>

<script setup>
import BaseInput from '../components/BaseInput.vue';
import SelectInput from '../components/BaseSelectInput.vue';
import FileInput from '../components/BaseFileInput.vue';
import { ref,onMounted } from 'vue';
import {usePostMultipart} from '../composables/usePostMultipart'
import {useGet} from '../composables/useGet'
import looading from '../components/looading.vue'
onMounted(async ()=>{
    const {awaitdata,awaiterror} = await useGet('directorate/')
  directorates.value = awaitdata.value

})
const formdata = ref({
    first_name: '',
    second_name: '',
    third_name: '',
    fourth_name: '',
    b_day: '',
    Status_Ind: '',
    education_level: '',
    education_docm: '',
    ind: '',
    imge: '',
    docm: '',
    gender: '',
    blood: '',
    singl: '',
    phone:'+967',
    phone_1:'+967',
    directorate:'',
})
const err = ref({
    first_name: null,
    second_name: null,
    third_name: null,
    fourth_name: null,
    b_day: null,
    education_level: null,
    education_docm: null,
    Status_Ind: null,
    ind: null,
    imge: null,
    docm: null,
    gender: null,
    blood: null,
    singl: null,
    phone:null,
    phone_1:null,
    directorate:null,
})
const directorates = ref(null)
const filevalue = (file)=>{
            formdata.value.imge = file;
                          }   
const filevalue2 = (file)=>{
            formdata.value.docm = file;
                          }   
const filevalue3 = (file)=>{
            formdata.value.education_docm = file;
                          }   
const load = ref(false)
const msgQuery = ref(null)
const submit = async ()=>{
    load.value = true
     err.value = {
    first_name: null,
    second_name: null,
    third_name: null,
    fourth_name: null,
    b_day: null,
    education_level: null,
    education_docm: null,
    Status_Ind: null,
    ind: null,
    imge: null,
    docm: null,
    gender: null,
    blood: null,
    singl: null,
    phone:null,
    phone_1:null,
    directorate:null,
}
const {awaitdata,awaiterror,loading} = await usePostMultipart("jobcreate",formdata.value)
      load.value = loading.value
      if(!awaitdata.value)
          err.value = awaiterror.value
       else{
        msgQuery.value = 'شكرا لإتمامك عملية التسجيل سيتم اشعارك في حال قبولك لإستكمل الإجراءات'
        console.log(awaitdata.value)
       }

      
}
</script>

<style >
.mb-3,.input-in-con,h1{
    direction: rtl;
}
.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>