<template>
    <ol :class="cx('labellist')" v-bind="ptm('labellist')">
        <li v-for="(val, index) in value" :key="index + '_label'" :class="cx('labellistitem')" v-bind="ptm('labellistitem')">
            <slot name="icon" :value="val" :class="cx('labelicon')">
                <i v-if="val.icon" :class="[val.icon, cx('labelicon')]" :style="{ color: val.color }" v-bind="ptm('labelicon')" />
                <span v-else :class="cx('labellisttype')" :style="{ backgroundColor: val.color }" v-bind="ptm('labellisttype')" />
            </slot>
            <span :class="cx('label')" v-bind="ptm('label')">{{ val.label }} ({{ $parentInstance.percentValue(val.value) }})</span>
        </li>
    </ol>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'MeterGroupLabel',
    hostName: 'MeterGroup',
    extends: BaseComponent,
    inheritAttrs: false,
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
    }
};
</script>
