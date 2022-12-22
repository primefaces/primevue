export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.$router.options.scrollBehavior = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0, behaviour: 'smooth' });
            }, 100);
        });
    };
});
