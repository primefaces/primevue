<template>
    <div class="p-galleria-thumbnail-content">
        <div class="p-galleria-thumbnail-container">
            <button v-if="showThumbnailNavButtons" :class="navBackwardClass" @click="navBackward($event)" :disabled="isNavBackwardDisabled()">
                <span :class="navBackwardIconClass"></span>
            </button>
            <div class="p-galleria-thumbnail-items-content" :style="{'height': isVertical ? contentHeight : ''}">
                <div ref="itemsContainer" class="p-galleria-thumbnail-items-container" @transitionend="onTransitionEnd"
                    @touchstart="onTouchStart($event)" @touchmove="onTouchMove($event)" @touchend="onTouchEnd($event)">
                    <div v-for="(item, index) of value" :key="`p-galleria-thumbnail-item-${index}`" :class="['p-galleria-thumbnail-item', {
                        'p-galleria-thumbnail-item-current': activeItemIndex === index,
                        'p-galleria-thumbnail-item-active': isItemActive(index),
                        'p-galleria-thumbnail-item-start': firstItemAciveIndex() === index,
                        'p-galleria-thumbnail-item-end': lastItemActiveIndex() === index }]">
                        <div class="p-galleria-thumbnail-item-content" :tabindex="isItemActive(index) ? 0 : null" @click="onItemClick(index)" @keydown.enter="onItemClick(index)">
                            <GalleriaItemSlot type="thumbnail" :item="item" :templates="templates" />
                        </div>
                    </div>
                </div>
            </div>
            <button v-if="showThumbnailNavButtons" :class="navForwardClass" @click="navForward($event)" :disabled="isNavForwardDisabled()">
                <span :class="navForwardIconClass"></span>
            </button>
        </div>
    </div>
</template>

