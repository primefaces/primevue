import { VNode } from 'vue';

interface StepsProps {
    id?: string;
    model?: any[];
    readonly?: boolean;
    exact?: boolean;
}

declare class Steps {
    $props: StepsProps;
    $slots: {
        item: VNode[];
    }
}

export default Steps;
