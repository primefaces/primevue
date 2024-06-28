export default {
    root: {
        class: [
            // Shape
            'rounded-md',

            // Size
            'min-w-[12rem]',
            'p-1',

            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700'
        ]
    },
    menu: {
        class: [
            // Spacings and Shape
            'list-none',
            'm-0',
            'p-0',
            'outline-none'
        ]
    },
    menuitem: {
        class: 'relative my-[2px] [&:first-child]:mt-0'
    },
    content: ({ context }) => ({
        class: [
            //Shape
            'rounded-[4px]',

            // Colors
            'text-surface-700 dark:text-white/80',
            {
                'text-surface-500 dark:text-white/70': !context.focused && !context.active,
                'text-surface-500 dark:text-white/70 bg-surface-200': context.focused && !context.active,
                'text-primary-highlight-inverse bg-primary-highlight': (context.focused && context.active) || context.active || (!context.focused && context.active)
            },

            // Transitions
            'transition-shadow',
            'duration-200',

            // States
            {
                'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.active,
                'hover:bg-primary-highlight-hover text-primary-highlight-inverse': context.active
            },

            // Disabled
            { 'opacity-60 pointer-events-none cursor-default': context.disabled }
        ]
    }),
    action: {
        class: [
            'relative',
            // Flexbox

            'flex',
            'items-center',

            // Spacing
            'py-2',
            'px-3',

            // Color
            'text-surface-700 dark:text-white/80',

            // Misc
            'no-underline',
            'overflow-hidden',
            'cursor-pointer',
            'select-none'
        ]
    },
    icon: {
        class: [
            // Spacing
            'mr-2',

            // Color
            'text-surface-600 dark:text-white/70'
        ]
    },
    label: {
        class: ['leading-none']
    },
    submenuicon: {
        class: [
            // Position
            'ml-auto'
        ]
    },
    submenu: {
        class: [
            // Spacing
            'p-1',
            'm-0',
            'list-none',
            'min-w-[12.5rem]',

            // Shape
            'shadow-none sm:shadow-md',
            'border border-surface-200 dark:border-surface-700',

            // Position
            'static sm:absolute',
            'z-10',

            // Color
            'bg-surface-0 dark:bg-surface-900'
        ]
    },
    separator: {
        class: 'border-t border-surface-200 dark:border-surface-600 my-[2px]'
    }
};
