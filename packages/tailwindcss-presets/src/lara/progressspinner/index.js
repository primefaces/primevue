export default {
    root: {
        class: [
            // Position
            'relative',
            'mx-auto',

            // Sizing
            'w-28',
            'h-28',

            // Flexbox
            'inline-block',

            // Pseudo-Elements
            'before:block',
            'before:pt-full'
        ]
    },
    spinner: {
        class: [
            // Position
            'absolute',
            'top-0',
            'bottom-0',
            'left-0',
            'right-0',
            'm-auto',

            // Sizing
            'w-full',
            'h-full',

            // Transformations
            'transform',
            'origin-center',

            // Animations
            'animate-spin'
        ]
    },
    circle: {
        class: [
            // Colors
            'text-red-500',

            // Misc
            'progress-spinner-circle'
        ]
    }
};
