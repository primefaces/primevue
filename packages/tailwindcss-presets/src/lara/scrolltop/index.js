export default {
    root: ({ props }) => ({
        class: [
            // Flex & Alignment
            'flex items-center justify-center',

            // Positioning
            {
                sticky: props.target === 'parent',
                fixed: props.target === 'window'
            },
            'bottom-[20px] right-[20px]',
            'ml-auto',

            // Shape & Size
            {
                'rounded-md h-8 w-8': props.target === 'parent',
                'h-12 w-12 rounded-full shadow-md': props.target === 'window'
            },

            // Color
            {
                'text-primary-inverse bg-primary': props.target === 'parent',
                'text-white dark:text-surface-900 bg-surface-500 dark:bg-surface-400': props.target === 'window'
            },

            // States
            {
                'hover:bg-primary-hover': props.target === 'parent',
                'hover:bg-surface-600 dark:hover:bg-surface-300': props.target === 'window'
            }
        ]
    }),
    transition: {
        enterFromClass: 'opacity-0',
        enterActiveClass: 'transition-opacity duration-150',
        leaveActiveClass: 'transition-opacity duration-150',
        leaveToClass: 'opacity-0'
    }
};
