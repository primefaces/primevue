<template>
    <TemplateContainer :templateData="diamondData">
        <template #separator>
            <DiamondSeparator />
        </template>
    </TemplateContainer>
</template>

<script>
import TemplateConfiguration from '@/components/template/TemplateConfiguration.vue';
import TemplateFeatures from '@/components/template/TemplateFeatures.vue';
import TemplateFeaturesAnimation from '@/components/template/TemplateFeaturesAnimation.vue';
import TemplateHero from '@/components/template/TemplateHero.vue';
import TemplateLicense from '@/components/template/TemplateLicense.vue';
import DiamondLogo from '@/components/template/logo/DiamondLogo.vue';
import { markRaw } from 'vue';

export default {
    data() {
        return {
            diamondData: {
                components: [
                    {
                        name: markRaw(TemplateHero),
                        props: {
                            templateHeroData: {
                                logo: markRaw(DiamondLogo),
                                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-remastered-hero-dashboard-1.png',
                                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-remastered-hero-dashboard-2.png',
                                description: 'An amazing application template for Vue based on Vite with light-dark modes with 8 surface colors, seven menu layouts, various menu themes, sample apps, ready to use template pages and 3 presets.',
                                liveHref: 'https://diamond.primevue.org',
                                docHref: 'https://diamond.primevue.org/documentation',
                                storeHref: 'https://primeui.store/templates/vue/diamond',
                                pattern: {
                                    className: 'select-none absolute z-[6] w-[62rem] h-[44rem] -top-8 -left-36 md:-left-12',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-hero-pattern.png'
                                }
                            }
                        }
                    },
                    {
                        name: markRaw(TemplateLicense),
                        props: {
                            license: {
                                documentLink: 'https://diamond.primevue.org/documentation/',
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
                                    title: 'Light / Dark Modes',
                                    description: 'Diamond has 2 display modes to choose from Light / Dark with 8 surface colors.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/features-remastered-animation-darkmode.png'
                                },
                                {
                                    id: 2,
                                    title: 'Themes and Presets',
                                    description: 'Diamond offers 17 built-in theme colors with the power of 3 presets: Aura, Lara and Nora.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/features-remastered-animation-component-themes.png'
                                },
                                {
                                    id: 3,
                                    title: '7 Menu Orientations',
                                    description: 'Static, Overlay, Slim, Compact, Horizontal, Reveal and Drawer are the available menu layouts depending on your preference.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/features-remastered-animation-orientations.png',
                                    type: 'inline-animation',
                                    inlineFeaturesData: [
                                        {
                                            id: 1,
                                            title: 'Static',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/static-remastered.png'
                                        },
                                        {
                                            id: 2,
                                            title: 'Slim',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/slim-remastered.png'
                                        },
                                        {
                                            id: 3,
                                            title: 'Horizontal',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/horizontal-remastered.png'
                                        },
                                        {
                                            id: 4,
                                            title: 'Drawer',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/drawer-remastered.png'
                                        },
                                        {
                                            id: 5,
                                            title: 'Overlay',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/overlay-remastered.png'
                                        },
                                        {
                                            id: 6,
                                            title: 'Compact',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/compact-remastered.png'
                                        },
                                        {
                                            id: 7,
                                            title: 'Reveal',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/reveal-remastered.png'
                                        }
                                    ]
                                },
                                {
                                    id: 4,
                                    title: 'Menu Themes',
                                    description: 'Stunning theming options for the main menu.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/features-remastered-animation-orientations.png'
                                }
                            ]
                        }
                    },
                    {
                        name: markRaw(TemplateConfiguration),
                        props: {
                            configurationData: {
                                title: 'Vue App with No Configuration',
                                description: 'Diamond is powered by Vite to get started in no time following the best practices.'
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
                                    description: 'Diamond ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-icons.png'
                                },
                                {
                                    id: 4,
                                    title: 'Figma File',
                                    slotType: 'description4',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/features-remastered-animation-figma.png'
                                }
                            ]
                        },
                        slots: {
                            description2: `
                    Fully compatible with <a href="https://primeblocks.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that PrimeBlocks is not included in the
                template and requires a separate purchase.`,
                            description4: `
                    Diamond uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/design/3BgdXCQjva5nUEO8OidU1B/Preview-%7C-Diamond?node-id=0-1&t=KdfljgRtYLzFPfKL-1 target="_blank" rel="noopener noreferrer"">preview the Figma file</a> before the purchase. Note that PrimeVue UI components are excluded from the Diamond Figma file as they
                are available in <PrimeVueNuxtLink to="/uikit">PrimeOne for Figma</PrimeVueNuxtLink> only.`
                        }
                    },
                    {
                        name: markRaw(TemplateFeatures),
                        props: {
                            featuresData: [
                                {
                                    title: 'Fully Responsive',
                                    description: 'Diamond is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-remastered-features-responsive.png'
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
                                    description: 'Fully customizable with CSS variables.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-customizable.png',
                                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-customizable-dark.png'
                                },
                                {
                                    title: 'Ready to Use Pages',
                                    description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-remastered-features-ready.png'
                                },
                                {
                                    title: 'Mobile Experience',
                                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-remastered-features-mobile.png'
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
