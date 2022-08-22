<template>
    <div :class="getTabClass()">
        <div :class="getTabHeaderClass()">
            <a role="tab" class="p-accordion-header-link" @click="onTabClick" @keydown="onTabKeydown" :tabindex="disabled ? null : '0'"
                :aria-expanded="isTabActive()" :id="ariaId + '_header'" :aria-controls="ariaId + '_content'">
                <span :class="isTabActive() ? getHeaderCollapseIcon() : getHeaderExpandIcon()"></span>
                <span class="p-accordion-header-text" v-if="header">{{header}}</span>
                <slot name="header"></slot>
            </a>
        </div>
        <transition name="p-toggleable-content">
            <div class="p-toggleable-content" v-show="isTabActive()" role="region" :id="ariaId + '_content'" :aria-labelledby="ariaId + '_header'">
                <div class="p-accordion-content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import UniqueComponentId from '../utils/UniqueComponentId';
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        header: null,
        disabled: Boolean
    },
    data() {
        return {
            index: null
        }
    },
    created() {
        this.$parent.$children.forEach((child, i) => {
            if (child === this) this.index = i
        })
    },
    methods: {
        onTabClick(event) {
            if (!this.disabled) {
                this.$parent.onToggle(event, this, DomHandler.index(this.$el), this.isTabActive());
            }
        },
        onTabKeydown(event) {
            if (event.which === 13) {
                this.onTabClick(event);
            }
        },
        isTabActive() {
            let activeArray = this.$parent.d_activeIndex;
            return this.$parent.multiple ? activeArray && activeArray.includes(this.index) : this.index === activeArray;
        },
        getTabClass() {
            return ['p-accordion-tab', {'p-accordion-tab-active': this.isTabActive()}];
        },
        getTabHeaderClass() {
            return ['p-accordion-header', {'p-highlight': this.isTabActive(), 'p-disabled': this.disabled}]
        },
        getHeaderCollapseIcon() {
            return ['p-accordion-toggle-icon pi', this.$parent.collapseIcon];
        },
        getHeaderExpandIcon() {
            return ['p-accordion-toggle-icon pi', this.$parent.expandIcon];
        },
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        }
    }
}
</script>