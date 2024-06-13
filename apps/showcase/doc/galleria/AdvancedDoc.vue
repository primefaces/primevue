<template>
    <DocSectionText v-bind="$attrs">
        <p>Advanced Galleria implementation with a custom UI.</p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <Galleria
                ref="galleria"
                v-model:activeIndex="activeIndex"
                :value="images"
                :numVisible="5"
                containerStyle="max-width: 640px"
                :showThumbnails="showThumbnails"
                :showItemNavigators="true"
                :showItemNavigatorsOnHover="true"
                :circular="true"
                :autoPlay="isAutoPlay"
                :transitionInterval="3000"
                :responsiveOptions="responsiveOptions"
                :pt="{
                    root: {
                        class: [{ 'flex flex-col': fullScreen }]
                    },
                    content: {
                        class: ['relative', { 'flex-1 justify-center': fullScreen }]
                    },
                    thumbnailwrapper: 'absolute w-full left-0 bottom-0'
                }"
            >
                <template #item="slotProps">
                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
                </template>
                <template #thumbnail="slotProps">
                    <div class="grid gap-4 justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                    </div>
                </template>
                <template #footer>
                    <div class="flex items-center bg-black/90 text-white">
                        <Button icon="pi pi-list" @click="onThumbnailButtonClick" :pt="{ root: { class: 'border-none rounded-none hover:bg-white/10 text-white', style: 'background: transparent' } }" />
                        <Button :icon="slideButtonIcon" @click="toggleAutoSlide" :pt="{ root: { class: 'border-none rounded-none hover:bg-white/10 text-white', style: 'background: transparent' } }" />
                        <span v-if="images" class="title-container">
                            <span class="text-sm p-4">{{ activeIndex + 1 }}/{{ images.length }}</span>
                            <span class="font-bold text-sm p-4">{{ images[activeIndex].title }}</span>
                            <span class="text-sm p-4">{{ images[activeIndex].alt }}</span>
                        </span>
                        <Button :icon="fullScreenIcon" @click="toggleFullScreen" :pt="{ root: { class: 'border-none rounded-none ml-auto hover:bg-white/10 text-white', style: 'background: transparent' } }" />
                    </div>
                </template>
            </Galleria>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" :service="['PhotoService']" :dependencies="{ sass: '1.45.0', 'sass-loader': '8.0.2' }" />
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            activeIndex: 0,
            showThumbnails: false,
            isAutoPlayActive: true,
            fullScreen: false,
            isAutoPlay: true,
            responsiveOptions: [
                {
                    breakpoint: '1300px',
                    numVisible: 4
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ],
            code: {
                basic: `
<Galleria
    ref="galleria"
    v-model:activeIndex="activeIndex"
    :value="images"
    :numVisible="5"
    containerStyle="max-width: 640px"
    :showThumbnails="showThumbnails"
    :showItemNavigators="true"
    :showItemNavigatorsOnHover="true"
    :circular="true"
    :autoPlay="isAutoPlay"
    :transitionInterval="3000"
    :responsiveOptions="responsiveOptions"
    :pt="{
        root: {
            class: [{ 'flex flex-col': fullScreen }]
        },
        content: {
            class: ['relative', { 'flex-1 justify-center': fullScreen }]
        },

        thumbnailwrapper: 'absolute w-full left-0 bottom-0'
    }"
>
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
    </template>
    <template #thumbnail="slotProps">
        <div class="grid gap-4 justify-center">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </div>
    </template>
    <template #footer>
        <div class="flex items-center bg-black/90 text-white">
            <Button icon="pi pi-list" @click="onThumbnailButtonClick" :pt="{ root: { class: 'border-none rounded-none hover:bg-white/10 text-white', style: 'background: transparent' } }" />
            <Button :icon="slideButtonIcon" @click="toggleAutoSlide" :pt="{ root: { class: 'border-none rounded-none hover:bg-white/10 text-white', style: 'background: transparent' } }" />
            <span v-if="images" class="title-container">
                <span class="text-sm p-4">{{ activeIndex + 1 }}/{{ images.length }}</span>
                <span class="font-bold text-sm p-4">{{ images[activeIndex].title }}</span>
                <span class="text-sm p-4">{{ images[activeIndex].alt }}</span>
            </span>
            <Button :icon="fullScreenIcon" @click="toggleFullScreen" :pt="{ root: { class: 'border-none rounded-none ml-auto hover:bg-white/10 text-white', style: 'background: transparent' } }" />
        </div>
    </template>
</Galleria>
`,
                options: `
<template>
    <div class="card">
        <Galleria
            ref="galleria"
            v-model:activeIndex="activeIndex"
            :value="images"
            :numVisible="5"
            containerStyle="max-width: 640px"
            :showThumbnails="showThumbnails"
            :showItemNavigators="true"
            :showItemNavigatorsOnHover="true"
            :circular="true"
            :autoPlay="isAutoPlay"
            :transitionInterval="3000"
            :responsiveOptions="responsiveOptions"
            :pt="{
                root: {
                    class: [{ 'flex flex-col': fullScreen }]
                },
                content: {
                    class: ['relative', { 'flex-1 justify-center': fullScreen }]
                },

                thumbnailwrapper: 'absolute w-full left-0 bottom-0'
            }"
        >
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid gap-4 justify-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </div>
            </template>
            <template #footer>
                <div class="flex items-center bg-black/90 text-white">
                    <Button icon="pi pi-list" @click="onThumbnailButtonClick" :pt="{ root: { class: 'border-none rounded-none hover:bg-white/10 text-white', style: 'background: transparent' } }" />
                    <Button :icon="slideButtonIcon" @click="toggleAutoSlide" :pt="{ root: { class: 'border-none rounded-none hover:bg-white/10 text-white', style: 'background: transparent' } }" />
                    <span v-if="images" class="title-container">
                        <span class="text-sm p-4">{{ activeIndex + 1 }}/{{ images.length }}</span>
                        <span class="font-bold text-sm p-4">{{ images[activeIndex].title }}</span>
                        <span class="text-sm p-4">{{ images[activeIndex].alt }}</span>
                    </span>
                    <Button :icon="fullScreenIcon" @click="toggleFullScreen" :pt="{ root: { class: 'border-none rounded-none ml-auto hover:bg-white/10 text-white', style: 'background: transparent' } }" />
                </div>
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            activeIndex: 0,
            showThumbnails: false,
            fullScreen: false,
            isAutoPlay: true,
            responsiveOptions: [
                {
                    breakpoint: '1300px',
                    numVisible: 4
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
        this.bindDocumentListeners();
    },
    methods: {
        toggleAutoSlide() {
            this.isAutoPlay = !this.isAutoPlay;
        },
        onThumbnailButtonClick() {
            this.showThumbnails = !this.showThumbnails;
        },
        toggleFullScreen() {
            if (this.fullScreen) {
                this.closeFullScreen();
            } else {
                this.openFullScreen();
            }
        },
        onFullScreenChange() {
            this.fullScreen = !this.fullScreen;
        },
        openFullScreen() {
            let elem = this.$refs.galleria.$el;

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                /* IE/Edge */
                elem.msRequestFullscreen();
            }
        },
        closeFullScreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        },
        bindDocumentListeners() {
            document.addEventListener('fullscreenchange', this.onFullScreenChange);
            document.addEventListener('mozfullscreenchange', this.onFullScreenChange);
            document.addEventListener('webkitfullscreenchange', this.onFullScreenChange);
            document.addEventListener('msfullscreenchange', this.onFullScreenChange);
        },
        unbindDocumentListeners() {
            document.removeEventListener('fullscreenchange', this.onFullScreenChange);
            document.removeEventListener('mozfullscreenchange', this.onFullScreenChange);
            document.removeEventListener('webkitfullscreenchange', this.onFullScreenChange);
            document.removeEventListener('msfullscreenchange', this.onFullScreenChange);
        }
    },
    computed: {
        slideButtonIcon() {
            return this.isAutoPlay ? 'pi pi-pause' : 'pi pi-play';
        },
        fullScreenIcon() {
            return \`pi ${this.fullScreen ? 'pi-window-minimize' : 'pi-window-maximize'}\`;
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Galleria
            ref="galleria"
            v-model:activeIndex="activeIndex"
            :value="images"
            :numVisible="5"
            containerStyle="max-width: 640px"
            :showThumbnails="showThumbnails"
            :showItemNavigators="true"
            :showItemNavigatorsOnHover="true"
            :circular="true"
            :autoPlay="isAutoPlay"
            :transitionInterval="3000"
            :responsiveOptions="responsiveOptions"
            :pt="{
                root: {
                    class: [{ 'flex flex-col': fullScreen }]
                },
                content: {
                    class: ['relative', { 'flex-1 justify-center': fullScreen }]
                },

                thumbnailwrapper: 'absolute w-full left-0 bottom-0'
            }"
        >
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid gap-4 justify-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </div>
            </template>
            <template #footer>
                <div class="flex items-center bg-black/90 text-white">
                    <Button icon="pi pi-list" @click="onThumbnailButtonClick" :pt="{ root: { class: 'border-none rounded-none hover:bg-white/10 text-white', style: 'background: transparent' } }" />
                    <Button :icon="slideButtonIcon" @click="toggleAutoSlide" :pt="{ root: { class: 'border-none rounded-none hover:bg-white/10 text-white', style: 'background: transparent' } }" />
                    <span v-if="images" class="title-container">
                        <span class="text-sm p-4">{{ activeIndex + 1 }}/{{ images.length }}</span>
                        <span class="font-bold text-sm p-4">{{ images[activeIndex].title }}</span>
                        <span class="text-sm p-4">{{ images[activeIndex].alt }}</span>
                    </span>
                    <Button :icon="fullScreenIcon" @click="toggleFullScreen" :pt="{ root: { class: 'border-none rounded-none ml-auto hover:bg-white/10 text-white', style: 'background: transparent' } }" />
                </div>
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
    bindDocumentListeners();
});

const galleria = ref();
const images = ref();
const activeIndex = ref(0);
const showThumbnails = ref(false);
const fullScreen = ref(false);
const isAutoPlay = ref(true);

const toggleAutoSlide = () => {
    isAutoPlay.value  = !isAutoPlay.value ;
};
const onThumbnailButtonClick = () => {
    showThumbnails.value  = !showThumbnails.value ;
};

const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

const toggleFullScreen = () => {
    if (fullScreen.value ) {
        closeFullScreen();
    } else {
        openFullScreen();
    }
};
const onFullScreenChange = () => {
    fullScreen.value  = !fullScreen.value ;
};
const openFullScreen = () =>{
    let elem = galleria.value.$el;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
};
const closeFullScreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
};
const bindDocumentListeners = () => {
    document.addEventListener('fullscreenchange', onFullScreenChange);
    document.addEventListener('mozfullscreenchange', onFullScreenChange);
    document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    document.addEventListener('msfullscreenchange', onFullScreenChange);
};
const unbindDocumentListeners = () => {
    document.removeEventListener('fullscreenchange', onFullScreenChange);
    document.removeEventListener('mozfullscreenchange', onFullScreenChange);
    document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
    document.removeEventListener('msfullscreenchange', onFullScreenChange);
};

const fullScreenIcon = computed(() => {
    return \`pi \${fullScreen.value ? 'pi-window-minimize' : 'pi-window-maximize'}\`;
});
const slideButtonIcon = computed(() => {
    return \`pi \${isAutoPlay.value ? 'pi-pause' : 'pi-play'}\`;
});
<\/script>

`,
                data: `
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `
            }
        };
    },
    methods: {
        loadDemoData() {
            PhotoService.getImages().then((data) => (this.images = data));
            this.bindDocumentListeners();
        },
        toggleAutoSlide() {
            this.isAutoPlay = !this.isAutoPlay;
        },
        onThumbnailButtonClick() {
            this.showThumbnails = !this.showThumbnails;
        },
        toggleFullScreen() {
            if (this.fullScreen) {
                this.closeFullScreen();
            } else {
                this.openFullScreen();
            }
        },
        onFullScreenChange() {
            this.fullScreen = !this.fullScreen;
        },
        openFullScreen() {
            let elem = this.$refs.galleria.$el;

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                /* IE/Edge */
                elem.msRequestFullscreen();
            }
        },
        closeFullScreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        },
        bindDocumentListeners() {
            document.addEventListener('fullscreenchange', this.onFullScreenChange);
            document.addEventListener('mozfullscreenchange', this.onFullScreenChange);
            document.addEventListener('webkitfullscreenchange', this.onFullScreenChange);
            document.addEventListener('msfullscreenchange', this.onFullScreenChange);
        },
        unbindDocumentListeners() {
            document.removeEventListener('fullscreenchange', this.onFullScreenChange);
            document.removeEventListener('mozfullscreenchange', this.onFullScreenChange);
            document.removeEventListener('webkitfullscreenchange', this.onFullScreenChange);
            document.removeEventListener('msfullscreenchange', this.onFullScreenChange);
        }
    },
    computed: {
        slideButtonIcon() {
            return this.isAutoPlay ? 'pi pi-pause' : 'pi pi-play';
        },
        fullScreenIcon() {
            return `pi ${this.fullScreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
        }
    }
};
</script>
