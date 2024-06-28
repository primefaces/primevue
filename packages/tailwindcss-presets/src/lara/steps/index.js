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
            'before:border-t',
            'before:border-surface-200',
            'before:dark:border-surface-700',
            'before:w-full',
            'before:absolute',
            'before:top-1/2',
            'before:left-0',
            'before:transform',
            'before:-mt-4'
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
            'focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

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
            'border',

            // Size
            'w-[2rem]',
            'h-[2rem]',
            'text-sm',
            'leading-[2rem]',

            // Colors
            {
                'text-surface-400 dark:text-white/60': !context.active,
                'border-surface-100 dark:border-surface-700': !context.active,
                'bg-surface-0 dark:bg-surface-800': !context.active,
                'bg-primary': context.active,
                'border-primary': context.active,
                'text-primary-inverse': context.active
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
            { 'font-bold': context.active },

            // Display
            'block',

            // Spacing
            'mt-2',

            // Colors
            { 'text-surface-400 dark:text-white/60': !context.active, 'text-surface-800 dark:text-white/80': context.active },

            // Text and Overflow
            'whitespace-nowrap',
            'overflow-hidden',
            'overflow-ellipsis',
            'max-w-full'
        ]
    })
};
