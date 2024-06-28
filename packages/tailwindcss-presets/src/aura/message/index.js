export default {
    root: ({ props }) => ({
        class: [
            // Spacing and Shape
            'my-4 mx-0',
            'rounded-md',
            'border',

            // Colors
            {
                'bg-blue-100/70 dark:bg-blue-500/20': props.severity == 'info',
                'bg-green-100/70 dark:bg-green-500/20': props.severity == 'success',
                'bg-surface-100/70 dark:bg-surface-500/20': props.severity == 'secondary',
                'bg-orange-100/70 dark:bg-orange-500/20': props.severity == 'warn',
                'bg-red-100/70 dark:bg-red-500/20': props.severity == 'error',
                'bg-surface-950 dark:bg-surface-0': props.severity == 'contrast'
            },
            {
                'border-blue-200 dark:border-blue-500/20': props.severity == 'info',
                'border-green-200 dark:border-green-500/20': props.severity == 'success',
                'border-surface-200 dark:border-surface-500/20': props.severity == 'secondary',
                'border-orange-200 dark:border-orange-500/20': props.severity == 'warn',
                'border-red-200 dark:border-red-500/20': props.severity == 'error',
                'border-surface-950 dark:border-surface-0': props.severity == 'contrast'
            },
            {
                'text-blue-700 dark:text-blue-300': props.severity == 'info',
                'text-green-700 dark:text-green-300': props.severity == 'success',
                'text-surface-700 dark:text-surface-300': props.severity == 'secondary',
                'text-orange-700 dark:text-orange-300': props.severity == 'warn',
                'text-red-700 dark:text-red-300': props.severity == 'error',
                'text-surface-0 dark:text-surface-950': props.severity == 'contrast'
            }
        ]
    }),
    wrapper: {
        class: [
            // Flexbox
            'flex items-center',

            // Spacing
            'py-2 px-3'
        ]
    },
    icon: {
        class: [
            // Sizing and Spacing
            'w-4 h-4',
            'leading-[normal] mr-2 shrink-0'
        ]
    },
    text: {
        class: [
            // Font and Text
            'text-base leading-[normal]',
            'font-medium'
        ]
    },
    button: ({ props }) => ({
        class: [
            // Flexbox
            'flex items-center justify-center',

            // Size
            'w-7 h-7',

            // Spacing and Misc
            'ml-auto  relative',

            // Shape
            'rounded-full',

            // Colors
            'bg-transparent',

            // Transitions
            'transition duration-200 ease-in-out',

            // States
            'hover:bg-surface-0/30 dark:hover:bg-[rgba(255,255,255,0.03)]',
            'focus:outline-none focus:outline-offset-0 focus:ring-1',
            {
                'focus:ring-blue-500 dark:focus:ring-blue-400': props.severity == 'info',
                'focus:ring-green-500 dark:focus:ring-green-400': props.severity == 'success',
                'focus:ring-surface-500 dark:focus:ring-surface-400': props.severity == 'secondary',
                'focus:ring-orange-500 dark:focus:ring-orange-400': props.severity == 'warn',
                'focus:ring-red-500 dark:focus:ring-red-4000': props.severity == 'error',
                'focus:ring-surface-0 dark:focus:ring-surface-950': props.severity == 'contrast'
            },

            // Misc
            'overflow-hidden'
        ]
    }),
    transition: {
        enterFromClass: 'opacity-0',
        enterActiveClass: 'transition-opacity duration-300',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-300 ease-in',
        leaveToClass: 'max-h-0 opacity-0 !m-0'
    }
};
