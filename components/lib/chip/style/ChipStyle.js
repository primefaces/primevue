import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-chip {
        display: inline-flex;
        align-items: center;
    }

    .p-chip-text {
        line-height: 1.5;
    }

    .p-chip-icon.pi {
        line-height: 1.5;
    }

    .p-chip-remove-icon {
        line-height: 1.5;
        cursor: pointer;
    }

    .p-chip img {
        border-radius: 50%;
    }
}
`;

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
    css,
    classes
});
