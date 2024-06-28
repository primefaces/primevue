export default {
    root: ({ props, state }) => ({
        class: [
            // Display and Position
            'inline-flex',
            'relative',

            // Shape
            'rounded-md',

            // Color and Background
            { 'bg-surface-0 dark:bg-surface-950': !props.disabled },
            'border',
            { 'border-surface-300 dark:border-surface-700': !props.invalid },

            // Invalid State
            'invalid:focus:ring-red-200',
            'invalid:hover:border-red-500',
            { 'border-red-500 dark:border-red-400': props.invalid },

            // Transitions
            'transition-all',
            'duration-200',

            // States
            { 'hover:border-surface-400 dark:hover:border-surface-600': !props.invalid },
            { 'outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400 z-10': state.focused },

            // Misc
            'cursor-pointer',
            'select-none',
            { 'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': props.disabled }
        ]
    }),
    labelContainer: {
        class: ['overflow-hidden flex flex-auto cursor-pointer']
    },
    label: {
        class: [
            'block leading-[normal]',

            // Space
            'py-2 px-3',

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
            'rounded-r-md'
        ]
    },
    panel: {
        class: [
            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-white/80',

            // Shape
            'border border-surface-300 dark:border-surface-700',
            'rounded-md',
            'shadow-md'
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
                'p-1',

                // Shape
                'rounded-md',
                'border-none',

                // Color
                'bg-surface-0 dark:bg-surface-900',
                'text-surface-700 dark:text-white/80'
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
            class: ['p-0 my-[2px] mx-0 first:mt-0', 'rounded-md', 'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10']
        },
        content: ({ context, props }) => ({
            class: [
                // Flex and Alignment
                'flex items-center',

                // Shape
                'rounded-md',

                // Spacing
                'py-1 px-2',

                // Colors
                context.selected ? 'bg-primary-highlight text-primary-highlight-inverse' : 'bg-transparent text-surface-600 dark:text-white/70',

                // States
                { 'hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]': (props.selectionMode == 'single' || props.selectionMode == 'multiple') && !context.selected },

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
                'w-7 h-7',

                // Spacing
                'mr-2',

                // Colors
                'bg-transparent',
                {
                    'text-surface-600 dark:text-white/70': !context.selected,
                    'text-primary-600 dark:text-white': context.selected,
                    invisible: context.leaf
                },

                // States
                'hover:bg-surface-200/20 dark:hover:bg-surface-500/20',
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400',

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
                    'w-5',
                    'h-5',

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
                    'w-5',
                    'h-5',

                    // Shape
                    'rounded',
                    'border',

                    // Colors
                    {
                        'border-surface-300 dark:border-surface-700': !context.checked && !props.invalid,
                        'bg-surface-0 dark:bg-surface-950': !context.checked && !props.invalid && !props.disabled,
                        'border-primary bg-primary': context.checked
                    },

                    // States
                    {
                        'peer-hover:border-surface-400 dark:peer-hover:border-surface-600': !props.disabled && !context.checked && !props.invalid,
                        'peer-hover:bg-primary-hover peer-hover:border-primary-hover': !props.disabled && context.checked,
                        'peer-focus-visible:z-10 peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400': !props.disabled,
                        'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': props.disabled
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
                    'border border-surface-300 dark:border-surface-700',

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
                    'w-[0.875rem]',
                    'h-[0.875rem]',

                    // Colors
                    {
                        'text-white dark:text-surface-950': !instance.partialChecked,
                        'text-surface-700 dark:text-surface-0/80': instance.partialChecked
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
            class: ['m-0 list-none p-0 pl-4 [&:not(ul)]:pl-0 [&:not(ul)]:my-[2px]']
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
        input: ({ props }) => ({
            class: [
                'relative',

                // Font
                'leading-none',

                // Spacing
                'm-0',
                'py-2 px-3 pr-10',

                // Size
                'w-full',

                // Shape
                'rounded-md',
                'border',

                // Colors
                'text-surface-800 dark:text-white/80',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                { 'bg-surface-0 dark:bg-surface-950': !props.disabled },
                { 'border-surface-300 dark:border-surface-700': !props.invalid },

                // Invalid State
                'invalid:focus:ring-red-200',
                'invalid:hover:border-red-500',
                { 'border-red-500 dark:border-red-400': props.invalid },

                // States
                {
                    'hover:border-surface-400 dark:hover:border-surface-600': !props.disabled && !props.invalid,
                    'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10': !props.disabled,
                    'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': props.disabled
                },

                // Transition & Misc
                'appearance-none',
                'transition-colors duration-200'
            ]
        }),
        loadingicon: {
            class: ['text-surface-500 dark:text-surface-0/70', 'absolute top-[50%] right-[50%] -mt-2 -mr-2 animate-spin']
        },
        searchicon: {
            class: [
                // Position
                'absolute top-1/2 -mt-2 right-3 z-20',

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
