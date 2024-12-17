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
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${dt('form.field.padding.x')};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${dt('form.field.padding.x')};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${dt('form.field.padding.x')} * 2) + ${dt('icon.size')});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${dt('form.field.padding.x')} * 2) + ${dt('icon.size')});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${dt('form.field.sm.font.size')};
    width: ${dt('form.field.sm.font.size')};
    height: ${dt('form.field.sm.font.size')};
    margin-top: calc(-1 * (${dt('form.field.sm.font.size')} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${dt('form.field.lg.font.size')};
    width: ${dt('form.field.lg.font.size')};
    height: ${dt('form.field.lg.font.size')};
    margin-top: calc(-1 * (${dt('form.field.lg.font.size')} / 2));
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
