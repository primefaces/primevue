<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Toolbar from 'primevue/toolbar';
</CodeHighlight>

				<h3>Getting Started</h3>
				<p>Toolbar provides <i>left</i> and <i>right</i> templates to place content at these sections.</p>
<CodeHighlight>
&lt;Toolbar&gt;
	&lt;template slot="left"&gt;
		&lt;Button label="New" icon="pi pi-plus" style="margin-right: .5em" /&gt;
		&lt;Button label="Upload" icon="pi pi-upload" class="p-button-success" /&gt;
		&lt;i class="pi pi-bars p-toolbar-separator" style="margin-right: .5em" /&gt;
		&lt;SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"&gt;&lt;/SplitButton&gt;
	&lt;/template&gt;

	&lt;template slot="right"&gt;
		&lt;Button icon="pi pi-search" style="margin-right: .5em" /&gt;
		&lt;Button icon="pi pi-calendar" class="p-button-success" style="margin-right: .5em" /&gt;
		&lt;Button icon="pi pi-times" class="p-button-danger" /&gt;
	&lt;/template&gt;
&lt;/Toolbar&gt;
</CodeHighlight>

				<h3>Styling</h3>
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

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/toolbar" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;Toolbar&gt;
    &lt;template slot="left"&gt;
        &lt;Button label="New" icon="pi pi-plus" style="margin-right: .5em" /&gt;
        &lt;Button label="Upload" icon="pi pi-upload" class="p-button-success" /&gt;
        &lt;i class="pi pi-bars p-toolbar-separator" style="margin-right: .5em" /&gt;
        &lt;Button label="Save" icon="pi pi-check" class="p-button-warning" /&gt;
    &lt;/template&gt;

    &lt;template slot="right"&gt;
        &lt;Button icon="pi pi-search" style="margin-right: .5em" /&gt;
        &lt;Button icon="pi pi-calendar" class="p-button-success" style="margin-right: .5em" /&gt;
        &lt;Button icon="pi pi-times" class="p-button-danger" /&gt;
    &lt;/template&gt;
&lt;/Toolbar&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
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
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>