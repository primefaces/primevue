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

.p-inputotp-input.p-inputtext-sm {
    text-align: center;
    width: 2rem;
}

.p-inputotp-input.p-inputtext-lg {
    text-align: center;
    width: 3rem;
}
`;

const classes = {
    root: 'p-inputotp p-component',
    pcInputText: 'p-inputotp-input'
};

export default BaseStyle.extend({
    name: 'inputotp',
    theme,
    classes
});
