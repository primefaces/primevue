<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. The cascadeselect element has a <i>combobox</i> role in addition to <i>aria-haspopup</i> and <i>aria-expanded</i> attributes.
            The relation between the combobox and the popup is created with <i>aria-controls</i> that refers to the id of the popup.
        </p>
        <p>
            The popup list has an id that refers to the <i>aria-controls</i> attribute of the <i>combobox</i> element and uses <i>tree</i> as the role. Each list item has a <i>treeitem</i> role along with <i>aria-label</i>, <i>aria-selected</i> and
            <i>aria-expanded</i> attributes. The container element of a treenode has the <i>group</i> role. The <i>aria-setsize</i>, <i>aria-posinset</i> and <i>aria-level</i> attributes are calculated implicitly and added to each treeitem.
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
                        <td>Moves focus to the cascadeselect element.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.</td>
                    </tr>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.</td>
                    </tr>
                    <tr>
                        <td><i>down arrow</i></td>
                        <td>Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.</td>
                    </tr>
                    <tr>
                        <td><i>up arrow</i></td>
                        <td>Opens the popup and moves visual focus to the selected option, if there is none then last option receives the focus.</td>
                    </tr>
                    <tr>
                        <td><i>any printable character</i></td>
                        <td>Opens the popup and moves focus to the option whose label starts with the characters being typed, if there is none then first option receives the focus.</td>
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
                        <td>Hides the popup and moves focus to the next tabbable element. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>tab</i></td>
                        <td>Hides the popup and moves focus to the previous tabbable element.</td>
                    </tr>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Selects the focused option and closes the popup.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Selects the focused option and closes the popup.</td>
                    </tr>
                    <tr>
                        <td><i>escape</i></td>
                        <td>Closes the popup, moves focus to the cascadeselect element.</td>
                    </tr>
                    <tr>
                        <td><i>down arrow</i></td>
                        <td>Moves focus to the next option.</td>
                    </tr>
                    <tr>
                        <td><i>up arrow</i></td>
                        <td>Moves focus to the previous option.</td>
                    </tr>
                    <tr>
                        <td><i>alt</i> + <i>up arrow</i></td>
                        <td>Selects the focused option and closes the popup, then moves focus to the cascadeselect element.</td>
                    </tr>
                    <tr>
                        <td><i>right arrow</i></td>
                        <td>If option is closed, opens the option otherwise moves focus to the first child option.</td>
                    </tr>
                    <tr>
                        <td><i>left arrow</i></td>
                        <td>If option is open, closes the option otherwise moves focus to the parent option.</td>
                    </tr>
                    <tr>
                        <td><i>home</i></td>
                        <td>Moves input cursor at the end, if not then moves focus to the first option.</td>
                    </tr>
                    <tr>
                        <td><i>end</i></td>
                        <td>Moves input cursor at the beginning, if not then moves focus to the last option.</td>
                    </tr>
                    <tr>
                        <td><i>any printable character</i></td>
                        <td>Moves focus to the option whose label starts with the characters being typed.</td>
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
<span id="dd1"></span>Options</span>
<CascadeSelect aria-labelledby="dd1" />

<CascadeSelect aria-label="Options" />
`
            }
        };
    }
};
</script>
