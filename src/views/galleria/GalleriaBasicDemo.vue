<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1 style="margin-bottom: 0px;">Galleria - Basic</h1>
                <p></p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Default</h3>
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
                    </div>
				</template>
            </Galleria>

            <h3>Programmatic</h3>
            <div style="padding: .5em 0">
                <Button icon="pi pi-minus" @click="activeIndex--" class="p-button-secondary" />
                <Button icon="pi pi-plus" @click="activeIndex++" class="p-button-secondary" style="margin-left: .5em" />
            </div>

            <Galleria :value="images" :activeItemIndex.sync="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px">
                <template #item="slotProps">
					<img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
				</template>
				<template #thumbnail="slotProps">
                    <div class="p-grid p-nogutter p-justify-center">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
                    </div>
				</template>
            </Galleria>
        </div>

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<CodeHighlight>
<template v-pre>
&lt;h3 class="first"&gt;Default&lt;/h3&gt;
&lt;Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" /&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/Galleria&gt;

&lt;h3&gt;Programmatic&lt;/h3&gt;
&lt;div style="padding: .5em 0"&gt;
    &lt;Button icon="pi pi-minus" @click="activeIndex--" class="p-button-secondary" /&gt;
    &lt;Button icon="pi pi-plus" @click="activeIndex++" class="p-button-secondary" style="margin-left: .5em" /&gt;
&lt;/div&gt;

&lt;Galleria :value="images" :activeItemIndex.sync="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="5" style="max-width: 520px"&gt;
    &lt;template #item="slotProps"&gt;
        &lt;img :src="slotProps.item.previewImageSrc" :alt="slotProps.item.alt" style="width: 100%" /&gt;
    &lt;/template&gt;
    &lt;template #thumbnail="slotProps"&gt;
        &lt;div class="p-grid p-nogutter p-justify-center"&gt;
            &lt;img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" /&gt;
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
            activeItemIndex: 2,
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
    },
    computed: {
        activeIndex: {
            get: function() {
                return this.activeItemIndex;
            },
            set: function(newValue) {
                if (this.images && 0 &lt;= newValue && newValue &lt;= (this.images.length - 1)) {
                    this.activeItemIndex = newValue;
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
            activeItemIndex: 2,
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
    },
    computed: {
        activeIndex: {
            get: function() {
                return this.activeItemIndex;
            },
            set: function(newValue) {
                if (this.images && 0 <= newValue && newValue <= (this.images.length - 1)) {
                    this.activeItemIndex = newValue;
                }
            }
        }
    }
}
</script>
