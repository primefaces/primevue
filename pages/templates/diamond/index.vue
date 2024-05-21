<template>
    <div class="diamond template">
        <TemplateHero :templateHeroData="templateHeroData">
            <template #logo>
                <svg width="190" height="40" viewBox="0 0 190 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1048_115190)">
                        <path
                            d="M38.5201 15.0553C38.5201 15.0021 38.5201 15.0021 38.5727 14.9489C38.6252 14.8958 38.6252 14.7894 38.6252 14.7363C38.6252 14.6299 38.6252 14.5236 38.5727 14.4172L38.5201 14.3641C38.5201 14.3109 38.4676 14.3109 38.4676 14.2577L30.5847 3.62406C30.5321 3.5709 30.4796 3.51773 30.427 3.46456C30.3745 3.41139 30.3219 3.41139 30.2168 3.35822H30.1643C30.1117 3.35822 30.0066 3.30505 29.9541 3.30505H8.93301C8.88046 3.30505 8.77535 3.30505 8.7228 3.35822H8.67025C8.61769 3.35822 8.56514 3.41139 8.46003 3.46456C8.40748 3.51773 8.35493 3.5709 8.30238 3.62406L0.419484 14.2577C0.419484 14.3109 0.366932 14.3109 0.366932 14.3641L0.314379 14.4172C0.314379 14.4704 0.261827 14.5236 0.261827 14.5236C0.209274 14.6831 0.209274 14.7894 0.261827 14.9489C0.261827 15.0021 0.261827 15.0021 0.314379 15.0553C0.314379 15.1084 0.366932 15.1084 0.366932 15.1616L0.419484 15.2148L18.8129 36.4821H18.918C18.9706 36.5353 18.9706 36.5353 19.0231 36.5885L19.0757 36.6416L19.1808 36.6948H19.2333C19.3384 36.748 19.4961 36.748 19.6537 36.6948H19.7063L19.8114 36.6416L19.864 36.5885C19.9165 36.5353 19.9691 36.5353 19.9691 36.4821L20.0216 36.429L38.415 15.1616L38.4676 15.1084C38.5201 15.1084 38.5201 15.0553 38.5201 15.0553ZM10.1943 15.4806H28.6402L19.4435 34.1959L10.1943 15.4806ZM19.4435 5.16595L28.0622 13.8856H10.8249L19.4435 5.16595ZM36.2604 13.8856H30.7423V6.44199L36.2604 13.8856ZM29.1658 4.84694V12.769L21.3354 4.84694H29.1658ZM9.7213 12.769V4.84694H17.5516L9.7213 12.769ZM8.14472 6.44199V13.8856H2.62669L8.14472 6.44199ZM8.46003 15.4806L16.0276 30.74L2.78435 15.4806H8.46003ZM22.912 30.74L30.4796 15.4806H36.1553L22.912 30.74Z"
                            :fill="fillColor"
                        />
                    </g>
                    <path
                        d="M52.7389 30C52.3111 30 51.9806 29.8931 51.7473 29.6792C51.5334 29.4458 51.4264 29.1153 51.4264 28.6875V10.75C51.4264 10.3222 51.5334 10.0014 51.7473 9.78748C51.9806 9.55415 52.3111 9.43748 52.7389 9.43748H58.3681C61.6931 9.43748 64.2598 10.3125 66.0681 12.0625C67.8764 13.8125 68.7806 16.3597 68.7806 19.7042C68.7806 21.3764 68.5473 22.8542 68.0806 24.1375C67.6334 25.4014 66.9625 26.4708 66.0681 27.3458C65.1736 28.2208 64.0848 28.8819 62.8014 29.3292C61.5181 29.7764 60.0403 30 58.3681 30H52.7389ZM53.8181 27.9583H58.1931C59.5542 27.9583 60.7306 27.7833 61.7223 27.4333C62.7334 27.0833 63.5695 26.5681 64.2306 25.8875C64.9111 25.2069 65.4167 24.3514 65.7473 23.3208C66.0778 22.2708 66.2431 21.0653 66.2431 19.7042C66.2431 16.9625 65.5723 14.9111 64.2306 13.55C62.8889 12.1694 60.8764 11.4792 58.1931 11.4792H53.8181V27.9583ZM74.2694 30.2042C73.8805 30.2042 73.5791 30.0972 73.3652 29.8833C73.1708 29.65 73.0736 29.3389 73.0736 28.95V10.4875C73.0736 10.0792 73.1708 9.76804 73.3652 9.55415C73.5791 9.34026 73.8805 9.23332 74.2694 9.23332C74.6583 9.23332 74.95 9.34026 75.1444 9.55415C75.3583 9.76804 75.4652 10.0792 75.4652 10.4875V28.95C75.4652 29.3389 75.368 29.65 75.1736 29.8833C74.9791 30.0972 74.6777 30.2042 74.2694 30.2042ZM80.1271 30.2042C79.816 30.2042 79.5632 30.1361 79.3688 30C79.1938 29.8444 79.0868 29.65 79.048 29.4167C79.0285 29.1639 79.0868 28.8819 79.223 28.5708L87.2438 10.3125C87.4188 9.9236 87.623 9.65137 87.8563 9.49582C88.1091 9.32082 88.3813 9.23332 88.673 9.23332C88.9646 9.23332 89.2271 9.32082 89.4605 9.49582C89.7132 9.65137 89.9174 9.9236 90.073 10.3125L98.123 28.5708C98.2785 28.8819 98.3369 29.1639 98.298 29.4167C98.2785 29.6694 98.1813 29.8639 98.0063 30C97.8313 30.1361 97.5882 30.2042 97.2771 30.2042C96.9271 30.2042 96.6452 30.1167 96.4313 29.9417C96.2174 29.7472 96.0424 29.475 95.9063 29.125L93.748 24.1375L94.9146 24.75H82.373L83.5688 24.1375L81.4396 29.125C81.2646 29.4944 81.0799 29.7667 80.8855 29.9417C80.691 30.1167 80.4382 30.2042 80.1271 30.2042ZM88.6438 12.2375L83.948 23.2917L83.248 22.7375H94.0396L93.398 23.2917L88.7021 12.2375H88.6438ZM102.98 30.2042C102.63 30.2042 102.357 30.1069 102.163 29.9125C101.969 29.6986 101.871 29.4069 101.871 29.0375V10.4C101.871 10.0111 101.969 9.71943 102.163 9.52498C102.357 9.33054 102.63 9.23332 102.98 9.23332C103.291 9.23332 103.534 9.30137 103.709 9.43748C103.903 9.55415 104.078 9.75832 104.234 10.05L112.226 25.1H111.351L119.313 10.05C119.469 9.75832 119.634 9.55415 119.809 9.43748C119.984 9.30137 120.237 9.23332 120.567 9.23332C120.898 9.23332 121.16 9.33054 121.355 9.52498C121.549 9.71943 121.646 10.0111 121.646 10.4V29.0375C121.646 29.4069 121.549 29.6986 121.355 29.9125C121.18 30.1069 120.907 30.2042 120.538 30.2042C120.188 30.2042 119.916 30.1069 119.721 29.9125C119.527 29.6986 119.43 29.4069 119.43 29.0375V12.6458H120.13L112.838 26.325C112.702 26.5778 112.556 26.7625 112.401 26.8792C112.264 26.9764 112.06 27.025 111.788 27.025C111.516 27.025 111.302 26.9667 111.146 26.85C110.991 26.7333 110.855 26.5583 110.738 26.325L103.359 12.6167H104.059V29.0375C104.059 29.4069 103.962 29.6986 103.767 29.9125C103.592 30.1069 103.33 30.2042 102.98 30.2042ZM135.398 30.2625C133.492 30.2625 131.829 29.8347 130.41 28.9792C129.01 28.1042 127.921 26.8792 127.143 25.3042C126.385 23.7292 126.006 21.8625 126.006 19.7042C126.006 18.0708 126.22 16.6125 126.648 15.3292C127.095 14.0264 127.727 12.9278 128.543 12.0333C129.36 11.1194 130.342 10.4194 131.489 9.93332C132.656 9.42776 133.959 9.17498 135.398 9.17498C137.342 9.17498 139.014 9.60276 140.414 10.4583C141.834 11.3139 142.923 12.5292 143.681 14.1042C144.459 15.6597 144.848 17.5167 144.848 19.675C144.848 21.3083 144.624 22.7764 144.177 24.0792C143.729 25.3819 143.098 26.4903 142.281 27.4042C141.464 28.3181 140.473 29.0278 139.306 29.5333C138.159 30.0194 136.856 30.2625 135.398 30.2625ZM135.398 28.1333C136.875 28.1333 138.12 27.8028 139.131 27.1417C140.161 26.4806 140.949 25.5181 141.493 24.2542C142.038 22.9903 142.31 21.4736 142.31 19.7042C142.31 17.0403 141.707 14.9792 140.502 13.5208C139.316 12.043 137.614 11.3042 135.398 11.3042C133.959 11.3042 132.724 11.6347 131.693 12.2958C130.682 12.9569 129.904 13.9194 129.36 15.1833C128.816 16.4278 128.543 17.9347 128.543 19.7042C128.543 22.3486 129.146 24.4194 130.352 25.9167C131.557 27.3944 133.239 28.1333 135.398 28.1333ZM150.261 30.2042C149.891 30.2042 149.61 30.1069 149.415 29.9125C149.221 29.6986 149.123 29.3972 149.123 29.0083V10.4583C149.123 10.0694 149.221 9.76804 149.415 9.55415C149.61 9.34026 149.862 9.23332 150.173 9.23332C150.485 9.23332 150.708 9.29165 150.844 9.40832C151 9.50554 151.175 9.69026 151.369 9.96248L164.086 26.9083H163.386V10.4C163.386 10.0305 163.483 9.7486 163.678 9.55415C163.872 9.34026 164.154 9.23332 164.523 9.23332C164.873 9.23332 165.136 9.34026 165.311 9.55415C165.505 9.7486 165.603 10.0305 165.603 10.4V29.0375C165.603 29.4069 165.515 29.6986 165.34 29.9125C165.185 30.1069 164.951 30.2042 164.64 30.2042C164.348 30.2042 164.115 30.1458 163.94 30.0292C163.765 29.9125 163.58 29.7278 163.386 29.475L150.698 12.5292H151.369V29.0083C151.369 29.3972 151.272 29.6986 151.078 29.9125C150.883 30.1069 150.611 30.2042 150.261 30.2042ZM172.026 30C171.598 30 171.268 29.8931 171.034 29.6792C170.821 29.4458 170.714 29.1153 170.714 28.6875V10.75C170.714 10.3222 170.821 10.0014 171.034 9.78748C171.268 9.55415 171.598 9.43748 172.026 9.43748H177.655C180.98 9.43748 183.547 10.3125 185.355 12.0625C187.164 13.8125 188.068 16.3597 188.068 19.7042C188.068 21.3764 187.834 22.8542 187.368 24.1375C186.921 25.4014 186.25 26.4708 185.355 27.3458C184.461 28.2208 183.372 28.8819 182.089 29.3292C180.805 29.7764 179.327 30 177.655 30H172.026ZM173.105 27.9583H177.48C178.841 27.9583 180.018 27.7833 181.009 27.4333C182.021 27.0833 182.857 26.5681 183.518 25.8875C184.198 25.2069 184.704 24.3514 185.034 23.3208C185.365 22.2708 185.53 21.0653 185.53 19.7042C185.53 16.9625 184.859 14.9111 183.518 13.55C182.176 12.1694 180.164 11.4792 177.48 11.4792H173.105V27.9583Z"
                        :fill="fillColor"
                    />
                    <defs>
                        <clipPath id="clip0_1048_115190">
                            <rect width="38.8889" height="34.0278" :fill="fillColor" transform="translate(0 2.98608)" />
                        </clipPath>
                    </defs>
                </svg>
            </template>
        </TemplateHero>
        <DiamondSeparator />
        <TemplateLicense :license="license" />
        <DiamondSeparator />
        <div class="hidden">
            <TemplateYoutube imgSrc="https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-youtube-screen.png" />
            <DiamondSeparator />
        </div>
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData2" title="Features" />
        <DiamondSeparator />
        <TemplateConfiguration title="Vue App with No Configuration" description="Diamond is powered by Vite to get started in no time following the best practices." />
        <DiamondSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData1">
            <template #description2>
                Fully compatible with <a href="https://blocks.primevue.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://blocks.primevue.org/">PrimeBlocks</a> is not included in the
                template and requires a separate purchase.
            </template>
            <template #description4>
                Diamond uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/file/lKooXEoqqWz7PBYwJ7B8QS/Preview-%7C-Diamond-2022?node-id=271%3A12531">preview the Figma file</a> before the purchase. Note that PrimeVue UI components are excluded from the Diamond Figma file as they
                are available in <PrimeVueNuxtLink to="/uikit">PrimeOne for Figma</PrimeVueNuxtLink> only.
            </template>
        </TemplateFeaturesAnimation>
        <DiamondSeparator />
        <TemplateFeatures :featuresData="features2Data" displayType="vertical" />
        <DiamondSeparator />
        <TemplateRelated :relatedData="relatedData" />
    </div>
