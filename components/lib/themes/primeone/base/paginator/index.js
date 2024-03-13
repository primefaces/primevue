export default {
    css: ({ dt }) => `
.p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: ${dt('paginator.background')};
    color: ${dt('paginator.color')};
    border: 0 none;
    padding: 0.5rem 1rem;
    border-radius: ${dt('rounded.base')};
    gap: 0.25rem;
}

.p-paginator-left-content {
    margin-right: auto;
}

.p-paginator-right-content {
    margin-left: auto;
}

.p-paginator-page,
.p-paginator-next,
.p-paginator-last,
.p-paginator-first,
.p-paginator-prev {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
    background: transparent;
    border: 0 none;
    color: ${dt('paginator.navigator.color')};
    min-width: 2.5rem;
    height: 2.5rem;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: 50%;
}

.p-paginator-page:not(.p-disabled):not(.p-highlight):hover,
.p-paginator-first:not(.p-disabled):hover,
.p-paginator-prev:not(.p-disabled):hover,
.p-paginator-next:not(.p-disabled):hover,
.p-paginator-last:not(.p-disabled):hover {
    background: ${dt('paginator.navigator.hover.background')};
    color: ${dt('paginator.navigator.hover.color')};
}

.p-paginator-current {
    color: ${dt('paginator.current.page.report.color')};
}

.p-paginator-pages {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.p-paginator-page.p-highlight {
    background: ${dt('highlight.background')};
    color: ${dt('highlight.color')};
}

.p-paginator-page-input .p-inputtext {
    max-width: 2.5rem;
}
`
};
