interface StepsProps {
    id?: string;
    model?: any[];
    readonly?: boolean;
    exact?: boolean;
}

interface StepsItemSlotInterface {
    item: any;
}

declare class Steps {
    $props: StepsProps;
    $slots: {
        item: StepsItemSlotInterface;
    }
}

export default Steps;
