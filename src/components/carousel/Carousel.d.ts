import { VNode } from 'vue';

interface CarouselProps {
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
}

declare class Carousel {
	$props: CarouselProps;
	$slots: {
		item: VNode[];
		header: VNode[];
		footer: VNode[];
	}
}

export default Carousel;
