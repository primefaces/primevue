import BaseStyle from 'primevue/base/style';

const classes = {
    paginator: ({ instance, key }) => [
        'p-paginator p-component',
        {
            'p-paginator-default': !instance.hasBreakpoints(),
            [`p-paginator-${key}`]: instance.hasBreakpoints()
        }
    ],
    start: 'p-paginator-left-content',
    end: 'p-paginator-right-content',
    firstPageButton: ({ instance }) => [
        'p-paginator-first p-paginator-element p-link',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    firstPageIcon: 'p-paginator-icon',
    previousPageButton: ({ instance }) => [
        'p-paginator-prev p-paginator-element p-link',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    previousPageIcon: 'p-paginator-icon',
    nextPageButton: ({ instance }) => [
        'p-paginator-next p-paginator-element p-link',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    nextPageIcon: 'p-paginator-icon',
    lastPageButton: ({ instance }) => [
        'p-paginator-last p-paginator-element p-link',
        {
            'p-disabled': instance.$attrs.disabled
        }
    ],
    lastPageIcon: 'p-paginator-icon',
    pages: 'p-paginator-pages',
    pageButton: ({ props, pageLink }) => [
        'p-paginator-page p-paginator-element p-link',
        {
            'p-highlight': pageLink - 1 === props.page
        }
    ],
    current: 'p-paginator-current',
    rowPerPageDropdown: 'p-paginator-rpp-options',
    jumpToPageDropdown: 'p-paginator-page-options',
    jumpToPageInput: 'p-paginator-page-input'
};

export default BaseStyle.extend({
    name: 'paginator',
    classes
});
