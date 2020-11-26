import Vue, {VNode} from 'vue';

declare class Galleria extends Vue {
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