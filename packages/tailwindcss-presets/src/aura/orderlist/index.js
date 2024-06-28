export default {
    root: {
        class: [
            // Flexbox
            'flex xl:flex-row flex-col'
        ]
    },
    controls: {
        class: [
            // Flexbox & Alignment
            'flex xl:flex-col justify-center gap-2',

            // Spacing
            'p-[1.125rem]'
        ]
    },
    moveupbutton: {
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
    movedownbutton: {
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
    movetopbutton: {
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
    movebottombutton: {
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
    container: {
        class: [
            'flex-auto',

            // Shape
            'rounded-md',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',
            'outline-none'
        ]
    },
    header: {
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
    list: {
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
    })
};
