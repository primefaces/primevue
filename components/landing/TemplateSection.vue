<template>
    <section class="landing-templates theme-dark py-20">
        <div class="section-header relative z-30">Templates</div>
        <p class="section-detail relative z-30">Professionally designed highly customizable application templates to get started in style.</p>
        <div class="flex justify-center mt-6 relative z-30">
            <a href="https://www.primefaces.org/store" class="linkbox linkbox-primary">
                <span>Explore All</span>
                <i class="pi pi-arrow-right ml-2"></i>
            </a>
        </div>
        <section :class="['templates flex justify-center items-center flex-col mt-7', { 'templates-animation': setAnimation }]">
            <div class="flex md:flex-row flex-col gap-6 lg:gap-0">
                <div class="template-block block-5 mr-2 lg:mb-0 flex justify-center items-center" :style="{ backgroundImage: imageBg('verona') }">
                    <a class="templates-btn" target="_blank" href="https://verona.primevue.org">Verona Preview</a>
                </div>
                <div class="template-block block-2 ml-2 flex justify-center items-center" :style="{ backgroundImage: imageBg('freya') }">
                    <a class="templates-btn" target="_blank" href="https://freya.primevue.org">Freya Preview</a>
                </div>
            </div>
            <div class="flex my-6 md:flex-row flex-col gap-6 lg:gap-0">
                <div class="template-block block-3 mr-2 lg:mb-0 flex justify-center items-center" :style="{ backgroundImage: imageBg('atlantis') }">
                    <a class="templates-btn" target="_blank" href="https://atlantis.primevue.org/">Atlantis Preview</a>
                </div>
                <div class="template-block block-middle mr-2 hidden lg:flex justify-center items-center flex-col">
                    <img class="img-1" :src="templateImg()" height="110" />
                </div>
                <div class="template-block block-4 ml-2 flex justify-center items-center" :style="{ backgroundImage: imageBg('apollo') }">
                    <a class="templates-btn" target="_blank" href="https://apollo.primevue.org">Apollo Preview</a>
                </div>
            </div>
            <div class="flex md:flex-row flex-col gap-6 lg:gap-0">
                <div class="template-block block-1 mr-2 lg:mb-0 flex justify-center items-center" :style="{ backgroundImage: imageBg('diamond') }">
                    <a class="templates-btn" target="_blank" href="https://diamond.primevue.org">Diamond Preview</a>
                </div>
                <div class="template-block block-6 ml-2 flex justify-center items-center" :style="{ backgroundImage: imageBg('ultima') }">
                    <a class="templates-btn" target="_blank" href="https://ultima.primevue.org">Ultima Preview</a>
                </div>
            </div>
            <div class="lines">
                <div class="top">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="left">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    data() {
        return {
            setAnimation: false
        };
    },
    mounted() {
        this.setAnimation = true;
    },
    methods: {
        imageBg(template) {
            const isDark = this.$appState.darkTheme;
            const url = template === 'templates-text' ? 'png' : 'jpg';

            return `url('https://primefaces.org/cdn/primevue/images/landing/templates/${template}-${isDark ? 'dark' : 'light'}.${url}')`;
        },
        templateImg() {
            return `https://primefaces.org/cdn/primevue/images/landing/templates/templates-text-noir-${this.$appState.darkTheme ? 'dark' : 'light'}.png`;
        }
    }
};
</script>
