import Vue, {VNode} from 'vue';

declare class Carousel extends Vue {
	value?: any;
	page?: number;
	numVisible?: number;
	numScroll?: number;
	responsiveOptions?: any[];
	orientation?: string;
	verticalViewPortHeight?: string;
	containerClass?: string;
	dotsContentClass?: string;
	contentClass?: string;
	circular?: boolean;
	autoplayInterval?: number;
	$slots: {
		item: VNode[];
		header: VNode[];
		footer: VNode[];
	}
}

export default Carousel;