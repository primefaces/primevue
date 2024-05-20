<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            SelectButton component uses hidden native checkbox role for multiple selection and hidden radio role for single selection that is only visible to screen readers. Value to describe the component can be provided via
            <i>aria-labelledby</i> property.
        </p>

        <h3>Keyboard Support</h3>
        <p>Keyboard interaction is derived from the native browser handling of checkboxs in a group.</p>
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
                        <td>Moves focus to the first selected option, if there is none then first option receives the focus.</td>
                    </tr>
                    <tr>
                        <td>
                            <span class="inline-flex flex-col">
                                <i class="mb-1">right arrow</i>
                                <i>up arrow</i>
                            </span>
                        </td>
                        <td>Moves focus to the previous option.</td>
                    </tr>
                    <tr>
                        <td>
                            <span class="inline-flex flex-col">
                                <i class="mb-1">left arrow</i>
                                <i>down arrow</i>
                            </span>
                        </td>
                        <td>Moves focus to the next option.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Toggles the checked state of a button.</td>
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
<span id="label_number">Number</span>
<Slider aria-labelledby="label_number" />

<Slider aria-label="Number" />
`
            }
        };
    }
};
</script>
