<template>
    <TemplateContainer :templateData="ultimaData">
        <template #separator>
            <UltimaSeparator />
        </template>
    </TemplateContainer>
</template>

<script>
import TemplateConfiguration from '@/components/template/TemplateConfiguration.vue';
import TemplateFeatures from '@/components/template/TemplateFeatures.vue';
import TemplateFeaturesAnimation from '@/components/template/TemplateFeaturesAnimation.vue';
import TemplateHero from '@/components/template/TemplateHero.vue';
import TemplateLicense from '@/components/template/TemplateLicense.vue';
import UltimaLogo from '@/components/template/logo/UltimaLogo.vue';
import { markRaw } from 'vue';

export default {
    data() {
        return {
            ultimaData: {
                components: [
                    {
                        name: markRaw(TemplateHero),
                        props: {
                            templateHeroData: {
                                logo: markRaw(UltimaLogo),
                                description: 'A highly customizable premium application template featuring 7 menu modes, various themes, light and dark modes based on Material Design.',
                                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/ultima/ultima-hero-dashboard1.png',
                                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/ultima/ultima-hero-dashboard2.png',
                                liveHref: 'https://ultima.primevue.org',
                                docHref: 'https://ultima.primevue.org/documentation',
                                storeHref: 'https://primeui.store/templates/vue/ultima',
                                pattern: {
                                    className: 'select-none absolute z-[6] opacity-75 w-[80rem] h-auto bottom-8 -left-64 md:-bottom-[26rem] md:-left-[22rem]',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/ultima-hero-pattern.png'
                                }
                            }
                        }
                    },
                    {
                        name: markRaw(TemplateLicense),
                        props: {
                            license: {
                                documentLink: 'https://ultima.primevue.org/documentation/',
                                description: 'The download package is a Vite-based project containing all application source codes deployed at the live demo. The project code is written in JavaScript.',
                                showDiscount: false,
                                licenseDetails: [
                                    {
                                        title: 'Basic License',
                                        price: '$59',
                                        discount: '$39',
                                        included: ['Non Commercial Usage', 'Single End Product, No Multi-Use', '1 Year Free Updates | $19 for +1 year']
                                    },
                                    {
                                        title: 'Extended License',
                                        price: '$590',
                                        discount: '$390',
                                        included: ['Commercial Usage', 'Multiple End Products', '1 Year Free Updates | $190 for +1 year']
                                    }
                                ]
                            }
                        }
                    },
                    {
                        name: markRaw(TemplateFeaturesAnimation),
                        props: {
                            title: 'Features',
                            featuresData: [
                                {
                                    id: 1,
                                    title: 'Light and Dark Modes',
                                    description: 'Ultima offers you 2 uniquely designed layout modes to choose from; Light and Dark.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/ultima/features-animation-darkmode.png'
                                },
                                {
                                    id: 2,
                                    title: 'Component Themes',
                                    description: '17 built-in theme colors for the Material Design preset.',
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
                            ]
                        }
                    },
                    {
                        name: markRaw(TemplateConfiguration),
                        props: {
                            configurationData: {
                                title: 'Vue based on Vite',
                                description: 'Ultima is powered by Vite to get started in no time following the best practices.'
                            }
                        }
                    },
                    {
                        name: markRaw(TemplateFeaturesAnimation),
                        props: {
                            featuresData: [
                                {
                                    id: 1,
                                    title: 'Tailwind CSS',
                                    description: 'The demo content is built with TailwindCSS, while the application shell uses custom CSS, offering flexibility and efficiency for responsive design.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/common/tailwind.png'
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
                            ]
                        },
                        slots: {
                            description2: `
                    Fully compatible with <a href="https://primeblocks.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that PrimeBlocks is not included in the
                template and requires a separate purchase.`,
                            description4: `
                                                    Ultima uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/file/ijQrxq13lxacgkb6XHlLxA/Preview-%7C-Ultima-2022?node-id=354%3A7715&t=gjWHprUDE5RJIg78-1">preview the Figma file</a> before the purchase. Note that PrimeVue UI components are excluded from the Ultima
                Figma file as they are available in <PrimeVueNuxtLink to="/uikit">PrimeOne for Figma</PrimeVueNuxtLink> only.`
                        }
                    },
                    {
                        name: markRaw(TemplateFeatures),
                        props: {
                            featuresData: [
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
                                    title: 'Support',
                                    description: `PrimeTek offers assistance with account management and licensing issues, with the expectation that users have the necessary technical knowledge to use our products, as we do not offer technical support or consulting. Users
                                        can seek assistance in our community via our public <a href="https://discord.com/invite/gzKFYnpmCY">Discord</a> and
                                        <a href="https://github.com/orgs/primefaces/discussions/categories/primevue-templates" class="doc-link">Forum</a>.`,
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
                            displayType: 'vertical'
                        }
                    }
                ]
            }
        };
    }
};
</script>
