<template>
    <div :class="cx('root')" @click="onBarClick" v-bind="ptmi('root')" :data-p-sliding="false">
        <span :class="cx('range')" :style="[sx('range'), rangeStyle]" v-bind="ptm('range')"></span>
        <span
            v-if="!range"
            :class="cx('handle')"
            :style="[sx('handle'), handleStyle]"
            @touchstart.passive="onDragStart($event)"
            @touchmove.passive="onDrag($event)"
            @touchend="onDragEnd($event)"
            @mousedown="onMouseDown($event)"
            @keydown="onKeyDown($event)"
            :tabindex="tabindex"
            role="slider"
            :aria-valuemin="min"
            :aria-valuenow="modelValue"
            :aria-valuemax="max"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :aria-orientation="orientation"
            v-bind="ptm('handle')"
        ></span>
        <span
            v-if="range"
            :class="cx('handle')"
            :style="[sx('handle'), rangeStartHandleStyle]"
            @touchstart.passive="onDragStart($event, 0)"
            @touchmove.passive="onDrag($event)"
            @touchend="onDragEnd($event)"
            @mousedown="onMouseDown($event, 0)"
            @keydown="onKeyDown($event, 0)"
            :tabindex="tabindex"
            role="slider"
            :aria-valuemin="min"
            :aria-valuenow="modelValue ? modelValue[0] : null"
            :aria-valuemax="max"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :aria-orientation="orientation"
            v-bind="ptm('startHandler')"
        ></span>
        <span
            v-if="range"
            :class="cx('handle')"
            :style="[sx('handle'), rangeEndHandleStyle]"
            @touchstart.passive="onDragStart($event, 1)"
            @touchmove.passive="onDrag($event)"
            @touchend="onDragEnd($event)"
            @mousedown="onMouseDown($event, 1)"
            @keydown="onKeyDown($event, 1)"
            :tabindex="tabindex"
            role="slider"
            :aria-valuemin="min"
            :aria-valuenow="modelValue ? modelValue[1] : null"
            :aria-valuemax="max"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :aria-orientation="orientation"
            v-bind="ptm('endHandler')"
        ></span>
    </div>
</template>

<script>
import { getWindowScrollLeft, getWindowScrollTop, getAttribute } from '@primeuix/utils/dom';
import BaseSlider from './BaseSlider.vue';

