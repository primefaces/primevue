<template>
    <div role="progressbar" :class="cx('root')" aria-valuemin="0" :aria-valuenow="value" aria-valuemax="100" v-bind="getPTOptions('root')">
        <div v-if="determinate" :class="cx('value')" :style="progressStyle" v-bind="getPTOptions('value')">
            <div v-if="value != null && value !== 0 && showValue" :class="cx('label')" v-bind="getPTOptions('label')">
                <slot>{{ value + '%' }}</slot>
            </div>
        </div>
        <div v-if="indeterminate" :class="cx('container')" v-bind="getPTOptions('container')">
            <div :class="cx('value')" v-bind="getPTOptions('value')"></div>
        </div>
    </div>
</template>

<script>
import BaseProgressBar from './BaseProgressBar.vue';

export default {
    name: 'ProgressBar',
    extends: BaseProgressBar,
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                parent: {
                    props: this.$parent?.$props,
                    state: this.$parent?.$data
                }
            });
        }
    },
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
        }
    }
};
</script>
