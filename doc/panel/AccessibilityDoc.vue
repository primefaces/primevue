<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Toggleable panels use a content toggle button at the header that has <i>aria-controls</i> to define the id of the content section along with <i>aria-expanded</i> for the visibility state. The value to read the button defaults to the value
            of the <i>header</i> property and can be customized by defining an <i>aria-label</i> or <i>aria-labelledby</i> via the <i>toggleButtonProps</i> property.
        </p>
        <p>The content uses <i>region</i>, defines an id that matches the <i>aria-controls</i> of the content toggle button and <i>aria-labelledby</i> referring to the id of the header.</p>

        <h3>Content Toggle Button Keyboard Support</h3>
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
                        <td>Moves focus to the next the focusable element in the page tab sequence.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>tab</i></td>
                        <td>Moves focus to the previous the focusable element in the page tab sequence.</td>
                    </tr>
                    <tr>
                        <td><i>enter</i></td>
                        <td>Toggles the visibility of the content.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Toggles the visibility of the content.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
