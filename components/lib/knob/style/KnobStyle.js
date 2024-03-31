import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => ['p-knob p-component', { 'p-disabled': props.disabled }],
    range: 'p-knob-range',
    value: 'p-knob-value',
    label: 'p-knob-text'
};

export default BaseStyle.extend({
    name: 'knob',
    classes
});
