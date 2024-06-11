<template>
    <div :class="[cx('message'), message.styleClass]" role="alert" aria-live="assertive" aria-atomic="true" v-bind="ptm('message')">
        <component v-if="templates.container" :is="templates.container" :message="message" :closeCallback="onCloseClick" />
        <div v-else :class="[cx('messageContent'), message.contentStyleClass]" v-bind="ptm('messageContent')">
            <template v-if="!templates.message">
                <component :is="templates.messageicon ? templates.messageicon : templates.icon ? templates.icon : iconComponent && iconComponent.name ? iconComponent : 'span'" :class="cx('messageIcon')" v-bind="ptm('messageIcon')" />
                <div :class="cx('messageText')" v-bind="ptm('messageText')">
                    <span :class="cx('summary')" v-bind="ptm('summary')">{{ message.summary }}</span>
                    <div :class="cx('detail')" v-bind="ptm('detail')">{{ message.detail }}</div>
                </div>
            </template>
            <component v-else :is="templates.message" :message="message"></component>
            <div v-if="message.closable !== false" v-bind="ptm('buttonContainer')">
                <button v-ripple :class="cx('closeButton')" type="button" :aria-label="closeAriaLabel" @click="onCloseClick" autofocus v-bind="{ ...closeButtonProps, ...ptm('closeButton') }">
                    <component :is="templates.closeicon || 'TimesIcon'" :class="[cx('closeIcon'), closeIcon]" v-bind="ptm('closeIcon')" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import BaseComponent from '@primevue/core/basecomponent';
import CheckIcon from '@primevue/icons/check';
import ExclamationTriangleIcon from '@primevue/icons/exclamationtriangle';
import InfoCircleIcon from '@primevue/icons/infocircle';
import TimesIcon from '@primevue/icons/times';
import TimesCircleIcon from '@primevue/icons/timescircle';
import Ripple from 'primevue/ripple';

export default {
    name: 'ToastMessage',
    hostName: 'Toast',
    extends: BaseComponent,
    emits: ['close'],
    closeTimeout: null,
    props: {
        message: {
            type: null,
            default: null
        },
        templates: {
            type: Object,
            default: null
        },
        closeIcon: {
            type: String,
            default: null
        },
        infoIcon: {
            type: String,
            default: null
        },
        warnIcon: {
            type: String,
            default: null
        },
        errorIcon: {
            type: String,
            default: null
        },
        successIcon: {
            type: String,
            default: null
        },
        closeButtonProps: {
            type: null,
            default: null
        }
    },
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
        iconComponent() {
            return {
                info: !this.infoIcon && InfoCircleIcon,
                success: !this.successIcon && CheckIcon,
                warn: !this.warnIcon && ExclamationTriangleIcon,
                error: !this.errorIcon && TimesCircleIcon
            }[this.message.severity];
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        }
    },
    components: {
        TimesIcon: TimesIcon,
        InfoCircleIcon: InfoCircleIcon,
        CheckIcon: CheckIcon,
        ExclamationTriangleIcon: ExclamationTriangleIcon,
        TimesCircleIcon: TimesCircleIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
