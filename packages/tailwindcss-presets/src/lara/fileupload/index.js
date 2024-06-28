export default {
    input: {
        class: 'hidden'
    },
    buttonbar: {
        class: [
            // Flexbox
            'flex',
            'flex-wrap',

            // Colors
            'bg-surface-50',
            'dark:bg-surface-800',
            'text-surface-700',
            'dark:text-white/80',

            // Spacing
            'p-5',
            'gap-2',

            // Borders
            'border',
            'border-solid',
            'border-surface-200',
            'dark:border-surface-700',
            'border-b-0',

            // Shape
            'rounded-tr-lg',
            'rounded-tl-lg'
        ]
    },
    chooseButton: {
        class: [
            'relative',

            // Alignments
            'items-center inline-flex text-center align-bottom justify-center',

            // Spacing
            'px-4 py-3',

            // Shape
            'rounded-md',

            // Font
            'leading-[normal]',
            'font-bold',

            // Colors
            'text-primary-inverse',
            'bg-primary',
            'border-primary',

            // States
            'hover:bg-primary-hover',

            // Misc
            'overflow-hidden',
            'cursor-pointer'
        ]
    },
    chooseIcon: {
        class: ['mr-2', 'inline-block']
    },
    chooseButtonLabel: {
        class: ['flex-1', 'font-bold']
    },
    uploadbutton: {
        icon: {
            class: 'mr-2'
        }
    },
    cancelbutton: {
        icon: {
            class: 'mr-2'
        }
    },
    content: {
        class: [
            // Position
            'relative',

            // Colors
            'bg-surface-0',
            'dark:bg-surface-900',
            'text-surface-700',
            'dark:text-white/80',

            // Spacing
            'p-8',

            // Borders
            'border',
            'border-surface-200',
            'dark:border-surface-700',

            // Shape
            'rounded-b-lg'
        ]
    },
    file: {
        class: [
            // Flexbox
            'flex',
            'items-center',
            'flex-wrap',

            // Spacing
            'p-4',
            'mb-2',
            'last:mb-0',

            // Borders
            'border',
            'border-surface-200',
            'dark:border-surface-700',
            'gap-2',

            // Shape
            'rounded'
        ]
    },
    thumbnail: {
        class: 'shrink-0'
    },
    fileName: {
        class: 'mb-2 break-all'
    },
    fileSize: {
        class: 'mr-2'
    },
    uploadicon: {
        class: 'mr-2'
    },
    progressbar: {
        root: {
            class: [
                // Position and Overflow
                'overflow-hidden',
                'absolute top-0 left-0',

                // Shape and Size
                'border-0',
                'h-2',
                'rounded-md',
                'w-full',

                // Colors
                'bg-surface-100 dark:bg-surface-700'
            ]
        },
        value: {
            class: [
                // Flexbox & Overflow & Position
                'absolute flex items-center justify-center overflow-hidden',

                // Colors
                'bg-primary',

                // Spacing & Sizing
                'm-0',
                'h-full w-0',

                // Shape
                'border-0',

                // Transitions
                'transition-width duration-1000 ease-in-out'
            ]
        }
    }
};
