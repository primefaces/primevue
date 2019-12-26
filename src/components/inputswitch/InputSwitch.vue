<template>
    <div :class="containerClass" @click="onClick($event)">
        <div class="p-hidden-accessible">
            <input ref="input" type="checkbox" :id="inputId" :name="name" :checked="value" :disabled="disabled"
                @focus="onFocus($event)" @blur="onBlur($event)" @keydown.enter.prevent="onClick($event)" role="switch" :aria-checked="value" :aria-labelledby="ariaLabelledBy">
        </div>
        <span class="p-inputswitch-slider"></span>
    </div>
</template>

<script>
export default {
    props: {
        value: Boolean,
        inputId: String,
        name: String,
        disabled: Boolean,
        ariaLabelledBy: null
    },
    data() {
        return {
            focused: false
        }
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                this.$emit('click', event);
                this.$emit('input', !this.value);
                this.$emit('change', event);
                this.$refs.input.focus();
            }
        },
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        }
    },
    computed: {
        containerClass() {
            return [
                'p-inputswitch p-component',
                {
                    'p-inputswitch-checked': this.value,
					'p-disabled': this.disabled,
                    'p-inputswitch-focus': this.focused
                }
            ];
        }
    }
}
</script>

<style>
.p-inputswitch {
    position: relative;
    display: inline-block;
    width: 3em;
    height: 1.75em;
}

.p-inputswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: .3s;
    transition: .3s;
    border-radius: 30px;
}

.p-inputswitch-slider:before {
    position: absolute;
    content: "";
    height: 1.250em;
    width: 1.250em;
    left: .25em;
    bottom: .25em;
    border-radius: 50%;
    -webkit-transition: .3s;
    transition: .3s;
}

.p-inputswitch-checked .p-inputswitch-slider:before {
    -webkit-transform: translateX(1.250em);
    -ms-transform: translateX(1.250em);
    transform: translateX(1.250em);
}
</style>