<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1 style="margin-bottom: 0px;">Galleria - Indicator</h1>
                <p></p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"
                :showThumbnails="false" :showIndicators="true">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
            </Galleria>

            <h3>Change Preview On Indicator Hover</h3>
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"
                :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
            </Galleria>

            <h3>Show Indicator On Preview</h3>
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"
                :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" :showIndicatorsOnPreview="true">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
            </Galleria>

            <h3>Position</h3>
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"
                :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" :showIndicatorsOnPreview="true" indicatorsPosition="bottom">
                <template #header>
                    Bottom
                </template>
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
            </Galleria>

            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px; margin-top: 2rem;"
                :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" :showIndicatorsOnPreview="true" indicatorsPosition="top">
                <template #header>
                    Top
                </template>
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
            </Galleria>

            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px; margin-top: 2rem;"
                :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" :showIndicatorsOnPreview="true" indicatorsPosition="left">
                <template #header>
                    Left
                </template>
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
            </Galleria>

            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px; margin-top: 2rem;"
                :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" :showIndicatorsOnPreview="true" indicatorsPosition="right">
                <template #header>
                    Right
                </template>
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
            </Galleria>

            <hr />

            <h3>Template</h3>
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px;" class="custom-indicator-galleria"
                :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" :showIndicatorsOnPreview="true" indicatorsPosition="left">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
                <template #indicator="{index}">
                    <div>
                        {{index + 1}}
                    </div>
				</template>
            </Galleria>

            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px; margin-top: 2rem;" class="custom-indicator-galleria"
                :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" indicatorsPosition="left">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
                <template #indicator="{index}">
                    <div>
                        {{index + 1}}
                    </div>
				</template>
            </Galleria>

            <Galleria :value="images2" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px; margin-top: 2rem;" class="custom-indicator-galleria2"
                :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" indicatorsPosition="left">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
                <template #indicator="{index}">
                    <div style="padding: .2rem; cursor: pointer">
                        <img :src="images2[index].thumbnailImageSrc" :alt="images2[index].alt" style="display: block"/>
                    </div>
				</template>
            </Galleria>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h3 class="first"&gt;Basic&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"
    :showThumbnails="false" :showIndicators="true"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;hr /&gt;

&lt;h3&gt;Change Preview On Indicator Hover&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"
    :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;hr /&gt;

&lt;h3&gt;Show Indicator On Preview&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"
    :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" :showIndicatorsOnPreview="true"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;hr /&gt;

&lt;h3&gt;Position&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"
    :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" :showIndicatorsOnPreview="true" indicatorsPosition="bottom"&gt;
    &lt;template #header&gt;
        Bottom
    &lt;/template&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px; margin-top: 2rem;"
    :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" :showIndicatorsOnPreview="true" indicatorsPosition="top"&gt;
    &lt;template #header&gt;
        Top
    &lt;/template&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px; margin-top: 2rem;"
    :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" :showIndicatorsOnPreview="true" indicatorsPosition="left"&gt;
    &lt;template #header&gt;
        Left
    &lt;/template&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px; margin-top: 2rem;"
    :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" :showIndicatorsOnPreview="true" indicatorsPosition="right"&gt;
    &lt;template #header&gt;
        Right
    &lt;/template&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;hr /&gt;

&lt;h3&gt;Template&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px;" class="custom-indicator-galleria"
    :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" :showIndicatorsOnPreview="true" indicatorsPosition="left"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #indicator="{index}"&gt;
        &lt;div&gt;
            {{index + 1}}
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px; margin-top: 2rem;" class="custom-indicator-galleria"
    :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" indicatorsPosition="left"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #indicator="{index}"&gt;
        &lt;div&gt;
            {{index + 1}}
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Galleria :value="images2" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px; margin-top: 2rem;" class="custom-indicator-galleria2"
    :showThumbnails="false" :showIndicators="true" :changePreviewOnIndicatorHover="true" indicatorsPosition="left"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #indicator="{index}"&gt;
        &lt;div style="padding: .2rem; cursor: pointer"&gt;
            &lt;img :src="images2[index].thumbnailImageSrc" :alt="images2[index].alt" style="display: block"/&gt;
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
            images2: null,
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
		this.galleriaService = new GalleriaService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => {
            this.images = data;
            this.images2 = data.slice(0, 5);
        });
    }
}
</CodeHighlight>

