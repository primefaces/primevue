export default {
    root: {
        class: [
            // Alignment
            'flex items-center',
            'gap-2'
        ]
    },
    input: {
        root: ({ props, context, parent }) => ({
            class: [
                // Font
                'leading-none',

                // Flex & Alignment
                { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },
                'text-center',

                // Spacing
                'm-0',
                'py-2 px-3',

                // Size
                'w-10',

                // Shape
                { 'rounded-md': parent.instance.$name !== 'InputGroup' },
                { 'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup' },
                { 'border-0 border-y border-l last:border-r': parent.instance.$name == 'InputGroup' },
                { 'first:ml-0 ml-[-1px]': parent.instance.$name == 'InputGroup' && !props.showButtons },

                // Colors
                'text-surface-800 dark:text-white/80',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                { 'bg-surface-0 dark:bg-surface-950': !context.disabled },
                'border',
                { 'border-surface-300 dark:border-surface-700': !props.invalid },

                // Invalid State
                'invalid:focus:ring-red-200',
                'invalid:hover:border-red-500',
                { 'border-red-500 dark:border-red-400': props.invalid },

                // States
                {
                    'hover:border-surface-400 dark:hover:border-surface-600': !context.disabled && !props.invalid,
                    'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10': !context.disabled,
                    'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': context.disabled
                },

                // Misc
                'appearance-none',
                'transition-colors duration-200'
            ]
        })
    }
};
