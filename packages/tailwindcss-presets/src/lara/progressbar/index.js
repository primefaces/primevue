export default {
    root: {
        class: [
            // Position and Overflow
            'overflow-hidden',
            'relative',

            // Shape and Size
            'border-0',
            'h-6',
            'rounded-md',

            // Colors
            'bg-surface-100 dark:bg-surface-700'
        ]
    },
    value: ({ props }) => ({
        class: [
            // Flexbox & Overflow & Position
            { 'absolute flex items-center justify-center overflow-hidden': props.mode !== 'indeterminate' },

            // Colors
            'bg-primary',

            // Spacing & Sizing
            'm-0',
            { 'h-full w-0': props.mode !== 'indeterminate' },

            // Shape
            'border-0',

            // Transitions
            {
                'transition-width duration-1000 ease-in-out': props.mode !== 'indeterminate',
                'progressbar-value-animate': props.mode == 'indeterminate'
            },

            // Before & After (indeterminate)
            {
                'before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit ': props.mode == 'indeterminate',
                'after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:delay-1000': props.mode == 'indeterminate'
            }
        ]
    }),
    label: {
        class: [
            // Flexbox
            'inline-flex',

            // Font and Text
            'text-white dark:text-surface-900',
            'leading-6'
        ]
    }
};
