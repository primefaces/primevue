<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
import { uuid } from '@primeuix/utils';
import BaseCheckboxGroup from './BaseCheckboxGroup.vue';

export default {
    name: 'CheckboxGroup',
    extends: BaseCheckboxGroup,
    inheritAttrs: false,
    data() {
        return {
            groupName: this.name
        };
    },
    watch: {
        name(newValue) {
            this.groupName = newValue || uuid('checkbox-group-');
        }
    },
    mounted() {
        this.groupName = this.groupName || uuid('checkbox-group-');
    }
};
</script>
