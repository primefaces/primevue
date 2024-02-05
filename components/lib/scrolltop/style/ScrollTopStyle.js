import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => ['p-scrolltop p-link p-component', { 'p-scrolltop-sticky': props.target !== 'window' }],
    icon: 'p-scrolltop-icon'
};

export default BaseStyle.extend({
    name: 'scrolltop',
    classes
});
