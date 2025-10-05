<template>
    <TemplateContainer :templateData="freyaData">
        <template #separator>
            <FreyaSeparator />
        </template>
    </TemplateContainer>
</template>

<script>
import TemplateConfiguration from '@/components/template/TemplateConfiguration.vue';
import TemplateFeatures from '@/components/template/TemplateFeatures.vue';
import TemplateFeaturesAnimation from '@/components/template/TemplateFeaturesAnimation.vue';
import TemplateHero from '@/components/template/TemplateHero.vue';
import TemplateLicense from '@/components/template/TemplateLicense.vue';
import FreyaLogo from '@/components/template/logo/FreyaLogo.vue';
import { markRaw } from 'vue';

export default {
    data() {
        return {
            freyaData: {
                components: [
                    {
                        name: markRaw(TemplateHero),
                        props: {
                            templateHeroData: {
                                logo: markRaw(FreyaLogo),
                                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/freya/freya-hero-dashboard1.png',
                                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/freya/freya-hero-dashboard2.png',
                                description: 'Freya is a modern admin template for developers and IT professionals. It comes with a huge collection of reusable UI components and dozens of built-in layouts for various purposes.',
                                liveHref: 'https://freya.primevue.org',
                                docHref: 'https://freya.primevue.org/documentation',
                                storeHref: 'https://primeui.store/templates/vue/freya',
                                pattern: {
                                    className: 'select-none absolute z-[6] w-[58rem] md:w-[50rem] h-auto top-12 md:top-32 -left-24 md:-left-12 opacity-75',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya/freya-hero-pattern.png'
                                }
                            }
                        }
                    },
                    {
                        name: markRaw(TemplateLicense),
                        props: {
                            license: {
                                documentLink: 'https://freya.primevue.org/documentation',
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
                                    description: 'Impress your users with the Light and Dark modes.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya/features-animation-darkmode.png'
                                },
                                {
                                    id: 2,
                                    title: 'Component Themes',
                                    description: '17 built-in theme colors with the power of 2 presets: Aura and Lara.',
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
                            ]
                        }
                    },
                    {
                        name: markRaw(TemplateConfiguration),
                        props: {
                            configurationData: {
                                title: 'Vue based on Vite',
                                description: 'Freya is powered by Vite to get started in no time following the best practices.'
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
                                    description: 'Freya ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-icons.png'
                                },
                                {
                                    id: 4,
                                    title: 'Figma File',
                                    slotType: 'description4',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya/features-animation-figma.png'
                                }
                            ]
                        },
                        slots: {
                            description2: `
                    Fully compatible with <a href="https://primeblocks.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that PrimeBlocks is not included in the
                template and requires a separate purchase.`,
                            description4: `
                                    Freya uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/file/eYBoRNff6GPTlrgYZaMStp/Preview-%7C-Freya-2022?node-id=0%3A1&t=MGAABDlOnz4QBcEk-1" target="_blank" rel="noopener noreferrer">preview the Figma file</a> before the purchase. Note that PrimeVue UI components are excluded from the Freya Figma
                file as they are available in <PrimeVueNuxtLink to="/uikit">PrimeOne for Figma</PrimeVueNuxtLink> only.`
                        }
                    },
                    {
                        name: markRaw(TemplateFeatures),
                        props: {
                            featuresData: [
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
                                    description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya/freya-features2-ready.png'
                                },
                                {
                                    title: 'Mobile Experience',
                                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/freya/freya-features2-mobile.png'
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
