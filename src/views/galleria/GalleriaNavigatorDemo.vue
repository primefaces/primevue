<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Galleria <span>Navigator</span></h1>
                <p>Combining item navigators, thumbnails and indicators provide various UI alternatives.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Item Navigators and Thumbnails</h5>
                <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px"
                    :showItemNavigators="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </template>
                </Galleria>
            </div>

            <div class="card">
                <h5>Item Navigators without Thumbnails</h5>
                <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px"
                    :showItemNavigators="true" :showThumbnails="false">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </template>
                </Galleria>
            </div>

            <div class="card">
                <h5>Item Navigators on Hover</h5>
                <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px;"
                    :showItemNavigators="true" :showItemNavigatorsOnHover="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </template>
                </Galleria>
            </div>

            <div class="card">
                <h5>Item Navigators and Indicators</h5>
                <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px;"
                    :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                    </template>
                </Galleria>
            </div>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Item Navigators and Thumbnails&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px"
    :showItemNavigators="true"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;h3&gt;Item Navigators without Thumbnails&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px"
    :showItemNavigators="true" :showThumbnails="false"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;h3&gt;Item Navigators on Hover&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px;"
    :showItemNavigators="true" :showItemNavigatorsOnHover="true"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;h3&gt;Item Navigators and Indicators&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" style="max-width: 640px;"
    :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" /&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
</script>
