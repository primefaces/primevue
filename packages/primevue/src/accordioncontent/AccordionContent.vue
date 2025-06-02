<template>
    <template v-if="!asChild">
        <transition name="p-toggleable-content" v-bind="ptm('transition', ptParams)">
            <component v-if="$pcAccordion.lazy ? $pcAccordionPanel.active : true" v-show="$pcAccordion.lazy ? true : $pcAccordionPanel.active" :is="as" :class="cx('root')" v-bind="attrs">
                <div :class="cx('content')" v-bind="ptm('content', ptParams)">
                    <slot></slot>
                </div>
            </component>
        </transition>
    </template>
    <slot v-else :class="cx('root')" :active="$pcAccordionPanel.active" :a11yAttrs="a11yAttrs"></slot>
</template>

<script>
import { mergeProps } from 'vue';
import BaseAccordionContent from './BaseAccordionContent.vue';

export default {
    name: 'AccordionContent',
    extends: BaseAccordionContent,
    inheritAttrs: false,
    inject: ['$pcAccordion', '$pcAccordionPanel'],
    computed: {
        id() {
            return `${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`;
        },
        ariaLabelledby() {
            return `${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`;
        },
        attrs() {
            return mergeProps(this.a11yAttrs, this.ptmi('root', this.ptParams));
        },
        a11yAttrs() {
            return {
                id: this.id,
                role: 'region',
                'aria-labelledby': this.ariaLabelledby,
                'data-pc-name': 'accordioncontent',
                'data-p-active': this.$pcAccordionPanel.active
            };
        },
        ptParams() {
            return {
                context: {
                    active: this.$pcAccordionPanel.active
                }
            };
        }
    }
};
</script>
