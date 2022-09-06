<template>
    <fieldset :class="['p-fieldset p-component', {'p-fieldset-toggleable': toggleable}]">
        <legend class="p-fieldset-legend">
            <slot name="legend" v-if="!toggleable">
                <span class="p-fieldset-legend-text" :id="ariaId + '_header'">{{legend}}</span>
            </slot>
            <a tabindex="0" v-if="toggleable" @click="toggle" @keydown.enter="toggle" v-ripple
                :id="ariaId +  '_header'" :aria-controls="ariaId + '_content'" :aria-expanded="!d_collapsed">
                <span :class="iconClass"></span>
                <slot name="legend">
                    <span class="p-fieldset-legend-text">{{legend}}</span>
                </slot>
            </a>
        </legend>
        <transition name="p-toggleable-content">
            <div class="p-toggleable-content" v-show="!d_collapsed"
                role="region" :id="ariaId + '_content'" :aria-labelledby="ariaId + '_header'">
                <div class="p-fieldset-content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </fieldset>
</template>

<script>
import {UniqueComponentId} from 'primevue/utils';
import Ripple from 'primevue/ripple';

export default {
    name: 'Fieldset',
    emits: ['update:collapsed', 'toggle'],
    props: {
        legend: String,
        toggleable: Boolean,
        collapsed: Boolean
    },
    data() {
        return {
           d_collapsed: this.collapsed
        }
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
        }
    },
	computed: {
		iconClass() {
			return ['p-fieldset-toggler pi ', {
				'pi-minus': !this.d_collapsed,
				'pi-plus': this.d_collapsed
			}]
        },
        ariaId() {
            return UniqueComponentId();
        }
    },
    directives: {
        'ripple': Ripple
    }
}
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
