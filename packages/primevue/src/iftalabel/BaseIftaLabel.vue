<script>
import BaseComponent from '@primevue/core/basecomponent';
import IftaLabelStyle from 'primevue/iftalabel/style';

export default {
    name: 'BaseIftaLabel',
    extends: BaseComponent,
    style: IftaLabelStyle,
    provide() {
        return {
            $pcIftaLabel: this,
            $parentInstance: this
        };
    }
};
</script>
