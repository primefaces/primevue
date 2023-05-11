<template>
    <div v-focustrap :class="containerClass" aria-live="polite" v-bind="ptm('root')">
        <div v-if="!d_active" ref="display" :class="displayClass" :tabindex="$attrs.tabindex || '0'" role="button" @click="open" @keydown.enter="open" v-bind="{ ...displayProps, ...ptm('display') }">
            <slot name="display"></slot>
        </div>
        <div v-else class="p-inplace-content" v-bind="ptm('content')">
            <slot name="content"></slot>
            <IPButton v-if="closable" :aria-label="closeAriaLabel" @click="close" :pt="ptm('closeButton')" v-bind="closeButtonProps">
                <template #icon>
                    <slot name="closeicon">
                        <component :is="closeIcon ? 'span' : 'TimesIcon'" :class="closeIcon" v-bind="ptm('closeButton')['icon']"></component>
                    </slot>
                </template>
            </IPButton>
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import Button from 'primevue/button';
import FocusTrap from 'primevue/focustrap';
import TimesIcon from 'primevue/icons/times';

export default {
    name: 'Inplace',
    extends: BaseComponent,
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
            default: undefined
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
        IPButton: Button,
        TimesIcon
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
