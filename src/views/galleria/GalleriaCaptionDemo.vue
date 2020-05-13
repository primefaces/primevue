<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1 style="margin-bottom: 0px;">Galleria - Caption</h1>
                <p></p>
            </div>
        </div>

        <div class="content-section implementation">
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px">
                <template #item="{item}">
					<img :src="item.previewImageSrc" :alt="item.alt" style="width: 100%; display: block;" />
				</template>
				<template #thumbnail="{item}">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="item.thumbnailImageSrc" :alt="item.alt" style="display: block;" />
                    </div>
				</template>
                <template #previewCaption="{item}">
                    <h4 style="margin-bottom: .5em;">{{item.title}}</h4>
                    <p>{{item.alt}}</p>
                </template>
            </Galleria>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"&gt;
    &lt;template #item="{item}"&gt;
        &lt;img :src="item.previewImageSrc" :alt="item.alt" style="width: 100%; display: block;" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="{item}"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="item.thumbnailImageSrc" :alt="item.alt" style="display: block;" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #previewCaption="{item}"&gt;
        &lt;h4 style="margin-bottom: .5em;"&gt;{{item.title}}&lt;/h4&gt;
        &lt;p&gt;{{item.alt}}&lt;/p&gt;
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
			]
        }
    },
    galleriaService: null,
	created() {
		this.galleriaService = new GalleriaService();
	},
	mounted() {
		this.galleriaService.getImages().then(data =&gt; this.images = data);
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
		this.galleriaService.getImages().then(data => this.images = data);
    }
}
</script>
