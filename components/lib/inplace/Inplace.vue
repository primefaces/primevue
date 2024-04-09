<template>
    <div :class="cx('root')" aria-live="polite" v-bind="ptmi('root')">
        <div v-if="!d_active" ref="display" :class="cx('display')" :tabindex="$attrs.tabindex || '0'" role="button" @click="open" @keydown.enter="open" v-bind="{ ...displayProps, ...ptm('display') }">
            <slot name="display"></slot>
        </div>
        <div v-else :class="cx('content')" v-bind="ptm('content')">
            <slot name="content" :closeCallback="close" />
        </div>
    </div>
</template>

<script>
import BaseInplace from './BaseInplace.vue';

export default {
    name: 'Inplace',
    extends: BaseInplace,
    inheritAttrs: false,
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

            this.d_active = true;

            this.$emit('open', event);
            this.$emit('update:active', true);
        },
        close(event) {
            this.d_active = false;

            this.$emit('close', event);
            this.$emit('update:active', false);

            setTimeout(() => {
                this.$refs.display.focus();
            }, 0);
        }
    }
};
</script>
