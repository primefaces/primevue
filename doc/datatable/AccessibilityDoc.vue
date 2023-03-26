<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            DataTable uses a <i>table</i> element whose attributes can be extended with the <i>tableProps</i> option. This property allows passing aria roles and attributes like <i>aria-label</i> and <i>aria-describedby</i> to define the table for
            readers. Default role of the table is <i>table</i>. Header, body and footer elements use <i>rowgroup</i>, rows use <i>row</i> role, header cells have <i>columnheader</i> and body cells use <i>cell</i> roles. Sortable headers utilizer
            <i>aria-sort</i> attribute either set to "ascending" or "descending".
        </p>

        <p>
            Built-in checkbox and radiobutton components for row selection use <i>checkbox</i> and <i>radiobutton</i>. The label to describe them is retrieved from the <i>aria.selectRow</i> and <i>aria.unselectRow</i> properties of the
            <NuxtLink to="/configuration/#locale">locale</NuxtLink> API. Similarly header checkbox uses <i>selectAll</i> and <i>unselectAll</i> keys. When a row is selected, <i>aria-selected</i> is set to true on a row.
        </p>

        <p>
            The element to expand or collapse a row is a <i>button</i> with <i>aria-expanded</i> and <i>aria-controls</i> properties. Value to describe the buttons is derived from <i>aria.expandRow</i> and <i>aria.collapseRow</i> properties of the
            <NuxtLink to="/configuration/#locale">locale</NuxtLink> API.
        </p>

        <p>
            The filter menu button use <i>aria.showFilterMenu</i> and <i>aria.hideFilterMenu</i> properties as <i>aria-label</i> in addition to the <i>aria-haspopup</i>, <i>aria-expanded</i> and <i>aria-controls</i> to define the relation between the
            button and the overlay. Popop menu has <i>dialog</i> role with <i>aria-modal</i> as focus is kept within the overlay. The operator dropdown use <i>aria.filterOperator</i> and filter constraints dropdown use
            <i>aria.filterConstraint</i> properties. Buttons to add rules on the other hand utilize <i>aria.addRule</i> and <i>aria.removeRule</i> properties. The footer buttons similarly use <i>aria.clear</i> and <i>aria.apply</i> properties.
            <i>filterInputProps</i> of the Column component can be used to define aria labels for the built-in filter components, if a custom component is used with templating you also may define your own aria labels as well.
        </p>

        <p>
            Editable cells use custom templating so you need to manage aria roles and attributes manually if required. The row editor controls are button elements with <i>aria.editRow</i>, <i>aria.cancelEdit</i> and <i>aria.saveEdit</i> used for the
            <i>aria-label</i>.
        </p>

        <p>Paginator is a standalone component used inside the DataTable, refer to the <PrimeVueNuxtLink to="/paginator">paginator</PrimeVueNuxtLink> for more information about the accessibility features.</p>

        <h3>Keyboard Support</h3>
        <p>Any button element inside the DataTable used for cases like filter, row expansion, edit are tabbable and can be used with <i>space</i> and <i>enter</i> keys.</p>

        <h3>Sortable Headers Keyboard Support</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <i>tab</i>
                        </td>
                        <td>Moves through the headers.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>enter</i>
                        </td>
                        <td>Sorts the column.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Sorts the column.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Filter Menu Keyboard Support</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <i>tab</i>
                        </td>
                        <td>Moves through the elements inside the popup.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>escape</i>
                        </td>
                        <td>Hides the popup.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Selection Keyboard Support</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <i>tab</i>
                        </td>
                        <td>Moves focus to the first selected row, if there is none then first row receives the focus.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>up arrow</i>
                        </td>
                        <td>Moves focus to the previous row.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>down arrow</i>
                        </td>
                        <td>Moves focus to the next row.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>enter</i>
                        </td>
                        <td>Toggles the selected state of the focused row depending on the metaKeySelection setting.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Toggles the selected state of the focused row depending on the metaKeySelection setting.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>home</i>
                        </td>
                        <td>Moves focus to the first row.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>end</i>
                        </td>
                        <td>Moves focus to the last row.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>down arrow</i></td>
                        <td>Moves focus to the next row and toggles the selection state.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>up arrow</i></td>
                        <td>Moves focus to the previous row and toggles the selection state.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>space</i></td>
                        <td>Selects the rows between the most recently selected row and the focused row.</td>
                    </tr>
                    <tr>
                        <td><i>control</i> + <i>shift</i> + <i>home</i></td>
                        <td>Selects the focused rows and all the options up to the first one.</td>
                    </tr>
                    <tr>
                        <td><i>control</i> + <i>shift</i> + <i>end</i></td>
                        <td>Selects the focused rows and all the options down to the last one.</td>
                    </tr>
                    <tr>
                        <td><i>control</i> + <i>a</i></td>
                        <td>Selects all rows.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
