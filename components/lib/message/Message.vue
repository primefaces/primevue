<template>
    <transition name="p-message" appear v-bind="getPTOptions('transition')">
        <div v-show="visible" :class="cx('root')" role="alert" aria-live="assertive" aria-atomic="true" v-bind="getPTOptions('root')" data-pc-name="message">
            <slot v-if="$slots.container" name="container" :onClose="close" :closeCallback="close"></slot>
            <div v-else :class="cx('wrapper')" v-bind="getPTOptions('wrapper')">
                <slot name="messageicon" class="p-message-icon">
                    <component :is="icon ? 'span' : iconComponent" :class="[cx('icon'), icon]" v-bind="getPTOptions('icon')"></component>
                </slot>
                <div class="p-message-text" :class="cx('text')" v-bind="getPTOptions('text')">
                    <slot></slot>
                </div>
                <button v-if="closable" v-ripple :class="cx('closeButton')" :aria-label="closeAriaLabel" type="button" @click="close($event)" v-bind="{ ...closeButtonProps, ...getPTOptions('button'), ...getPTOptions('closeButton') }">
                    <slot name="closeicon">
                        <i v-if="closeIcon" :class="[cx('closeIcon'), closeIcon]" v-bind="{ ...getPTOptions('buttonIcon'), ...getPTOptions('closeIcon') }" />
                        <TimesIcon v-else :class="[cx('closeIcon'), closeIcon]" v-bind="{ ...getPTOptions('buttonIcon'), ...getPTOptions('closeIcon') }" />
                    </slot>
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
import CheckIcon from 'primevue/icons/check';
import ExclamationTriangleIcon from 'primevue/icons/exclamationtriangle';
import InfoCircleIcon from 'primevue/icons/infocircle';
import TimesIcon from 'primevue/icons/times';
import TimesCircleIcon from 'primevue/icons/timescircle';
import Ripple from 'primevue/ripple';
import BaseMessage from './BaseMessage.vue';

export default {
    name: 'Message',
    extends: BaseMessage,
    emits: ['close'],
    timeout: null,
    data() {
        return {
            visible: true
        };
    },
    watch: {
        sticky(newValue) {
            if (!newValue) {
                this.closeAfterDelay();
            }
        }
    },
    mounted() {
        if (!this.sticky) {
            this.closeAfterDelay();
        }
    },
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                parent: {
                    props: this.$parent?.$props,
                    state: this.$parent?.$data
                }
            });
        },
        close(event) {
            this.visible = false;
            this.$emit('close', event);
        },
        closeAfterDelay() {
            setTimeout(() => {
                this.visible = false;
            }, this.life);
        }
    },
    computed: {
        iconComponent() {
            return {
                info: InfoCircleIcon,
                success: CheckIcon,
                warn: ExclamationTriangleIcon,
                error: TimesCircleIcon
            }[this.severity];
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        TimesIcon,
        InfoCircleIcon,
        CheckIcon,
        ExclamationTriangleIcon,
        TimesCircleIcon
    }
};
</script>
