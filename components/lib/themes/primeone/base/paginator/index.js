export default {
    css: ({ dt }) => `
.p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: var(--p-paginator-background);
    color: var(--p-paginator-text-color);
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
    color: var(--p-paginator-navigator-color);
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
    background: var(--p-paginator-navigator-background-hover);
    color: var(--p-paginator-navigator-color-hover);
}

.p-paginator-current {
    color: var(--p-paginator-current-page-report-text-color);
}

.p-paginator-pages {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.p-paginator-page.p-highlight {
    background: var(--p-highlight-background);
    color: var(--p-highlight-text-color);
}

.p-paginator-page-input .p-inputtext {
    max-width: 2.5rem;
}
`
};
