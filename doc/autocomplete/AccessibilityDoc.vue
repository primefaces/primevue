<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. The input element has <i>combobox</i> role in addition to
            <i>aria-autocomplete</i>, <i>aria-haspopup</i> and <i>aria-expanded</i> attributes. The relation between the input and the popup is created with <i>aria-controls</i> and <i>aria-activedescendant</i> attribute is used to instruct screen
            reader which option to read during keyboard navigation within the popup list.
        </p>
        <p>In multiple mode, chip list uses <i>listbox</i> role with <i>aria-orientation</i> set to horizontal whereas each chip has the <i>option</i> role with <i>aria-label</i> set to the label of the chip.</p>
        <p>
            The popup list has an id that refers to the <i>aria-controls</i> attribute of the input element and uses <i>listbox</i> as the role. Each list item has <i>option</i> role and an id to match the <i>aria-activedescendant</i> of the input
            element.
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
                        <td>Moves focus to the autocomplete element.</td>
                    </tr>
                    <tr>
                        <td><i>any printable character</i></td>
                        <td>Opens the popup and moves focus to the first option.</td>
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
                        <td>Selects the focused option and closes the popup, then moves focus to the autocomplete element.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Selects the focused option and closes the popup, then moves focus to the autocomplete element.</td>
                    </tr>
                    <tr>
                        <td><i>escape</i></td>
                        <td>Closes the popup, then moves focus to the autocomplete element.</td>
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
                        <td>Selects the focused option and closes the popup, then moves focus to the autocomplete element.</td>
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
                        <td><i>pageUp</i></td>
                        <td>Jumps visual focus to first option.</td>
                    </tr>
                    <tr>
                        <td><i>pageDown</i></td>
                        <td>Jumps visual focus to last option.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Chips Input Keyboard Support</h3>
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
                        <td><i>backspace</i></td>
                        <td>Deletes the previous chip if the input field is empty.</td>
                    </tr>
                    <tr>
                        <td><i>left arrow</i></td>
                        <td>Moves focus to the previous chip if available and input field is empty.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Chip Keyboard Support</h3>
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
                        <td><i>left arrow</i></td>
                        <td>Moves focus to the previous chip if available.</td>
                    </tr>
                    <tr>
                        <td><i>right arrow</i></td>
                        <td>Moves focus to the next chip, if there is none then input field receives the focus.</td>
                    </tr>
                    <tr>
                        <td><i>backspace</i></td>
                        <td>Deletes the chips and adds focus to the input field.</td>
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
<label for="ac1">;Username</label>
<AutoComplete inputId="ac1" />

<span id="ac2">Email</span>
<AutoComplete aria-labelledby="ac2" />

<AutoComplete aria-label="City" />
`
            }
        };
    }
};
</script>
