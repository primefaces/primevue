<template>
    <div ref="container" class="layout-topbar">
        <div class="layout-topbar-inner">
            <div class="layout-topbar-logo-container">
                <PrimeVueNuxtLink to="/" class="layout-topbar-logo" aria-label="PrimeVue logo">
                    <svg width="109" height="40" viewBox="0 0 109 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-22">
                        <path
                            d="M102.304 16.4701C102.304 16.6034 102.25 16.7234 102.144 16.8301C102.064 16.9101 101.957 16.9501 101.824 16.9501H97.9837C97.8503 16.9501 97.7837 17.0168 97.7837 17.1501V25.6301C97.7837 26.5101 97.957 27.1634 98.3037 27.5901C98.677 28.0168 99.2637 28.2301 100.064 28.2301H101.384C101.517 28.2301 101.624 28.2834 101.704 28.3901C101.81 28.4701 101.864 28.5768 101.864 28.7101V32.5101C101.864 32.8034 101.704 32.9768 101.384 33.0301C100.264 33.0834 99.4637 33.1101 98.9837 33.1101C96.7703 33.1101 95.117 32.7501 94.0237 32.0301C92.9303 31.2834 92.3703 29.8968 92.3437 27.8701V17.1501C92.3437 17.0168 92.277 16.9501 92.1437 16.9501H89.8637C89.7303 16.9501 89.6103 16.9101 89.5037 16.8301C89.4237 16.7234 89.3837 16.6034 89.3837 16.4701V12.9101C89.3837 12.7768 89.4237 12.6701 89.5037 12.5901C89.6103 12.4834 89.7303 12.4301 89.8637 12.4301H92.1437C92.277 12.4301 92.3437 12.3634 92.3437 12.2301V7.47011C92.3437 7.33678 92.3837 7.23011 92.4637 7.15011C92.5703 7.04345 92.6903 6.99011 92.8237 6.99011H97.3037C97.437 6.99011 97.5437 7.04345 97.6237 7.15011C97.7303 7.23011 97.7837 7.33678 97.7837 7.47011V12.2301C97.7837 12.3634 97.8503 12.4301 97.9837 12.4301H101.824C101.957 12.4301 102.064 12.4834 102.144 12.5901C102.25 12.6701 102.304 12.7768 102.304 12.9101V16.4701Z"
                            fill="var(--p-primary-color)"
                        />
                        <path
                            d="M81.218 32.9901C81.0847 32.9901 80.9647 32.9501 80.858 32.8701C80.778 32.7634 80.738 32.6434 80.738 32.5101V5.47011C80.738 5.33678 80.778 5.23011 80.858 5.15011C80.9647 5.04345 81.0847 4.99011 81.218 4.99011H85.898C86.0314 4.99011 86.138 5.04345 86.218 5.15011C86.3247 5.23011 86.378 5.33678 86.378 5.47011V32.5101C86.378 32.6434 86.3247 32.7634 86.218 32.8701C86.138 32.9501 86.0314 32.9901 85.898 32.9901H81.218Z"
                            fill="var(--p-primary-color)"
                        />
                        <path
                            d="M67.5524 33.3101C65.3124 33.3101 63.3924 32.7234 61.7924 31.5501C60.1924 30.3768 59.0991 28.7768 58.5124 26.7501C58.1391 25.4968 57.9524 24.1368 57.9524 22.6701C57.9524 21.0968 58.1391 19.6834 58.5124 18.4301C59.1257 16.4568 60.2324 14.9101 61.8324 13.7901C63.4324 12.6701 65.3524 12.1101 67.5924 12.1101C69.7791 12.1101 71.6457 12.6701 73.1924 13.7901C74.7391 14.8834 75.8324 16.4168 76.4724 18.3901C76.8991 19.7234 77.1124 21.1234 77.1124 22.5901C77.1124 24.0301 76.9257 25.3768 76.5524 26.6301C75.9657 28.7101 74.8724 30.3501 73.2724 31.5501C71.6991 32.7234 69.7924 33.3101 67.5524 33.3101ZM67.5524 28.4701C68.4324 28.4701 69.1791 28.2034 69.7924 27.6701C70.4057 27.1368 70.8457 26.4034 71.1124 25.4701C71.3257 24.6168 71.4324 23.6834 71.4324 22.6701C71.4324 21.5501 71.3257 20.6034 71.1124 19.8301C70.8191 18.9234 70.3657 18.2168 69.7524 17.7101C69.1391 17.2034 68.3924 16.9501 67.5124 16.9501C66.6057 16.9501 65.8457 17.2034 65.2324 17.7101C64.6457 18.2168 64.2191 18.9234 63.9524 19.8301C63.7391 20.4701 63.6324 21.4168 63.6324 22.6701C63.6324 23.8701 63.7257 24.8034 63.9124 25.4701C64.1791 26.4034 64.6191 27.1368 65.2324 27.6701C65.8724 28.2034 66.6457 28.4701 67.5524 28.4701Z"
                            fill="var(--p-primary-color)"
                        />
                        <path
                            d="M43.8505 32.9901C43.5839 32.9901 43.4105 32.8568 43.3305 32.5901L35.0905 5.55011L35.0505 5.39011C35.0505 5.12345 35.1972 4.99011 35.4905 4.99011H40.5305C40.8239 4.99011 41.0105 5.12345 41.0905 5.39011L46.4105 24.9101C46.4372 24.9901 46.4772 25.0301 46.5305 25.0301C46.5839 25.0301 46.6239 24.9901 46.6505 24.9101L51.8905 5.39011C51.9705 5.12345 52.1572 4.99011 52.4505 4.99011H57.3705C57.5305 4.99011 57.6505 5.04345 57.7305 5.15011C57.8105 5.25678 57.8239 5.39011 57.7705 5.55011L49.4105 32.5901C49.3305 32.8568 49.1572 32.9901 48.8905 32.9901H43.8505Z"
                            fill="var(--p-primary-color)"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.043 15.0334L8.03101 16.6142H10.7377L11.713 0.106103C11.7195 -0.00249147 11.5724 -0.0417968 11.5238 0.0555237L4.043 15.0334ZM2.55847 23.2515H0.100129C0.0258101 23.2515 -0.0225409 23.1733 0.0106666 23.1068L2.30586 18.5114L4.69286 17.9483L2.55847 21.1927V23.2515ZM17.4689 29.2273L10.9293 39.2178C10.8699 39.3085 10.7288 39.2531 10.747 39.1462L13.4481 23.2515H4.44864V21.8287H4.46887L6.90673 17.9375L8.42408 18.9076H13.5137L15.031 17.9375L17.4689 21.8287V29.2273ZM20.0244 17.8162H24.7534C24.8329 17.8162 24.8806 17.9044 24.8371 17.9709L19.3793 26.3088V21.1927L17.2449 17.9483L19.3793 18.595L20.0244 17.8162Z"
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
                    <a href="https://github.com/primefaces/primevue/tree/master/apps/volt/volt" target="_blank" rel="noopener noreferrer" class="topbar-item">
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
                <li class="menu-button" v-if="showMenuButton">
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

defineProps({
    showMenuButton: {
        type: Boolean,
        default: true
    }
});

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
