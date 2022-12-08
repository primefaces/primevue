<template>
    <fieldset :class="['p-fieldset p-component', { 'p-fieldset-toggleable': toggleable }]">
        <legend class="p-fieldset-legend">
            <slot v-if="!toggleable" name="legend">
                <span :id="ariaId + '_header'" class="p-fieldset-legend-text">{{ legend }}</span>
            </slot>
            <a
                v-if="toggleable"
                :id="ariaId + '_header'"
                v-ripple
                tabindex="0"
                role="button"
                :aria-controls="ariaId + '_content'"
                :aria-expanded="!d_collapsed"
                :aria-label="buttonAriaLabel"
                @click="toggle"
                @keydown="onKeyDown"
                v-bind="toggleButtonProps"
            >
                <span :class="iconClass"></span>
                <slot name="legend">
                    <span class="p-fieldset-legend-text">{{ legend }}</span>
                </slot>
            </a>
        </legend>
        <transition name="p-toggleable-content">
            <div v-show="!d_collapsed" :id="ariaId + '_content'" class="p-toggleable-content" role="region" :aria-labelledby="ariaId + '_header'">
                <div class="p-fieldset-content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </fieldset>
</template>

<script>
import Ripple from 'primevue/ripple';
import { UniqueComponentId } from 'primevue/utils';

export default {
    name: 'Fieldset',
    emits: ['update:collapsed', 'toggle'],
    props: {
        legend: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
            type: null,
            default: null
        }
    },
    data() {
        return {
            d_collapsed: this.collapsed
        };
    },
    watch: {
        collapsed(newValue) {
            this.d_collapsed = newValue;
        }
    },
    methods: {
        toggle(event) {
            this.d_collapsed = !this.d_collapsed;
            this.$emit('update:collapsed', this.d_collapsed);
            this.$emit('toggle', {
                originalEvent: event,
                value: this.d_collapsed
            });
        },
        onKeyDown(event) {
            if (event.code === 'Enter' || event.code === 'Space') {
                this.toggle(event);
                event.preventDefault();
            }
        }
    },
    computed: {
        iconClass() {
            return [
                'p-fieldset-toggler pi ',
                {
                    'pi-minus': !this.d_collapsed,
                    'pi-plus': this.d_collapsed
                }
            ];
        },
        ariaId() {
            return UniqueComponentId();
        },
        buttonAriaLabel() {
            return this.toggleButtonProps && this.toggleButtonProps['aria-label'] ? this.toggleButtonProps['aria-label'] : this.legend;
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>

<style>
.p-fieldset-legend > a,
.p-fieldset-legend > span {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-fieldset-toggleable .p-fieldset-legend a {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
}

.p-fieldset-legend-text {
    line-height: 1;
}
</style>
