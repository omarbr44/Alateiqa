<template>
                        <div class="mb-3 " style="direction: rtl;">
                            <div v-if="error">
                             <div  class="alert alert-danger" role="alert">{{props.error }}</div>
                            </div>
                            <label  class="form-label">{{ props.label }}</label>
                            <div :class="{redstar :props.req}">
                             <input 
                                class="form-control rtl"
                                :placeholder="props.label"
                                :value="props.modelValue"
                                @input="$emit('update:modelValue', $event.target.value)"
                                v-bind="$attrs"
                             >
                             
                            </div>
                        </div>
</template>

<script setup>

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
    modelValue: {
        type: [String,Number],
        default: ""
    },
})

</script>
