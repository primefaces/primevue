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
                'leading-[normal]',

                // Flex & Alignment
                { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },
                'text-center',

                // Spacing
                'm-0',
                {
                    'p-3': props.size == null
                },

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
                'bg-surface-0 dark:bg-surface-900',
                'border',
                { 'border-surface-300 dark:border-surface-600': !props.invalid },

                // Invalid State
                'invalid:focus:ring-red-200',
                'invalid:hover:border-red-500',
                { 'border-red-500 dark:border-red-400': props.invalid },

                // States
                {
                    'hover:border-primary': !context.disabled && !props.invalid,
                    'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10': !context.disabled,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                },

                // Filled State *for FloatLabel
                { filled: parent.instance?.$name == 'FloatLabel' && context.filled },

                // Misc
                'appearance-none',
                'transition-colors duration-200'
            ]
        })
    }
};
