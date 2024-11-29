<template>
    <component v-if="!asChild" :is="as" :class="cx('root')" v-bind="attrs">
        <slot></slot>
    </component>
    <slot v-else :class="cx('root')" :active="active" :a11yAttrs="a11yAttrs"></slot>
</template>

<script>
import { mergeProps } from 'vue';
import BaseAccordionPanel from './BaseAccordionPanel.vue';

export default {
    name: 'AccordionPanel',
    extends: BaseAccordionPanel,
    inheritAttrs: false,
    inject: ['$pcAccordion'],
    computed: {
        active() {
            return this.$pcAccordion.isItemActive(this.value);
        },
        attrs() {
            return mergeProps(this.a11yAttrs, this.ptmi('root', this.ptParams));
        },
        a11yAttrs() {
            return {
                'data-pc-name': 'accordionpanel',
                'data-p-disabled': this.disabled,
                'data-p-active': this.active
            };
        },
        ptParams() {
            return {
                context: {
                    active: this.active
                }
            };
        }
    }
};
</script>
