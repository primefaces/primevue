<template>
    <component v-if="!asChild" :is="as" v-ripple :class="cx('root')" :data-p="dataP" @click="onClick" v-bind="attrs">
        <slot></slot>
    </component>
    <slot v-else :dataP="dataP" :class="cx('root')" :active="active" :a11yAttrs="a11yAttrs" :onClick="onClick"></slot>
</template>

<script>
import { cn } from '@primeuix/utils';
import { findSingle, focus, getAttribute } from '@primeuix/utils/dom';
import { equals } from '@primeuix/utils/object';
import Ripple from 'primevue/ripple';
import { mergeProps } from 'vue';
import BaseTab from './BaseTab.vue';

export default {
    name: 'Tab',
    extends: BaseTab,
    inheritAttrs: false,
    inject: ['$pcTabs', '$pcTabList'],
    methods: {
        onFocus() {
            this.$pcTabs.selectOnFocus && this.changeActiveValue();
        },
        onClick() {
            this.changeActiveValue();
        },
        onKeydown(event) {
            switch (event.code) {
                case 'ArrowRight':
                    this.onArrowRightKey(event);
                    break;

                case 'ArrowLeft':
                    this.onArrowLeftKey(event);
                    break;

                case 'Home':
                    this.onHomeKey(event);
                    break;

                case 'End':
                    this.onEndKey(event);
                    break;

                case 'PageDown':
                    this.onPageDownKey(event);
                    break;

                case 'PageUp':
                    this.onPageUpKey(event);
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
        onArrowRightKey(event) {
            const nextTab = this.findNextTab(event.currentTarget);

            nextTab ? this.changeFocusedTab(event, nextTab) : this.onHomeKey(event);
            event.preventDefault();
        },
        onArrowLeftKey(event) {
            const prevTab = this.findPrevTab(event.currentTarget);

            prevTab ? this.changeFocusedTab(event, prevTab) : this.onEndKey(event);
            event.preventDefault();
        },
        onHomeKey(event) {
            const firstTab = this.findFirstTab();

            this.changeFocusedTab(event, firstTab);
            event.preventDefault();
        },
        onEndKey(event) {
            const lastTab = this.findLastTab();

            this.changeFocusedTab(event, lastTab);
            event.preventDefault();
        },
        onPageDownKey(event) {
            this.scrollInView(this.findLastTab());
            event.preventDefault();
        },
        onPageUpKey(event) {
            this.scrollInView(this.findFirstTab());
            event.preventDefault();
        },
        onEnterKey(event) {
            this.changeActiveValue();
            event.preventDefault();
        },
        findNextTab(tabElement, selfCheck = false) {
            const element = selfCheck ? tabElement : tabElement.nextElementSibling;

            return element ? (getAttribute(element, 'data-p-disabled') || getAttribute(element, 'data-pc-section') === 'activebar' ? this.findNextTab(element) : findSingle(element, '[data-pc-name="tab"]')) : null;
        },
        findPrevTab(tabElement, selfCheck = false) {
            const element = selfCheck ? tabElement : tabElement.previousElementSibling;

            return element ? (getAttribute(element, 'data-p-disabled') || getAttribute(element, 'data-pc-section') === 'activebar' ? this.findPrevTab(element) : findSingle(element, '[data-pc-name="tab"]')) : null;
        },
        findFirstTab() {
            return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild, true);
        },
        findLastTab() {
            return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild, true);
        },
        changeActiveValue() {
            this.$pcTabs.updateValue(this.value);
        },
        changeFocusedTab(event, element) {
            focus(element);
            this.scrollInView(element);
        },
        scrollInView(element) {
            element?.scrollIntoView?.({ block: 'nearest' });
        }
    },
    computed: {
        active() {
            return equals(this.$pcTabs?.d_value, this.value);
        },
        id() {
            return `${this.$pcTabs?.$id}_tab_${this.value}`;
        },
        ariaControls() {
            return `${this.$pcTabs?.$id}_tabpanel_${this.value}`;
        },
        attrs() {
            return mergeProps(this.asAttrs, this.a11yAttrs, this.ptmi('root', this.ptParams));
        },
        asAttrs() {
            return this.as === 'BUTTON' ? { type: 'button', disabled: this.disabled } : undefined;
        },
        a11yAttrs() {
            return {
                id: this.id,
                tabindex: this.active ? this.$pcTabs.tabindex : -1,
                role: 'tab',
                'aria-selected': this.active,
                'aria-controls': this.ariaControls,
                'data-pc-name': 'tab',
                'data-p-disabled': this.disabled,
                'data-p-active': this.active,
                onFocus: this.onFocus,
                onKeydown: this.onKeydown
            };
        },
        ptParams() {
            return {
                context: {
                    active: this.active
                }
            };
        },
        dataP() {
            return cn({
                active: this.active
            });
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
