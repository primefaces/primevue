export default {
    root: {
        class: [
            // Spacing
            'p-5',

            // Shape
            'rounded-md',

            // Color
            'bg-surface-900 text-white',
            'border border-surface-700',

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
            'text-surface-400'
        ]
    },
    response: {
        class: [
            // Color
            'text-primary-400'
        ]
    },
    command: {
        class: [
            // Color
            'text-primary-400'
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
