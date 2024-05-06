import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.75rem;
    background: ${dt('toolbar.background')};
    border: 1px solid ${dt('toolbar.border.color')};
    color: ${dt('toolbar.color')};
    border-radius: ${dt('border.radius.md')};
    gap: 0.5rem;
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
