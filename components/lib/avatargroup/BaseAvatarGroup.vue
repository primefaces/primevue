<script>
import AvatarGroupStyle from 'primevue/avatargroup/style';
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    style: AvatarGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
