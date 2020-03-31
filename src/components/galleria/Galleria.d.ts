import Vue, {VNode} from 'vue';

export declare class Galleria extends Vue {
    id?: string;
    value?: any;
    activeItemIndex?: number;
    fullScreen?: boolean;
    visible?: boolean;
    numVisible?: number;
    responsiveOptions?: any[];
    showPreviewNavButtons?: boolean;
    showThumbnailNavButtons?: boolean;
    showNavButtonsOnPreviewHover?: boolean;
    changePreviewOnIndicatorHover?: boolean;
    circular?: boolean;
    autoPlay?: boolean;
    transitionInterval?: number;
    showThumbnails?: boolean;
    thumbnailsPosition?: string;
    verticalThumbnailViewPortHeight?: string;
    showIndicators?: boolean;
    showIndicatorsOnPreview?: boolean;
    indicatorsPosition?: string;
    baseZIndex?: number;
    maskClass?: string;
    galleriaStyle?: string;
    galleriaClass?: string;
	$slots: {
		header: VNode[];
        footer: VNode[];
        previewItem: VNode[];
        previewCaption: VNode[];
        indicator: VNode[];
        thumbnailItem: VNode[];
	}
}
