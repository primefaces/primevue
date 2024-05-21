<template>
    <div class="avalon template">
        <TemplateHero :templateHeroData="templateHeroData">
            <template #logo>
                <svg xmlns="http://www.w3.org/2000/svg" width="125" height="40" viewBox="0 0 125 40" fill="none">
                    <path d="M6.33333 0.555555H14.6111L20.9444 39.4444H14.8333L13.7222 31.7222V31.8333H6.77778L5.66667 39.4444H0L6.33333 0.555555ZM13 26.5556L10.2778 7.33334H10.1667L7.5 26.5556H13Z" :fill="fillColor" />
                    <path d="M20.7248 0.555555H26.8915L30.8915 30.7222H31.0026L35.0026 0.555555H40.6137L34.7248 39.4444H26.6137L20.7248 0.555555Z" :fill="fillColor" />
                    <path d="M46.6978 0.555555H54.9756L61.3091 39.4444H55.1978L54.0867 31.7222V31.8333H47.1423L46.0311 39.4444H40.3645L46.6978 0.555555ZM53.3645 26.5556L50.6422 7.33334H50.5311L47.8645 26.5556H53.3645Z" :fill="fillColor" />
                    <path d="M64.2738 0.555555H70.3849V33.8889H80.4404V39.4444H64.2738V0.555555Z" :fill="fillColor" />
                    <path
                        d="M91.9875 40C88.9875 40 86.691 39.1482 85.0986 37.4444C83.5059 35.7407 82.7097 33.3333 82.7097 30.2222V9.77779C82.7097 6.66667 83.5059 4.25925 85.0986 2.55556C86.691 0.851853 88.9875 0 91.9875 0C94.9875 0 97.2837 0.851853 98.8764 2.55556C100.469 4.25925 101.265 6.66667 101.265 9.77779V30.2222C101.265 33.3333 100.469 35.7407 98.8764 37.4444C97.2837 39.1482 94.9875 40 91.9875 40ZM91.9875 34.4444C94.0986 34.4444 95.1541 33.1667 95.1541 30.6111V9.3889C95.1541 6.83334 94.0986 5.55556 91.9875 5.55556C89.8764 5.55556 88.8208 6.83334 88.8208 9.3889V30.6111C88.8208 33.1667 89.8764 34.4444 91.9875 34.4444Z"
                        :fill="fillColor"
                    />
                    <path d="M105.398 0.555555H113.065L119.009 23.8333H119.12V0.555555H124.565V39.4444H118.287L110.954 11.0556H110.842V39.4444H105.398V0.555555Z" :fill="fillColor" />
                </svg>
            </template>
        </TemplateHero>
        <AvalonSeparator />
        <TemplateLicense :license="license" />
        <AvalonSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData2" title="Features" />
        <AvalonSeparator />
        <TemplateConfiguration title="Vue App with No Configuration" description="Avalon is powered by Vite to get started in no time following the best practices." />
        <AvalonSeparator />
        <TemplateFeatures :featuresData="features1Data" displayType="horizontal" />
        <AvalonSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData1">
            <template #description2>
                Fully compatible with <a href="https://blocks.primevue.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://blocks.primevue.org/">PrimeBlocks</a> is not included in the
                template and requires a separate purchase.
            </template>
            <template #description4>
                Avalon uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/file/LuzEn29BAxr03T2vMQ5A1y/Preview-%7C-Avalon-1.0.0?type=design&mode=design&t=ME7xK2sAYOLoKCrT-1">preview the Figma file</a> before the purchase. Note that PrimeVue UI components are excluded from the
                Avalon Figma file as they are available in <PrimeVueNuxtLink to="/uikit">PrimeOne for Figma</PrimeVueNuxtLink> only.
            </template>
        </TemplateFeaturesAnimation>
        <AvalonSeparator />
        <TemplateFeatures :featuresData="features2Data" displayType="vertical" />
        <AvalonSeparator />
        <TemplateRelated :relatedData="relatedData" />
    </div>
</template>

<script>
import AvalonSeparator from '@/doc/templates/AvalonSeparator.vue';

