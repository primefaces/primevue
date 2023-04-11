<template>
    <div :class="containerClass" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="p-toast-message-content" :class="message.contentStyleClass">
            <template v-if="!template">
                <slot name="icon">
                    <component :is="icon ? 'span' : iconComponent" :class="['p-toast-message-icon', icon]"></component>
                </slot>
                <div class="p-toast-message-text">
                    <span class="p-toast-summary">{{ message.summary }}</span>
                    <div class="p-toast-detail">{{ message.detail }}</div>
                </div>
            </template>
            <component v-else :is="template" :message="message"></component>
            <div v-if="message.closable !== false">
                <button v-ripple class="p-toast-icon-close p-link" type="button" :aria-label="closeAriaLabel" @click="onCloseClick" autofocus v-bind="closeButtonProps">
                    <slot name="closeIcon">
                        <component :is="closeIcon ? 'span' : 'TimesIcon'" :class="['p-toast-icon-close-icon', closeIcon]"></component>
                    </slot>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Ripple from 'primevue/ripple';
import TimesIcon from 'primevue/icon/times';
import InfoCircleIcon from 'primevue/icon/infocircle';
import CheckIcon from 'primevue/icon/check';
import ExclamationTriangleIcon from 'primevue/icon/exclamationtriangle';
import TimesCircleIcon from 'primevue/icon/timescircle';
export default {
    name: 'ToastMessage',
    emits: ['close'],
    props: {
        message: {
            type: null,
            default: null
        },
        template: {
            type: null,
            default: null
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        icon: {
            type: String,
            default: undefined
        },
        closeButtonProps: {
            type: null,
            default: null
        }
    },
    closeTimeout: null,
    mounted() {
        if (this.message.life) {
            this.closeTimeout = setTimeout(() => {
                this.close({ message: this.message, type: 'life-end' });
            }, this.message.life);
        }
    },
    beforeUnmount() {
        this.clearCloseTimeout();
    },
    methods: {
        close(params) {
            this.$emit('close', params);
        },
        onCloseClick() {
            this.clearCloseTimeout();
            this.close({ message: this.message, type: 'close' });
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
            return [
                'p-toast-message',
                this.message.styleClass,
                {
                    'p-toast-message-info': this.message.severity === 'info',
                    'p-toast-message-warn': this.message.severity === 'warn',
                    'p-toast-message-error': this.message.severity === 'error',
                    'p-toast-message-success': this.message.severity === 'success'
                }
            ];
        },
        iconComponent() {
            return {
                info: InfoCircleIcon,
                success: CheckIcon,
                warn: ExclamationTriangleIcon,
                error: TimesCircleIcon
            }[this.message.severity];
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        }
    },
    components: {
        TimesIcon,
        InfoCircleIcon,
        CheckIcon,
        ExclamationTriangleIcon,
        TimesCircleIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
