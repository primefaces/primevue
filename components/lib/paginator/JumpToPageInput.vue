<template>
    <JTPInput ref="jtpInput" :modelValue="d_page" class="p-paginator-page-input" :aria-label="inputArialabel" :disabled="disabled" @update:modelValue="onChange" :pt="ptm('JTPInput')"></JTPInput>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import InputNumber from 'primevue/inputnumber';

export default {
    name: 'JumpToPageInput',
    extends: BaseComponent,
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
        page(newValue) {
            this.d_page = newValue;
        }
    },
    methods: {
        onChange(value) {
            if (value !== this.page) {
                this.d_page = value;
                this.$emit('page-change', value - 1);
            }
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
