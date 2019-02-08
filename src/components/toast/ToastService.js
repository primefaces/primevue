import ToastEventBus from './ToastEventBus';

const ToastService = {

    install: (Vue) => {
        Vue.prototype.$toast = {
            add: (message) => {
                ToastEventBus.$emit('add', message);
            },
            removeGroup: (group) => {
                ToastEventBus.$emit('remove-group', group);
            },
            removeAllGroups: () => {
                ToastEventBus.$emit('remove-all-groups');
            }
        }
    }
    
};

export default ToastService;