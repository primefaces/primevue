export default {
    root: ({ props }) => ({
        class: [
            // Flexbox and Position
            'inline-flex',
            'relative',

            // Shape
            'rounded-md',
            { 'shadow-lg': props.raised }
        ]
    }),
    button: {
        root: ({ parent }) => ({
            class: [
                'relative',

                // Alignments
                'items-center inline-flex text-center align-bottom justify-center',

                // Sizes & Spacing
                'leading-[normal]',
                {
                    'px-4 py-2': parent.props.size === null,
                    'text-sm py-1.5 px-3': parent.props.size === 'small',
                    'text-xl py-3 px-4': parent.props.size === 'large'
                },
                {
                    'px-0 py-2': parent.props.label == null && parent.props.icon !== null
                },

                // Shape
                'rounded-r-none',
                'border-r-0',
                { 'rounded-l-full': parent.props.rounded },
                { 'rounded-md': !parent.props.rounded, 'rounded-full': parent.props.rounded },

                // Link Button
                { 'text-primary-600 bg-transparent border-transparent': parent.props.link },

                // Plain Button
                { 'text-white bg-gray-500 border border-gray-500': parent.props.plain && !parent.props.outlined && !parent.props.text },
                // Plain Text Button
                { 'text-surface-500': parent.props.plain && parent.props.text },
                // Plain Outlined Button
                { 'text-surface-500 border border-gray-500': parent.props.plain && parent.props.outlined },

                // Text Button
                { 'bg-transparent border-transparent': parent.props.text && !parent.props.plain },

                // Outlined Button
                { 'bg-transparent border': parent.props.outlined && !parent.props.plain },

                // --- Severity Buttons ---

                // Primary Button
                {
                    'text-primary-inverse': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-primary': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-primary': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Primary Text Button
                { 'text-primary': parent.props.text && parent.props.severity === null && !parent.props.plain },
                // Primary Outlined Button
                { 'text-primary border border-primary': parent.props.outlined && parent.props.severity === null && !parent.props.plain },

                // Secondary Button
                {
                    'text-surface-900 dark:text-white': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-surface-100 dark:bg-surface-700': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-surface-100 dark:border-surface-700': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Secondary Text Button
                { 'text-surface-500 dark:text-surface-300': parent.props.text && parent.props.severity === 'secondary' && !parent.props.plain },
                // Secondary Outlined Button
                { 'text-surface-500 dark:text-surface-300 border border-surface-500 hover:bg-surface-300/10': parent.props.outlined && parent.props.severity === 'secondary' && !parent.props.plain },

                // Success Button
                {
                    'text-white dark:text-green-900': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-green-500 dark:bg-green-400': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-green-500 dark:border-green-400': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Success Text Button
                { 'text-green-500 dark:text-green-400': parent.props.text && parent.props.severity === 'success' && !parent.props.plain },
                // Success Outlined Button
                { 'text-green-500 border border-green-500 hover:bg-green-300/10': parent.props.outlined && parent.props.severity === 'success' && !parent.props.plain },

                // Info Button
                {
                    'text-white dark:text-surface-900': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-blue-500 dark:bg-blue-400': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-blue-500 dark:border-blue-400': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Info Text Button
                { 'text-blue-500 dark:text-blue-400': parent.props.text && parent.props.severity === 'info' && !parent.props.plain },
                // Info Outlined Button
                { 'text-blue-500 border border-blue-500 hover:bg-blue-300/10 ': parent.props.outlined && parent.props.severity === 'info' && !parent.props.plain },

                // Warning Button
                {
                    'text-white dark:text-surface-900': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-orange-500 dark:bg-orange-400': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-orange-500 dark:border-orange-400': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Warning Text Button
                { 'text-orange-500 dark:text-orange-400': parent.props.text && parent.props.severity === 'warning' && !parent.props.plain },
                // Warning Outlined Button
                { 'text-orange-500 border border-orange-500 hover:bg-orange-300/10': parent.props.outlined && parent.props.severity === 'warning' && !parent.props.plain },

                // Help Button
                {
                    'text-white dark:text-surface-900': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-purple-500 dark:bg-purple-400': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-purple-500 dark:border-purple-400': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Help Text Button
                { 'text-purple-500 dark:text-purple-400': parent.props.text && parent.props.severity === 'help' && !parent.props.plain },
                // Help Outlined Button
                { 'text-purple-500 border border-purple-500 hover:bg-purple-300/10': parent.props.outlined && parent.props.severity === 'help' && !parent.props.plain },

                // Danger Button
                {
                    'text-white dark:text-surface-900': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-red-500 dark:bg-red-400': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-red-500 dark:border-red-400': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Danger Text Button
                { 'text-red-500 dark:text-red-400': parent.props.text && parent.props.severity === 'danger' && !parent.props.plain },
                // Danger Outlined Button
                { 'text-red-500 border border-red-500 hover:bg-red-300/10': parent.props.outlined && parent.props.severity === 'danger' && !parent.props.plain },

                // Contrast Button
                {
                    'text-white dark:text-surface-900': parent.props.severity === 'contrast' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-surface-900 dark:bg-surface-0': parent.props.severity === 'contrast' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-surface-900 dark:border-surface-0': parent.props.severity === 'contrast' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Contrast Text Button
                { 'text-surface-900 dark:text-surface-0': parent.props.text && parent.props.severity === 'contrast' && !parent.props.plain },
                // Contrast Outlined Button
                { 'text-surface-900 dark:text-surface-0 border border-surface-900 dark:border-surface-0': parent.props.outlined && parent.props.severity === 'contrast' && !parent.props.plain },

                // --- Severity Button States ---
                'focus:outline-none focus:outline-offset-0 focus:ring-1',

                // Link
                { 'focus:ring-primary': parent.props.link },

                // Plain
                { 'hover:bg-gray-600 hover:border-gray-600': parent.props.plain && !parent.props.outlined && !parent.props.text },
                // Text & Outlined Button
                { 'hover:bg-surface-300/10': parent.props.plain && (parent.props.text || parent.props.outlined) },

                // Primary
                { 'hover:bg-primary-hover hover:border-primary-hover': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-primary': parent.props.severity === null },
                // Text & Outlined Button
                { 'hover:bg-primary-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === null && !parent.props.plain },

                // Secondary
                { 'hover:bg-surface-200 dark:hover:bg-surface-600 hover:border-surface-200 dark:hover:border-surface-600': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-surface-500 dark:focus:ring-surface-400': parent.props.severity === 'secondary' },
                // Text & Outlined Button
                { 'hover:bg-surface-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === 'secondary' && !parent.props.plain },

                // Success
                { 'hover:bg-green-600 dark:hover:bg-green-300 hover:border-green-600 dark:hover:border-green-300': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-green-500 dark:focus:ring-green-400': parent.props.severity === 'success' },
                // Text & Outlined Button
                { 'hover:bg-green-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === 'success' && !parent.props.plain },

                // Info
                { 'hover:bg-blue-600 dark:hover:bg-blue-300 hover:border-blue-600 dark:hover:border-blue-300': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-blue-500 dark:focus:ring-blue-400': parent.props.severity === 'info' },
                // Text & Outlined Button
                { 'hover:bg-blue-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === 'info' && !parent.props.plain },

                // Warning
                { 'hover:bg-orange-600 dark:hover:bg-orange-300 hover:border-orange-600 dark:hover:border-orange-300': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-orange-500 dark:focus:ring-orange-400': parent.props.severity === 'warning' },
                // Text & Outlined Button
                { 'hover:bg-orange-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === 'warning' && !parent.props.plain },

                // Help
                { 'hover:bg-purple-600 dark:hover:bg-purple-300 hover:border-purple-600 dark:hover:border-purple-300': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-purple-500 dark:focus:ring-purple-400': parent.props.severity === 'help' },
                // Text & Outlined Button
                { 'hover:bg-purple-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === 'help' && !parent.props.plain },

                // Danger
                { 'hover:bg-red-600 dark:hover:bg-red-300 hover:border-red-600 dark:hover:border-red-300': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-red-500 dark:focus:ring-red-400': parent.props.severity === 'danger' },
                // Text & Outlined Button
                { 'hover:bg-red-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === 'danger' && !parent.props.plain },

                // Contrast
                { 'hover:bg-surface-800 dark:hover:bg-surface-100 hover:border-surface-800 dark:hover:border-surface-100': parent.props.severity === 'contrast' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-surface-500 dark:focus:ring-surface-400': parent.props.severity === 'contrast' },
                // Text & Outlined Button
                { 'hover:bg-surface-900/10 dark:hover:bg-[rgba(255,255,255,0.03)]': (parent.props.text || parent.props.outlined) && parent.props.severity === 'contrast' && !parent.props.plain },

                // Transitions
                'transition duration-200 ease-in-out',

                // Misc
                'cursor-pointer overflow-hidden select-none'
            ]
        }),
        icon: {
            class: [
                // Margins
                'mr-2'
            ]
        }
    },
    menubutton: {
        root: ({ parent }) => ({
            class: [
                'relative',

                // Alignments
                'items-center inline-flex text-center align-bottom justify-center',

                // Sizes & Spacing
                'leading-[normal]',
                {
                    'px-4 py-2': parent.props.size === null,
                    'text-sm py-1.5 px-3': parent.props.size === 'small',
                    'text-xl py-3 px-4': parent.props.size === 'large'
                },
                {
                    'min-w-10 px-0 py-2': parent.props.label == null && parent.props.icon !== null
                },

                // Shape
                'rounded-l-none',
                { 'rounded-l-full': parent.props.rounded },
                { 'rounded-md': !parent.props.rounded, 'rounded-full': parent.props.rounded },

                // Link Button
                { 'text-primary-600 bg-transparent border-transparent': parent.props.link },

                // Plain Button
                { 'text-white bg-gray-500 border border-gray-500': parent.props.plain && !parent.props.outlined && !parent.props.text },
                // Plain Text Button
                { 'text-surface-500': parent.props.plain && parent.props.text },
                // Plain Outlined Button
                { 'text-surface-500 border border-gray-500': parent.props.plain && parent.props.outlined },

                // Text Button
                { 'bg-transparent border-transparent': parent.props.text && !parent.props.plain },

                // Outlined Button
                { 'bg-transparent border': parent.props.outlined && !parent.props.plain },

                // --- Severity Buttons ---

                // Primary Button
                {
                    'text-primary-inverse': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-primary': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-primary': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Primary Text Button
                { 'text-primary': parent.props.text && parent.props.severity === null && !parent.props.plain },
                // Primary Outlined Button
                { 'text-primary border border-primary': parent.props.outlined && parent.props.severity === null && !parent.props.plain },

                // Secondary Button
                {
                    'text-surface-900 dark:text-white': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-surface-100 dark:bg-surface-700': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-surface-100 dark:border-surface-700': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Secondary Text Button
                { 'text-surface-500 dark:text-surface-300': parent.props.text && parent.props.severity === 'secondary' && !parent.props.plain },
                // Secondary Outlined Button
                { 'text-surface-500 dark:text-surface-300 border border-surface-500 hover:bg-surface-300/10': parent.props.outlined && parent.props.severity === 'secondary' && !parent.props.plain },

                // Success Button
                {
                    'text-white dark:text-green-900': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-green-500 dark:bg-green-400': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-green-500 dark:border-green-400': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Success Text Button
                { 'text-green-500 dark:text-green-400': parent.props.text && parent.props.severity === 'success' && !parent.props.plain },
                // Success Outlined Button
                { 'text-green-500 border border-green-500 hover:bg-green-300/10': parent.props.outlined && parent.props.severity === 'success' && !parent.props.plain },

                // Info Button
                {
                    'text-white dark:text-surface-900': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-blue-500 dark:bg-blue-400': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-blue-500 dark:border-blue-400': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Info Text Button
                { 'text-blue-500 dark:text-blue-400': parent.props.text && parent.props.severity === 'info' && !parent.props.plain },
                // Info Outlined Button
                { 'text-blue-500 border border-blue-500 hover:bg-blue-300/10 ': parent.props.outlined && parent.props.severity === 'info' && !parent.props.plain },

                // Warning Button
                {
                    'text-white dark:text-surface-900': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-orange-500 dark:bg-orange-400': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-orange-500 dark:border-orange-400': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Warning Text Button
                { 'text-orange-500 dark:text-orange-400': parent.props.text && parent.props.severity === 'warning' && !parent.props.plain },
                // Warning Outlined Button
                { 'text-orange-500 border border-orange-500 hover:bg-orange-300/10': parent.props.outlined && parent.props.severity === 'warning' && !parent.props.plain },

                // Help Button
                {
                    'text-white dark:text-surface-900': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-purple-500 dark:bg-purple-400': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-purple-500 dark:border-purple-400': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Help Text Button
                { 'text-purple-500 dark:text-purple-400': parent.props.text && parent.props.severity === 'help' && !parent.props.plain },
                // Help Outlined Button
                { 'text-purple-500 border border-purple-500 hover:bg-purple-300/10': parent.props.outlined && parent.props.severity === 'help' && !parent.props.plain },

                // Danger Button
                {
                    'text-white dark:text-surface-900': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-red-500 dark:bg-red-400': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-red-500 dark:border-red-400': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Danger Text Button
                { 'text-red-500 dark:text-red-400': parent.props.text && parent.props.severity === 'danger' && !parent.props.plain },
                // Danger Outlined Button
                { 'text-red-500 border border-red-500 hover:bg-red-300/10': parent.props.outlined && parent.props.severity === 'danger' && !parent.props.plain },

                // Contrast Button
                {
                    'text-white dark:text-surface-900': parent.props.severity === 'contrast' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'bg-surface-900 dark:bg-surface-0': parent.props.severity === 'contrast' && !parent.props.text && !parent.props.outlined && !parent.props.plain,
                    'border border-surface-900 dark:border-surface-0': parent.props.severity === 'contrast' && !parent.props.text && !parent.props.outlined && !parent.props.plain
                },
                // Contrast Text Button
                { 'text-surface-900 dark:text-surface-0': parent.props.text && parent.props.severity === 'contrast' && !parent.props.plain },
                // Contrast Outlined Button
                { 'text-surface-900 dark:text-surface-0 border border-surface-900 dark:border-surface-0': parent.props.outlined && parent.props.severity === 'contrast' && !parent.props.plain },

                // --- Severity Button States ---
                'focus:outline-none focus:outline-offset-0 focus:ring-1',

                // Link
                { 'focus:ring-primary': parent.props.link },

                // Plain
                { 'hover:bg-gray-600 hover:border-gray-600': parent.props.plain && !parent.props.outlined && !parent.props.text },
                // Text & Outlined Button
                { 'hover:bg-surface-300/10': parent.props.plain && (parent.props.text || parent.props.outlined) },

                // Primary
                { 'hover:bg-primary-hover hover:border-primary-hover': !parent.props.link && parent.props.severity === null && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-primary': parent.props.severity === null },
                // Text & Outlined Button
                { 'hover:bg-primary-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === null && !parent.props.plain },

                // Secondary
                { 'hover:bg-surface-200 dark:hover:bg-surface-600 hover:border-surface-200 dark:hover:border-surface-600': parent.props.severity === 'secondary' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-surface-500 dark:focus:ring-surface-400': parent.props.severity === 'secondary' },
                // Text & Outlined Button
                { 'hover:bg-surface-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === 'secondary' && !parent.props.plain },

                // Success
                { 'hover:bg-green-600 dark:hover:bg-green-300 hover:border-green-600 dark:hover:border-green-300': parent.props.severity === 'success' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-green-500 dark:focus:ring-green-400': parent.props.severity === 'success' },
                // Text & Outlined Button
                { 'hover:bg-green-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === 'success' && !parent.props.plain },

                // Info
                { 'hover:bg-blue-600 dark:hover:bg-blue-300 hover:border-blue-600 dark:hover:border-blue-300': parent.props.severity === 'info' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-blue-500 dark:focus:ring-blue-400': parent.props.severity === 'info' },
                // Text & Outlined Button
                { 'hover:bg-blue-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === 'info' && !parent.props.plain },

                // Warning
                { 'hover:bg-orange-600 dark:hover:bg-orange-300 hover:border-orange-600 dark:hover:border-orange-300': parent.props.severity === 'warning' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-orange-500 dark:focus:ring-orange-400': parent.props.severity === 'warning' },
                // Text & Outlined Button
                { 'hover:bg-orange-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === 'warning' && !parent.props.plain },

                // Help
                { 'hover:bg-purple-600 dark:hover:bg-purple-300 hover:border-purple-600 dark:hover:border-purple-300': parent.props.severity === 'help' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-purple-500 dark:focus:ring-purple-400': parent.props.severity === 'help' },
                // Text & Outlined Button
                { 'hover:bg-purple-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === 'help' && !parent.props.plain },

                // Danger
                { 'hover:bg-red-600 dark:hover:bg-red-300 hover:border-red-600 dark:hover:border-red-300': parent.props.severity === 'danger' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-red-500 dark:focus:ring-red-400': parent.props.severity === 'danger' },
                // Text & Outlined Button
                { 'hover:bg-red-300/10': (parent.props.text || parent.props.outlined) && parent.props.severity === 'danger' && !parent.props.plain },

                // Contrast
                { 'hover:bg-surface-800 dark:hover:bg-surface-100 hover:border-surface-800 dark:hover:border-surface-100': parent.props.severity === 'contrast' && !parent.props.text && !parent.props.outlined && !parent.props.plain },
                { 'focus:ring-surface-500 dark:focus:ring-surface-400': parent.props.severity === 'contrast' },
                // Text & Outlined Button
                { 'hover:bg-surface-900/10 dark:hover:bg-[rgba(255,255,255,0.03)]': (parent.props.text || parent.props.outlined) && parent.props.severity === 'contrast' && !parent.props.plain },

                // Transitions
                'transition duration-200 ease-in-out',

                // Misc
                'cursor-pointer overflow-hidden select-none'
            ]
        }),
        label: {
            class: ['hidden']
        }
    },
    menu: {
        root: {
            class: [
                // Sizing and Shape
                'min-w-[12.5rem]',
                'rounded-md',

                // Spacing
                'p-1',

                // Colors
                'bg-surface-0 dark:bg-surface-900',
                'text-surface-700 dark:text-white/80',
                'border border-surface-200 dark:border-surface-700'
            ]
        },
        menu: {
            class: [
                // Spacings and Shape
                'list-none',
                'm-0',
                'p-0',
                'outline-none'
            ]
        },
        menuitem: {
            class: 'relative my-[2px] [&:first-child]:mt-0'
        },
        content: ({ context }) => ({
            class: [
                //Shape
                'rounded-[4px]',

                // Colors
                'text-surface-700 dark:text-white/80',
                {
                    'text-surface-500 dark:text-white/70': !context.focused && !context.active,
                    'text-surface-500 dark:text-white/70 bg-surface-200': context.focused && !context.active,
                    'text-primary-highlight-inverse bg-primary-highlight': (context.focused && context.active) || context.active || (!context.focused && context.active)
                },

                // Transitions
                'transition-shadow',
                'duration-200',

                // States
                {
                    'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.active,
                    'hover:bg-primary-highlight-hover text-primary-highlight-inverse': context.active
                },

                // Disabled
                { 'opacity-60 pointer-events-none cursor-default': context.disabled }
            ]
        }),
        action: {
            class: [
                'relative',
                // Flexbox

                'flex',
                'items-center',

                // Spacing
                'py-2',
                'px-3',

                // Color
                'text-surface-700 dark:text-white/80',

                // Misc
                'no-underline',
                'overflow-hidden',
                'cursor-pointer',
                'select-none'
            ]
        },
        icon: {
            class: [
                // Spacing
                'mr-2',

                // Color
                'text-surface-600 dark:text-white/70'
            ]
        },
        label: {
            class: ['leading-[normal]']
        },
        submenuheader: {
            class: [
                // Font
                'font-bold',

                // Spacing
                'm-0',
                'py-2 px-3',

                // Shape
                'rounded-tl-none',
                'rounded-tr-none',

                // Colors
                'bg-surface-0 dark:bg-surface-900',
                'text-surface-400 dark:text-surface-600'
            ]
        },
        submenuicon: {
            class: [
                // Position
                'ml-auto'
            ]
        },
        submenu: {
            class: [
                // Sizing and Shape
                'min-w-[12.5rem]',
                'rounded-md',

                // Spacing
                'p-1',

                // Position
                'static sm:absolute',
                'z-10',

                // Colors
                'bg-surface-0 dark:bg-surface-900',
                'text-surface-700 dark:text-white/80',
                'border border-surface-200 dark:border-surface-700'
            ],
            separator: {
                class: 'border-t border-surface-200 dark:border-surface-600 my-1'
            }
        }
    }
};
