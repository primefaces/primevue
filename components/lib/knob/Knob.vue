<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <svg
            viewBox="0 0 100 100"
            role="slider"
            :width="size"
            :height="size"
            :tabindex="readonly || disabled ? -1 : tabindex"
            :aria-valuemin="min"
            :aria-valuemax="max"
            :aria-valuenow="modelValue"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            @click="onClick"
            @keydown="onKeyDown"
            @mousedown="onMouseDown"
            @mouseup="onMouseUp"
            @touchstart.passive="onTouchStart"
            @touchend="onTouchEnd"
            v-bind="ptm('svg')"
        >
            <path :d="rangePath" :stroke-width="strokeWidth" :stroke="rangeColor" :class="cx('range')" v-bind="ptm('range')"></path>
            <path :d="valuePath" :stroke-width="strokeWidth" :stroke="valueColor" :class="cx('value')" v-bind="ptm('value')"></path>
            <text v-if="showValue" :x="50" :y="57" text-anchor="middle" :fill="textColor" :class="cx('label')" v-bind="ptm('label')">{{ valueToDisplay }}</text>
        </svg>
    </div>
</template>

<script>
import BaseKnob from './BaseKnob.vue';

// Set fix value for SSR.
const Math_PI = 3.14159265358979;

export default {
    name: 'Knob',
    extends: BaseKnob,
    inheritAttrs: false,
    emits: ['update:modelValue', 'change'],
    data() {
        return {
            radius: 40,
            midX: 50,
            midY: 50,
            minRadians: (4 * Math_PI) / 3,
            maxRadians: -Math_PI / 3
        };
    },
    methods: {
        updateValue(offsetX, offsetY) {
            let dx = offsetX - this.size / 2;
            let dy = this.size / 2 - offsetY;
            let angle = Math.atan2(dy, dx);
            let start = -Math_PI / 2 - Math_PI / 6;

            this.updateModel(angle, start);
        },
        updateModel(angle, start) {
            let mappedValue;

            if (angle > this.maxRadians) mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max);
            else if (angle < start) mappedValue = this.mapRange(angle + 2 * Math_PI, this.minRadians, this.maxRadians, this.min, this.max);
            else return;

            let newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min;

            this.$emit('update:modelValue', newValue);
            this.$emit('change', newValue);
        },
        updateModelValue(newValue) {
            if (newValue > this.max) this.$emit('update:modelValue', this.max);
            else if (newValue < this.min) this.$emit('update:modelValue', this.min);
            else this.$emit('update:modelValue', newValue);
        },
        mapRange(x, inMin, inMax, outMin, outMax) {
            return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
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
        },
        onKeyDown(event) {
            if (!this.disabled && !this.readonly) {
                switch (event.code) {
                    case 'ArrowRight':

                    case 'ArrowUp': {
                        event.preventDefault();
                        this.updateModelValue(this.modelValue + this.step);
                        break;
                    }

                    case 'ArrowLeft':

                    case 'ArrowDown': {
                        event.preventDefault();
                        this.updateModelValue(this.modelValue - this.step);
                        break;
                    }

                    case 'Home': {
                        event.preventDefault();
                        this.$emit('update:modelValue', this.min);
                        break;
                    }

                    case 'End': {
                        event.preventDefault();
                        this.$emit('update:modelValue', this.max);
                        break;
                    }

                    case 'PageUp': {
                        event.preventDefault();
                        this.updateModelValue(this.modelValue + 10);
                        break;
                    }

                    case 'PageDown': {
                        event.preventDefault();
                        this.updateModelValue(this.modelValue - 10);
                        break;
                    }
                }
            }
        }
    },
    computed: {
        rangePath() {
            return `M ${this.minX} ${this.minY} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX} ${this.maxY}`;
        },
        valuePath() {
            return `M ${this.zeroX} ${this.zeroY} A ${this.radius} ${this.radius} 0 ${this.largeArc} ${this.sweep} ${this.valueX} ${this.valueY}`;
        },
        zeroRadians() {
            if (this.min > 0 && this.max > 0) return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians);
            else return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
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
            return Math.abs(this.zeroRadians - this.valueRadians) < Math_PI ? 0 : 1;
        },
        sweep() {
            return this.valueRadians > this.zeroRadians ? 0 : 1;
        },
        valueToDisplay() {
            if (typeof this.valueTemplate === 'string') {
                return this.valueTemplate.replace(/{value}/g, this.modelValue);
            } else {
                return this.valueTemplate(this.modelValue);
            }
        }
    }
};
//Derived and forked from https://github.com/kramer99/vue-knob-control
</script>
