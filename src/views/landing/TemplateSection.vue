<template>
    <section class="landing-templates theme-dark py-8">
            <div class="section-header">Templates</div>
            <p class="section-detail">Professionally designed highly customizable application templates to get started in style.</p>
            <div class="flex justify-content-center mt-4">
                <a href="https://www.primefaces.org/store" class="font-semibold p-3 border-round flex align-items-center linkbox active">
                    <span>Learn More</span>
                    <i class="pi pi-arrow-right ml-2"></i>
                </a>
            </div>
            <section :class="['templates flex justify-content-center align-items-center flex-column mt-7', {'templates-animation': setAnimation}]">
            <div class="flex">
                <div class="template-block block-1 mr-2 flex justify-content-center align-items-center"
                    :style="{backgroundImage: imageBg('diamond')}">
                    <a class="templates-btn" target="_blank" href="https://www.primefaces.org/diamond-vue/" >Diamond Preview</a>
                </div>
            <div
            class="template-block block-2 ml-2 flex justify-content-center align-items-center"
                :style="{backgroundImage: imageBg('freya')}">
                <a class="templates-btn" target="_blank" href="https://www.primefaces.org/freya-vue/" >Freya Preview</a>
                </div>
            </div>
            <div class="flex my-4">
                <div class="template-block block-3 mr-2 flex justify-content-center align-items-center"
                    :style="{backgroundImage: imageBg('atlantis')}">
                    <a class="templates-btn" target="_blank" href="https://www.primefaces.org/atlantis-vue/" >Atlantis Preview</a>
                </div>
                <div class="template-block block-middle border-none box-shadow-none mr-2 flex justify-content-center align-items-center flex-column">
                    <img class="img-1"
                    :src="templateImg()" height="110">
                </div>
                <div class="template-block block-4 ml-2 flex justify-content-center align-items-center"
                    :style="{backgroundImage: imageBg('apollo')}">
                    <a class="templates-btn" target="_blank" href="https://www.primefaces.org/apollo-vue/" >Apollo Preview</a>
                </div>
            </div>
            <div class="flex">
                <div class="template-block block-5 mr-2 flex justify-content-center align-items-center"
                    :style="{backgroundImage: imageBg('serenity')}">
                    <a class="templates-btn" target="_blank" href="https://www.primefaces.org/serenity-vue/" >Serenity Preview</a>
                </div>
                <div class="template-block block-6 ml-2 flex justify-content-center align-items-center"
                    :style="{backgroundImage: imageBg('ultima')}">
                    <a class="templates-btn" target="_blank" href="https://www.primefaces.org/ultima-vue/" >Ultima Preview</a>
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
        }
    },
    mounted() {
        this.setAnimation = true
    },
    methods: {
        imageBg(template) {
            const isDark = this.$appState.darkTheme;
            const url = template === 'templates-text' ? 'png' : 'jpeg';

            return `url('demo/images/landing/templates/${template}-${isDark ? 'dark' : 'light'}.${url}')`
        },
        templateImg() {
            return `demo/images/landing/templates/templates-text-${this.$appState.darkTheme ? 'dark' : 'light'}.png`
        }
    }
}
</script>


:style="{backgroundImage: imageBg('diamond')}">