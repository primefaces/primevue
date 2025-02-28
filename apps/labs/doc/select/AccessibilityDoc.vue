<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. The select element has a <i>combobox</i> role in addition to <i>aria-haspopup</i> and <i>aria-expanded</i> attributes. If the
            editable option is enabled <i>aria-autocomplete</i> is also added. The relation between the combobox and the popup is created with <i>aria-controls</i> and <i>aria-activedescendant</i> attribute is used to instruct screen reader which
            option to read during keyboard navigation within the popup list.
        </p>
        <p>
            The popup list has an id that refers to the <i>aria-controls</i> attribute of the <i>combobox</i> element and uses <i>listbox</i> as the role. Each list item has an <i>option</i> role, an id to match the <i>aria-activedescendant</i> of
            the input element along with <i>aria-label</i>, <i>aria-selected</i> and <i>aria-disabled</i> attributes.
        </p>

        <p>If filtering is enabled, <i>filterInputProps</i> can be defined to give <i>aria-*</i> props to the filter input element.</p>

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
                        <td>Moves focus to the select element.</td>
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
                        <td>Opens the popup and moves focus to the option whose label starts with the characters being typed, if there is none and select is not editable then first option receives the focus.</td>
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
                        <td>Moves focus to the next focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>tab</i></td>
                        <td>Moves focus to the previous focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.</td>
                    </tr>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Selects the focused option and closes the popup, then moves focus to the select element.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Selects the focused option and closes the popup, then moves focus to the select element.</td>
                    </tr>
                    <tr>
                        <td><i>escape</i></td>
                        <td>Closes the popup, then moves focus to the select element.</td>
                    </tr>
                    <tr>
                        <td><i>down arrow</i></td>
                        <td>Moves focus to the next option, if there is none then visual focus does not change.</td>
                    </tr>
                    <tr>
                        <td><i>up arrow</i></td>
                        <td>Moves focus to the previous option, if there is none then visual focus does not change.</td>
                    </tr>
                    <tr>
                        <td><i>alt</i> + <i>up arrow</i></td>
                        <td>Selects the focused option and closes the popup, then moves focus to the select element.</td>
                    </tr>
                    <tr>
                        <td><i>left arrow</i></td>
                        <td>If the select is editable, removes the visual focus from the current option and moves input cursor to one character left.</td>
                    </tr>
                    <tr>
                        <td><i>right arrow</i></td>
                        <td>If the select is editable, removes the visual focus from the current option and moves input cursor to one character right.</td>
                    </tr>
                    <tr>
                        <td><i>home</i></td>
                        <td>If the select is editable, moves input cursor at the end, if not then moves focus to the first option.</td>
                    </tr>
                    <tr>
                        <td><i>end</i></td>
                        <td>If the select is editable, moves input cursor at the beginning, if not then moves focus to the last option.</td>
                    </tr>
                    <tr>
                        <td><i>pageUp</i></td>
                        <td>Jumps visual focus to first option.</td>
                    </tr>
                    <tr>
                        <td><i>pageDown</i></td>
                        <td>Jumps visual focus to last option.</td>
                    </tr>
                    <tr>
                        <td><i>any printable character</i></td>
                        <td>Moves focus to the option whose label starts with the characters being typed if select is not editable.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Filter Input Keyboard Support</h3>
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
                        <td><i>down arrow</i></td>
                        <td>Moves focus to the next option, if there is none then visual focus does not change.</td>
                    </tr>
                    <tr>
                        <td><i>up arrow</i></td>
                        <td>Moves focus to the previous option, if there is none then visual focus does not change.</td>
                    </tr>
                    <tr>
                        <td><i>left arrow</i></td>
                        <td>Removes the visual focus from the current option and moves input cursor to one character left.</td>
                    </tr>
                    <tr>
                        <td><i>right arrow</i></td>
                        <td>Removes the visual focus from the current option and moves input cursor to one character right.</td>
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
                        <td><i>enter</i></td>
                        <td>Closes the popup and moves focus to the select element.</td>
                    </tr>
                    <tr>
                        <td><i>escape</i></td>
                        <td>Closes the popup and moves focus to the select element.</td>
                    </tr>
                    <tr>
                        <td><i>tab</i></td>
                        <td>Moves focus to the next focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.</td>
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
<select aria-labelledby="dd1" />

<select aria-label="Options" />
`
            }
        };
    }
};
</script>
