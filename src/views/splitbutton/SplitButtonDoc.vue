<template>
	<AppDoc name="SplitButtonDemo" :sources="sources" github="splitbutton/SplitButtonDemo.vue" >
		<h5>Import via Module</h5>
<pre v-code.script><code>
import SplitButton from 'primevue/splitbutton';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/primevue@^3/splitbutton/splitbutton.min.js"&gt;&lt;/script&gt;

</code></pre>

		<h5>Getting Started</h5>
		<p>SplitButton has a default command button and a collection of additional options defined by the <i>model</i> property.</p>
<pre v-code><code>
&lt;SplitButton label="Save" icon="pi pi-plus" :model="items"&gt;&lt;/SplitButton&gt;

</code></pre>

<pre v-code.script><code>
export default {
	data() {
		return {
			items: [
				{
					label: 'Update',
					icon: 'pi pi-refresh',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				},
				{
					label: 'Delete',
					icon: 'pi pi-times',
					command: () => {
						this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
					}
				},
				{
					label: 'Vue Website',
					icon: 'pi pi-external-link',
					command: () => {
						window.location.href = 'https://vuejs.org/'
					}
				},
				{
					label: 'Upload',
					icon: 'pi pi-upload',
                    to: '/fileupload'
				}
			]
		}
	}
}

</code></pre>

        <h5>MenuModel</h5>
        <p>SplitButton uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

		<h5>Severity</h5>
		<p>Different color options are available as severity levels.</p>

		<ul>
			<li>.p-button-secondary</li>
			<li>.p-button-success</li>
			<li>.p-button-info</li>
			<li>.p-button-warning</li>
			<li>.p-button-help</li>
			<li>.p-button-danger</li>
		</ul>

<pre v-code><code>
&lt;SplitButton label="Primary" :model="items"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Secondary" :model="items" class="p-button-secondary"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Success" :model="items" class="p-button-success"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Info" :model="items" class="p-button-info"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Warning" :model="items" class="p-button-warning"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Help" :model="items" class="p-button-help"&gt;&lt;/SplitButton&gt;
&lt;SplitButton label="Danger" :model="items" class="p-button-danger"&gt;&lt;/SplitButton&gt;

</code></pre>

        <h5>Raised and Rounded Buttons</h5>
        <p>SplitButton can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</p>
<pre v-code><code>
&lt;SplitButton label="Proceed" :model="items" class="p-button-raised p-button-rounded"&gt;&lt;/SplitButton&gt;

</code></pre>

        <h5>Templating</h5>
        <p>Button part of the content can easily be customized with the default slot instead of using the built-in modes.</p>
<pre v-code><code>
&lt;SplitButton :model="items" class="bg-primary border-round"&gt;
    &lt;Button @click="save"&gt;
        &lt;img alt="logo" src="../../assets/images/logo.svg" style="width: 1rem" /&gt;
        &lt;span class="ml-2 flex align-items-center font-bold"&gt;PrimeVue&lt;/span&gt;
    &lt;/Button&gt;
&lt;/SplitButton&gt;

