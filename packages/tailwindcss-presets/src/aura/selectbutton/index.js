export default {
    root: ({ props }) => ({
        class: [{ 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
    }),
    button: ({ context, props }) => ({
        class: [
            'relative',
            // Font
            'leading-none',

            // Flex Alignment
            'inline-flex items-center align-bottom text-center',

            // Spacing
            'px-4 py-2',

            // Shape
            'first:rounded-l-md first:rounded-tr-none first:rounded-br-none',
            'last:rounded-tl-none last:rounded-bl-none last:rounded-r-md',

            // Before
            'before:absolute before:left-1 before:top-1 before:w-[calc(100%-0.5rem)] before:h-[calc(100%-0.5rem)] before:rounded-[4px] before:z-0',
            '[&>*]:z-10',

            // Color
            'bg-surface-100 dark:bg-surface-950',
            {
                'text-surface-600 dark:text-white/60 before:bg-transparent': !context.active,
                'text-surface-800 dark:text-white/80 before:bg-surface-0 dark:before:bg-surface-800': context.active
            },

            // Invalid State
            { 'border first:border-r-0 last:border-l-0 border-red-500 dark:border-red-400': props.invalid },

            // States
            'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus:z-10',
            {
                'hover:text-surface-800 dark:hover:text-white/80': !context.active && !props.invalid
            },
            { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled },

            // Transition
            'transition duration-200',

            // Misc
            'cursor-pointer select-none overflow-hidden'
        ]
    }),
    label: {
        class: 'font-medium leading-[normal] text-center w-full z-10 relative'
    }
};
