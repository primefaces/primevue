import { style } from '@primeuix/styles/metergroup';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-metergroup p-component',
        {
            'p-metergroup-horizontal': props.orientation === 'horizontal',
            'p-metergroup-vertical': props.orientation === 'vertical'
        }
    ],
    meters: 'p-metergroup-meters',
    meter: 'p-metergroup-meter',
    labelList: ({ props }) => [
        'p-metergroup-label-list',
        {
            'p-metergroup-label-list-vertical': props.labelOrientation === 'vertical',
            'p-metergroup-label-list-horizontal': props.labelOrientation === 'horizontal'
        }
    ],
    label: 'p-metergroup-label',
    labelIcon: 'p-metergroup-label-icon',
    labelMarker: 'p-metergroup-label-marker',
    labelText: 'p-metergroup-label-text'
};

export default BaseStyle.extend({
    name: 'metergroup',
    style,
    classes
});
