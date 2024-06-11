<template>
    <div class="ultima template">
        <TemplateHero :templateHeroData="templateHeroData">
            <template #logo>
                <svg width="209" height="40" viewBox="0 0 209 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_957_53077)">
                        <path
                            d="M95.6837 6.5625V25.9765C95.6707 27.8906 95.2474 29.5573 94.4141 30.9765C93.5808 32.3959 92.4024 33.4896 90.8789 34.2578C89.3686 35.013 87.6303 35.3906 85.6641 35.3906C82.6693 35.3906 80.2669 34.5769 78.4571 32.9492C76.6602 31.3086 75.7292 29.043 75.6641 26.1524V6.5625H78.0469V25.8008C78.0469 28.1966 78.7306 30.0586 80.0977 31.3867C81.4649 32.7019 83.3203 33.3594 85.6641 33.3594C88.0078 33.3594 89.8568 32.6952 91.2111 31.3672C92.5782 30.039 93.2618 28.1901 93.2618 25.8203V6.5625H95.6837Z"
                            :fill="fillColor"
                        />
                        <path d="M104.805 32.9688H118.848V35H102.383V6.5625H104.805V32.9688Z" :fill="fillColor" />
                        <path d="M137.383 8.61328H127.636V35H125.235V8.61328H115.508V6.5625H137.383V8.61328Z" :fill="fillColor" />
                        <path d="M144.923 35H142.52V6.5625H144.923V35Z" :fill="fillColor" />
                        <path d="M155.84 6.5625L166.327 31.6601L176.855 6.5625H180.059V35H177.656V22.6172L177.851 9.92188L167.265 35H165.41L154.864 10.0195L155.059 22.539V35H152.656V6.5625H155.84Z" :fill="fillColor" />
                        <path d="M202.969 27.0312H190.059L187.129 35H184.61L195.371 6.5625H197.656L208.418 35H205.918L202.969 27.0312ZM190.801 24.9805H202.208L196.504 9.49219L190.801 24.9805Z" :fill="fillColor" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M49.9636 10.7127C49.889 10.5341 49.7146 10.4185 49.5213 10.4185H46.8866L48.3213 8.68796C48.44 8.54566 48.4639 8.34796 48.3854 8.18083C48.3069 8.01369 48.1382 7.90671 47.9525 7.90671H19.0408L10.842 0.131475C10.683 -0.0184707 10.4417 -0.0433026 10.2578 0.0732162L5.65804 2.95276L5.6542 2.95657L5.64941 2.95849L0.216438 6.52472C0.20303 6.53333 0.196326 6.54669 0.183876 6.5572C0.157061 6.57821 0.134076 6.60114 0.113007 6.62692C0.0938536 6.64984 0.0785306 6.67276 0.0641652 6.69855C0.0488423 6.72625 0.0383076 6.75395 0.0287308 6.78355C0.0191537 6.81411 0.0134076 6.84468 0.0095769 6.87715C0.00861921 6.89339 0 6.90675 0 6.92395C0 6.93922 0.00670382 6.95069 0.00861921 6.96598C0.0114923 6.99749 0.0181961 7.0271 0.027773 7.05861C0.0373499 7.09013 0.0478845 7.11974 0.0641652 7.14935C0.070869 7.16176 0.0718267 7.17514 0.0794882 7.18755C0.0861921 7.19805 0.0986421 7.20187 0.106304 7.21142C0.139822 7.2544 0.179088 7.28974 0.225058 7.31839C0.242295 7.3289 0.255704 7.34228 0.272941 7.35086C0.336149 7.38142 0.405102 7.40149 0.479802 7.40149H7.02179L8.49854 11.0757L8.50045 11.0785V11.0814L18.108 34.0365L12.4366 39.1691C12.29 39.3019 12.2402 39.51 12.3121 39.6944C12.3829 39.8788 12.5611 40 12.7584 40H20.9236C20.9869 40 21.0491 39.9866 21.1075 39.9627C21.1659 39.9389 21.2186 39.9035 21.2626 39.8596L25.555 35.5627C25.5608 35.5694 25.5626 35.578 25.5694 35.5848L29.6338 39.851C29.7248 39.9475 29.8445 39.9743 29.9834 40C37.3624 39.9589 48.5578 39.9216 49.0845 39.9761C49.1343 39.9924 49.185 40 49.2357 40C49.3996 40 49.5595 39.9169 49.6486 39.7728C49.9254 39.3237 49.9234 39.319 35.7831 25.3254L49.8593 11.2361C49.9971 11.0967 50.0374 10.8913 49.9636 10.7127ZM46.9354 8.86084L45.6454 10.4185H21.6898L20.0474 8.86084H46.9354ZM10.4522 1.07795L20.3011 10.4185H9.26661L6.50559 3.54872L10.4522 1.07795ZM2.07722 6.44545L5.6858 4.07687L6.63775 6.44545H2.07722ZM26.2628 34.9258C26.2502 34.9124 26.233 34.9066 26.2196 34.8961L29.6501 31.4626V38.4805L26.2628 34.9258ZM48.1306 39.0163C46.3225 38.9895 41.83 38.9781 30.6077 39.0401V30.8141C30.6077 30.7262 30.5771 30.6479 30.536 30.5763L35.108 25.9996C39.6167 30.4626 45.9998 36.8149 48.1306 39.0163ZM21.0903 38.6781L9.66117 11.3736H45.7508C45.7853 11.3813 45.8197 11.3918 45.8542 11.3918C45.882 11.3918 45.9079 11.3784 45.9356 11.3736H48.3681L21.0903 38.6781Z"
                            :fill="fillColor"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_957_53077">
                            <rect width="208.75" height="40" :fill="fillColor" />
                        </clipPath>
                    </defs>
                </svg>
            </template>
        </TemplateHero>
        <UltimaSeparator />
        <div class="hidden">
            <TemplateYoutube imgSrc="https://primefaces.org/cdn/primevue/images/templates/ultima/ultima-youtube-screen.png" />
            <UltimaSeparator />
        </div>
        <TemplateLicense :license="license" />
        <UltimaSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData2" title="Features" />
        <UltimaSeparator />
        <TemplateConfiguration title="Vue based on Vite" description="Apollo is powered by Vite to get started in no time following the best practices." />
        <UltimaSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData1">
            <template #description2>
                Fully compatible with <a href="https://blocks.primevue.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://blocks.primevue.org/">PrimeBlocks</a> is not included in the
                template and requires a separate purchase.
            </template>
            <template #description4>
                Ultima uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/file/ijQrxq13lxacgkb6XHlLxA/Preview-%7C-Ultima-2022?node-id=354%3A7715&t=gjWHprUDE5RJIg78-1">preview the Figma file</a> before the purchase. Note that PrimeVue UI components are excluded from the Ultima
                Figma file as they are available in <PrimeVueNuxtLink to="/uikit">PrimeOne for Figma</PrimeVueNuxtLink> only.
            </template>
        </TemplateFeaturesAnimation>
        <UltimaSeparator />
        <TemplateFeatures :featuresData="features2Data" displayType="vertical" />
        <UltimaSeparator />
        <TemplateRelated :relatedData="relatedData" />
    </div>
