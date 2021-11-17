import { VNode } from 'vue';

interface ProgressBarProps {
    value?: number;
    mode?: string;
    showValue?: boolean;
}

declare class ProgressBar {
    $props: ProgressBarProps;
    $slots: {
        '': VNode[];
    }
}

export default ProgressBar;
