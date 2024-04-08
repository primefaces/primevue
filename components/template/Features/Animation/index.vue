<template>
    <div class="template-features-animation-wrapper">
        <div v-if="title" class="template-features-animation-title">
            <h2>{{ title }}</h2>
        </div>
        <div ref="animationRef" class="template-features-animation">
            <div class="template-features-animation-left">
                <template v-for="(data, index) in featuresData" :key="index">
                    <div
                        @click="handleClick(data.id)"
                        @mouseenter="enterCardArea(data.id)"
                        @mouseleave="leaveCardArea(data.id)"
                        :class="`template-features-animation-left-card ${selectedID === data.id ? 'template-features-animation-left-card-active' : ''}`"
                    >
                        <div class="template-features-animation-left-card-order">
                            <div>{{ orderNumber(index) }}</div>
                            <div>{{ orderNumber(index) }}</div>
                            <div>{{ orderNumber(index) }}</div>
                        </div>
                        <div class="template-features-animation-left-card-content">
                            <h5>{{ data.title }}</h5>
                            <p>
                                <template v-if="data.slotType">
                                    <slot :name="data.slotType" />
                                </template>
                                <template v-else>
                                    {{ data.description }}
                                </template>
                            </p>
                        </div>
                    </div>
                </template>
            </div>
            <div class="template-features-animation-right">
                <TemplateFeaturesAnimationInline
                    v-if="featuresData[selectedID - 1]?.type === 'inline-animation'"
                    :inlineFeaturesData="featuresData[selectedID - 1]?.inlineFeaturesData"
                    :parentHandleClick="handleClick"
                    :parentHandleHover="handleHover"
                    :parentID="selectedID"
                    :inlineSeconds="animationSeconds / featuresData[selectedID - 1]?.inlineFeaturesData.length"
                />
                <img v-else :src="featuresData[selectedID - 1]?.src" alt="Animation Feature Image" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        featuresData: {
            type: null,
            default: null
        },
        title: {
            type: null,
            default: null
        }
    },
    observer: null,
    timeout: null,
    data() {
        return {
            selectedID: 1,
            intervalIds: [],
            cancelInterval: false,
            hoveredID: null,
            visible: false,
            animationSeconds: 5000
        };
    },
    mounted() {
        this.observer = new IntersectionObserver(([entry]) => {
            clearTimeout(this.timeout);

            if (entry.isIntersecting) {
                this.timeout = setTimeout(
                    () => {
                        this.visible = entry.isIntersecting;
                        this.createInterval();
                        this.observer.unobserve(this.$el);
                    },
                    { threshold: 0.2 }
                );
            }
        });

        this.observer.observe(this.$el);
    },
    beforeUnmount() {
        !this.visible && this.$el && this.observer?.unobserve(this.$el);
        this.intervalIds = [];
    },
    methods: {
        enterCardArea(id) {
            this.hoveredID = id;
            this.handleHover(id, 'onMouseEnter');
        },
        leaveCardArea(id) {
            this.hoveredID = null;
            this.handleHover(id, 'onMouseLeave');
        },
        orderNumber(index) {
            return (index + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        },
        clearAllIntervals() {
            if (this.intervalIds.length <= 0) {
                return;
            }

            this.intervalIds.forEach((intervalId) => clearInterval(intervalId));
            this.intervalIds = [];
        },
        createInterval() {
            const interval = setInterval(() => {
                this.selectedID = this.selectedID === this.featuresData.length ? 1 : this.selectedID + 1;
            }, 4000);

            this.intervalIds = [...this.intervalIds, interval];
        },
        handleClick(cardId) {
            this.clearAllIntervals();
            this.selectedID = cardId;
            this.cancelInterval = true;
        },
        handleHover(cardId, type) {
            if (this.cancelInterval || cardId !== this.selectedID) {
                return;
            }

            this.clearAllIntervals();

            if (type === 'onMouseLeave') {
                this.selectedID = cardId;
                this.createInterval();
            }
        }
    }
};
</script>
