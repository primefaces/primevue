import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-scrollpanel p-component',
    wrapper: 'p-scrollpanel-wrapper',
    content: 'p-scrollpanel-content',
    barx: 'p-scrollpanel-bar p-scrollpanel-bar-x',
    bary: 'p-scrollpanel-bar p-scrollpanel-bar-y'
};

export default BaseStyle.extend({
    name: 'scrollpanel',
    classes
});
