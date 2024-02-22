<template>
    <div :class="cx('root')" role="meter" :aria-valuemin="min" :aria-valuemax="max" :aria-valuenow="totalPercent" v-bind="ptmi('root')">
        <slot v-if="labelPosition === 'start'" name="label" :value="value" :totalPercent="totalPercent" :percentages="percentages">
            <MeterGroupLabel :value="value" :labelPosition="labelPosition" :labelOrientation="labelOrientation" :unstyled="unstyled" :pt="pt" />
        </slot>
        <slot name="start" :value="value" :totalPercent="totalPercent" :percentages="percentages" />
        <div :class="cx('metercontainer')" v-bind="ptm('metercontainer')">
            <template v-for="(val, index) in value" :key="index">
                <slot name="meter" :value="val" :index="index" :class="cx('meter')" :orientation="orientation" :size="percentValue(val.value)" :totalPercent="totalPercent">
                    <span v-if="percent(val.value)" :class="cx('meter')" :style="meterSize(val)" v-bind="getPTOptions('meter', val, index)" />
                </slot>
            </template>
        </div>
        <slot name="end" :value="value" :totalPercent="totalPercent" :percentages="percentages" />
        <slot v-if="labelPosition === 'end'" name="label" :value="value" :totalPercent="totalPercent" :percentages="percentages">
            <MeterGroupLabel :value="value" :labelPosition="labelPosition" :labelOrientation="labelOrientation" :unstyled="unstyled" :pt="pt" />
        </slot>
    </div>
</template>

<script>
import BaseMeterGroup from './BaseMeterGroup.vue';
import MeterGroupLabel from './MeterGroupLabel.vue';

export default {
    name: 'MeterGroup',
    extends: BaseMeterGroup,
    inheritAttrs: false,
    methods: {
        getPTOptions(key, value, index) {
            return this.ptm(key, {
                context: {
                    value,
                    index
                }
            });
        },
        percent(meter = 0) {
            const percentOfItem = ((meter - this.min) / (this.max - this.min)) * 100;

            return Math.round(Math.max(0, Math.min(100, percentOfItem)));
        },
        percentValue(meter) {
            return this.percent(meter) + '%';
        },
        meterSize(val) {
            return {
                backgroundColor: val.color,
                width: this.orientation === 'horizontal' && this.percentValue(val.value),
                height: this.orientation === 'vertical' && this.percentValue(val.value)
            };
        }
    },
    computed: {
        totalPercent() {
            return this.percent(this.value.reduce((total, val) => total + val.value, 0));
        },
        percentages() {
            let sum = 0;
            const sumsArray = [];

            this.value.forEach((item) => {
                sum += item.value;
                sumsArray.push(sum);
            });

            return sumsArray;
        }
    },
    components: {
        MeterGroupLabel
    }
};
</script>
