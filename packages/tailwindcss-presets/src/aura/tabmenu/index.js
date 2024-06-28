export default {
    root: {
        class: 'overflow-x-auto'
    },
    menu: {
        class: [
            // Flexbox
            'flex flex-1',

            // Spacing
            'list-none',
            'p-0 m-0',

            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'border-b-2 border-surface-200 dark:border-surface-700',
            'text-surface-900 dark:text-surface-0/80'
        ]
    },
    menuitem: {
        class: 'mr-0'
    },
    action: ({ context, state }) => ({
        class: [
            'relative',

            // Font
            'font-semibold leading-none',

            // Flexbox and Alignment
            'flex items-center',

            // Spacing
            'py-4 px-[1.125rem]',
            '-mb-px',

            // Shape
            'border-b',
            'rounded-t-md',

            // Colors and Conditions
            {
                'border-surface-200 dark:border-surface-700': state.d_activeIndex !== context.index,
                'bg-surface-0 dark:bg-surface-900': state.d_activeIndex !== context.index,
                'text-surface-700 dark:text-surface-0/80': state.d_activeIndex !== context.index,

                'bg-surface-0 dark:bg-surface-900': state.d_activeIndex === context.index,
                'border-primary': state.d_activeIndex === context.index,
                'text-primary': state.d_activeIndex === context.index
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300',
            {
                'hover:text-surface-900 dark:hover:text-surface-0': state.d_activeIndex !== context.index
            },

            // Transitions
            'transition-all duration-200',

            // Misc
            'cursor-pointer select-none text-decoration-none',
            'overflow-hidden',
            'user-select-none'
        ]
    }),
    icon: {
        class: 'mr-2'
    }
};
