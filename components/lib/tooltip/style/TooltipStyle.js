import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-tooltip p-component',
    arrow: 'p-tooltip-arrow',
    text: 'p-tooltip-text'
};

export default BaseStyle.extend({
    name: 'tooltip',
    classes
});
