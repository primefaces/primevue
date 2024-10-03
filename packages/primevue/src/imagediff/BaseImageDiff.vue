<script>
import BaseComponent from '@primevue/core/basecomponent';
import ImageDiffStyle from 'primevue/imagediff/style';

export default {
    name: 'BaseImageDiff',
    extends: BaseComponent,
    props: {},
    style: ImageDiffStyle,
    provide() {
        return {
            $pcImageDiff: this,
            $parentInstance: this
        };
    }
};
</script>
