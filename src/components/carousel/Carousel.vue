<template>
	<div :id="id" :class="containerClass">
		<div :class="contentClasses">
			<button :class="['p-carousel-prev p-link', {'p-disabled': d_activeIndex === 0}]" :disabled="d_activeIndex === 0" @click="navBackward">
				<span class="p-carousel-prev-icon pi pi-chevron-left"></span>
			</button>
			<div class="p-carousel-container" :style="[{'height': isVertical() ? verticalContentHeight : 'auto'}]">
				<div class="p-carousel-header" v-if="$scopedSlots.header">
					<slot name="header"></slot>
				</div>
				<div ref="itemsContainer" class="p-carousel-items" @touchend="onTouchEnd" @touchstart="onTouchStart" @touchmove="onTouchMove">
					<div v-for="(item, index) of value" :key="index" :class="['p-carousel-item',
							{'p-carousel-item-active': firstIndex() <= index && lastIndex() >= index,
							'p-carousel-item-start': firstIndex() === index,
							'p-carousel-item-end': lastIndex() === index}]">
						<slot name="item" :data="item" :index="index"></slot>
					</div>
				</div>
				<div class="p-carousel-footer" v-if="$scopedSlots.footer">
					<slot name="footer"></slot>
				</div>
			</div>
			<button :class="['p-carousel-next p-link', {'p-disabled': d_activeIndex === totalDots-1}]" :disabled="d_activeIndex === totalDots-1" @click="navForward">
				<span class="p-carousel-next-icon pi pi-chevron-right"></span>
			</button>
		</div>
		<ul :class="dotsContentClasses">
			<li v-for="(totalDot, i) of totalDots" :key="'p-carousel-dot-' + i" :class="['p-carousel-dot-item', {'p-highlight': d_activeIndex === i}]">
				<button class="p-link" @click="onDotClick($event, i)">
					<span :class="['p-carousel-dot-icon pi', {'pi-circle-on': d_activeIndex === i, 'pi-circle-off': !(d_activeIndex === i)}]"></span>
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
import UniqueComponentId from '../utils/UniqueComponentId';

