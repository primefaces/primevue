<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>MenuModel</h1>
                <p>PrimeVue menu components share a common api to specify the menuitems and submenus.</p>
            </div>
        </div>

        <div class="content-section documentation">
            <h5">MenuItem</h5>
                <p>Core of the API is the MenuItem class that defines various options such as the label, icon and children of an item in a menu.</p>
<CodeHighlight lang="js">
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
                </CodeHighlight>

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
                                <td>string</td>
                                <td>null</td>
                                <td>Text of the item.</td>
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
                                <td>Path of the route.</td>
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
                                <td>boolean</td>
                                <td>false</td>
                                <td>When set as true, disables the menuitem.</td>
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
                        </tbody>
                    </table>
                </div>

                <h5>Command</h5>
                <p>The function to invoke when an item is clicked is defined using the command property.</p>
<CodeHighlight lang="js">
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
</CodeHighlight>

                <h5>Navigation</h5>
                <p>Navigation is specified using <i>url</i> property for external links or using <i>to</i> property for internal routing.</p>
<CodeHighlight lang="js">
const items = [
    {
        label: 'Internal',
        icon: 'pi pi-plus',
        to: '/fileupload'
    },
    {
        label: 'External',
        icon: 'pi pi-check',
        url: 'https://www.primefaces.org/primevue'
    }
];
</CodeHighlight>

            <h5>Visibility</h5>
            <p>It is a common case to hide certain items based on conditions such as user roles, <i>visible</i> property is available
            to implement such cases by supporting functions that returns booleans or simple booleans.</p>
<CodeHighlight lang="js">
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
</CodeHighlight>
        </div>
    </div>
</template>

<script>