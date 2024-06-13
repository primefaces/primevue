<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Dialog component uses <i>dialog</i> role along with <i>aria-labelledby</i> referring to the header element however any attribute is passed to the root element so you may use <i>aria-labelledby</i> to override this default behavior. In
            addition <i>aria-modal</i> is added since focus is kept within the popup.
        </p>
        <p>Trigger element also requires <i>aria-expanded</i> and <i>aria-controls</i> to be handled explicitly.</p>
        <p>
            Close element is a <i>button</i> with an <i>aria-label</i> that refers to the <i>aria.close</i> property of the <NuxtLink to="/configuration/#locale">locale</NuxtLink> API by default, you may use <i>closeButtonProps</i> to customize the
            element and override the default <i>aria-label</i>.
        </p>

        <DocSectionCode :code="code" hideToggleCode hideStackBlitz v-bind="$attrs" />

        <h3>Overlay Keyboard Support</h3>
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
                        <td>Moves focus to the next the focusable element within the dialog if <i>modal</i> is true. Otherwise, the focusable element in the page tab sequence.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>tab</i></td>
                        <td>Moves focus to the previous the focusable element within the dialog if <i>modal</i> is true. Otherwise, the focusable element in the page tab sequence.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>escape</i>
                        </td>
                        <td>Closes the dialog if <i>closeOnEscape</i> is true.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Close Button Keyboard Support</h3>
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
                            <i>enter</i>
                        </td>
                        <td>Closes the dialog.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Closes the dialog.</td>
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
<Button label="Show" icon="pi pi-external-link" @click="visible = true" :aria-controls="visible ? 'dlg' : null" :aria-expanded="visible ? true : false" />

<Dialog id="dlg" header="Header" v-model:visible="visible" :style="{ width: '50vw' }">
    <p>Content</p>
</Dialog>
`
            }
        };
    }
};
</script>
