export default {
    css: ({ dt }) => `
.p-blockui {
    position: relative;
}

.p-blockui-mask {
    border-radius: ${dt('rounded.base')};
}

.p-blockui-mask.p-component-overlay {
    position: absolute;
}

.p-blockui-mask-document.p-component-overlay {
    position: fixed;
}
    `
};
