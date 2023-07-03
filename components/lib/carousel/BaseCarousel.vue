<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-carousel {
    display: flex;
    flex-direction: column;
}

.p-carousel-content {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.p-carousel-prev,
.p-carousel-next {
    align-self: center;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

.p-carousel-container {
    display: flex;
    flex-direction: row;
}

.p-carousel-items-content {
    overflow: hidden;
    width: 100%;
}

.p-carousel-items-container {
    display: flex;
    flex-direction: row;
}

.p-carousel-indicators {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}

.p-carousel-indicator > button {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Vertical */
.p-carousel-vertical .p-carousel-container {
    flex-direction: column;
}

.p-carousel-vertical .p-carousel-items-container {
    flex-direction: column;
    height: 100%;
}

/* Keyboard Support */
.p-items-hidden .p-carousel-item {
    visibility: hidden;
}

.p-items-hidden .p-carousel-item.p-carousel-item-active {
    visibility: visible;
}
`;

const classes = {
    root: ({ instance }) => [
        'p-carousel p-component',
        {
            'p-carousel-vertical': instance.isVertical(),
            'p-carousel-horizontal': !instance.isVertical()
        }
    ],
    header: 'p-carousel-header',
    content: 'p-carousel-content',
    container: 'p-carousel-container',
    previousButton: ({ instance }) => [
        'p-carousel-prev p-link',
        {
            'p-disabled': instance.backwardIsDisabled
        }
    ],
    previousButtonIcon: 'p-carousel-next-icon',
    itemsContent: 'p-carousel-items-content',
    itemsContainer: 'p-carousel-items-container',
    itemCloned: ({ index, value, totalShiftedItems, d_numVisible }) => [
        'p-carousel-item p-carousel-item-cloned',
        {
            'p-carousel-item-active': totalShiftedItems * -1 === value.length + d_numVisible,
            'p-carousel-item-start': index === 0,
            'p-carousel-item-end': value.slice(-1 * d_numVisible).length - 1 === index
        }
    ],
    item: ({ instance, index }) => [
        'p-carousel-item',
        {
            'p-carousel-item-active': instance.firstIndex() <= index && instance.lastIndex() >= index,
            'p-carousel-item-start': instance.firstIndex() === index,
            'p-carousel-item-end': instance.lastIndex() === index
        }
    ],
    nextButton: ({ instance }) => [
        'p-carousel-next p-link',
        {
            'p-disabled': instance.forwardIsDisabled
        }
    ],
    nextButtonIcon: 'p-carousel-prev-icon',
    indicators: 'p-carousel-indicators p-reset',
    indicator: ({ instance, index }) => [
        'p-carousel-indicator',
        {
            'p-highlight': instance.d_page === index
        }
    ],
    indicatorButton: 'p-link',
    footer: 'p-carousel-footer'
};

const { load: loadStyle } = useStyle(styles, { name: 'carousel', manual: true });

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
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
