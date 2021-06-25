<template>
    <span :class="containerClass" v-bind="$attrs">
        <slot>
            <span :class="iconClass" v-if="icon"></span>
            <span class="p-tag-value">{{value}}</span>
        </slot>
    </span>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    computed: {
        containerClass() {
            return ['p-tag p-component', {
                'p-tag-info': this.severity === 'info',
                'p-tag-success': this.severity === 'success',
                'p-tag-warning': this.severity === 'warning',
                'p-tag-danger': this.severity === 'danger',
                'p-tag-rounded': this.rounded
            }];
        },
        iconClass() {
            return ['p-tag-icon', this.icon];
        }
    }
}
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
