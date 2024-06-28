export default {
    root: {
        class: [
            // Flexbox
            'flex xl:flex-row flex-col'
        ]
    },
    sourcecontrols: {
        class: [
            // Flexbox & Alignment
            'flex xl:flex-col justify-center gap-2',

            // Spacing
            'p-[1.125rem]'
        ]
    },
    sourcemoveupbutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    sourcemovetopbutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    sourcemovedownbutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    sourcemovebottombutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    sourcewrapper: {
        class: [
            // Flexbox
            'grow shrink basis-2/4',

            // Shape
            'rounded-md',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',
            'outline-none'
        ]
    },
    sourceheader: {
        class: [
            'font-semibold',

            // Shape
            'border-0 rounded-t-md',

            // Spacing
            'pt-3 px-4 pb-2',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-900'
        ]
    },
    sourcelist: {
        class: [
            // Spacing
            'list-none m-0',
            'p-1',

            // Size
            'min-h-[12rem] max-h-[24rem]',

            // Shape
            'rounded-b-md',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-900',

            // Focus & Outline
            'outline-none',

            // Misc
            'overflow-auto'
        ]
    },
    item: ({ context }) => ({
        class: [
            // Position
            'relative',

            // Spacing
            'py-2 px-3 m-0 my-[2px] first:mt-0 last:mb-0',

            // Shape
            'border-none',
            'rounded-md',

            // Transition
            'transition duration-200',

            // Color
            { 'text-surface-700 dark:text-white/80 bg-surface-0 dark:bg-surface-900': !context.active },
            { 'text-primary-highlight-inverse bg-primary-highlight': context.active },

            // State
            {
                'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.active,
                'hover:bg-primary-highlight-hover': context.active
            },

            // Misc
            'cursor-pointer overflow-hidden'
        ]
    }),
    buttons: {
        class: [
            // Flexbox & Alignment
            'flex xl:flex-col justify-center gap-2',

            // Spacing
            'p-[1.125rem]'
        ]
    },
    movetotargetbutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    movealltotargetbutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    movetosourcebutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    movealltosourcebutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    targetcontrols: {
        class: [
            // Flexbox & Alignment
            'flex xl:flex-col justify-center gap-2',

            // Spacing
            'p-[1.125rem]'
        ]
    },
    targetmoveupbutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    targetmovetopbutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    targetmovedownbutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    targetmovebottombutton: {
        root: ({ context }) => ({
            class: [
                // Flexbox & Alignment
                'relative inline-flex items-center justify-center',

                // Shape
                'rounded-md',

                // Color
                'text-surface-700 dark:text-surface-0',
                'bg-surface-100 dark:bg-surface-800',
                'border border-surface-100 dark:border-surface-800',

                // Spacing & Size
                'w-10',
                'm-0',
                'px-0 py-2',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-surface-200 dark:hover:bg-[rgba(255,255,255,0.03)] hover:border-surface-200 dark:hover:border-surface-700',
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'focus:ring-primary-500 dark:focus:ring-primary-400',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                //Font
                'leading-[normal]',

                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    targetwrapper: {
        class: [
            // Flexbox
            'grow shrink basis-2/4',

            // Shape
            'rounded-md',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',
            'outline-none'
        ]
    },
    targetheader: {
        class: [
            'font-semibold',

            // Shape
            'border-0 rounded-t-md',

            // Spacing
            'pt-3 px-4 pb-2',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-900'
        ]
    },
    targetlist: {
        class: [
            // Spacing
            'list-none m-0',
            'p-1',

            // Size
            'min-h-[12rem] max-h-[24rem]',

            // Shape
            'rounded-b-md',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-900',

            // Focus & Outline
            'outline-none',

            // Misc
            'overflow-auto'
        ]
    },
    transition: {
        enterFromClass: '!transition-none',
        enterActiveClass: '!transition-none',
        leaveActiveClass: '!transition-none',
        leaveToClass: '!transition-none'
    }
};
