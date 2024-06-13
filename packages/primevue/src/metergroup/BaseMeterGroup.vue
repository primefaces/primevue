<script>
import BaseComponent from '@primevue/core/basecomponent';
import MeterGroupStyle from 'primevue/metergroup/style';

export default {
    name: 'MeterGroup',
    extends: BaseComponent,
    props: {
        value: {
            type: Array,
            default: null
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        orientation: {
            type: String,
            default: 'horizontal'
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
    style: MeterGroupStyle,
    provide() {
        return {
            $pcMeterGroup: this,
            $parentInstance: this
        };
    }
};
</script>
