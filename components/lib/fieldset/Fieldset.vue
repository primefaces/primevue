<template>
    <fieldset :class="classes.root" v-bind="ptm('root')">
        <legend :class="classes.legend" v-bind="ptm('legend')">
            <slot v-if="!toggleable" name="legend">
                <span :id="ariaId + '_header'" :class="classes.legendtitle" v-bind="ptm('legendtitle')">{{ legend }}</span>
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
                    <component :is="d_collapsed ? 'PlusIcon' : 'MinusIcon'" :class="classes.togglericon" v-bind="ptm('togglericon')" />
                </slot>
                <slot name="legend">
                    <span :class="classes.legendtitle" v-bind="ptm('legendtitle')">{{ legend }}</span>
                </slot>
            </a>
        </legend>
        <transition name="p-toggleable-content">
            <div v-show="!d_collapsed" :id="ariaId + '_content'" :class="classes.toggleablecontent" role="region" :aria-labelledby="ariaId + '_header'" v-bind="ptm('toggleablecontent')">
                <div :class="classes.content" v-bind="ptm('content')">
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
import { useStyle } from 'primevue/usestyle';
import { UniqueComponentId } from 'primevue/utils';
import { getComputedClasses, styles } from './FieldsetStyle';

const styleInstance = useStyle(styles, { id: 'primevue_fieldset_style', manual: true });

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
        },
        isUnstyled: {
            immediate: true,
            handler(newValue) {
                !newValue && styleInstance.load();
            }
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
        },
        classes() {
            return this.isUnstyled ? {} : getComputedClasses(this.$props, this.$data);
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
