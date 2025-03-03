<template>
    <div role="progressbar" :class="cx('root')" aria-valuemin="0" :aria-valuenow="value" aria-valuemax="100" v-bind="ptmi('root')" :data-p="dataP">
        <div v-if="determinate" :class="cx('value')" :style="progressStyle" v-bind="ptm('value')" :data-p="dataP">
            <div v-if="value != null && value !== 0 && showValue" :class="cx('label')" v-bind="ptm('label')" :data-p="dataP">
                <slot>{{ value + '%' }}</slot>
            </div>
        </div>
        <div v-else-if="indeterminate" :class="cx('value')" v-bind="ptm('value')" :data-p="dataP"></div>
    </div>
</template>

<script>
import { cn } from '@primeuix/utils';
import BaseProgressBar from './BaseProgressBar.vue';

export default {
    name: 'ProgressBar',
    extends: BaseProgressBar,
    inheritAttrs: false,
    computed: {
        progressStyle() {
            return {
                width: this.value + '%',
                display: 'flex'
            };
        },
        indeterminate() {
            return this.mode === 'indeterminate';
        },
        determinate() {
            return this.mode === 'determinate';
        },
        dataP() {
            return cn({
                determinate: this.determinate,
                indeterminate: this.indeterminate
            });
        }
    }
};
</script>
