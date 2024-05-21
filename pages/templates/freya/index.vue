<template>
    <div class="freya template">
        <TemplateHero :templateHeroData="templateHeroData">
            <template #logo>
                <svg width="139" height="40" viewBox="0 0 139 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H10.5065V6.75772L29.7675 2.94574V11.7829L10.5065 15.5949V18.5407L29.7675 14.7287V23.5659L10.5065 27.3779V35.3488H0V0Z" :fill="fillColor" />
                    <path
                        d="M56.124 14.0885H51.6603V12.8153C51.6603 11.825 52.2227 11.2591 53.2068 11.2591H56.0889V6.20166H51.5197C47.5129 6.20166 45.4041 8.42978 45.4041 12.2848V14.0885H42.1705L42.2057 19.2521H45.3338V32.8683H51.8712V19.2521H56.124V14.0885Z"
                        :fill="fillColor"
                    />
                    <path d="M69.8662 13.6433C67.611 13.6433 65.9902 14.2818 64.6512 15.8425L63.6294 13.7143H59.2249V32.8681H65.7788V23.1493C65.7788 20.7019 66.7654 19.6732 69.0557 19.6732H71.628V13.6433H69.8662Z" :fill="fillColor" />
                    <path
                        d="M94.2636 22.9079C94.2636 17.3697 90.0799 13.0232 84.0136 13.0232C78.0867 13.0232 73.7985 17.2996 73.7985 23.0832C73.7985 28.8668 78.1216 33.1782 84.0136 33.1782C88.7202 33.1782 92.5553 30.4792 93.8801 26.1678H87.3954C86.8027 27.2895 85.5127 27.9554 84.0136 27.9554C81.9566 27.9554 80.5969 26.8338 80.1786 24.6605H94.159C94.2287 24.0646 94.2636 23.5038 94.2636 22.9079ZM84.0136 18.1408C85.966 18.1408 87.3257 19.1573 87.8835 21.0502H80.2832C80.8061 19.1573 82.1309 18.1408 84.0136 18.1408Z"
                        :fill="fillColor"
                    />
                    <path
                        d="M109.533 13.6433L105.758 24.2429L101.701 13.6433H94.5737L102.441 31.2855C101.559 33.6686 100.819 34.3444 98.3135 34.3444H96.4789V39.9999H98.7369C103.676 39.9999 106.005 37.9013 108.58 31.9969L116.589 13.6433H109.533Z"
                        :fill="fillColor"
                    />
                    <path
                        d="M133.387 13.585L132.716 15.0598C131.163 13.7606 129.15 13.0232 126.891 13.0232C121.065 13.0232 116.899 17.2017 116.899 23.0656C116.899 28.9646 121.065 33.1782 126.891 33.1782C129.115 33.1782 131.092 32.476 132.646 31.2119L133.211 32.5462H138.295V13.585H133.387ZM127.774 27.4196C125.302 27.4196 123.501 25.5586 123.501 23.0656C123.501 20.6077 125.302 18.7818 127.774 18.7818C130.245 18.7818 132.046 20.6077 132.046 23.0656C132.046 25.5586 130.245 27.4196 127.774 27.4196Z"
                        :fill="fillColor"
                    />
                </svg>
            </template>
        </TemplateHero>
        <FreyaSeparator />
        <TemplateLicense :license="license" />
        <FreyaSeparator />
        <div class="hidden">
            <TemplateYoutube imgSrc="https://primefaces.org/cdn/primevue/images/templates/freya/freya-youtube-screen.png" />
            <FreyaSeparator />
        </div>
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData2" title="Features" />
        <FreyaSeparator />
        <TemplateConfiguration title="Vue based on Vite" description="Freya is powered by Vite to get started in no time following the best practices." />
        <FreyaSeparator />
        <TemplateFeatures :featuresData="features2Data" displayType="vertical" />
        <FreyaSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData1">
            <template #description2>
                Fully compatible with <a href="https://blocks.primevue.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://blocks.primevue.org/">PrimeBlocks</a> is not included in the
                template and requires a separate purchase.
            </template>
            <template #description4>
                Freya uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/file/eYBoRNff6GPTlrgYZaMStp/Preview-%7C-Freya-2022?node-id=0%3A1&t=MGAABDlOnz4QBcEk-1">preview the Figma file</a> before the purchase. Note that PrimeVue UI components are excluded from the Freya Figma
                file as they are available in <PrimeVueNuxtLink to="/uikit">PrimeOne for Figma</PrimeVueNuxtLink> only.
            </template>
        </TemplateFeaturesAnimation>
        <FreyaSeparator />
        <TemplateRelated :relatedData="relatedData" />
    </div>
