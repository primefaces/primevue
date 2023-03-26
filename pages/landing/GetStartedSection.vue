<template>
    <section class="landing-getstarted flex flex-column align-items-center justify-content-center mt-8 z-1">
        <div class="flex flex-column md:flex-row align-items-center justify-content-center">
            <PrimeVueNuxtLink to="/installation" class="linkbox active font-semibold py-3 px-4 fadeinleft animation-duration-2000 animation-ease-out"> Get Started <i class="pi pi-arrow-right ml-3"></i> </PrimeVueNuxtLink>
            <div class="relative cursor-pointer box download-box w-15rem font-medium p-3 px-4 mt-3 md:mt-0 md:ml-3 bg-transparent inline-flex align-items-center fadeinright animation-duration-2000 animation-ease-out" @click="copyClick">
                <i :class="downloadIcon"></i>
                <span class="font-bold select-all" style="font-family: monaco, monospace"> {{ npmText }} </span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            npmText: 'npm i primevue',
            downloadIcon: 'pi pi-download mr-3 download-icon'
        };
    },
    methods: {
        copyClick() {
            navigator.clipboard.writeText(this.npmText);
            this.npmText = 'copied!';
            this.downloadIcon = 'pi pi-copy mr-3 download-icon';
            setTimeout(() => {
                this.npmText = 'npm i primevue';
                this.downloadIcon = 'pi pi-download mr-3 download-icon';
            }, 2000);
        }
    }
};
</script>
