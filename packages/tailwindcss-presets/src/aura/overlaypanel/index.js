export default {
    root: {
        class: [
            // Shape
            'rounded-md shadow-lg',

            // Position
            'absolute left-0 top-0 mt-2',
            'z-40 transform origin-center',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80',

            // Before: Arrow
            'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-[calc(var(--overlayArrowLeft,0)+1.25rem)] before:border-x-[10px] before:border-b-[10px] before:border-t-0 before:border-b-surface-200 dark:before:border-b-surface-700',
            'after:absolute after:w-0 after:-top-[0.54rem] after:h-0 after:border-transparent after:border-solid after:ml-[calc(var(--overlayArrowLeft,0)+1.3rem)] after:border-x-[9px] after:border-b-[8px] after:border-t-0 after:border-b-surface-0 dark:after:border-b-surface-900'
        ]
    },
    content: {
        class: ['p-5 items-center flex', 'rounded-lg', 'border border-surface-200 dark:border-surface-700']
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
