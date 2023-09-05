<template>
    <section :class="['landing-hero flex align-items-center flex-column justify-content-center relative', { 'hero-animation': setAnimation }]">
        <div class="hero-inner z-2 relative">
            <div class="flex flex-column md:align-items-center md:flex-row">
                <div class="p-2 flex flex-row md:flex-column">
                    <div class="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center" @click="navigateTo('https://www.primefaces.org/store')">
                        <div class="flex flex-column align-items-center">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/templates-icon.svg" alt="primevue templates" />
                            <div class="name">
                                <b>Templates</b>
                                <span>Spectacular Designs</span>
                            </div>
                        </div>
                    </div>
                    <div class="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation ml-4 md:ml-0 md:mt-4 flex align-items-center justify-content-center" @click="navigateTo('https://designer.primevue.org')">
                        <div class="flex flex-column align-items-center">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/designer-icon.svg" alt="primevue templates" />
                            <div class="name">
                                <b>Theme Designer</b>
                                <span>Create Your Own</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-2 flex flex-row md:flex-column">
                    <div class="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center" @click="navigateTo('https://github.com/primefaces/primevue')">
                        <div class="flex flex-column align-items-center">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/core-icon.svg" alt="primevue core" />
                            <div class="name">
                                <b>Open Source</b>
                                <span>90+ UI Components</span>
                            </div>
                        </div>
                    </div>
                    <router-link to="/installation">
                        <div class="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation logo hidden md:flex my-4 align-items-center justify-content-center">
                            <div class="hero-box-inner text-center">
                                <img src="https://primefaces.org/cdn/primevue/images/landing/overview-icon.svg" alt="primevue main" />
                                <div class="name">
                                    <b class="font-bold">NEXT-GEN VUE UI</b>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <div class="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex ml-4 md:ml-0 align-items-center justify-content-center" @click="navigateTo('https://primeflex.org')">
                        <div class="flex flex-column align-items-center">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/css-icon.svg" alt="primevue icons" />
                            <div class="name">
                                <b>CSS Utilities</b>
                                <span>PrimeFlex CSS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-2 flex flex-row md:flex-column">
                    <div class="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center" @click="navigateTo('https://blocks.primevue.org')">
                        <div class="flex flex-column align-items-center">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/blocks-icon.svg" alt="primevue templates" />
                            <div class="name">
                                <b>Prime Blocks</b>
                                <span>400+ UI Blocks</span>
                            </div>
                        </div>
                    </div>
                    <router-link to="/icons">
                        <div class="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex ml-4 md:ml-0 md:mt-4 align-items-center justify-content-center">
                            <div class="flex flex-column align-items-center">
                                <img src="https://primefaces.org/cdn/primevue/images/landing/icons-icon.svg" alt="primevue templates" />
                                <div class="name">
                                    <b>Icon Library</b>
                                    <span>200+ Icons</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="hero-border-top hidden md:block"></div>
            <div class="hero-border-left hidden md:block"></div>
            <div class="hero-border-right hidden md:block"></div>
        </div>
        <GetStartedSection />
        <div class="hero-bg absolute top-0 left-0 right-0 bottom-0 z-0">
            <div class="hero-strip-top"></div>
            <div class="hero-strip-left"></div>
        </div>
    </section>
</template>

<script>
import GetStartedSection from './GetStartedSection';

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
        navigateTo(url) {
            window.location.href = url;
        }
    },
    components: {
        GetStartedSection: GetStartedSection
    }
};
</script>
