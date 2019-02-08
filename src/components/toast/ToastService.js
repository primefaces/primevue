import ToastEventBus from './ToastEventBus';

const ToastService = {

    install: (Vue) => {
        Vue.prototype.$toast = {
            add: (message) => {
                ToastEventBus.$emit('add', message);
            }
        }
    }
    
};

export default ToastService;