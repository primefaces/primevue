<template>
    <span :class="containerClass">
        <template v-if="!$slots.default">{{value}}</template>
        <template v-else>
            <slot>
            </slot>
            <span :class="badgeClass">{{value}}</span>
        </template>
    </span>
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

<style>
.p-badge {
    display: inline-block;
    border-radius: 50%;
    text-align: center;
}

.p-overlay-badge {
    position: relative;
    display: inline-block;
}

.p-overlay-badge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(1em, -1em);
    margin: 0;
}
</style>
