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
    border: 1px solid;
    margin: 0px .25em;
    padding: .25em .5em;
    display: inline-block;
    vertical-align: top;
}

.p-message .p-message-icon,
.p-message .p-message-text {
    vertical-align: middle;
}

.p-fluid .p-message {
    display: block;
}
</style>
