<template>
    <fieldset :class="['p-fieldset p-component', {'p-fieldset-toggleable': toggleable}]">
        <legend class="p-fieldset-legend p-unselectable-text">
            <slot name="legend" v-if="!toggleable">
                <span class="p-fieldset-legend-text" :id="ariaId + '_header'">{{legend}}</span>
            </slot>
            <a tabindex="0" v-if="toggleable" @click="toggle" @keydown.enter="toggle"
                :id="ariaId +  '_header'" :aria-controls="ariaId + '_content'" :aria-expanded="!d_collapsed">
                <span :class="iconClass"></span>
                <slot name="legend">
                    <span class="p-fieldset-legend-text">{{legend}}</span>
                </slot>
            </a>
        </legend>
        <transition name="p-fieldset-content-wrapper">
            <div class="p-fieldset-content-wrapper" v-show="!d_collapsed"
                role="region" :id="ariaId + '_content'" :aria-labelledby="ariaId + '_header'">
                <div class="p-fieldset-content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </fieldset>
</template>

<script>
import UniqueComponentId from '../utils/UniqueComponentId';

export default {
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
			return ['p-fieldset-toggler  pi ', {
				'pi-minus': !this.d_collapsed,
				'pi-plus': this.d_collapsed
			}]
        },
        ariaId() {
            return UniqueComponentId();
        }
	}
}
</script>

<style>
.p-fieldset,
.p-fieldset .p-fieldset-legend {
    padding: 0.5em 1em;
}

.p-fieldset-toggleable .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggleable .p-fieldset-legend a {
    padding: 0.5em 1em;
    cursor:pointer;
    white-space: nowrap;
    display: block;
}

.p-fieldset .p-fieldset-toggler {
    margin-right: .1em;
    display: inline-block;
    vertical-align: middle;
}

.p-fieldset .p-fieldset-legend-text {
    vertical-align: middle;
}

.p-fieldset-content-wrapper-enter,
.p-fieldset-content-wrapper-leave-to {
    max-height: 0;
}

.p-fieldset-content-wrapper-enter-to,
.p-fieldset-content-wrapper-leave {
    max-height: 1000px;
}

.p-fieldset-content-wrapper-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-fieldset-content-wrapper-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}
</style>
