<template>
    <section class="landing-users py-8 px-3 lg:px-8">
        <div class="section-header">Who Uses</div>
        <p class="section-detail">
            PrimeTek libraries have reached over <span class="font-semibold animated-text relative white-space-nowrap"> <span>150 Million Downloads </span> </span> on npm! Join the PrimeLand community and experience the difference yourself.
        </p>
        <div class="flex justify-content-center align-items-center mt-4">
            <span class="ml-2"> </span>
        </div>
        <div v-for="(x, i) in users" :key="i" class="logo-section relative w-full md:w-8 mt-6 users-container">
            <div class="fade-left h-6rem w-6rem block absolute top-0 left-0 z-2"></div>
            <div class="marquee-wrapper overflow-hidden flex">
                <div v-for="i of [1, 2, 3]" :key="i" :class="`marquee${x.reverse ? ' marquee-reverse' : ''}`">
                    <template v-for="user of x.slicedUsers" :key="user">
                        <div class="w-full">
                            <img :src="imgSrc(user)" :alt="`${user}-${colorScheme}`" />
                        </div>
                    </template>
                </div>
            </div>
            <div class="fade-right h-6rem w-6rem block absolute top-0 right-0 z-2"></div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            usersData: ['fox', 'airbus', 'mercedes', 'ebay', 'ford', 'vw', 'intel', 'unicredit', 'lufthansa', 'nvidia', 'verizon', 'amex'],
            users: null
        };
    },
    mounted() {
        this.users = [
            { slicedUsers: this.usersData.slice(0, 6), reverse: false },
            { slicedUsers: this.usersData.slice(6), reverse: true }
        ];
    },
    methods: {
        imgSrc(brand) {
            return `https://primefaces.org/cdn/primevue/images/landing/whouses/${brand}-${this.colorScheme}.svg`;
        }
    },
    computed: {
        colorScheme() {
            return this.$appState.darkTheme ? 'light' : 'dark';
        }
    }
};
</script>
