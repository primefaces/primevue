<template>
    <div ref="animationInlineRef" class="template-features-animation-right-inline">
        <div class="template-features-animation-right-inline-tabs">
            <template v-for="(data, index) in inlineFeaturesData" :key="index">
                <button @click="handleBtnClick(data.id)" @mouseenter="enterCardArea(data.id)" @mouseleave="leaveCardArea" :class="`${!!(data.id === selectedID) && 'template-features-animation-right-inline-tabs-btnActive'}`">
                    {{ data.title }}
                </button>
            </template>
        </div>
        <div class="template-features-animation-right-inline-image">
            <img :src="inlineFeaturesData[selectedID - 1].src" alt="Animation Inline Feature Image" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        inlineFeaturesData: {
            type: null,
            default: null
        },
        parentHandleClick: {
            type: null,
            default: null
        },
        parentHandleHover: {
            type: null,
            default: null
        },
        parentID: {
            type: null,
            default: null
        },
        inlineSeconds: {
            type: Number,
            default: 1000
        }
    },
    observer: null,
    timeout: null,
    data() {
        return {
            selectedID: 1,
            hoveredID: null,
            intervalId: null
        };
    },
    mounted() {
        this.observer = new IntersectionObserver(([entry]) => {
            clearTimeout(this.timeout);

            if (entry.isIntersecting) {
                this.timeout = setTimeout(
                    () => {
                        this.startInterval();
                        this.observer.unobserve(this.$el);
                    },
                    { threshold: 0.2 }
                );
            }
        });

        this.observer.observe(this.$el);
    },
    beforeUnmount() {
        this.$el && this.observer?.unobserve(this.$el);
        clearInterval(this.intervalId);
    },
    methods: {
        handleClick(id) {
            this.selectedID = id;
        },
        handleBtnClick(id) {
            this.handleClick(id);
            this.parentHandleClick(this.parentID);
            clearInterval(this.intervalId);
        },
        startInterval() {
            this.intervalId = setInterval(() => {
                this.selectedID = this.selectedID === this.inlineFeaturesData.length ? 1 : this.selectedID + 1;
            }, this.inlineSeconds);
        },
        enterCardArea(id) {
            this.hoveredID = id;
            this.parentHandleHover(this.parentID, 'onMouseEnter');
        },
        leaveCardArea() {
            this.hoveredID = null;
            this.parentHandleHover(this.parentID, 'onMouseLeave');
        }
    }
};
</script>
