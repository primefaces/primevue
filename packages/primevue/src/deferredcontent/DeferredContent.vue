<template>
    <div ref="container" v-bind="ptmi('root')">
        <slot v-if="loaded"></slot>
    </div>
</template>

<script>
import BaseComponent from '@primevue/core/basecomponent';
import DeferredContentStyle from 'primevue/deferredcontent/style';

export default {
    name: 'DeferredContent',
    extends: BaseComponent,
    inheritAttrs: false,
    emits: ['load'],
    style: DeferredContentStyle,
    data() {
        return {
            loaded: false
        };
    },
    mounted() {
        if (!this.loaded) {
            if (this.shouldLoad()) this.load();
            else this.bindScrollListener();
        }
    },
    beforeUnmount() {
        this.unbindScrollListener();
    },
    methods: {
        bindScrollListener() {
            this.documentScrollListener = () => {
                if (this.shouldLoad()) {
                    this.load();
                    this.unbindScrollListener();
                }
            };

            window.addEventListener('scroll', this.documentScrollListener);
        },
        unbindScrollListener() {
            if (this.documentScrollListener) {
                window.removeEventListener('scroll', this.documentScrollListener);
                this.documentScrollListener = null;
            }
        },
        shouldLoad() {
            if (this.loaded) {
                return false;
            } else {
                const rect = this.$refs.container.getBoundingClientRect();
                const docElement = document.documentElement;
                const winHeight = docElement.clientHeight;

                return winHeight >= rect.top;
            }
        },
        load(event) {
            this.loaded = true;
            this.$emit('load', event);
        }
    }
};
</script>
