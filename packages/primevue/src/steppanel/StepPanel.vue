<template>
    <template v-if="isVertical">
        <template v-if="!asChild">
            <transition name="p-toggleable-content" v-bind="ptm('transition')">
                <component v-show="active" :is="as" :id="id" :class="cx('root')" role="tabpanel" :aria-controls="ariaControls" :data-p="dataP" v-bind="getPTOptions('root')">
                    <StepperSeparator v-if="isSeparatorVisible" :data-p="dataP" />
                    <div :class="cx('content')" :data-p="dataP" v-bind="getPTOptions('content')">
                        <slot :active="active" :activateCallback="(val) => updateValue(val)" />
                    </div>
                </component>
            </transition>
        </template>
        <slot v-else :active="active" :a11yAttrs="a11yAttrs" :activateCallback="(val) => updateValue(val)" />
    </template>
    <template v-else>
        <template v-if="!asChild">
            <component v-show="active" :is="as" :id="id" :class="cx('root')" role="tabpanel" :aria-controls="ariaControls" v-bind="getPTOptions('root')">
                <slot :active="active" :activateCallback="(val) => updateValue(val)" />
            </component>
        </template>
        <slot v-else-if="asChild && active" :active="active" :a11yAttrs="a11yAttrs" :activateCallback="(val) => updateValue(val)" />
    </template>
</template>

<script>
import { cn } from '@primeuix/utils';
import { find, findSingle } from '@primeuix/utils/dom';
import { findIndexInList } from '@primeuix/utils/object';
import StepperSeparator from '../stepper/StepperSeparator.vue';
import BaseStepPanel from './BaseStepPanel.vue';

export default {
    name: 'StepPanel',
    extends: BaseStepPanel,
    inheritAttrs: false,
    inject: {
        $pcStepper: { default: null },
        $pcStepItem: { default: null },
        $pcStepList: { default: null }
    },
    data() {
        return {
            isSeparatorVisible: false
        };
    },
    mounted() {
        if (this.$el) {
            let stepElements = find(this.$pcStepper.$el, '[data-pc-name="step"]');
            let stepPanelEl = findSingle(this.isVertical ? this.$pcStepItem?.$el : this.$pcStepList?.$el, '[data-pc-name="step"]');
            let stepPanelIndex = findIndexInList(stepPanelEl, stepElements);

            this.isSeparatorVisible = this.isVertical && stepPanelIndex !== stepElements.length - 1;
        }
    },
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    active: this.active
                }
            });
        },
        updateValue(val) {
            this.$pcStepper.updateValue(val);
        }
    },
    computed: {
        active() {
            let activeValue = !!this.$pcStepItem ? this.$pcStepItem?.value : this.value;

            return activeValue === this.$pcStepper?.d_value;
        },
        isVertical() {
            return !!this.$pcStepItem;
        },
        activeValue() {
            return this.isVertical ? this.$pcStepItem?.value : this.value;
        },
        id() {
            return `${this.$pcStepper?.$id}_steppanel_${this.activeValue}`;
        },
        ariaControls() {
            return `${this.$pcStepper?.$id}_step_${this.activeValue}`;
        },
        a11yAttrs() {
            return {
                id: this.id,
                role: 'tabpanel',
                'aria-controls': this.ariaControls,
                'data-pc-name': 'steppanel',
                'data-p-active': this.active
            };
        },
        dataP() {
            return cn({
                vertical: this.$pcStepItem != null
            });
        }
    },
    components: {
        StepperSeparator
    }
};
</script>
