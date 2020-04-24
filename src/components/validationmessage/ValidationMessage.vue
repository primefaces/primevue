<template>
    <div aria-live="polite" :class="containerClass">
        <span :class="iconClass"></span>
        <span class="p-message-text"><slot></slot></span>
    </div>
</template>

<script>
export default {
    props: {
        severity: {
            type: String,
            default: 'error'
        }
    },
    timeout: null,
    data() {
        return {
            visible: true
        }
    },
    mounted() {
        if (!this.sticky) {
            setTimeout(() => {
                this.visible = false;
            }, this.life);
        }
    },
    computed: {
        containerClass() {
            return 'p-message p-component p-message-' + this.severity;
        },
        iconClass() {
            return ['p-message-icon pi', {
                'pi-info-circle': this.severity === 'info',
                'pi-check': this.severity === 'success',
                'pi-exclamation-triangle': this.severity === 'warn',
                'pi-times-circle': this.severity === 'error'
            }];
        }
    }
}
</script>

<style>
.p-message {
    display: inline-flex;
    align-items: center;
}

.p-fluid .p-message {
    display: flex;
}
</style>