export default {
    data() {
        return {
            features2Data: [
                {
                    title: 'Fully Responsive',
                    description: 'Avalon is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/avalon-features2-responsive.png'
                },
                {
                    title: 'Cross Browser Compatible',
                    description: 'First class support for Firefox, Safari, Chrome and Edge.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-compatible.png',
                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-compatible-dark.png'
                },
                {
                    title: 'Lifetime Support',
                    description: 'Avalon has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-lifetime.png'
                },
                {
                    title: 'Customizable Design',
                    description: 'Fully customizable with a mixture of Sass and CSS variables.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-customizable.png',
                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-customizable-dark.png'
                },
                {
                    title: 'Top Notch Quality',
                    description: 'Superior standards with 100% compatibility for strict mode and linting tools.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-quality.png',
                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-quality-dark.png'
                },
                {
                    title: 'Mobile Experience',
                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/avalon-features2-mobile.png'
                }
            ],
            relatedData: [
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis-vue.jpg',
                    href: '/templates/atlantis'
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
                    description: 'Avalon ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-icons.png'
                },
                {
                    id: 4,
                    title: 'Figma File',
                    slotType: 'description4',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/features-animation-figma.png'
                }
            ],
            animationFeaturesData2: [
                {
                    id: 1,
                    title: 'Light and Dark Modes',
                    description: 'Avalon offers you 2 uniquely designed layout modes to choose from; Light and Dark.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/features-animation-darkmode.png'
                },
                {
                    id: 2,
                    title: 'Component 10 Beautiful Themes',
                    description: 'Avalon offers 10 built-in themes and creating your own theme is a matter of defining couple of SaSS variables.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/features-animation-component-themes.png'
                },
                {
                    id: 3,
                    title: '7 Menu Orientations',
                    description: 'Avalon has 7 menu layouts to choose from; Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal with Light and Dark options.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/features-animation-orientations.png',
                    type: 'inline-animation',
                    inlineFeaturesData: [
                        {
                            id: 1,
                            title: 'Static',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/Static.png'
                        },
                        {
                            id: 2,
                            title: 'Slim',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/Slim.png'
                        },
                        {
                            id: 3,
                            title: 'Reveal',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/Reveal.png'
                        },
                        {
                            id: 4,
                            title: 'Horizontal',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/Horizontal.png'
                        },
                        {
                            id: 5,
                            title: 'Overlay',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/Overlay.png'
                        },
                        {
                            id: 6,
                            title: 'Slim+',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/Slim+.png'
                        },
                        {
                            id: 7,
                            title: 'Drawer',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/Drawer.png'
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'Topbar Themes',
                    description: 'Avalon comes with 11 topbar themes guaranteeing an enviable design.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/features-animation-menu-themes.png'
                }
            ],
            features1Data: [
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/avalon-features1-feature1.png',
                    title: 'Ready to Use Applications',
                    description: 'Mail, File System, Tasks, Calendar, Blog and Chat are the sample applications to get started with ease.'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/avalon-features1-feature2.png',
                    title: 'E-Commerce Pages',
                    description: 'Avalon offers E-commerce pages to kickstart your e-commerce project powered by PrimeBlocks.'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/avalon-features1-feature3.png',
                    title: 'Ready to Use Pages',
                    description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.'
                }
            ],
            license: {
                documentLink: 'https://avalon.primevue.org/documentation',
                description: 'The download package is a Vite-based project containing all application source codes deployed at the live demo. The project code is written in JavaScript.',
                showDiscount: false,
                licenseDetails: [
                    {
                        title: 'Basic License',
                        price: '$49',
                        discount: '',
                        included: ['Non Commercial Usage', 'Single End Product, No Multi-Use', 'Lifetime Support', 'Unlimited Updates']
                    },
                    {
                        title: 'Extended License',
                        price: '$490',
                        discount: '',
                        included: ['Commercial Usage', 'Multiple End Products', 'Lifetime Support', 'Unlimited Updates']
                    }
                ]
            },
            templateHeroData: {
                pattern: 'https://primefaces.org/cdn/primevue/images/templates/avalon/avalon-hero-pattern.png',
                rectangle: true,
                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/avalon/avalon-hero-dashboard1.png',
                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/avalon/avalon-hero-dashboard2.png',
                description: 'A modern and easy to use premium application template with highly customizable layout features. Based on a bootstrap styling, it is fully responsive, touch optimized, built with SASS, CSS3 and HTML5.',
                liveHref: 'https://avalon.primevue.org/',
                docHref: 'https://avalon.primevue.org/documentation'
            }
        };
    },
    computed: {
        fillColor() {
            return this.$appState.darkTheme ? 'var(--p-surface-900)' : 'var(--p-surface-0)';
        }
    },
    components: {
        AvalonSeparator
    }
};
</script>
