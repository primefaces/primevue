<template>
    <DocSectionText v-bind="$attrs">
        <p>Advanced Galleria implementation with a custom UI.</p>
    </DocSectionText>
    <div class="card flex justify-content-center galleria demo">
        <Galleria
            ref="galleria"
            v-model:activeIndex="activeIndex"
            :value="images"
            :numVisible="5"
            containerStyle="max-width: 640px"
            :containerClass="galleriaClass"
            :showThumbnails="showThumbnails"
            :showItemNavigators="true"
            :showItemNavigatorsOnHover="true"
            :circular="true"
            :autoPlay="true"
            :transitionInterval="3000"
        >
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </div>
            </template>
            <template #footer>
                <div class="custom-galleria-footer">
                    <Button icon="pi pi-list" @click="onThumbnailButtonClick" />
                    <span v-if="images" class="title-container">
                        <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                        <span class="title">{{ images[activeIndex].title }}</span>
                        <span>{{ images[activeIndex].alt }}</span>
                    </span>
                    <Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" />
                </div>
            </template>
        </Galleria>
    </div>
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
            code: {
                basic: `
<Galleria ref="galleria" v-model:activeIndex="activeIndex" :value="images" :numVisible="5" containerStyle="max-width: 640px" :containerClass="galleriaClass"
    :showThumbnails="showThumbnails" :showItemNavigators="true" :showItemNavigatorsOnHover="true" :circular="true" :autoPlay="true" :transitionInterval="3000">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
    </template>
    <template #thumbnail="slotProps">
        <div class="grid grid-nogutter justify-content-center">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </div>
    </template>
    <template #footer>
        <div class="custom-galleria-footer">
            <Button icon="pi pi-list" @click="onThumbnailButtonClick" />
            <span v-if="images" class="title-container">
                <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                <span class="title">{{ images[activeIndex].title }}</span>
                <span>{{ images[activeIndex].alt }}</span>
            </span>
            <Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" />
        </div>
    </template>
</Galleria>`,
                options: `
<template>
    <div class="card flex justify-content-center galleria demo">
        <Galleria ref="galleria" v-model:activeIndex="activeIndex" :value="images" :numVisible="5" containerStyle="max-width: 640px" :containerClass="galleriaClass"
            :showThumbnails="showThumbnails" :showItemNavigators="true" :showItemNavigatorsOnHover="true" :circular="true" :autoPlay="true" :transitionInterval="3000">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </div>
            </template>
            <template #footer>
                <div class="custom-galleria-footer">
                    <Button icon="pi pi-list" @click="onThumbnailButtonClick" />
                    <span v-if="images" class="title-container">
                        <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                        <span class="title">{{ images[activeIndex].title }}</span>
                        <span>{{ images[activeIndex].alt }}</span>
                    </span>
                    <Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" />
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
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
        this.bindDocumentListeners();
    },
    methods: {
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
        galleriaClass() {
            return ['custom-galleria', { fullscreen: this.fullScreen }];
        },
        fullScreenIcon() {
            return \`pi ${this.fullScreen ? 'pi-window-minimize' : 'pi-window-maximize'}\`;
        }
    }
};
<\/script>

<style lang="scss" scoped>
::v-deep(.custom-galleria) {
    &.fullscreen {
        display: flex;
        flex-direction: column;

        .p-galleria-content {
            flex-grow: 1;
            justify-content: center;
        }
    }

    .p-galleria-content {
        position: relative;
    }

    .p-galleria-thumbnail-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .p-galleria-thumbnail-items-container {
        width: 100%;
    }

    .custom-galleria-footer {
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.9);
        color: #ffffff;

        > button {
            background-color: transparent;
            color: #ffffff;
            border: 0 none;
            border-radius: 0;
            margin: 0.2rem 0;

            &.fullscreen-button {
                margin-left: auto;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }

    .title-container {
        > span {
            font-size: 0.9rem;
            padding-left: 0.829rem;

            &.title {
                font-weight: bold;
            }
        }
    }
}
</style>`,
                composition: `
<template>
    <div class="card flex justify-content-center galleria demo">
        <Galleria ref="galleria" v-model:activeIndex="activeIndex" :value="images" :numVisible="5" containerStyle="max-width: 640px" :containerClass="galleriaClass"
            :showThumbnails="showThumbnails" :showItemNavigators="true" :showItemNavigatorsOnHover="true" :circular="true" :autoPlay="true" :transitionInterval="3000">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </div>
            </template>
            <template #footer>
                <div class="custom-galleria-footer">
                    <Button icon="pi pi-list" @click="onThumbnailButtonClick" />
                    <span v-if="images" class="title-container">
                        <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                        <span class="title">{{ images[activeIndex].title }}</span>
                        <span>{{ images[activeIndex].alt }}</span>
                    </span>
                    <Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" />
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

const onThumbnailButtonClick = () => {
    showThumbnails.value  = !showThumbnails.value ;
};
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



const galleriaClass = computed(() => {
    return ['custom-galleria', { fullscreen: fullScreen.value }];
});
const fullScreenIcon = computed(() => {
    return \`pi \${fullScreen.value ? 'pi-window-minimize' : 'pi-window-maximize'}\`;
});
<\/script>

<style lang="scss" scoped>
::v-deep(.custom-galleria) {
    &.fullscreen {
        display: flex;
        flex-direction: column;

        .p-galleria-content {
            flex-grow: 1;
            justify-content: center;
        }
    }

    .p-galleria-content {
        position: relative;
    }

    .p-galleria-thumbnail-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .p-galleria-thumbnail-items-container {
        width: 100%;
    }

    .custom-galleria-footer {
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.9);
        color: #ffffff;

        > button {
            background-color: transparent;
            color: #ffffff;
            border: 0 none;
            border-radius: 0;
            margin: 0.2rem 0;

            &.fullscreen-button {
                margin-left: auto;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }

    .title-container {
        > span {
            font-size: 0.9rem;
            padding-left: 0.829rem;

            &.title {
                font-weight: bold;
            }
        }
    }
}
</style>`,
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
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
        this.bindDocumentListeners();
    },
    methods: {
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
        galleriaClass() {
            return ['custom-galleria', { fullscreen: this.fullScreen }];
        },
        fullScreenIcon() {
            return `pi ${this.fullScreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
        }
    }
};
</script>

<style lang="scss" scoped>
::v-deep(.custom-galleria) {
    &.fullscreen {
        display: flex;
        flex-direction: column;

        .p-galleria-content {
            flex-grow: 1;
            justify-content: center;
        }
    }

    .p-galleria-content {
        position: relative;
    }

    .p-galleria-thumbnail-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .p-galleria-thumbnail-items-container {
        width: 100%;
    }

    .custom-galleria-footer {
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.9);
        color: #ffffff;

        > button {
            background-color: transparent;
            color: #ffffff;
            border: 0 none;
            border-radius: 0;
            margin: 0.2rem 0;

            &.fullscreen-button {
                margin-left: auto;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }

    .title-container {
        > span {
            font-size: 0.9rem;
            padding-left: 0.829rem;

            &.title {
                font-weight: bold;
            }
        }
    }
}
</style>
