export default {
    root: {
        class: [
            // Shape
            'rounded-md shadow-lg',
            'border-0 dark:border',

            // Position
            'absolute left-0 top-0 mt-2',
            'z-40 transform origin-center',

            // Color
            'bg-surface-0 dark:bg-surface-800',
            'text-surface-700 dark:text-surface-0/80',
            'dark:border-surface-700',

            // Before: Triangle
            'before:absolute before:-top-[9px] before:-ml-[9px] before:left-[calc(var(--overlayArrowLeft,0)+1.25rem)] z-0',
            'before:w-0 before:h-0',
            'before:border-transparent before:border-solid',
            'before:border-x-[8px] before:border-[8px]',
            'before:border-t-0 before:border-b-surface-300/10 dark:before:border-b-surface-700',

            'after:absolute after:-top-2 after:-ml-[8px] after:left-[calc(var(--overlayArrowLeft,0)+1.25rem)]',
            'after:w-0 after:h-0',
            'after:border-transparent after:border-solid',
            'after:border-x-[0.5rem] after:border-[0.5rem]',
            'after:border-t-0 after:border-b-surface-0 dark:after:border-b-surface-800'
        ]
    },
    content: {
        class: 'p-5 items-center flex'
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
