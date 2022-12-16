<template>
    <JTPInput ref="jtpInput" v-model="modelValue" class="p-paginator-page-input" :aria-label="inputArialabel" :disabled="disabled"></JTPInput>
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
    computed: {
        inputArialabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.jumpToPageInputLabel : undefined;
        },
        modelValue: {
          get() {
            return this.page;
          },
          set(value) {
            if (this.$refs.jtpInput && !this.$refs.jtpInput.focused) {
              return;
            }

            this.$emit('page-change', value - 1);
          }
        }
    },
    components: {
        JTPInput: InputNumber
    }
};
</script>
