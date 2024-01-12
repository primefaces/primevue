<template>
    <div :class="cx('root')" role="meter" :aria-valuemin="min" :aria-valuemax="max" :aria-valuenow="totalPercent" v-bind="ptm('root')" data-pc-name="metergroup">
        <slot v-if="labelPosition === 'start'" name="label" :value="value" :totalPercent="totalPercentValue()">
            <ol :class="cx('labellist')" v-bind="ptm('labellist')">
                <li v-for="(val, index) in value" :key="index + '_label'" :class="cx('labellistitem')" v-bind="ptm('labellistitem')">
                    <slot name="icon" :value="val" :class="cx('labelicon')">
                        <i v-if="val.icon" :class="[val.icon, cx('labelicon')]" :style="{ color: val.color }" v-bind="ptm('labelicon')" />
                        <span v-else :class="cx('labellisttype')" :style="{ backgroundColor: val.color }" v-bind="ptm('labellisttype')" />
                    </slot>
                    <span :class="cx('label')" v-bind="ptm('label')">{{ val.label }} ({{ percentValue(val.value) }})</span>
                </li>
            </ol>
        </slot>
        <slot name="start" :value="value" :totalPercent="totalPercentValue()" />{{}}
        <div :class="cx('metercontainer')" v-bind="ptm('metercontainer')">
            <template v-for="(val, index) in value" :key="index">
                <slot
                    name="meter"
                    :value="val"
                    :index="index"
                    :class="cx('meter')"
                    :orientation="orientation"
                    :width="orientation === 'horizontal' && percentValue(val.value)"
                    :height="orientation === 'vertical' && percentValue(val.value)"
                    :totalPercent="totalPercentValue()"
                >
                    <span
                        :class="cx('meter')"
                        :style="{ backgroundColor: val.color, width: orientation === 'horizontal' && percentValue(val.value), height: orientation === 'vertical' && percentValue(val.value) }"
                        v-bind="getPTOptions('meter', val, index)"
                    />
                </slot>
            </template>
        </div>
        <slot name="end" :value="value" :totalPercent="totalPercentValue()" />
        <slot v-if="labelPosition === 'end'" name="label" :value="value" :totalPercent="totalPercentValue()">
            <ol :class="cx('labellist')" v-bind="ptm('labellist')">
                <li v-for="(val, index) in value" :key="index + '_label'" :class="cx('labellistitem')" v-bind="ptm('labellistitem')">
                    <span :class="cx('labellisttype')" :style="{ backgroundColor: val.color }" v-bind="ptm('labellisttype')" />
                    <span :class="cx('label')" v-bind="ptm('label')">{{ val.label }} ({{ percentValue(val.value) }})</span>
                </li>
            </ol>
        </slot>
    </div>
</template>

<script>
import BaseMeterGroup from './BaseMeterGroup.vue';

export default {
    name: 'MeterGroup',
    extends: BaseMeterGroup,
    methods: {
        getPTOptions(key, value, index) {
            return this.ptm(key, {
                context: {
                    value,
                    index
                }
            });
        },
        percent(meter) {
            const percentOfItem = ((meter - this.min) / (this.max - this.min)) * 100;

            return Math.round(Math.max(0, Math.min(100, percentOfItem)));
        },
        percentValue(meter) {
            return this.percent(meter) + '%';
        },
        totalPercentValue() {
            return this.totalPercent + '%';
        }
    },
    computed: {
        totalPercent() {
            return this.percent(this.value.reduce((total, val) => total + val.value, 0));
        }
    }
};
</script>
