<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
import { uuid } from '@primeuix/utils';
import BaseRadioButtonGroup from './BaseRadioButtonGroup.vue';

export default {
    name: 'RadioButtonGroup',
    extends: BaseRadioButtonGroup,
    inheritAttrs: false,
    data() {
        return {
            groupName: this.name
        };
    },
    watch: {
        name(newValue) {
            this.groupName = newValue || uuid('radiobutton-group-');
        }
    },
    mounted() {
        this.groupName = this.groupName || uuid('radiobutton-group-');
    }
};
</script>
