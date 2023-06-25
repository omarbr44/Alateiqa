<template>
    <div class="mb-3 input-in-con"  style="direction: rtl;">      
                            <div v-if="error">
                            <div class="alert alert-danger" role="alert">{{ error }}</div>
                            </div>
                            <label  class="form-label">{{ label }}</label>
                             <input maxlength="13"  type="file" class="form-control rtl" ref="file" multiple
                             @change="$emit('filevalue',$event.target.files[0])"
                             v-bind="$attrs">
     </div>
   
</template>

<script setup>
import { ref,onMounted } from 'vue';

const props = defineProps({
    label: {
    type: String,
    default: ""
    },
    error: {
    type: [String,Array],
    default: ""
    },
    req: {
        type: [Number,String],
        default: 0
    },
    underDetailes: {
    type: String,
    default: ""
    }
})
</script>
