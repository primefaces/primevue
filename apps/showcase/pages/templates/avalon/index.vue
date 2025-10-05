<template>
    <TemplateContainer :templateData="avalonData">
        <template #separator>
            <AvalonSeparator />
        </template>
    </TemplateContainer>
</template>

<script>
import TemplateConfiguration from '@/components/template/TemplateConfiguration.vue';
import TemplateFeatures from '@/components/template/TemplateFeatures.vue';
import TemplateFeaturesAnimation from '@/components/template/TemplateFeaturesAnimation.vue';
import TemplateHero from '@/components/template/TemplateHero.vue';
import TemplateLicense from '@/components/template/TemplateLicense.vue';
import AvalonLogo from '@/components/template/logo/AvalonLogo.vue';
import { markRaw } from 'vue';

export default {
    data() {
        return {
            avalonData: {
                components: [
                    {
                        name: markRaw(TemplateHero),
                        props: {
                            templateHeroData: {
                                logo: markRaw(AvalonLogo),
                                rectangle: false,
                                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/avalon-hero-dashboard1.jpg',
                                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/avalon-hero-dashboard2.jpg',
                                description: 'A sleek, user-friendly premium app template featuring a highly customizable layout. Built with Tailwind CSS, it`s fully responsive, touch-optimized, and developed with PrimeVue.',
                                liveHref: 'https://avalon.primevue.org/',
                                docHref: 'https://avalon.primevue.org/documentation',
                                storeHref: 'https://primeui.store/templates/vue/avalon',
                                pattern: {
                                    className: 'select-none absolute md:w-[60rem] h-auto md:bottom-0 bottom-40 -left-32 xl:-left-12 md:-left-32 z-[6] opacity-75',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/avalon-hero-pattern.png'
                                }
                            }
                        }
                    },
                    {
                        name: markRaw(TemplateLicense),
                        props: {
                            license: {
                                documentLink: 'https://avalon.primevue.org/documentation',
                                description: 'The download package is a Vite-based project containing all application source codes deployed at the live demo. The project code is written in JavaScript.',
                                showDiscount: false,
                                licenseDetails: [
                                    {
                                        title: 'Basic License',
                                        price: '$59',
                                        discount: '$29',
                                        included: ['Non Commercial Usage', 'Single End Product, No Multi-Use', '1 Year Free Updates | $19 for +1 year']
                                    },
                                    {
                                        title: 'Extended License',
                                        price: '$590',
                                        discount: '$290',
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
                                    description: '2 color schemes with 8 surface color alternatives for each.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/features-animation-darkmode.jpg'
                                },
                                {
                                    id: 2,
                                    title: 'Themes and Presets',
                                    description: 'Avalon offers 17 built-in theme colors with the power of 3 presets: Aura, Lara and Nora.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/features-animation-component-themes.jpg'
                                },
                                {
                                    id: 3,
                                    title: '7 Menu Orientations',
                                    description: 'Static, Overlay, Slim, Compact, Horizontal, Reveal and Drawer are the available menu layouts depending on your preference.',
                                    type: 'inline-animation',
                                    inlineFeaturesData: [
                                        {
                                            id: 1,
                                            title: 'Static',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/static.png'
                                        },
                                        {
                                            id: 2,
                                            title: 'Slim',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/slim.png'
                                        },
                                        {
                                            id: 3,
                                            title: 'Reveal',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/reveal.png'
                                        },
                                        {
                                            id: 4,
                                            title: 'Horizontal',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/horizontal.png'
                                        },
                                        {
                                            id: 5,
                                            title: 'Overlay',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/overlay.png'
                                        },
                                        {
                                            id: 6,
                                            title: 'Compact',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/compact.png'
                                        },
                                        {
                                            id: 7,
                                            title: 'Drawer',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/drawer.png'
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
                                title: 'Vue App with No Configuration',
                                description: 'Avalon is powered by Vite to get started in no time following the best practices.'
                            }
                        }
                    },
                    {
                        name: markRaw(TemplateFeatures),
                        props: {
                            featuresData: [
                                {
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/avalon-features1-feature1.png',
                                    title: 'Ready to Use Applications',
                                    description: 'Mail, File System, Tasks, Blog and Chat are the sample applications to get started with ease.'
                                },
                                {
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/avalon-features1-feature2.png',
                                    title: 'E-Commerce Pages',
                                    description: 'Avalon offers E-commerce pages to kickstart your e-commerce project powered by PrimeBlocks.'
                                },
                                {
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/avalon-features1-feature3.png',
                                    title: 'Ready to Use Pages',
                                    description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.'
                                }
                            ],
                            displayType: 'horizontal'
                        }
                    },
                    {
                        name: markRaw(TemplateFeaturesAnimation),
                        props: {
                            featuresData: [
                                {
                                    id: 1,
                                    title: 'Tailwind CSS',
                                    description: 'Avalon is built with TailwindCSS, offering flexibility and efficiency for responsive design.',
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
                                    description: 'Ships with PrimeIcons, PrimeTek`s modern icon library including a wide range of icons for your applications.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-icons.png'
                                },
                                {
                                    id: 4,
                                    title: 'Figma File',
                                    slotType: 'description4',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/features-animation-figma.png'
                                }
                            ]
                        },
                        slots: {
                            description2: `
                    Fully compatible with <a href="https://primeblocks.org/" target="_blank" rel="noopener noreferrer">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that PrimeBlocks is not included in the
                template and requires a separate purchase.`,
                            description4: `
                    Avalon uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/design/kOSpIMmOxQ3vWq7md9ZIqZ/Preview-%7C-Avalon-%7C-2.0.0?node-id=6184-14861&t=2WN09Iqp8HcYlKkE-1" target="_blank" rel="noopener noreferrer">preview the Figma file</a> before the purchase. Note that PrimeVue UI components are excluded from the
                Avalon Figma file as they are available in <PrimeVueNuxtLink to="/uikit">PrimeOne for Figma</PrimeVueNuxtLink> only.`
                        }
                    },
                    {
                        name: markRaw(TemplateFeatures),
                        props: {
                            featuresData: [
                                {
                                    title: 'Fully Responsive',
                                    description: 'Avalon is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/avalon-features2-responsive.jpg'
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
                                    description: 'Fully customizable with a wide range of CSS variables.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-customizable.png',
                                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-customizable-dark.png'
                                },
                                {
                                    title: 'Top Notch Quality',
                                    description: 'Superior standards featuring 100% compatibility with linting tools.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-quality.png',
                                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-quality-dark.png'
                                },
                                {
                                    title: 'Mobile Experience',
                                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/avalon/nextgen/avalon-features2-mobile.jpg'
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
