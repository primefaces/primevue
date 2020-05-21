<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Galleria <span>AutoPlay</span></h1>
                <p>AutoPlay mode is used to implement slideshows.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"
                :circular="true" :autoPlay="true" :transitionInterval="2000">
                <template #item="slotProps">
					<img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
				</template>
            </Galleria>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 640px"
    :circular="true" :autoPlay="true" :transitionInterval="2000"&gt;
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
