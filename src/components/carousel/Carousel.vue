<template>
	<div :id="id" :class="['p-carousel p-component', {'p-carousel-vertical': isVertical(), 'p-carousel-horizontal': !isVertical()}]">
		<div class="p-carousel-header" v-if="$scopedSlots.header">
			<slot name="header"></slot>
		</div>
		<div :class="contentClasses">
			<div :class="containerClasses">
				<button :class="['p-carousel-prev p-link', {'p-disabled': backwardIsDisabled}]" :disabled="backwardIsDisabled" @click="navBackward" type="button" v-ripple>
					<span :class="['p-carousel-prev-icon pi', {'pi-chevron-left': !isVertical(),'pi-chevron-up': isVertical()}]"></span>
				</button>

				<div class="p-carousel-items-content" :style="[{'height': isVertical() ? verticalViewPortHeight : 'auto'}]">
					<div ref="itemsContainer" class="p-carousel-items-container" @transitionend="onTransitionEnd" @touchend="onTouchEnd" @touchstart="onTouchStart" @touchmove="onTouchMove">
						<template v-if="isCircular()">
							<div v-for="(item, index) of value.slice(-1 * d_numVisible)" :key="index + '_scloned'" :class="['p-carousel-item p-carousel-item-cloned',
								{'p-carousel-item-active': (totalShiftedItems * -1) === (value.length + d_numVisible),
								'p-carousel-item-start': 0 === index,
								'p-carousel-item-end': value.slice(-1 * d_numVisible).length - 1 === index}]">
								<slot name="item" :data="item" :index="index"></slot>
							</div>
						</template>
						<div v-for="(item, index) of value" :key="index" :class="['p-carousel-item',
							{'p-carousel-item-active': firstIndex() <= index && lastIndex() >= index,
							'p-carousel-item-start': firstIndex() === index,
							'p-carousel-item-end': lastIndex() === index}]">
							<slot name="item" :data="item" :index="index"></slot>
						</div>
						<template v-if="isCircular()">
							<div v-for="(item, index) of value.slice(0, d_numVisible)" :key="index + '_fcloned'" :class="['p-carousel-item p-carousel-item-cloned',
								{'p-carousel-item-active': totalShiftedItems === 0,
								'p-carousel-item-start': 0 === index,
								'p-carousel-item-end': value.slice(0, d_numVisible).length - 1 === index}]">
								<slot name="item" :data="item" :index="index"></slot>
							</div>
						</template>
					</div>
				</div>

				<button :class="['p-carousel-next p-link', {'p-disabled': forwardIsDisabled}]" :disabled="forwardIsDisabled" @click="navForward" type="button" v-ripple>
					<span :class="['p-carousel-prev-icon pi', {'pi-chevron-right': !isVertical(),'pi-chevron-down': isVertical()}]"></span>
				</button>
			</div>
			<ul :class="indicatorsContentClasses">
				<li v-for="(indicator, i) of totalIndicators" :key="'p-carousel-indicator-' + i" :class="['p-carousel-indicator', {'p-highlight': d_page === i}]">
					<button class="p-link" @click="onIndicatorClick($event, i)" type="button" />
				</li>
			</ul>
		</div>
		<div class="p-carousel-footer" v-if="$scopedSlots.footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
import UniqueComponentId from '../utils/UniqueComponentId';
import DomHandler from '../utils/DomHandler';
import Ripple from '../ripple/Ripple';

