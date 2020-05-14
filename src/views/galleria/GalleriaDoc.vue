<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Galleria from 'primevue/galleria';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Galleria requires item template and a value as an array of objects.</p>
<CodeHighlight>
&lt;Galleria :value="images"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;
</CodeHighlight>

<CodeHighlight lang="js">
export default {
    data() {
        return {
            images: null
        }
    },
    galleriaService: null,
	created() {
		this.galleriaService = new GalleriaService();
	},
	mounted() {
        this.galleriaService.getImages().then(data => this.images = data);
    }
}
</CodeHighlight>

				<h3>Items per page</h3>
                <p>Number of items per page is defined using the <i>numVisible</i> property.</p>

<CodeHighlight>
&lt;Galleria :value="images" :numVisible="5"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;
</CodeHighlight>

				<h3>Responsive</h3>
                <p>For responsive design, <i>numVisible</i> can be defined using the <i>responsiveOptions</i> property that should be an array of
                objects whose breakpoint defines the max-width to apply the settings.</p>

<CodeHighlight>
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;
</CodeHighlight>

<CodeHighlight lang="javascript">
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
</CodeHighlight>


				<h3>Header and Footer</h3>
                <p>Custom content projection is available using the <i>header</i> and <i>footer</i> properties.</p>
<CodeHighlight>
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"&gt;
    &lt;template #header&gt;
        &lt;h1&gt;Header&lt;/h1&gt;
    &lt;/template&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #footer&gt;
        &lt;h1&gt;Footer&lt;/h1&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;
</CodeHighlight>

				<h3>Properties</h3>
                <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of objects to display.</td>
                            </tr>
                            <tr>
                                <td>activeIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Index of the first item.</td>
                            </tr>
                            <tr>
                                <td>fullScreen</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to display the component on fullscreen.</td>
                            </tr>
                            <tr>
                                <td>visible</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies the visibility of the mask on fullscreen mode.</td>
                            </tr>
                            <tr>
                                <td>numVisible</td>
                                <td>number</td>
                                <td>3</td>
                                <td>Number of items per page.</td>
                            </tr>
                            <tr>
                                <td>responsiveOptions</td>
                                <td>any</td>
                                <td>null</td>
                                <td>An array of options for responsive design.</td>
                            </tr>
                            <tr>
                                <td>showPreviewNavButtons</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to display navigation buttons in preview container.</td>
                            </tr>
                            <tr>
                                <td>showThumbnailNavButtons</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to display navigation buttons in thumbnail container.</td>
                            </tr>
                            <tr>
                                <td>showNavButtonsOnPreviewHover</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to display navigation buttons on preview container's hover.</td>
                            </tr>
                            <tr>
                                <td>changePreviewOnIndicatorHover</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, preview item is changed on indicator item's hover.</td>
                            </tr>
                            <tr>
                                <td>circular</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if scrolling would be infinite.</td>
                            </tr>
                            <tr>
                                <td>autoPlay</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Items are displayed with a slideshow in autoPlay mode.</td>
                            </tr>
                            <tr>
                                <td>transitionInterval</td>
                                <td>number</td>
                                <td>4000</td>
                                <td>Time in milliseconds to scroll items.</td>
                            </tr>
                            <tr>
                                <td>showThumbnails</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to display thumbnail container.</td>
                            </tr>
                            <tr>
                                <td>thumbnailsPosition</td>
                                <td>string</td>
                                <td>bottom</td>
                                <td>Position of thumbnails. Valid values are "bottom", "top", "left" and "right".</td>
                            </tr>
                            <tr>
                                <td>verticalThumbnailViewPortHeight</td>
                                <td>string</td>
                                <td>300px</td>
                                <td>Height of the viewport in vertical thumbnail.</td>
                            </tr>
                            <tr>
                                <td>showIndicators</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to display indicator container.</td>
                            </tr>
                            <tr>
                                <td>showIndicatorsOnPreview</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, indicator container is displayed on preview container.</td>
                            </tr>
                            <tr>
                                <td>indicatorsPosition</td>
                                <td>string</td>
                                <td>bottom</td>
                                <td>Position of indicators. Valid values are "bottom", "top", "left" and "right".</td>
                            </tr>
                            <tr>
                                <td>baseZIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Base zIndex value to use in layering.</td>
                            </tr>
                            <tr>
                                <td>maskClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the mask on fullscreen mode.</td>
                            </tr>
                            <tr>
                                <td>containerStyle</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used.</td>
                            </tr>
                            <tr>
                                <td>galleriaClass</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.</td>
                            </tr>
                        </tbody>
                    </table>
				</div>

				<h3>Styling</h3>
				<p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>p-galleria</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-header</td>
                                <td>Header section.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-footer</td>
                                <td>Footer section.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-preview-content</td>
                                <td>Preview content element. It contains preview and indicator containers.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-preview-container</td>
                                <td>Container of the preview content. It contains navigation buttons, preview item and caption content.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-indicators</td>
                                <td>Container of the indicators. It contains indicator items.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-thumbnail-content</td>
                                <td>Thumbnail content element.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-thumbnail-container</td>
                                <td>Container of the thumbnail content. It contains navigation buttons and thumbnail items.</td>
                            </tr>
                            <tr>
                                <td>p-galleria-preview-caption</td>
                                <td>Content of the preview caption.</td>
                            </tr>
                        </tbody>
                    </table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/galleria" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;Galleria ref="galleria" :value="images" :activeItemIndex.sync="activeItemIndex" :numVisible="5" style="max-width: 520px;" :class="galleriaClass"
    :showThumbnails="showThumbnails" :showPreviewNavButtons="true" :showNavButtonsOnPreviewHover="true"
    :circular="true" :autoPlay="true" :transitionInterval="3000"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" :style="[{'width': !isPreviewFullScreen ? '100%' : '', 'display': !isPreviewFullScreen ? 'block' : ''}]" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #footer&gt;
        &lt;div class="custom-galleria-footer"&gt;
            &lt;Button icon="pi pi-list" @click="onThumbnailButtonClick" /&gt;
            &lt;span v-if="images"&gt;
                &lt;span&gt;{{activeItemIndex + 1}}/{{images.length}}&lt;/span&gt;
                &lt;span class="title"&gt;{{images[activeItemIndex].title}}&lt;/span&gt;
                &lt;span&gt;{{images[activeItemIndex].alt}}&lt;/span&gt;
            &lt;/span&gt;
            &lt;Button :icon="fullScreenIcon" @click="toggleFullScreen" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import GalleriaService from '../../service/GalleriaService';

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
    }
}
</CodeHighlight>

<CodeHighlight lang="css">
//SCSS
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
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>
