<template>
    <div :class="cx('root')" v-bind="ptm('root')" data-pc-name="timeline">
        <div v-for="(item, index) of value" :key="getKey(item, index)" :class="cx('event')" v-bind="getPTOptions('event', index)">
            <div :class="cx('opposite', { index })" v-bind="getPTOptions('opposite', index)">
                <slot name="opposite" :item="item" :index="index"></slot>
            </div>
            <div :class="cx('separator')" v-bind="getPTOptions('separator', index)">
                <slot name="marker" :item="item" :index="index">
                    <div :class="cx('marker')" v-bind="getPTOptions('marker', index)"></div>
                </slot>
                <slot v-if="index !== value.length - 1" name="connector" :item="item" :index="index">
                    <div :class="cx('connector')" v-bind="getPTOptions('connector', index)"></div>
                </slot>
            </div>
            <div :class="cx('content')" v-bind="getPTOptions('content', index)">
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
        },
        getPTOptions(key, index) {
            return this.ptm(key, {
                context: {
                    index,
                    count: this.value.length
                }
            });
        }
    }
};
</script>
