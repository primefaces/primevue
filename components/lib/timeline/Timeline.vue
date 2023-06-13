<template>
    <div :class="cx('root')" v-bind="ptm('root')" data-pc-name="timeline">
        <div v-for="(item, index) of value" :key="getKey(item, index)" :class="cx('event')" v-bind="ptm('event')">
            <div :class="cx('opposite')" v-bind="ptm('opposite')">
                <slot name="opposite" :item="item" :index="index"></slot>
            </div>
            <div :class="cx('separator')" v-bind="ptm('separator')">
                <slot name="marker" :item="item" :index="index">
                    <div :class="cx('marker')" v-bind="ptm('marker')"></div>
                </slot>
                <slot v-if="index !== value.length - 1" name="connector" :item="item" :index="index">
                    <div :class="cx('connector')" v-bind="ptm('connector')"></div>
                </slot>
            </div>
            <div :class="cx('content')" v-bind="ptm('content')">
                <slot name="content" :item="item" :index="index"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { ObjectUtils } from 'primevue/utils';
import BaseTimeline from './BaseTimeline.vue';

export default {
    name: 'Timeline',
    extends: BaseTimeline,
    methods: {
        getKey(item, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index;
        }
    }
};
</script>
