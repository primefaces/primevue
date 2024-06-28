export default {
    content: ({ parent, props }) => ({
        class: [
            'flex',
            {
                'flex-col': props.fullScreen
            },
            {
                'flex-col': parent.props.thumbnailsPosition === 'top' || parent.props.thumbnailsPosition === 'bottom',
                'flex-row': parent.props.thumbnailsPosition === 'right' || parent.props.thumbnailsPosition === 'left'
            }
        ]
    }),
    itemwrapper: ({ parent, props }) => ({
        class: [
            'group',
            'flex relative',
            {
                'grow shrink w-0 justify-center': props.fullScreen
            },
            {
                'flex-col': parent.props.indicatorsPosition === 'bottom' || parent.props.indicatorsPosition === 'top',
                'flex-row items-center': parent.props.indicatorsPosition === 'left' || parent.props.indicatorsPosition === 'right'
            },
            {
                'order-2': parent.props.thumbnailsPosition === 'top' || parent.props.thumbnailsPosition === 'left',
                'flex-row': parent.props.thumbnailsPosition === 'right'
            }
        ]
    }),

    itemcontainer: ({ parent }) => ({
        class: [
            'flex h-full relative',
            {
                'order-1': parent.props.indicatorsPosition === 'bottom' || parent.props.indicatorsPosition === 'right',
                'order-2': parent.props.indicatorsPosition === 'top' || parent.props.indicatorsPosition === 'left'
            }
        ]
    }),
    item: {
        class: [
            // Flex
            'flex justify-center items-center h-full w-full',

            // Sizing
            'h-full w-full'
        ]
    },
    thumbnailwrapper: ({ parent }) => ({
        class: [
            // Flex
            'flex flex-col shrink-0',

            {
                'order-1': parent.props.thumbnailsPosition === 'top' || parent.props.thumbnailsPosition === 'left'
            },

            // Misc
            'overflow-auto'
        ]
    }),
    thumbnailcontainer: ({ parent }) => ({
        class: [
            // Flex
            'flex',

            // Spacing
            'p-4',

            // Colors
            'bg-black/90',

            {
                'flex-row': parent.props.thumbnailsPosition === 'top' || parent.props.thumbnailsPosition === 'bottom',
                'flex-col grow': parent.props.thumbnailsPosition === 'right' || parent.props.thumbnailsPosition === 'left'
            }
        ]
    }),
    previousthumbnailbutton: {
        class: [
            // Positioning
            'self-center relative',

            // Display & Flexbox
            'flex shrink-0 justify-center items-center overflow-hidden',

            // Spacing
            'm-2',

            // Appearance
            'bg-transparent text-white w-8 h-8 rounded-full transition duration-200 ease-in-out',

            // Hover Effects
            'hover:bg-surface-0/10 hover:text-white',

            // Focus Effects
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    thumbnailitemscontainer: {
        class: 'overflow-hidden w-full'
    },
    thumbnailitems: ({ parent }) => ({
        class: [
            'flex',
            {
                'flex-col h-full': parent.props.thumbnailsPosition === 'right' || parent.props.thumbnailsPosition === 'left'
            }
        ]
    }),
    thumbnailitem: ({ parent }) => ({
        class: [
            // Flexbox
            'flex items-center justify-center',
            'grow shrink-0',

            // Sizing
            {
                'w-full md:w-[25%] lg:w-[20%]': parent.props.thumbnailsPosition === 'top' || parent.props.thumbnailsPosition === 'bottom'
            },

            // Misc
            'overflow-auto',
            'cursor-pointer',
            'opacity-50',

            // States
            '[&[data-p-active="true"]]:opacity-100',
            'hover:opacity-100',

            // Transitions
            'transition-opacity duration-300'
        ]
    }),
    nextthumbnailbutton: {
        class: [
            // Positioning
            'self-center relative',

            // Display & Flexbox
            'flex shrink-0 justify-center items-center overflow-hidden',

            // Spacing
            'm-2',

            // Appearance
            'bg-transparent text-white w-8 h-8 rounded-full transition duration-200 ease-in-out',

            // Hover Effects
            'hover:bg-surface-0/10 hover:text-white',

            // Focus Effects
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    indicators: ({ parent }) => ({
        class: [
            // flex
            'flex items-center justify-center',

            // Spacing
            'p-4',

            // Indicators Position
            {
                'order-2': parent.props.indicatorsPosition == 'bottom',
                'order-1': parent.props.indicatorsPosition == 'top',
                'order-1 flex-col': parent.props.indicatorsPosition == 'left',
                'flex-col order-2': parent.props.indicatorsPosition == 'right'
            },
            {
                'absolute z-10 bg-black/50': parent.props.showIndicatorsOnItem
            },

            {
                'bottom-0 left-0 w-full items-start': parent.props.indicatorsPosition == 'bottom' && parent.props.showIndicatorsOnItem,
                'top-0 left-0 w-full items-start': parent.props.indicatorsPosition == 'top' && parent.props.showIndicatorsOnItem,
                'left-0 top-0 h-full items-start': parent.props.indicatorsPosition == 'left' && parent.props.showIndicatorsOnItem,
                'right-0 top-0 h-full items-start': parent.props.indicatorsPosition == 'right' && parent.props.showIndicatorsOnItem
            }
        ]
    }),
    indicator: ({ parent }) => ({
        class: [
            {
                'mr-2': parent.props.indicatorsPosition == 'bottom' || parent.props.indicatorsPosition == 'top',
                'mb-2': parent.props.indicatorsPosition == 'left' || parent.props.indicatorsPosition == 'right'
            }
        ]
    }),
    indicatorbutton: ({ context }) => ({
        class: [
            // Size
            'w-4 h-4',

            // Appearance
            'rounded-full transition duration-200',

            // Focus Effects
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50',

            // Conditional Appearance: Not Highlighted
            { 'bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600': !context.highlighted },

            // Conditional Appearance: Highlighted
            { 'bg-primary hover:bg-primary-hover': context.highlighted }
        ]
    }),
    mask: {
        class: ['fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black/90']
    },
    closebutton: {
        class: [
            // Positioning
            '!absolute top-0 right-0',

            // Display & Flexbox
            'flex justify-center items-center overflow-hidden',

            // Spacing
            'm-2',

            // Appearance
            'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out',

            // Hover Effect
            'hover:text-white hover:bg-surface-0/10',

            // Focus Effects
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    },
    closeicon: {
        class: 'w-6 h-6'
    },
    previousitembutton: ({ parent }) => ({
        class: [
            // Display & Flexbox
            'inline-flex justify-center items-center overflow-hidden',

            // Appearance
            'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md',
            {
                'opacity-0 group-hover:opacity-100': parent.props.showItemNavigatorsOnHover
            },

            // Spacing
            'mx-2',

            // Positioning
            'top-1/2 mt-[-0.5rem] left-0',
            {
                '!absolute': parent.props.showItemNavigators,
                '!fixed': !parent.props.showItemNavigators
            },

            // Hover Effect
            'hover:bg-surface-0/10 hover:text-white',

            // Focus Effects
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    }),
    nextitembutton: ({ parent }) => ({
        class: [
            // Display & Flexbox
            'inline-flex justify-center items-center overflow-hidden',

            // Appearance
            'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md',
            {
                'opacity-0 group-hover:opacity-100': parent.props.showItemNavigatorsOnHover
            },

            // Spacing
            'mx-2',

            // Positioning
            'top-1/2 mt-[-0.5rem] right-0',
            {
                '!absolute': parent.props.showItemNavigators,
                '!fixed': !parent.props.showItemNavigators
            },

            // Hover Effect
            'hover:bg-surface-0/10 hover:text-white',

            // Focus Effects
            'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50'
        ]
    }),
    caption: {
        class: [
            // Positioning
            'absolute bottom-0 left-0 w-full',

            // Appearance
            'bg-black/50 text-white p-4'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-all duration-150 ease-in-out',
        leaveActiveClass: 'transition-all duration-150 ease-in',
        leaveToClass: 'opacity-0 scale-75'
    }
};
