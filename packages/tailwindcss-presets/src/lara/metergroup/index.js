export default {
    root: ({ props }) => ({
        class: [
            // Flexbox
            'flex gap-4',

            { 'flex-col': props.orientation == 'horizontal', 'flex-row': props.orientation == 'vertical' }
        ]
    }),
    metercontainer: ({ props }) => ({
        class: [
            // Flexbox
            'flex',

            { 'flex-col': props.orientation === 'vertical' },

            // Sizing
            { 'w-2 h-full': props.orientation === 'vertical' },
            { 'h-2': props.orientation === 'horizontal' },

            // Colors
            'bg-gray-200 dark:bg-gray-700',

            // Border Radius
            'rounded-lg'
        ]
    }),
    meter: ({ props }) => ({
        class: [
            // Shape
            'border-0',

            // Rounded Corners - Horizontal
            {
                'first:rounded-l-lg last:rounded-r-lg': props.orientation === 'horizontal'
            },

            // Rounded Corners - Vertical
            {
                'first:rounded-t-lg last:rounded-b-lg': props.orientation === 'vertical'
            },

            // Colors
            'bg-primary'
        ]
    }),
    labellist: ({ props }) => ({
        class: [
            // Display & Flexbox
            'flex flex-wrap',

            { 'gap-4': props.labelOrientation === 'horizontal' },

            { 'gap-2': props.labelOrientation === 'vertical' },

            { 'flex-col': props.labelOrientation === 'vertical' },

            // Conditional Alignment - Horizontal
            {
                'align-end': props.labelOrientation === 'horizontal' && props.labelPosition === 'end',
                'align-start': props.labelOrientation === 'horizontal' && props.labelPosition === 'start'
            },

            // Conditional Alignment - Vertical
            {
                'justify-end': props.labelOrientation === 'vertical' && props.labelPosition === 'end',
                'justify-start': props.labelOrientation === 'vertical' && props.labelPosition === 'start'
            },

            // List Styling
            'm-0 p-0 list-none'
        ]
    }),
    labellistitem: {
        class: [
            // Flexbox
            'inline-flex',
            'items-center',
            'gap-2'
        ]
    },
    labellisttype: {
        class: [
            // Display
            'inline-flex',

            // Background Color
            'bg-primary',

            // Size
            'w-2 h-2',

            // Rounded Shape
            'rounded-full'
        ]
    }
};
