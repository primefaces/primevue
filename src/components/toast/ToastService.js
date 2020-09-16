import ToastEventBus from './ToastEventBus';

export default {
    install: (app) => {
        app.config.globalProperties.$toast = {
            add: (message) => {
                ToastEventBus.emit('add', message);
            },
            removeGroup: (group) => {
                ToastEventBus.emit('remove-group', group);
            },
            removeAllGroups: () => {
                ToastEventBus.emit('remove-all-groups');
            }
        };
    }
};