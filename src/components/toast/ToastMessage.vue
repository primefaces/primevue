<template>
    <div :class="containerClass" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="p-toast-message-content" :class="message.contentStyleClass">
            <ToastMessageTemplate v-if="templates['message']" :message="message" :template="templates['message']" />
            <template v-else>
                <span :class="iconClass"></span>
                <div class="p-toast-message-text">
                    <span class="p-toast-summary">{{message.summary}}</span>
                    <div class="p-toast-detail">{{message.detail}}</div>
                </div>
            </template>
            <button class="p-toast-icon-close p-link" @click="onCloseClick" v-if="message.closable !== false" type="button" v-ripple>
                <span class="p-toast-icon-close-icon pi pi-times"></span>
            </button>
        </div>
    </div>
</template>

<script>
import Ripple from '../ripple/Ripple';

const ToastMessageTemplate = {
    functional: true,
    props: {
        message: {
            type: null,
            default: null
        },
        template: {
            type: null,
            default: null
        }
    },
    render(createElement, context) {
        const content = context.props.template({
            'message': context.props.message
        });

        return [content];
    }
};

export default {
    props: {
        message: null,
        templates: null
    },
    closeTimeout: null,
    mounted() {
        if (this.message.life) {
            this.closeTimeout = setTimeout(() => {
                this.close();
            }, this.message.life)
        }
    },
    beforeDestroy() {
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
    components: {
        'ToastMessageTemplate': ToastMessageTemplate
    },
    directives: {
        'ripple': Ripple
    }
}
</script>