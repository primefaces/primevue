import type { InputGroupPassThroughOptions } from 'primevue/inputgroup';

export default {
    root: {
        class: [
            //GRoup
            // 'group/inputgroup',
            'flex items-stretch w-full',
            '[&>[data-pc-name=inputtext]]:flex-1',
            '[&>[data-pc-name=inputtext]]:w-[1%]',
            '[&>[data-pc-name=inputtext]]:-ml-px',
            '[&>[data-pc-name=inputtext]]:rounded-none',
            '[&>[data-pc-name=inputtext]]:border-0',
            '[&>[data-pc-name=inputtext]]:border-y',
            '[&>[data-pc-name=inputtext]]:border-l',
            '[&>*:first-child]:has-[[data-pc-name=inputtext]]:ml-0',
            '[&>*:first-child]:has-[[data-pc-name=inputtext]]:rounded-l-md',
            '[&>*:last-child]:has-[[data-pc-name=inputtext]]:border-r',
            '[&>*:last-child]:has-[[data-pc-name=inputtext]]:rounded-r-md'
        ]
    }
} as InputGroupPassThroughOptions;
