interface SkeletonProps {
    shape?: string;
    size?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    animation?: string;
}

declare class Skeleton {
    $props: SkeletonProps;
}

export default Skeleton;
