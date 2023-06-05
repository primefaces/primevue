<template>
    <div v-focustrap :class="cx('root')" aria-live="polite" v-bind="ptm('root')" data-pc-name="inplace">
        <div v-if="!d_active" ref="display" :class="cx('display')" :tabindex="$attrs.tabindex || '0'" role="button" @click="open" @keydown.enter="open" v-bind="{ ...displayProps, ...ptm('display') }">
            <slot name="display"></slot>
        </div>
        <div v-else :class="cx('content')" v-bind="ptm('content')">
            <slot name="content"></slot>
            <IPButton v-if="closable" :aria-label="closeAriaLabel" @click="close" :unstyled="unstyled" :pt="ptm('closeButton')" v-bind="closeButtonProps">
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
import Button from 'primevue/button';
import FocusTrap from 'primevue/focustrap';
import TimesIcon from 'primevue/icons/times';
import BaseInplace from './BaseInplace.vue';

export default {
    name: 'Inplace',
    extends: BaseInplace,
    emits: ['open', 'close', 'update:active'],
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
