<template>
    <div ref="container" class="layout-topbar">
        <div class="layout-topbar-inner">
            <div class="layout-topbar-logo-container">
                <PrimeVueNuxtLink to="/" class="layout-topbar-logo" aria-label="PrimeVue logo">
                    <svg width="109" height="40" viewBox="0 0 109 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-22">
                        <path
                            d="M108.25 17.9919C108.25 18.1881 108.194 18.3423 108.082 18.4544C107.97 18.5665 107.816 18.6226 107.619 18.6226H104.13C103.99 18.6226 103.919 18.6927 103.919 18.8328V25.4339C103.919 26.8354 104.424 27.5362 105.433 27.5362H106.989C107.185 27.5362 107.339 27.5922 107.451 27.7044C107.563 27.8165 107.619 27.9706 107.619 28.1669V33.5486C107.619 33.9411 107.409 34.1653 106.989 34.2214C105.896 34.3055 104.844 34.3475 103.835 34.3475C101.285 34.3475 99.4066 33.9551 98.2013 33.1702C96.996 32.3854 96.3793 30.8998 96.3513 28.7134V18.8328C96.3513 18.6927 96.2812 18.6226 96.1411 18.6226H93.8707C93.6744 18.6226 93.5203 18.5665 93.4082 18.4544C93.296 18.3423 93.24 18.1881 93.24 17.9919V12.9465C93.24 12.7503 93.296 12.5961 93.4082 12.484C93.5203 12.3719 93.6744 12.3158 93.8707 12.3158H96.1411C96.2812 12.3158 96.3513 12.2457 96.3513 12.1056V7.06018C96.3513 6.86397 96.4074 6.7098 96.5195 6.59768C96.6316 6.48556 96.7858 6.4295 96.982 6.4295H103.289C103.485 6.4295 103.639 6.48556 103.751 6.59768C103.863 6.7098 103.919 6.86397 103.919 7.06018V12.1056C103.919 12.2457 103.99 12.3158 104.13 12.3158H107.619C107.816 12.3158 107.97 12.3719 108.082 12.484C108.194 12.5961 108.25 12.7503 108.25 12.9465V17.9919Z"
                            fill="var(--p-primary-color)"
                        />
                        <path
                            d="M83.9099 34.1793C83.7137 34.1793 83.5595 34.1233 83.4474 34.0111C83.3353 33.899 83.2792 33.7448 83.2792 33.5486V5.37837C83.2792 5.18216 83.3353 5.02799 83.4474 4.91587C83.5595 4.80375 83.7137 4.74769 83.9099 4.74769H90.553C90.7492 4.74769 90.9034 4.80375 91.0155 4.91587C91.1276 5.02799 91.1837 5.18216 91.1837 5.37837V33.5486C91.1837 33.7448 91.1276 33.899 91.0155 34.0111C90.9034 34.1233 90.7492 34.1793 90.553 34.1793H83.9099Z"
                            fill="var(--p-primary-color)"
                        />
                        <path
                            d="M70.1772 34.5157C67.5144 34.5157 65.2579 33.8009 63.408 32.3714C61.586 30.9418 60.3807 29.0078 59.7921 26.5691C59.5118 25.5601 59.3716 24.4389 59.3716 23.2055C59.3716 21.8321 59.5398 20.5847 59.8762 19.4635C60.5489 17.137 61.7822 15.315 63.5761 13.9976C65.3981 12.6522 67.6125 11.9795 70.2193 11.9795C72.8261 11.9795 75.0124 12.6522 76.7783 13.9976C78.5722 15.315 79.8056 17.109 80.4783 19.3794C80.8147 20.5567 80.9828 21.804 80.9828 23.1214C80.9828 24.1866 80.8707 25.2517 80.6465 26.3169C80.0578 28.8396 78.8385 30.8437 76.9885 32.3293C75.1666 33.7869 72.8961 34.5157 70.1772 34.5157ZM70.1772 27.7464C70.906 27.7464 71.4946 27.5081 71.9431 27.0316C72.3916 26.5271 72.6999 25.8684 72.8681 25.0555C72.9802 24.5229 73.0363 23.8923 73.0363 23.1635C73.0363 22.5188 72.9662 21.8741 72.8261 21.2294C72.4056 19.5756 71.5227 18.7487 70.1772 18.7487C68.7757 18.7487 67.8928 19.5756 67.5284 21.2294C67.3882 21.7059 67.3182 22.3506 67.3182 23.1635C67.3182 23.8923 67.3742 24.5229 67.4863 25.0555C67.9068 26.8494 68.8037 27.7464 70.1772 27.7464Z"
                            fill="var(--p-primary-color)"
                        />
                        <path
                            d="M44.2682 34.1793C44.1 34.1793 43.9459 34.1373 43.8057 34.0532C43.6656 33.9411 43.5815 33.8009 43.5534 33.6327L35.2705 5.46246C35.2425 5.4064 35.2285 5.33632 35.2285 5.25224C35.2285 4.91587 35.4247 4.74769 35.8171 4.74769H43.0068C43.3712 4.74769 43.5955 4.92989 43.6796 5.29428L47.8841 23.0373C47.9121 23.1495 47.9542 23.2055 48.0102 23.2055C48.0663 23.2055 48.1083 23.1495 48.1364 23.0373L52.2147 5.29428C52.2988 4.92989 52.5231 4.74769 52.8875 4.74769H59.909C60.1332 4.74769 60.2874 4.81777 60.3715 4.95792C60.4836 5.07004 60.5116 5.23822 60.4556 5.46246L52.0886 33.6327C52.0606 33.8009 51.9765 33.9411 51.8363 34.0532C51.6962 34.1373 51.542 34.1793 51.3738 34.1793H44.2682Z"
                            fill="var(--p-primary-color)"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.043 15.0334L8.03101 16.6142H10.7377L11.713 0.106103C11.7195 -0.00249146 11.5724 -0.0417968 11.5238 0.0555237L4.043 15.0334ZM2.55847 23.2515H0.100129C0.0258101 23.2515 -0.0225409 23.1733 0.0106666 23.1068L2.30586 18.5114L4.69286 17.9483L2.55847 21.1927V23.2515ZM17.4689 29.2273L10.9293 39.2178C10.8699 39.3085 10.7288 39.2531 10.747 39.1462L13.4481 23.2515H4.44864V21.8287H4.46887L6.90673 17.9375L8.42408 18.9076H13.5137L15.031 17.9375L17.4689 21.8287V29.2273ZM20.0244 17.8162H24.7534C24.8329 17.8162 24.8806 17.9044 24.8371 17.9709L19.3793 26.3088V21.1927L17.2449 17.9483L19.3793 18.595L20.0244 17.8162Z"
                            fill="var(--p-primary-color)"
                        />
                    </svg>
                </PrimeVueNuxtLink>
            </div>

            <ul class="topbar-items">
                <li v-if="false">
                    <div id="docsearch"></div>
                </li>
                <li>
                    <a href="https://github.com/primefaces/primevue-tailwind" target="_blank" rel="noopener noreferrer" class="topbar-item">
                        <i class="pi pi-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/gzKFYnpmCY" target="_blank" rel="noopener noreferrer" class="topbar-item">
                        <i class="pi pi-discord"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/orgs/primefaces/discussions" target="_blank" rel="noopener noreferrer" class="topbar-item">
                        <i class="pi pi-comments"></i>
                    </a>
                </li>
                <li>
                    <button type="button" class="topbar-item" @click="toggleDarkMode">
                        <i :class="['pi', { 'pi-moon': layoutState.darkTheme, 'pi-sun': !layoutState.darkTheme }]"></i>
                    </button>
                </li>
                <li class="relative">
                    <button
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                        type="button"
                        class="topbar-item config-item"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <AppConfigurator />
                </li>
                <li class="menu-button">
                    <button type="button" class="topbar-item" @click="onMenuButtonClick" aria-haspopup aria-label="Menu">
                        <i class="pi pi-bars"></i>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const emit = defineEmits(['menubutton-click']);

const { layoutState, darkModeToggleListener } = useLayout();

const container = ref(null);
let scrollListener = null;

const onMenuButtonClick = (event) => {
    emit('menubutton-click', event);
};

const toggleDarkMode = () => {
    darkModeToggleListener();
};

const bindScrollListener = () => {
    if (!scrollListener) {
        if (container.value) {
            scrollListener = () => {
                if (window.scrollY > 0) container.value.classList.add('layout-topbar-sticky');
                else container.value.classList.remove('layout-topbar-sticky');
            };
        }
    }

    window.addEventListener('scroll', scrollListener);
};

const unbindScrollListener = () => {
    if (scrollListener) {
        window.removeEventListener('scroll', scrollListener);
        scrollListener = null;
    }
};

onMounted(() => {
    bindScrollListener();
});

onBeforeUnmount(() => {
    if (scrollListener) {
        unbindScrollListener();
    }
});
</script>
