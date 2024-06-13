function createService() {
    const allHandlers = new Map();

    return {
        on(type, handler) {
            let handlers = allHandlers.get(type);

            if (!handlers) handlers = [handler];
            else handlers.push(handler);

            allHandlers.set(type, handlers);

            return this;
        },

        off(type, handler) {
            let handlers = allHandlers.get(type);

            if (handlers) {
                handlers.splice(handlers.indexOf(handler) >>> 0, 1);
            }

            return this;
        },

        emit(type, evt) {
            let handlers = allHandlers.get(type);

            if (handlers) {
                handlers.slice().map((handler) => {
                    handler(evt);
                });
            }
        }
    };
}

const ThemeService = createService();

export default ThemeService;