</code></pre>

		<h5>Properties</h5>
		<p>Any property such as tabindex are passed to the underlying input element. Following are the additional properties to configure the component.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>label</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Text of the button.</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Name of the icon.</td>
                    </tr>
                    <tr>
                        <td>model</td>
                        <td>object</td>
                        <td>null</td>
                        <td>MenuModel instance to define the overlay items.</td>
                    </tr>
                    <tr>
                        <td>autoZIndex</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to automatically manage layering.</td>
                    </tr>
                    <tr>
                        <td>baseZIndex</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Base zIndex value to use in layering.</td>
                    </tr>
                    <tr>
                        <td>appendTo</td>
                        <td>string</td>
                        <td>body</td>
                        <td>A valid query selector or an HTMLElement to specify where the overlay gets attached.</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>any</td>
                        <td>null</td>
                        <td>Style class of the component.</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Inline style of the component.</td>
                    </tr>
                </tbody>
			</table>
		</div>

		<h5>Events</h5>
		<p>Any valid event such as focus, blur and input are passed to the underlying button element. Following are the additional events to configure the component.</p>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
				<tr>
					<th>Name</th>
					<th>Parameters</th>
					<th>Description</th>
				</tr>
				</thead>
				<tbody>
					<tr>
						<td>click</td>
						<td>event: Browser event</td>
						<td>Callback to invoke when main button is clicked.</td>
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
						<td>p-splitbutton</td>
						<td>Container element.</td>
					</tr>
					<tr>
						<td>p-splitbutton-button</td>
						<td>Dropdown button.</td>
					</tr>
					<tr>
						<td>p-menu</td>
						<td>Overlay menu.</td>
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
			sources:{
				'options-api': {
					tabName: 'Options API Source',
					content:`
<template>
    <div>
        <Toast />

        <h5>Basic</h5>
        <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items"></SplitButton>

        <h5>Nested</h5>
        <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="nestedItems"></SplitButton>

        <h5>Severities</h5>
        <SplitButton label="Primary" :model="items" class="mb-2"></SplitButton>
        <SplitButton label="Secondary" :model="items" class="p-button-secondary mb-2"></SplitButton>
        <SplitButton label="Success" :model="items" class="p-button-success mb-2"></SplitButton>
        <SplitButton label="Info" :model="items" class="p-button-info mb-2"></SplitButton>
        <SplitButton label="Warning" :model="items" class="p-button-warning mb-2"></SplitButton>
        <SplitButton label="Help" :model="items" class="p-button-help mb-2"></SplitButton>
        <SplitButton label="Danger" :model="items" class="p-button-danger mb-2"></SplitButton>

        <h5>Raised Buttons</h5>
        <SplitButton label="Primary" :model="items" class="p-button-raised mb-2"></SplitButton>
        <SplitButton label="Secondary" :model="items" class="p-button-raised p-button-secondary mb-2"></SplitButton>
        <SplitButton label="Success" :model="items" class="p-button-raised p-button-success mb-2"></SplitButton>
        <SplitButton label="Info" :model="items" class="p-button-raised p-button-info mb-2"></SplitButton>
        <SplitButton label="Warning" :model="items" class="p-button-raised p-button-warning mb-2"></SplitButton>
        <SplitButton label="Help" :model="items" class="p-button-raised p-button-help mb-2"></SplitButton>
        <SplitButton label="Danger" :model="items" class="p-button-raised p-button-danger mb-2"></SplitButton>

        <h5>Rounded Buttons</h5>
        <SplitButton label="Primary" :model="items" class="p-button-rounded mb-2"></SplitButton>
        <SplitButton label="Secondary" :model="items" class="p-button-rounded p-button-secondary mb-2"></SplitButton>
        <SplitButton label="Success" :model="items" class="p-button-rounded p-button-success mb-2"></SplitButton>
        <SplitButton label="Info" :model="items" class="p-button-rounded p-button-info mb-2"></SplitButton>
        <SplitButton label="Warning" :model="items" class="p-button-rounded p-button-warning mb-2"></SplitButton>
        <SplitButton label="Help" :model="items" class="p-button-rounded p-button-help mb-2"></SplitButton>
        <SplitButton label="Danger" :model="items" class="p-button-rounded p-button-danger mb-2"></SplitButton>

        <h5>Text Buttons</h5>
        <SplitButton label="Primary" :model="items" class="p-button-text mb-2"></SplitButton>
        <SplitButton label="Secondary" :model="items" class="p-button-text p-button-secondary mb-2"></SplitButton>
        <SplitButton label="Success" :model="items" class="p-button-text p-button-success mb-2"></SplitButton>
        <SplitButton label="Info" :model="items" class="p-button-text p-button-info mb-2"></SplitButton>
        <SplitButton label="Warning" :model="items" class="p-button-text p-button-warning mb-2"></SplitButton>
        <SplitButton label="Help" :model="items" class="p-button-text p-button-help mb-2"></SplitButton>
        <SplitButton label="Danger" :model="items" class="p-button-text p-button-danger mb-2"></SplitButton>

        <h5>Raised Text Buttons</h5>
        <SplitButton label="Primary" :model="items" class="p-button-raised p-button-text mb-2"></SplitButton>
        <SplitButton label="Secondary" :model="items" class="p-button-raised p-button-text p-button-secondary mb-2"></SplitButton>
        <SplitButton label="Success" :model="items" class="p-button-raised p-button-text p-button-success mb-2"></SplitButton>
        <SplitButton label="Info" :model="items" class="p-button-raised p-button-text p-button-info mb-2"></SplitButton>
        <SplitButton label="Warning" :model="items" class="p-button-raised p-button-text p-button-warning mb-2"></SplitButton>
        <SplitButton label="Help" :model="items" class="p-button-raised p-button-text p-button-help mb-2"></SplitButton>
        <SplitButton label="Danger" :model="items" class="p-button-raised p-button-text p-button-danger mb-2"></SplitButton>

        <h5>Outlined Buttons</h5>
        <SplitButton label="Primary" :model="items" class="p-button-outlined mb-2"></SplitButton>
        <SplitButton label="Secondary" :model="items" class="p-button-outlined p-button-secondary mb-2"></SplitButton>
        <SplitButton label="Success" :model="items" class="p-button-outlined p-button-success mb-2"></SplitButton>
        <SplitButton label="Info" :model="items" class="p-button-outlined p-button-info mb-2"></SplitButton>
        <SplitButton label="Warning" :model="items" class="p-button-outlined p-button-warning mb-2"></SplitButton>
        <SplitButton label="Help" :model="items" class="p-button-outlined p-button-help mb-2"></SplitButton>
        <SplitButton label="Danger" :model="items" class="p-button-outlined p-button-danger mb-2"></SplitButton>

        <h5>Sizes</h5>
        <SplitButton label="Small" :model="items" class="p-button-sm mb-2"></SplitButton>
        <SplitButton label="Normal" :model="items" class="mb-2"></SplitButton>
        <SplitButton label="Large" :model="items" class="p-button-lg mb-2"></SplitButton>

        <h5>Templating</h5>
        <SplitButton :model="items" class="bg-primary border-round">
            <Button @click="save">
                <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1rem" />
                <span class="ml-2 flex align-items-center font-bold">PrimeVue</span>
            </Button>
        </SplitButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                    }
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
            ],
            nestedItems: [
                {
                    label:'File',
                    icon:'pi pi-fw pi-file',
                    items:[
                        {
                            label:'New',
                            icon:'pi pi-fw pi-plus',
                            items:[
                                {
                                    label:'Bookmark',
                                    icon:'pi pi-fw pi-bookmark'
                                },
                                {
                                    label:'Video',
                                    icon:'pi pi-fw pi-video'
                                }
                            ]
                        },
                        {
                            label:'Delete',
                            icon:'pi pi-fw pi-trash'
                        },
                        {
                            separator:true
                        },
                        {
                            label:'Export',
                            icon:'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                        {
                            label:'Left',
                            icon:'pi pi-fw pi-align-left'
                        },
                        {
                            label:'Right',
                            icon:'pi pi-fw pi-align-right'
                        },
                        {
                            label:'Center',
                            icon:'pi pi-fw pi-align-center'
                        },
                        {
                            label:'Justify',
                            icon:'pi pi-fw pi-align-justify'
                        },

                    ]
                },
                {
                    label:'Users',
                    icon:'pi pi-fw pi-user',
                    items:[
                        {
                            label:'New',
                            icon:'pi pi-fw pi-user-plus',

                        },
                        {
                            label:'Delete',
                            icon:'pi pi-fw pi-user-minus',

                        },
                        {
                            label:'Search',
                            icon:'pi pi-fw pi-users',
                            items:[
                                {
                                    label:'Filter',
                                    icon:'pi pi-fw pi-filter',
                                    items:[
                                        {
                                            label:'Print',
                                            icon:'pi pi-fw pi-print'
                                        }
                                    ]
                                },
                                {
                                    icon:'pi pi-fw pi-bars',
                                    label:'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'Events',
                    icon:'pi pi-fw pi-calendar',
                    items:[
                        {
                            label:'Edit',
                            icon:'pi pi-fw pi-pencil',
                            items:[
                                {
                                    label:'Save',
                                    icon:'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    label:'Delete',
                                    icon:'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            label:'Archieve',
                            icon:'pi pi-fw pi-calendar-times',
                            items:[
                                {
                                label:'Remove',
                                icon:'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        }
                    ]
                },
                {
                    separator:true
                },
                {
                    label:'Quit',
                    icon:'pi pi-fw pi-power-off'
                }
            ]
        }
    },
    methods: {
        save() {
            this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
        }
    }
}
<\\/script>

<style lang="scss" scoped>
.p-splitbutton {
    margin-right: .5rem;
}
</style>`		
            },
				'composition-api': {
					tabName: 'Composition API Source',
					content:`
<template>
    <div>
		<Toast />

        <h5>Basic</h5>
		<SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items"></SplitButton>

        <h5>Nested</h5>
        <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="nestedItems"></SplitButton>

        <h5>Severities</h5>
        <SplitButton label="Primary" :model="items" class="mb-2"></SplitButton>
        <SplitButton label="Secondary" :model="items" class="p-button-secondary mb-2"></SplitButton>
        <SplitButton label="Success" :model="items" class="p-button-success mb-2"></SplitButton>
        <SplitButton label="Info" :model="items" class="p-button-info mb-2"></SplitButton>
        <SplitButton label="Warning" :model="items" class="p-button-warning mb-2"></SplitButton>
        <SplitButton label="Help" :model="items" class="p-button-help mb-2"></SplitButton>
        <SplitButton label="Danger" :model="items" class="p-button-danger mb-2"></SplitButton>

        <h5>Raised Buttons</h5>
        <SplitButton label="Primary" :model="items" class="p-button-raised mb-2"></SplitButton>
        <SplitButton label="Secondary" :model="items" class="p-button-raised p-button-secondary mb-2"></SplitButton>
        <SplitButton label="Success" :model="items" class="p-button-raised p-button-success mb-2"></SplitButton>
        <SplitButton label="Info" :model="items" class="p-button-raised p-button-info mb-2"></SplitButton>
        <SplitButton label="Warning" :model="items" class="p-button-raised p-button-warning mb-2"></SplitButton>
        <SplitButton label="Help" :model="items" class="p-button-raised p-button-help mb-2"></SplitButton>
        <SplitButton label="Danger" :model="items" class="p-button-raised p-button-danger mb-2"></SplitButton>

        <h5>Rounded Buttons</h5>
        <SplitButton label="Primary" :model="items" class="p-button-rounded mb-2"></SplitButton>
        <SplitButton label="Secondary" :model="items" class="p-button-rounded p-button-secondary mb-2"></SplitButton>
        <SplitButton label="Success" :model="items" class="p-button-rounded p-button-success mb-2"></SplitButton>
        <SplitButton label="Info" :model="items" class="p-button-rounded p-button-info mb-2"></SplitButton>
        <SplitButton label="Warning" :model="items" class="p-button-rounded p-button-warning mb-2"></SplitButton>
        <SplitButton label="Help" :model="items" class="p-button-rounded p-button-help mb-2"></SplitButton>
        <SplitButton label="Danger" :model="items" class="p-button-rounded p-button-danger mb-2"></SplitButton>

        <h5>Text Buttons</h5>
        <SplitButton label="Primary" :model="items" class="p-button-text mb-2"></SplitButton>
        <SplitButton label="Secondary" :model="items" class="p-button-text p-button-secondary mb-2"></SplitButton>
        <SplitButton label="Success" :model="items" class="p-button-text p-button-success mb-2"></SplitButton>
        <SplitButton label="Info" :model="items" class="p-button-text p-button-info mb-2"></SplitButton>
        <SplitButton label="Warning" :model="items" class="p-button-text p-button-warning mb-2"></SplitButton>
        <SplitButton label="Help" :model="items" class="p-button-text p-button-help mb-2"></SplitButton>
        <SplitButton label="Danger" :model="items" class="p-button-text p-button-danger mb-2"></SplitButton>

        <h5>Raised Text Buttons</h5>
        <SplitButton label="Primary" :model="items" class="p-button-raised p-button-text mb-2"></SplitButton>
        <SplitButton label="Secondary" :model="items" class="p-button-raised p-button-text p-button-secondary mb-2"></SplitButton>
        <SplitButton label="Success" :model="items" class="p-button-raised p-button-text p-button-success mb-2"></SplitButton>
        <SplitButton label="Info" :model="items" class="p-button-raised p-button-text p-button-info mb-2"></SplitButton>
        <SplitButton label="Warning" :model="items" class="p-button-raised p-button-text p-button-warning mb-2"></SplitButton>
        <SplitButton label="Help" :model="items" class="p-button-raised p-button-text p-button-help mb-2"></SplitButton>
        <SplitButton label="Danger" :model="items" class="p-button-raised p-button-text p-button-danger mb-2"></SplitButton>

        <h5>Outlined Buttons</h5>
        <SplitButton label="Primary" :model="items" class="p-button-outlined mb-2"></SplitButton>
        <SplitButton label="Secondary" :model="items" class="p-button-outlined p-button-secondary mb-2"></SplitButton>
        <SplitButton label="Success" :model="items" class="p-button-outlined p-button-success mb-2"></SplitButton>
        <SplitButton label="Info" :model="items" class="p-button-outlined p-button-info mb-2"></SplitButton>
        <SplitButton label="Warning" :model="items" class="p-button-outlined p-button-warning mb-2"></SplitButton>
        <SplitButton label="Help" :model="items" class="p-button-outlined p-button-help mb-2"></SplitButton>
        <SplitButton label="Danger" :model="items" class="p-button-outlined p-button-danger mb-2"></SplitButton>

        <h5>Sizes</h5>
        <SplitButton label="Small" :model="items" class="p-button-sm mb-2"></SplitButton>
        <SplitButton label="Normal" :model="items" class="mb-2"></SplitButton>
        <SplitButton label="Large" :model="items" class="p-button-lg mb-2"></SplitButton>

        <h5>Templating</h5>
        <SplitButton :model="items" class="bg-primary border-round">
            <Button @click="save">
                <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1rem" />
                <span class="ml-2 flex align-items-center font-bold">PrimeVue</span>
            </Button>
        </SplitButton>
    </div>
</template>

<script>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

export default {
    setup() {
		const toast = useToast();
        const items = ref([
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                }
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
        const nestedItems = ref([
            {
                label:'File',
                icon:'pi pi-fw pi-file',
                items:[
                    {
                        label:'New',
                        icon:'pi pi-fw pi-plus',
                        items:[
                            {
                                label:'Bookmark',
                                icon:'pi pi-fw pi-bookmark'
                            },
                            {
                                label:'Video',
                                icon:'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-trash'
                    },
                    {
                        separator:true
                    },
                    {
                        label:'Export',
                        icon:'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label:'Edit',
                icon:'pi pi-fw pi-pencil',
                items:[
                    {
                        label:'Left',
                        icon:'pi pi-fw pi-align-left'
                    },
                    {
                        label:'Right',
                        icon:'pi pi-fw pi-align-right'
                    },
                    {
                        label:'Center',
                        icon:'pi pi-fw pi-align-center'
                    },
                    {
                        label:'Justify',
                        icon:'pi pi-fw pi-align-justify'
                    }
                ]
            },
            {
                label:'Users',
                icon:'pi pi-fw pi-user',
                items:[
                    {
                        label:'New',
                        icon:'pi pi-fw pi-user-plus',
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-user-minus',
                    },
                    {
                        label:'Search',
                        icon:'pi pi-fw pi-users',
                        items:[
                            {
                                label:'Filter',
                                icon:'pi pi-fw pi-filter',
                                items:[
                                    {
                                        label:'Print',
                                        icon:'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon:'pi pi-fw pi-bars',
                                label:'List'
                            }
                        ]
                    }
                ]
            },
            {
                label:'Events',
                icon:'pi pi-fw pi-calendar',
                items:[
                    {
                        label:'Edit',
                        icon:'pi pi-fw pi-pencil',
                        items:[
                            {
                                label:'Save',
                                icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label:'Delete',
                                icon:'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label:'Archieve',
                        icon:'pi pi-fw pi-calendar-times',
                        items:[
                            {
                                label:'Remove',
                                icon:'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                separator:true
            },
            {
                label:'Quit',
                icon:'pi pi-fw pi-power-off'
            }
        ]);
        const save = () => {
            toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
        };
        return {items, nestedItems, save, toast}
    }
}
<\\/script>

<style lang="scss" scoped>
.p-splitbutton {
    margin-right: .5rem;
}
</style>`		
            },
            'browser-source': {
					tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/splitbutton/splitbutton.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>`,
                    content:`<div id="app">
            <p-toast></p-toast>

            <h5>Basic</h5>
            <p-splitbutton label="Save" icon="pi pi-plus" @click="save" :model="items"></p-splitbutton>

            <h5>Nested</h5>
            <p-splitbutton label="Save" icon="pi pi-plus" @click="save" :model="nestedItems"></p-splitbutton>

            <h5>Severities</h5>
            <p-splitbutton label="Primary" :model="items" class="mb-2"></p-splitbutton>
            <p-splitbutton label="Secondary" :model="items" class="p-button-secondary mb-2"></p-splitbutton>
            <p-splitbutton label="Success" :model="items" class="p-button-success mb-2"></p-splitbutton>
            <p-splitbutton label="Info" :model="items" class="p-button-info mb-2"></p-splitbutton>
            <p-splitbutton label="Warning" :model="items" class="p-button-warning mb-2"></p-splitbutton>
            <p-splitbutton label="Help" :model="items" class="p-button-help mb-2"></p-splitbutton>
            <p-splitbutton label="Danger" :model="items" class="p-button-danger mb-2"></p-splitbutton>

            <h5>Raised Buttons</h5>
            <p-splitbutton label="Primary" :model="items" class="p-button-raised mb-2"></p-splitbutton>
            <p-splitbutton label="Secondary" :model="items" class="p-button-raised p-button-secondary mb-2"></p-splitbutton>
            <p-splitbutton label="Success" :model="items" class="p-button-raised p-button-success mb-2"></p-splitbutton>
            <p-splitbutton label="Info" :model="items" class="p-button-raised p-button-info mb-2"></p-splitbutton>
            <p-splitbutton label="Warning" :model="items" class="p-button-raised p-button-warning mb-2"></p-splitbutton>
            <p-splitbutton label="Help" :model="items" class="p-button-raised p-button-help mb-2"></p-splitbutton>
            <p-splitbutton label="Danger" :model="items" class="p-button-raised p-button-danger mb-2"></p-splitbutton>

            <h5>Rounded Buttons</h5>
            <p-splitbutton label="Primary" :model="items" class="p-button-rounded mb-2"></p-splitbutton>
            <p-splitbutton label="Secondary" :model="items" class="p-button-rounded p-button-secondary mb-2"></p-splitbutton>
            <p-splitbutton label="Success" :model="items" class="p-button-rounded p-button-success mb-2"></p-splitbutton>
            <p-splitbutton label="Info" :model="items" class="p-button-rounded p-button-info mb-2"></p-splitbutton>
            <p-splitbutton label="Warning" :model="items" class="p-button-rounded p-button-warning mb-2"></p-splitbutton>
            <p-splitbutton label="Help" :model="items" class="p-button-rounded p-button-help mb-2"></p-splitbutton>
            <p-splitbutton label="Danger" :model="items" class="p-button-rounded p-button-danger mb-2"></p-splitbutton>

            <h5>Text Buttons</h5>
            <p-splitbutton label="Primary" :model="items" class="p-button-text mb-2"></p-splitbutton>
            <p-splitbutton label="Secondary" :model="items" class="p-button-text p-button-secondary mb-2"></p-splitbutton>
            <p-splitbutton label="Success" :model="items" class="p-button-text p-button-success mb-2"></p-splitbutton>
            <p-splitbutton label="Info" :model="items" class="p-button-text p-button-info mb-2"></p-splitbutton>
            <p-splitbutton label="Warning" :model="items" class="p-button-text p-button-warning mb-2"></p-splitbutton>
            <p-splitbutton label="Help" :model="items" class="p-button-text p-button-help mb-2"></p-splitbutton>
            <p-splitbutton label="Danger" :model="items" class="p-button-text p-button-danger mb-2"></p-splitbutton>

            <h5>Raised Text Buttons</h5>
            <p-splitbutton label="Primary" :model="items" class="p-button-raised p-button-text mb-2"></p-splitbutton>
            <p-splitbutton label="Secondary" :model="items" class="p-button-raised p-button-text p-button-secondary mb-2"></p-splitbutton>
            <p-splitbutton label="Success" :model="items" class="p-button-raised p-button-text p-button-success mb-2"></p-splitbutton>
            <p-splitbutton label="Info" :model="items" class="p-button-raised p-button-text p-button-info mb-2"></p-splitbutton>
            <p-splitbutton label="Warning" :model="items" class="p-button-raised p-button-text p-button-warning mb-2"></p-splitbutton>
            <p-splitbutton label="Help" :model="items" class="p-button-raised p-button-text p-button-help mb-2"></p-splitbutton>
            <p-splitbutton label="Danger" :model="items" class="p-button-raised p-button-text p-button-danger mb-2"></p-splitbutton>

            <h5>Outlined Buttons</h5>
            <p-splitbutton label="Primary" :model="items" class="p-button-outlined mb-2"></p-splitbutton>
            <p-splitbutton label="Secondary" :model="items" class="p-button-outlined p-button-secondary mb-2"></p-splitbutton>
            <p-splitbutton label="Success" :model="items" class="p-button-outlined p-button-success mb-2"></p-splitbutton>
            <p-splitbutton label="Info" :model="items" class="p-button-outlined p-button-info mb-2"></p-splitbutton>
            <p-splitbutton label="Warning" :model="items" class="p-button-outlined p-button-warning mb-2"></p-splitbutton>
            <p-splitbutton label="Help" :model="items" class="p-button-outlined p-button-help mb-2"></p-splitbutton>
            <p-splitbutton label="Danger" :model="items" class="p-button-outlined p-button-danger mb-2"></p-splitbutton>

            <h5>Sizes</h5>
            <p-splitbutton label="Small" :model="items" class="p-button-sm mb-2"></p-splitbutton>
            <p-splitbutton label="Normal" :model="items" class="mb-2"></p-splitbutton>
            <p-splitbutton label="Large" :model="items" class="p-button-lg mb-2"></p-splitbutton>

            <h5>Templating</h5>
            <p-splitbutton :model="items" class="bg-primary border-round">
                <p-button @click="save">
                    <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1rem" />
                    <span class="ml-2 flex align-items-center font-bold">PrimeVue</span>
                </p-button>
            </p-splitbutton>
        </div>

        <script>
        const { createApp, ref } = Vue;
        const { useToast } = primevue.usetoast;

        const App = {
            setup() {
            const toast = useToast();
            const items = ref([
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        command: () => {
                        toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                        }
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: () => {
                        toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                        }
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
            const nestedItems = ref([
                {
                    label:'File',
                    icon:'pi pi-fw pi-file',
                    items:[
                    {
                        label:'New',
                        icon:'pi pi-fw pi-plus',
                        items:[
                            {
                                label:'Bookmark',
                                icon:'pi pi-fw pi-bookmark'
                            },
                            {
                                label:'Video',
                                icon:'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-trash'
                    },
                    {
                        separator:true
                    },
                    {
                        label:'Export',
                        icon:'pi pi-fw pi-external-link'
                    }
                    ]
                },
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Left',
                        icon:'pi pi-fw pi-align-left'
                    },
                    {
                        label:'Right',
                        icon:'pi pi-fw pi-align-right'
                    },
                    {
                        label:'Center',
                        icon:'pi pi-fw pi-align-center'
                    },
                    {
                        label:'Justify',
                        icon:'pi pi-fw pi-align-justify'
                    }
                    ]
                },
                {
                    label:'Users',
                    icon:'pi pi-fw pi-user',
                    items:[
                        {
                            label:'New',
                            icon:'pi pi-fw pi-user-plus',
                        },
                        {
                            label:'Delete',
                            icon:'pi pi-fw pi-user-minus',
                        },
                        {
                            label:'Search',
                            icon:'pi pi-fw pi-users',
                            items:[
                                {
                                    label:'Filter',
                                    icon:'pi pi-fw pi-filter',
                                    items:[
                                    {
                                        label:'Print',
                                        icon:'pi pi-fw pi-print'
                                    }
                                    ]
                                },
                                {
                                    icon:'pi pi-fw pi-bars',
                                    label:'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'Events',
                    icon:'pi pi-fw pi-calendar',
                    items:[
                    {
                        label:'Edit',
                        icon:'pi pi-fw pi-pencil',
                        items:[
                            {
                                label:'Save',
                                icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label:'Delete',
                                icon:'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label:'Archieve',
                        icon:'pi pi-fw pi-calendar-times',
                        items:[
                            {
                                label:'Remove',
                                icon:'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                    ]
                },
                {
                    separator:true
                },
                {
                    label:'Quit',
                    icon:'pi pi-fw pi-power-off'
                }
            ]);
            const save = () => {
                toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
            };
            return {items, nestedItems, save, toast}
            },
            components: {
                "p-splitbutton": primevue.splitbutton,
                "p-toast": primevue.toast
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .use(primevue.toastservice)
            .mount("#app");
    <\\/script>

    <style>
    .p-splitbutton {
        margin-right: .5rem;
    }
    </style>`		
                },
            }
		}
	}
}
</script>