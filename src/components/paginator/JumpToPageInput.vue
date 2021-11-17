<template>
	<JTPInput :modelValue="page" @update:modelValue="onChange($event)" class="p-paginator-page-input" :disabled="disabled"></JTPInput>
</template>

<script>
import InputNumber from 'primevue/inputnumber';

export default {
    name: 'JumpToPageInput',
    inheritAttrs: false,
    emits: ['page-change'],
    props: {
        page: Number,
        pageCount: Number,
        disabled: Boolean
    },
    methods: {
        onChange(value) {
            this.$emit('page-change', value - 1);
        }
    },
    components: {
        'JTPInput': InputNumber
    }
}
</script>
