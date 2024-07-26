<template>
    <div class="w-full h-[56rem] md:h-[32rem] xl:h-[36.25rem] bg-primary rounded-3xl overflow-hidden relative">
        <img :class="templateHeroData.pattern.className" :src="templateHeroData.pattern.src" alt="Template Hero Pattern" />
        <div class="absolute left-1/2 top-20 -translate-x-1/2 md:translate-x-0 md:top-1/2 md:-translate-y-1/2 md:left-10 lg:left-20 xl:left-36 z-20 w-[92%] max-w-lg md:w-[26rem] lg:w-[28rem] xl:w-[29rem] rounded-3xl p-7 lg:px-9 lg:py-7">
            <div
                class="absolute top-0 left-0 w-full h-full backdrop-blur-[2px] rounded-3xl border border-[rgba(255,255,255,0.24)] [background:linear-gradient(180deg,rgba(170,140,255,0.00)_0%,var(--p-primary-400)/0.8_100%),rgba(255,255,255,0.10)] shadow-[0px_2px_4px_0px_rgba(255,255,255,0.24)_inset,0px_48px_80px_0px_rgba(0,0,0,0.08),0px_-5px_13px_-2px_rgba(255,255,255,0.55)_inset]"
            />
            <div class="z-10 relative">
                <div class="h-8 lg:h-10 [&>svg]:h-full [&>svg]:w-auto select-none">
                    <component :is="templateHeroData.logo"> </component>
                </div>
                <p class="text-primary-contrast mt-4 mb-0 lg:text-base text-sm">{{ templateHeroData.description }}</p>
                <div class="flex items-center gap-4 mt-8">
                    <a :href="templateHeroData.liveHref" target="_blank" class="flex-1 py-3.5 border border-primary-contrast hover:bg-primary-contrast/10 text-primary-contrast rounded-full text-center font-semibold transition-all leading-none"
                        >Live Demo</a
                    >
                    <a
                        :href="templateHeroData.storeHref ?? 'https://www.primefaces.org/store/'"
                        target="_blank"
                        class="flex-1 rounded-full border text-center font-semibold w-full bg-primary-600 border-primary-600 hover:bg-primary-700 text-surface-0 py-3.5 transition-all leading-none"
                    >
                        {{ templateHeroData.free ? 'Source Code' : 'Buy Now' }}
                    </a>
                </div>
                <div class="flex items-center gap-4 mt-6">
                    <a class="flex items-center gap-2 text-primary-contrast lg:text-base text-sm" :href="templateHeroData.supportHref ?? 'https://github.com/orgs/primefaces/discussions/categories/primevue-templates'" target="_blank">
                        <i class="pi pi-github" />
                        <span class="hover:underline">{{ templateHeroData.free ? 'Open Issues' : 'Community' }}</span>
                    </a>
                    <a class="flex items-center gap-2 text-primary-contrast lg:text-base text-sm" :href="templateHeroData.docHref" target="_blank">
                        <i class="pi pi-book" />
                        <span class="hover:underline">Documentation</span>
                    </a>
                </div>
            </div>
        </div>
        <img
            v-if="!!templateHeroData.dashboard1"
            class="select-none flex z-20 absolute top-[28rem] left-52 md:top-8 md:left-[42rem] lg:left-[50rem] xl:left-[60rem] w-[37.875rem] shadow-[0px_0px_43.64997px_0px_rgba(0,0,0,0.12)] rounded-sm"
            :src="templateHeroData.dashboard1"
            alt="Template Dashboard Image 1"
        />
        <img
            v-if="!!templateHeroData.dashboard2"
            class="select-none flex z-10 absolute top-[28rem] left-6 md:top-8 md:left-[32rem] lg:left-[36rem] xl:left-[42rem] w-[37.875rem] shadow-[0px_0px_43.64997px_0px_rgba(0,0,0,0.12)] rounded-sm"
            :src="templateHeroData.dashboard2"
            alt="Template Dashboard Image 2"
        />
    </div>
</template>

<script>
export default {
    name: 'TemplateHero',
    props: {
        templateHeroData: {
            type: null,
            templateHeroData: null
        }
    }
};
</script>
