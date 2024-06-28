export default {
    root: ({ props, parent }) => ({
        class: [
            'flex',
            { 'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup' },
            {
                'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    container: ({ state, props, parent }) => ({
        class: [
            // Font
            'leading-none',

            // Flex
            'flex items-center flex-wrap',
            'gap-2',

            // Spacing
            'm-0 list-none',
            'p-1',

            // Size
            'w-full',

            // Shape
            'appearance-none rounded-md',

            // Color
            'text-surface-700 dark:text-white/80',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            { 'bg-surface-0 dark:bg-surface-950': !props.disabled },
            'border',
            { 'border-surface-300 dark:border-surface-700': !props.invalid },

            // Invalid State
            'invalid:focus:ring-red-200',
            'invalid:hover:border-red-500',
            { 'border-red-500 dark:border-red-400': props.invalid },

            // States
            { 'hover:border-surface-400 dark:hover:border-surface-700': !props.invalid },
            { 'outline-none outline-offset-0 z-10 ring-1 ring-primary-500 dark:ring-primary-400': state.focused },

            // Filled State *for FloatLabel
            { filled: parent.instance?.$name == 'FloatLabel' && props.modelValue !== null && props.modelValue?.length !== 0 },

            // Transition
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-text overflow-hidden'
        ]
    }),
    inputtoken: {
        class: ['py-1 px-0 ml-2', 'inline-flex flex-auto']
    },
    input: {
        class: [
            // Font
            'text-base leading-[normal]',

            // Size
            'w-full',

            // Spacing
            'p-0 m-0',

            // Shape
            'appearance-none rounded-none',
            'border-0 outline-none',
            'shadow-none',

            // Color
            'text-surface-700 dark:text-white/80',
            'bg-transparent'
        ]
    },
    token: {
        class: [
            // Flex
            'inline-flex items-center',

            // Spacings
            'py-1 px-3 m-0',

            // Shape
            'rounded',

            // Colors
            'bg-surface-100 dark:bg-surface-700',
            'text-surface-700 dark:text-white',

            // Misc
            'cursor-default'
        ]
    },
    removeTokenIcon: {
        class: [
            // Spacing
            'ml-[0.375rem]',

            // Size
            'w-4 h-4',

            // Misc
            'cursor-pointer'
        ]
    }
};
