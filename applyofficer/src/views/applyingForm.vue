<template>
    <div style="position: fixed;
    width: 100%;
    top: 0;" v-if="msgQuery" class="alert alert-success d-flex align-items-center alert-dismissible fade show" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
    {{ msgQuery }}
  </div>
</div>
<div style="width: 100%;
    position: fixed;
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;">
                <img style="
    width: 80%;
    z-index: -1;
    opacity: 0.1;
    " src="../assets/logoo.jpg" alt="" width="200">
</div>
    <div class="container my-4">
        <div style=" display: flex;
    justify-content: space-between;
    align-items: center;" class="flex jusify-content-center" >
            <img src="../assets/logoo.jpg" alt="" width="200">
            <div class="text-center">
                <div>
                    <img src="../assets/logo3.png" alt="" width="150">
                </div>
                <div>
                    <img src="../assets/logo1.jpg" alt="" width="100">
                    <img src="../assets/logo2.jpg" alt="" width="120">
                </div>
            </div>
        </div>
        <h3 class="text-center mt-3" style="color: #f58484;">تقديم طلب الإلتحاق</h3 >
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
                        label=" نوع الهوية "
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
                        label="إشارة الفصيلة "
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
                            required
                        />
                        <BaseInput 
                            v-model="formdata.phone"
                            type="text"
                            label=" رقم الهاتف الاساسي"
                            :error="err.phone"
                            maxlength="13"
                            required
                        />
                        <BaseInput 
                            v-model="formdata.phone_1"
                            type="text"
                            label=" رقم الهاتف الثانوي"
                            maxlength="13"
                            :error="err.phone_1"
                        />
                        <SelectInput 
                        v-model="gov"
                        label="  المحافظة "
                        :error="err.gov"
                        :list="govs"
                        required
                        />
                        <SelectInput 
                        v-model="formdata.directorate"
                        label="  المديرية "
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
            <h5 style="opacity: 0.5;  color: #2d74ff;">خدمة نجد وطن</h5>
            <div class="mt-3" style="direction: rtl;">
                <p>للتواصل والأستفسار مع إدارة الأمن: </p>
                <p>هاتف : 05405670</p>
                <p>هاتف : 05403497</p>
                <p>عمليات إدارة أمن الوادي والصحراء م / حضرموت</p>
                <p>عمليات المشتركة لمحافظة حضرموت</p>
                <p>هاتف : 05300006</p>
                <p>هاتف : 05300007</p>
                <p>هاتف : 9675447104</p>
                <p>رقم عملبات وزارة الداخلية</p>
                <p>هاتف : 05446246</p>
            </div>
    </div>
    </div >
</template>

<script setup>
import BaseInput from '../components/BaseInput.vue';
import SelectInput from '../components/BaseSelectInput.vue';
import FileInput from '../components/BaseFileInput.vue';
import { ref,watchEffect } from 'vue';
import {usePostMultipart} from '../composables/usePostMultipart'
import {useGet} from '../composables/useGet'
import looading from '../components/looading.vue'
const gov = ref(1)
watchEffect(async ()=>{
    console.log(gov.value)
    const govss = await useGet('provinec/')
  govs.value = govss.awaitdata.value
    const {awaitdata,awaiterror} = await useGet('directorate/?provinec='+gov.value)
  directorates.value = awaitdata.value
console.log(directorates.value,gov.value)
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
    phone: '+967',
    phone_1:'',
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
    gov:null,
})
const directorates = ref(null)
const govs = ref(null)
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
    gov:null,

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