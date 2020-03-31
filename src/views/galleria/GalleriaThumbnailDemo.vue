<template>
    <div>
        <GalleriaSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1 style="margin-bottom: 0px;">Galleria - Thumbnail</h1>
                <p></p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px">
                <template #previewItem="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnailItem="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
                    </div>
				</template>
            </Galleria>

            <h3>Position</h3>
            <Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="4" thumbnailsPosition="left" style="max-width: 610px">
                <template #header>
                    Left
                </template>
                <template #previewItem="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnailItem="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
                    </div>
				</template>
            </Galleria>

            <Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="4" thumbnailsPosition="right" style="max-width: 610px; margin-top: 2em;">
                <template #header>
                    Right
                </template>
                <template #previewItem="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnailItem="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
                    </div>
				</template>
            </Galleria>

            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" thumbnailsPosition="top" style="max-width: 520px; margin-top: 2em;">
                <template #header>
                    Top
                </template>
                <template #previewItem="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnailItem="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
                    </div>
				</template>
            </Galleria>

            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" thumbnailsPosition="bottom" style="max-width: 520px; margin-top: 2em;">
                <template #header>
                    Bottom
                </template>
                <template #previewItem="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnailItem="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" />
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
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"&gt;
    &lt;template #previewItem="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnailItem="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;h3&gt;Position&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="4" thumbnailsPosition="left" style="max-width: 610px"&gt;
    &lt;template #header&gt;
        Left
    &lt;/template&gt;
    &lt;template #previewItem="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnailItem="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="4" thumbnailsPosition="right" style="max-width: 610px; margin-top: 2em;"&gt;
    &lt;template #header&gt;
        Right
    &lt;/template&gt;
    &lt;template #previewItem="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnailItem="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" thumbnailsPosition="top" style="max-width: 520px; margin-top: 2em;"&gt;
    &lt;template #header&gt;
        Top
    &lt;/template&gt;
    &lt;template #previewItem="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnailItem="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" thumbnailsPosition="bottom" style="max-width: 520px; margin-top: 2em;"&gt;
    &lt;template #header&gt;
        Bottom
    &lt;/template&gt;
    &lt;template #previewItem="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnailItem="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" tyle="width: 100%; display: block;" /&gt;
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
            ],
            responsiveOptions2: [
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
		this.galleriaService.getImages().then(data => this.images = data);
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
import GalleriaSubMenu from './GalleriaSubMenu';

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
            ],
            responsiveOptions2: [
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
		this.galleriaService.getImages().then(data => this.images = data);
    },
    components: {
        'GalleriaSubMenu': GalleriaSubMenu
    }
}
</script>
