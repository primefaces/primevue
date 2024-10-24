import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-radiobutton-group {
    display: inline-flex;
}
`;

const classes = {
    root: 'p-radiobutton-group p-component'
};

export default BaseStyle.extend({
    name: 'radiobuttongroup',
    theme,
    classes
});
