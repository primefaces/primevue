<template>
    <div class="flex-1 flex flex-col gap-6 p-6 h-full overflow-y-auto overflow-x-clip overflow-hidden border border-surface rounded-2xl">
        <div class="flex flex-wrap gap-4 items-center justify-between">
            <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
            <div class="flex gap-2.5 items-center">
                <IconField>
                    <InputIcon class="pi pi-search"> </InputIcon>
                    <InputText v-model="search" placeholder="Search" />
                </IconField>
                <Button severity="secondary" variant="outlined">
                    <OverlayBadge
                        severity="danger"
                        size="small"
                        :pt="{
                            pcbadge: {
                                root: {
                                    class: '!min-w-0 !w-2.5 !h-2.5'
                                }
                            }
                        }"
                    >
                        <i class="pi pi-bell" />
                    </OverlayBadge>
                </Button>
                <Avatar image="https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg" shape="circle" class="w-9 h-9 cursor-pointer" />
            </div>
        </div>
        <div class="">
            <div class="flex items-center justify-between gap-2 mb-6">
                <div class="text-color text-xl font-medium leading-7">Keep watching</div>
                <div class="xl:flex hidden items-center gap-2">
                    <Button :disabled="page === 0" @click="page -= 1" icon="pi pi-chevron-left" severity="secondary" variant="outlined" />
                    <Button :disabled="page === carouselData.length - page" @click="page += 1" icon="pi pi-chevron-right" severity="secondary" variant="outlined" />
                </div>
                <div class="xl:hidden flex items-center gap-2">
                    <Button :disabled="page === 0" @click="page -= 1" icon="pi pi-chevron-left" severity="secondary" variant="outlined" />
                    <Button :disabled="page === carouselData.length - 3" @click="page += 1" icon="pi pi-chevron-right" severity="secondary" variant="outlined" />
                </div>
            </div>
            <Carousel :value="carouselData" :page="page" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" :showIndicators="false" :showNavigators="false">
                <template #item="slotProps">
                    <div class="p-2 rounded-xl hover:bg-emphasis transition-colors cursor-pointer">
                        <div class="relative w-full aspect-[195/118.5] rounded-lg overflow-hidden">
                            <img :src="slotProps.data.image" class="w-full h-full object-cover" alt="Carousel Movie Image" />
                            <div class="absolute z-10 top-2 right-2 px-2 py-1 text-sm font-medium leading-tight bg-surface-0 dark:bg-surface-950 border border-surface rounded-md">
                                {{ slotProps.data.point }}
                            </div>
                            <div class="absolute z-10 bottom-2 inset-x-2">
                                <ProgressBar
                                    :value="slotProps.data.watchedPercent"
                                    :showValue="false"
                                    :pt="{
                                        root: {
                                            class: '!h-1.5 !bg-surface-950 dark:!bg-surface-50 !rounded-full'
                                        },
                                        value: {
                                            class: '!bg-surface-0 dark:!bg-surface-950 !rounded-full'
                                        }
                                    }"
                                ></ProgressBar>
                            </div>
                        </div>
                        <div class="mt-2 flex items-start justify-between gap-1">
                            <div class="px-2 flex-1">
                                <div class="font-medium text-color leading-6 line-clamp-1">{{ slotProps.data.name }}</div>
                                <div class="mt-1 text-muted-color text-sm leading-5">{{ slotProps.data.categories.join(', ') }}</div>
                            </div>
                            <Button v-if="slotProps.data.bookmarked" icon="pi pi-bookmark-fill" severity="contrast" text rounded />
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
        <div>
            <div class="mb-6 flex items-center gap-4 justify-between">
                <div class="flex items-center gap-2">
                    <Button label="Popular" severity="secondary" />
                    <Button label="New Releases" text severity="secondary" />
                    <Button label="Recently Added" text severity="secondary" />
                    <Button label="For you" text severity="secondary" />
                </div>
                <Button label="Show All" severity="secondary" variant="outlined" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-6">
                <div v-for="(movie, index) of popularMovies" :key="index" class="cursor-pointer">
                    <div class="relative aspect-[259/174.5] rounded-lg overflow-hidden">
                        <img class="w-full h-full object-cover" :src="movie.image" alt="Popular Movie Cover" />
                        <div class="absolute z-10 top-2 right-2 px-2 py-1 text-sm font-medium leading-tight bg-surface-0 dark:bg-surface-950 border border-surface rounded-md">
                            {{ movie.point }}
                        </div>
                    </div>
                    <div class="mt-2 flex items-start justify-between gap-1">
                        <div class="px-2 flex-1">
                            <div class="font-medium text-color leading-6 line-clamp-1">{{ movie.name }}</div>
                            <div class="mt-1 text-muted-color text-sm leading-5">{{ movie.categories.join(', ') }}</div>
                        </div>
                        <Button v-if="movie.bookmarked" icon="pi pi-bookmark-fill" severity="contrast" text rounded />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Movies',
    redrawListener: null,
    data() {
        return {
            search: '',
            page: 0,
            value: 'Home',
            options: ['Home', 'Movies', 'TV Shows', 'Recently Added', 'My List'],
            responsiveOptions: [
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 1
                },

                {
                    breakpoint: '767px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '575px',
                    numVisible: 1,
                    numScroll: 1
                }
            ],
            carouselData: [
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover1.png', name: 'Heat', bookmarked: true, point: '4.7', watchedPercent: 80, categories: ['Action', 'Crime', 'Drama'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover2.png', name: 'Batman Begins', bookmarked: false, point: '4.8', watchedPercent: 45, categories: ['Action', 'Crime', 'Drama'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover3.png', name: 'Leon: The Professional', bookmarked: false, point: '4.3', watchedPercent: 10, categories: ['Action', 'Crime', 'Drama'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover4.png', name: 'Matrix', bookmarked: false, point: '4.9', watchedPercent: 50, categories: ['Action', 'Sci-Fi'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover5.png', name: 'Fight Club', bookmarked: false, point: '4.4', watchedPercent: 30, categories: ['Drama'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover6.png', name: 'The Big Lebowski', bookmarked: false, point: '4.7', watchedPercent: 40, categories: ['Comedy', 'Drama'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover7.png', name: 'Twelve Angry Men', bookmarked: false, point: '4.7', watchedPercent: 50, categories: ['Crime', 'Drama'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover8.png', name: 'Saving Private Ryan', bookmarked: true, point: '4.7', watchedPercent: 80, categories: ['Drama', 'War'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover9.png', name: 'Seven', bookmarked: false, point: '4.7', watchedPercent: 20, categories: ['Crime', 'Drama', 'Mystery'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover10.png', name: 'Shutter Island', bookmarked: false, point: '4.7', watchedPercent: 70, categories: ['Mystery', 'Thriller'] }
            ],
            popularMovies: [
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover7.png', name: 'Twelve Angry Men', bookmarked: false, point: '4.6', categories: ['Crime', 'Drama'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover8.png', name: 'Saving Private Ryan', bookmarked: true, point: '4.4', categories: ['Drama', 'War'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover9.png', name: 'Seven', bookmarked: false, point: '4.3', categories: ['Crime', 'Drama', 'Mystery'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover10.png', name: 'Shutter Island', bookmarked: false, point: '4.7', categories: ['Mystery', 'Thriller'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover11.png', name: 'Basic Instinct', bookmarked: true, point: '4.3', categories: ['Drama', 'Mystery', 'Thriller'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover12.png', name: 'Big Hero 6', bookmarked: false, point: '4.7', categories: ['Animation', 'Action', 'Adventure'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover13.png', name: 'The Lord Of The Rings: Fellowship of the ring', bookmarked: true, point: '4.9', categories: ['Action', 'Adventure', 'Drama'] },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/movie-cover14.png', name: 'Kill Bill', bookmarked: true, point: '4.5', categories: ['Action', 'Crime', 'Thriller'] }
            ]
        };
    },
    methods: {},
    components: {}
};
</script>
