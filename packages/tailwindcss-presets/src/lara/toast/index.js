export default {
    root: ({ props }) => ({
        class: [
            //Size and Shape
            'w-96 rounded-md',

            // Positioning
            { '-translate-x-2/4': props.position == 'top-center' || props.position == 'bottom-center' }
        ]
    }),
    container: ({ props }) => ({
        class: [
            'my-4 rounded-md w-full',
            'border-solid border-0 border-l-[6px]',
            'backdrop-blur-[10px] shadow-md',

            // Colors
            {
                'bg-blue-100/70 dark:bg-blue-500/20': props.message.severity == 'info',
                'bg-green-100/70 dark:bg-green-500/20': props.message.severity == 'success',
                'bg-orange-100/70 dark:bg-orange-500/20': props.message.severity == 'warn',
                'bg-red-100/70 dark:bg-red-500/20': props.message.severity == 'error'
            },
            {
                'border-blue-500 dark:border-blue-400': props.message.severity == 'info',
                'border-green-500 dark:border-green-400': props.message.severity == 'success',
                'border-orange-500 dark:border-orange-400': props.message.severity == 'warn',
                'border-red-500 dark:border-red-400': props.message.severity == 'error'
            },
            {
                'text-blue-700 dark:text-blue-300': props.message.severity == 'info',
                'text-green-700 dark:text-green-300': props.message.severity == 'success',
                'text-orange-700 dark:text-orange-300': props.message.severity == 'warn',
                'text-red-700 dark:text-red-300': props.message.severity == 'error'
            }
        ]
    }),
    content: ({ props }) => ({
        class: [
          'flex p-4',
          {
            'items-start': props.message.summary,
            'items-center': !props.message.summary,
          },
        ],
    }),
    icon: {
        class: [
            // Sizing and Spacing
            'w-6 h-6',
            'text-lg leading-none mr-2 shrink-0'
        ]
    },
    text: {
        class: [
            // Font and Text
            'text-base leading-none',
            'ml-2',
            'flex-1'
        ]
    },
    summary: {
        class: 'font-bold block'
    },
    detail: ({ props }) => ({
        class: ['block', { 'mt-2': props.message.summary }],
    }),
    closebutton: {
        class: [
            // Flexbox
            'flex items-center justify-center',

            // Size
            'w-8 h-8',

            // Spacing and Misc
            'ml-auto  relative',

            // Shape
            'rounded-full',

            // Colors
            'bg-transparent',

            // Transitions
            'transition duration-200 ease-in-out',

            // States
            'hover:bg-surface-0/50 dark:hover:bg-surface-0/10',

            // Misc
            'overflow-hidden'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 translate-y-2/4',
        enterActiveClass: 'transition-[transform,opacity] duration-300',
        leaveFromClass: 'max-h-[1000px]',
        leaveActiveClass: '!transition-[max-height_.45s_cubic-bezier(0,1,0,1),opacity_.3s,margin-bottom_.3s] overflow-hidden',
        leaveToClass: 'max-h-0 opacity-0 mb-0'
    }
};
