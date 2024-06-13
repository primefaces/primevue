<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Chip uses the <i>label</i> property as the default <i>aria-label</i>, since any attribute is passed to the root element <i>aria-labelledby</i> or <i>aria-label</i> can be used to override the default behavior. Removable chips have a
            <i>tabindex</i> and focusable with the tab key.
        </p>

        <h3>Keyboard Support</h3>
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
                            <i>backspace</i>
                        </td>
                        <td>Hides removable.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>enter</i>
                        </td>
                        <td>Hides removable.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
