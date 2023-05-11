<template>
    <fieldset :class="['p-fieldset p-component', { 'p-fieldset-toggleable': toggleable }]" v-bind="ptm('root')">
        <legend class="p-fieldset-legend" v-bind="ptm('legend')">
            <slot v-if="!toggleable" name="legend">
                <span :id="ariaId + '_header'" class="p-fieldset-legend-text" v-bind="ptm('legendtitle')">{{ legend }}</span>
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
                v-bind="{ ...toggleButtonProps, ...ptm('toggler') }"
            >
                <slot name="togglericon" :collapsed="d_collapsed">
                    <component :is="d_collapsed ? 'PlusIcon' : 'MinusIcon'" class="p-fieldset-toggler" v-bind="ptm('togglericon')" />
                </slot>
                <slot name="legend">
                    <span class="p-fieldset-legend-text" v-bind="ptm('legendtitle')">{{ legend }}</span>
                </slot>
            </a>
        </legend>
        <transition name="p-toggleable-content">
            <div v-show="!d_collapsed" :id="ariaId + '_content'" class="p-toggleable-content" role="region" :aria-labelledby="ariaId + '_header'" v-bind="ptm('toggleablecontent')">
                <div class="p-fieldset-content" v-bind="ptm('content')">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </fieldset>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import MinusIcon from 'primevue/icons/minus';
import PlusIcon from 'primevue/icons/plus';
import Ripple from 'primevue/ripple';
import { UniqueComponentId } from 'primevue/utils';

export default {
    name: 'Fieldset',
    extends: BaseComponent,
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
        ariaId() {
            return UniqueComponentId();
        },
        buttonAriaLabel() {
            return this.toggleButtonProps && this.toggleButtonProps['aria-label'] ? this.toggleButtonProps['aria-label'] : this.legend;
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        PlusIcon,
        MinusIcon
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
