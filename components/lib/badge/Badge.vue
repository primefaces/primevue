<template>
    <span :class="cx('root')" v-bind="getPTOptions('root')" data-pc-name="badge">
        <slot>{{ value }}</slot>
    </span>
</template>

<script>
import BaseBadge from './BaseBadge.vue';

export default {
    name: 'Badge',
    extends: BaseBadge,
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                parent: {
                    props: this.$parent?.$props,
                    state: this.$parent?.$data
                }
            });
        }
    }
};
</script>
