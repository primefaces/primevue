<template>
    <div class="content-section documentation">
        <TabView>
            <TabPanel header="Documentation">
                <h3>Import</h3>
<CodeHighlight lang="javascript">
import Paginator from 'primevue/paginator';
</CodeHighlight>

                <h3>Getting Started</h3>
                <p><i>first</i>, <i>rows</i> and <i>totalRecords</i> are the required properties of the Paginator.</p>
<CodeHighlight>
&lt;Paginator :first.sync="first" :rows="10" :totalRecords="totalItemsCount"&gt;&lt;/Paginator&gt;
</CodeHighlight>

                <h3>Start Offset</h3>
                <p><i>first</i> property defines the index of the first item displayed by the paginator and should be used with the sync operator. 
                This is useful in cases where the paginator needs to be controlled programmatically such as resetting or navigating to a certain page.</p>
<CodeHighlight>
&lt;Paginator :first.sync="offset" :rows="10" :totalRecords="totalItemsCount"&gt;&lt;/Paginator&gt;
</CodeHighlight>

                <h3>Rows Per Page</h3>
                <p>Number of items per page can be changed by the user using a dropdown with the <i>rowsPerPageOptions</i> property which accepts an array of possible values.
                As <i>rows</i> also change when the dropdown changes, use the sync operator for two-way binding.</p>
<CodeHighlight>
&lt;Paginator :first.sync="offset" :rows.sync="rows" :totalRecords="totalItemsCount" :rowsPerPageOptions="[10,20,30]"&gt;&lt;/Paginator&gt;
</CodeHighlight>

                <h3>Template</h3>
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
                    <li>CurrentPageReport</li>
                </ul>

<CodeHighlight>
&lt;Paginator :first.sync="offset" :rows="10" :totalRecords="totalItemsCount" 
            template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"&gt;&lt;/Paginator&gt;
</CodeHighlight>

                <h3>Custom Content</h3>
                <p>There are two slots available named "left" and "right" to add custom content to these locations. Both slots get
                    a state object as a slot property to provide the current page, first index and the rows.
                </p>
<CodeHighlight>
<template v-pre>
&lt;Paginator :first.sync="offset" :rows="10" :totalRecords="totalItemsCount"&gt;
    &lt;template #left=&quot;slotProps&quot;&gt;
        Page: {{slotProps.state.page}}
        First: {{slotProps.state.first}}
        Rows: {{slotProps.state.rows}}
    &lt;/template&gt;
    &lt;template #right&gt;
        &lt;Button type=&quot;button&quot; icon=&quot;pi pi-search&quot; /&gt;
    &lt;/template&gt;
&lt;/Paginator&gt;
</template>
</CodeHighlight>

                <h3>Page Change Event</h3>
                <p>Paginator provides only one event called <i>page-change</i> that passes all the information about the change event.</p>
<CodeHighlight>
&lt;Paginator :first.sync="offset" :rows="10" :totalRecords="totalItemsCount"  @page-change="onPage($event)"&gt;&lt;/Paginator&gt;
</CodeHighlight>

<CodeHighlight lang="javascript">
onPage(event) {
    //event.page: New page number
    //event.first: Index of first record
    //event.rows: Number of rows to display in new page
    //event.page: Index of the new page
    //event.pageCount: Total number of pages 
}
</CodeHighlight>

                <h3>Properties</h3>
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
                                <td>({currentPage} of {totalPages})</td>
                                <td>Template of the current page report element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Events</h3>
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
                                <td>page-change</td>
                                <td>event.page: New page number <br/>
                                    event.first: Index of first record <br/>
                                    event.rows: Number of rows to display in new page <br/>
                                    event.page: Index of the new page <br/>
                                    event.pageCount: Total number of pages 
                                </td>
                                <td>Callback to invoke when page changes, the event object contains information about the new state.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

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

                    <h3>Dependencies</h3>
                    <p>None.</p>
                </div>
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/paginator" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>
<CodeHighlight>
&lt;template&gt;
    &lt;div&gt;
        &lt;div class=&quot;content-section introduction&quot;&gt;
            &lt;div class=&quot;feature-intro&quot;&gt;
                &lt;h1&gt;Paginator&lt;/h1&gt;
                &lt;p&gt;Paginator is a generic component to display content in paged format.&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class=&quot;content-section implementation&quot;&gt;
            &lt;h3 class=&quot;first&quot;&gt;Default&lt;/h3&gt;
            &lt;Paginator :first.sync=&quot;first&quot; :rows.sync=&quot;rows&quot; :totalRecords=&quot;totalRecords&quot; :rowsPerPageOptions=&quot;[10,20,30]&quot;&gt;&lt;/Paginator&gt;

            &lt;h3&gt;Custom Template&lt;/h3&gt;
            &lt;Paginator :first=&quot;first2&quot; :rows=&quot;rows2&quot; :totalRecords=&quot;totalRecords2&quot; @page-change=&quot;onPageChangeCustom($event)&quot; template=&quot;FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink&quot;&gt;
                &lt;template #left&gt;
                    &lt;Button type=&quot;button&quot; icon=&quot;pi pi-refresh&quot; /&gt;
                &lt;/template&gt;
                &lt;template #right&gt;
                    &lt;Button type=&quot;button&quot; icon=&quot;pi pi-search&quot; /&gt;
                &lt;/template&gt;
            &lt;/Paginator&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
</CodeHighlight>

<CodeHighlight lang="javascript">
export default {
    data() {
        return {
            first: 0,
            rows: 10,
            totalRecords: 50,
            first2: 0,
            rows2: 1,
            totalRecords2: 12
        }
    },
    methods: {
        onPageChangeCustom(event) {
            this.first2 = event.first;
            this.rows2 = event.rows;
        }
    }
}
</CodeHighlight>
            </TabPanel>
        </TabView>
    </div>
</template>