<template>
    <AppDoc name="PaginatorDemo" :sources="sources" github="paginator/PaginatorDemo.vue">
        <h5>Import via Module</h5>
<pre v-code.script><code>
import Paginator from 'primevue/paginator';

</code></pre>

        <h5>Import via CDN</h5>
<pre v-code><code>
&lt;script src="https://unpkg.com/primevue@^3/core/core.min.js"&gt;&lt;/script&gt;

</code></pre>

        <h5>Getting Started</h5>
        <p><i>rows</i> and <i>totalRecords</i> are the required properties of the Paginator.</p>
<pre v-code><code>
&lt;Paginator :rows="10" :totalRecords="totalItemsCount"&gt;&lt;/Paginator&gt;

</code></pre>

        <h5>Start Index</h5>
        <p><i>first</i> property defines the index of the first item displayed by the paginator.</p>

<pre v-code><code>
&lt;Paginator :first="offset" :rows="10" :totalRecords="totalItemsCount"&gt;&lt;/Paginator&gt;

</code></pre>

        <p>Use the v-model directive to enable two-way binding, this is useful in cases where you need to programmatically control the paginator.</p>
<pre v-code><code>
&lt;Paginator v-model:first="offset" :rows="10" :totalRecords="totalItemsCount"&gt;&lt;/Paginator&gt;

</code></pre>

        <h5>Rows Per Page</h5>
        <p>Number of items per page can be changed by the user using a dropdown with the <i>rowsPerPageOptions</i> property which accepts an array of possible values.</p>
<pre v-code><code>
&lt;Paginator v-model:first="offset" :rows="rows" :totalRecords="totalItemsCount" :rowsPerPageOptions="[10,20,30]"&gt;&lt;/Paginator&gt;

</code></pre>

        <p>As <i>rows</i> also change when the dropdown changes, use the optional v-model directive if you need two-way binding.</p>

<pre v-code><code>
&lt;Paginator v-model:first="offset" v-model:rows="rows" :totalRecords="totalItemsCount" :rowsPerPageOptions="[10,20,30]"&gt;&lt;/Paginator&gt;

