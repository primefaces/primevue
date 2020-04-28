<template>
    <div ref="container">
        <slot v-if="loaded"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
           loaded: false
        }
    },
    mounted() {
        if (!this.loaded) {
            if (this.shouldLoad())
                this.load();
            else
                this.bindScrollListener();
        }
    },
    beforeDestroy() {
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
            }
            else {
                const rect = this.$refs.container.getBoundingClientRect();
                const docElement = document.documentElement;
                const winHeight = docElement.clientHeight;

                return (winHeight >= rect.top);
            }
        },
        load() {
            this.loaded = true;
            this.$emit('load', event);
        }
    }
}
</script>



    componentWillUnmount() {
        this.unbindScrollListener();
    }