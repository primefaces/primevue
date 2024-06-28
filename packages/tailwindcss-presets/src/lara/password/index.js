export default {
    root: ({ props }) => ({
        class: [
            'inline-flex relative',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            },
            { '[&>input]:pr-10': props.toggleMask }
        ]
    }),
    panel: {
        class: [
            // Spacing
            'p-5',

            // Shape
            'border-0 dark:border',
            'shadow-md rounded-md',

            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-white/80',
            'dark:border-surface-700'
        ]
    },
    meter: {
        class: [
            // Position and Overflow
            'overflow-hidden',
            'relative',

            // Shape and Size
            'border-0',
            'h-3',

            // Spacing
            'mb-2',

            // Colors
            'bg-surface-100 dark:bg-surface-700'
        ]
    },
    meterlabel: ({ instance }) => ({
        class: [
            // Size
            'h-full',

            // Colors
            {
                'bg-red-500 dark:bg-red-400/50': instance?.meter?.strength == 'weak',
                'bg-orange-500 dark:bg-orange-400/50': instance?.meter?.strength == 'medium',
                'bg-green-500 dark:bg-green-400/50': instance?.meter?.strength == 'strong'
            },

            // Transitions
            'transition-all duration-1000 ease-in-out'
        ]
    }),
    showicon: {
        class: ['absolute top-1/2 right-3 -mt-2 z-10', 'text-surface-600 dark:text-white/70']
    },
    hideicon: {
        class: ['absolute top-1/2 right-3 -mt-2 z-10', 'text-surface-600 dark:text-white/70']
    },
    input: {
        root: ({ props, context, parent }) => ({
            class: [
                // Font
                'leading-[normal]',

                // Flex
                { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },

                // Spacing
                'm-0',
                {
                    'px-4 py-4': props.size == 'large',
                    'px-2 py-2': props.size == 'small',
                    'p-3': props.size == null
                },
                'w-full',

                // Shape
                { 'rounded-md': parent.instance.$name !== 'InputGroup' },
                { 'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup' },
                { 'border-0 border-y border-l last:border-r': parent.instance.$name == 'InputGroup' },
                { 'first:ml-0 -ml-px': parent.instance.$name == 'InputGroup' && !props.showButtons },

                // Colors
                'text-surface-600 dark:text-surface-200',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                'bg-surface-0 dark:bg-surface-900',
                'border',
                { 'border-surface-300 dark:border-surface-600': !parent.props.invalid },

                // Invalid State
                { 'border-red-500 dark:border-red-400': parent.props.invalid },

                // States
                {
                    'hover:border-primary': !context.disabled && !parent.props.invalid,
                    'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10': !context.disabled,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                },

                // Filled State *for FloatLabel
                { filled: parent.instance?.$parentInstance?.$name == 'FloatLabel' && parent.props.modelValue !== null && parent.props.modelValue?.length !== 0 },

                // Misc
                'appearance-none',
                'transition-colors duration-200'
            ]
        })
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
