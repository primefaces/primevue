import { style } from '@primeuix/styles/paginator';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    paginator: ({ instance, key }) => [
        'p-paginator p-component',
        {
            'p-paginator-default': !instance.hasBreakpoints(),
            [`p-paginator-${key}`]: instance.hasBreakpoints()
        }
    ],
    content: 'p-paginator-content',
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
            'p-paginator-page-selected': pageLink - 1 === props.page
        }
    ],
    current: 'p-paginator-current',
    pcRowPerPageDropdown: 'p-paginator-rpp-dropdown',
    pcJumpToPageDropdown: 'p-paginator-jtp-dropdown',
    pcJumpToPageInputText: 'p-paginator-jtp-input'
};

export default BaseStyle.extend({
    name: 'paginator',
    style,
    classes
});