</template>

<script>
import FreyaSeparator from '@/doc/templates/FreyaSeparator.vue';

export default {
    data() {
        return {
            features2Data: [
                {
                    title: 'Fully Responsive',
                    description: 'Freya is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya/freya-features2-responsive.png'
                },
                {
                    title: 'Cross Browser Compatible',
                    description: 'First class support for Firefox, Safari, Chrome and Edge.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-compatible.png',
                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-compatible-dark.png'
                },
                {
                    title: 'Lifetime Support',
                    description: 'Freya has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
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
                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya/freya-features2-ready.png'
                },
                {
                    title: 'Mobile Experience',
                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya/freya-features2-mobile.png'
                }
            ],
            relatedData: [
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond-vue.jpg',
                    href: '/templates/diamond'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya-vue.png',
                    href: '/templates/freya'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/ultima-vue.jpg',
                    href: '/templates/ultima'
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
                    description: 'Freya ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-icons.png'
                },
                {
                    id: 4,
                    title: 'Figma File',
                    slotType: 'description4',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya/features-animation-figma.png'
                }
            ],
            animationFeaturesData2: [
                {
                    id: 1,
                    title: 'Light and Dark Modes',
                    description: 'Impress your users with the Light and Dark modes.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya/features-animation-darkmode.png'
                },
                {
                    id: 2,
                    title: 'Component Themes',
                    description: 'Freya offers 16 built-in component themes with dark and light options. Also if you wanna create your own theme you can do it by just defining couple SASS variables.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya/features-animation-component-themes.png'
                },
                {
                    id: 3,
                    title: '7 Menu Orientations',
                    description: 'Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal are the available menu layouts depending on your preference.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya/features-animation-orientations.png',
                    type: 'inline-animation',
                    inlineFeaturesData: [
                        {
                            id: 1,
                            title: 'Static',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/freya/Static.png'
                        },
                        {
                            id: 2,
                            title: 'Slim',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/freya/Slim.png'
                        },
                        {
                            id: 3,
                            title: 'Reveal',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/freya/Reveal.png'
                        },
                        {
                            id: 4,
                            title: 'Horizontal',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/freya/Horizontal.png'
                        },
                        {
                            id: 5,
                            title: 'Overlay',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/freya/Overlay.png'
                        },
                        {
                            id: 6,
                            title: 'Slim+',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/freya/Slim+.png'
                        },
                        {
                            id: 7,
                            title: 'Drawer',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/freya/Drawer.png'
                        }
                    ]
                }
            ],
            license: {
                documentLink: 'https://freya.primevue.org/documentation',
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
                pattern: 'https://primefaces.org/cdn/primevue/images/templates/freya/freya-hero-pattern.png',
                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/freya/freya-hero-dashboard1.png',
                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/freya/freya-hero-dashboard2.png',
                description: 'Freya is a modern admin template for developers and IT professionals. It comes with a huge collection of reusable UI components and dozens of built-in layouts for various purposes.',
                liveHref: 'https://www.primefaces.org/freya-vue/',
                docHref: 'https://freya.primevue.org/documentation'
            }
        };
    },
    computed: {
        fillColor() {
            return this.$appState.darkTheme ? 'var(--p-surface-900)' : 'var(--p-surface-0)';
        }
    },
    components: {
        FreyaSeparator
    }
};
</script>