</template>

<script>
import UltimaSeparator from '@/doc/templates/UltimaSeparator.vue';

export default {
    data() {
        return {
            templateHeroData: {
                pattern: 'https://primefaces.org/cdn/primevue/images/templates/ultima/ultima-hero-pattern.png',
                description: 'A highly customizable premium application template featuring 4 menu modes, 13 themes, light and dark modes. Based on material design language, it is fully responsive, touch optimized, built with SASS, CSS3 and HTML5.',
                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/ultima/ultima-hero-dashboard1.png',
                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/ultima/ultima-hero-dashboard2.png',
                liveHref: 'https://ultima.primevue.org',
                docHref: 'https://ultima.primevue.org/documentation'
            },
            features2Data: [
                {
                    title: 'Fully Responsive',
                    description: 'Ultima is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/ultima-features2-responsive.png'
                },
                {
                    title: 'Cross Browser Compatible',
                    description: 'First class support for Firefox, Safari, Chrome and Edge.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-compatible.png',
                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-compatible-dark.png'
                },
                {
                    title: 'Lifetime Support',
                    description: 'Ultima has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
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
                    description: 'Everything is ready for you to start and build your app in no time. Landing, login, invoice, help, and error pages are provided as template pages.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/ultima-features2-ready.png'
                },
                {
                    title: 'Mobile Experience',
                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/ultima-features2-mobile.png'
                }
            ],
            relatedData: [
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond-vue.jpg',
                    href: '/templates/diamond'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo-vue.jpg',
                    href: '/templates/apollo'
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
                    description: 'Ultima ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-icons.png'
                },
                {
                    id: 4,
                    title: 'Figma File',
                    slotType: 'description4',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/features-animation-figma.png'
                }
            ],
            animationFeaturesData2: [
                {
                    id: 1,
                    title: 'Light and Dark Modes',
                    description: 'Ultima offers you 2 uniquely designed layout modes to choose from; Light and Dark.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/features-animation-darkmode.png'
                },
                {
                    id: 2,
                    title: 'Component Themes',
                    description: 'Ultima offers 17 built-in component themes with dark and light options. Also if you wanna create your own theme you can do it by just defining couple SASS variables.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/features-animation-component-themes.png'
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
                            src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/Static.png'
                        },
                        {
                            id: 2,
                            title: 'Slim',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/Slim.png'
                        },
                        {
                            id: 3,
                            title: 'Reveal',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/Reveal.png'
                        },
                        {
                            id: 4,
                            title: 'Horizontal',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/Horizontal.png'
                        },
                        {
                            id: 5,
                            title: 'Overlay',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/Overlay.png'
                        },
                        {
                            id: 6,
                            title: 'Slim+',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/Slim+.png'
                        },
                        {
                            id: 7,
                            title: 'Drawer',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/Drawer.png'
                        }
                    ]
                }
            ],
            license: {
                documentLink: 'https://ultima.primevue.org/documentation/',
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
            }
        };
    },
    computed: {
        fillColor() {
            return this.$appState.darkTheme ? 'var(--p-surface-900)' : 'var(--p-surface-0)';
        }
    },
    components: {
        UltimaSeparator
    }
};
</script>
