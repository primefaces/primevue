export default {
    root: {
        class: [
            // Sizing and Shape
            'min-w-[12.5rem]',
            'rounded-md',
            'shadow-md',

            // Spacing
            'p-1',

            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-white/80',
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
                'hover:bg-bg-primary-highlight-hover text-primary-highlight-inverse': context.active
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
    submenu: ({ props }) => ({
        class: [
            // Size
            'w-full sm:w-48',

            // Spacing
            'p-1',
            'm-0',
            'list-none',

            // Shape
            'shadow-md',
            'rounded-md',
            'dark:border dark:border-surface-700',

            // Position
            'static sm:absolute',
            'z-10',
            { 'sm:absolute sm:left-full sm:top-0': props.level > 1 },

            // Color
            'bg-surface-0 dark:bg-surface-900'
        ]
    }),
    submenuicon: {
        class: ['ml-auto']
    },
    separator: {
        class: 'border-t border-surface-200 dark:border-surface-600 my-1'
    },
    transition: {
        enterFromClass: 'opacity-0',
        enterActiveClass: 'transition-opacity duration-250'
    }
};
