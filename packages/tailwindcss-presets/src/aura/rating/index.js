export default {
    root: ({ props }) => ({
        class: [
            'relative',

            // Flex & Alignment
            'flex items-center',
            'gap-1',

            // Misc
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    cancelitem: ({ context }) => ({
        class: [
            // Flex & Alignment
            'inline-flex items-center',

            //State
            {
                'outline-none ring-1 ring-primary-500/50 dark:ring-primary-500': context.focused
            },

            // Misc
            'cursor-pointer'
        ]
    }),
    cancelicon: {
        class: [
            // Size
            'w-4 h-4',

            // Color
            'text-red-500 dark:text-red-400',

            // State
            'hover:text-red-600 dark:hover:text-red-300',

            // Transition
            'transition duration-200 ease-in'
        ]
    },
    item: ({ props, context }) => ({
        class: [
            // Flex & Alignment
            'inline-flex items-center',

            // State
            {
                'outline-none ring-1 ring-primary-500/50 dark:ring-primary-500': context.focused
            },

            // Misc
            {
                'cursor-pointer': !props.readonly,
                'cursor-default': props.readonly
            }
        ]
    }),
    officon: ({ props }) => ({
        class: [
            // Size
            'w-4 h-4',

            // Color
            'text-surface-700 dark:text-surface-0/80',

            // State
            { 'hover:text-primary-500 dark:hover:text-primary-400': !props.readonly },

            // Transition
            'transition duration-200 ease-in'
        ]
    }),
    onicon: ({ props }) => ({
        class: [
            // Size
            'w-4 h-4',

            // Color
            'text-primary',

            // State
            { 'hover:text-primary-600 dark:hover:text-primary-300': !props.readonly },

            // Transition
            'transition duration-200 ease-in'
        ]
    })
};
