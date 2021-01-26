<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<pre v-code.script>
<code>
import TabMenu from 'primevue/tabmenu';

</code></pre>

                <h5>MenuModel</h5>
                <p>TabMenu uses the common MenuModel API to define the items, visit <router-link to="/menumodel">MenuModel API</router-link> for details.</p>

				<h5>Getting Started</h5>
				<p>TabMenu is integrated with Vue Router and requires a collection of menuitems as its model.</p>
<pre v-code>
<code>
&lt;TabMenu :model="items" /&gt;
&lt;router-view /&gt;

</code></pre>

<pre v-code.script>
<code>
export default {
	data() {
		return {
			items: [
                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/tabmenu'},
                {label: 'Calendar', icon: 'pi pi-fw pi-calendar', to: '/tabmenu/calendar'},
                {label: 'Edit', icon: 'pi pi-fw pi-pencil', to: '/tabmenu/edit'},
                {label: 'Documentation', icon: 'pi pi-fw pi-file', to: '/tabmenu/documentation'},
                {label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/tabmenu/settings'}
            ]
		}
	}
}

</code></pre>

                <h5>Properties</h5>
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
                                <td>p-tabmenu</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-tabmenu-nav</td>
                                <td>List element.</td>
                            </tr>
                            <tr>
                                <td>p-tabmenuitem</td>
                                <td>Menuitem element.</td>
                            </tr>
                            <tr>
                                <td>p-highlight</td>
                                <td>Active menuitem element.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem-icon</td>
                                <td>Icon of a menuitem.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem-text</td>
                                <td>Text of a menuitem.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
                <div class="p-d-flex p-jc-between">
                    <a href="https://github.com/primefaces/primevue/tree/master/src/views/tabmenu" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
                        <span>View on GitHub</span>
                    </a>
                    <LiveEditor name="TabMenuDemo" :sources="sources" :router="true" />
                </div>
<pre v-code>
<code><template v-pre>
&lt;TabMenu :model="items" /&gt;
&lt;router-view /&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
export default {
    data() {
        return {
            items: [
                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/tabmenu'},
                {label: 'Calendar', icon: 'pi pi-fw pi-calendar', to: '/tabmenu/calendar'},
                {label: 'Edit', icon: 'pi pi-fw pi-pencil', to: '/tabmenu/edit'},
                {label: 'Documentation', icon: 'pi pi-fw pi-file', to: '/tabmenu/documentation'},
                {label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/tabmenu/settings'}
            ]
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
                <TabMenu :model="items" />
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Home', 
                    icon: 'pi pi-fw pi-home', 
                    to: '/'
                },
                {
                    label: 'Calendar', 
                    icon: 'pi pi-fw pi-calendar', 
                    to: '/calendar'
                },
                {
                    label: 'Edit', 
                    icon: 'pi pi-fw pi-pencil', 
                    to: '/edit'
                },
                {
                    label: 'Documentation', 
                    icon: 'pi pi-fw pi-file', 
                    to: '/documentation'
                },
                {
                    label: 'Settings', 
                    icon: 'pi pi-fw pi-cog', 
                    to: '/settings'
                }
            ]
        }
    }
}`,
                    style: `<style scoped lang="scss">
::v-deep(.tabmenudemo-content) {
    padding: 2rem 1rem;
}
</style>`
                },
                'pages': [
                    {
                        'name': 'HomeDemo',
                        'template': `<template>
    <div class="tabmenudemo-content">
        <h5>Home Component Content</h5>
    </div>
</template>

<script>
export default {

}`
                    },
                    {
                        'name': 'CalendarDemo',
                        'template': `<template>
    <div class="tabmenudemo-content">
        <h5>Calendar Component Content</h5>
    </div>
</template>

<script>
export default {

}`
                    },
                    {
                        'name': 'EditDemo',
                        'template': `<template>
    <div class="tabmenudemo-content">
        <h5>Edit Component Content</h5>
    </div>
</template>

<script>
export default {

}`
                    },
                    {
                        'name': 'DocumentationDemo',
                        'template': `<template>
    <div class="tabmenudemo-content">
        <h5>Documentation Component Content</h5>
    </div>
</template>

<script>
export default {

}`
                    },
                    {
                        'name': 'SettingsDemo',
                        'template': `<template>
    <div class="tabmenudemo-content">
        <h5>Settings Component Content</h5>
    </div>
</template>

<script>
export default {

}`
                    }
                ]
            }
        }
    },
    components: {
        LiveEditor
    }
}
</script>
