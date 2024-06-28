export default {
    root: {
        class: [
            // Spacing
            'p-[1.125rem] pt-0',

            // Shape
            'rounded-md',

            // Color
            'border border-surface-200 dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80'
        ]
    },
    legend: ({ props }) => ({
        class: [
            // Font
            'font-semibold',
            'leading-none',

            //Spacing
            'p-0 mb-[0.375rem]',

            // Shape
            'rounded-md',

            // Color
            'text-surface-700 dark:text-surface-0/80',
            'bg-surface-0 dark:bg-surface-900',

            // Transition
            'transition-none',

            // States
            { 'hover:bg-surface-100 dark:hover:bg-surface-800': props.toggleable }
        ]
    }),
    toggler: ({ props }) => ({
        class: [
            // Alignments
            'flex items-center justify-center',
            'relative',

            //Spacing
            { 'py-2 px-3': props.toggleable },

            // Shape
            { 'rounded-md': props.toggleable },

            // Color
            { 'text-surface-700 dark:text-surface-200 hover:text-surface-900': props.toggleable },

            // States
            { 'hover:text-surface-900 dark:hover:text-surface-100': props.toggleable },
            { 'focus:outline-none focus:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300': props.toggleable },

            // Misc
            {
                'transition-none cursor-pointer overflow-hidden select-none': props.toggleable
            }
        ]
    }),
    togglerIcon: {
        class: 'mr-2 inline-block'
    },
    legendTitle: ({ props }) => ({
        class: ['flex items-center justify-center leading-none', { 'py-2 px-3': !props.toggleable }]
    }),
    content: {
        class: 'p-0'
    },
    transition: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]',
        enterToClass: 'max-h-[1000px]',
        leaveFromClass: 'max-h-[1000px]',
        leaveActiveClass: 'overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]',
        leaveToClass: 'max-h-0'
    }
};
