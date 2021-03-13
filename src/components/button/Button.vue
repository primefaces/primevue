<template>
    <button :class="buttonClass" :type="type" v-ripple>
        <slot>
            <span v-if="icon" :class="iconClass"></span>
            <span class="p-button-label">{{label||'&nbsp;'}}</span>
            <span v-if="badge" :class="badgeStyleClass">{{badge}}</span>
        </slot>
    </button>
</template>

<script>
import Ripple from 'primevue/ripple';

export default {
    props: {
        type: {
            type: String,
            default: 'button',
            validator: function (value) {
                return ['button', 'submit', 'reset'].indexOf(value) !== -1
            }
        },
        label: {
            type: String
        },
        icon: {
            type: String
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
        }
    },
    computed: {
        buttonClass() {
            return {
                'p-button p-component': true,
                'p-button-icon-only': this.icon && !this.label,
                'p-button-vertical': (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label,
                'p-disabled': this.$attrs.disabled
            }
        },
        iconClass() {
            return [
                this.icon,
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
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
