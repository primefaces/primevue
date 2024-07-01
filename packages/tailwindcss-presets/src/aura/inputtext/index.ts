import type { InputTextPassThroughAttributes, InputTextPassThroughMethodOptions, InputTextPassThroughOptions } from 'primevue/inputtext';

export default {
    root: ({ props, context, parent }: InputTextPassThroughMethodOptions): InputTextPassThroughAttributes => ({
        class: [
            // Font
            'leading-none',

            // Spacing
            'm-0',
            {
                'py-3 px-3.5': props.size == 'large',
                'py-1.5 px-2': props.size == 'small',
                'py-2 px-3': props.size == null
            },

            // Shape
            'rounded-md',

            // Colors
            'text-surface-800 dark:text-white/80',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'border',
            'data-[pc-disabled=false]:bg-surface-0 dark:data-[pc-disabled=false]:bg-surface-950',
            'data-[pc-invalid=false]:border-surface-300 dark:data-[pc-invalid=false]:border-surface-700',

            // Invalid State
            'data-[pc-invalid=true]:focus:ring-red-200',
            'data-[pc-invalid=true]:hover:border-red-500',
            'data-[pc-invalid=true]:border-red-500 dark:data-[pc-invalid=true]:border-red-400',

            // States
            'data-[pc-disabled=false]:hover:border-surface-400 dark:data-[pc-disabled=false]:hover:border-surface-600',
            'data-[pc-disabled=false]:focus:outline-none data-[pc-disabled=false]:focus:outline-offset-0 data-[pc-disabled=false]:focus:ring-1 data-[pc-disabled=false]:focus:ring-primary-500 dark:data-[pc-disabled=false]:focus:ring-primary-400 data-[pc-disabled=false]:focus:z-10',
            'data-[pc-disabled=true]:bg-surface-200 dark:data-[pc-disabled=true]:bg-surface-700 data-[pc-disabled=true]:select-none data-[pc-disabled=true]:pointer-events-none data-[pc-disabled=true]:cursor-default',

            // Filled State *for FloatLabel
            // { filled: parent.instance?.$name == 'FloatLabel' && context.filled },

            // Misc
            'appearance-none',
            'transition-colors duration-200'
        ]
    })
} as InputTextPassThroughOptions;
