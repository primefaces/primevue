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
	contentClass?: string;
	indicatorsContentClass?: string;
	circular?: boolean;
	autoplayInterval?: number;
}

declare class Carousel {
	$props: CarouselProps;
	$emit(eventName: 'update:page', value: number): this;
	$slots: {
		item: VNode[];
		header: VNode[];
		footer: VNode[];
	}
}

export default Carousel;
