<template>
    <div aria-live="polite" :class="containerClass" v-bind="ptm('root')">
        <slot name="icon">
            <component :is="icon ? 'span' : iconComponent" :class="['p-inline-message-icon', icon]" v-bind="ptm('icon')"></component>
        </slot>
        <span class="p-inline-message-text" v-bind="ptm('text')">
            <slot>&nbsp;</slot>
        </span>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import CheckIcon from 'primevue/icons/check';
import ExclamationTriangleIcon from 'primevue/icons/exclamationtriangle';
import InfoCircleIcon from 'primevue/icons/infocircle';
import TimesCircleIcon from 'primevue/icons/timescircle';

export default {
    name: 'InlineMessage',
    extends: BaseComponent,
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
