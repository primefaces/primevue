import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-buttongroup {
    display: inline-flex;
}

.p-buttongroup .p-button {
    margin: 0;
}

.p-buttongroup .p-button:not(:last-child),
.p-buttongroup .p-button:not(:last-child):hover {
    border-inline-end: 0 none;
}

.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttongroup .p-button:first-of-type:not(:only-of-type) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-buttongroup .p-button:last-of-type:not(:only-of-type) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

.p-buttongroup .p-button:focus {
    position: relative;
    z-index: 1;
}
`;

const classes = {
    root: 'p-buttongroup p-component'
};

export default BaseStyle.extend({
    name: 'buttongroup',
    theme,
    classes
});
