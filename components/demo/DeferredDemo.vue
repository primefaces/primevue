<template>
    <div v-if="!visible">
        <div class="card">
            <div class="deferred-demo-loading"></div>
        </div>
    </div>
    <slot v-else></slot>
</template>

<script>
export default {
    name: 'DeferredDemo',
    emits: ['load'],
    props: {
        options: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            visible: false
        };
    },
    observer: null,
    timeout: null,
    mounted() {
        this.observer = new IntersectionObserver(([entry]) => {
            clearTimeout(this.timeout);

            if (entry.isIntersecting) {
                this.timeout = setTimeout(() => {
                    this.visible = true;
                    this.observer.unobserve(this.$el);
                    this.$emit('load');
                }, 350);
            }
        }, this.options);

        this.observer.observe(this.$el);
    },
    beforeUnmount() {
        !this.visible && this.$el && this.observer?.unobserve(this.$el);
        clearTimeout(this.timeout);
    }
};
</script>
<style>
.deferred-demo-loading {
    border-radius: 10px;
    height: 350px;
    position: relative;
    overflow: hidden;
}

.deferred-demo-loading::after {
    content: '';
    animation: deferred-demo-loading 1.2s infinite;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    transform: translateX(-100%);
    z-index: 1;
    border-radius: 10px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), var(--hover-background), rgba(255, 255, 255, 0));
}

@keyframes deferred-demo-loading {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
</style>