<CodeHighlight lang="css">
//SCSS
::v-deep {
    &.custom-indicator-galleria {
        &.p-galleria-indicators-left {
            .p-galleria-preview-content {
                .p-galleria-indicator-container {
                    display: flex;
                    justify-content: space-between;
                    padding: 0;

                    .p-galleria-indicator-item {
                        margin-left: 0;
                        height: 100%;
                        padding-left: .5em !important;
                        padding-right: .5em !important;
                        background-color: rgba(0, 0, 0, 0.6);
                        color: #ffffff;
                        border-top-width: 0 !important;
                        border-radius: 0;
                        min-width: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all .2s;

                        &:first-child {
                            border-top-width: 1px !important;
                        }

                        &.p-highlight {
                            color: var(--primaryTextColor);
                            background-color: var(--primaryColor);
                            border-color: var(--primaryColor);
                        }
                    }
                }
            }
        }

        &:not(.p-galleria-indicator-onpreview) {
            &.p-galleria-indicators-left {
                .p-galleria-preview-content {
                    align-items: stretch;

                    .p-galleria-preview-container {
                        border: 1px solid #c8c8c8; /* for IE */
                        border: var(--panelContentBorder);
                        border-left-width: 0;
                    }

                    .p-galleria-indicator-container {
                        .p-galleria-indicator-item {
                            background-color: #ffffff;
                            border: 1px solid #c8c8c8; /* for IE */
                            border: var(--panelContentBorder);
                            color: #333333;

                            &.p-highlight {
                                color: var(--primaryTextColor);
                                background-color: var(--primaryColor);
                                border-color: var(--primaryColor);
                            }
                        }
                    }
                }
            }
        }
    }

    &.custom-indicator-galleria2 {
        &.p-galleria-indicators-left {
            .p-galleria-content {
                .p-galleria-preview-content {
                    .p-galleria-indicator-container {
                        .p-galleria-indicator-item {
                            padding-right: 0;
                        }
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
    </div>
</template>

<script>
import GalleriaService from '../../service/GalleriaService';

export default {
    data() {
        return {
            images: null,
            images2: null,
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
		this.galleriaService = new GalleriaService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => {
            this.images = data;
            this.images2 = data.slice(0, 5);
        });
    }
}
</script>

<style lang="scss" scoped>
::v-deep {
    &.custom-indicator-galleria {
        &.p-galleria-indicators-left {
            .p-galleria-preview-content {
                .p-galleria-indicator-container {
                    display: flex;
                    justify-content: space-between;
                    padding: 0;

                    .p-galleria-indicator-item {
                        margin-left: 0;
                        height: 100%;
                        padding-left: .5em !important;
                        padding-right: .5em !important;
                        background-color: rgba(0, 0, 0, 0.6);
                        color: #ffffff;
                        border-top-width: 0 !important;
                        border-radius: 0;
                        min-width: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all .2s;

                        &:first-child {
                            border-top-width: 1px !important;
                        }

                        &.p-highlight {
                            color: var(--primaryTextColor);
                            background-color: var(--primaryColor);
                            border-color: var(--primaryColor);
                        }
                    }
                }
            }
        }

        &:not(.p-galleria-indicator-onpreview) {
            &.p-galleria-indicators-left {
                .p-galleria-preview-content {
                    align-items: stretch;

                    .p-galleria-preview-container {
                        border: 1px solid #c8c8c8; /* for IE */
                        border: var(--panelContentBorder);
                        border-left-width: 0;
                    }

                    .p-galleria-indicator-container {
                        .p-galleria-indicator-item {
                            background-color: #ffffff;
                            border: 1px solid #c8c8c8; /* for IE */
                            border: var(--panelContentBorder);
                            color: #333333;

                            &.p-highlight {
                                color: var(--primaryTextColor);
                                background-color: var(--primaryColor);
                                border-color: var(--primaryColor);
                            }
                        }
                    }
                }
            }
        }
    }

    &.custom-indicator-galleria2 {
        &.p-galleria-indicators-left {
            .p-galleria-content {
                .p-galleria-preview-content {
                    .p-galleria-indicator-container {
                        .p-galleria-indicator-item {
                            padding-right: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>
