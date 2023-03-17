<template>
    <div v-focustrap :class="containerClass" aria-live="polite">
        <div v-if="!d_active" ref="display" :class="displayClass" :tabindex="$attrs.tabindex || '0'" role="button" @click="open" @keydown.enter="open" v-bind="displayProps">
            <slot name="display"></slot>
        </div>
        <div v-else class="p-inplace-content">
            <slot name="content"></slot>
            <IPButton v-if="closable" :icon="closeIcon" :aria-label="closeAriaLabel" @click="close" v-bind="closeButtonProps" />
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import FocusTrap from 'primevue/focustrap';

export default {
    name: 'Inplace',
    emits: ['open', 'close', 'update:active'],
    props: {
        closable: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        closeIcon: {
            type: String,
            default: 'pi pi-times'
        },
        displayProps: {
            type: null,
            default: null
        },
        closeButtonProps: {
            type: null,
            default: null
        }
    },
    data() {
        return {
            d_active: this.active
        };
    },
    watch: {
        active(newValue) {
            this.d_active = newValue;
        }
    },
    methods: {
        open(event) {
            if (this.disabled) {
                return;
            }

            this.$emit('open', event);
            this.d_active = true;
            this.$emit('update:active', true);
        },
        close(event) {
            this.$emit('close', event);
            this.d_active = false;
            this.$emit('update:active', false);
            setTimeout(() => {
                this.$refs.display.focus();
            }, 0);
        }
    },
    computed: {
        containerClass() {
            return ['p-inplace p-component', { 'p-inplace-closable': this.closable }];
        },
        displayClass() {
            return ['p-inplace-display', { 'p-disabled': this.disabled }];
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        }
    },
    components: {
        IPButton: Button
    },
    directives: {
        focustrap: FocusTrap
    }
};
</script>

<style>
.p-inplace .p-inplace-display {
    display: inline;
    cursor: pointer;
}

.p-inplace .p-inplace-content {
    display: inline;
}

.p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
    display: flex;
}

.p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
    flex: 1 1 auto;
    width: 1%;
}
</style>
