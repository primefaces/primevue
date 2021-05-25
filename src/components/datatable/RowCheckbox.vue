<template>
    <div class="p-checkbox p-component" @click="onClick">
        <div ref="box" :class="['p-checkbox-box p-component', {'p-highlight': checked, 'p-disabled': $attrs.disabled, 'p-focus': focused}]"
            role="checkbox" :aria-checked="checked" :tabindex="$attrs.disabled ? null : '0'" @keydown.space.prevent="onClick" @focus="onFocus($event)" @blur="onBlur($event)">
            <span :class="['p-checkbox-icon', {'pi pi-check': checked}]"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RowCheckbox',
    inheritAttrs: false,
    emits: ['change'],
    props: {
		value: null,
        checked: null
    },
    data() {
        return {
            focused: false
        };
    },
    methods: {
        onClick(event) {
            if (!this.$attrs.disabled) {
                this.focused = true;
                this.$emit('change', {
                    originalEvent: event,
                    data: this.value
                });
            }
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        }
    }
}
</script>
