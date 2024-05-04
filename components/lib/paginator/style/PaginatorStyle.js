import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
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

.p-paginator-content-start {
    margin-right: auto;
}

.p-paginator-content-end {
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
    color: ${dt('paginator.nav.button.color')};
    min-width: 2.5rem;
    height: 2.5rem;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: 50%;
    padding: 0;
    margin: 0;
}

.p-paginator-page:focus-visible,
.p-paginator-next:focus-visible,
.p-paginator-last:focus-visible,
.p-paginator-first:focus-visible,
.p-paginator-prev:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-paginator-page:not(.p-disabled):not(.p-paginator-page-active):hover,
.p-paginator-first:not(.p-disabled):hover,
.p-paginator-prev:not(.p-disabled):hover,
.p-paginator-next:not(.p-disabled):hover,
.p-paginator-last:not(.p-disabled):hover {
    background: ${dt('paginator.nav.button.hover.background')};
    color: ${dt('paginator.nav.button.hover.color')};
}

.p-paginator-current {
    color: ${dt('paginator.current.page.report.color')};
}

.p-paginator-pages {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.p-paginator-page.p-paginator-page-active {
    background: ${dt('highlight.background')};
    color: ${dt('highlight.color')};
}

.p-paginator-jtp-input .p-inputtext {
    max-width: 2.5rem;
}
`;

const classes = {
    paginator: ({ instance, key }) => [
        'p-paginator p-component',
        {
            'p-paginator-default': !instance.hasBreakpoints(),
            [`p-paginator-${key}`]: instance.hasBreakpoints()
        }
    ],
    contentStart: 'p-paginator-content-start',
    contentEnd: 'p-paginator-content-end',
    first: ({ instance }) => [
        'p-paginator-first',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    firstIcon: 'p-paginator-first-icon',
    prev: ({ instance }) => [
        'p-paginator-prev',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    prevIcon: 'p-paginator-prev-icon',
    next: ({ instance }) => [
        'p-paginator-next',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    nextIcon: 'p-paginator-next-icon',
    last: ({ instance }) => [
        'p-paginator-last',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    lastIcon: 'p-paginator-last-icon',
    pages: 'p-paginator-pages',
    page: ({ props, pageLink }) => [
        'p-paginator-page',
        {
            'p-paginator-page-active': pageLink - 1 === props.page
        }
    ],
    current: 'p-paginator-current',
    rowPerPageDropdown: 'p-paginator-rpp-dropdown',
    jumpToPageDropdown: 'p-paginator-jtp-dropdown',
    jumpToPageInput: 'p-paginator-jtp-input'
};

export default BaseStyle.extend({
    name: 'paginator',
    theme,
    classes
});
