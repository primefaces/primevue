<template>
    <span :class="badgeClass">{{value}}</span>
</template>

<script>
export default {
    props: {
        value: null,
        severity: null,
        size: null
    },
    computed: {
        containerClass() {
            return this.$slots.default ? 'p-overlay-badge': this.badgeClass;
        },
        badgeClass() {
            return ['p-badge p-component', {
                'p-badge-no-gutter': this.value && String(this.value).length === 1,
                'p-badge-dot': !this.value,
                'p-badge-lg': this.size === 'large',
                'p-badge-xl': this.size === 'xlarge',
                'p-badge-info': this.severity === 'info',
                'p-badge-success': this.severity === 'success',
                'p-badge-warning': this.severity === 'warning',
                'p-badge-danger': this.severity === 'danger'
            }];
        }
    }
}
</script>