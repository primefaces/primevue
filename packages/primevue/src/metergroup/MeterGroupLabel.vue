<template>
    <ol :class="cx('labelList')" :data-p="dataP" v-bind="ptm('labelList')">
        <li v-for="(val, index) in value" :key="index + '_label'" :class="cx('label')" v-bind="ptm('label')">
            <slot name="icon" :value="val" :class="cx('labelIcon')">
                <i v-if="val.icon" :class="[val.icon, cx('labelIcon')]" :style="{ color: val.color }" v-bind="ptm('labelIcon')" />
                <span v-else :class="cx('labelMarker')" :style="{ backgroundColor: val.color }" v-bind="ptm('labelMarker')" />
            </slot>
            <span :class="cx('labelText')" v-bind="ptm('labelText')">{{ val.label }} ({{ $parentInstance.percentValue(val.value) }})</span>
        </li>
    </ol>
</template>

<script>
import { cn } from '@primeuix/utils';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'MeterGroupLabel',
    hostName: 'MeterGroup',
    extends: BaseComponent,
    inheritAttrs: false,
    inject: ['$pcMeterGroup'],
    props: {
        value: {
            type: Array,
            default: null
        },
        labelPosition: {
            type: String,
            default: 'end'
        },
        labelOrientation: {
            type: String,
            default: 'horizontal'
        }
    },
    computed: {
        dataP() {
            return cn({
                [this.$pcMeterGroup.labelOrientation]: this.$pcMeterGroup.labelOrientation
            });
        }
    }
};
</script>
