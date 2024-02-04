import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-metergroup {
        display: flex;
    }

    .p-metergroup-meters {
        display: flex;
    }

    .p-metergroup-vertical .p-metergroup-meters {
        flex-direction: column;
    }

    .p-metergroup-labels {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-vertical .p-metergroup-labels {
        align-items: start;
    }

    .p-metergroup-labels-vertical {
        flex-direction: column;
    }

    .p-metergroup-label {
        display: inline-flex;
        align-items: center;
    }

    .p-metergroup-label-marker {
        display: inline-flex;
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
    metercontainer: 'p-metergroup-meters',
    meter: 'p-metergroup-meter',
    labellist: ({ props }) => [
        'p-metergroup-labels',
        {
            'p-metergroup-labels-vertical': props.labelOrientation === 'vertical',
            'p-metergroup-labels-horizontal': props.labelOrientation === 'horizontal'
        }
    ],
    labellistitem: 'p-metergroup-label',
    labelicon: 'p-metergroup-label-icon',
    labellisttype: 'p-metergroup-label-marker',
    label: 'p-metergroup-label-text'
};

export default BaseStyle.extend({
    name: 'metergroup',
    css,
    classes
});