export default {
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
			default:0
		}
	},
	data() {
		return {
			id : UniqueComponentId(),
			remainingItems: 0,
			d_numVisible: this.numVisible,
			d_numScroll: this.numScroll,
			d_oldNumScroll: 0,
			d_oldNumVisible: 0,
			d_oldValue: null,
			d_page: this.page,
			totalShiftedItems: this.page * this.numScroll * -1,
			allowAutoplay : !!this.autoplayInterval,
			d_circular : this.circular || this.allowAutoplay,
			swipeThreshold: 20
		}
	},
	isRemainingItemsAdded: false,
	watch: {
		page(newValue) {
			this.d_page = newValue;
		},
		circular(newValue) {
			this.d_circular = newValue;
		},
		numVisible(newValue, oldValue) {
			this.d_numVisible = newValue;
			this.d_oldNumVisible = oldValue;
		},
		numScroll(newValue, oldValue) {
			this.d_oldNumScroll = oldValue;
			this.d_numScroll = newValue;
		},
		value(oldValue) {
			this.d_oldValue =oldValue;
		}
	},
	methods: {
		step(dir, page) {
			let totalShiftedItems = this.totalShiftedItems;
			const isCircular = this.isCircular();

			if (page != null) {
				totalShiftedItems = (this.d_numScroll * page) * -1;

				if (isCircular) {
					totalShiftedItems -= this.d_numVisible;
				}

				this.isRemainingItemsAdded = false;
			}
			else {
				totalShiftedItems += (this.d_numScroll * dir);
				if (this.isRemainingItemsAdded) {
					totalShiftedItems += this.remainingItems - (this.d_numScroll * dir);
					this.isRemainingItemsAdded = false;
				}

				let originalShiftedItems = isCircular ? (totalShiftedItems + this.d_numVisible) : totalShiftedItems;
				page = Math.abs(Math.floor(originalShiftedItems / this.d_numScroll));
			}

			if (isCircular && this.d_page === (this.totalIndicators - 1) && dir === -1) {
				totalShiftedItems = -1 * (this.value.length + this.d_numVisible);
				page = 0;
			}
			else if (isCircular && this.d_page === 0 && dir === 1) {
				totalShiftedItems = 0;
				page = (this.totalIndicators - 1);
			}
			else if (page === (this.totalIndicators - 1) && this.remainingItems > 0) {
				totalShiftedItems += ((this.remainingItems * -1) - (this.d_numScroll * dir));
				this.isRemainingItemsAdded = true;
			}

			if (this.$refs.itemsContainer) {
				DomHandler.removeClass(this.$refs.itemsContainer, 'p-items-hidden');
				this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100/ this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.d_numVisible)}%, 0, 0)`;
				this.$refs.itemsContainer.style.transition = 'transform 500ms ease 0s';
			}

			this.totalShiftedItems = totalShiftedItems;

			this.$emit('update:page', page);
			this.d_page = page;
		},
		calculatePosition() {
			if (this.$refs.itemsContainer && this.responsiveOptions) {
				let windowWidth = window.innerWidth;
				let matchedResponsiveOptionsData = {
					numVisible: this.numVisible,
					numScroll: this.numScroll
				};

				for (let i = 0; i < this.responsiveOptions.length; i++) {
					let res = this.responsiveOptions[i];

					if (parseInt(res.breakpoint, 10) >= windowWidth) {
						matchedResponsiveOptionsData = res;
					}
				}

				if (this.d_numScroll !== matchedResponsiveOptionsData.numScroll) {
					let page = this.d_page;
					page = parseInt((page * this.d_numScroll) / matchedResponsiveOptionsData.numScroll);

					this.totalShiftedItems = (matchedResponsiveOptionsData.numScroll * page) * -1;

					if (this.isCircular()) {
						this.totalShiftedItems -= matchedResponsiveOptionsData.numVisible;
					}

					this.d_numScroll = matchedResponsiveOptionsData.numScroll;

					this.$emit('update:page', page);
					this.d_page = page;
				}

				if (this.d_numVisible !== matchedResponsiveOptionsData.numVisible) {
					this.d_numVisible = matchedResponsiveOptionsData.numVisible;
				}
			}
		},
		navBackward(e,index){
			if (this.d_circular || this.d_page !== 0) {
				this.step(1, index);
			}

			this.allowAutoplay = false;

			if (e.cancelable) {
				e.preventDefault();
			}
		},
		navForward(e,index){
			if (this.d_circular || this.d_page < (this.totalIndicators - 1)) {
				this.step(-1, index);
			}

			this.allowAutoplay = false;

			if (e.cancelable) {
				e.preventDefault();
			}
		},
		onIndicatorClick(e, index) {
			let page = this.d_page;

			if (index > page) {
				this.navForward(e, index);
			}
			else if (index < page) {
				this.navBackward(e, index);
			}
		},
		onTransitionEnd() {
			if (this.$refs.itemsContainer) {
				DomHandler.addClass(this.$refs.itemsContainer, 'p-items-hidden');
				this.$refs.itemsContainer.style.transition = '';

				if ((this.d_page === 0 || this.d_page === (this.totalIndicators - 1)) && this.isCircular()) {
					this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100/ this.d_numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100/ this.d_numVisible)}%, 0, 0)`;
				}
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

			if (this.isVertical()) {
				this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
			}
			else {
				this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
			}
		},
		changePageOnTouch(e, diff) {
			if (Math.abs(diff) > this.swipeThreshold) {
				if (diff < 0) {           // left
					this.navForward(e);
				}
				else {                    // right
					this.navBackward(e);
				}
			}
		},
		bindDocumentListeners() {
			if (!this.documentResizeListener) {
				this.documentResizeListener = (e) => {
					this.calculatePosition(e);
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
		startAutoplay() {
			this.interval = setInterval(() => {
					if(this.d_page === (this.totalIndicators - 1)) {
						this.step(-1, 0);
					}
					else {
						this.step(-1, this.d_page + 1);
					}
				},
				this.autoplayInterval);
		},
		stopAutoplay() {
			if (this.interval) {
				clearInterval(this.interval);
			}
		},
		createStyle() {
			if (!this.carouselStyle) {
				this.carouselStyle = document.createElement('style');
				this.carouselStyle.type = 'text/css';
				document.body.appendChild(this.carouselStyle);
			}

			let innerHTML = `
            #${this.id} .p-carousel-item {
                flex: 1 0 ${ (100/ this.d_numVisible) }%
            }
        `;

			if (this.responsiveOptions) {
				this.responsiveOptions.sort((data1, data2) => {
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

				for (let i = 0; i < this.responsiveOptions.length; i++) {
					let res = this.responsiveOptions[i];

					innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${ (100/ res.numVisible) }%
                        }
                    }
                `
				}
			}

			this.carouselStyle.innerHTML = innerHTML;
		},
		isVertical() {
			return this.orientation === 'vertical';
		},
		isCircular() {
			return this.value && this.d_circular && this.value.length >= this.d_numVisible;
		},
		isAutoplay() {
			return this.autoplayInterval && this.allowAutoplay;
		},
		firstIndex() {
			return this.isCircular()? (-1 * (this.totalShiftedItems + this.d_numVisible)) : (this.totalShiftedItems * -1);
		},
		lastIndex() {
			return (this.firstIndex() + this.d_numVisible - 1);
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
		const isCircular = this.isCircular();
		let stateChanged = false;
		let totalShiftedItems = this.totalShiftedItems;

		if (this.autoplayInterval) {
			this.stopAutoplay();
		}

		if(this.d_oldNumScroll !== this.d_numScroll || this.d_oldNumVisible !== this.d_numVisible || this.d_oldValue.length !== this.value.length) {
			this.remainingItems = (this.value.length - this.d_numVisible) % this.d_numScroll;

			let page = this.d_page;
			if (this.totalIndicators !== 0 && page >= this.totalIndicators) {
				page = this.totalIndicators - 1;

				this.$emit('update:page', page);
				this.d_page = page;

				stateChanged = true;
			}

			totalShiftedItems = (page * this.d_numScroll) * -1;
			if (isCircular) {
				totalShiftedItems -= this.d_numVisible;
			}

			if (page === (this.totalIndicators - 1) && this.remainingItems > 0) {
				totalShiftedItems += (-1 * this.remainingItems) + this.d_numScroll;
				this.isRemainingItemsAdded = true;
			}
			else {
				this.isRemainingItemsAdded = false;
			}

			if (totalShiftedItems !== this.totalShiftedItems) {
				this.totalShiftedItems = totalShiftedItems;

				stateChanged = true;
			}

			this.d_oldNumScroll = this.d_numScroll;
			this.d_oldNumVisible = this.d_numVisible;
			this.d_oldValue = this.value;

			this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100/ this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.d_numVisible)}%, 0, 0)`;
		}

		if (isCircular) {
			if (this.d_page === 0) {
				totalShiftedItems = -1 * this.d_numVisible;
			}
			else if (totalShiftedItems === 0) {
				totalShiftedItems = -1 * this.value.length;
				if (this.remainingItems > 0) {
					this.isRemainingItemsAdded = true;
				}
			}

			if (totalShiftedItems !== this.totalShiftedItems) {
				this.totalShiftedItems = totalShiftedItems;

				stateChanged = true;
			}
		}

		if (!stateChanged && this.isAutoplay()) {
			this.startAutoplay();
		}
	},
	beforeDestroy() {
		if (this.responsiveOptions) {
			this.unbindDocumentListeners();
		}

		if (this.autoplayInterval) {
			this.stopAutoplay();
		}
	},
	computed: {
		totalIndicators() {
			return this.value ? Math.ceil((this.value.length - this.d_numVisible) / this.d_numScroll) + 1 : 0;
		},
		backwardIsDisabled() {
			return (this.value && (!this.circular || this.value.length < this.d_numVisible) && this.d_page === 0);
		},
		forwardIsDisabled() {
			return (this.value && (!this.circular || this.value.length < this.d_numVisible) && (this.d_page === (this.totalIndicators - 1) || this.totalIndicators === 0));
		},
		containerClasses() {
			return ['p-carousel-container', this.containerClass];
		},
		contentClasses() {
			return ['p-carousel-content ', this.contentClass];
		},
		indicatorsContentClasses() {
			return ['p-carousel-indicators p-reset', this.indicatorsContentClass];
		},
    },
    directives: {
        'ripple': Ripple
    },
	name: "Carousel"
}
</script>

<style>
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
</style>
