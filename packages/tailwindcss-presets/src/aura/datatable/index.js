export default {
    root: ({ props }) => ({
        class: [
            'relative',

            // Flex & Alignment
            { 'flex flex-col': props.scrollable && props.scrollHeight === 'flex' },

            // Size
            { 'h-full': props.scrollable && props.scrollHeight === 'flex' }
        ]
    }),
    loadingoverlay: {
        class: [
            // Position
            'absolute',
            'top-0 left-0',
            'z-20',

            // Flex & Alignment
            'flex items-center justify-center',

            // Size
            'w-full h-full',

            // Color
            'bg-surface-100/40 dark:bg-surface-900/40',

            // Transition
            'transition duration-200'
        ]
    },
    loadingicon: {
        class: 'w-8 h-8 animate-spin'
    },
    wrapper: ({ props }) => ({
        class: [
            { relative: props.scrollable, 'flex flex-col grow': props.scrollable && props.scrollHeight === 'flex' },

            // Size
            { 'h-full': props.scrollable && props.scrollHeight === 'flex' }
        ]
    }),
    header: ({ props }) => ({
        class: [
            'font-bold',

            // Shape
            props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0',

            // Spacing
            'p-4',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'border-surface-200 dark:border-surface-700',
            'text-surface-700 dark:text-white/80'
        ]
    }),
    table: {
        class: 'w-full border-spacing-0 border-separate'
    },
    thead: ({ context }) => ({
        class: [
            {
                'bg-surface-0 dark:bg-surface-900 top-0 z-40 sticky': context.scrollable
            }
        ]
    }),
    tbody: ({ instance, context }) => ({
        class: [
            {
                'sticky z-20': instance.frozenRow && context.scrollable
            },
            'bg-surface-0 dark:bg-surface-900'
        ]
    }),
    tfoot: ({ context }) => ({
        class: [
            {
                'bg-surface-0 bottom-0 z-0': context.scrollable
            }
        ]
    }),
    footer: {
        class: [
            'font-bold',

            // Shape
            'border-t-0 border-b border-x-0',

            // Spacing
            'p-4',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'border-surface-200 dark:border-surface-700',
            'text-surface-700 dark:text-white/80'
        ]
    },
    column: {
        headercell: ({ context, props }) => ({
            class: [
                'font-semibold',
                'leading-[normal]',

                // Position
                { 'sticky z-20 border-b': props.frozen || props.frozen === '' },

                { relative: context.resizable },

                // Alignment
                'text-left',

                // Shape
                { 'first:border-l border-y border-r': context?.showGridlines },
                'border-0 border-b border-solid',

                // Spacing
                context?.size === 'small' ? 'py-[0.375rem] px-2' : context?.size === 'large' ? 'py-[0.9375rem] px-5' : 'py-3 px-4',

                // Color
                (props.sortable === '' || props.sortable) && context.sorted ? 'bg-primary-highlight text-primary-highlight-inverse' : 'bg-surface-0 text-surface-700 dark:text-white/80 dark:bg-surface-900',
                'border-surface-200 dark:border-surface-700 ',

                // States
                { 'hover:bg-surface-100 dark:hover:bg-surface-800/50': (props.sortable === '' || props.sortable) && !context?.sorted },
                'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',

                // Transition
                { 'transition duration-200': props.sortable === '' || props.sortable },

                // Misc
                { 'cursor-pointer': props.sortable === '' || props.sortable },
                {
                    'overflow-hidden space-nowrap border-y bg-clip-padding': context.resizable // Resizable
                }
            ]
        }),
        headercontent: {
            class: 'flex items-center'
        },
        sort: ({ context }) => ({
            class: [context.sorted ? 'text-primary-500' : 'text-surface-700', context.sorted ? 'dark:text-primary-400' : 'dark:text-white/80']
        }),
        bodycell: ({ props, context, state, parent }) => ({
            class: [
                // Font
                'leading-[normal]',

                //Position
                { 'sticky box-border border-b': parent.instance.frozenRow },
                { 'sticky box-border border-b z-20': props.frozen || props.frozen === '' },

                // Alignment
                'text-left',

                // Shape
                'border-0 border-b border-solid',
                { 'first:border-l border-r border-b': context?.showGridlines },
                { 'bg-surface-0 dark:bg-surface-900': parent.instance.frozenRow || props.frozen || props.frozen === '' },

                // Spacing
                { 'py-[0.375rem] px-2': context?.size === 'small' && !state['d_editing'] },
                { 'py-[0.9375rem] px-5': context?.size === 'large' && !state['d_editing'] },
                { 'py-3 px-4': context?.size !== 'large' && context?.size !== 'small' && !state['d_editing'] },
                { 'py-[0.6rem] px-2': state['d_editing'] },

                // Color
                'border-surface-200 dark:border-surface-700'
            ]
        }),
        footercell: ({ context }) => ({
            class: [
                // Font
                'font-bold',

                // Alignment
                'text-left',

                // Shape
                'border-0 border-b border-solid',
                { 'border-x border-y': context?.showGridlines },

                // Spacing
                context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4',

                // Color
                'border-surface-200 dark:border-surface-700',
                'text-surface-700 dark:text-white/80',
                'bg-surface-0 dark:bg-surface-900'
            ]
        }),
        sorticon: ({ context }) => ({
            class: ['ml-2', context.sorted ? 'text-primary-highlight-inverse' : 'text-surface-700 dark:text-white/70']
        }),
        sortbadge: {
            class: [
                // Flex & Alignment
                'flex items-center justify-center align-middle',

                // Shape
                'rounded-full',

                // Size
                'w-[1.143rem] leading-[1.143rem]',

                // Spacing
                'ml-2',

                // Color
                'text-primary-highlight-inverse bg-primary-highlight'
            ]
        },
        columnfilter: {
            class: 'inline-flex items-center ml-auto font-normal'
        },
        filteroverlay: {
            class: [
                // Position
                'absolute top-0 left-0',

                // Shape
                'border-0 dark:border',
                'rounded-md',
                'shadow-md',

                // Size
                'min-w-[12.5rem]',

                // Color
                'bg-surface-0 dark:bg-surface-900',
                'text-surface-800 dark:text-white/80',
                'dark:border-surface-700'
            ]
        },
        filtermatchmodedropdown: {
            root: ({ state }) => ({
                class: [
                    // Display and Position
                    'flex',
                    'relative',

                    // Spacing
                    'mb-2 last:mb-0',

                    // Shape
                    'w-full',
                    'rounded-md',

                    // Color and Background
                    'bg-surface-0 dark:bg-surface-900',
                    'border border-surface-300 dark:border-surface-700',
                    'text-surface-800 dark:text-white/80',
                    'placeholder:text-surface-400 dark:placeholder:text-surface-500',

                    // Transitions
                    'transition-all',
                    'duration-200',

                    // States
                    'hover:border-primary',
                    { 'outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400': state.focused },

                    // Misc
                    'cursor-pointer',
                    'select-none'
                ]
            })
        },
        filterrowitems: {
            class: 'm-0 p-0 py-3 list-none'
        },
        filterrowitem: ({ context }) => ({
            class: [
                // Font
                'font-normal',
                'leading-none',

                // Position
                'relative',

                // Shape
                'border-0',
                'rounded-none',

                // Spacing
                'm-0',
                'py-3 px-5',

                // Color
                { 'text-surface-700 dark:text-white/80': !context?.highlighted },
                { 'bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80': !context?.highlighted },
                { 'bg-primary-highlight text-primary-highlight-inverse': context?.highlighted },

                //States
                { 'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]': !context?.highlighted },
                { 'hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]': !context?.highlighted },
                'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',

                // Transitions
                'transition-shadow',
                'duration-200',

                // Misc
                'cursor-pointer',
                'overflow-hidden',
                'whitespace-nowrap'
            ]
        }),
        filteroperator: {
            class: [
                // Shape
                'rounded-t-md',

                // Color
                'text-surface-700 dark:text-white/80',
                'bg-surface-0 dark:bg-surface-700'
            ]
        },
        filteroperatordropdown: {
            root: ({ state }) => ({
                class: [
                    // Display and Position
                    'inline-flex',
                    'relative',

                    // Shape
                    'w-full',
                    'rounded-md',

                    // Color and Background
                    'bg-surface-0 dark:bg-surface-950',
                    'border border-surface-300 dark:border-surface-700',

                    // Transitions
                    'transition-all',
                    'duration-200',

                    // States
                    'hover:border-surface-400 dark:hover:border-surface-600',
                    { 'outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400 z-10': state.focused },

                    // Misc
                    'cursor-pointer',
                    'select-none'
                ]
            }),
            input: ({ props }) => ({
                class: [
                    //Font
                    'leading-[normal]',

                    // Display
                    'block',
                    'flex-auto',

                    // Color and Background
                    'bg-transparent',
                    'border-0',
                    { 'text-surface-800 dark:text-white/80': props.modelValue, 'text-surface-400 dark:text-surface-500': !props.modelValue },
                    'placeholder:text-surface-400 dark:placeholder:text-surface-500',

                    // Sizing and Spacing
                    'w-[1%]',
                    'py-2 px-3',

                    //Shape
                    'rounded-none',

                    // Transitions
                    'transition',
                    'duration-200',

                    // States
                    'focus:outline-none focus:shadow-none',

                    // Misc
                    'relative',
                    'cursor-pointer',
                    'overflow-hidden overflow-ellipsis',
                    'whitespace-nowrap',
                    'appearance-none'
                ]
            }),
            trigger: {
                class: [
                    // Flexbox
                    'flex items-center justify-center',
                    'shrink-0',

                    // Color and Background
                    'bg-transparent',
                    'text-surface-500',

                    // Size
                    'w-12',

                    // Shape
                    'rounded-tr-md',
                    'rounded-br-md'
                ]
            },
            panel: {
                class: [
                    // Colors
                    'bg-surface-0 dark:bg-surface-900',
                    'text-surface-700 dark:text-white/80',

                    // Shape
                    'border border-surface-300 dark:border-surface-700',
                    'rounded-md',
                    'shadow-md'
                ]
            },
            item: ({ context }) => ({
                class: [
                    // Font
                    'font-normal',
                    'leading-none',

                    // Position
                    'relative',

                    // Shape
                    'border-0',
                    'rounded-none',

                    // Spacing
                    'm-0 px-3 py-2',
                    'first:mt-0 mt-[2px]',

                    // Color
                    {
                        'text-surface-700 dark:text-white/80': !context.focused && !context.selected,
                        'bg-surface-200 dark:bg-surface-600/60': context.focused && !context.selected,
                        'text-surface-700 dark:text-white/80': context.focused && !context.selected,

                        'text-primary-highlight-inverse': context.selected,
                        'bg-primary-highlight': context.selected
                    },

                    //States
                    { 'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.focused && !context.selected },
                    { 'hover:bg-primary-highlight-hover': context.selected },
                    { 'hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]': context.focused && !context.selected },

                    // Transitions
                    'transition-shadow',
                    'duration-200',

                    // Misc
                    'cursor-pointer',
                    'overflow-hidden',
                    'whitespace-nowrap'
                ]
            })
        },
        filteraddrulebutton: {
            root: {
                class: [
                    'relative',

                    // Alignments
                    'items-center inline-flex text-center align-bottom justify-center',

                    // Sizes & Spacing
                    'text-sm py-[0.4375rem] px-[0.875rem] w-full',

                    // Shape
                    'rounded-md',

                    'bg-transparent border-transparent',
                    'text-primary',
                    'hover:bg-primary-300/20',

                    // Transitions
                    'transition duration-200 ease-in-out',

                    // Misc
                    'cursor-pointer overflow-hidden select-none'
                ]
            },
            label: {
                class: 'flex-auto grow-0'
            },
            icon: {
                class: 'mr-2'
            }
        },
        filterremovebutton: {
            root: {
                class: [
                    'relative',

                    // Alignments
                    'items-center inline-flex text-center align-bottom justify-center',

                    // Sizes & Spacing
                    'text-sm py-[0.4375rem] px-[0.875rem] w-full mt-2',

                    // Shape
                    'rounded-md',

                    'bg-transparent border-transparent',
                    'text-red-500 dark:text-red-400',
                    'hover:bg-red-300/20',

                    // Transitions
                    'transition duration-200 ease-in-out',

                    // Misc
                    'cursor-pointer overflow-hidden select-none'
                ]
            },
            label: {
                class: 'flex-auto grow-0'
            },
            icon: {
                class: 'mr-2'
            }
        },
        filterbuttonbar: {
            class: [
                // Flex & Alignment
                'flex items-center justify-between',

                // Space
                'p-0'
            ]
        },
        filterclearbutton: {
            root: {
                class: [
                    'relative',

                    // Alignments
                    'items-center inline-flex text-center align-bottom justify-center',

                    // Sizes & Spacing
                    'text-sm py-[0.4375rem] px-[0.875rem]',

                    // Shape
                    'rounded-md',

                    'text-primary-500 border border-primary',
                    'hover:bg-primary-300/20',

                    // Transitions
                    'transition duration-200 ease-in-out',

                    // Misc
                    'cursor-pointer overflow-hidden select-none'
                ]
            }
        },
        filterapplybutton: {
            root: {
                class: [
                    'relative',

                    // Alignments
                    'items-center inline-flex text-center align-bottom justify-center',

                    // Sizes & Spacing
                    'text-sm py-[0.4375rem] px-[0.875rem]',

                    // Shape
                    'rounded-md',

                    'text-primary-inverse',
                    'bg-primary',
                    'hover:bg-primary-hover hover:border-primary-hover',

                    // Transitions
                    'transition duration-200 ease-in-out',

                    // Misc
                    'cursor-pointer overflow-hidden select-none'
                ]
            }
        },
        filtermenubutton: ({ context }) => ({
            class: [
                'relative',
                // Flex & Alignment
                'inline-flex items-center justify-center',

                // Size
                'w-8 h-8',

                // Spacing
                'ml-2',

                // Shape
                'rounded-full',

                // Color
                { 'bg-primary-highlight text-primary-highliht-inverse': context.active },
                'dark:text-white/70 dark:hover:text-white/80 dark:bg-surface-900',

                // States
                'hover:text-surface-700 hover:bg-surface-300/20',
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400',

                // Transition
                'transition duration-200',

                // Misc
                'cursor-pointer no-underline overflow-hidden'
            ]
        }),
        headerfilterclearbutton: ({ context }) => ({
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Shape
                'border-none',

                // Spacing
                'm-0 p-0 ml-2',

                // Color
                'bg-transparent',

                // Misc
                'cursor-pointer no-underline overflow-hidden select-none',
                {
                    invisible: !context.hidden
                }
            ]
        }),
        rowtoggler: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Spacing
                'm-0 p-0',

                // Size
                'w-8 h-8',

                // Shape
                'border-0 rounded-full',

                // Color
                'text-surface-500 dark:text-white/70',
                'bg-transparent',
                'focus-visible:outline-none focus-visible:outline-offset-0',
                'focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',

                // Transition
                'transition duration-200',

                // Misc
                'overflow-hidden',
                'cursor-pointer select-none'
            ]
        },
        columnresizer: {
            class: [
                'block',

                // Position
                'absolute top-0 right-0',

                // Sizing
                'w-2 h-full',

                // Spacing
                'm-0 p-0',

                // Color
                'border border-transparent',

                // Misc
                'cursor-col-resize'
            ]
        },
        rowreordericon: {
            class: 'cursor-move'
        },
        roweditorinitbutton: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Size
                'w-7 h-7',

                // Shape
                'border-0 rounded-full',

                // Color
                'text-surface-700 dark:text-white/70',
                'border-transparent',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400',
                'hover:text-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800/50',

                // Transition
                'transition duration-200',

                // Misc
                'overflow-hidden',
                'cursor-pointer select-none'
            ]
        },
        roweditorsavebutton: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Size
                'w-8 h-8',

                // Shape
                'border-0 rounded-full',

                // Color
                'text-surface-700 dark:text-white/70',
                'border-transparent',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400',
                'hover:text-surface-700 hover:bg-surface-300/20',

                // Transition
                'transition duration-200',

                // Misc
                'overflow-hidden',
                'cursor-pointer select-none'
            ]
        },
        roweditorcancelbutton: {
            class: [
                'relative',

                // Flex & Alignment
                'inline-flex items-center justify-center',
                'text-left',

                // Size
                'w-8 h-8',

                // Shape
                'border-0 rounded-full',

                // Color
                'text-surface-700 dark:text-white/70',
                'border-transparent',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400',
                'hover:text-surface-700 hover:bg-surface-300/20',

                // Transition
                'transition duration-200',

                // Misc
                'overflow-hidden',
                'cursor-pointer select-none'
            ]
        },
        rowRadiobutton: {
            root: {
                class: [
                    'relative',

                    // Flexbox & Alignment
                    'inline-flex',
                    'align-bottom',

                    // Size
                    'w-5 h-5',

                    // Misc
                    'cursor-pointer',
                    'select-none'
                ]
            },
            box: ({ props }) => ({
                class: [
                    // Flexbox
                    'flex justify-center items-center',

                    // Size
                    'w-5 h-5',

                    // Shape
                    'border',
                    'rounded-full',

                    // Transition
                    'transition duration-200 ease-in-out',

                    // Colors
                    { 'bg-surface-0 dark:bg-surface-950': !props.disabled },

                    {
                        'text-surface-700 dark:text-white/80': props.value !== props.modelValue && props.value !== undefined,
                        'border-surface-300 dark:border-surface-700': props.value !== props.modelValue && props.value !== undefined && !props.invalid,
                        'border-primary': props.value == props.modelValue && props.value !== undefined && !props.disabled
                    },
                    {
                        'peer-hover:border-surface-400 dark:peer-hover:border-surface-400': !props.disabled && !props.invalid && props.value !== props.modelValue,
                        'peer-hover:border-primary-hover': !props.disabled && props.value == props.modelValue && props.value !== undefined,
                        'peer-hover:[&>*:first-child]:bg-primary-600 dark:peer-hover:[&>*:first-child]:bg-primary-300': !props.disabled && props.value == props.modelValue && props.value !== undefined,
                        'peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400': !props.disabled,
                        'bg-surface-200 [&>*:first-child]:bg-surface-600 dark:bg-surface-700 dark:[&>*:first-child]:bg-surface-400 border-surface-300 dark:border-surface-700 select-none pointer-events-none cursor-default': props.disabled
                    }
                ]
            }),
            input: {
                class: [
                    'peer',

                    // Size
                    'w-full ',
                    'h-full',

                    // Position
                    'absolute',
                    'top-0 left-0',
                    'z-10',

                    // Spacing
                    'p-0',
                    'm-0',

                    // Shape
                    'opacity-0',
                    'rounded-md',
                    'outline-none',
                    'border-1 border-surface-200 dark:border-surface-700',

                    // Misc
                    'appearance-none',
                    'cursor-pointer'
                ]
            },
            icon: ({ props }) => ({
                class: [
                    'block',

                    // Shape
                    'rounded-full',

                    // Size
                    'w-3 h-3',

                    // Conditions
                    {
                        'bg-surface-0 dark:bg-surface-900 backface-hidden invisible scale-[0.1]': !props.modelValue,
                        'bg-primary transform visible translate-z-0 scale-[1.1]': props.modelValue
                    },

                    // Transition
                    'transition duration-200'
                ]
            })
        },
        headercheckbox: {
            root: {
                class: [
                    'relative',

                    // Alignment
                    'inline-flex',
                    'align-bottom',

                    // Size
                    'w-5',
                    'h-5',

                    // Misc
                    'cursor-pointer',
                    'select-none'
                ]
            },
            box: ({ props, context }) => ({
                class: [
                    // Alignment
                    'flex',
                    'items-center',
                    'justify-center',

                    // Size
                    'w-5',
                    'h-5',

                    // Shape
                    'rounded',
                    'border',

                    // Colors
                    {
                        'border-surface-300 dark:border-surface-700': !context.checked && !props.invalid,
                        'bg-surface-0 dark:bg-surface-950': !context.checked && !props.invalid && !props.disabled,
                        'border-primary bg-primary': context.checked
                    },

                    // Invalid State
                    'invalid:focus:ring-red-200',
                    'invalid:hover:border-red-500',
                    { 'border-red-500 dark:border-red-400': props.invalid },

                    // States
                    {
                        'peer-hover:border-surface-400 dark:peer-hover:border-surface-600': !props.disabled && !context.checked && !props.invalid,
                        'peer-hover:bg-primary-hover peer-hover:border-primary-hover': !props.disabled && context.checked,
                        'peer-focus-visible:z-10 peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400': !props.disabled,
                        'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': props.disabled
                    },

                    // Transitions
                    'transition-colors',
                    'duration-200'
                ]
            }),
            input: {
                class: [
                    'peer',

                    // Size
                    'w-full ',
                    'h-full',

                    // Position
                    'absolute',
                    'top-0 left-0',
                    'z-10',

                    // Spacing
                    'p-0',
                    'm-0',

                    // Shape
                    'opacity-0',
                    'rounded',
                    'outline-none',
                    'border border-surface-300 dark:border-surface-700',

                    // Misc
                    'appearance-none',
                    'cursor-pointer'
                ]
            },
            icon: {
                class: [
                    // Size
                    'w-[0.875rem]',
                    'h-[0.875rem]',

                    // Colors
                    'text-white dark:text-surface-950',

                    // Transitions
                    'transition-all',
                    'duration-200'
                ]
            }
        },
        rowCheckbox: {
            root: {
                class: [
                    'relative',

                    // Alignment
                    'inline-flex',
                    'align-bottom',

                    // Size
                    'w-5',
                    'h-5',

                    // Misc
                    'cursor-pointer',
                    'select-none'
                ]
            },
            box: ({ props, context }) => ({
                class: [
                    // Alignment
                    'flex',
                    'items-center',
                    'justify-center',

                    // Size
                    'w-5',
                    'h-5',

                    // Shape
                    'rounded',
                    'border',

                    // Colors
                    {
                        'border-surface-300 dark:border-surface-700': !context.checked && !props.invalid,
                        'bg-surface-0 dark:bg-surface-950': !context.checked && !props.invalid && !props.disabled,
                        'border-primary bg-primary': context.checked
                    },

                    // Invalid State
                    'invalid:focus:ring-red-200',
                    'invalid:hover:border-red-500',
                    { 'border-red-500 dark:border-red-400': props.invalid },

                    // States
                    {
                        'peer-hover:border-surface-400 dark:peer-hover:border-surface-600': !props.disabled && !context.checked && !props.invalid,
                        'peer-hover:bg-primary-hover peer-hover:border-primary-hover': !props.disabled && context.checked,
                        'peer-focus-visible:z-10 peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400': !props.disabled,
                        'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': props.disabled
                    },

                    // Transitions
                    'transition-colors',
                    'duration-200'
                ]
            }),
            input: {
                class: [
                    'peer',

                    // Size
                    'w-full ',
                    'h-full',

                    // Position
                    'absolute',
                    'top-0 left-0',
                    'z-10',

                    // Spacing
                    'p-0',
                    'm-0',

                    // Shape
                    'opacity-0',
                    'rounded',
                    'outline-none',
                    'border border-surface-300 dark:border-surface-700',

                    // Misc
                    'appearance-none',
                    'cursor-pointer'
                ]
            },
            icon: {
                class: [
                    // Size
                    'w-[0.875rem]',
                    'h-[0.875rem]',

                    // Colors
                    'text-white dark:text-surface-950',

                    // Transitions
                    'transition-all',
                    'duration-200'
                ]
            }
        },
        transition: {
            class: 'p-3 flex flex-col gap-2',
            enterFromClass: 'opacity-0 scale-y-[0.8]',
            enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
            leaveActiveClass: 'transition-opacity duration-100 ease-linear',
            leaveToClass: 'opacity-0'
        }
    },
    bodyrow: ({ context, props }) => ({
        class: [
            // Color
            'dark:text-white/80',
            { 'bg-primary-highlight text-primary-highlight-inverse': context.selected },
            { 'bg-surface-0 text-surface-600 dark:bg-surface-900': !context.selected },
            { 'font-bold bg-surface-0 dark:bg-surface-900 z-20': props.frozenRow },
            { 'odd:bg-surface-0 odd:text-surface-600 dark:odd:bg-surface-900 even:bg-surface-50 even:text-surface-600 dark:even:bg-surface-800/50': context.stripedRows },

            // State
            { 'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 ring-inset dark:focus:ring-primary-400': context.selectable },
            { 'hover:bg-surface-300/20 dark:hover:bg-surface-800/50 hover:text-surface-600': props.selectionMode && !context.selected },

            // Transition
            { 'transition duration-200': (props.selectionMode && !context.selected) || props.rowHover },

            // Misc
            { 'cursor-pointer': props.selectionMode }
        ]
    }),
    rowexpansion: {
        class: 'bg-surface-0 dark:bg-surface-900 text-surface-600 dark:text-white/80'
    },
    rowgroupheader: {
        class: ['sticky z-20', 'bg-surface-0 text-surface-600 dark:text-white/70', 'dark:bg-surface-900']
    },
    rowgroupfooter: {
        class: ['sticky z-20', 'bg-surface-0 text-surface-600 dark:text-white/70', 'dark:bg-surface-900']
    },
    rowgrouptoggler: {
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',
            'text-left',

            // Spacing
            'm-0 p-0',

            // Size
            'w-8 h-8',

            // Shape
            'border-0 rounded-full',

            // Color
            'text-surface-500 dark:text-white/70',
            'bg-transparent',
            'focus-visible:outline-none focus-visible:outline-offset-0',
            'focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',

            // Transition
            'transition duration-200',

            // Misc
            'overflow-hidden',
            'cursor-pointer select-none'
        ]
    },
    rowgrouptogglericon: {
        class: 'inline-block w-4 h-4'
    },
    resizehelper: {
        class: 'absolute hidden w-[2px] z-20 bg-primary'
    }
};
