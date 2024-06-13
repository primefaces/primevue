import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-iconfield {
    position: relative;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${dt('icon.size')} / 2));
    color: ${dt('iconfield.icon.color')};
}

.p-iconfield .p-inputicon:first-child {
    left: ${dt('form.field.padding.x')};
}

.p-iconfield .p-inputicon:last-child {
    right: ${dt('form.field.padding.x')};
}

.p-iconfield .p-inputtext:last-child {
    padding-left: calc((${dt('form.field.padding.x')} * 2) + ${dt('icon.size')});
}

.p-iconfield .p-inputtext:first-child {
    padding-right: calc((${dt('form.field.padding.x')} * 2) + ${dt('icon.size')});
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
