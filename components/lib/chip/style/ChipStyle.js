import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-chip p-component',
        {
            'p-chip-image': props.image != null
        }
    ],
    icon: 'p-chip-icon',
    label: 'p-chip-text',
    removeIcon: 'p-chip-remove-icon'
};

export default BaseStyle.extend({
    name: 'chip',
    classes
});
