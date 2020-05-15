<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Galleria - FullScreen</h1>
                <p>In fullscreen mode content covers the whole page over a mask..</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>With Thumbnails</h3>
            <Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="9" containerStyle="max-width: 50%"
                :circular="true" :fullScreen="true" :showItemNavigators="true" :visible.sync="displayBasic">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
				</template>
            </Galleria>

            <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />

            <h3>Without Thumbnails</h3>
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
                :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" :visible.sync="displayBasic2">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
				</template>
            </Galleria>

            <Button label="Show" icon="pi pi-external-link" @click="displayBasic2 = true" />

            <h3>Custom Content</h3>
            <Galleria :value="images" :activeItemIndex.sync="activeItemIndex" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
                :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" :visible.sync="displayCustom">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
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
&lt;h3&gt;With Thumbnails&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="9" containerStyle="max-width: 50%"
    :circular="true" :fullScreen="true" :showItemNavigators="true" :visible.sync="displayBasic"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" /&gt;

&lt;h3&gt;Without Thumbnails&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" :visible.sync="displayBasic2"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;Button label="Show" icon="pi pi-external-link" @click="displayBasic2 = true" /&gt;

&lt;h3&gt;Custom Content&lt;/h3&gt;
&lt;Galleria :value="images" :activeItemIndex.sync="activeItemIndex" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" :visible.sync="displayCustom"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
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
import PhotoService from '../../service/PhotoService';

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
		this.galleriaService = new PhotoService();
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
import PhotoService from '../../service/PhotoService';

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
		this.galleriaService = new PhotoService();
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
</script>
