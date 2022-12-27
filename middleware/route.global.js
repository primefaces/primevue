export default defineNuxtRouteMiddleware((to, from) => {
    useNuxtApp().hook('page:finish', () => {
        if (to.path !== from.path && history.state) {
            window.scrollTo(history.state.scroll);
        } else {
            window.scrollTo(0, 0);
        }
    });
});
