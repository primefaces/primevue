export default {
    root: {
        class: [
            // Flex & Alignment
            'flex items-center justify-center flex-wrap',

            // Spacing
            'px-4 py-2',

            // Shape
            'border-0 rounded-md',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-500 dark:text-white/60'
        ]
    },
    firstpagebutton: ({ context }) => ({
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',

            // Shape
            'border-0 rounded-full',

            // Size
            'min-w-[2.5rem] h-10 m-[0.143rem]',
            'leading-none',

            // Color
            'text-surface-500 dark:text-white/60',

            // State
            {
                'hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400': !context.disabled
            },

            // Transition
            'transition duration-200',

            // Misc
            'user-none overflow-hidden',
            { 'cursor-default pointer-events-none opacity-60': context.disabled }
        ]
    }),
    previouspagebutton: ({ context }) => ({
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',

            // Shape
            'border-0 rounded-full',

            // Size
            'min-w-[2.5rem] h-10 m-[0.143rem]',
            'leading-none',

            // Color
            'text-surface-500 dark:text-white/60',

            // State
            {
                'hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400': !context.disabled
            },

            // Transition
            'transition duration-200',

            // Misc
            'user-none overflow-hidden',
            { 'cursor-default pointer-events-none opacity-60': context.disabled }
        ]
    }),
    nextpagebutton: ({ context }) => ({
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',

            // Shape
            'border-0 rounded-full',

            // Size
            'min-w-[2.5rem] h-10 m-[0.143rem]',
            'leading-none',

            // Color
            'text-surface-500 dark:text-white/60',

            // State
            {
                'hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400': !context.disabled
            },

            // Transition
            'transition duration-200',

            // Misc
            'user-none overflow-hidden',
            { 'cursor-default pointer-events-none opacity-60': context.disabled }
        ]
    }),
    lastpagebutton: ({ context }) => ({
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',

            // Shape
            'border-0 rounded-full',

            // Size
            'min-w-[2.5rem] h-10 m-[0.143rem]',
            'leading-none',

            // Color
            'text-surface-500 dark:text-white/60',

            // State
            {
                'hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400': !context.disabled
            },

            // Transition
            'transition duration-200',

            // Misc
            'user-none overflow-hidden',
            { 'cursor-default pointer-events-none opacity-60': context.disabled }
        ]
    }),
    pagebutton: ({ context }) => ({
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',

            // Shape
            'border-0 rounded-full',

            // Size
            'min-w-[2.5rem] h-10 m-[0.143rem]',
            'leading-none',

            // Color
            'text-surface-500 dark:text-white/60',

            // State
            {
                'hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400': !context.disabled
            },

            // Transition
            'transition duration-200',

            // Misc
            'user-none overflow-hidden',
            { 'cursor-default pointer-events-none opacity-60': context.disabled }
        ]
    }),
    rowperpagedropdown: {
        root: ({ props, state }) => ({
            class: [
                // Display and Position
                'inline-flex',
                'relative',

                // Shape
                'h-10',
                'rounded-md',

                // Spacing
                'mx-2',

                // Color and Background
                'bg-surface-0 dark:bg-surface-950',
                'border border-surface-300 dark:border-surface-700',

                // Transitions
                'transition-all',
                'duration-200',

                // States
                'hover:border-surface-400 dark:hover:border-surface-600',
                { 'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400': !state.focused },

                // Misc
                'cursor-pointer',
                'select-none',
                { 'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        input: {
            class: [
                //Font
                'leading-[normal]',

                // Display
                'block',
                'flex-auto',

                // Color and Background
                'bg-transparent',
                'border-0',
                'text-surface-800 dark:text-white/80',

                // Sizing and Spacing
                'w-[1%]',
                'py-2 pl-3 pr-0',

                //Shape
                'rounded-none',

                // Transitions
                'transition',
                'duration-200',

                // States
                'focus:outline-none focus:shadow-none',

                // Misc
                'relative',
                'cursor-pointer',
                'overflow-hidden overflow-ellipsis',
                'whitespace-nowrap',
                'appearance-none'
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
                'w-10',

                // Shape
                'rounded-tr-md',
                'rounded-br-md'
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
        list: {
            class: 'p-1 list-none m-0'
        },
        item: ({ context }) => ({
            class: [
                'relative',

                // Font
                'leading-none',

                // Spacing
                'm-0 px-3 py-2',
                'first:mt-0 mt-[2px]',

                // Shape
                'border-0 rounded',

                // Colors
                {
                    'text-surface-700 dark:text-white/80': !context.focused && !context.selected,
                    'bg-surface-200 dark:bg-surface-600/60': context.focused && !context.selected,
                    'text-surface-700 dark:text-white/80': context.focused && !context.selected,

                    'text-primary-highlight-inverse': context.selected,
                    'bg-primary-highlight': context.selected
                },

                //States
                { 'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.focused && !context.selected },
                { 'hover:bg-primary-highlight-hover': context.selected },
                { 'hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]': context.focused && !context.selected },

                // Transitions
                'transition-shadow',
                'duration-200',

                // Misc
                'cursor-pointer',
                'overflow-hidden',
                'whitespace-nowrap'
            ]
        })
    },
    jumptopageinput: {
        root: {
            class: 'inline-flex mx-2'
        },
        input: {
            root: {
                class: [
                    'relative',

                    //Font
                    'leading-none',

                    // Display
                    'block',
                    'flex-auto',

                    // Colors
                    'text-surface-600 dark:text-surface-200',
                    'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                    'bg-surface-0 dark:bg-surface-950',
                    'border border-surface-300 dark:border-surface-700',

                    // Sizing and Spacing
                    'w-[1%] max-w-[3rem]',
                    'py-2 px-3 m-0',

                    //Shape
                    'rounded-md',

                    // Transitions
                    'transition',
                    'duration-200',

                    // States
                    'hover:border-surface-400 dark:hover:border-surface-600',
                    'focus:outline-none focus:shadow-none',
                    'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400',

                    // Misc
                    'cursor-pointer',
                    'overflow-hidden overflow-ellipsis',
                    'whitespace-nowrap',
                    'appearance-none'
                ]
            }
        }
    },
    jumptopagedropdown: {
        root: ({ props, state }) => ({
            class: [
                // Display and Position
                'inline-flex',
                'relative',

                // Shape
                'h-10',
                'rounded-md',

                // Spacing
                'mx-2',

                // Color and Background
                'bg-surface-0 dark:bg-surface-950',
                'border border-surface-300 dark:border-surface-700',

                // Transitions
                'transition-all',
                'duration-200',

                // States
                'hover:border-surface-400 dark:hover:border-surface-600',
                { 'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400': !state.focused },

                // Misc
                'cursor-pointer',
                'select-none',
                { 'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        input: {
            class: [
                //Font
                'leading-[normal]',

                // Display
                'block',
                'flex-auto',

                // Color and Background
                'bg-transparent',
                'border-0',
                'text-surface-800 dark:text-white/80',

                // Sizing and Spacing
                'w-[1%]',
                'py-2 pl-3 pr-0',

                //Shape
                'rounded-none',

                // Transitions
                'transition',
                'duration-200',

                // States
                'focus:outline-none focus:shadow-none',

                // Misc
                'relative',
                'cursor-pointer',
                'overflow-hidden overflow-ellipsis',
                'whitespace-nowrap',
                'appearance-none'
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
                'w-10',

                // Shape
                'rounded-tr-md',
                'rounded-br-md'
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
        list: {
            class: 'p-1 list-none m-0'
        },
        item: ({ context }) => ({
            class: [
                'relative',

                // Font
                'leading-none',

                // Spacing
                'm-0 px-3 py-2',
                'first:mt-0 mt-[2px]',

                // Shape
                'border-0 rounded',

                // Colors
                {
                    'text-surface-700 dark:text-white/80': !context.focused && !context.selected,
                    'bg-surface-200 dark:bg-surface-600/60': context.focused && !context.selected,
                    'text-surface-700 dark:text-white/80': context.focused && !context.selected,

                    'text-primary-highlight-inverse': context.selected,
                    'bg-primary-highlight': context.selected
                },

                //States
                { 'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.focused && !context.selected },
                { 'hover:bg-primary-highlight-hover': context.selected },
                { 'hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]': context.focused && !context.selected },

                // Transitions
                'transition-shadow',
                'duration-200',

                // Misc
                'cursor-pointer',
                'overflow-hidden',
                'whitespace-nowrap'
            ]
        })
    },
    start: {
        class: 'mr-auto'
    },
    end: {
        class: 'ml-auto'
    }
};
