export default {
    root: {
        class: [
            'relative',

            // Alignment
            'inline-flex',
            'align-bottom',

            // Size
            'w-5',
            'h-5',

            // Misc
            'cursor-pointer',
            'select-none'
        ]
    },
    box: ({ props, context }) => ({
        class: [
            // Alignment
            'flex',
            'items-center',
            'justify-center',

            // Size
            'w-5',
            'h-5',

            // Shape
            'rounded',
            'border',

            // Colors
            {
                'border-surface-300 dark:border-surface-700': !context.checked && !props.invalid,
                'bg-surface-0 dark:bg-surface-900': !context.active && !props.invalid && !props.disabled,
                'border-primary bg-primary': context.active
            },

            // Invalid State
            'invalid:focus:ring-red-200',
            'invalid:hover:border-red-500',
            { 'border-red-500 dark:border-red-400': props.invalid },

            // States
            {
                'peer-hover:border-surface-400 dark:peer-hover:border-surface-600': !props.disabled && !context.checked && !props.invalid,
                'peer-hover:bg-primary-hover peer-hover:border-primary-hover': !props.disabled && context.checked,
                'peer-focus-visible:z-10 peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400': !props.disabled,
                'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': props.disabled
            },

            // Transitions
            'transition-colors',
            'duration-200'
        ]
    }),
    input: {
        class: [
            'peer',

            // Size
            'w-full ',
            'h-full',

            // Position
            'absolute',
            'top-0 left-0',
            'z-10',

            // Spacing
            'p-0',
            'm-0',

            // Shape
            'opacity-0',
            'rounded',
            'outline-none',
            'border border-surface-300 dark:border-surface-700',

            // Misc
            'appearance-none',
            'cursor-pointer'
        ]
    },
    checkicon: {
        class: [
            // Size
            'w-[0.875rem]',
            'h-[0.875rem]',

            // Colors
            'text-white dark:text-surface-950',

            // Transitions
            'transition-all',
            'duration-200'
        ]
    },
    uncheckicon: {
        class: [
            // Size
            'w-[0.875rem]',
            'h-[0.875rem]',

            // Colors
            'text-white dark:text-surface-950',

            // Transitions
            'transition-all',
            'duration-200'
        ]
    }
};
