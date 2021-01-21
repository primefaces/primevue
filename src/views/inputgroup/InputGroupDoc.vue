<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Source">
                <div class="p-d-flex p-jc-between">
                    <a href="https://github.com/primefaces/primevue/tree/master/src/views/inputgroup" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
                        <span>View on GitHub</span>
                    </a>
                    <LiveEditor name="InputGroupDemo" :sources="sources" :components="['InputText', 'Button', 'RadioButton', 'Checkbox']" />
                </div>
<pre v-code>
<code><template v-pre>
&lt;h3&gt;Addons&lt;/h3&gt;
&lt;div class="p-grid p-fluid"&gt;
    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;div class="p-inputgroup"&gt;
        &lt;span class="p-inputgroup-addon"&gt;
            &lt;i class="pi pi-user"&gt;&lt;/i&gt;
        &lt;/span&gt;
            &lt;InputText placeholder="Username" /&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;div class="p-inputgroup"&gt;
            &lt;span class="p-inputgroup-addon"&gt;$&lt;/span&gt;
            &lt;InputText placeholder="Price" /&gt;
            &lt;span class="p-inputgroup-addon"&gt;.00&lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;div class="p-inputgroup"&gt;
            &lt;span class="p-inputgroup-addon"&gt;W&lt;/span&gt;
            &lt;InputText placeholder="Website" /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Multiple Addons&lt;/h3&gt;
&lt;div class="p-grid"&gt;
    &lt;div class="p-col-12"&gt;
        &lt;div class="p-inputgroup"&gt;
        &lt;span class="p-inputgroup-addon"&gt;
            &lt;i class="pi pi-clock"&gt;&lt;/i&gt;
        &lt;/span&gt;
            &lt;span class="p-inputgroup-addon"&gt;
            &lt;i class="pi pi-star"&gt;&lt;/i&gt;
        &lt;/span&gt;
            &lt;InputText placeholder="Price" /&gt;
            &lt;span class="p-inputgroup-addon"&gt;$&lt;/span&gt;
            &lt;span class="p-inputgroup-addon"&gt;.00&lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Button Addons&lt;/h3&gt;
&lt;div class="p-grid p-fluid"&gt;
    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;div class="p-inputgroup"&gt;
            &lt;Button label="Search"/&gt;
            &lt;InputText placeholder="Keyword"/&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;div class="p-inputgroup"&gt;
            &lt;InputText placeholder="Keyword"/&gt;
            &lt;Button icon="pi pi-search" class="p-button-warning"/&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;div class="p-inputgroup"&gt;
            &lt;Button icon="pi pi-check" class="p-button-success"/&gt;
            &lt;InputText placeholder="Vote"/&gt;
            &lt;Button icon="pi pi-times" class="p-button-danger"/&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;h3&gt;Checkbox and RadioButton&lt;/h3&gt;
&lt;div class="p-grid p-fluid"&gt;
    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;div class="p-inputgroup"&gt;
        &lt;span class="p-inputgroup-addon"&gt;
            &lt;Checkbox v-model="checked1" :binary="true" /&gt;
        &lt;/span&gt;
            &lt;InputText placeholder="Username"/&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;div class="p-inputgroup"&gt;
            &lt;InputText placeholder="Price"/&gt;
            &lt;span class="p-inputgroup-addon"&gt;
            &lt;RadioButton name="rb1" value="rb1" v-model="radioValue1" /&gt;
        &lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;div class="p-inputgroup"&gt;
        &lt;span class="p-inputgroup-addon"&gt;
            &lt;Checkbox v-model="checked2" :binary="true" /&gt;
        &lt;/span&gt;
            &lt;InputText placeholder="Website"/&gt;
            &lt;span class="p-inputgroup-addon"&gt;
            &lt;RadioButton name="rb2" value="rb2" v-model="radioValue2" /&gt;
        &lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
export default {
	data() {
		return {
			checked1: false,
			checked2: false,
			radioValue1: '',
			radioValue2: ''
		}
	}
}

</code></pre>
			</TabPanel>
		</TabView>
	</div>
</template>

<script>
import LiveEditor from '../liveeditor/LiveEditor';
export default {
    data() {
        return {
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <h5>Addons</h5>
                <div class="p-grid p-fluid">
                    <div class="p-col-12 p-md-4">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">
                                <i class="pi pi-user"></i>
                            </span>
                            <InputText placeholder="Username" />
                        </div>
                    </div>

                    <div class="p-col-12 p-md-4">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">$</span>
                            <InputText placeholder="Price" />
                            <span class="p-inputgroup-addon">.00</span>
                        </div>
                    </div>

                    <div class="p-col-12 p-md-4">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">W</span>
                            <InputText placeholder="Website" />
                        </div>
                    </div>
                </div>

                <h5>Multiple Addons</h5>
                <div class="p-grid">
                    <div class="p-col-12">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">
                                <i class="pi pi-clock"></i>
                            </span>
                            <span class="p-inputgroup-addon">
                                <i class="pi pi-star"></i>
                            </span>
                            <InputText placeholder="Price" />
                            <span class="p-inputgroup-addon">$</span>
                            <span class="p-inputgroup-addon">.00</span>
                        </div>
                    </div>
                </div>

                <h5>Button Addons</h5>
                <div class="p-grid p-fluid">
                    <div class="p-col-12 p-md-4">
                        <div class="p-inputgroup">
                            <Button label="Search"/>
                            <InputText placeholder="Keyword"/>
                        </div>
                    </div>

                    <div class="p-col-12 p-md-4">
                        <div class="p-inputgroup">
                            <InputText placeholder="Keyword"/>
                            <Button icon="pi pi-search" class="p-button-warning"/>
                        </div>
                    </div>

                    <div class="p-col-12 p-md-4">
                        <div class="p-inputgroup">
                            <Button icon="pi pi-check" class="p-button-success"/>
                            <InputText placeholder="Vote"/>
                            <Button icon="pi pi-times" class="p-button-danger"/>
                        </div>
                    </div>
                </div>

                <h5>Checkbox and RadioButton</h5>
                <div class="p-grid p-fluid">
                    <div class="p-col-12 p-md-12">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">
                                <Checkbox v-model="checked1" :binary="true" />
                            </span>
                            <InputText placeholder="Username"/>
                        </div>
                    </div>

                    <div class="p-col-12 p-md-12">
                        <div class="p-inputgroup">
                            <InputText placeholder="Price"/>
                            <span class="p-inputgroup-addon">
                                <RadioButton name="rb1" value="rb1" v-model="radioValue1" />
                            </span>
                        </div>
                    </div>

                    <div class="p-col-12 p-md-12">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">
                                <Checkbox v-model="checked2" :binary="true" />
                            </span>
                            <InputText placeholder="Website"/>
                            <span class="p-inputgroup-addon">
                                <RadioButton name="rb2" value="rb2" v-model="radioValue2" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: false,
            radioValue1: '',
            radioValue2: ''
        }
    }
}`
                }
            }
        }
    },
    components: {
        LiveEditor
    }
}
</script>