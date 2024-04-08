import BaseStyle from 'primevue/base/style';

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
        'p-metergroup-label-list',
        {
            'p-metergroup-label-list-vertical': props.labelOrientation === 'vertical',
            'p-metergroup-label-list-horizontal': props.labelOrientation === 'horizontal'
        }
    ],
    labellistitem: 'p-metergroup-label',
    labelicon: 'p-metergroup-label-icon',
    labellisttype: 'p-metergroup-label-marker',
    label: 'p-metergroup-label-text'
};

export default BaseStyle.extend({
    name: 'metergroup',
    classes
});
