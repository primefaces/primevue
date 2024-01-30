import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-inputgroup {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup-addon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-inputgroup .p-float-label {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-inputtext,
    .p-fluid .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper,
    .p-fluid .p-inputgroup .p-input {
        flex: 1 1 auto;
        width: 1%;
    }
}
`;

const classes = {
    root: 'p-inputgroup'
};

export default BaseStyle.extend({
    name: 'inputgroup',
    css,
    classes
});
