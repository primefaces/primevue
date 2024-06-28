export default {
    root: ({ props }) => ({
        class: [
            'relative',
            '[&>input]:w-full',

            '[&>*:first-child]:absolute',
            '[&>*:first-child]:top-1/2',
            '[&>*:first-child]:-mt-2',
            '[&>*:first-child]:leading-none',
            '[&>*:first-child]:text-surface-900/60 dark:[&>*:first-child]:text-white/60',
            {
                '[&>*:first-child]:right-3': props.iconPosition === 'right',
                '[&>*:first-child]:left-3': props.iconPosition === 'left'
            },
            {
                '[&>*:last-child]:pr-10': props.iconPosition === 'right',
                '[&>*:last-child]:pl-10': props.iconPosition === 'left'
            }
        ]
    })
};
