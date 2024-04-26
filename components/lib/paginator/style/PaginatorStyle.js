import BaseStyle from 'primevue/base/style';

const classes = {
    paginator: ({ instance, key }) => [
        'p-paginator p-component',
        {
            'p-paginator-default': !instance.hasBreakpoints(),
            [`p-paginator-${key}`]: instance.hasBreakpoints()
        }
    ],
    start: 'p-paginator-content-start',
    end: 'p-paginator-content-end',
    firstPageButton: ({ instance }) => [
        'p-paginator-first',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    firstPageIcon: 'p-paginator-first-icon',
    previousPageButton: ({ instance }) => [
        'p-paginator-prev',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    previousPageIcon: 'p-paginator-prev-icon',
    nextPageButton: ({ instance }) => [
        'p-paginator-next',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    nextPageIcon: 'p-paginator-next-icon',
    lastPageButton: ({ instance }) => [
        'p-paginator-last',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    lastPageIcon: 'p-paginator-last-icon',
    pages: 'p-paginator-pages',
    pageButton: ({ props, pageLink }) => [
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
    classes
});