export default {
	props: {
		value: null,
		activeIndex: {
			type: Number,
			default: 0
		},
		header: null,
		footer: null,
		numVisible: {
			type: Number,
			default: 1
		},
		numScroll: {
			type: Number,
			default: 1
		},
		responsive: Array,
		orientation: {
			type: String,
			default: 'horizontal'
		},
		verticalContentHeight: {
			type: String,
			default: '300px'
		},
		contentClass: String,
		dotsContentClass: String
	},
	data() {
		return {
			remainingItems: 0,
			d_numVisible: this.numVisible,
			d_numScroll: this.numScroll,
			d_oldNumScroll: 0,
			d_activeIndex: this.activeIndex,
			totalShiftedItems: this.activeIndex * this.numScroll * -1,
			id : UniqueComponentId()
		}
	},
	isRemainingItemsAdded: false,
	watch: {
		activeIndex(newValue) {
			this.d_activeIndex = newValue;
		},
		numVisible(newValue) {
			this.d_numVisible = newValue;
		},
		numScroll(newValue, oldValue) {
			this.d_oldNumScroll = oldValue;
			this.d_numScroll = newValue;
		}
	},
	methods: {
		step(event, dir, index) {
			let totalShiftedItems = this.totalShiftedItems;

			if (index != null) {
				totalShiftedItems = (this.d_numScroll * index) * -1;
				this.isRemainingItemsAdded = false;
			}
			else {
				totalShiftedItems += (this.d_numScroll * dir);
				if (this.isRemainingItemsAdded) {
					totalShiftedItems += this.remainingItems - (this.d_numScroll * dir);
					this.isRemainingItemsAdded = false;
				}

				index = Math.abs(parseInt(totalShiftedItems / this.d_numScroll, 10));
			}

			if (index === (this.totalDots - 1) && this.remainingItems > 0) {
				totalShiftedItems += ((this.remainingItems * -1) - (this.d_numScroll * dir));
				this.isRemainingItemsAdded = true;
			}

			if (this.$refs.itemsContainer) {
				this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100/ this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.d_numVisible)}%, 0, 0)`;
				this.$refs.itemsContainer.style.transition = 'transform 500ms ease 0s';

				if (this.animationTimeout) {
					clearTimeout(this.animationTimeout);
				}

				this.animationTimeout = setTimeout(() => {
					if (this.$refs.itemsContainer) {
						this.$refs.itemsContainer.style.transition = '';
					}
				}, 500);
			}

			this.totalShiftedItems = totalShiftedItems;

			this.$emit('update:activeIndex', index);
			this.d_activeIndex = index;
		},
		calculatePosition() {
			if (this.$refs.itemsContainer && this.responsive) {
				let windowWidth = window.innerWidth;
				let matchedResponsiveData = {
					numVisible: this.numVisible,
					numScroll: this.numScroll
				};

				for (let i = 0; i < this.responsive.length; i++) {
					let res = this.responsive[i];

					if (parseInt(res.breakpoint, 10) >= windowWidth) {
						matchedResponsiveData = res;
					}
				}

				if (this.d_numScroll !== matchedResponsiveData.numScroll) {
					let activeIndex = this.d_activeIndex;
					activeIndex = parseInt((activeIndex * this.d_numScroll) / matchedResponsiveData.numScroll);

					this.totalShiftedItems = (matchedResponsiveData.numScroll * activeIndex) * -1;
					this.d_numScroll = matchedResponsiveData.numScroll;

					this.$emit('update:activeIndex', activeIndex);
					this.d_activeIndex = activeIndex;
				}

				if (this.d_numVisible !== matchedResponsiveData.numVisible) {
					this.d_numVisible = matchedResponsiveData.numVisible;
				}
			}
		},
		navBackward(e,index){
			if (this.d_activeIndex !== 0) {
				this.step(e, 1, index);
			}

			if (e.cancelable) {
				e.preventDefault();
			}
		},
		navForward(e,index){
			if (this.d_activeIndex < (this.totalDots - 1)) {
				this.step(e, -1, index);
			}

			if (e.cancelable) {
				e.preventDefault();
			}
		},
		onDotClick(e, index) {
			let activeIndex = this.d_activeIndex;

			if (index > activeIndex) {
				this.navForward(e, index);
			}
			else if (index < activeIndex) {
				this.navBackward(e, index);
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
			if (diff < 0) {           // left
				this.navForward(e);
			}
			else {                    // right
				this.navBackward(e);
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

			if (this.responsive) {
				this.responsive.sort((data1, data2) => {
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

				for (let i = 0; i < this.responsive.length; i++) {
					let res = this.responsive[i];

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
		firstIndex() {
			return (this.totalShiftedItems * -1);
		},
		lastIndex() {
			return (this.totalShiftedItems * -1) + this.d_numVisible - 1;
		}
	},
	mounted() {
		this.createStyle();
		this.calculatePosition();

		if (this.responsive) {
			this.bindDocumentListeners();
		}
	},
	updated() {
		if(this.d_oldNumScroll !== this.d_numScroll) {
			this.remainingItems = (this.value.length - this.d_numVisible) % this.d_numScroll;

			let totalShiftedItems = this.totalShiftedItems;
			let activeIndex = this.d_activeIndex;

			if (activeIndex === (this.totalDots - 1) && this.remainingItems > 0) {
				totalShiftedItems += (-1 * this.remainingItems) + this.d_numScroll;
				this.totalShiftedItems = totalShiftedItems;
				this.isRemainingItemsAdded = true;
			}
			else {
				this.isRemainingItemsAdded = false;
			}

			this.d_oldNumScroll = this.d_numScroll;

			this.$refs.itemsContainer.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100/ this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100/ this.d_numVisible)}%, 0, 0)`;
		}
	},
	beforeDestroy() {
		if (this.responsive) {
			this.unbindDocumentListeners();
		}
	},
	computed: {
		totalDots() {
			return this.value ? Math.ceil((this.value.length - this.d_numVisible) / this.d_numScroll) + 1 : 0;
		},
		containerClass() {
			return ['p-carousel p-component', {
				'p-carousel-vertical': this.isVertical()
			}];
		},
		contentClasses() {
			return ['p-carousel-content ', this.contentClass];
		},
		dotsContentClasses() {
			return ['p-carousel-dots-content p-reset', this.dotsContentClass];
		},
	},
	name: "Carousel"
}
</script>

<style>
.p-carousel {
	display: flex;
	flex-direction: column;
	width: 100%;
}

.p-carousel-content {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	overflow: auto;
	padding: .5em;
}

.p-carousel-prev.p-link,
.p-carousel-next.p-link {
	align-self: center;
	text-align: center;
	flex-grow: 0;
	flex-shrink: 0;
	width: 2.5em;
	height: 2.5em;
	position: relative;
}

.p-carousel-prev span,
.p-carousel-next span {
	display: block;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-top: -.45em;
	margin-left: -.45em;
}

.p-carousel-prev span {
	margin-left: -.5em;
}

.p-carousel-container {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	padding: 0 .1em;
}

.p-carousel-header,
.p-carousel-footer {
	padding: .5em;
	z-index: 1;
}

.p-carousel-items {
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
}

.p-carousel-items .p-carousel-item {
	width: 100%;
	box-sizing: border-box;
	overflow: auto;
	visibility: hidden;
	transition: visibility 1s;
}

.p-carousel-items .p-carousel-item.p-carousel-item-active {
	visibility: visible;
}

.p-carousel-dots-content {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: .5em;
}

/* Vertical */
.p-carousel-vertical .p-carousel-content {
	flex-direction: column;
	flex-basis: 100%;
}

.p-carousel-vertical .p-carousel-prev,
.p-carousel-vertical .p-carousel-next {
	transform: rotate(90deg);
}

.p-carousel-vertical .p-carousel-items {
	flex-direction: column;
	height: 100%;
}

.p-carousel-vertical .p-carousel-dots-content {
	margin: .75em 0;
}
</style>