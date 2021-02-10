interface TagProps {
    value?: any;
    severity?: string;
    rounded?: boolean;
    icon?: string;
}

declare class Tag {
    $props: TagProps;
}

export default Tag;
