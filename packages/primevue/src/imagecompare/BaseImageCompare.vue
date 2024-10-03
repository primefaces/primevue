<script>
import BaseComponent from '@primevue/core/basecomponent';
import ImageCompareStyle from 'primevue/imagecompare/style';

export default {
    name: 'BaseImageCompare',
    extends: BaseComponent,
    props: {},
    style: ImageCompareStyle,
    provide() {
        return {
            $pcImageCompare: this,
            $parentInstance: this
        };
    }
};
</script>
