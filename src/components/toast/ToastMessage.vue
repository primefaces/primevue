<template>
    <div :class="containerClass" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="p-toast-message-content">
            <span :class="iconClass"></span>
            <div class="p-toast-message-text">
                <span class="p-toast-summary">{{message.summary}}</span>
                <div class="p-toast-detail">{{message.detail}}</div>
            </div>
            <button class="p-toast-icon-close p-link" @click="onCloseClick" v-if="message.closable !== false" type="button" v-ripple>
                <span class="p-toast-icon-close-icon pi pi-times"></span>
            </button>
        </div>
    </div>
</template>

<script>
import Ripple from '../ripple/Ripple';

export default {
    props: {
        message: null
    },
    closeTimeout: null,
    mounted() {
        if (this.message.life) {
            this.closeTimeout = setTimeout(() => {
                this.close();
            }, this.message.life)
        }
    },
    methods: {
        close() {
            this.$emit('close', this.message);
        },
        onCloseClick() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
            }

            this.close();
        }
    },
    computed: {
        containerClass() {
            return ['p-toast-message', {
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