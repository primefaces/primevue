import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-steps {
        position: relative;
    }

    .p-steps .p-steps-list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
    }

    .p-steps-item {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
        overflow: hidden;
    }

    .p-steps-item .p-menuitem-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
        cursor: pointer;
    }

    .p-steps.p-steps-readonly .p-steps-item {
        cursor: auto;
    }

    .p-steps-item.p-steps-current .p-menuitem-link {
        cursor: default;
    }

    .p-steps-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    .p-steps-number {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-steps-title {
        display: block;
    }
}
`;

const classes = {
    root: ({ props }) => ['p-steps p-component', { 'p-readonly': props.readonly }],
    menu: 'p-steps-list',
    menuitem: ({ instance, item, index }) => [
        'p-steps-item',
        {
            'p-highlight p-steps-current': instance.isActive(index),
            'p-disabled': instance.isItemDisabled(item, index)
        }
    ],
    action: 'p-menuitem-link',
    step: 'p-steps-number',
    label: 'p-steps-title'
};

export default BaseStyle.extend({
    name: 'steps',
    css,
    classes
});
