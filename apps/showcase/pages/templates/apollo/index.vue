<template>
    <div class="apollo template">
        <TemplateHero :templateHeroData="templateHeroData">
            <template #logo>
                <svg width="235" height="40" viewBox="0 0 235 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0055 0L0 39.8951H6.7486L20.0064 11.5771L32.9975 39.8951H40.0134L20.0055 0Z" :fill="fillColor" />
                    <path d="M26.4066 30.0791L30.9241 40.0001H22.4536L26.4066 30.0791Z" :fill="fillColor" />
                    <path d="M17.2595 40.0001L12.7419 30.0791L8.78906 40.0001H17.2595Z" :fill="fillColor" />
                    <path d="M78.0429 27.6582H66.3425L63.2979 34.2844H58.855L72.3786 5.28833L85.4243 34.2844H80.9104L78.0429 27.6582ZM76.3613 23.7886L72.3078 14.512L68.0595 23.7886H76.3613Z" :fill="fillColor" />
                    <path
                        d="M100.155 23.2053V34.2843H96.0303V7.0022H100.703C102.993 7.0022 104.721 7.16123 105.89 7.47928C107.07 7.79734 108.108 8.39811 109.005 9.2816C110.575 10.813 111.359 12.7449 111.359 15.0773C111.359 17.5746 110.521 19.5536 108.846 21.0143C107.17 22.4751 104.91 23.2053 102.066 23.2053H100.155ZM100.155 19.3887H101.695C105.483 19.3887 107.377 17.9339 107.377 15.0243C107.377 12.2089 105.423 10.8012 101.517 10.8012H100.155V19.3887Z"
                        :fill="fillColor"
                    />
                    <path
                        d="M121.418 20.5197C121.418 16.6795 122.829 13.3811 125.649 10.6246C128.458 7.86811 131.833 6.48987 135.774 6.48987C139.668 6.48987 143.008 7.8799 145.793 10.6599C148.59 13.44 149.988 16.7796 149.988 20.6788C149.988 24.6013 148.584 27.9292 145.775 30.6622C142.955 33.4069 139.55 34.7792 135.562 34.7792C132.033 34.7792 128.865 33.5601 126.056 31.1216C122.964 28.4239 121.418 24.89 121.418 20.5197ZM125.578 20.5727C125.578 23.5882 126.593 26.0681 128.623 28.0117C130.641 29.9554 132.972 30.9271 135.615 30.9271C138.482 30.9271 140.902 29.9377 142.872 27.9586C144.843 25.9561 145.828 23.5176 145.828 20.6433C145.828 17.7337 144.855 15.2953 142.908 13.3281C140.972 11.3491 138.577 10.3596 135.721 10.3596C132.877 10.3596 130.475 11.3491 128.517 13.3281C126.558 15.2835 125.578 17.6984 125.578 20.5727Z"
                        :fill="fillColor"
                    />
                    <path d="M166.47 7.0022V30.4147H174.507V34.2843H162.346V7.0022H166.47Z" :fill="fillColor" />
                    <path d="M189.715 7.0022V30.4147H197.752V34.2843H185.591V7.0022H189.715Z" :fill="fillColor" />
                    <path
                        d="M206.34 20.5197C206.34 16.6795 207.75 13.3811 210.57 10.6246C213.379 7.86811 216.754 6.48987 220.696 6.48987C224.59 6.48987 227.929 7.8799 230.715 10.6599C233.512 13.44 234.911 16.7796 234.911 20.6788C234.911 24.6013 233.506 27.9292 230.698 30.6622C227.876 33.4069 224.472 34.7792 220.484 34.7792C216.954 34.7792 213.787 33.5601 210.979 31.1216C207.886 28.4239 206.34 24.89 206.34 20.5197ZM210.5 20.5727C210.5 23.5882 211.515 26.0681 213.545 28.0117C215.564 29.9554 217.893 30.9271 220.536 30.9271C223.403 30.9271 225.823 29.9377 227.794 27.9586C229.765 25.9561 230.751 23.5176 230.751 20.6433C230.751 17.7337 229.776 15.2953 227.83 13.3281C225.893 11.3491 223.499 10.3596 220.643 10.3596C217.8 10.3596 215.398 11.3491 213.438 13.3281C211.48 15.2835 210.5 17.6984 210.5 20.5727Z"
                        :fill="fillColor"
                    />
                </svg>
            </template>
        </TemplateHero>
        <ApolloSeparator />
        <div class="hidden">
            <TemplateYoutube imgSrc="https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-youtube-screen.png" />
            <ApolloSeparator />
        </div>
        <TemplateLicense :license="license" />
        <ApolloSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData2" title="Features" />
        <ApolloSeparator />
        <TemplateFeatures :featuresData="apolloFeatures1Data" displayType="horizontal" />
        <ApolloSeparator />
        <TemplateConfiguration title="Vue based on Vite and Nuxt" description="Apollo is powered by Vite and Nuxt to get started in no time following the best practices." />
        <ApolloSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData1">
            <template #description2>
                Fully compatible with <a href="https://blocks.primevue.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://blocks.primevue.org/">PrimeBlocks</a> is not included in the
                template and requires a separate purchase.
            </template>
            <template #description4>
                Apollo uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/file/zQOW0XBXdCTqODzEOqwBtt/Preview-%7C-Apollo-2022?node-id=335%3A21768&t=urYI89V3PLNAZEJG-1/">preview the Figma file</a> before the purchase. Note that PrimeVue UI components are excluded from the
                Apollo Figma file as they are available in <PrimeVueNuxtLink to="/uikit">PrimeOne for Figma</PrimeVueNuxtLink> only.
            </template>
        </TemplateFeaturesAnimation>
        <ApolloSeparator />
        <TemplateFeatures :featuresData="apolloFeatures2Data" displayType="vertical" />
        <ApolloSeparator />
        <TemplateRelated :relatedData="apolloRelatedData" />
    </div>
