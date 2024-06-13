import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-inputotp {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.p-inputotp-input {
    text-align: center;
    width: 2.5rem;
}
`;

const classes = {
    root: 'p-inputotp p-component',
    pcInput: 'p-inputotp-input'
};

export default BaseStyle.extend({
    name: 'inputotp',
    theme,
    classes
});
