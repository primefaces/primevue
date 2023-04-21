<template>
    <span :class="badgeClass" v-bind="ptm('root')">
        <slot>{{ value }}</slot>
    </span>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import { ObjectUtils } from 'primevue/utils';

export default {
    name: 'Badge',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: null
        },
        severity: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null
        }
    },
    computed: {
        containerClass() {
            return this.$slots.default ? 'p-overlay-badge' : this.badgeClass;
        },
        badgeClass() {
            return [
                'p-badge p-component',
                {
                    'p-badge-no-gutter': ObjectUtils.isNotEmpty(this.value) && String(this.value).length === 1,
                    'p-badge-dot': ObjectUtils.isEmpty(this.value) && !this.$slots.default,
                    'p-badge-lg': this.size === 'large',
                    'p-badge-xl': this.size === 'xlarge',
                    'p-badge-info': this.severity === 'info',
                    'p-badge-success': this.severity === 'success',
                    'p-badge-warning': this.severity === 'warning',
                    'p-badge-danger': this.severity === 'danger'
                }
            ];
        }
    }
};
</script>
