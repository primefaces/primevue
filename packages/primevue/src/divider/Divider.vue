<template>
    <div :class="cx('root')" :style="sx('root')" role="separator" :aria-orientation="layout" :data-p="dataP" v-bind="ptmi('root')">
        <div v-if="$slots.default" :class="cx('content')" :data-p="dataP" v-bind="ptm('content')">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { cn } from '@primeuix/utils';
import BaseDivider from './BaseDivider.vue';

export default {
    name: 'Divider',
    extends: BaseDivider,
    inheritAttrs: false,
    computed: {
        dataP() {
            return cn({
                [this.align]: this.align,
                [this.layout]: this.layout,
                [this.type]: this.type
            });
        }
    }
};
</script>
