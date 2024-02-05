import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => ['p-inplace p-component', { 'p-inplace-closable': props.closable }],
    display: ({ props }) => ['p-inplace-display', { 'p-disabled': props.disabled }],
    content: 'p-inplace-content'
};

export default BaseStyle.extend({
    name: 'inplace',
    classes
});
