<template>
    <div :class="containerClass">
        <div class="p-messages-wrapper">
            <span :class="iconClass"></span>
            <div class="p-messages-text">
                <slot></slot>
            </div> 
            <button class="p-messages-close p-link">
                <i class="p-messages-close-icon pi pi-times-circle"></i>
            </button>   
        </div>
    </div>
</template>

<script>
export default {
    props: {
        summary: String,
        detail: String,
        severity: {
            type: String,
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: true
        },
        sticky: {
            type: Boolean,
            default: true
        },
        life: {
            type: Number,
            default: 3000
        }
    },
    computed: {
        containerClass() {
            return 'p-messages p-component p-messages-' + this.severity;
        },
        iconClass() {
            return ['p-messages-icon pi', {
                'pi-check': this.severity === 'info',
                'pi-info-circle': this.severity === 'success',
                'pi-exclamation-triangle': this.severity === 'warn',
                'pi-times': this.severity === 'error'
            }];
        }
    }
}
</script>

<style>

</style>
