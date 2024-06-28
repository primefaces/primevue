export default {
    root: ({ context }) => ({
        class: [
            // Colors
            'bg-surface-0',
            'dark:bg-surface-900',
            'text-surface-700',
            'dark:text-surface-0/80',

            // Shape
            'rounded-lg',

            // Borders (Conditional)
            { 'border border-solid border-surface-50 dark:border-surface-700': !context.nested },

            // Nested
            { 'flex grow border-0': context.nested }
        ]
    }),

    gutter: ({ props }) => ({
        class: [
            // Flexbox
            'flex',
            'items-center',
            'justify-center',
            'shrink-0',

            // Colors
            'bg-surface-50',
            'dark:bg-surface-800',

            // Transitions
            'transition-all',
            'duration-200',

            // Misc
            {
                'cursor-col-resize': props.layout == 'horizontal',
                'cursor-row-resize': props.layout !== 'horizontal'
            }
        ]
    }),
    gutterhandler: ({ props }) => ({
        class: [
            // Colors
            'bg-surface-100',
            'dark:bg-surface-600',

            // Transitions
            'transition-all',
            'duration-200',

            // Sizing (Conditional)
            {
                'h-7': props.layout == 'horizontal',
                'w-7 h-2': props.layout !== 'horizontal'
            }
        ]
    })
};
