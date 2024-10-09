import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${dt('inputgroup.addon.padding')};
    background: ${dt('inputgroup.addon.background')};
    color: ${dt('inputgroup.addon.color')};
    border-top: 1px solid ${dt('inputgroup.addon.border.color')};
    border-bottom: 1px solid ${dt('inputgroup.addon.border.color')};
    min-width: ${dt('inputgroup.addon.min.width')};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-left: 1px solid ${dt('inputgroup.addon.border.color')};
}

.p-inputgroupaddon:last-child {
    border-right: 1px solid ${dt('inputgroup.addon.border.color')};
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-top-left-radius: ${dt('inputgroup.addon.border.radius')};
    border-bottom-left-radius: ${dt('inputgroup.addon.border.radius')};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-top-right-radius: ${dt('inputgroup.addon.border.radius')};
    border-bottom-right-radius: ${dt('inputgroup.addon.border.radius')};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}
`;

const classes = {
    root: 'p-inputgroup'
};

export default BaseStyle.extend({
    name: 'inputgroup',
    theme,
    classes
});
