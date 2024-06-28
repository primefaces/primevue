export default {
    root: {
        class: [
            // Shape
            'rounded-lg',
            'shadow-lg',
            'border-0',

            // Positioning
            'z-40 transform origin-center',
            'mt-3 absolute left-0 top-0',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80',

            // Before: Arrow
            'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-[calc(var(--overlayArrowLeft,0)+1.25rem)] before:border-x-[10px] before:border-b-[10px] before:border-t-0 before:border-b-surface-200 dark:before:border-b-surface-700',
            'after:absolute after:w-0 after:-top-[0.54rem] after:h-0 after:border-transparent after:border-solid after:ml-[calc(var(--overlayArrowLeft,0)+1.3rem)] after:border-x-[9px] after:border-b-[8px] after:border-t-0 after:border-b-surface-0 dark:after:border-b-surface-900'
        ]
    },
    content: {
        class: ['p-4 items-center flex', 'rounded-t-lg', 'border-x border-t last:border-b border-surface-200 dark:border-surface-700']
    },
    icon: {
        class: 'text-2xl mr-4'
    },
    footer: {
        class: [
            // Flexbox and Alignment
            'flex items-center justify-end',
            'shrink-0',
            'text-right',
            'gap-2',

            // Spacing
            'px-4',
            'pb-4',

            // Shape
            'border-t-0',
            'rounded-b-lg',

            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80',
            'border-x border-b border-surface-200 dark:border-surface-700'
        ]
    },
    rejectbutton: {
        root: {
            class: [
                'relative',

                // Alignments
                'items-center inline-flex text-center align-bottom justify-center',

                // Sizes & Spacing
                'px-4 py-2 leading-none',

                // Shape
                'rounded-md',

                // Color
                'text-primary',

                // States
                'hover:bg-primary-300/20',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary-500 dark:focus:ring-primary-400'
            ]
        }
    },
    acceptbutton: {
        root: {
            class: [
                'relative',

                // Alignments
                'items-center inline-flex text-center align-bottom justify-center',

                // Sizes & Spacing
                'px-4 py-2 leading-none',

                // Shape
                'rounded-md',

                // Color
                'text-primary-inverse',
                'bg-primary',
                'border border-primary',

                // States
                'hover:bg-primary-hover hover:border-primary-hover',
                'focus:outline-none focus:outline-offset-0 focus:ring',
                'focus:ring-primary-500 dark:focus:ring-primary-400'
            ]
        }
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
