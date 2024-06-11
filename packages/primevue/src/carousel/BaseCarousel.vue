<script>
import BaseComponent from '@primevue/core/basecomponent';
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
            type: Object,
            default: () => {
                return { severity: 'secondary', text: true, rounded: true };
            }
        },
        nextButtonProps: {
            type: Object,
            default: () => {
                return { severity: 'secondary', text: true, rounded: true };
            }
        }
    },
    style: CarouselStyle,
    provide() {
        return {
            $pcCarousel: this,
            $parentInstance: this
        };
    }
};
</script>
