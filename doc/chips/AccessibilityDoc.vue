<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. Chip list uses <i>listbox</i> role with <i>aria-orientation</i> set to
            horizontal whereas each chip has the <i>option</i> role with <i>aria-label</i> set to the label of the chip.
        </p>

        <DocSectionCode :code="code" hideToggleCode hideCodeSandbox hideStackBlitz v-bind="$attrs" />

        <h3>Input Field Keyboard Support</h3>
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
                        <td>Moves focus to the input element</td>
                    </tr>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Adds a new chips using the input field value.</td>
                    </tr>
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
<label for="chips1">Tags</label>
<Chips inputId="chips1" />

<span id="chips2">Tags</span>
<Chips aria-labelledby="chips2" />

<Chips aria-label="Tags" />
`
            }
        };
    }
};
</script>
