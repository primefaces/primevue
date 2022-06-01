'use strict';

var ToastEventBus = require('primevue/toasteventbus');
var usetoast = require('primevue/usetoast');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ToastEventBus__default = /*#__PURE__*/_interopDefaultLegacy(ToastEventBus);

var ToastService = {
    install: (app) => {
        const ToastService = {
            add: (message) => {
                ToastEventBus__default["default"].emit('add', message);
            },
            removeGroup: (group) => {
                ToastEventBus__default["default"].emit('remove-group', group);
            },
            removeAllGroups: () => {
                ToastEventBus__default["default"].emit('remove-all-groups');
            }
        };
        app.config.globalProperties.$toast = ToastService;
        app.provide(usetoast.PrimeVueToastSymbol, ToastService);
    }
};

module.exports = ToastService;
