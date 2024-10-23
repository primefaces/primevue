<script>
import BaseEditableHolder from '@primevue/core/baseeditableholder';
import SliderStyle from 'primevue/slider/style';

export default {
    name: 'BaseSlider',
    extends: BaseEditableHolder,
    props: {
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
        step: {
            type: Number,
            default: null
        },
        range: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: SliderStyle,
    provide() {
        return {
            $pcSlider: this,
            $parentInstance: this
        };
    }
};
</script>
