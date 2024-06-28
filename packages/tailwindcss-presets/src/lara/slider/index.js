export default {
    root: ({ props }) => ({
        class: [
            'relative',

            // Size
            { 'h-1 w-60': props.orientation == 'horizontal', 'w-1 h-56': props.orientation == 'vertical' },

            // Shape
            'border-0',

            // Colors
            'bg-surface-100 dark:bg-surface-700',

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

            // Colors
            'bg-primary'
        ]
    }),
    handle: ({ props }) => ({
        class: [
            'block',

            // Size
            'h-[1.143rem]',
            'w-[1.143rem]',
            {
                'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                'left-[50%] mb-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'vertical'
            },

            // Shape
            'rounded-full',
            'border-2',

            // Colors
            'bg-surface-0 dark:bg-surface-600',
            'border-primary',

            // States
            'hover:bg-primary-hover',
            'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring',
            'ring-primary-400/50 dark:ring-primary-300/50',

            // Transitions
            'transition duration-200',

            // Misc
            'cursor-grab',
            'touch-action-none'
        ]
    }),
    starthandler: ({ props }) => ({
        class: [
            'block',

            // Size
            'h-[1.143rem]',
            'w-[1.143rem]',
            {
                'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
            },

            // Shape
            'rounded-full',
            'border-2',

            // Colors
            'bg-surface-0 dark:bg-surface-600',
            'border-primary',

            // States
            'hover:bg-primary-hover',
            'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring',
            'focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',

            // Transitions
            'transition duration-200',

            // Misc
            'cursor-grab',
            'touch-action-none'
        ]
    }),
    endhandler: ({ props }) => ({
        class: [
            'block',

            // Size
            'h-[1.143rem]',
            'w-[1.143rem]',
            {
                'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
            },

            // Shape
            'rounded-full',
            'border-2',

            // Colors
            'bg-surface-0 dark:bg-surface-600',
            'border-primary',

            // States
            'hover:bg-primary-hover',
            'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring',
            'focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',

            // Transitions
            'transition duration-200',

            // Misc
            'cursor-grab',
            'touch-action-none'
        ]
    })
};