</template>

<script>
import ApolloSeparator from '@/doc/templates/ApolloSeparator.vue';

export default {
    data() {
        return {
            apolloRelatedData: [
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond-vue.jpg',
                    href: '/templates/diamond'
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
            apolloFeatures1Data: [
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features1-feature1.png',
                    title: 'Ready to Use Applications',
                    description: 'Mail, File System, Tasks, Calendar, Blog and Chat are the sample applications to get started with ease.'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features1-feature2.png',
                    title: 'E-Commerce Pages',
                    description: 'Apollo offers E-commerce pages to kickstart your e-commerce project powered by PrimeBlocks.'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features1-feature3.png',
                    title: 'Ready to Use Pages',
                    description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.'
                }
            ],
            apolloFeatures2Data: [
                {
                    title: 'Fully Responsive',
                    description: 'Apollo is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-responsive.png'
                },
                {
                    title: 'Lifetime Support',
                    description: 'Apollo has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-lifetime.png'
                },
                {
                    title: 'Top Notch Quality',
                    description: 'Superior standards with 100% compatibility for strict mode and linting tools.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-quality.png',
                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-quality-dark.png'
                },
                {
                    title: 'Cross Browser Compatible',
                    description: 'First class support for Firefox, Safari, Chrome and Edge.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-compatible.png',
                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-compatible-dark.png'
                },
                {
                    title: 'Customizable Design',
                    description: 'Fully customizable with a mixture of Sass and CSS variables.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-customizable.png',
                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-customizable-dark.png'
                },
                {
                    title: 'Mobile Experience',
                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-mobile.png'
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
                    description: 'Apollo ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-icons.png'
                },
                {
                    id: 4,
                    title: 'Figma File',
                    slotType: 'description4',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-figma.png'
                }
            ],
            animationFeaturesData2: [
                {
                    id: 1,
                    title: 'Light / Dark / Dim Modes',
                    description: 'Apollo has 3 display modes to choose from; Light, Dim and Dark.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-darkmode.png'
                },
                {
                    id: 2,
                    title: 'Component Themes',
                    description: 'Apollo offers 24 built-in component themes and creating your own theme is a matter of defining couple of sass variables.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-component-themes.png'
                },
                {
                    id: 3,
                    title: '7 Menu Orientations',
                    description: 'Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal are the available menu layouts depending on your preference.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-orientations.png',
                    type: 'inline-animation',
                    inlineFeaturesData: [
                        {
                            id: 1,
                            title: 'Static',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/Static.png'
                        },
                        {
                            id: 2,
                            title: 'Slim',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/Slim.png'
                        },
                        {
                            id: 3,
                            title: 'Reveal',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/Reveal.png'
                        },
                        {
                            id: 4,
                            title: 'Horizontal',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/Horizontal.png'
                        },
                        {
                            id: 5,
                            title: 'Overlay',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/Overlay.png'
                        },
                        {
                            id: 6,
                            title: 'Slim+',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/Slim+.png'
                        },
                        {
                            id: 7,
                            title: 'Drawer',
                            src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/Drawer.png'
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'Menu Themes',
                    description: 'Stunning theming for the main menu with 3 alternatives; Color Scheme, Primary Color and Transparent.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-menu-themes.png'
                }
            ],
            license: {
                documentLink: 'https://apollo.primevue.org/documentation/',
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
                pattern: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-hero-pattern.png',
                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-hero-dashboard1.png',
                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-hero-dashboard2.png',
                description: 'Application template for Vue based on Vite with light-dim-dark modes, four menu layouts, various menu themes, sample apps, ready to use template pages and 24 PrimeVue themes.',
                liveHref: 'https://apollo.primevue.org',
                docHref: 'https://apollo.primevue.org/documentation'
            }
        };
    },
    computed: {
        fillColor() {
            return this.$appState.darkTheme ? 'var(--p-surface-900)' : 'var(--p-surface-0)';
        }
    },
    components: {
        ApolloSeparator
    }
};
</script>
