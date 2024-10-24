import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-checkbox-group {
    display: inline-flex;
}
`;

const classes = {
    root: 'p-checkbox-group p-component'
};

export default BaseStyle.extend({
    name: 'checkboxgroup',
    theme,
    classes
});
