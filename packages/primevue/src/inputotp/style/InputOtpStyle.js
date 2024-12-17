import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-inputotp {
    display: flex;
    align-items: center;
    gap: ${dt('inputotp.gap')};
}

.p-inputotp-input {
    text-align: center;
    width: ${dt('inputotp.input.width')};
}

.p-inputotp-input.p-inputtext-sm {
    text-align: center;
    width: ${dt('inputotp.input.sm.width')};
}

.p-inputotp-input.p-inputtext-lg {
    text-align: center;
    width: ${dt('inputotp.input.lg.width')};
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
