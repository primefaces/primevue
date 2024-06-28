export default {
    panel: {
        class: 'p-1 overflow-hidden mb-3 border border-surface-200 dark:border-surface-700 rounded-md'
    },
    header: {
        class: ['rounded-[4px]', 'outline-none']
    },
    headercontent: ({ context, instance }) => ({
        class: [
            // Shape
            'rounded-[4px]',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-600 dark:text-surface-0/80',
            { 'text-surface-900': context.active },

            // States
            'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]',
            'hover:text-surface-900',

            // Transition
            'transition duration-200 ease-in-out',
            'transition-shadow duration-200'
        ]
    }),
    headeraction: {
        class: [
            'relative',

            // Font
            'font-semibold',
            'leading-none',

            // Flex & Alignments
            'flex items-center',

            // Spacing
            'py-2 px-3',

            // Misc
            'select-none cursor-pointer no-underline'
        ]
    },
    headerlabel: {
        class: 'leading-none'
    },
    headerIcon: {
        class: 'mr-2'
    },
    submenuicon: {
        class: 'mr-2'
    },
    menucontent: {
        class: [
            // Spacing
            'pl-4',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-900'
        ]
    },
    menu: {
        class: ['outline-none', 'm-0 p-0 list-none']
    },
    menuitem: {
        class: 'relative my-[2px]'
    },
    content: {
        class: [
            // Shape
            'border-none rounded-[4px]',

            // Color
            'text-surface-700 dark:text-white/80',

            // Transition
            'transition-shadow duration-200'
        ]
    },
    action: ({ context }) => ({
        class: [
            'relative',

            // Font
            'leading-none',

            // Flex & Alignments
            'flex items-center',

            // Spacing
            'py-2 px-3',

            // Shape
            'rounded-[4px]',

            // Color
            'text-surface-700 dark:text-white/80',

            // States
            'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)] hover:text-surface-700 dark:hover:text-white/80',
            {
                'bg-surface-200 text-surface-700 dark:text-white/80 dark:bg-surface-0/10': context.focused
            },

            // Misc
            'cursor-pointer no-underline',
            'select-none overflow-hidden'
        ]
    }),
    icon: {
        class: 'mr-2'
    },
    submenu: {
        class: 'p-0 pl-4 m-0 list-none'
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
