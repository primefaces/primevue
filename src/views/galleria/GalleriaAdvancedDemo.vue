<template>
    <div class="galleria-demo">
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Galleria <span>Advanced</span></h1>
                <p>Galleria can be extended further to implement complex requirements.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <Galleria ref="galleria" :value="images" v-model:activeIndex="activeIndex" :numVisible="5" containerStyle="max-width: 640px" :containerClass="galleriaClass"
                    :showThumbnails="showThumbnails" :showItemNavigators="true" :showItemNavigatorsOnHover="true"
                    :circular="true" :autoPlay="true" :transitionInterval="3000">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{'width': !fullScreen ? '100%' : '', 'display': !fullScreen ? 'block' : ''}]" />
                    </template>
                    <template #thumbnail="slotProps">
                        <div class="grid grid-nogutter justify-content-center">
                            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                        </div>
                    </template>
                    <template #footer>
                        <div class="custom-galleria-footer">
                            <Button icon="pi pi-list" @click="onThumbnailButtonClick" />
                            <span v-if="images" class="title-container">
                                <span>{{activeIndex + 1}}/{{images.length}}</span>
                                <span class="title">{{images[activeIndex].title}}</span>
                                <span>{{images[activeIndex].alt}}</span>
                            </span>
                            <Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" />
                        </div>
                    </template>
                </Galleria>
            </div>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<pre v-code><code><template v-pre>
&lt;Galleria ref="galleria" :value="images" v-model:activeIndex="activeIndex" :numVisible="5" containerStyle="max-width: 640px" :containerClass="galleriaClass"
    :showThumbnails="showThumbnails" :showItemNavigators="true" :showItemNavigatorsOnHover="true"
    :circular="true" :autoPlay="true" :transitionInterval="3000"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{'width': !fullScreen ? '100%' : '', 'display': !fullScreen ? 'block' : ''}]" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="grid grid-nogutter justify-content-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #footer&gt;
        &lt;div class="custom-galleria-footer"&gt;
            &lt;Button icon="pi pi-list" @click="onThumbnailButtonClick" /&gt;
            &lt;span v-if="images" class="title-container"&gt;
                &lt;span&gt;{{activeIndex + 1}}/{{images.length}}&lt;/span&gt;
                &lt;span class="title"&gt;{{images[activeIndex].title}}&lt;/span&gt;
                &lt;span&gt;{{images[activeIndex].alt}}&lt;/span&gt;
            &lt;/span&gt;
            &lt;Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;
</template>
</code></pre>

<pre v-code.script><code>
import PhotoService from '../../service/PhotoService';

export default {
    data() {
        return {
            images: null,
			responsiveOptions: [
				{
                    breakpoint: '1024px',
                    numVisible: 5
                },
                {
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
			]
        }
    },
    galleriaService: null,
	created() {
		this.galleriaService = new PhotoService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => this.images = data);
    }
}

</code></pre>

<pre v-code.css><code>
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
        background-color: rgba(0, 0, 0, .9);
        color: #ffffff;

        > button {
            background-color: transparent;
            color: #ffffff;
            border: 0 none;
            border-radius: 0;
            margin: .2rem 0;

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
            font-size: .9rem;
            padding-left: .829rem;

            &.title {
                font-weight: bold;
            }
        }
    }
}

</code></pre>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>


<script>
import PhotoService from '../../service/PhotoService';

export default {
    data() {
        return {
            images: null,
            activeIndex: 0,
            showThumbnails: false,
            fullScreen: false
        }
    },
    galleriaService: null,
	created() {
		this.galleriaService = new PhotoService();
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
            if (this.fullScreen) {
                this.closeFullScreen();
            }
            else {
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
        closeFullScreen() {
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
            return ['custom-galleria', {'fullscreen': this.fullScreen}];
        },
        fullScreenIcon() {
            return `pi ${this.fullScreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
        }
    }
}
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
        background-color: rgba(0, 0, 0, .9);
        color: #ffffff;

        > button {
            background-color: transparent;
            color: #ffffff;
            border: 0 none;
            border-radius: 0;
            margin: .2rem 0;

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
            font-size: .9rem;
            padding-left: .829rem;

            &.title {
                font-weight: bold;
            }
        }
    }
}
</style>