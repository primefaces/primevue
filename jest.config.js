module.exports = {
    "preset": "@vue/cli-plugin-unit-jest",
    "transform": {
        "^.+\\.vue$": "vue-jest"
    },
    "moduleNameMapper": {
        "^primevue/ripple(.*)$": "<rootDir>/src/components/ripple/Ripple.js",
        "^primevue/tooltip(.*)$": "<rootDir>/src/components/tooltip/Tooltip.js",
        "^primevue/useconfirm(.*)$": "<rootDir>/src/components/useconfirm/UseConfirm.js",
        "^primevue/usetoast(.*)$": "<rootDir>/src/components/usetoast/UseToast.js",
        "^primevue/utils(.*)$": "<rootDir>/src/components/utils/Utils.js",
        "^primevue/api(.*)$": "<rootDir>/src/components/api/Api.js",
        "^primevue/button(.*)$": "<rootDir>/src/components/button/Button.vue",
        "^primevue/inputtext(.*)$": "<rootDir>/src/components/inputtext/InputText.vue",
        "^primevue/dialog(.*)$": "<rootDir>/src/components/dialog/Dialog.vue",
        "^primevue/menu(.*)$": "<rootDir>/src/components/menu/Menu.vue",
        "^primevue/tieredmenu(.*)$": "<rootDir>/src/components/tieredmenu/TieredMenu.vue",
        "^primevue/dropdown(.*)$": "<rootDir>/src/components/dropdown/Dropdown.vue",
        "^primevue/inputnumber(.*)$": "<rootDir>/src/components/inputnumber/InputNumber.vue",
        "^primevue/paginator(.*)$": "<rootDir>/src/components/paginator/Paginator.vue",
        "^primevue/progressbar(.*)$": "<rootDir>/src/components/progressbar/ProgressBar.vue",
        "^primevue/message(.*)$": "<rootDir>/src/components/message/Message.vue",
        "^primevue/tree(.*)$": "<rootDir>/src/components/tree/Tree.vue",
        "^primevue/confirmationeventbus(.*)$": "<rootDir>/src/components/confirmationeventbus/ConfirmationEventBus.js",
        "^primevue/toasteventbus(.*)$": "<rootDir>/src/components/toasteventbus/ToastEventBus.js",
        "^primevue/overlayeventbus(.*)$": "<rootDir>/src/components/overlayeventbus/OverlayEventBus.js",
        "^primevue/terminalservice(.*)$": "<rootDir>/src/components/terminalservice/TerminalService.js",
        "^primevue/virtualscroller(.*)$": "<rootDir>/src/components/virtualscroller/VirtualScroller.vue",
        "^primevue/portal(.*)$": "<rootDir>/src/components/portal/Portal.vue"
    },
    testMatch: [
        "**/src/components/**/*.spec.{j,t}s?(x)"
    ],
    timers: "fake"
}