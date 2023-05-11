<template>
    <span :class="containerClass" v-bind="ptm('root')">
        <component v-if="$slots.icon" :is="$slots.icon" class="p-tag-icon" v-bind="ptm('icon')" />
        <span v-else-if="icon" :class="iconClass" v-bind="ptm('icon')"></span>
        <slot>
            <span class="p-tag-value" v-bind="ptm('value')">{{ value }}</span>
        </slot>
    </span>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'Tag',
    extends: BaseComponent,
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    computed: {
        containerClass() {
            return [
                'p-tag p-component',
                {
                    'p-tag-info': this.severity === 'info',
                    'p-tag-success': this.severity === 'success',
                    'p-tag-warning': this.severity === 'warning',
                    'p-tag-danger': this.severity === 'danger',
                    'p-tag-rounded': this.rounded
                }
            ];
        },
        iconClass() {
            return ['p-tag-icon', this.icon];
        }
    }
};
</script>

<style>
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.p-tag-icon,
.p-tag-value,
.p-tag-icon.pi {
    line-height: 1.5;
}

.p-tag.p-tag-rounded {
    border-radius: 10rem;
}
</style>
