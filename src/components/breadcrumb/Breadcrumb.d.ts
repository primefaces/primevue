interface BreadcrumbProps {
    home?: any;
    model?: any[];
    exact?: boolean;
}

interface BreadcrumbItemSlotInterface {
    item: any;
}

declare class Breadcrumb {
    $props: BreadcrumbProps;
    $slots: {
        item: BreadcrumbItemSlotInterface
    }
}

export default Breadcrumb;
