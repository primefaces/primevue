<template>
    <div :class="containerClass">
        <svg viewBox="0 0 100 100" :width="size" :height="size" @click="onClick" @mousedown="onMouseDown" @mouseup="onMouseUp"
            @touchstart="onTouchStart" @touchend="onTouchEnd">
            <path :d="rangePath" :stroke-width="strokeWidth" :stroke="rangeColor" class="p-knob-range"></path>
            <path :d="valuePath" :stroke-width="strokeWidth" :stroke="valueColor" class="p-knob-value"></path>
            <text v-if="showValue" :x="50" :y="57" text-anchor="middle" :fill="textColor" class="p-knob-text">{{valueToDisplay}}</text>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Knob',
    emits: ['update:modelValue', 'change'],
    data() {
        return {
            radius: 40,
            midX: 50,
            midY: 50,
            minRadians: 4 * Math.PI / 3,
            maxRadians: -Math.PI / 3
        }
    },
    props: {
        modelValue: {
            type: Number,
            default: null
        },
        size: {
            type: Number,
            default: 100
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        step: {
            type: Number,
            default: 1
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        valueColor: {
            type: String,
            default: 'var(--primary-color, Black)'
        },
        rangeColor: {
            type: String,
            default: 'var(--surface-d, LightGray)'
        },
        textColor: {
            type: String,
            default: 'var(--text-color-secondary, Black)'
        },
        strokeWidth: {
            type: Number,
            default: 14
        },
        showValue: {
            type: Boolean,
            default: true
        },
        valueTemplate: {
            type: String,
            default: "{value}"
        }
    },
    methods: {
        updateValue(offsetX, offsetY) {
            let dx = offsetX - this.size / 2;
            let dy =  this.size / 2 - offsetY;
            let angle = Math.atan2(dy, dx);
            let start = -Math.PI / 2 - Math.PI / 6;
            this.updateModel(angle, start);
        },
        updateModel(angle, start) {
            let mappedValue;
            if (angle > this.maxRadians)
                mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max);
            else if (angle < start)
                mappedValue = this.mapRange(angle + 2 * Math.PI, this.minRadians, this.maxRadians, this.min, this.max);
            else
                return;

            let newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min;
            this.$emit('update:modelValue', newValue);
            this.$emit('change', newValue);
        },
        mapRange(x, inMin, inMax, outMin, outMax) {
            return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
        },
        onClick(event) {
            if (!this.disabled && !this.readonly) {
                this.updateValue(event.offsetX, event.offsetY);
            }
        },
        onMouseDown(event) {
            if (!this.disabled && !this.readonly) {
                window.addEventListener('mousemove', this.onMouseMove);
                window.addEventListener('mouseup', this.onMouseUp);
                event.preventDefault();
            }
        },
        onMouseUp(event) {
            if (!this.disabled && !this.readonly) {
                window.removeEventListener('mousemove', this.onMouseMove);
                window.removeEventListener('mouseup', this.onMouseUp);
                event.preventDefault();
            }
        },
        onTouchStart(event) {
            if (!this.disabled && !this.readonly) {
                window.addEventListener('touchmove', this.onTouchMove);
                window.addEventListener('touchend', this.onTouchEnd);
                event.preventDefault();
            }
        },
        onTouchEnd(event) {
            if (!this.disabled && !this.readonly) {
                window.removeEventListener('touchmove', this.onTouchMove);
                window.removeEventListener('touchend', this.onTouchEnd);
                event.preventDefault();
            }
        },
        onMouseMove(event) {
            if (!this.disabled && !this.readonly) {
                this.updateValue(event.offsetX, event.offsetY);
                event.preventDefault();
            }
        },
        onTouchMove(event) {
            if (!this.disabled && !this.readonly && event.touches.length == 1) {
                const rect = this.$el.getBoundingClientRect();
                const touch = event.targetTouches.item(0);
                const offsetX = touch.clientX - rect.left;
                const offsetY = touch.clientY - rect.top;
                this.updateValue(offsetX, offsetY);
            }
        }
    },
    computed: {
        containerClass() {
            return [
                'p-knob p-component', {
                    'p-disabled': this.disabled
                }
            ];
        },
        rangePath() {
            return `M ${this.minX} ${this.minY} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX} ${this.maxY}`;
        },
        valuePath() {
            return `M ${this.zeroX} ${this.zeroY} A ${this.radius} ${this.radius} 0 ${this.largeArc} ${this.sweep} ${this.valueX} ${this.valueY}`;
        },
        zeroRadians() {
            if (this.min > 0 && this.max > 0)
                return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians);
            else
                return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
        },
        valueRadians() {
            return this.mapRange(this.modelValue, this.min, this.max, this.minRadians, this.maxRadians);
        },
        minX() {
            return this.midX + Math.cos(this.minRadians) * this.radius;
        },
        minY() {
            return this.midY - Math.sin(this.minRadians) * this.radius;
        },
        maxX() {
            return this.midX + Math.cos(this.maxRadians) * this.radius;
        },
        maxY() {
            return this.midY - Math.sin(this.maxRadians) * this.radius;
        },
        zeroX() {
            return this.midX + Math.cos(this.zeroRadians) * this.radius;
        },
        zeroY() {
            return this.midY - Math.sin(this.zeroRadians) * this.radius;
        },
        valueX() {
            return this.midX + Math.cos(this.valueRadians) * this.radius;
        },
        valueY() {
            return this.midY - Math.sin(this.valueRadians) * this.radius;
        },
        largeArc() {
            return Math.abs(this.zeroRadians - this.valueRadians) < Math.PI ? 0 : 1;
        },
        sweep() {
            return this.valueRadians > this.zeroRadians ? 0 : 1;
        },
        valueToDisplay() {
            return this.valueTemplate.replace(/{value}/g, this.modelValue);
        }
    }
}
//Derived and forked from https://github.com/kramer99/vue-knob-control
</script>

<style>
@keyframes dash-frame {
    100% {
        stroke-dashoffset: 0;
    }
}
.p-knob-range {
    fill: none;
    transition: stroke .1s ease-in;
}
.p-knob-value {
    animation-name: dash-frame;
    animation-fill-mode: forwards;
    fill: none;
}
.p-knob-text {
    font-size: 1.3rem;
    text-align: center;
}
</style>
