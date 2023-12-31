<template>
    <div v-if="!visible" class="demo-section-loading">Loading...</div>
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
.demo-section-loading {
    display: grid;
    place-items: center;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    font-size: 2rem;
    height: 350px;
    background: var(--maskbg);
}
</style>
