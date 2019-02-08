<template>
    <transition name="p-toast-message">
        <div :class="containerClass">
            <div class="p-toast-item">
                <button class="p-toast-icon-close p-link" @click="close">
                    <span class="p-toast-icon-close-icon pi pi-times"></span>
                </button>
                <span :class="iconClass"></span>
                <div class="p-toast-message">
                    <span class="p-toast-title">{{message.summary}}</span>
                    <div class="p-toast-detail">{{message.detail}}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        message: null
    },
    mounted() {
        
    },
    methods: {
        close() {
            this.$emit('close', this.message);
        }
    },
    computed: {
        containerClass() {
            return ['p-toast-item-container p-highlight', {
                'p-toast-message-info': this.message.severity === 'info',
                'p-toast-message-warn': this.message.severity === 'warn',
                'p-toast-message-error': this.message.severity === 'error',
                'p-toast-message-success': this.message.severity === 'success'
            }];
        },
        iconClass() {
            return ['p-toast-image pi', {
                'pi-info-circle': this.message.severity === 'info',
                'pi-exclamation-triangle': this.message.severity === 'warn',
                'pi-times': this.message.severity === 'error',
                'pi-check': this.message.severity === 'success'
            }];
        }
    }
}
</script>