<template>
    <div>
        <div class="content-section documentation">
            <h1>MenuModel</h1>
            <p>PrimeVue menu components share a common api to specify the menuitems and submenus.</p>

            <h1>Router</h1>
            <p>Menu components require <a href="https://router.vuejs.org">Vue-Router</a> as a dependency so make sure the router is installed in your application.</p>

            <h5>MenuItem</h5>
                <p>Core of the API is the MenuItem class that defines various options such as the label, icon and children of an item in a menu.</p>
<pre v-code.script><code>
const items: [
    {
        label: 'Options',
        items: [{label: 'New', icon: 'pi pi-fw pi-plus', command:() => {} },
                {label: 'Delete', icon: 'pi pi-fw pi-trash', url: 'http://primetek.com.tr'}]
    },
    {
        label: 'Account',
        items: [{label: 'Options', icon: 'pi pi-fw pi-cog', to: '/options'},
                {label: 'Sign Out', icon: 'pi pi-fw pi-power-off', to: '/logout'} ]
    }
];
                
</code></pre>

                <p>MenuItem provides the following properties. Note that not all of them may be utilized by the corresponding menu component.</p>

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
                                <td>string | function</td>
                                <td>null</td>
                                 <td>Property name or getter function to use as the label of an item.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icon of the item.</td>
                            </tr>
                            <tr>
                                <td>to</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Route configuration such as path, name and parameters.</td>
                            </tr>
                            <tr>
                                <td>command</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to execute when item is clicked.</td>
                            </tr>
                            <tr>
                                <td>url</td>
                                <td>string</td>
                                <td>null</td>
                                <td>External link to navigate when item is clicked.</td>
                            </tr>
                            <tr>
                                <td>items</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of children menuitems.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean/function</td>
                                <td>false</td>
                                <td>A boolean or a function to return a boolean to specify if the item is disabled.</td>
                            </tr>
                            <tr>
                                <td>visible</td>
                                <td>boolean/function</td>
                                <td>true</td>
                                <td>A boolean or a function to return a boolean to specify if the item is visible.</td>
                            </tr>
                            <tr>
                                <td>target</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Specifies where to open the linked document.</td>
                            </tr>
                            <tr>
                                <td>separator</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines the item as a separator.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the menuitem.</td>
                            </tr>
                            <tr>
                                <td>class</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the menuitem.</td>
                            </tr>
                            <tr>
                                <td>key</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Unique identifier of an item.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h5>Command</h5>
                <p>The function to invoke when an item is clicked is defined using the command property.</p>
<pre v-code.script><code>
const items = [
    {
        label: 'New',
        icon: 'pi pi-plus',
        command: (event) => {
            // event.originalEvent: Browser event
            // event.item: Menuitem instance
        }
    }
];

</code></pre>

                <h5>Navigation</h5>
                <p>Navigation is specified using <i>url</i> property for external links or using <i>to</i> property for internal routing.</p>
<pre v-code.script><code>
const items = [
    {
        label: 'Route Path',
        icon: 'pi pi-plus',
        to: '/fileupload'
    },
    {
        label: 'Named Route',
        icon: 'pi pi-plus',
        to: {name: 'fileupload'}
    },
    {
        label: 'External',
        icon: 'pi pi-check',
        url: 'https://www.primefaces.org/primevue'
    }
];

</code></pre>

            <h5>Visibility</h5>
            <p>It is a common case to hide certain items based on conditions such as user roles, <i>visible</i> property is available
            to implement such cases by supporting functions that returns booleans or simple booleans.</p>
<pre v-code.script><code>
const items = [
    {
        label: 'Remove',
        visible: false
    },
    {
        label: 'Delete',
        visible: () => this.isUserAdmin()
    }
];

</code></pre>

            <h5>Separator</h5>
            <p>Separators are special menuitems whose sole purpose is to divide menuitems. A separator is simply configured as below.</p>
<pre v-code.script><code>
const items = [
    {
        label: 'Item 1'
    },
    {
        separator: true
    },
    {
        label: 'Item 2'
    }
];

</code></pre>

        </div>
    </div>
</template>