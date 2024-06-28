export default {
    root: ({ props }) => ({
        class: [
            'inline-block relative',
            'w-10 h-6',
            'rounded-2xl',
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    slider: ({ props }) => ({
        class: [
            // Position
            'absolute top-0 left-0 right-0 bottom-0',
            { 'before:transform before:translate-x-4': props.modelValue == props.trueValue },

            // Shape
            'rounded-2xl',

            // Before:
            'before:absolute before:top-1/2 before:left-1',
            'before:-mt-2',
            'before:h-4 before:w-4',
            'before:rounded-full',
            'before:duration-200',
            'before:bg-surface-0 before:dark:bg-surface-500',

            // Colors
            {
                'bg-surface-300 dark:bg-surface-800': !(props.modelValue == props.trueValue) && !props.invalid,
                'bg-primary': props.modelValue == props.trueValue && !props.invalid,
                'before:dark:bg-surface-950': props.modelValue == props.trueValue
            },

            // Invalid State
            { 'bg-red-400 dark:bg-red-300': props.invalid },
            { 'peer-hover:bg-red-500 dark:peer-hover:bg-red-200': props.invalid },

            // States
            { 'peer-hover:bg-surface-400 dark:peer-hover:bg-surface-700': !(props.modelValue == props.trueValue) && !props.disabled && !props.invalid },
            { 'peer-hover:bg-primary-hover': props.modelValue == props.trueValue && !props.disabled && !props.invalid },
            'peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400',

            // Transition
            'transition-colors duration-200',

            // Misc
            'cursor-pointer'
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
            'rounded-2xl',
            'outline-none',

            // Misc
            'appearance-none',
            'cursor-pointer'
        ]
    }
};
