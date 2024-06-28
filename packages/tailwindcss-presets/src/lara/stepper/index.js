export default {
    root: ({ props }) => ({
        class: ['flex-1', props.orientation === 'vertical' ? 'flex-col' : 'flex-row']
    }),
    nav: {
        class: [
            // Flexbox
            'flex',
            'justify-between',
            'items-center',

            // Spacing
            'm-0',
            'p-0',

            // Positioning
            'relative',

            // Lists
            'list-none',

            // Overflow
            'overflow-x-auto'
        ]
    },
    stepperpanel: {
        panel: ({ context, parent }) => ({
            class: [context.active ? 'flex-1' : '', parent.props.orientation === 'vertical' ? 'flex flex-col flex-initial' : '']
        }),
        header: ({ parent, context }) => ({
            class: [
                // Position
                'relative',

                // Flexbox
                'flex',
                'items-center',
                context.last ? 'flex-initial' : 'flex-1',
                parent.props.orientation === 'vertical' ? 'flex-initial' : '',

                // Spacing
                'p-2'
            ]
        }),
        action: {
            class: [
                // Borders
                'border-0',
                'border-none',

                // Flexbox
                'inline-flex',
                'items-center',

                // Text
                'text-decoration-none',

                // Transitions
                'transition',
                'transition-shadow',
                'duration-200',

                // Shape
                'rounded-md',

                // Backgrounds
                'bg-transparent',

                // Focus
                'outline-none'
            ]
        },
        number: ({ context }) => ({
            class: [
                // Flexbox
                'flex',
                'items-center',
                'justify-center',

                // Colors (Conditional)
                context.active ? 'bg-primary text-primary-inverse' : 'border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-0', // Adjust colors as needed

                // Size and Shape
                'min-w-[2rem]',
                'h-[2rem]',
                'line-height-[2rem]',
                'rounded-full',

                // Text
                'text-lg',

                // Borders
                context.active ? 'border-0 border-none' : 'border-solid border-2',

                // Transitions
                'transition',
                'transition-colors',
                'transition-shadow',
                'duration-200'
            ]
        }),
        title: ({ context }) => ({
            class: [
                // Layout
                'block',
                'whitespace-nowrap',
                'overflow-hidden',
                'text-ellipsis',
                'max-w-full',

                // Spacing
                'ml-2',

                // Text
                context.active ? 'text-surface-900 dark:text-surface-0' : 'text-surface-700 dark:text-surface-0/80',
                'font-bold',

                // Transitions
                'transition',
                'transition-colors',
                'transition-shadow',
                'duration-200'
            ]
        }),
        separator: ({ context, state, parent }) => ({
            class: [
                // Colors (Conditional for active step)
                state.d_activeStep <= context.index ? 'bg-surface-200 dark:bg-surface-700' : 'bg-primary',

                // Conditional for Vertical Orientation
                parent.props.orientation === 'vertical' ? ['flex-none', 'w-[2px]', 'h-auto', 'ml-[calc(1.29rem+2px)]'] : ['flex-1', 'w-full', 'h-[2px]', 'ml-4'],

                // Transitions
                'transition-shadow',
                'duration-200'
            ]
        }),
        transition: {
            class: ['flex flex-1', 'bg-surface-0 dark:bg-surface-800', 'text-surface-900 dark:text-surface-0'],
            enterFromClass: 'max-h-0',
            enterActiveClass: 'overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]',
            enterToClass: 'max-h-[1000px]',
            leaveFromClass: 'max-h-[1000px]',
            leaveActiveClass: 'overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]',
            leaveToClass: 'max-h-0'
        },
        content: ({ parent }) => ({
            class: [parent.props.orientation === 'vertical' ? 'w-full pl-4' : '']
        })
    },
    panelcontainer: {
        class: [
            // Colors
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-900 dark:text-surface-0',

            // Spacing
            'p-4'
        ]
    }
};
