<template>
    <button :class="buttonClass" v-on="$listeners" type="button" v-ripple>
        <slot>
            <span v-if="icon" :class="iconClass"></span>
            <span class="p-button-label">{{label||'&nbsp;'}}</span>
            <span class="p-badge" v-if="badge" :class="badgeClass">{{badge}}</span>
        </slot>
    </button>
</template>

<script>
import Ripple from '../ripple/Ripple';

export default {
    props: {
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
                'p-disabled': this.disabled
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
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
