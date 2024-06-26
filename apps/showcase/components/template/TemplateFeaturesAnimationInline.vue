<template>
    <div ref="animationInlineRef" class="w-full py-8 rounded-xl bg-surface-50 dark:bg-surface-800 relative flex flex-col items-center justify-center">
        <div class="hidden sm:flex items-center gap-0.5 xl:gap-1 rounded-full border border-surface p-1 w-[90%] bg-surface-0 dark:bg-surface-900">
            <template v-for="(data, index) in inlineFeaturesData" :key="index">
                <button
                    @click="handleBtnClick(data.id)"
                    @mouseenter="enterCardArea(data.id)"
                    @mouseleave="leaveCardArea"
                    :class="`flex-1 py-1 px-1 lg:px-2 rounded-full text-surface-900 dark:text-surface-0 border-none outline-none text-xs font-medium transition-all hover:bg-surface-200 dark:hover:bg-surface-700 cursor-pointer ${
                        data.id === selectedID ? 'bg-surface-200 dark:bg-surface-700' : 'bg-transparent'
                    }`"
                >
                    {{ data.title }}
                </button>
            </template>
        </div>
        <div class="w-[90%] h-fit overflow-hidden relative flex mt-5 rounded-lg shadow-[0px_0px_48px_0px_rgba(0,0,0,0.08)]">
            <img class="max-h-96 w-full h-auto object-cover object-top flex" :src="inlineFeaturesData[selectedID - 1].src" alt="Animation Inline Feature Image" />
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
