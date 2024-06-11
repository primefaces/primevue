<script>
import BaseComponent from '@primevue/core/basecomponent';
import SkeletonStyle from 'primevue/skeleton/style';

export default {
    name: 'BaseSkeleton',
    extends: BaseComponent,
    props: {
        shape: {
            type: String,
            default: 'rectangle'
        },
        size: {
            type: String,
            default: null
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '1rem'
        },
        borderRadius: {
            type: String,
            default: null
        },
        animation: {
            type: String,
            default: 'wave'
        }
    },
    style: SkeletonStyle,
    provide() {
        return {
            $pcSkeleton: this,
            $parentInstance: this
        };
    }
};
</script>
