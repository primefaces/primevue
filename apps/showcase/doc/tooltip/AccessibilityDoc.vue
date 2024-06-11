<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>Tooltip component uses <i>tooltip</i> role and when it becomes visible the generated id of the tooltip is defined as the <i>aria-describedby</i> of the target.</p>

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
                            <i>escape</i>
                        </td>
                        <td>Closes the tooltip when focus is on the target.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
