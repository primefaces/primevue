<template>
    <button :class="buttonClass" v-on="$listeners">
        <span v-if="icon" :class="iconClass"></span>
        <span class="p-button-text">{{label||'&nbsp;'}}</span>
    </button>
</template>

<script>
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
        }
    },
    computed: {
        buttonClass() {
            return {
                'p-button p-component': true,
                'p-button-icon-only': this.icon && !this.label,
                'p-disabled': this.disabled
            }
        },
        iconClass() {
            return [
                this.icon,
                'p-button-icon',
                {
                    'p-button-icon-left': this.iconPos === 'left' && this.label,
                    'p-button-icon-right': this.iconPos === 'right' && this.label
                }
            ]
        }
    }
}
</script>
