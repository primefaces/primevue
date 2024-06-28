export default {
    root: {
        class: [
            // Flexbox
            'flex'
        ]
    },
    controls: {
        class: [
            // Flexbox & Alignment
            'flex flex-col justify-center gap-2',

            // Spacing
            'p-5'
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
                'text-primary-inverse',
                'bg-primary',
                'border border-primary',

                // Spacing & Size
                'w-12',
                'm-0',
                'px-0 py-3',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-primary-hover hover:border-primary-hover',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary/50',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
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
                'text-primary-inverse',
                'bg-primary',
                'border border-primary',

                // Spacing & Size
                'w-12',
                'm-0',
                'px-0 py-3',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-primary-hover hover:border-primary-hover',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary/50',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
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
                'text-primary-inverse',
                'bg-primary',
                'border border-primary',

                // Spacing & Size
                'w-12',
                'm-0',
                'px-0 py-3',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-primary-hover hover:border-primary-hover',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary/50',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
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
                'text-primary-inverse',
                'bg-primary',
                'border border-primary',

                // Spacing & Size
                'w-12',
                'm-0',
                'px-0 py-3',

                // Transitions
                'transition duration-200 ease-in-out',

                // State
                'hover:bg-primary-hover hover:border-primary-hover',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary/50',
                { 'cursor-default pointer-events-none opacity-60': context.disabled },

                // Interactivity
                'cursor-pointer user-select-none'
            ]
        }),
        label: {
            class: [
                // Flexbox
                'flex-initial',

                // Size
                'w-0'
            ]
        }
    },
    container: {
        class: ['flex-auto']
    },
    header: {
        class: [
            'font-bold',

            // Shape
            'border-b-0 rounded-t-md',

            // Spacing
            'p-5',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-50 dark:bg-surface-800',
            'border border-surface-200 dark:border-surface-700'
        ]
    },
    list: {
        class: [
            // Spacing
            'list-none m-0 p-0',

            // Size
            'min-h-[12rem] max-h-[24rem]',

            // Shape
            'rounded-b-md',

            // Color
            'text-surface-600 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-800',
            'border border-surface-200 dark:border-surface-700',

            // Spacing
            'py-3 px-0',

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
            'py-3 px-5 m-0',

            // Shape
            'border-none',

            // Transition
            'transition duration-200',

            // Color
            { 'text-surface-700 dark:text-white/80 bg-surface-0 dark:bg-surface-900': !context.active },
            { 'text-primary-highlight-inverse bg-primary-highlight': context.active },

            // State
            {
                'hover:bg-surface-100 dark:hover:bg-surface-700': !context.active,
                'hover:bg-primary-highlight-hover': context.active
            },

            // Misc
            'cursor-pointer overflow-hidden'
        ]
    })
};
