<template>
    <span :class="containerClass">
        <input ref="input" :class="inputClass" v-bind="$attrs" v-on="listeners" :value="value" :aria-valumin="min" :aria-valuemax="max" :aria-valuenow="value" :aria-labelledby="ariaLabelledBy">
        <button type="button" :class="upButtonClass" @mousedown="onButtonMouseDown($event, 1)" @mouseup="onButtonMouseUp" @mouseleave="onButtonMouseLeave"
            @keydown="onButtonKeyDown($event, 1)" @keyup="onButtonKeyUp" :disabled="$attrs.disabled">
            <span class="p-spinner-button-icon pi pi-caret-up"></span>
        </button>
        <button type="button" :class="downButtonClass" @mousedown="onButtonMouseDown($event, -1)" @mouseup="onButtonMouseUp" @mouseleave="onButtonMouseLeave"
            @keydown="onButtonKeyDown($event, -1)" @keyup="onButtonKeyUp" :disabled="$attrs.disabled">
            <span class="p-spinner-button-icon pi pi-caret-down"></span>
        </button>
    </span>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: null,
        step: {
            type: Number,
            default: 1
        },
        min: Number,
        max: Number,
        ariaLabelledBy: String
    },
    data() {
        return {
            focused: false
        }
    },
    methods: {
        repeat(event, interval, dir) {
            let i = interval || 500;

            this.clearTimer();
            this.timer = setTimeout(() => {
                this.repeat(event, 40, dir);
            }, i);

            this.spin(event, dir);
        },
        spin(event, dir) {
            let step = this.step * dir;
            let currentValue;
            let newValue;

            if (this.value)
                currentValue = (typeof this.value === 'string') ? this.parseValue(this.value) : this.value;
            else
                currentValue = 0;

            if (this.precision)
                newValue = parseFloat(this.toFixed(currentValue + step, this.precision));
            else
                newValue = currentValue + step;

            if (this.min !== null && newValue < this.min) {
                newValue = this.min;
            }

            if (this.max !== null && newValue > this.max) {
                newValue= this.max;
            }

            this.$emit('input', newValue);
        },
        toFixed(value, precision) {
            let power = Math.pow(10, precision || 0);
            return String(Math.round(value * power) / power);
        },
        parseValue(val) {
            let value = val.trim();

            if (val === '') {
                value = this.min != null ? this.min : null;
            }
            else {
                if (this.precision)
                    value = parseFloat(val.replace(',', '.'));
                else
                    value = parseInt(val, 10);

                if (!isNaN(value)) {
                    if (this.max !== null && value > this.max) {
                        value = this.props.max;
                    }

                    if (this.min !== null && value < this.min) {
                        value = this.props.min;
                    }
                }
                else {
                    value = null;
                }
            }

            return value;
        },
        onButtonMouseDown(event, direction) {
            this.$refs.input.focus();
            this.repeat(event, null, direction);
            event.preventDefault();
        },
        onButtonMouseUp() {
            this.clearTimer();
        },
        onButtonMouseLeave() {
           this.clearTimer();
        },
        onButtonKeyUp() {
            this.clearTimer();
        },
        onButtonKeyDown(event, direction) {
            if (event.keyCode === 32 || event.keyCode === 13) {
                this.repeat(event, null, direction);
            }
        },
        clearTimer() {
            if (this.timer) {
                clearInterval(this.timer);
            }
        }
    },
    computed: {
        listeners() {
            let vm = this;

            return {
                ...this.$listeners,
                input: event => {
                    this.$emit('input', event.target.value)
                },
                focus: () => {
                    vm.focused = true;
                },
                blur: event => {
                    vm.focused = false;

                    const parsedValue =  this.parseValue(event.target.value);
                    this.$emit('input', parsedValue);
                },
                keydown: event => {
                    if (event.which === 38) {
                        this.spin(1);
                        event.preventDefault();
                    }
                    else if (event.which === 40) {
                        this.spin(-1);
                        event.preventDefault();
                    }
                }
            };
        },
        precision() {
            if (Math.floor(this.step) === 0)
                return this.step.toString().split(/[,]|[.]/)[1].length;
            else
                return null;
        },
        containerClass() {
            return ['p-spinner p-component', {'p-inputwrapper-filled': this.filled, 'p-inputwrapper-focus': this.focused}];
        },
        inputClass() {
            return ['p-inputtext p-component p-spinner-input', {'p-filled': this.filled, 'p-disabled': this.$attrs.disabled}];
        },
        upButtonClass() {
            return ['p-spinner-button p-spinner-button-up p-button p-component', {'p-disabled': this.$attrs.disabled}];
        },
        downButtonClass() {
            return ['p-spinner-button p-spinner-button-down p-button p-component', {'p-disabled': this.$attrs.disabled}];
        },
        filled() {
            return (this.value != null && this.value.toString().length > 0)
        }
    }
}
</script>

<style>
.p-spinner {
    display: inline-block;
    overflow: visible;
    padding: 0;
    position: relative;
    vertical-align: middle;
}
.p-spinner-input {
    vertical-align: middle;
    padding-right: 1.5em;
}
.p-spinner-button.p-button {
    cursor: default;
    display: block;
    height: 50%;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 0;
    text-align: center;
    vertical-align: middle;
    width: 1.5em;
}
.p-spinner .p-spinner-button-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -.5em;
    margin-left: -.5em;
    width: 1em;
}
.p-spinner-button-up {
    top: 0;
}
.p-spinner-button-down {
    bottom: 0;
}

.p-fluid .p-spinner {
    width: 100%;
}
.p-fluid .p-spinner .p-spinner-input {
    padding-right: 2em;
    width: 100%;
}
.p-fluid .p-spinner .p-spinner-button {
    width: 1.5em;
}
.p-fluid .p-spinner .p-spinner-button .p-spinner-button-icon {
    left: .375em;
}
</style>