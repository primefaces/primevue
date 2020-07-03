<template>
    <div :class="['p-accordion-tab', {'p-accordion-tab-active': d_active}]">
        <div :class="['p-accordion-header', {'p-highlight': d_active, 'p-disabled': disabled}]">
            <a role="tab" class="p-accordion-header-link" @click="onTabClick" @keydown="onTabKeydown" :tabindex="disabled ? null : '0'"
                :aria-expanded="d_active" :id="ariaId + '_header'" :aria-controls="ariaId + '_content'">
                <span :class="['p-accordion-toggle-icon pi', {'pi-chevron-right': !d_active, 'pi-chevron-down': d_active}]"></span>
                <span class="p-accordion-header-text" v-if="header">{{header}}</span>
                <slot name="header"></slot>
            </a>
        </div>
        <transition name="p-toggleable-content">
            <div class="p-toggleable-content" v-show="d_active"
                role="region" :id="ariaId + '_content' " :aria-labelledby="ariaId + '_header'">
                <div class="p-accordion-content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import UniqueComponentId from '../utils/UniqueComponentId';

export default {
    props: {
        header: null,
        active: Boolean,
        disabled: Boolean
    },
    data() {
        return {
            d_active: this.active
        }
    },
    watch: {
        active(newValue) {
            this.d_active = newValue;
        }
    },
    methods: {
        onTabClick(event) {
            if (!this.disabled) {
                this.$parent.onToggle(this);

                const newActiveState = !this.d_active;
                this.d_active = newActiveState;
                this.$emit('update:active', newActiveState);

                let eventName = newActiveState ? 'tab-open' : 'tab-close';
                this.$parent.$emit(eventName, {
                    originalEvent: event,
                    tab: this
                });
            }
        },
        onTabKeydown(event) {
            if (event.which === 13) {
                this.onTabClick(event);
            }
        }
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        }
    }
}
</script>