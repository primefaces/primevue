import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-picklist {
        display: flex;
    }

    .p-picklist-buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .p-picklist-list-wrapper {
        flex: 1 1 50%;
    }

    .p-picklist-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: auto;
        min-height: 12rem;
        max-height: 24rem;
    }

    .p-picklist-item {
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-picklist-item.p-picklist-flip-enter-active.p-picklist-flip-enter-to,
    .p-picklist-item.p-picklist-flip-leave-active.p-picklist-flip-leave-to {
        transition: none;
    }
}
`;

const classes = {
    root: ({ props }) => [
        'p-picklist p-component',
        {
            'p-picklist-striped': props.stripedRows
        }
    ],
    sourceControls: 'p-picklist-buttons p-picklist-source-controls',
    sourceWrapper: 'p-picklist-list-wrapper p-picklist-source-wrapper',
    sourceHeader: 'p-picklist-header',
    sourceList: 'p-picklist-list p-picklist-source-list',
    buttons: 'p-picklist-buttons p-picklist-transfer-buttons',
    targetWrapper: 'p-picklist-list-wrapper p-picklist-target-wrapper',
    targetHeader: 'p-picklist-header',
    targetList: 'p-picklist-list p-picklist-target',
    item: ({ instance, item, id, listIndex }) => [
        'p-picklist-item',
        {
            'p-highlight': instance.isSelected(item, listIndex),
            'p-focus': id === instance.focusedOptionId
        }
    ],
    targetControls: 'p-picklist-buttons p-picklist-target-controls'
};

export default BaseStyle.extend({
    name: 'picklist',
    css,
    classes
});
