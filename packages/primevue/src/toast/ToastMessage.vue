<template>
    <div :class="[cx('message'), message.styleClass]" role="alert" aria-live="assertive" aria-atomic="true" :data-p="dataP" v-bind="ptm('message')" @click="onMessageClick" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <component v-if="templates.container" :is="templates.container" :message="message" :closeCallback="onCloseClick" />
        <div v-else :class="[cx('messageContent'), message.contentStyleClass]" v-bind="ptm('messageContent')">
            <template v-if="!templates.message">
                <component :is="templates.messageicon ? templates.messageicon : templates.icon ? templates.icon : iconComponent && iconComponent.name ? iconComponent : 'span'" :class="cx('messageIcon')" v-bind="ptm('messageIcon')" />
                <div :class="cx('messageText')" :data-p="dataP" v-bind="ptm('messageText')">
                    <span :class="cx('summary')" :data-p="dataP" v-bind="ptm('summary')">{{ message.summary }}</span>
                    <div v-if="message.detail" :class="cx('detail')" :data-p="dataP" v-bind="ptm('detail')">{{ message.detail }}</div>
                </div>
            </template>
            <component v-else :is="templates.message" :message="message"></component>
            <div v-if="message.closable !== false" v-bind="ptm('buttonContainer')">
                <button v-ripple :class="cx('closeButton')" type="button" :aria-label="closeAriaLabel" @click="onCloseClick" autofocus :data-p="dataP" v-bind="{ ...closeButtonProps, ...ptm('closeButton') }">
                    <component :is="templates.closeicon || 'TimesIcon'" :class="[cx('closeIcon'), closeIcon]" v-bind="ptm('closeIcon')" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { cn } from '@primeuix/utils';
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
    createdAt: null,
    lifeRemaining: null,
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
        },
        onMouseEnter: {
            type: Function,
            default: undefined
        },
        onMouseLeave: {
            type: Function,
            default: undefined
        },
        onClick: {
            type: Function,
            default: undefined
        }
    },
    mounted() {
        if (this.message.life) {
            this.lifeRemaining = this.message.life;
            this.startTimeout();
        }
    },
    beforeUnmount() {
        this.clearCloseTimeout();
    },
    methods: {
        startTimeout() {
            this.createdAt = new Date().valueOf();
            this.closeTimeout = setTimeout(() => {
                this.close({ message: this.message, type: 'life-end' });
            }, this.lifeRemaining);
        },
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
        },
        onMessageClick(event) {
            this.onClick?.({ originalEvent: event, message: this.message });
        },
        handleMouseEnter(event) {
            if (this.onMouseEnter) {
                this.onMouseEnter({ originalEvent: event, message: this.message });

                if (event.defaultPrevented) {
                    return;
                }

                if (this.message.life) {
                    this.lifeRemaining = this.createdAt + this.lifeRemaining - new Date().valueOf();
                    this.createdAt = null;
                    this.clearCloseTimeout();
                }
            }
        },
        handleMouseLeave(event) {
            if (this.onMouseLeave) {
                this.onMouseLeave({ originalEvent: event, message: this.message });

                if (event.defaultPrevented) {
                    return;
                }

                if (this.message.life) {
                    this.startTimeout();
                }
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
        },
        dataP() {
            return cn({
                [this.message.severity]: this.message.severity
            });
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
