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
            d_page: null
        };
    },
    watch: {
        d_page(newValue) {
            if (this.$refs.jtpInput && !this.$refs.jtpInput.focused) return;

            this.$emit('page-change', newValue - 1);
        }
    },
    mounted() {
        this.d_page = this.page;
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
