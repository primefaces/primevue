<template>
    <section class="landing-users py-8 pad-section">
        <div class="section-header">Who Uses</div>
        <p class="section-detail">Open source products of PrimeTek are used all around the world by millions of developers.</p>
        <div class="grid mt-7">
            <div class="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                <div class="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                    <img :src="imgSrc('fox')" alt="fox logo" />
                </div>
            </div>
            <div class="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                <div class="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                    <img :src="imgSrc('airbus')" alt="airbus logo" />
                </div>
            </div>
            <div class="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                <div class="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                    <img :src="imgSrc('mercedes')" alt="mercedes logo" />
                </div>
            </div>
            <div class="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                <div class="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                    <img :src="imgSrc('ebay')" alt="ebay logo" />
                </div>
            </div>
            <div class="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                <div class="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                    <img :src="imgSrc('ford')" alt="ford logo" />
                </div>
            </div>
            <div class="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                <div class="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                    <img :src="imgSrc('vw')" alt="volkswage logo" />
                </div>
            </div>
            <div class="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                <div class="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                    <img :src="imgSrc('intel')" alt="intel logo" />
                </div>
            </div>
            <div class="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                <div class="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                    <img :src="imgSrc('unicredit')" alt="unicredit logo" />
                </div>
            </div>
            <div class="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                <div class="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                    <img :src="imgSrc('lufthansa')" alt="lufthansa logo" />
                </div>
            </div>
            <div class="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                <div class="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                    <img :src="imgSrc('nvidia')" alt="nvidia logo" />
                </div>
            </div>
            <div class="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                <div class="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                    <img :src="imgSrc('verizon')" alt="verizon logo" />
                </div>
            </div>
            <div class="col-6 md:col-4 lg:col-3 xl:col-2 flex justify-content-center p-3">
                <div class="box w-10rem h-10rem flex justify-content-center align-items-center bg-transparent">
                    <img :src="imgSrc('amex')" alt="american express logo" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        imgSrc(brand) {
            return `demo/images/landing/whouses/${brand}-${this.colorScheme}.svg`
        }
    },
    computed: {
        colorScheme() {
            return this.$appState.darkTheme ? 'light' : 'dark';
        }
    }
}
</script>