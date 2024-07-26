<template>
    <section class="landing-hero py-20 px-8 lg:px-20">
        <div class="flex flex-col items-center">
            <h1 class="text-5xl font-bold text-center xl:text-left leading-tight">The Next-Gen UI Suite for <span class="font-bold text-primary">Vue.js</span></h1>
            <p class="text-center mt-0 mb-8 text-surface-500 dark:text-surface-400 font-medium text-xl leading-relaxed lg:px-56">
                Enhance your web applications with PrimeVue's comprehensive suite of customizable, feature-rich UI components. With PrimeVue, turning your development vision into reality has never been easier.
            </p>
            <div class="flex items-center gap-4">
                <PrimeVueNuxtLink to="/setup" class="linkbox linkbox-primary">
                    <span>Get Started </span>
                    <i class="pi pi-arrow-right ml-4"></i>
                </PrimeVueNuxtLink>
                <a href="https://github.com/primefaces/primevue" target="_blank" rel="noopener noreferrer" class="linkbox">
                    <span>Give a Star</span>
                    <i class="pi pi-star-fill ml-4 text-yellow-500"></i>
                </a>
            </div>
        </div>
        <div class="w-full flex lg:hidden items-center justify-center mt-16 mb-4">
            <SelectButton v-model="selectedSampleOption" :options="sampleOptions" optionLabel="title" class="dark:border dark:border-white/20">
                <template #option="slotProps">
                    <i :class="slotProps.option.icon"></i>
                    <div class="hidden sm:flex flex-1 text-sm font-medium leading-5">{{ slotProps.option.title }}</div>
                </template>
            </SelectButton>
        </div>
        <div class="bg-surface-0 border border-black/10 dark:border-white/20 dark:bg-surface-950 w-full rounded-3xl p-0 flex lg:hidden items-start gap-6 overflow-hidden">
            <template v-for="sampleOption of sampleOptions" :key="sampleOption.title">
                <img v-if="selectedSampleOption.title === sampleOption.title" :src="sampleOption.src + (isDark() ? '-dark.jpg' : '.jpg')" class="w-full" />
            </template>
        </div>
        <div class="bg-surface-0 border border-black/10 dark:border-white/20 dark:bg-surface-950 w-full h-[85vh] max-h-[1040px] rounded-3xl p-6 hidden lg:flex lg:mt-20 items-start gap-6 overflow-hidden">
            <div :class="isSlimMenu ? 'w-auto' : 'w-72'" class="rounded-2xl p-5 bg-surface-50 dark:bg-surface-900 h-full flex flex-col justify-between">
                <div :class="isSlimMenu ? 'w-12 flex flex-col items-center' : 'w-auto'">
                    <div class="flex items-center gap-3">
                        <div class="w-11 h-11 border border-primary rounded-xl flex items-center justify-center">
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.65 11.0645L13.1283 10.7253L14.3119 12.4216V17.6803L18.3698 14.2876V8.52002L16.5099 9.19856L14.65 11.0645Z" fill="var(--p-primary-color)" />
                                <path d="M5.18078 11.0645L6.70251 10.7253L5.51894 12.4216V17.6803L1.46098 14.2876V8.52002L3.32088 9.19856L5.18078 11.0645Z" fill="var(--p-primary-color)" />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.02649 12.7634L7.37914 10.7278L8.22455 11.2367H11.6062L12.4516 10.7278L13.8042 12.7634V20.397L12.7898 21.9237L11.6062 23.1111H8.22455L7.04098 21.9237L6.02649 20.397V12.7634Z"
                                    fill="var(--p-primary-color)"
                                />
                                <path d="M14.311 20.9058L16.5091 18.7005V16.4952L14.311 18.3612V20.9058Z" fill="var(--p-primary-color)" />
                                <path d="M5.51868 20.9058L3.32062 18.7005V16.4952L5.51868 18.3612V20.9058Z" fill="var(--p-primary-color)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.578 0.888672H7.7177L6.36505 4.11174L8.56311 10.5579H11.4375L13.4665 4.11174L12.1138 0.888672H10.2543V10.5578H9.578V0.888672Z" fill="var(--p-primary-color)" />
                                <path d="M8.56283 10.5575L1.29232 7.84329L0.277832 3.60242L6.53385 4.11132L8.73191 10.5575H8.56283Z" fill="var(--p-primary-color)" />
                                <path d="M11.4372 10.5575L18.7077 7.84329L19.7222 3.60242L13.2971 4.11132L11.2681 10.5575H11.4372Z" fill="var(--p-primary-color)" />
                                <path d="M13.8041 3.60283L17.3548 3.26356L14.9876 0.888672H12.6205L13.8041 3.60283Z" fill="var(--p-primary-color)" />
                                <path d="M6.02676 3.60283L2.47604 3.26356L4.84318 0.888672H7.21033L6.02676 3.60283Z" fill="var(--p-primary-color)" />
                            </svg>
                        </div>
                        <div :class="isSlimMenu ? 'hidden' : 'block'" class="text-surface-950 dark:text-surface-0 font-medium text-3xl">Prime</div>
                    </div>
                    <div class="mt-10 flex flex-col gap-2">
                        <div
                            v-for="(navItem, index) in sampleAppsSidebarNavs"
                            :key="index"
                            v-tooltip="isSlimMenu ? navItem.title : null"
                            @click="setSelectedSampleAppsSidebarNav(navItem.title)"
                            class="px-4 py-1 flex items-center gap-1 cursor-pointer text-base rounded-lg transition-all select-none"
                            :class="[
                                {
                                    'w-12 justify-center py-4': isSlimMenu,
                                    'w-full': !isSlimMenu
                                },
                                { 'text-muted-color hover:bg-emphasis bg-transparent': selectedSampleAppsSidebarNav !== navItem.title, 'text-primary-contrast bg-primary hover:bg-primary-emphasis': selectedSampleAppsSidebarNav === navItem.title }
                            ]"
                        >
                            <i :class="navItem.icon"></i>
                            <span :class="isSlimMenu ? 'hidden' : 'font-medium leading-8'">・</span>
                            <span :class="isSlimMenu ? 'hidden' : 'font-medium leading-none'">{{ navItem.title }}</span>
                        </div>
                    </div>
                </div>
                <div :class="isSlimMenu ? 'w-12 flex flex-col items-center' : 'w-auto'">
                    <div class="mt-10 flex flex-col gap-2">
                        <div
                            v-if="false"
                            v-tooltip="isSlimMenu ? 'Expanded Mode' : null"
                            class="px-4 py-1 flex items-center gap-1 cursor-pointer text-base rounded-lg transition-all select-none text-muted-color hover:bg-emphasis"
                            :class="[
                                {
                                    'w-12 justify-center py-4': isSlimMenu,
                                    'w-full': !isSlimMenu
                                }
                            ]"
                        >
                            <a @click="toggleSlimMenu" class="cursor-pointer block p-0 m-0 leading-none">
                                <i :class="isSlimMenu ? 'pi pi-window-maximize' : 'pi pi-window-minimize'"></i>
                                <span :class="isSlimMenu ? 'hidden' : 'font-medium leading-8'">・</span>
                                <span :class="isSlimMenu ? 'hidden' : 'font-medium leading-none'"> Slim Mode</span>
                            </a>
                        </div>
                        <div
                            v-for="(navItem, index) in sampleAppsSidebarNavsMore"
                            :key="index"
                            v-tooltip="isSlimMenu ? navItem.title : null"
                            class="px-4 py-1 flex items-center gap-1 cursor-pointer text-base rounded-lg transition-all select-none"
                            :class="[
                                {
                                    'w-12 justify-center py-4': isSlimMenu,
                                    'w-full': !isSlimMenu
                                },
                                { 'text-muted-color hover:bg-emphasis bg-transparent': selectedSampleAppsSidebarNav !== navItem.title, 'text-primary-contrast bg-primary hover:bg-primary-emphasis ': selectedSampleAppsSidebarNav === navItem.title }
                            ]"
                        >
                            <i :class="navItem.icon"></i>
                            <span :class="isSlimMenu ? 'hidden' : 'font-medium leading-8'">・</span>
                            <span :class="isSlimMenu ? 'hidden' : 'font-medium leading-none'">{{ navItem.title }}</span>
                        </div>
                    </div>
                    <Divider />
                    <div :class="isSlimMenu ? 'justify-center' : ' gap-3'" class="flex items-center">
                        <Avatar image="https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png" size="large" shape="circle" class="shrink-0" />
                        <div>
                            <div :class="isSlimMenu ? 'hidden' : 'text-base font-medium text-color leading-5'">Robin Jonas</div>
                            <div :class="isSlimMenu ? 'hidden' : 'text-sm text-muted-color mt-1'">hi@robin.xyz</div>
                        </div>
                    </div>
                </div>
            </div>
            <OverviewApp v-if="selectedSampleAppsSidebarNav === 'Overview'" />
            <ChatApp v-if="selectedSampleAppsSidebarNav === 'Chat'" />
            <MoviesApp v-if="selectedSampleAppsSidebarNav === 'Movies'" />
            <CardsApp v-if="selectedSampleAppsSidebarNav === 'Cards'" />
            <InboxApp v-if="selectedSampleAppsSidebarNav === 'Inbox'" />
            <CustomersApp v-if="selectedSampleAppsSidebarNav === 'Customers'" />
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            sampleAppsSidebarNavs: [
                { icon: 'pi pi-home', title: 'Overview' },
                { icon: 'pi pi-comment', title: 'Chat' },
                { icon: 'pi pi-inbox', title: 'Inbox' },
                { icon: 'pi pi-th-large', title: 'Cards' },
                { icon: 'pi pi-user', title: 'Customers' },
                { icon: 'pi pi-video', title: 'Movies' }
            ],
            sampleAppsSidebarNavsMore: [
                { icon: 'pi pi-flag', title: 'Support' },
                { icon: 'pi pi-cog', title: 'Settings' }
            ],
            selectedSampleAppsSidebarNav: 'Overview',
            isSlimMenu: true,
            isSlimMenuSelected: false,
            sampleOptions: [
                { icon: 'pi pi-home', title: 'Overview', src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/overview' },
                { icon: 'pi pi-comment', title: 'Chat', src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/chat' },
                { icon: 'pi pi-inbox', title: 'Inbox', src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/mail' },
                { icon: 'pi pi-th-large', title: 'Cards', src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/cards' },
                { icon: 'pi pi-user', title: 'Customers', src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/customers' },
                { icon: 'pi pi-video', title: 'Movies', src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/movies' }
            ],
            selectedSampleOption: { icon: 'pi pi-home', title: 'Overview', src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/overview' }
        };
    } /*,
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },*/,
    methods: {
        setSelectedSampleAppsSidebarNav(title) {
            this.selectedSampleAppsSidebarNav = title;
        },
        isDark() {
            return this.$appState.darkTheme;
        },
        handleResize() {
            if (!this.isSlimMenuSelected || window.innerWidth <= 1400) {
                this.isSlimMenu = window.innerWidth <= 1400;
            }
        },
        toggleSlimMenu() {
            this.isSlimMenu = !this.isSlimMenu;
            this.isSlimMenuSelected = this.isSlimMenu;
        }
    }
};
</script>
