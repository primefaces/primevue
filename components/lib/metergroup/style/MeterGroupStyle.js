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
}
`;

const classes = {
    root: ({ props }) => [
        'p-metergroup p-component',
        {
            'p-metergroup-horizontal': props.orientation === 'horizontal',
            'p-metergroup-vertical': props.orientation === 'vertical'
        }
    ],
    metercontainer: 'p-metergroup-meter-container',
    meter: 'p-metergroup-meter',
    labellist: ({ props }) => [
        'p-metergroup-label-list',

        {
            'p-metergroup-label-list-start': props.labelPosition === 'start',
            'p-metergroup-label-list-end': props.labelPosition === 'end',
            'p-metergroup-label-list-vertical': props.labelOrientation === 'vertical',
            'p-metergroup-label-list-horizontal': props.labelOrientation === 'horizontal'
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
