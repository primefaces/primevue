export default {
    css: ({ dt }) => `
.p-blockui {
    border-radius: ${dt('rounded.base')};
}
.p-blockui-container {
    position: relative;
}

.p-blockui.p-component-overlay {
    position: absolute;
}

.p-blockui-document.p-component-overlay {
    position: fixed;
}
    `
};
