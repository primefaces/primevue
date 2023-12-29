<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Accordion header elements have a <i>button</i> role, an <i>aria-label</i> defined using the <i>label</i> property of the menuitem model and <i>aria-controls</i> to define the id of the content section along with <i>aria-expanded</i> for
            the visibility state.
        </p>
        <p>The content of an accordion panel uses <i>region</i> role, defines an id that matches the <i>aria-controls</i> of the header and <i>aria-labelledby</i> referring to the id of the header.</p>

        <p>
            The tree elements has a <i>tree</i> as the role and each menu item has a <i>treeitem</i> role along with <i>aria-label</i> and <i>aria-expanded</i> attributes. The container element of a treenode has the <i>group</i> role. The
            <i>aria-setsize</i>, <i>aria-posinset</i> and <i>aria-level</i> attributes are calculated implicitly and added to each treeitem.
        </p>

        <h3>Header Keyboard Support</h3>
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
                        <td>Moves focus to the next the focusable element in the page tab sequence.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>tab</i></td>
                        <td>Moves focus to the previous the focusable element in the page tab sequence.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>enter</i>
                        </td>
                        <td>Toggles the visibility of the content.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Toggles the visibility of the content.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>down arrow</i>
                        </td>
                        <td>Moves focus to the next header. If focus is on the last header, moves focus to the first header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>up arrow</i>
                        </td>
                        <td>Moves focus to the previous header. If focus is on the first header, moves focus to the last header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>home</i>
                        </td>
                        <td>Moves focus to the first header.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>end</i>
                        </td>
                        <td>Moves focus to the last header.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
