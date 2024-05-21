<template>
    <div class="atlantis template">
        <TemplateHero :templateHeroData="templateHeroData">
            <template #logo>
                <svg width="149" height="40" viewBox="0 0 149 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M69.3651 24.0154H61.2671L59.6707 27.7636H56.5703L63.8585 11.5677H66.82L74.1313 27.7636H70.9847L69.3651 24.0154ZM68.3702 21.6555L65.3161 14.5755L62.2852 21.6555H68.3702Z" :fill="fillColor" />
                    <path
                        d="M83.2274 27.0927C82.8881 27.3703 82.4716 27.5785 81.978 27.7174C81.4998 27.8562 80.9908 27.9256 80.451 27.9256C79.0936 27.9256 78.0447 27.5708 77.3043 26.8613C76.5639 26.1518 76.1938 25.1183 76.1938 23.7609V17.8147H74.1577V15.501H76.1938V12.6783H79.0859V15.501H82.3945V17.8147H79.0859V23.6915C79.0859 24.2931 79.2324 24.7558 79.5255 25.0797C79.8186 25.3882 80.2427 25.5425 80.798 25.5425C81.4459 25.5425 81.9857 25.3728 82.4176 25.0335L83.2274 27.0927Z"
                        :fill="fillColor"
                    />
                    <path d="M85.6065 10.596H88.4987V27.7636H85.6065V10.596Z" :fill="fillColor" />
                    <path
                        d="M97.0145 15.2696C98.8346 15.2696 100.223 15.7092 101.179 16.5885C102.151 17.4522 102.637 18.7633 102.637 20.5217V27.7636H99.9067V26.2597C99.5519 26.7996 99.0429 27.2161 98.3796 27.5091C97.7318 27.7868 96.9451 27.9256 96.0196 27.9256C95.0942 27.9256 94.2844 27.7713 93.5903 27.4628C92.8961 27.1389 92.3563 26.6993 91.9707 26.144C91.6005 25.5733 91.4154 24.9332 91.4154 24.2237C91.4154 23.1131 91.8241 22.2262 92.6416 21.5629C93.4746 20.8842 94.778 20.5449 96.5518 20.5449H99.7447V20.3598C99.7447 19.496 99.4825 18.8327 98.958 18.37C98.449 17.9073 97.6855 17.6759 96.6675 17.6759C95.9734 17.6759 95.287 17.7839 94.6083 17.9998C93.945 18.2158 93.382 18.5165 92.9193 18.9022L91.7856 16.7967C92.4334 16.3031 93.2123 15.9252 94.1224 15.663C95.0325 15.4008 95.9965 15.2696 97.0145 15.2696ZM96.6212 25.8201C97.3462 25.8201 97.9863 25.6582 98.5416 25.3342C99.1123 24.9949 99.5133 24.5167 99.7447 23.8997V22.4653H96.76C95.0942 22.4653 94.2612 23.0128 94.2612 24.108C94.2612 24.6324 94.4695 25.0489 94.8859 25.3574C95.3024 25.6659 95.8808 25.8201 96.6212 25.8201Z"
                        :fill="fillColor"
                    />
                    <path
                        d="M113.359 15.2696C114.917 15.2696 116.166 15.7247 117.107 16.6347C118.048 17.5448 118.519 18.8944 118.519 20.6837V27.7636H115.626V21.0539C115.626 19.9742 115.372 19.1644 114.863 18.6245C114.354 18.0692 113.629 17.7916 112.688 17.7916C111.624 17.7916 110.783 18.1155 110.166 18.7633C109.549 19.3957 109.241 20.3135 109.241 21.5166V27.7636H106.349V15.4085H109.102V17.0049C109.58 16.4342 110.182 16.0023 110.907 15.7092C111.631 15.4162 112.449 15.2696 113.359 15.2696Z"
                        :fill="fillColor"
                    />
                    <path
                        d="M129.614 27.0927C129.275 27.3703 128.859 27.5785 128.365 27.7174C127.887 27.8562 127.378 27.9256 126.838 27.9256C125.481 27.9256 124.432 27.5708 123.691 26.8613C122.951 26.1518 122.581 25.1183 122.581 23.7609V17.8147H120.545V15.501H122.581V12.6783H125.473V15.501H128.781V17.8147H125.473V23.6915C125.473 24.2931 125.619 24.7558 125.912 25.0797C126.206 25.3882 126.63 25.5425 127.185 25.5425C127.833 25.5425 128.373 25.3728 128.805 25.0335L129.614 27.0927Z"
                        :fill="fillColor"
                    />
                    <path
                        d="M131.994 15.4085H134.886V27.7636H131.994V15.4085ZM133.451 13.3724C132.927 13.3724 132.487 13.2104 132.132 12.8865C131.778 12.5472 131.6 12.1307 131.6 11.6371C131.6 11.1435 131.778 10.7348 132.132 10.4109C132.487 10.0715 132.927 9.90186 133.451 9.90186C133.976 9.90186 134.415 10.0638 134.77 10.3877C135.125 10.6962 135.302 11.0896 135.302 11.5677C135.302 12.0767 135.125 12.5086 134.77 12.8634C134.431 13.2027 133.991 13.3724 133.451 13.3724Z"
                        :fill="fillColor"
                    />
                    <path
                        d="M142.499 27.9256C141.497 27.9256 140.517 27.7945 139.561 27.5323C138.604 27.27 137.841 26.9384 137.27 26.5374L138.381 24.3394C138.936 24.7095 139.599 25.0103 140.371 25.2417C141.157 25.4576 141.928 25.5656 142.684 25.5656C144.412 25.5656 145.276 25.1106 145.276 24.2005C145.276 23.7686 145.052 23.4679 144.605 23.2982C144.173 23.1285 143.471 22.9666 142.499 22.8123C141.481 22.6581 140.648 22.4807 140 22.2802C139.368 22.0796 138.813 21.7326 138.335 21.239C137.872 20.73 137.64 20.0282 137.64 19.1335C137.64 17.9612 138.126 17.0281 139.098 16.3339C140.085 15.6244 141.412 15.2696 143.078 15.2696C143.926 15.2696 144.774 15.3699 145.623 15.5704C146.471 15.7555 147.165 16.01 147.705 16.3339L146.594 18.532C145.546 17.915 144.366 17.6065 143.054 17.6065C142.206 17.6065 141.558 17.7376 141.111 17.9998C140.679 18.2466 140.463 18.5782 140.463 18.9947C140.463 19.4574 140.694 19.7891 141.157 19.9896C141.635 20.1747 142.368 20.3521 143.355 20.5217C144.342 20.676 145.152 20.8534 145.785 21.0539C146.417 21.2544 146.957 21.5938 147.404 22.0719C147.867 22.5501 148.098 23.2288 148.098 24.108C148.098 25.2648 147.597 26.1903 146.594 26.8844C145.592 27.5785 144.227 27.9256 142.499 27.9256Z"
                        :fill="fillColor"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5733 7.44072C12.9176 19.8152 31.0475 19.8063 32.3873 7.44072C27.7447 7.01325 23.8187 4.07436 21.9803 0C20.142 4.07436 16.216 7.01325 11.5733 7.44072ZM20.814 19.0181C20.4089 23.4977 16.8435 27.4073 12.4234 28.2266C6.44984 29.469 0.529697 25.0028 0 19.0181C4.64264 18.5907 8.56863 15.6518 10.407 11.5774C12.232 15.683 16.3316 18.6397 20.814 19.0181ZM32.3873 30.5956C31.8532 35.8677 27.3886 40 21.9803 40C16.5721 40 12.1075 35.8677 11.5733 30.5956C16.0557 30.2171 20.1553 27.2604 21.9803 23.1548C23.8053 27.2604 27.9049 30.2171 32.3873 30.5956ZM43.9603 19.0181C43.4261 24.6198 38.3028 28.9346 32.6007 28.378C27.74 28.0085 23.5736 23.8762 23.1463 19.0181C27.6287 18.6397 31.7283 15.683 33.5533 11.5774C35.3917 15.6518 39.3177 18.5907 43.9603 19.0181Z"
                        :fill="fillColor"
                    />
                </svg>
            </template>
        </TemplateHero>
        <AtlantisSeparator />
        <TemplateLicense :license="license" />
        <AtlantisSeparator />
        <div class="hidden">
            <TemplateYoutube imgSrc="https://primefaces.org/cdn/primevue/images/templates/atlantis/atlantis-youtube-screen.png" />
            <AtlantisSeparator />
        </div>
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData2" title="Features" />
        <AtlantisSeparator />
        <TemplateConfiguration title="Vue based on Vite" description="Atlantis is powered by Vite to get started in no time following the best practices. Template is implemented purely in Vue." />
        <AtlantisSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData1">
            <template #description2>
                Fully compatible with <a href="https://blocks.primevue.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://blocks.primevue.org/">PrimeBlocks</a> is not included in the
                template and requires a separate purchase.
            </template>
            <template #description4>
                Atlantis uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/file/two0OGwOwHfq0sdjeK34l0/Preview-%7C-Atlantis-2022?node-id=15%3A1427&t=2lNJ5EzW0xuvQWdm-1">preview the Figma file</a> before the purchase. Note that PrimeVue UI components are excluded from the
                Atlantis Figma file as they are available in <PrimeVueNuxtLink to="/uikit">PrimeOne for Figma</PrimeVueNuxtLink> only.
            </template>
        </TemplateFeaturesAnimation>
        <AtlantisSeparator />
        <TemplateFeatures :featuresData="features2Data" displayType="vertical" />
        <AtlantisSeparator />
        <TemplateRelated :relatedData="relatedData" />
    </div>
