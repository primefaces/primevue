<template>
    <div class="content-section documentation">
            <TabView>
                <TabPanel header="Documentation">
                    <h3>Import</h3>
<CodeHighlight lang="javascript">
import {Paginator} from 'primereact/paginator';
</CodeHighlight>

                    <h3>Getting Started</h3>
                    <p><i>rows</i> and <i>totalRecords</i> define how many pages the paginator should display. Paginator below has 10 pages.</p>
<CodeHighlight>
&lt;Paginator :rows="10" :totalRecords="100"&gt;&lt;/Paginator&gt;
</CodeHighlight>

                    <h3>Rows Per Page</h3>
                    <p>Number of items per page can be changed by the user using a dropdown if you define rowsPerPageOptions as an array of possible values. In this case, 
                        rows property should also be updated
                    </p>

                    <h3>Template</h3>
                    <p>Paginator elements can be customized using the template property using the predefined keys, default value is 
                    "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown". Here are the available elements that
                    can be placed inside a paginator.</p>
                    
                    <ul>
                        <li>FirstPageLink</li>
                        <li>PrevPageLink</li>
                        <li>PageLinks</li>
                        <li>NextPageLink</li>
                        <li>LastPageLink</li>
                        <li>RowsPerPageDropdown</li>
                        <li>CurrentPageReport</li>
                    </ul>

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
                                    <td>style</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the element.</td>
                                </tr>
                                <tr>
                                    <td>class</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the element.</td>
                                </tr>
                                <tr>
                                    <td>template</td>
                                    <td>string</td>
                                    <td>FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown</td>
                                    <td>Template of the paginator.</td>
                                </tr>
                                <tr>
                                    <td>leftContent</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Content to inject into the left side of the paginator.</td>
                                </tr>
                                <tr>
                                    <td>rightContent</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Content to inject into the right side of the paginator.</td>
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
                                    <td>onPageChange</td>
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
            </TabPanel>
        </TabView>
    </div>
</template>