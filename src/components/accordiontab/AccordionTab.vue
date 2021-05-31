<template>
    <div :class="['p-accordion-tab', {'p-accordion-tab-active': showPanel}]">
        <div :class="['p-accordion-header', {'p-highlight': showPanel, 'p-disabled': disabled}]">
            <a role="tab" class="p-accordion-header-link" @click="onTabClick" @keydown="onTabKeydown" :tabindex="disabled ? null : '0'"
                :aria-expanded="showPanel" :id="ariaId + '_header'" :aria-controls="ariaId + '_content'">
                <span :class="['p-accordion-toggle-icon pi', {'pi-chevron-right': !showPanel, 'pi-chevron-down': showPanel}]"></span>
                <span class="p-accordion-header-text" v-if="header">{{header}}</span>
                <slot name="header"></slot>
            </a>
        </div>
        <transition name="p-toggleable-content">
            <div class="p-toggleable-content" v-if="showPanel"
                role="region" :id="ariaId + '_content'" :aria-labelledby="ariaId + '_header'">
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
            el: null
        }
    },
    mounted() {
        this.el = this.$el;
    },
    methods: {
        onTabClick() {
            if (!this.disabled) {
                this.$parent.onToggle(this, DomHandler.index(this.el));
            }
        },
        onTabKeydown(event) {
            if (event.which === 13) {
                this.onTabClick(event);
            }
        },
        findIsActive() {
            return this.isTabActive(DomHandler.index(this.el));
        },
        isTabActive(index) {
            let activeArray = this.$parent.d_activeIndex;

            if (this.$parent.multiple) {
                return activeArray && activeArray.includes(index);
            }
            else
                return index === activeArray;
        },
    },
    computed: {
        showPanel() {
            if (this.el) {
                return this.findIsActive();
            }
            return false;
        },
        ariaId() {
            return UniqueComponentId();
        }
    }
}
</script>