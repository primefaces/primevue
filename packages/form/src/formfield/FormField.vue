<template>
    <component v-if="!asChild" :is="as" :class="cx('root')" v-bind="ptmi('root')">
        <slot :props="field.props" v-bind="fieldAttrs"></slot>
    </component>
    <slot v-else :class="cx('root')" :props="field.props" v-bind="fieldAttrs"></slot>
</template>

<script>
import BaseFormField from './BaseFormField.vue';

export default {
    name: 'FormField',
    extends: BaseFormField,
    inheritAttrs: false,
    inject: {
        $pcForm: {
            default: undefined
        }
    },
    watch: {
        formControl: {
            immediate: true,
            handler(newValue) {
                this.$pcForm?.register?.(this.name, newValue);
            }
        }
    },
    computed: {
        formControl() {
            return {
                name: this.name,
                resolver: this.resolver,
                initialValue: this.initialValue,
                validateOnValueUpdate: this.validateOnValueUpdate,
                validateOnBlur: this.validateOnBlur,
                validateOnMount: this.validateOnMount,
                validateOnSubmit: this.validateOnSubmit
            };
        },
        field() {
            return this.$pcForm?.fields?.[this.name] || {};
        },
        fieldAttrs() {
            return {
                ...this.field.props,
                ...this.field.states
            };
        }
    }
};
</script>
