<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            ConfirmPopup component uses <i>alertdialog</i> role and since any attribute is passed to the root element you may define attributes like <i>aria-label</i> or <i>aria-labelledby</i> to describe the popup contents. In addition
            <i>aria-modal</i> is added since focus is kept within the popup.
        </p>
        <p>
            When <i>require</i> method of the <i>$confirm</i> instance is used and a trigger is passed as a parameter, ConfirmPopup adds <i>aria-expanded</i> state attribute and <i>aria-controls</i> to the trigger so that the relation between the
            trigger and the dialog is defined.
        </p>
        <DocSectionCode :code="code1" hideToggleCode hideStackBlitz v-bind="$attrs" />
        <DocSectionCode :code="code2" hideToggleCode hideStackBlitz v-bind="$attrs" />
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
                        <td>Moves focus to the next the focusable element within the popup.</td>
                    </tr>
                    <tr>
                        <td><i>shift</i> + <i>tab</i></td>
                        <td>Moves focus to the previous the focusable element within the popup.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>escape</i>
                        </td>
                        <td>Closes the popup and moves focus to the trigger.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Buttons Keyboard Support</h3>
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
                        <td>Triggers the action, closes the popup and moves focus to the trigger.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Triggers the action, closes the popup and moves focus to the trigger.</td>
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
            code1: {
                basic: `
<ConfirmPopup id="confirm" aria-label="popup" />

<Button @click="openPopup($event)" label="Confirm" id="confirmButton" :aria-expanded="isVisible" :aria-controls="isVisible ? 'confirm' : null" />
`
            },
            code2: {
                basic: `
<script setup>
const confirm = useConfirm();
const isVisible = ref(false);
const openPopup = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        onShow: () => {
            isVisible.value = true;
        },
        onHide: () => {
            isVisible.value = false;
        }
    });
}
<\/script>
`
            }
        };
    }
};
</script>
