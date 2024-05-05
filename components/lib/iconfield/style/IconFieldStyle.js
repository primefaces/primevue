import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-iconfield {
    position: relative;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
    color: ${dt('iconfield.icon.color')};
}

.p-iconfield .p-inputicon:first-child {
    left: 0.75rem;
}

.p-iconfield .p-inputicon:last-child {
    right: 0.75rem;
}

.p-iconfield .p-inputtext:last-child {
    padding-left: 2.5rem;
}

.p-iconfield .p-inputtext:first-child {
    padding-right: 2.5rem;
}
`;

const classes = {
    root: 'p-iconfield'
};

export default BaseStyle.extend({
    name: 'iconfield',
    theme,
    classes
});
