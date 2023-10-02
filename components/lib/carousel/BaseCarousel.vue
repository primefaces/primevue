<script>
import BaseComponent from 'primevue/basecomponent';
import CarouselStyle from 'primevue/carousel/style';

export default {
    name: 'BaseCarousel',
    extends: BaseComponent,
    props: {
        value: null,
        page: {
            type: Number,
            default: 0
        },
        numVisible: {
            type: Number,
            default: 1
        },
        numScroll: {
            type: Number,
            default: 1
        },
        responsiveOptions: Array,
        orientation: {
            type: String,
            default: 'horizontal'
        },
        verticalViewPortHeight: {
            type: String,
            default: '300px'
        },
        contentClass: String,
        containerClass: String,
        indicatorsContentClass: String,
        circular: {
            type: Boolean,
            default: false
        },
        autoplayInterval: {
            type: Number,
            default: 0
        },
        showNavigators: {
            type: Boolean,
            default: true
        },
        showIndicators: {
            type: Boolean,
            default: true
        },
        prevButtonProps: {
            type: null,
            default: null
        },
        nextButtonProps: {
            type: null,
            default: null
        }
    },
    style: CarouselStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
