export default {
    root: {
        class: 'relative'
    },
    menu: {
        class: 'p-0 m-0 list-none flex'
    },
    menuitem: {
        class: [
            // Flexbox and Position
            'relative',
            'flex',
            'justify-center',
            'flex-1',
            'overflow-hidden',

            // Before
            'before:border-t-2',
            'before:border-surface-200',
            'before:dark:border-surface-700',
            'before:w-full',
            '[&:first-child]:before:w-[calc(50%+1rem)]',
            '[&:last-child]:before:w-1/2',
            'before:absolute',
            'before:top-1/2',
            'before:left-0',
            'before:transform',
            'before:mt-[calc(-1rem+1px)]',
            '[&:first-child]:before:translate-x-[100%]'
        ]
    },
    action: ({ props }) => ({
        class: [
            // Flexbox
            'inline-flex items-center',
            'flex-col',

            // Transitions and Shape
            'transition-shadow',
            'rounded-md',

            // Colors
            'bg-surface-0',
            'dark:bg-transparent',

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring',
            'focus:ring-primary-500 dark:focus:ring-primary-400',

            // Misc
            'overflow-hidden',
            { 'cursor-pointer': !props.readonly }
        ]
    }),
    step: ({ context, props }) => ({
        class: [
            // Flexbox
            'flex items-center justify-center',

            // Position
            'z-20',

            // Shape
            'rounded-full',
            'border-2',

            // Size
            'w-8',
            'h-8',
            'text-sm',
            'leading-[2rem]',
            'font-medium',

            // Colors
            'bg-surface-0 dark:bg-surface-800',
            'border-surface-100 dark:border-surface-700',
            {
                'text-surface-400 dark:text-white/60': !context.active,
                'text-primary': context.active
            },

            // States
            {
                'hover:border-surface-300 dark:hover:border-surface-500': !context.active && !props.readonly
            },

            // Transition
            'transition-colors duration-200 ease-in-out'
        ]
    }),
    label: ({ context }) => ({
        class: [
            // Font
            'leading-[normal]',
            'font-medium',

            // Display
            'block',

            // Spacing
            'mt-2',

            // Colors
            { 'text-surface-700 dark:text-white/70': !context.active, 'text-primary': context.active },

            // Text and Overflow
            'whitespace-nowrap',
            'overflow-hidden',
            'overflow-ellipsis',
            'max-w-full'
        ]
    })
};