</template>

<script>
import DiamondSeparator from '@/doc/templates/DiamondSeparator.vue';

export default {
    data() {
        return {
            features2Data: [
                {
                    title: 'Fully Responsive',
                    description: 'Diamond is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-features2-responsive.png'
                },
                {
                    title: 'Cross Browser Compatible',
                    description: 'First class support for Firefox, Safari, Chrome and Edge.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-compatible.png',
                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-compatible-dark.png'
                },
                {
                    title: 'Lifetime Support',
                    description: 'Diamond has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-lifetime.png'
                },
                {
                    title: 'Customizable Design',
                    description: 'Fully customizable with a mixture of Sass and CSS variables.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-customizable.png',
                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-customizable-dark.png'
                },
                {
                    title: 'Ready to Use Pages',
                    description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-features2-ready.png'
                },
                {
                    title: 'Mobile Experience',
                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-features2-mobile.png'
                }
            ],
            relatedData: [
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo-vue.jpg',
                    href: '/templates/apollo'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon-vue.jpg',
                    href: '/templates/avalon'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya-vue.png',
                    href: '/templates/freya'
                }
            ],
            animationFeaturesData1: [
                {
                    id: 1,
                    title: 'PrimeFlex CSS Utilities',
                    description: 'PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-utilities.png'
                },
                {
                    id: 2,
                    title: 'PrimeBlocks',
                    slotType: 'description2',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-blocks.png'
                },
                {
                    id: 3,
                    title: 'PrimeIcons',
                    description: 'Diamond ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-icons.png'
                },
                {
                    id: 4,
                    title: 'Figma File',
                    slotType: 'description4',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/features-animation-figma.png'
                }
            ],
            animationFeaturesData2: [
                {
                    id: 1,
                    title: 'Light / Dark / Dim Modes',
                    description: 'Diamond has 3 display modes to choose from; Light, Dim and Dark.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/features-animation-darkmode.png'
                },
                {
                    id: 2,
                    title: 'Component Themes',
                    description: 'Diamond offers 30 built-in component themes and creating your own theme is a matter of defining couple of sass variables.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/features-animation-component-themes.png'
                },
                {
                    id: 3,
                    title: '7 Menu Orientations',
                    description: 'Static, Overlay, Slim, Compact, Horizontal, Reveal and Drawer are the available menu layouts depending on your preference.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/features-animation-orientations.png',
                    type: 'inline-animation',
                    inlineFeaturesData: [
                        {
                            id: 1,
                            title: 'Static',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/Static.png'
                        },
                        {
                            id: 2,
                            title: 'Slim',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/Slim.png'
                        },
                        {
                            id: 3,
                            title: 'Horizontal',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/Horizontal.png'
                        },
                        {
                            id: 4,
                            title: 'Drawer',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/Drawer.png'
                        },
                        {
                            id: 5,
                            title: 'Overlay',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/Overlay.png'
                        },
                        {
                            id: 6,
                            title: 'Compact',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/Compact.png'
                        },
                        {
                            id: 7,
                            title: 'Reveal',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/Reveal.png'
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'Menu Themes',
                    description: 'Stunning theming options for the main menu in light color scheme.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/features-animation-orientations.png'
                }
            ],
            license: {
                documentLink: 'https://diamond.primevue.org/documentation/',
                description: 'The download package is a Vite-based project containing all application source codes deployed at the live demo. The project code is written in JavaScript.',
                showDiscount: false,
                licenseDetails: [
                    {
                        title: 'Basic License',
                        price: '$59',
                        discount: '',
                        included: ['Non Commercial Usage', 'Single End Product, No Multi-Use', 'Lifetime Support', 'Unlimited Updates']
                    },
                    {
                        title: 'Extended License',
                        price: '$590',
                        discount: '',
                        included: ['Commercial Usage', 'Multiple End Products', 'Lifetime Support', 'Unlimited Updates']
                    }
                ]
            },
            templateHeroData: {
                pattern: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-hero-pattern.png',
                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-hero-dashboard1.png',
                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-hero-dashboard2.png',
                description: 'An amazing application template for Vue based on Vite with light-dim-dark modes, four menu layouts, various menu themes, sample apps, ready to use template pages and 30 PrimeVue themes.',
                liveHref: 'https://diamond.primevue.org',
                docHref: 'https://diamond.primevue.org/documentation'
            }
        };
    },
    computed: {
        fillColor() {
            return this.$appState.darkTheme ? 'var(--p-surface-900)' : 'var(--p-surface-0)';
        }
    },
    components: {
        DiamondSeparator
    }
};
</script>
