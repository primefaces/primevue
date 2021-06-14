import { VNode } from 'vue';

interface GalleriaProps {
    id?: string;
    value?: any;
    activeIndex?: number;
    fullScreen?: boolean;
    visible?: boolean;
    numVisible?: number;
    responsiveOptions?: any[];
    showItemNavigators?: boolean;
    showThumbnailNavigators?: boolean;
    showItemNavigatorsOnHover?: boolean;
    changeItemOnIndicatorHover?: boolean;
    circular?: boolean;
    autoPlay?: boolean;
    transitionInterval?: number;
    showThumbnails?: boolean;
    thumbnailsPosition?: string;
    verticalThumbnailViewPortHeight?: string;
    showIndicators?: boolean;
    showIndicatorsOnItem?: boolean;
    indicatorsPosition?: string;
    baseZIndex?: number;
    maskClass?: string;
    containerStyle?: string;
    containerClass?: string;
}

declare class Galleria {
    $props: GalleriaProps;
    $emit(eventName: 'update:activeIndex', value: number): this;
    $emit(eventName: 'update:visible', value: boolean): this;
	$slots: {
		header: VNode[];
        footer: VNode[];
        item: VNode[];
        caption: VNode[];
        indicator: VNode[];
        thumbnail: VNode[];
	}
}

export default Galleria;
