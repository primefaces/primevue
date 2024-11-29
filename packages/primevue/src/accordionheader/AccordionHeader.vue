<template>
    <component v-if="!asChild" :is="as" v-ripple :class="cx('root')" @click="onClick" v-bind="attrs">
        <slot :active="$pcAccordionPanel.active"></slot>
        <slot name="toggleicon" :active="$pcAccordionPanel.active" :class="cx('toggleicon')">
            <component
                v-if="$pcAccordionPanel.active"
                :is="$pcAccordion.$slots.collapseicon ? $pcAccordion.$slots.collapseicon : $pcAccordion.collapseIcon ? 'span' : 'ChevronDownIcon'"
                :class="[$pcAccordion.collapseIcon, cx('toggleicon')]"
                aria-hidden="true"
                v-bind="ptm('toggleicon', ptParams)"
            ></component>
            <component
                v-else
                :is="$pcAccordion.$slots.expandicon ? $pcAccordion.$slots.expandicon : $pcAccordion.expandIcon ? 'span' : 'ChevronUpIcon'"
                :class="[$pcAccordion.expandIcon, cx('toggleicon')]"
                aria-hidden="true"
                v-bind="ptm('toggleicon', ptParams)"
            ></component>
        </slot>
    </component>
    <slot v-else :class="cx('root')" :active="$pcAccordionPanel.active" :a11yAttrs="a11yAttrs" :onClick="onClick"></slot>
</template>

<script>
import { findSingle, getAttribute, focus } from '@primeuix/utils/dom';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import ChevronUpIcon from '@primevue/icons/chevronup';
import Ripple from 'primevue/ripple';
import { mergeProps } from 'vue';
import BaseAccordionHeader from './BaseAccordionHeader.vue';

export default {
    name: 'AccordionHeader',
    extends: BaseAccordionHeader,
    inheritAttrs: false,
    inject: ['$pcAccordion', '$pcAccordionPanel'],
    methods: {
        onFocus() {
            this.$pcAccordion.selectOnFocus && this.changeActiveValue();
        },
        onClick() {
            this.changeActiveValue();
        },
        onKeydown(event) {
            switch (event.code) {
                case 'ArrowDown':
                    this.onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    this.onArrowUpKey(event);
                    break;

                case 'Home':
                    this.onHomeKey(event);
                    break;

                case 'End':
                    this.onEndKey(event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    this.onEnterKey(event);
                    break;

                default:
                    break;
            }
        },
        onArrowDownKey(event) {
            const nextPanel = this.findNextPanel(this.findPanel(event.currentTarget));

            nextPanel ? this.changeFocusedPanel(event, nextPanel) : this.onHomeKey(event);
            event.preventDefault();
        },
        onArrowUpKey(event) {
            const prevPanel = this.findPrevPanel(this.findPanel(event.currentTarget));

            prevPanel ? this.changeFocusedPanel(event, prevPanel) : this.onEndKey(event);
            event.preventDefault();
        },
        onHomeKey(event) {
            const firstPanel = this.findFirstPanel();

            this.changeFocusedPanel(event, firstPanel);
            event.preventDefault();
        },
        onEndKey(event) {
            const lastPanel = this.findLastPanel();

            this.changeFocusedPanel(event, lastPanel);
            event.preventDefault();
        },
        onEnterKey(event) {
            this.changeActiveValue();
            event.preventDefault();
        },
        findPanel(headerElement) {
            return headerElement?.closest('[data-pc-name="accordionpanel"]');
        },
        findHeader(panelElement) {
            return findSingle(panelElement, '[data-pc-name="accordionheader"]');
        },
        findNextPanel(panelElement, selfCheck = false) {
            const element = selfCheck ? panelElement : panelElement.nextElementSibling;

            return element ? (getAttribute(element, 'data-p-disabled') ? this.findNextPanel(element) : this.findHeader(element)) : null;
        },
        findPrevPanel(panelElement, selfCheck = false) {
            const element = selfCheck ? panelElement : panelElement.previousElementSibling;

            return element ? (getAttribute(element, 'data-p-disabled') ? this.findPrevPanel(element) : this.findHeader(element)) : null;
        },
        findFirstPanel() {
            return this.findNextPanel(this.$pcAccordion.$el.firstElementChild, true);
        },
        findLastPanel() {
            return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild, true);
        },
        changeActiveValue() {
            this.$pcAccordion.updateValue(this.$pcAccordionPanel.value);
        },
        changeFocusedPanel(event, element) {
            focus(this.findHeader(element));
        }
    },
    computed: {
        id() {
            return `${this.$pcAccordion.id}_accordionheader_${this.$pcAccordionPanel.value}`;
        },
        ariaControls() {
            return `${this.$pcAccordion.id}_accordioncontent_${this.$pcAccordionPanel.value}`;
        },
        attrs() {
            return mergeProps(this.asAttrs, this.a11yAttrs, this.ptmi('root', this.ptParams));
        },
        asAttrs() {
            return this.as === 'BUTTON' ? { type: 'button', disabled: this.$pcAccordionPanel.disabled } : undefined;
        },
        a11yAttrs() {
            return {
                id: this.id,
                tabindex: this.$pcAccordion.tabindex,
                'aria-expanded': this.$pcAccordionPanel.active,
                'aria-controls': this.ariaControls,
                'data-pc-name': 'accordionheader',
                'data-p-disabled': this.$pcAccordionPanel.disabled,
                'data-p-active': this.$pcAccordionPanel.active,
                onFocus: this.onFocus,
                onKeydown: this.onKeydown
            };
        },
        ptParams() {
            return {
                context: {
                    active: this.$pcAccordionPanel.active
                }
            };
        }
    },
    components: {
        ChevronUpIcon,
        ChevronDownIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
