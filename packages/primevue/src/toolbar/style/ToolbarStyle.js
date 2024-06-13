import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: ${dt('toolbar.padding')};
    background: ${dt('toolbar.background')};
    border: 1px solid ${dt('toolbar.border.color')};
    color: ${dt('toolbar.color')};
    border-radius: ${dt('toolbar.border.radius')};
    gap: ${dt('toolbar.gap')};
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`;

const classes = {
    root: 'p-toolbar p-component',
    start: 'p-toolbar-start',
    center: 'p-toolbar-center',
    end: 'p-toolbar-end'
};

export default BaseStyle.extend({
    name: 'toolbar',
    theme,
    classes
});
