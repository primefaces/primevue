import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`;

const classes = {
    root: 'p-avatar-group p-component'
};

export default BaseStyle.extend({
    name: 'avatargroup',
    css,
    classes
});
