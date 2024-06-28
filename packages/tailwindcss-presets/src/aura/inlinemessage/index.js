export default {
    root: ({ props }) => ({
        class: [
            'inline-flex items-center justify-center align-top gap-2',
            'p-3 m-0 rounded-md border',
            {
                'bg-blue-100/70 dark:bg-blue-500/20': props.severity == 'info',
                'bg-green-100/70 dark:bg-green-500/20': props.severity == 'success',
                'bg-surface-100/70 dark:bg-surface-500/20': props.severity == 'secondary',
                'bg-orange-100/70 dark:bg-orange-500/20': props.severity == 'warn',
                'bg-red-100/70 dark:bg-red-500/20': props.severity == 'error',
                'bg-surface-950 dark:bg-surface-0': props.severity == 'contrast'
            },
            {
                'border-blue-200 dark:border-blue-500/20': props.severity == 'info',
                'border-green-200 dark:border-green-500/20': props.severity == 'success',
                'border-surface-200 dark:border-surface-500/20': props.severity == 'secondary',
                'border-orange-200 dark:border-orange-500/20': props.severity == 'warn',
                'border-red-200 dark:border-red-500/20': props.severity == 'error',
                'border-surface-950 dark:border-surface-0': props.severity == 'contrast'
            },
            {
                'text-blue-700 dark:text-blue-300': props.severity == 'info',
                'text-green-700 dark:text-green-300': props.severity == 'success',
                'text-surface-700 dark:text-surface-300': props.severity == 'secondary',
                'text-orange-700 dark:text-orange-300': props.severity == 'warn',
                'text-red-700 dark:text-red-300': props.severity == 'error',
                'text-surface-0 dark:text-surface-950': props.severity == 'contrast'
            }
        ]
    }),
    icon: {
        class: 'text-base'
    },
    text: {
        class: [
            // Font and Text
            'text-base leading-none',
            'font-medium'
        ]
    }
};
