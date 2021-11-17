interface AvatarProps {
    label?: string;
    icon?: string;
    image?: string;
    size?: string;
    shape?: string;
}

declare class Avatar {
    $props: AvatarProps
}

export default Avatar;
