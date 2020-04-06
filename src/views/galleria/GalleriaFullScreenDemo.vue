<template>
    <div>
        <GalleriaSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1 style="margin-bottom: 0px;">Galleria - FullScreen</h1>
                <p></p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="9" containerStyle="max-width: 50%"
                :circular="true" :fullScreen="true" :showPreviewNavButtons="true" :visible.sync="displayBasic">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
            </Galleria>

            <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />

            <h3>Without Thumbnails</h3>
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
                :circular="true" :fullScreen="true" :showPreviewNavButtons="true" :showThumbnails="false" :visible.sync="displayBasic2">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
            </Galleria>

            <Button label="Show" icon="pi pi-external-link" @click="displayBasic2 = true" />

            <h3>Custom Contents</h3>
            <Galleria :value="images" :activeItemIndex.sync="activeItemIndex" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
                :circular="true" :fullScreen="true" :showPreviewNavButtons="true" :showThumbnails="false" :visible.sync="displayCustom">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </div>
				</template>
            </Galleria>

            <div v-if="images" class="p-grid" style="max-width: 400px;">
                <div v-for="(image, index) of images" class="p-col-3" :key="index">
                    <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)"/>
                </div>
            </div>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h3 class="first"&gt;Basic&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="9" containerStyle="max-width: 50%"
    :circular="true" :fullScreen="true" :showPreviewNavButtons="true" :visible.sync="displayBasic"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" /&gt;

&lt;h3&gt;Without Thumbnails&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
    :circular="true" :fullScreen="true" :showPreviewNavButtons="true" :showThumbnails="false" :visible.sync="displayBasic2"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Button label="Show" icon="pi pi-external-link" @click="displayBasic2 = true" /&gt;

&lt;h3&gt;Custom Contents&lt;/h3&gt;
&lt;Galleria :value="images" :activeItemIndex.sync="activeItemIndex" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
    :circular="true" :fullScreen="true" :showPreviewNavButtons="true" :showThumbnails="false" :visible.sync="displayCustom"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;div v-if="images" class="p-grid" style="max-width: 400px;"&gt;
    &lt;div v-for="(image, index) of images" class="p-col-3" :key="index"&gt;
        &lt;img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)"/&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import GalleriaService from '../../service/GalleriaService';

export default {
    data() {
        return {
            images: null,
            activeItemIndex: 0,
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
                    breakpoint: '1500px',
                    numVisible: 5
                },
                {
                    breakpoint: '1024px',
                    numVisible: 3
                },
                {
                    breakpoint: '768px',
                    numVisible: 2
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            displayBasic: false,
            displayBasic2: false,
            displayCustom: false
        }
    },
    galleriaService: null,
	created() {
		this.galleriaService = new GalleriaService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => this.images = data);
    },
    methods: {
        imageClick(index) {
            this.activeItemIndex = index;
            this.displayCustom = true;
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
import GalleriaSubMenu from './GalleriaSubMenu';

export default {
    data() {
        return {
            images: null,
            activeItemIndex: 0,
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
                    breakpoint: '1500px',
                    numVisible: 5
                },
                {
                    breakpoint: '1024px',
                    numVisible: 3
                },
                {
                    breakpoint: '768px',
                    numVisible: 2
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            displayBasic: false,
            displayBasic2: false,
            displayCustom: false
        }
    },
    galleriaService: null,
	created() {
		this.galleriaService = new GalleriaService();
	},
	mounted() {
		this.galleriaService.getImages().then(data => this.images = data);
    },
    methods: {
        imageClick(index) {
            this.activeItemIndex = index;
            this.displayCustom = true;
        }
    },
    components: {
        'GalleriaSubMenu': GalleriaSubMenu
    }
}
</script>
