export default {
    css: ({ dt }) => `
.p-icon-field {
    position: relative;
}

.p-input-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
    color: ${dt('iconfield.color')};
}

.p-icon-field .p-input-icon:first-child {
    left: 0.75rem;
}

.p-icon-field .p-input-icon:last-child {
    right: 0.75rem;
}

.p-icon-field .p-inputtext:last-child {
    padding-left: 2.5rem;
}

.p-icon-field .p-inputtext:first-child {
    padding-right: 2.5rem;
}
`
};
