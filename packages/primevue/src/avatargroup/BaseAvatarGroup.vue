<script>
import BaseComponent from '@primevue/core/basecomponent';
import AvatarGroupStyle from 'primevue-vaultic/avatargroup/style';

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    style: AvatarGroupStyle,
    provide() {
        return {
            $pcAvatarGroup: this,
            $parentInstance: this
        };
    }
};
</script>
