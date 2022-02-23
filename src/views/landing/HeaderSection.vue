<template>
    <section :ref="containerRef" :class="['landing-header pad-section', {'landing-header-active': menuActive}]">
        <span>
            <img :src="'demo/images/primevue-logo-' + `${$appState.darkTheme ? 'light' : 'dark'}` + '.svg'" alt="primevue logo" class="landing-header-logo"/>
        </span>

        <div class="flex align-items-center">
            <nav class="scalein origin-top">
                <ol class="list-none m-0 p-0 flex flex-column lg:flex-row flex-wrap lg:flex-nowrap lg:align-items-center font-semibold">
                    <li class="mr-0 lg:mr-2">
                        <router-link to="/setup">
                            <img src="demo/images/landing/core-icon.svg" alt="primevue core" />
                            <span>Components</span>
                        </router-link>
                    </li>
                    <li class="mr-0 lg:mr-2">
                        <a href="https://www.primefaces.org/primeblocks-vue">
                            <img src="demo/images/landing/blocks-icon.svg" alt="primevue templates" />
                            <span>Blocks</span>
                        </a>
                    </li>
                    <li class="mr-0 lg:mr-2">
                        <a href="https://www.primefaces.org/designer-vue">
                            <img src="demo/images/landing/designer-icon.svg" alt="primevue templates" />
                            <span>Designer</span>
                        </a>
                    </li>
                    <li class="mr-0 lg:mr-2">
                        <a href="https://www.primefaces.org/store/templates.xhtml">
                            <img src="demo/images/landing/templates-icon.svg" alt="primevue templates" />
                            <span>Templates</span>
                        </a>
                    </li>
                </ol>
            </nav>
            <a href="https://github.com/primefaces/primevue" rel="noopener noreferrer" class="linkbox p-0 header-button mr-2 flex align-items-center justify-content-center flex-shrink-0">
                <i class="pi pi-github"></i>
            </a>
            <a href="https://discord.gg/gzKFYnpmCY" rel="noopener noreferrer" class="linkbox p-0 header-button mr-2 flex align-items-center justify-content-center flex-shrink-0">
                <i class="pi pi-discord"></i>
            </a>
            <button type="button" class="linkbox header-button inline-flex align-items-center justify-content-center" @click="toggleTheme">
                <i :class="['pi', {'pi-sun': isDarkTheme(), 'pi-moon': !isDarkTheme()}]"></i>
            </button>
            <button type="button" class="linkbox header-button inline-flex align-items-center justify-content-center lg:hidden ml-2 menu-button" @click="toggleMenuActive" >
                <i class="pi pi-bars"></i>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    emits: ['theme-toggle'],
    data() {
        return {
            menuActive: false
        }
    },
    scrollListener: null,
    container: null,
    mounted() {
        this.bindScrollListener();
    },
    beforeUnmount() {
        if (this.scrollListener) {
            this.unbindScrollListener();
        }
    },
    updated() {
        this.checkSticky();
    },
    methods: {
        isDarkTheme() {
            return this.$appState.darkTheme === true;
        },
        toggleTheme() {
            this.$emit('theme-toggle');
        },
        toggleMenuActive() {
            this.menuActive = !this.menuActive;
        },
        bindScrollListener() {
            if (!this.scrollListener && this.container) {
                this.scrollListener = () => {
                    this.checkSticky();
                }
            }
            window.addEventListener('scroll', this.scrollListener);
        },
        unbindScrollListener() {
            if (this.scrollListener) {
                window.removeEventListener('scroll', this.scrollListener);
                this.scrollListener = null;
            }
        },
        containerRef(el) {
            this.container = el;
        },
        checkSticky() {
            if (window.scrollY > 0)
                this.container.classList.add('landing-header-sticky');
            else
                this.container.classList.remove('landing-header-sticky');
        }
    }
}
</script>