</template>

<script>
import AtlantisSeparator from '@/doc/templates/ApolloSeparator.vue';

export default {
    data() {
        return {
            features2Data: [
                {
                    title: 'Fully Responsive',
                    description: 'Atlantis is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/atlantis-features2-responsive.png'
                },
                {
                    title: 'Cross Browser Compatible',
                    description: 'First class support for Firefox, Safari, Chrome and Edge.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-compatible.png',
                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-compatible-dark.png'
                },
                {
                    title: 'Lifetime Support',
                    description: 'Atlantis has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-lifetime.png'
                },
                {
                    title: 'Full SaSS Support',
                    description: 'Sass is utilized for both the application and components to provide simplicity and flexibility.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-customizable.png',
                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-customizable-dark.png'
                },
                {
                    title: 'Ready to Use Pages',
                    description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/atlantis-features2-ready.png'
                },
                {
                    title: 'Mobile Experience',
                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/atlantis-features2-mobile.png'
                }
            ],
            relatedData: [
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya-vue.png',
                    href: '/templates/freya'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/ultima-vue.jpg',
                    href: '/templates/ultima'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo-vue.jpg',
                    href: '/templates/apollo'
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
                    description: 'Atlantis ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-icons.png'
                },
                {
                    id: 4,
                    title: 'Figma File',
                    slotType: 'description4',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/features-animation-figma.png'
                }
            ],
            animationFeaturesData2: [
                {
                    id: 1,
                    title: 'Light and Dark Modes',
                    description: 'The stunning dark and light modes will impress your users.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/features-animation-darkmode.png'
                },
                {
                    id: 2,
                    title: 'Component Themes',
                    description: 'Atlantis offers 16 built-in component themes with dark and light options. You are also free to create you own theme by defining couple SASS variables.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/features-animation-component-themes.png'
                },
                {
                    id: 3,
                    title: '7 Menu Orientations',
                    description: 'Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal are the available menu layouts depending on your preference.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/features-animation-orientations.png',
                    type: 'inline-animation',
                    inlineFeaturesData: [
                        {
                            id: 1,
                            title: 'Static',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/Static.png'
                        },
                        {
                            id: 2,
                            title: 'Slim',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/Slim.png'
                        },
                        {
                            id: 3,
                            title: 'Reveal',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/Reveal.png'
                        },
                        {
                            id: 4,
                            title: 'Horizontal',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/Horizontal.png'
                        },
                        {
                            id: 5,
                            title: 'Overlay',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/Overlay.png'
                        },
                        {
                            id: 6,
                            title: 'Slim+',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/Slim+.png'
                        },
                        {
                            id: 7,
                            title: 'Drawer',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/Drawer.png'
                        }
                    ]
                }
            ],
            license: {
                documentLink: 'https://atlantis.primevue.org/documentation',
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
                pattern: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/atlantis-hero-pattern.png',
                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/atlantis-hero-dashboard1.png',
                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/atlantis-hero-dashboard2.png',
                description: 'Prepare to be amazed by the remastered Atlantis for PrimeVue featuring a new gorgeous dark mode for the entire layout, 5 menu modes, reusable css widgets, utilities, modern icons and many more.',
                liveHref: 'https://www.primefaces.org/atlantis-vue/',
                docHref: 'https://www.primefaces.org/atlantis-vue/documentation/'
            }
        };
    },
    computed: {
        fillColor() {
            return this.$appState.darkTheme ? 'var(--p-surface-900)' : 'var(--p-surface-0)';
        }
    },
    components: {
        AtlantisSeparator
    }
};
</script>
