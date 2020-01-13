<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h3>Import</h3>
<CodeHighlight lang="javascript">
import Breadcrumb from 'primevue/breadcrumb';
</CodeHighlight>

                <h3>MenuModel</h3>
                <p>Breadcrumb uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

				<h3>Getting Started</h3>
				<p>Breadcrumb requires a collection of menuitems as its model and a home item.</p>
<CodeHighlight>
&lt;Breadcrumb :home="home" :model="items" /&gt;
</CodeHighlight>

<CodeHighlight lang="js">
export default {
    data() {
        return {
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label:'Categories'},
                {label:'Sports'},
                {label:'Football'},
                {label:'Countries'},
                {label:'Spain'},
                {label:'F.C. Barcelona'},
                {label:'Squad'},
                {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
            ]
        }
    }
}
</CodeHighlight>

                <h3>Properties</h3>
                <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                                <td>model</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of menuitems.</td>
                            </tr>
                            <tr>
                                <td>home</td>
                                <td>menuitem</td>
                                <td>null</td>
                                <td>Configuration for the home icon.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h3>Styling</h3>
				<p>Following is the list of structural style classes, for theming classes visit <router-link to="/menumodel">theming</router-link> page.</p>
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
                                <td>p-breadcrumb</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem</td>
                                <td>Menuitem element.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem-text</td>
                                <td>Label of a menuitem.</td>
                            </tr>
                            <tr>
                                <td>p-breadcrumb-chevron</td>
                                <td>Chevron element.</td>
                            </tr>
                        </tbody>
					</table>
				</div>

				<h3>Dependencies</h3>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/master/src/views/menu" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;Breadcrumb :home="home" :model="items" /&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label:'Categories'},
                {label:'Sports'},
                {label:'Football'},
                {label:'Countries'},
                {label:'Spain'},
                {label:'F.C. Barcelona'},
                {label:'Squad'},
                {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
            ]
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>