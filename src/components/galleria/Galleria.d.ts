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

interface GalleriaItemSlotInterface {
    item: any;
}

interface GalleriaCaptionSlotInterface {
    item: any;
}

interface GalleriaIndicatorlotInterface {
    index: number;
}

interface GalleriaThumbnailSlotInterface {
    item: any;
}

declare class Galleria {
    $props: GalleriaProps;
    $emit(eventName: 'update:activeIndex', value: number): this;
    $emit(eventName: 'update:visible', value: boolean): this;
	$slots: {
		header: VNode[];
        footer: VNode[];
        item: GalleriaItemSlotInterface;
        caption: GalleriaCaptionSlotInterface;
        indicator: GalleriaIndicatorlotInterface;
        thumbnail: GalleriaThumbnailSlotInterface;
	}
}

export default Galleria;
