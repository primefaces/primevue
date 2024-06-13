<script>
import BaseComponent from '@primevue/core/basecomponent';
import ProgressBarStyle from 'primevue/progressbar/style';

export default {
    name: 'BaseProgressBar',
    extends: BaseComponent,
    props: {
        value: {
            type: Number,
            default: null
        },
        mode: {
            type: String,
            default: 'determinate'
        },
        showValue: {
            type: Boolean,
            default: true
        }
    },
    style: ProgressBarStyle,
    provide() {
        return {
            $pcProgressBar: this,
            $parentInstance: this
        };
    }
};
</script>
