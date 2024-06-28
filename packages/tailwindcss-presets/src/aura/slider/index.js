export default {
    root: ({ props }) => ({
        class: [
            'relative',

            // Size
            { 'h-[3px]': props.orientation == 'horizontal', 'w-[3px]': props.orientation == 'vertical' },

            // Shape
            'border-0',
            'rounded-md',

            // Colors
            'bg-surface-200 dark:bg-surface-800',

            // States
            { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
        ]
    }),
    range: ({ props }) => ({
        class: [
            // Position
            'block absolute',
            {
                'top-0 left-0': props.orientation == 'horizontal',
                'bottom-0 left-0': props.orientation == 'vertical'
            },

            //Size
            {
                'h-full': props.orientation == 'horizontal',
                'w-full': props.orientation == 'vertical'
            },

            // Shape
            'rounded-md',

            // Colors
            'bg-primary'
        ]
    }),
    handle: ({ props }) => ({
        class: [
            'flex items-center justify-center',

            // Size
            'h-[20px]',
            'w-[20px]',
            {
                'top-[50%] -mt-[10px] -ml-[10px]': props.orientation == 'horizontal',
                'left-[50%] -mb-[10px] -ml-[10px]': props.orientation == 'vertical'
            },

            // Shape
            'rounded-full',

            'before:block before:w-[16px] before:h-[16px] before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-md',

            // Colors
            'bg-surface-200 dark:bg-surface-800',

            // States
            'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1',
            'ring-primary-500 dark:ring-primary-400',

            // Transitions
            'transition duration-200',

            // Misc
            'cursor-grab',
            'touch-action-none'
        ]
    }),
    starthandler: ({ props }) => ({
        class: [
            'flex items-center justify-center',

            // Size
            'h-[20px]',
            'w-[20px]',
            {
                'top-[50%] -mt-[10px] -ml-[10px]': props.orientation == 'horizontal',
                'left-[50%] -mb-[10px] -ml-[10px]': props.orientation == 'vertical'
            },

            // Shape
            'rounded-full',

            'before:block before:w-[16px] before:h-[16px] before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-md',

            // Colors
            'bg-surface-200 dark:bg-surface-800',

            // States
            'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1',
            'ring-primary-500 dark:ring-primary-400',

            // Transitions
            'transition duration-200',

            // Misc
            'cursor-grab',
            'touch-action-none'
        ]
    }),
    endhandler: ({ props }) => ({
        class: [
            'flex items-center justify-center',

            // Size
            'h-[20px]',
            'w-[20px]',
            {
                'top-[50%] -mt-[10px] -ml-[10px]': props.orientation == 'horizontal',
                'left-[50%] -mb-[10px] -ml-[10px]': props.orientation == 'vertical'
            },

            // Shape
            'rounded-full',

            'before:block before:w-[16px] before:h-[16px] before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-md',

            // Colors
            'bg-surface-200 dark:bg-surface-800',

            // States
            'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1',
            'ring-primary-500 dark:ring-primary-400',

            // Transitions
            'transition duration-200',

            // Misc
            'cursor-grab',
            'touch-action-none'
        ]
    })
};
