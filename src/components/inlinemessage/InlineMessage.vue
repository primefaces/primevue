<template>
    <div aria-live="polite" :class="containerClass">
        <Icon class="p-inline-message-icon" :icon="icon" />
        <span class="p-inline-message-text"><slot>&nbsp;</slot></span>
    </div>
</template>

<script>
import Icon from 'primevue/icon';

export default {
    name: 'InlineMessage',
    props: {
        severity: {
            type: String,
            default: 'error'
        }
    },
    timeout: null,
    data() {
        return {
            visible: true
        }
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
            return ['p-inline-message p-component p-inline-message-' + this.severity, {'p-inline-message-icon-only': !this.$slots.default}];
        },
        icon() {
            let icon = 'QUESTION';

            switch (this.severity) {
                case 'info':
                    icon = 'info-circle';
                    break;
                case 'success':
                    icon = 'check';
                    break;
                case 'warn':
                    icon = 'exclamation-triangle';
                    break;
                case 'error':
                    icon = 'times-circle';
                    break;
            }

            return {
                commonIcon: icon,
                context: 'InlineMessage',
            }
        }
    },
    components: {
        'Icon': Icon
    }
}
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
