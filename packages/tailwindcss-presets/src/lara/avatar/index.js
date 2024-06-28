export default {
    root: ({ props, parent }) => ({
        class: [
            // Font
            {
                'text-xl': props.size == 'large',
                'text-2xl': props.size == 'xlarge'
            },

            // Alignments
            'inline-flex items-center justify-center',
            'relative',

            // Sizes
            {
                'h-8 w-8': props.size == null || props.size == 'normal',
                'w-12 h-12': props.size == 'large',
                'w-16 h-16': props.size == 'xlarge'
            },
            { '-ml-4': parent.instance.$style?.name == 'avatargroup' },

            // Shapes
            {
                'rounded-lg': props.shape == 'square',
                'rounded-full': props.shape == 'circle'
            },
            { 'border-2': parent.instance.$style?.name == 'avatargroup' },

            // Colors
            'bg-surface-300 dark:bg-surface-700',
            { 'border-white dark:border-surface-800': parent.instance.$style?.name == 'avatargroup' }
        ]
    }),
    image: ({ props }) => ({
        class: [
            'h-full w-full',
            {
                'rounded-lg': props.shape == 'square',
                'rounded-full': props.shape == 'circle'
            }
        ]
    })
};
