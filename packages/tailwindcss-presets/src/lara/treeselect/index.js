export default {
    root: ({ props, state }) => ({
        class: [
            // Display and Position
            'inline-flex',
            'relative',

            // Shape
            'rounded-md',

            // Color and Background
            'bg-surface-0 dark:bg-surface-900',
            'border',
            { 'border-surface-300 dark:border-surface-600': !props.invalid },

            // Invalid State
            { 'border-red-500 dark:border-red-400': props.invalid },

            // Transitions
            'transition-all',
            'duration-200',

            // States
            { 'hover:border-primary': !props.invalid },
            { 'outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50': state.focused },

            // Misc
            'cursor-pointer',
            'select-none',
            { 'opacity-60': props.disabled, 'pointer-events-none': props.disabled, 'cursor-default': props.disabled }
        ]
    }),
    labelContainer: {
        class: ['overflow-hidden flex flex-auto cursor-pointer']
    },
    label: {
        class: [
            'block leading-[normal]',

            // Space
            'p-3',

            // Color
            'text-surface-800 dark:text-white/80',

            // Transition
            'transition duration-200',

            // Misc
            'overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis'
        ]
    },
    trigger: {
        class: [
            // Flexbox
            'flex items-center justify-center',
            'shrink-0',

            // Color and Background
            'bg-transparent',
            'text-surface-500',

            // Size
            'w-12',

            // Shape
            'rounded-tr-md',
            'rounded-br-md'
        ]
    },
    panel: {
        class: [
            // Position
            'absolute top-0 left-0',

            // Shape
            'border-0 dark:border',
            'rounded-md',
            'shadow-md',

            // Color
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-800 dark:text-white/80',
            'dark:border-surface-700'
        ]
    },
    wrapper: {
        class: [
            // Sizing
            'max-h-[200px]',

            // Misc
            'overflow-auto'
        ]
    },
    tree: {
        root: {
            class: [
                // Space
                'p-5'
            ]
        },
        wrapper: {
            class: ['overflow-auto']
        },
        container: {
            class: [
                // Spacing
                'm-0 p-0',

                // Misc
                'list-none overflow-auto'
            ]
        },
        node: {
            class: ['p-1', 'rounded-md', 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset focus:ring-primary-400/50 dark:focus:ring-primary-300/50']
        },
        content: ({ context, props }) => ({
            class: [
                // Flex and Alignment
                'flex items-center',

                // Shape
                'rounded-md',

                // Spacing
                'p-2',

                // Colors
                'text-surface-600 dark:text-white/70',
                { 'bg-primary-highlight text-primary-highlight-inverse': context.selected },

                // States
                { 'hover:bg-surface-50 dark:hover:bg-surface-700/40': (props.selectionMode == 'single' || props.selectionMode == 'multiple') && !context.selected },

                // Transition
                'transition-shadow duration-200',

                { 'cursor-pointer select-none': props.selectionMode == 'single' || props.selectionMode == 'multiple' }
            ]
        }),
        toggler: ({ context }) => ({
            class: [
                // Flex and Alignment
                'inline-flex items-center justify-center',

                // Shape
                'border-0 rounded-full',

                // Size
                'w-8 h-8',

                // Spacing
                'mr-2',

                // Colors
                'bg-transparent',
                {
                    'text-surface-500 dark:text-white': !context.selected,
                    'text-primary-600 dark:text-white': context.selected,
                    invisible: context.leaf
                },

                // States
                'hover:bg-surface-200/20 dark:hover:bg-surface-500/20',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

                // Transition
                'transition duration-200',

                // Misc
                'cursor-pointer select-none'
            ]
        }),
        nodeCheckbox: ({ props, context, instance }) => ({
            root: {
                class: [
                    'relative',

                    // Alignment
                    'inline-flex',
                    'align-bottom',

                    // Size
                    'w-6',
                    'h-6',

                    // Spacing
                    'mr-2',

                    // Misc
                    'cursor-pointer',
                    'select-none'
                ]
            },
            box: {
                class: [
                    // Alignment
                    'flex',
                    'items-center',
                    'justify-center',

                    // Size
                    'w-6',
                    'h-6',

                    // Shape
                    'rounded-md',
                    'border-2',

                    // Colors
                    {
                        'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked,
                        'border-primary bg-primary': context.checked
                    },

                    // States
                    {
                        'peer-hover:border-primary': !props.disabled && !context.checked,
                        'peer-hover:bg-primary-hover peer-hover:border-primary-hover': !props.disabled && context.checked,
                        'peer-focus-visible:border-primary-500 dark:peer-focus-visible:border-primary-400 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20 dark:peer-focus-visible:ring-primary-300/20': !props.disabled,
                        'cursor-default opacity-60': props.disabled
                    },

                    // Transitions
                    'transition-colors',
                    'duration-200'
                ]
            },
            input: {
                class: [
                    'peer',

                    // Size
                    'w-full ',
                    'h-full',

                    // Position
                    'absolute',
                    'top-0 left-0',
                    'z-10',

                    // Spacing
                    'p-0',
                    'm-0',

                    // Shape
                    'opacity-0',
                    'rounded-md',
                    'outline-none',
                    'border-2 border-surface-200 dark:border-surface-700',

                    // Misc
                    'appearance-none',
                    'cursor-pointer'
                ]
            },
            icon: {
                class: [
                    // Font
                    'text-base leading-none',

                    // Size
                    'w-4',
                    'h-4',

                    // Colors
                    {
                        'text-white dark:text-surface-900': !instance.partialChecked,
                        'text-gray dark:text-white': instance.partialChecked
                    },

                    // Transitions
                    'transition-all',
                    'duration-200'
                ]
            }
        }),
        nodeicon: {
            class: [
                // Space
                'mr-2',

                // Color
                'text-surface-600 dark:text-white/70'
            ]
        },
        subgroup: {
            class: ['m-0 list-none p-0 pl-2 mt-1']
        },
        filtercontainer: {
            class: [
                'relative block',

                // Space
                'mb-2',

                // Size
                'w-full'
            ]
        },
        input: {
            class: [
                'relative',
                // Font
                'leading-none',

                // Spacing
                'm-0',
                'p-3 pr-10',

                // Size
                'w-full',

                // Shape
                'rounded-md',

                // Colors
                'text-surface-600 dark:text-surface-200',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                'bg-surface-0 dark:bg-surface-900',
                'border border-surface-300 dark:border-surface-600',

                // States
                'hover:border-primary',
                'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50',

                // Transition & Misc
                'appearance-none',
                'transition-colors duration-200'
            ]
        },
        loadingicon: {
            class: ['text-surface-500 dark:text-surface-0/70', 'absolute top-[50%] right-[50%] -mt-2 -mr-2 animate-spin']
        },
        searchicon: {
            class: [
                // Position
                'absolute top-1/2 -mt-2 right-3',

                // Color
                'text-surface-600 dark:hover:text-white/70'
            ]
        }
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
