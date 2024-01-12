import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-metergroup {
        position: relative;
        overflow: hidden;
    }

    .p-metergroup-vertical.p-metergroup {
        display: flex;
    }

    .p-metergroup-vertical .p-metergroup-meter-container {
        flex-direction: column;
    }

    .p-metergroup-meter-container {
        display: flex;
    }

    .p-metergroup-label-list {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-vertical .p-metergroup-label-list {
        align-items: start;
    }

    .p-metergroup-horizontal .p-metergroup-label-list-vertical {
        flex-direction: column;
    }

    .p-metergroup-vertical .p-metergroup-label-list-horizontal {
        flex-direction: column;
    }

    .p-metergroup-label-list-item {
        display: inline-flex;
        align-items: center;
    }

    .p-metergroup-label-type {
        display: inline-block;
    }

    .p-metergroup-label-icon {
        width: 1rem;
        height: 1rem;
        margin-right: .5rem;
    }
}
`;

const classes = {
    root: ({ instance }) => [
        'p-metergroup p-component',
        {
            'p-metergroup-horizontal': instance.orientation === 'horizontal',
            'p-metergroup-vertical': instance.orientation === 'vertical'
        }
    ],
    metercontainer: 'p-metergroup-meter-container',
    meter: 'p-metergroup-meter',
    labellist: ({ instance }) => [
        'p-metergroup-label-list',
        {
            'p-metergroup-label-list-start': instance.labelPosition === 'start',
            'p-metergroup-label-list-end': instance.labelPosition === 'end',
            'p-metergroup-label-list-vertical': instance.labelOrientation === 'vertical',
            'p-metergroup-label-list-horizontal': instance.labelOrientation === 'horizontal'
        }
    ],
    labellistitem: 'p-metergroup-label-list-item',
    labelicon: 'p-metergroup-label-icon',
    labellisttype: 'p-metergroup-label-type',
    label: 'p-metergroup-label'
};

export default BaseStyle.extend({
    name: 'metergroup',
    css,
    classes
});
