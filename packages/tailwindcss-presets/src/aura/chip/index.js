export default {
    root: {
        class: [
            // Flexbox
            'inline-flex items-center',

            // Spacing
            'px-3 py-1',

            // Shape
            'rounded-[1.14rem]',

            // Colors
            'text-surface-700 dark:text-white',
            'bg-surface-100 dark:bg-surface-700'
        ]
    },
    label: {
        class: 'leading-6 m-0'
    },
    icon: {
        class: 'leading-6 mr-2'
    },
    image: {
        class: ['w-8 h-8 -ml-2 mr-2', 'rounded-full']
    },
    removeIcon: {
        class: [
            // Shape
            'rounded-md leading-6',

            // Spacing
            'ml-[0.375rem]',

            // Size
            'w-4 h-4',

            // Transition
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-pointer'
        ]
    }
};
