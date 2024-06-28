export default {
    root: ({ props }) => ({
        class: [
            'relative',

            // Flexbox
            'flex',

            // Shape & Size
            'rounded-md',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',
            { 'p-2 items-center': props.orientation == 'horizontal', 'flex-col sm:w-48 p-1': props.orientation !== 'horizontal' }
        ]
    }),
    menu: ({ props }) => ({
        class: [
            // Flexbox
            'sm:flex',
            'items-center',
            'flex-wrap',
            'flex-col sm:flex-row',
            { hidden: !props?.mobileActive, flex: props?.mobileActive },

            // Position
            'absolute sm:relative',
            'top-full left-0',
            'sm:top-auto sm:left-auto',

            // Size
            'w-full sm:w-auto',

            // Spacing
            'm-0',
            'p-1 sm:py-0 sm:p-0',
            'list-none',

            // Shape
            'shadow-md sm:shadow-none',
            'border-0',

            // Color
            'bg-surface-0 dark:bg-surface-900 sm:bg-transparent dark:sm:bg-transparent',

            // Misc
            'outline-none'
        ]
    }),
    menuitem: ({ props }) => ({
        class: [
            'sm:relative static my-[2px] [&:first-child]:mt-0',
            {
                'sm:w-auto w-full': props.horizontal,
                'w-full': !props.horizontal
            }
        ]
    }),
    content: ({ context }) => ({
        class: [
            'rounded-[4px]',

            //  Colors
            {
                'text-surface-500 dark:text-white/70': !context.focused && !context.active,
                'text-surface-500 dark:text-white/70 bg-surface-200': context.focused && !context.active,
                'text-primary-highlight-inverse bg-primary-highlight': (context.focused && context.active) || context.active || (!context.focused && context.active)
            },

            // Hover States
            {
                'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.active,
                'hover:bg-primary-highlight-hover text-primary-highlight-inverse': context.active
            },

            // Transitions
            'transition-all',
            'duration-200'
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

            // Size
            'leading-none',

            // Misc
            'select-none',
            'cursor-pointer',
            'no-underline ',
            'overflow-hidden'
        ]
    },
    icon: {
        class: 'mr-2'
    },
    submenuicon: ({ props }) => ({
        class: [
            {
                'ml-auto sm:ml-2': props.horizontal,
                'ml-auto': !props.horizontal
            }
        ]
    }),
    panel: ({ props }) => ({
        class: [
            // Size
            'w-auto',

            // Spacing
            'm-0',

            // Shape
            'shadow-none sm:shadow-md',

            'rounded-md',

            // Color
            'bg-surface-0 dark:bg-surface-900',

            // Position
            'static sm:absolute',
            'z-10',
            {
                'sm:left-full top-0': !props.horizontal
            }
        ]
    }),
    grid: {
        class: 'flex flex-wrap sm:flex-nowrap'
    },
    column: {
        class: 'w-full sm:w-1/2'
    },
    submenu: {
        class: ['m-0 list-none', 'p-1 px-2 w-full sm:min-w-[14rem]']
    },
    submenuheader: {
        class: [
            'font-semibold',

            // Spacing
            'py-2 px-3',
            'm-0',

            // Color
            'text-surface-400 dark:text-surface-500',
            'bg-surface-0 dark:bg-surface-900'
        ]
    },
    separator: {
        class: 'border-t border-surface-200 dark:border-surface-600 my-1'
    },
    menubutton: {
        class: [
            // Flexbox
            'flex sm:hidden',
            'items-center justify-center',

            // Size
            'w-7',
            'h-7',

            // Shape
            'rounded-full',
            // Color
            'text-surface-500 dark:text-white/80',

            // States
            'hover:text-surface-600 dark:hover:text-white/60',
            'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]',
            'focus:outline-none focus:outline-offset-0',
            'focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400',

            // Transitions
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-pointer',
            'no-underline'
        ]
    },
    end: {
        class: 'ml-auto self-center'
    }
};
