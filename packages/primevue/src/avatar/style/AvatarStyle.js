import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${dt('avatar.width')};
    height: ${dt('avatar.height')};
    font-size: ${dt('avatar.font.size')};
    background: ${dt('avatar.background')};
    border-radius: ${dt('avatar.border.radius')};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${dt('avatar.font.size')};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${dt('avatar.lg.width')};
    height: ${dt('avatar.lg.width')};
    font-size: ${dt('avatar.lg.font.size')};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${dt('avatar.lg.font.size')};
}

.p-avatar-xl {
    width: ${dt('avatar.xl.width')};
    height: ${dt('avatar.xl.width')};
    font-size: ${dt('avatar.xl.font.size')};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${dt('avatar.xl.font.size')};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: ${dt('avatar.group.offset')};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${dt('avatar.group.border.color')};
}
`;

const classes = {
    root: ({ props }) => [
        'p-avatar p-component',
        {
            'p-avatar-image': props.image != null,
            'p-avatar-circle': props.shape === 'circle',
            'p-avatar-lg': props.size === 'large',
            'p-avatar-xl': props.size === 'xlarge'
        }
    ],
    label: 'p-avatar-label',
    icon: 'p-avatar-icon'
};

export default BaseStyle.extend({
    name: 'avatar',
    theme,
    classes
});
