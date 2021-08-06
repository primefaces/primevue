<template>
    <div :class="containerClass" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="p-toast-message-content" :class="message.contentStyleClass">
            <template v-if="!template">
                <span :class="iconClass"></span>
                <div class="p-toast-message-text">
                    <span class="p-toast-summary">{{message.summary}}</span>
                    <div class="p-toast-detail">{{message.detail}}</div>
                </div>
            </template>
            <component v-else :is="template" :message="message"></component>
            <button class="p-toast-icon-close p-link" @click="onCloseClick" v-if="message.closable !== false" type="button" v-ripple>
                <span class="p-toast-icon-close-icon pi pi-times"></span>
            </button>
        </div>
    </div>
</template>

<script>
import Ripple from 'primevue/ripple';

export default {
    name: 'ToastMessage',
    emits: ['close'],
    props: {
        message: null,
        template: null
    },
    closeTimeout: null,
    mounted() {
        if (this.message.life) {
            this.closeTimeout = setTimeout(() => {
                this.close();
            }, this.message.life)
        }
    },
    beforeUnmount() {
        this.clearCloseTimeout();
    },
    methods: {
        close() {
            this.$emit('close', this.message);
        },
        onCloseClick() {
            this.clearCloseTimeout();
            this.close();
        },
        clearCloseTimeout() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null;
            }
        }
    },
    computed: {
        containerClass() {
            return ['p-toast-message', this.message.styleClass, {
                'p-toast-message-info': this.message.severity === 'info',
                'p-toast-message-warn': this.message.severity === 'warn',
                'p-toast-message-error': this.message.severity === 'error',
                'p-toast-message-success': this.message.severity === 'success'
            }];
        },
        iconClass() {
            return ['p-toast-message-icon pi', {
                'pi-info-circle': this.message.severity === 'info',
                'pi-exclamation-triangle': this.message.severity === 'warn',
                'pi-times': this.message.severity === 'error',
                'pi-check': this.message.severity === 'success'
            }];
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
