<script>
import BaseComponent from '@primevue/core/basecomponent';
import AvatarStyle from 'primevue/avatar/style';

export default {
    name: 'BaseAvatar',
    extends: BaseComponent,
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: 'normal'
        },
        shape: {
            type: String,
            default: 'square'
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
    style: AvatarStyle,
    provide() {
        return {
            $pcAvatar: this,
            $parentInstance: this
        };
    }
};
</script>
