<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. The treeselect element has a <i>combobox</i> role in addition to <i>aria-haspopup</i> and <i>aria-expanded</i> attributes. The
            relation between the combobox and the popup is created with <i>aria-controls</i> that refers to the id of the popup.
        </p>
        <p>
            The popup list has an id that refers to the <i>aria-controls</i> attribute of the <i>combobox</i> element and uses <i>tree</i> as the role. Each list item has a <i>treeitem</i> role along with <i>aria-label</i>, <i>aria-selected</i> and
            <i>aria-expanded</i> attributes. In checkbox selection, <i>aria-checked</i> is used instead of <i>aria-selected</i>. Checkbox and toggle icons are hidden from screen readers as their parent element with <i>treeitem</i> role and attributes
            are used instead for readers and keyboard support. The container element of a treenode has the <i>group</i> role. The <i>aria-setsize</i>, <i>aria-posinset</i> and <i>aria-level</i> attributes are calculated implicitly and added to each
            treeitem.
        </p>
        <DocSectionCode :code="code" hideToggleCode hideStackBlitz v-bind="$attrs" />

        <h3>Closed State Keyboard Support</h3>
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
                        <td><i>tab</i></td>
                        <td>Moves focus to the treeselect element.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Opens the popup and moves visual focus to the selected treenode, if there is none then first treenode receives the focus.</td>
                    </tr>
                    <tr>
                        <td><i>down arrow</i></td>
                        <td>Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Popup Keyboard Support</h3>
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
                        <td><i>tab</i></td>
                        <td>Moves focus to the next focusable element in the page tab sequence.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>tab</i></td>
                        <td>Moves focus to the previous focusable element in the page tab sequence.</td>
                    </tr>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Selects the focused option, closes the popup if selection mode is single.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Selects the focused option, closes the popup if selection mode is single.</td>
                    </tr>
                    <tr>
                        <td><i>escape</i></td>
                        <td>Closes the popup, moves focus to the treeselect element.</td>
                    </tr>
                    <tr>
                        <td><i>down arrow</i></td>
                        <td>Moves focus to the next treenode.</td>
                    </tr>
                    <tr>
                        <td><i>up arrow</i></td>
                        <td>Moves focus to the previous treenode.</td>
                    </tr>
                    <tr>
                        <td><i>right arrow</i></td>
                        <td>If node is closed, opens the node otherwise moves focus to the first child node.</td>
                    </tr>
                    <tr>
                        <td><i>left arrow</i></td>
                        <td>If node is open, closes the node otherwise moves focus to the parent node.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<span id="dd1">Options</span>
<TreeSelect aria-labelledby="dd1" />

<TreeSelect aria-label="Options" />
`
            }
        };
    }
};
</script>
