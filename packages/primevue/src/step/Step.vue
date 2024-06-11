<template>
    <component v-if="!asChild" :is="as" :class="cx('root')" :aria-current="active ? 'step' : undefined" role="presentation" :data-p-active="active" :data-p-disabled="disabled" v-bind="getPTOptions('root')">
        <button :id="id" :class="cx('header')" role="tab" type="button" :tabindex="disabled ? -1 : undefined" :aria-controls="ariaControls" :disabled="disabled" @click="onStepClick" v-bind="getPTOptions('header')">
            <span :class="cx('number')" v-bind="getPTOptions('number')">{{ activeValue }}</span>
            <span :class="cx('title')" v-bind="getPTOptions('title')">
                <slot />
            </span>
        </button>
        <StepperSeparator v-if="isSeparatorVisible" />
    </component>
    <slot v-else :class="cx('root')" :active="active" :value="value" :a11yAttrs="a11yAttrs" :activateCallback="onStepClick" />
</template>

<script>
import { DomHandler, ObjectUtils } from '@primevue/core/utils';
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
            isSeparatorVisible: false
        };
    },
    mounted() {
        if (this.$el && this.$pcStepList) {
            let index = ObjectUtils.findIndexInList(this.$el, DomHandler.find(this.$pcStepper.$el, '[data-pc-name="step"]'));
            let stepLen = DomHandler.find(this.$pcStepper.$el, '[data-pc-name="step"]').length;

            this.isSeparatorVisible = index !== stepLen - 1;
        }
    },
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    active: this.active,
                    disabled: this.disabled
                }
            });
        },
        isStepDisabled() {
            return this.$pcStepper.isStepDisabled();
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
        id() {
            return `${this.$pcStepper?.id}_step_${this.activeValue}`;
        },
        ariaControls() {
            return `${this.$pcStepper?.id}_steppanel_${this.activeValue}`;
        },
        a11yAttrs() {
            return {
                root: {
                    role: 'presentation',
                    'aria-current': this.active ? 'step' : undefined,
                    'data-pc-name': 'step',
                    'data-pc-section': 'root',
                    'data-p-disabled': this.disabled,
                    'data-p-active': this.active
                },
                header: {
                    id: this.id,
                    role: 'tab',
                    taindex: this.disabled ? -1 : undefined,
                    'aria-controls': this.ariaControls,
                    'data-pc-section': 'header',
                    disabled: this.disabled,
                    onClick: this.onStepClick
                }
            };
        }
    },
    components: {
        StepperSeparator
    }
};
</script>
