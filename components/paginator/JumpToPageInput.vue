<template>
    <JTPInput ref="jtpInput" v-model="d_page" class="p-paginator-page-input" :aria-label="inputArialabel" :disabled="disabled"></JTPInput>
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
    data() {
        return {
            d_page: this.page
        };
    },
    watch: {
        d_page(newValue) {
            this.$emit('page-change', newValue - 1);
        },
        page(newValue) {
            this.d_page = newValue;
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
