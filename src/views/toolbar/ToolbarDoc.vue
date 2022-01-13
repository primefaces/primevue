<template>
	<AppDoc name="ToolbarDemo" :sources="sources" github="toolbar/ToolbarDemo.vue" >
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Toolbar from 'primevue/toolbar';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/toolbar/toolbar.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>Toolbar provides <i>start</i> and <i>end</i> templates to place content at these sections.</p>
<pre v-code><code>
&lt;Toolbar&gt;
    &lt;template #start&gt;
        &lt;Button label="New" icon="pi pi-plus" class="mr-2" /&gt;
        &lt;Button label="Upload" icon="pi pi-upload" class="p-button-success" /&gt;
        &lt;i class="pi pi-bars p-toolbar-separator mr-2" /&gt;
        &lt;SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"&gt;&lt;/SplitButton&gt;
    &lt;/template&gt;

    &lt;template #end&gt;
        &lt;Button icon="pi pi-search" class="mr-2" /&gt;
        &lt;Button icon="pi pi-calendar" class="p-button-success mr-2" /&gt;
        &lt;Button icon="pi pi-times" class="p-button-danger" /&gt;
    &lt;/template&gt;
&lt;/Toolbar&gt;

</code></pre>

        <h5>Slots</h5>
		<div class="doc-tablewrapper">
            <table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>start</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>end</td>
                        <td>-</td>
                    </tr>
				</tbody>
			</table>
        </div>

		<h5>Styling</h5>
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
						<td>p-toolbar</td>
						<td>Main container element.</td>
					</tr>
					<tr>
						<td>p-toolbar-group-left</td>
						<td>Left content container.</td>
					</tr>
					<tr>
						<td>p-toolbar-group-right</td>
						<td>Right content container.</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h5>Dependencies</h5>
		<p>None.</p>
    </AppDoc>
</template>

<script>
export default {
    data() {
        return {
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <Toolbar>
            <template #start>
                <Button label="New" icon="pi pi-plus" class="mr-2" />
                <Button label="Upload" icon="pi pi-upload" class="p-button-success" />
                <i class="pi pi-bars p-toolbar-separator mr-2" />
                <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>
            </template>

            <template #end>
                <Button icon="pi pi-search" class="mr-2" />
                <Button icon="pi pi-calendar" class="p-button-success mr-2" />
                <Button icon="pi pi-times" class="p-button-danger" />
            </template>
        </Toolbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/'
                    }
                },
                {   label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        window.location.hash = "/fileupload"
                    }
                }
            ]
        }
    }
}
<\\/script>

<style scoped>
.p-button,
.p-splitbutton {
    margin-bottom: 0.5rem;
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <Toolbar>
            <template #start>
                <Button label="New" icon="pi pi-plus" class="mr-2" />
                <Button label="Upload" icon="pi pi-upload" class="p-button-success" />
                <i class="pi pi-bars p-toolbar-separator mr-2" />
                <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>
            </template>

            <template #end>
                <Button icon="pi pi-search" class="mr-2" />
                <Button icon="pi pi-calendar" class="p-button-success mr-2" />
                <Button icon="pi pi-times" class="p-button-danger" />
            </template>
        </Toolbar>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const items = ref([
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            },
            {
                label: 'Vue Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://vuejs.org/'
                }
            },
            {   label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
                }
            }
        ]);

        return { items }
    }
}
<\\/script>

<style scoped>
.p-button,
.p-splitbutton {
    margin-bottom: 0.5rem;
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/toolbar/toolbar.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/splitbutton/splitbutton.min.js"><\\/script>`,
                    content: `<div id="app">
            <p-toolbar>
                <template #start>
                    <p-button label="New" icon="pi pi-plus" class="mr-2"></p-button>
                    <p-button label="Upload" icon="pi pi-upload" class="p-button-success"></p-button>
                    <i class="pi pi-bars p-toolbar-separator mr-2"></i>
                    <p-splitbutton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></p-splitbutton>
                </template>

                <template #end>
                    <p-button icon="pi pi-search" class="mr-2"></p-button>
                    <p-button icon="pi pi-calendar" class="p-button-success mr-2"></p-button>
                    <p-button icon="pi pi-times" class="p-button-danger"></p-button>
                </template>
            </p-toolbar>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const items = ref([
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times'
                    },
                    {
                        label: 'Vue Website',
                        icon: 'pi pi-external-link',
                        command: () => {
                            window.location.href = 'https://vuejs.org/'
                        }
                    },
                    {   label: 'Upload',
                        icon: 'pi pi-upload',
                        command: () => {
                            window.location.hash = "/fileupload"
                        }
                    }
                ]);

                return { items }
            },
            components: {
                "p-toolbar": primevue.toolbar,
                "p-splitbutton": primevue.splitbutton,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style>
        .p-button {
            margin-bottom: 0.5rem;
        }
        </style>`
                }
            }
        }
    }
}
</script>