<script>
import GalleriaItemSlot from './GalleriaItemSlot';
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        containerId: {
            type: String,
            default: null,
        },
        value: {
            type: Array,
            default: null
        },
        numVisible: {
            type: Number,
            default: 3
        },
        activeItemIndex: {
            type: Number,
            default: 0
        },
        isVertical: {
            type: Boolean,
            default: false
        },
        slideShowActive: {
            type: Boolean,
            default: false
        },
        circular: {
            type: Boolean,
            default: false
        },
        responsiveOptions: {
            type: Array,
            default: null
        },
        contentHeight: {
            type: String,
            default: "300px"
        },
        showThumbnailNavButtons: {
            type: Boolean,
            default: true
        },
        templates: {
            type: null,
            default: null
        }
    },
    startPos: null,
    thumbnailsStyle: null,
    sortedResponsiveOptions: null,
    data() {
        return {
            d_numVisible: this.numVisible,
            d_oldNumVisible: this.numVisible,
            d_activeItemIndex: this.activeItemIndex,
            d_oldActiveItemIndex: this.activeItemIndex,
            totalShiftedItems: 0,
            page: 0
        }
    },
    watch: {
        numVisible(newValue, oldValue) {
			this.d_numVisible = newValue;
			this.d_oldNumVisible = oldValue;
        },
        activeItemIndex(newValue, oldValue) {
			this.d_activeItemIndex = newValue;
			this.d_oldActiveItemIndex = oldValue;
        }
    },
    mounted() {
		this.createStyle();
		this.calculatePosition();

		if (this.responsiveOptions) {
			this.bindDocumentListeners();
		}
    },
    updated() {
        let totalShiftedItems = this.totalShiftedItems;

        if (this.d_oldNumVisible !== this.d_numVisible || this.d_oldActiveItemIndex !== this.d_activeItemIndex) {
            if (this.d_activeItemIndex <= this.getMedianItemIndex()) {
                totalShiftedItems = 0;
            }
            else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this.d_activeItemIndex) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            }
            else if (this.value.length - this.d_numVisible < this.d_activeItemIndex && this.d_numVisible % 2 === 0) {
                totalShiftedItems = (this.d_activeItemIndex * -1) + this.getMedianItemIndex() + 1;
            }
            else {
                totalShiftedItems = (this.d_activeItemIndex * -1) + this.getMedianItemIndex();
            }

            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }

            this.$refs.itemsContainer.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100/ this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.d_numVisible)}%, 0, 0)`;

            if (this.d_oldActiveItemIndex !== this.d_activeItemIndex) {
                DomHandler.removeClass(this.$refs.itemsContainer, 'p-items-hidden');
                this.$refs.itemsContainer.style.transition = 'transform 500ms ease 0s';
            }

            this.d_oldActiveItemIndex = this.d_activeItemIndex;
            this.d_oldNumVisible = this.d_numVisible;
        }
    },
    beforeDestroy() {
		if (this.responsiveOptions) {
			this.unbindDocumentListeners();
        }

        if (this.thumbnailsStyle) {
            this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
        }
	},
    methods: {
        step(dir) {
            let totalShiftedItems = this.totalShiftedItems + dir;

            if (dir < 0 && (-1 * totalShiftedItems) + this.d_numVisible > (this.value.length - 1)) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            }
            else if (dir > 0 && totalShiftedItems > 0) {
                totalShiftedItems = 0;
            }

            if (this.circular) {
                if (dir < 0 && this.value.length - 1 === this.d_activeItemIndex) {
                    totalShiftedItems = 0;
                }
                else if (dir > 0 && this.d_activeItemIndex === 0) {
                    totalShiftedItems = this.d_numVisible - this.value.length;
                }
            }

            if (this.$refs.itemsContainer) {
                DomHandler.removeClass(this.$refs.itemsContainer, 'p-items-hidden');
                this.$refs.itemsContainer.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100/ this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.d_numVisible)}%, 0, 0)`;
                this.$refs.itemsContainer.style.transition = 'transform 500ms ease 0s';
            }

            this.totalShiftedItems = totalShiftedItems;
        },
        stopSlideShow() {
            if (this.slideShowActive && this.stopSlideShow) {
                this.$emit('stopSlideShow');
            }
        },
        getMedianItemIndex() {
            let index = Math.floor(this.d_numVisible / 2);

            return (this.d_numVisible % 2) ? index : index - 1;
        },
        navBackward(e) {
            this.stopSlideShow();

            let prevItemIndex = this.d_activeItemIndex !== 0 ? this.d_activeItemIndex - 1 : 0;
            let diff = prevItemIndex + this.totalShiftedItems;
            if ((this.d_numVisible - diff - 1) > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) !== 0 || this.circular)) {
                this.step(1);
            }

            let activeIndex = this.circular && this.d_activeItemIndex === 0 ? this.value.length - 1 : prevItemIndex;
            this.$emit('update:activeItemIndex', activeIndex);

            if (e.cancelable) {
                e.preventDefault();
            }
        },
        navForward(e) {
            this.stopSlideShow();

            let nextItemIndex = this.d_activeItemIndex + 1;
            if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1 || this.circular)) {
                this.step(-1);
            }

            let activeIndex = this.circular && (this.value.length - 1) === this.d_activeItemIndex ? 0 : nextItemIndex;
            this.$emit('update:activeItemIndex', activeIndex);

            if (e.cancelable) {
                e.preventDefault();
            }
        },
        onItemClick(index) {
            this.stopSlideShow();

            let selectedItemIndex = index;
            if (selectedItemIndex !== this.d_activeItemIndex) {
                const diff = selectedItemIndex + this.totalShiftedItems;
                let dir = 0;
                if (selectedItemIndex < this.d_activeItemIndex) {
                    dir = (this.d_numVisible - diff - 1) - this.getMedianItemIndex();
                    if (dir > 0 && (-1 * this.totalShiftedItems) !== 0) {
                        this.step(dir);
                    }
                }
                else {
                    dir = this.getMedianItemIndex() - diff;
                    if (dir < 0 && (-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1) {
                        this.step(dir);
                    }
                }

                this.$emit('update:activeItemIndex', selectedItemIndex);
            }
        },
        onTransitionEnd() {
            if (this.$refs.itemsContainer) {
                DomHandler.addClass(this.$refs.itemsContainer, 'p-items-hidden');
                this.$refs.itemsContainer.style.transition = '';
            }
        },
        onTouchStart(e) {
            let touchobj = e.changedTouches[0];

            this.startPos = {
                x: touchobj.pageX,
                y: touchobj.pageY
            };
        },
        onTouchMove(e) {
            if (e.cancelable) {
                e.preventDefault();
            }
        },
        onTouchEnd(e) {
            let touchobj = e.changedTouches[0];

            if (this.isVertical) {
                this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
            }
            else {
                this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
            }
        },
        changePageOnTouch(e, diff) {
            if (diff < 0) {           // left
                this.navForward(e);
            }
            else {                    // right
                this.navBackward(e);
            }
        },
        getTotalPageNumber() {
            return this.value.length > this.d_numVisible ? (this.value.length - this.d_numVisible) + 1 : 0;
        },
        createStyle() {
            if (!this.thumbnailsStyle) {
                this.thumbnailsStyle = document.createElement('style');
                this.thumbnailsStyle.type = 'text/css';
                document.body.appendChild(this.thumbnailsStyle);
            }

            let innerHTML = `
                #${this.containerId} .p-galleria-thumbnail-item {
                    flex: 1 0 ${ (100/ this.d_numVisible) }%
                }
            `;

            if (this.responsiveOptions) {
                this.sortedResponsiveOptions = [...this.responsiveOptions];
                this.sortedResponsiveOptions.sort((data1, data2) => {
                    const value1 = data1.breakpoint;
                    const value2 = data2.breakpoint;
                    let result = null;

                    if (value1 == null && value2 != null)
                        result = -1;
                    else if (value1 != null && value2 == null)
                        result = 1;
                    else if (value1 == null && value2 == null)
                        result = 0;
                    else if (typeof value1 === 'string' && typeof value2 === 'string')
                        result = value1.localeCompare(value2, undefined, { numeric: true });
                    else
                        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                    return -1 * result;
                });

                for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                    let res = this.sortedResponsiveOptions[i];

                    innerHTML += `
                        @media screen and (max-width: ${res.breakpoint}) {
                            #${this.containerId} .p-galleria-thumbnail-item {
                                flex: 1 0 ${ (100/ res.numVisible) }%
                            }
                        }
                    `
                }
            }

            this.thumbnailsStyle.innerHTML = innerHTML;
        },
        calculatePosition() {
            if (this.$refs.itemsContainer && this.sortedResponsiveOptions) {
                let windowWidth = window.innerWidth;
                let matchedResponsiveData = {
                    numVisible: this.numVisible
                };

                for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                    let res = this.sortedResponsiveOptions[i];

                    if (parseInt(res.breakpoint, 10) >= windowWidth) {
                        matchedResponsiveData = res;
                    }
                }

                if (this.d_numVisible !== matchedResponsiveData.numVisible) {
                    this.d_numVisible = matchedResponsiveData.numVisible;
                }
            }
        },
        bindDocumentListeners() {
            if (!this.documentResizeListener) {
                this.documentResizeListener = () => {
                    this.calculatePosition();
                };

                window.addEventListener('resize', this.documentResizeListener);
            }
        },
        unbindDocumentListeners() {
            if(this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        },
        isNavBackwardDisabled() {
            return (!this.circular && this.d_activeItemIndex === 0) || (this.value.length <= this.d_numVisible);
        },
        isNavForwardDisabled() {
            return (!this.circular && this.d_activeItemIndex === (this.value.length - 1)) || (this.value.length <= this.d_numVisible);
        },
        firstItemAciveIndex() {
            return this.totalShiftedItems * -1;
        },
        lastItemActiveIndex() {
            return this.firstItemAciveIndex() + this.d_numVisible - 1;
        },
        isItemActive(index) {
            return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
        }
    },
    computed: {
        navBackwardClass() {
            return ['p-galleria-thumbnail-prev p-button', {
                'p-disabled': this.isNavBackwardDisabled()
            }];
        },
        navForwardClass() {
            return ['p-galleria-thumbnail-next p-button', {
                'p-disabled': this.isNavForwardDisabled()
            }];
        },
        navBackwardIconClass() {
            return ['p-galleria-thumbnail-prev-icon pi', {
                'pi-chevron-left': !this.isVertical,
                'pi-chevron-up': this.isVertical
            }];
        },
        navForwardIconClass() {
            return ['p-galleria-thumbnail-next-icon pi', {
                'pi-chevron-right': !this.isVertical,
                'pi-chevron-down': this.isVertical
            }];
        }
    },
    components: {
        'GalleriaItemSlot': GalleriaItemSlot
    }
}
</script>
