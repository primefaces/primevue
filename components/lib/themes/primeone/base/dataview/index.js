export default {
    css: ({ dt }) => `
.p-dataview-header {
    background: ${dt('dataview.header.background')};
    color: ${dt('dataview.header.color')};
    border: 1px solid ${dt('dataview.header.border.color')};
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
}

.p-dataview-content {
    background: ${dt('dataview.content.background')};
    color: ${dt('dataview.content.color')};
}

.p-dataview-footer {
    background: ${dt('dataview.footer.background')};
    color: ${dt('dataview.footer.color')};
    border: 1px solid ${dt('dataview.footer.border.color')};
    border-width: 1px 0 0 0;
    padding: 0.75rem 1rem;
}

.p-dataview-paginator-top {
    border: solid ${dt('dataview.header.border.color')};
    border-width: 0 0 1px 0;
}

.p-dataview-paginator-bottom {
    border: solid ${dt('dataview.footer.border.color')};
    border-width: 1px 0 0 0; 
}
`
};