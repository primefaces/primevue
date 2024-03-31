import BaseStyle from 'primevue/base/style';

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
    label: 'p-avatar-text',
    icon: 'p-avatar-icon'
};

export default BaseStyle.extend({
    name: 'avatar',
    classes
});
