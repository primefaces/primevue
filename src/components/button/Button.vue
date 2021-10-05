<template>
    <button :class="buttonClass" type="button" v-ripple :disabled="disabled">
        <slot>
            <Icon v-if="loading || icon" :icon="loading ? loadingIcon : icon" :class="iconClass"/>
            <span class="p-button-label">{{label||'&nbsp;'}}</span>
            <span v-if="badge" :class="badgeStyleClass">{{badge}}</span>
        </slot>
    </button>
</template>

<script>
import Ripple from 'primevue/ripple';
import Icon from 'primevue/icon';

export default {
    name: 'Button',
    props: {
        label: {
            type: String
        },
        icon: {
            type: [String, Object]
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        badge: {
            type: String
        },
        badgeClass: {
            type: String,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: [String, Object],
            default: () => ({ commonIcon: "spinner-spin", context:"Button" }),
        }
    },
    computed: {
        buttonClass() {
            return {
                'p-button p-component': true,
                'p-button-icon-only': this.icon && !this.label,
                'p-button-vertical': (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label,
                'p-disabled': this.$attrs.disabled || this.loading,
                'p-button-loading': this.loading,
                'p-button-loading-label-only': this.loading && !this.icon && this.label
            }
        },
        iconClass() {
            return [
                'p-button-icon',
                {
                    'p-button-icon-left': this.iconPos === 'left' && this.label,
                    'p-button-icon-right': this.iconPos === 'right' && this.label,
                    'p-button-icon-top': this.iconPos === 'top' && this.label,
                    'p-button-icon-bottom': this.iconPos === 'bottom' && this.label
                }
            ]
        },
        badgeStyleClass() {
            return [
                'p-badge p-component', this.badgeClass, {
                'p-badge-no-gutter': this.badge && String(this.badge).length === 1
            }]
        },
        disabled() {
            return this.$attrs.disabled || this.loading;
        }
    },
    directives: {
        'ripple': Ripple
    },
    components: {
        Icon,
    },
}
</script>
