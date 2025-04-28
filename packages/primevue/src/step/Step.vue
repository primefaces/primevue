<template>
    <component v-if="!asChild" :is="as" :class="cx('root')" :aria-current="active ? 'step' : undefined" role="presentation" :data-p-active="active" :data-p-disabled="isStepDisabled" :data-p="dataP" v-bind="getPTOptions('root')">
        <button :id="id" :class="cx('header')" role="tab" type="button" :tabindex="isStepDisabled ? -1 : undefined" :aria-controls="ariaControls" :disabled="isStepDisabled" @click="onStepClick" :data-p="dataP" v-bind="getPTOptions('header')">
            <span :class="cx('number')" :data-p="dataP" v-bind="getPTOptions('number')">{{ activeValue }}</span>
            <span :class="cx('title')" :data-p="dataP" v-bind="getPTOptions('title')">
                <slot />
            </span>
        </button>
        <StepperSeparator v-if="isSeparatorVisible" :data-p="dataP" />
    </component>
    <slot v-else :class="cx('root')" :active="active" :value="value" :a11yAttrs="a11yAttrs" :activateCallback="onStepClick" />
</template>

<script>
import { cn } from '@primeuix/utils';
import { find, findSingle } from '@primeuix/utils/dom';
import { findIndexInList } from '@primeuix/utils/object';
import StepperSeparator from '../stepper/StepperSeparator.vue';
import BaseStep from './BaseStep.vue';

export default {
    name: 'Step',
    extends: BaseStep,
    inheritAttrs: false,
    inject: {
        $pcStepper: { default: null },
        $pcStepList: { default: null },
        $pcStepItem: { default: null }
    },
    data() {
        return {
            isSeparatorVisible: false,
            isCompleted: false
        };
    },
    mounted() {
        if (this.$el && this.$pcStepList) {
            let index = findIndexInList(this.$el, find(this.$pcStepper.$el, '[data-pc-name="step"]'));
            let activeIndex = findIndexInList(findSingle(this.$pcStepper.$el, '[data-pc-name="step"][data-p-active="true"]'), find(this.$pcStepper.$el, '[data-pc-name="step"]'));
            let stepLen = find(this.$pcStepper.$el, '[data-pc-name="step"]').length;

            this.isSeparatorVisible = index !== stepLen - 1;
            this.isCompleted = index < activeIndex;
        }
    },
    updated() {
        let index = findIndexInList(this.$el, find(this.$pcStepper.$el, '[data-pc-name="step"]'));
        let activeIndex = findIndexInList(findSingle(this.$pcStepper.$el, '[data-pc-name="step"][data-p-active="true"]'), find(this.$pcStepper.$el, '[data-pc-name="step"]'));
        this.isCompleted = index < activeIndex;
    },
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    active: this.active,
                    disabled: this.isStepDisabled
                }
            });
        },
        onStepClick() {
            this.$pcStepper.updateValue(this.activeValue);
        }
    },
    computed: {
        active() {
            return this.$pcStepper.isStepActive(this.activeValue);
        },
        activeValue() {
            return !!this.$pcStepItem ? this.$pcStepItem?.value : this.value;
        },
        isStepDisabled() {
            return !this.active && (this.$pcStepper.isStepDisabled() || this.disabled);
        },
        id() {
            return `${this.$pcStepper?.$id}_step_${this.activeValue}`;
        },
        ariaControls() {
            return `${this.$pcStepper?.$id}_steppanel_${this.activeValue}`;
        },
        a11yAttrs() {
            return {
                root: {
                    role: 'presentation',
                    'aria-current': this.active ? 'step' : undefined,
                    'data-pc-name': 'step',
                    'data-pc-section': 'root',
                    'data-p-disabled': this.isStepDisabled,
                    'data-p-active': this.active
                },
                header: {
                    id: this.id,
                    role: 'tab',
                    taindex: this.disabled ? -1 : undefined,
                    'aria-controls': this.ariaControls,
                    'data-pc-section': 'header',
                    disabled: this.isStepDisabled,
                    onClick: this.onStepClick
                }
            };
        },
        dataP() {
            return cn({
                disabled: this.isStepDisabled,
                readonly: this.$pcStepper.linear,
                active: this.active,
                completed: this.isCompleted,
                vertical: this.$pcStepItem != null
            });
        }
    },
    components: {
        StepperSeparator
    }
};
</script>
