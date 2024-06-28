export default {
    root: {
        class: [
            //Shape
            'rounded-md',

            //Colors
            'border border-surface-200 dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-900'
        ]
    },
    header: ({ props }) => ({
        class: [
            // Flex
            'flex items-center justify-between',

            // Colors
            'text-surface-700 dark:text-surface-0/80',
            'bg-transparent',

            //Shape
            'rounded-tl-md rounded-tr-md',
            'border-0',

            // Conditional Spacing
            { 'p-[1.125rem]': !props.toggleable, 'py-3 px-[1.125rem]': props.toggleable }
        ]
    }),
    title: {
        class: 'leading-none font-semibold'
    },
    toggler: {
        class: [
            // Alignments
            'inline-flex items-center justify-center',
            'relative',

            // Sized
            'w-7 h-7',
            'm-0 p-0',

            //Shape
            'border-0 rounded-full',

            //Color
            'bg-transparent',
            'text-surface-600 dark:text-surface-0/80',

            // States
            'hover:text-surface-800 dark:hover:text-surface-0',
            'hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]',
            'focus:outline-none focus:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300',

            // Transitions
            'transition-all duration-200 ease-in-out',

            // Misc
            'overflow-hidden no-underline',
            'cursor-pointer'
        ]
    },
    togglerIcon: {
        class: 'inline-block w-4 h-4'
    },
    content: {
        class: [
            // Spacing
            'p-[1.125rem] pt-0',

            // Shape
            'border-0 border-t-0 last:rounded-br-md last:rounded-bl-md',

            //Color
            'text-surface-700 dark:text-surface-0/80'
        ]
    },
    footer: {
        class: [
            // Spacing
            'p-[1.125rem] pt-0',

            // Shape
            'border-0 border-t-0 rounded-br-lg rounded-bl-lg',

            //Color
            'text-surface-700 dark:text-surface-0/80'
        ]
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