</code></pre>

        <h5>Template</h5>
        <p>Paginator elements can be customized using the template property using the predefined keys, default value is
        "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown". Here are the available elements that
        can be placed inside a paginator in any order.</p>

        <ul>
            <li>FirstPageLink</li>
            <li>PrevPageLink</li>
            <li>PageLinks</li>
            <li>NextPageLink</li>
            <li>LastPageLink</li>
            <li>RowsPerPageDropdown</li>
            <li>JumpToPageDropdown</li>
            <li>JumpToPageInput</li>
            <li>CurrentPageReport</li>
        </ul>

        <h5>CurrentPageReport</h5>
        <p>Current page report item in the template displays information about the pagination state. Default value is (&#123;currentPage&#125; of &#123;totalPages&#125;)
            whereas available placeholders are the following;
        </p>
        <ul>
            <li>&#123;currentPage&#125;</li>
            <li>&#123;totalPages&#125;</li>
            <li>&#123;rows&#125;</li>
            <li>&#123;first&#125;</li>
            <li>&#123;last&#125;</li>
            <li>&#123;totalRecords&#125;</li>
        </ul>

        <h5>Custom Content</h5>
        <p>There are two templates available named <i>start</i> and <i>end</i> to add custom content to these locations. Both templates get
            a state object as a slot property to provide the current page, first index and the rows.
        </p>
<pre v-code><code><template v-pre>
&lt;Paginator v-model:first="offset" :rows="10" :totalRecords="totalItemsCount"&gt;
    &lt;template #start="slotProps"&gt;
        Page: &#123;&#123;slotProps.state.page&#125;&#125;
        First: &#123;&#123;slotProps.state.first&#125;&#125;
        Rows: &#123;&#123;slotProps.state.rows&#125;&#125;
    &lt;/template&gt;
    &lt;template #end&gt;
        &lt;Button type="button" icon="pi pi-search" /&gt;
    &lt;/template&gt;
&lt;/Paginator&gt;
</template>
</code></pre>

        <h5>Page Change Event</h5>
        <p>Paginator provides only one event called <i>page</i> that passes all the information about the change event.</p>
<pre v-code><code>
&lt;Paginator :rows="10" :totalRecords="totalItemsCount" @page="onPage($event)"&gt;&lt;/Paginator&gt;

</code></pre>

<pre v-code.script><code>
onPage(event) {
    //event.page: New page number
    //event.first: Index of first record
    //event.rows: Number of rows to display in new page
    //event.pageCount: Total number of pages
}

</code></pre>

        <h5>Properties</h5>
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
                        <td>totalRecords</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Number of total records.</td>
                    </tr>
                    <tr>
                        <td>rows</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Data count to display per page.</td>
                    </tr>
                    <tr>
                        <td>first</td>
                        <td>number</td>
                        <td>0</td>
                        <td>Zero-relative number of the first row to be displayed.</td>
                    </tr>
                    <tr>
                        <td>pageLinkSize</td>
                        <td>number</td>
                        <td>5</td>
                        <td>Number of page links to display.</td>
                    </tr>
                    <tr>
                        <td>rowsPerPageOptions</td>
                        <td>array</td>
                        <td>null</td>
                        <td>Array of integer values to display inside rows per page dropdown.</td>
                    </tr>
                    <tr>
                        <td>template</td>
                        <td>string</td>
                        <td>FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown</td>
                        <td>Template of the paginator.</td>
                    </tr>
                    <tr>
                        <td>currentPageReportTemplate</td>
                        <td>string</td>
                        <td>(&#123;currentPage&#125; of &#123;totalPages&#125;)</td>
                        <td>Template of the current page report element. Available placeholders are
                            &#123;currentPage&#125;,&#123;totalPages&#125;,&#123;rows&#125;,&#123;first&#125;,&#123;last&#125; and &#123;totalRecords&#125;
                        </td>
                    </tr>
                    <tr>
                        <td>alwaysShow</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Whether to show the paginator even there is only one page.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5>Events</h5>
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
                        <td>page</td>
                        <td>event.page: New page number <br/>
                            event.first: Index of first record <br/>
                            event.rows: Number of rows to display in new page <br/>
                            event.pageCount: Total number of pages
                        </td>
                        <td>Callback to invoke when page changes, the event object contains information about the new state.</td>
                    </tr>
                </tbody>
            </table>
        </div>

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
                        <td>state: State of the paginator</td>
                    </tr>
                    <tr>
                        <td>end</td>
                        <td>state: State of the paginator</td>
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
                        <td>p-paginator</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-paginator-first</td>
                        <td>First page element.</td>
                    </tr>
                    <tr>
                        <td>p-paginator-prev</td>
                        <td>Previous page element.</td>
                    </tr>
                    <tr>
                        <td>p-paginator-pages</td>
                        <td>Container of page links.</td>
                    </tr>
                    <tr>
                        <td>p-paginator-page</td>
                        <td>A page link.</td>
                    </tr>
                    <tr>
                        <td>p-paginator-next</td>
                        <td>Next pge element.</td>
                    </tr>
                    <tr>
                        <td>p-paginator-last</td>
                        <td>Last page element.</td>
                    </tr>
                    <tr>
                        <td>p-paginator-rpp-options</td>
                        <td>Rows per page dropdown.</td>
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
        <h5>Basic</h5>
        <Paginator :rows="10" :totalRecords="totalRecords" :rowsPerPageOptions="[10,20,30]"></Paginator>

        <h5>Custom</h5>
        <Paginator v-model:first="first" :rows="1" :totalRecords="totalRecords2"
            template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
            <template #start>
                <Button type="button" icon="pi pi-refresh" @click="reset()"/>
            </template>
            <template #end>
                <Button type="button" icon="pi pi-search" />
            </template>
        </Paginator>

        <div class="image-gallery">
            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"  />
        </div>
	</div>
</template>

<script>
export default {
    data() {
        return {
			first: 0,
            totalRecords: 120,
            totalRecords2: 12
        }
    },
    methods: {
        reset() {
            this.first = 0;
        }
    }
}
<\\/script>

<style scoped>
.image-gallery {
    text-align: center;
    padding: 1rem;
}
</style>`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h5>Basic</h5>
        <Paginator :rows="10" :totalRecords="totalRecords" :rowsPerPageOptions="[10,20,30]"></Paginator>

        <h5>Custom</h5>
        <Paginator v-model:first="first" :rows="1" :totalRecords="totalRecords2"
            template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
            <template #start>
                <Button type="button" icon="pi pi-refresh" @click="reset()"/>
            </template>
            <template #end>
                <Button type="button" icon="pi pi-search" />
            </template>
        </Paginator>

        <div class="image-gallery">
            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"  />
        </div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
		const first = ref(0);
        const totalRecords = ref(120);
        const totalRecords2 = ref(12);
        const reset = () => {
            first.value = 0;
        }

        return { first, totalRecords, totalRecords2, reset }
    }
}
<\\/script>

<style scoped>
.image-gallery {
    text-align: center;
    padding: 1rem;
}
</style>`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    content: `<div id="app">
            <h5>Basic</h5>
            <p-paginator :rows="10" :total-records="totalRecords" :rows-per-page-options="[10,20,30]"></p-paginator>

            <h5>Custom</h5>
            <p-paginator v-model:first="first" :rows="1" :total-records="totalRecords2"
                template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                <template #start>
                    <p-button type="button" icon="pi pi-refresh" @click="reset()"></p-button>
                </template>
                <template #end>
                    <p-button type="button" icon="pi pi-search"></p-button>
                </template>
            </p-paginator>

            <div class="image-gallery">
                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"  />
            </div>
        </div>

        <script type="module">
        const { createApp, ref } = Vue;

        const App = {
            setup() {
                const first = ref(0);
                const totalRecords = ref(120);
                const totalRecords2 = ref(12);
                const reset = () => {
                    first.value = 0;
                }

                return { first, totalRecords, totalRecords2, reset }
            },
            components: {
                "p-paginator": primevue.paginator,
                "p-button": primevue.button
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style scoped>
        .image-gallery {
            text-align: center;
            padding: 1rem;
        }
        </style>`
                }
            }
        }
    }
}
</script>