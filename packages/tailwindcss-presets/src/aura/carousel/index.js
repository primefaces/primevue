export default {
    root: {
        class: [
            // Flexbox
            'flex flex-col'
        ]
    },
    content: {
        class: [
            // Flexbox & Overflow
            'flex flex-col overflow-auto'
        ]
    },
    container: ({ props }) => ({
        class: [
            // Flexbox
            'flex',

            // Orientation
            {
                'flex-row': props.orientation !== 'vertical',
                'flex-col': props.orientation == 'vertical'
            }
        ]
    }),
    previousbutton: {
        class: [
            // Flexbox & Alignment
            'flex justify-center items-center self-center',

            // Sizing & Overflow
            'overflow-hidden w-8 h-8',

            // Spacing
            'mx-2',

            // Shape
            'rounded-full',

            // Border & Background
            'border-0 bg-transparent',

            // Color
            'text-surface-600',

            // States
            'hover:bg-surface-50 dark:hover:bg-surface-800',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',

            // Transitions
            'transition duration-200 ease-in-out'
        ]
    },
    nextbutton: {
        class: [
            // Flexbox & Alignment
            'flex justify-center items-center self-center',

            // Sizing & Overflow
            'overflow-hidden w-8 h-8',

            // Spacing
            'mx-2',

            // Shape
            'rounded-full',

            // Border & Background
            'border-0 bg-transparent',

            // Color
            'text-surface-600',

            // States
            'hover:bg-surface-50 dark:hover:bg-surface-800',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',

            // Transitions
            'transition duration-200 ease-in-out'
        ]
    },
    itemscontent: {
        class: [
            // Overflow & Width
            'overflow-hidden w-full'
        ]
    },
    itemscontainer: ({ props }) => ({
        class: [
            // Flexbox
            'flex',

            // Orientation & Sizing
            {
                'flex-row': props.orientation !== 'vertical',
                'flex-col h-full': props.orientation == 'vertical'
            }
        ]
    }),
    item: ({ props }) => ({
        class: [
            // Flexbox
            'flex shrink-0 grow ',

            // Size
            {
                'w-full sm:w-[50%] md:w-[33.333333333333336%]': props.orientation !== 'vertical',

                'w-full h-full': props.orientation == 'vertical'
            }
        ]
    }),
    itemcloned: ({ props }) => ({
        class: [
            // Flexbox
            'flex shrink-0 grow',
            'unvisible',

            // Size
            {
                'w-full sm:w-[50%] md:w-[33.333333333333336%]': props.orientation !== 'vertical',

                'w-full h-full': props.orientation == 'vertical'
            }
        ]
    }),
    indicators: {
        class: [
            // Flexbox & Alignment
            'flex flex-row justify-center flex-wrap'
        ]
    },
    indicator: {
        class: [
            // Spacing
            'mr-2 mb-2'
        ]
    },
    indicatorbutton: ({ context }) => ({
        class: [
            // Sizing & Shape
            'w-8 h-2 rounded-md',

            // Transitions
            'transition duration-200',

            // Focus Styles
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400',

            // Color & Background
            {
                'bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600': !context.highlighted,
                'bg-primary hover:bg-primary-hover': context.highlighted
            }
        ]
    })
};
