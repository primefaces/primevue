<template>
    <div class="galleria-demo">
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Galleria</h1>
                <p>Galleria is a content gallery component.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Galleria ref="galleria" :value="images" :activeItemIndex.sync="activeItemIndex" :numVisible="5" style="max-width: 520px;" :class="galleriaClass"
                :showThumbnails="showThumbnails" :showPreviewNavButtons="true" :showNavButtonsOnPreviewHover="true"
                :circular="true" :autoPlay="true" :transitionInterval="3000">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" :style="[{'width': !isPreviewFullScreen ? '100%' : '', 'display': !isPreviewFullScreen ? 'block' : ''}]" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
                <template #footer>
                    <div class="custom-galleria-footer">
                        <Button icon="pi pi-list" @click="onThumbnailButtonClick" />
                        <span v-if="images">
                            <span>{{activeItemIndex + 1}}/{{images.length}}</span>
                            <span class="title">{{images[activeItemIndex].title}}</span>
                            <span>{{images[activeItemIndex].alt}}</span>
                        </span>
                        <Button :icon="fullScreenIcon" @click="toggleFullScreen" />
                    </div>
                </template>
            </Galleria>
        </div>

        <GalleriaDoc />
    </div>
</template>

<script>
import GalleriaService from '../../service/GalleriaService';
import GalleriaDoc from './GalleriaDoc';

export default {
    data() {
        return {
            images: null,
            activeItemIndex: 0,
            showThumbnails: false,
            isPreviewFullScreen: false
        }
    },
    galleriaService: null,
	created() {
		this.galleriaService = new GalleriaService();
	},
	mounted() {
        this.galleriaService.getImages().then(data => this.images = data);
        this.bindDocumentListeners();
    },
    methods: {
        onThumbnailButtonClick() {
            this.showThumbnails = !this.showThumbnails;
        },
        toggleFullScreen() {
            if (this.isPreviewFullScreen) {
                this.closePreviewFullScreen();
            }
            else {
                this.openPreviewFullScreen();
            }
        },
        onFullScreenChange() {
            this.isPreviewFullScreen = !this.isPreviewFullScreen;
        },
        openPreviewFullScreen() {
            let elem = this.$refs.galleria.$el;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            }
            else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            }
            else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            }
            else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
        },
        closePreviewFullScreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        },
        bindDocumentListeners() {
            document.addEventListener("fullscreenchange", this.onFullScreenChange);
            document.addEventListener("mozfullscreenchange", this.onFullScreenChange);
            document.addEventListener("webkitfullscreenchange", this.onFullScreenChange);
            document.addEventListener("msfullscreenchange", this.onFullScreenChange);
        },
        unbindDocumentListeners() {
            document.removeEventListener("fullscreenchange", this.onFullScreenChange);
            document.removeEventListener("mozfullscreenchange", this.onFullScreenChange);
            document.removeEventListener("webkitfullscreenchange", this.onFullScreenChange);
            document.removeEventListener("msfullscreenchange", this.onFullScreenChange);
        }
    },
    computed: {
        galleriaClass() {
            return ['custom-galleria', {'preview-fullscreen': this.isPreviewFullScreen}];
        },
        fullScreenIcon() {
            return `pi ${this.isPreviewFullScreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
        }
    },
    components: {
        'GalleriaDoc': GalleriaDoc
    }
}
</script>

<style lang="scss" scoped>
::v-deep {
    .custom-galleria {
        &.p-galleria {
            .p-galleria-content {
                height: 95%;
                overflow: hidden;
                position: relative;

                .p-galleria-thumbnail-content {
                    position: absolute;
                    width: 100%;
                    bottom: 0;
                    background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.50) 70%);

                    .p-galleria-thumbnail-container {
                        .p-galleria-thumbnail-items-content {
                            .p-galleria-thumbnail-items-container {
                                .p-galleria-thumbnail-item {
                                    opacity: .6;

                                    &.p-galleria-thumbnail-item-current {
                                        opacity: 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .p-galleria-footer {
                padding: 0;
                background-color: rgba(0, 0, 0, .9);
                border: rgba(0, 0, 0, .9);

                .custom-galleria-footer {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: stretch;
                    color: #ffffff;

                    > button {
                        background-color: transparent;
                        padding: .3rem;
                        margin: .2rem;
                        border: 0 none;
                        border-radius: 0;
                        color: #ffffff;

                        &:hover {
                            background-color: transparent;
                        }
                    }

                    > span {
                        flex-grow: 1;

                        > span {
                            font-size: .9rem;
                            padding-left: .829rem;

                            &.title {
                                font-weight: bold;
                            }
                        }
                    }
                }
            }

            &.preview-fullscreen {
                .p-galleria-preview-container {
                    .p-galleria-preview-nav-button {
                        top: 50%;
                        height: 20rem;
                        width: 4rem;
                        margin-top: -10rem;
                    }
                }
            }
        }
    }
}
</style>
