export default {
    root: {
        class: [
            'relative',

            // Alignment
            'inline-flex',
            'align-bottom',

            // Misc
            'cursor-pointer',
            'select-none'
        ]
    },
    box: ({ props }) => ({
        class: [
            'relative',

            // Alignments
            'items-center inline-flex flex-1 text-center align-bottom justify-center',

            // Sizes & Spacing
            'px-4 py-2 leading-none',

            // Shapes
            'rounded-md',
            'border',
            { 'border-transparent': !props.invalid },

            // Colors
            'bg-surface-100 dark:bg-surface-950',
            {
                'text-surface-600 dark:text-white/60 before:bg-transparent': !props.modelValue,
                'text-surface-800 dark:text-white/80 before:bg-surface-0 dark:before:bg-surface-800': props.modelValue
            },

            // Before
            'before:absolute before:left-1 before:top-1 before:w-[calc(100%-0.5rem)] before:h-[calc(100%-0.5rem)] before:rounded-[4px] before:z-0',

            // Invalid State
            { 'border-red-500 dark:border-red-400': props.invalid },

            // States
            {
                'peer-hover:text-surface-800 dark:peer-hover:text-white/80': !props.disabled && !props.modelValue,
                'peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400': !props.disabled
            },

            // Transitions
            'transition-all duration-200',

            // Misc
            { 'cursor-pointer': !props.disabled, 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
        ]
    }),
    label: {
        class: 'font-medium leading-[normal] text-center w-full z-10 relative'
    },
    input: {
        class: [
            'peer',

            // Size
            'w-full ',
            'h-full',

            // Position
            'absolute',
            'top-0 left-0',
            'z-20',

            // Spacing
            'p-0',
            'm-0',

            // Shape
            'opacity-0',
            'rounded-md',
            'outline-none',
            'border border-surface-200 dark:border-surface-700',

            // Misc
            'appearance-none',
            'cursor-pointer'
        ]
    },
    icon: {
        class: ['relative z-10', 'mr-2']
    }
};
