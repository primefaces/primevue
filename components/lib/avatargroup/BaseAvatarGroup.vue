<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-avatar-group .p-avatar + .p-avatar {
    margin-left: -1rem;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}
`;

const classes = {
    root: 'p-avatar-group p-component'
};

const { load: loadStyle } = useStyle(styles, { name: 'avatargroup', manual: true });

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
