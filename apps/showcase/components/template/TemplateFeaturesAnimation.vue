<template>
    <div class="template-features px-6 py-6 sm:px-10 sm:py-5 lg:py-20 lg:px-8 rounded-2xl lg:rounded-3xl bg-surface-0 dark:bg-surface-900">
        <h2 v-if="title" class="text-center text-surface-900 dark:text-surface-0 text-3xl lg:text-5xl font-semibold lg:pt-0 pt-6 mb-12">{{ title }}</h2>
        <div
            ref="animationRef"
            v-animateonscroll.once="{ enterClass: 'animate-fadein' }"
            class="flex flex-col-reverse lg:flex-row items-start gap-10 w-full max-w-2xl lg:max-w-6xl mx-auto p-4 lg:p-7 rounded-3xl border border-surface animate-duration-500"
        >
            <div class="flex flex-col gap-4 flex-1">
                <template v-for="(data, index) in featuresData" :key="index">
                    <div
                        @click="handleClick(data.id)"
                        @mouseenter="enterCardArea(data.id)"
                        @mouseleave="leaveCardArea(data.id)"
                        :class="`template-features-animation-card group template-features-animation-left-card p-4 flex items-start gap-2 md:gap-4 xl:gap-6 cursor-pointer rounded-xl transition-all hover:bg-primary-50 dark:hover:bg-primary/15 ${
                            selectedID === data.id ? 'template-features-animation-card-active rounded-xl bg-primary-50 dark:bg-primary/15 transition-all' : ''
                        }`"
                    >
                        <div class="template-features-animation-card-order w-14 h-full -mt-1 relative transition-all">
                            <div class="text-[2.5rem] font-bold absolute top-0 left-0 text-primary-400 [-webkit-text-stroke:1.2px_var(--p-primary-400)]">{{ orderNumber(index) }}</div>
                            <div
                                class="text-[2.5rem] font-bold absolute top-0 left-0 transition-all dark:text-surface-900 group-hover:text-surface-50 dark:group-hover:text-surface-900"
                                :class="selectedID === data.id ? 'text-surface-50' : 'text-surface-0'"
                            >
                                {{ orderNumber(index) }}
                            </div>
                            <div class="text-[2.5rem] font-bold absolute top-0 left-0 text-transparent">{{ orderNumber(index) }}</div>
                        </div>
                        <div class="flex-1">
                            <h5 class="text-lg lg:text-xl font-semibold m-0">{{ data.title }}</h5>
                            <p class="text-sm lg:text-base text-muted-color mt-1 mb-0 [&>a]:text-primary [&>a]:hover:underline">
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
            <div class="flex-1 w-full lg:w-fit rounded-2xl bg-surface-100 dark:bg-surface-800 overflow-hidden flex sm:min-w-[30rem]">
                <TemplateFeaturesAnimationInline
                    v-if="featuresData[selectedID - 1]?.type === 'inline-animation'"
                    :inlineFeaturesData="featuresData[selectedID - 1]?.inlineFeaturesData"
                    :parentHandleClick="handleClick"
                    :parentHandleHover="handleHover"
                    :parentID="selectedID"
                    :inlineSeconds="animationSeconds / featuresData[selectedID - 1]?.inlineFeaturesData.length"
                />
                <img v-else class="w-full h-auto object-cover flex" :src="featuresData[selectedID - 1]?.src" alt="Animation Feature Image" />
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
            type: String,
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
            animationSeconds: 8000
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
