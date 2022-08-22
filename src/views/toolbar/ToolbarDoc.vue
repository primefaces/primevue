<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Toolbar from 'primevue/toolbar';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Toolbar provides <i>start</i> and <i>end</i> templates to place content at these sections.</p>
<CodeHighlight>
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
</CodeHighlight>

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
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/toolbar" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
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