export default {
    root: {
        class: [
            // Spacing
            'py-2 px-3',

            // Shape
            'rounded-md',

            // Color
            'bg-surface-0 dark:bg-surface-950 text-surface-700 dark:text-surface-0',
            'border border-surface-200 dark:border-surface-700',

            // Sizing & Overflow
            'h-72 overflow-auto'
        ]
    },
    container: {
        class: [
            // Flexbox
            'flex items-center'
        ]
    },
    prompt: {
        class: [
            // Color
            'text-surface-700 dark:text-surface-0'
        ]
    },
    response: {
        class: [
            // Color
            'text-surface-700 dark:text-surface-0'
        ]
    },
    command: {
        class: [
            // Color
            'text-surface-700 dark:text-surface-0'
        ]
    },
    commandtext: {
        class: [
            // Flexbox
            'flex-1 shrink grow-0',

            // Shape
            'border-0',

            // Spacing
            'p-0',

            // Color
            'bg-transparent text-inherit',

            // Outline
            'outline-none'
        ]
    }
};