export default {
    name: 'Slider',
    extends: BaseSlider,
    inheritAttrs: false,
    emits: ['update:modelValue', 'change', 'slideend'],
    dragging: false,
    handleIndex: null,
    initX: null,
    initY: null,
    barWidth: null,
    barHeight: null,
    dragListener: null,
    dragEndListener: null,
    beforeUnmount() {
        this.unbindDragListeners();
    },
    methods: {
        updateDomData() {
            let rect = this.$el.getBoundingClientRect();

            this.initX = rect.left + getWindowScrollLeft();
            this.initY = rect.top + getWindowScrollTop();
            this.barWidth = this.$el.offsetWidth;
            this.barHeight = this.$el.offsetHeight;
        },
        setValue(event) {
            let handleValue;
            let pageX = event.touches ? event.touches[0].pageX : event.pageX;
            let pageY = event.touches ? event.touches[0].pageY : event.pageY;

            if (this.orientation === 'horizontal') handleValue = ((pageX - this.initX) * 100) / this.barWidth;
            else handleValue = ((this.initY + this.barHeight - pageY) * 100) / this.barHeight;
            let newValue = (this.max - this.min) * (handleValue / 100) + this.min;

            if (this.step) {
                const oldValue = this.range ? this.value[this.handleIndex] : this.value;
                const diff = newValue - oldValue;

                if (diff < 0) newValue = oldValue + Math.ceil(newValue / this.step - oldValue / this.step) * this.step;
                else if (diff > 0) newValue = oldValue + Math.floor(newValue / this.step - oldValue / this.step) * this.step;
            } else {
                newValue = Math.floor(newValue);
            }

            this.updateModel(event, newValue);
        },
        updateModel(event, value) {
            let newValue = parseFloat(value.toFixed(10));
            let modelValue;

            if (this.range) {
                modelValue = this.value ? [...this.value] : [];

                if (this.handleIndex == 0) {
                    if (newValue < this.min) newValue = this.min;
                    else if (newValue >= this.max) newValue = this.max;

                    modelValue[0] = newValue;
                } else {
                    if (newValue > this.max) newValue = this.max;
                    else if (newValue <= this.min) newValue = this.min;

                    modelValue[1] = newValue;
                }
            } else {
                if (newValue < this.min) newValue = this.min;
                else if (newValue > this.max) newValue = this.max;

                modelValue = newValue;
            }

            this.$emit('update:modelValue', modelValue);
            this.$emit('change', modelValue);
        },
        onDragStart(event, index) {
            if (this.disabled) {
                return;
            }

            this.$el.setAttribute('data-p-sliding', true);
            this.dragging = true;
            this.updateDomData();

            if (this.range && this.value[0] === this.max) {
                this.handleIndex = 0;
            } else {
                this.handleIndex = index;
            }

            event.currentTarget.focus();
            event.preventDefault();
        },
        onDrag(event) {
            if (this.dragging) {
                this.setValue(event);
                event.preventDefault();
            }
        },
        onDragEnd(event) {
            if (this.dragging) {
                this.dragging = false;
                this.$el.setAttribute('data-p-sliding', false);
                this.$emit('slideend', { originalEvent: event, value: this.value });
            }
        },
        onBarClick(event) {
            if (this.disabled) {
                return;
            }

            if (getAttribute(event.target, 'data-pc-section') !== 'handle') {
                this.updateDomData();
                this.setValue(event);
            }
        },
        onMouseDown(event, index) {
            this.bindDragListeners();
            this.onDragStart(event, index);
        },
        onKeyDown(event, index) {
            this.handleIndex = index;

            switch (event.code) {
                case 'ArrowDown':
                case 'ArrowLeft':
                    this.decrementValue(event, index);
                    event.preventDefault();
                    break;

                case 'ArrowUp':
                case 'ArrowRight':
                    this.incrementValue(event, index);
                    event.preventDefault();
                    break;

                case 'PageDown':
                    this.decrementValue(event, index, true);
                    event.preventDefault();
                    break;

                case 'PageUp':
                    this.incrementValue(event, index, true);
                    event.preventDefault();
                    break;

                case 'Home':
                    this.updateModel(event, this.min);
                    event.preventDefault();
                    break;

                case 'End':
                    this.updateModel(event, this.max);
                    event.preventDefault();
                    break;

                default:
                    break;
            }
        },
        decrementValue(event, index, pageKey = false) {
            let newValue;

            if (this.range) {
                if (this.step) newValue = this.value[index] - this.step;
                else newValue = this.value[index] - 1;
            } else {
                if (this.step) newValue = this.value - this.step;
                else if (!this.step && pageKey) newValue = this.value - 10;
                else newValue = this.value - 1;
            }

            this.updateModel(event, newValue);
            event.preventDefault();
        },
        incrementValue(event, index, pageKey = false) {
            let newValue;

            if (this.range) {
                if (this.step) newValue = this.value[index] + this.step;
                else newValue = this.value[index] + 1;
            } else {
                if (this.step) newValue = this.value + this.step;
                else if (!this.step && pageKey) newValue = this.value + 10;
                else newValue = this.value + 1;
            }

            this.updateModel(event, newValue);
            event.preventDefault();
        },
        bindDragListeners() {
            if (!this.dragListener) {
                this.dragListener = this.onDrag.bind(this);
                document.addEventListener('mousemove', this.dragListener);
            }

            if (!this.dragEndListener) {
                this.dragEndListener = this.onDragEnd.bind(this);
                document.addEventListener('mouseup', this.dragEndListener);
            }
        },
        unbindDragListeners() {
            if (this.dragListener) {
                document.removeEventListener('mousemove', this.dragListener);
                this.dragListener = null;
            }

            if (this.dragEndListener) {
                document.removeEventListener('mouseup', this.dragEndListener);
                this.dragEndListener = null;
            }
        }
    },
    computed: {
        value() {
            if (this.range) {
                return [this.modelValue?.[0] ?? this.min, this.modelValue?.[1] ?? this.max];
            }

            return this.modelValue ?? this.min;
        },
        horizontal() {
            return this.orientation === 'horizontal';
        },
        vertical() {
            return this.orientation === 'vertical';
        },
        rangeStyle() {
            if (this.range) {
                const rangeSliderWidth = this.rangeEndPosition > this.rangeStartPosition ? this.rangeEndPosition - this.rangeStartPosition : this.rangeStartPosition - this.rangeEndPosition;
                const rangeSliderPosition = this.rangeEndPosition > this.rangeStartPosition ? this.rangeStartPosition : this.rangeEndPosition;

                if (this.horizontal) return { left: rangeSliderPosition + '%', width: rangeSliderWidth + '%' };
                else return { bottom: rangeSliderPosition + '%', height: rangeSliderWidth + '%' };
            } else {
                if (this.horizontal) return { width: this.handlePosition + '%' };
                else return { height: this.handlePosition + '%' };
            }
        },
        handleStyle() {
            if (this.horizontal) return { left: this.handlePosition + '%' };
            else return { bottom: this.handlePosition + '%' };
        },
        handlePosition() {
            if (this.value < this.min) return 0;
            else if (this.value > this.max) return 100;
            else return ((this.value - this.min) * 100) / (this.max - this.min);
        },
        rangeStartPosition() {
            if (this.value && this.value[0]) return ((this.value[0] < this.min ? 0 : this.value[0] - this.min) * 100) / (this.max - this.min);
            else return 0;
        },
        rangeEndPosition() {
            if (this.value && this.value.length === 2) return ((this.value[1] > this.max ? 100 : this.value[1] - this.min) * 100) / (this.max - this.min);
            else return 100;
        },
        rangeStartHandleStyle() {
            if (this.horizontal) return { left: this.rangeStartPosition + '%' };
            else return { bottom: this.rangeStartPosition + '%' };
        },
        rangeEndHandleStyle() {
            if (this.horizontal) return { left: this.rangeEndPosition + '%' };
            else return { bottom: this.rangeEndPosition + '%' };
        }
    }
};
</script>
