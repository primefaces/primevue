<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Specification does not cover a color picker <a href="https://github.com/w3c/aria/issues/930">yet</a> and using a semantic native color picker is not consistent across browsers so currently component is not compatible with screen readers.
            In the upcoming versions, text fields will be introduced below the slider section to be able to pick a color using accessible text boxes in hsl, rgba and hex formats.
        </p>

        <h3>Closed State Keyboard Support of Popup ColorPicker</h3>
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
                        <td>Moves focus to the color picker button.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Opens the popup and moves focus to the color slider.</td>
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
                        <td><i>enter</i></td>
                        <td>Selects the color and closes the popup.</td>
                    </tr>
                    <tr>
                        <td><i>space</i></td>
                        <td>Selects the color and closes the popup.</td>
                    </tr>
                    <tr>
                        <td><i>escape</i></td>
                        <td>Closes the popup, moves focus to the input.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Color Picker Slider</h3>
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
                        <td><i>arrow keys</i></td>
                        <td>Changes color.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Hue Slider</h3>
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
                            <span class="inline-flex flex-col">
                                <i class="mb-1">up arrow</i>
                                <i>down arrow</i>
                            </span>
                        </td>
                        <td>Changes hue.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
