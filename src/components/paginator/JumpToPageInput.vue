<template>
    <JTPInput :modelValue="page" class="p-paginator-page-input" :aria-label="inputArialabel" :disabled="disabled" @update:modelValue="onChange($event)"></JTPInput>
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
    computed: {
        inputArialabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.jumpToPageInputLabel : undefined;
        }
    },
    components: {
        JTPInput: InputNumber
    }
};
</script>
