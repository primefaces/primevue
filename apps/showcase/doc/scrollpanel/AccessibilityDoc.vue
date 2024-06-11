<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>Scrollbars of the ScrollPanel has a <i>scrollbar</i> role along with the <i>aria-controls</i> attribute that refers to the id of the scrollable content container and the <i>aria-orientation</i> to indicate the orientation of scrolling.</p>

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
                        <td><i>tab</i></td>
                        <td>Moves focus through the bar.</td>
                    </tr>
                    <tr>
                        <td><i>down arrow</i></td>
                        <td>Scrolls content down when vertical scrolling is available.</td>
                    </tr>
                    <tr>
                        <td><i>up arrow</i></td>
                        <td>Scrolls content up when vertical scrolling is available.</td>
                    </tr>
                    <tr>
                        <td><i>left</i></td>
                        <td>Scrolls content left when horizontal scrolling is available.</td>
                    </tr>
                    <tr>
                        <td><i>right</i></td>
                        <td>Scrolls content right when horizontal scrolling is available.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
