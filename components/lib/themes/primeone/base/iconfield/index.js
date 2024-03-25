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

.p-icon-field-left .p-input-icon {
    left: 0.75rem;
}

.p-icon-field-right .p-input-icon {
    right: 0.75rem;
}

.p-icon-field-left .p-inputtext {
    padding-left: 2.5rem;
}

.p-icon-field-right .p-inputtext {
    padding-right: 2.5rem;
}
`
};
