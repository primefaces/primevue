<template>
    <div aria-live="polite" :class="containerClass">
        <slot name="icon">
            <component :is="icon ? 'span' : iconComponent" :class="['p-inline-message-icon', icon]"></component>
        </slot>
        <span class="p-inline-message-text"><slot>&nbsp;</slot></span>
    </div>
</template>

<script>
import CheckIcon from 'primevue/icon/check';
import ExclamationTriangleIcon from 'primevue/icon/exclamationtriangle';
import InfoCircleIcon from 'primevue/icon/infocircle';
import TimesCircleIcon from 'primevue/icon/timescircle';

export default {
    name: 'InlineMessage',
    props: {
        severity: {
            type: String,
            default: 'error'
        },
        icon: {
            type: String,
            default: undefined
        }
    },
    timeout: null,
    data() {
        return {
            visible: true
        };
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
            return ['p-inline-message p-component p-inline-message-' + this.severity, { 'p-inline-message-icon-only': !this.$slots.default }];
        },
        iconComponent() {
            return {
                info: InfoCircleIcon,
                success: CheckIcon,
                warn: ExclamationTriangleIcon,
                error: TimesCircleIcon
            }[this.severity];
        }
    }
};
</script>

<style>
.p-inline-message {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
}

.p-inline-message-icon-only .p-inline-message-text {
    visibility: hidden;
    width: 0;
}

.p-fluid .p-inline-message {
    display: flex;
}
</style>
