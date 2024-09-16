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

export default {
    data() {
        return {
            diamondData: {
                components: [
                    {
                        name: TemplateHero,
                        props: {
                            templateHeroData: {
                                logo: DiamondLogo,
                                pattern: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-hero-pattern.png',
                                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-hero-dashboard1.png',
                                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-hero-dashboard2.png',
                                description: 'An amazing application template for Vue based on Vite with light-dim-dark modes, four menu layouts, various menu themes, sample apps, ready to use template pages and 30 PrimeVue themes.',
                                liveHref: 'https://diamond.primevue.org',
                                docHref: 'https://diamond.primevue.org/documentation',
                                pattern: {
                                    className: 'select-none absolute z-[6] w-[62rem] h-[44rem] -top-8 -left-36 md:-left-12',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-hero-pattern.png'
                                }
                            }
                        }
                    },
                    {
                        name: TemplateLicense,
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
                                        included: ['Non Commercial Usage', 'Single End Product, No Multi-Use', '1 Year Free Updates']
                                    },
                                    {
                                        title: 'Extended License',
                                        price: '$590',
                                        discount: '$390',
                                        included: ['Commercial Usage', 'Multiple End Products', '1 Year Free Updates']
                                    }
                                ]
                            }
                        }
                    },
                    {
                        name: TemplateFeaturesAnimation,
                        props: {
                            title: 'Features',
                            featuresData: [
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
                            ]
                        }
                    },
                    {
                        name: TemplateConfiguration,
                        props: {
                            configurationData: {
                                title: 'Vue App with No Configuration',
                                description: 'Diamond is powered by Vite to get started in no time following the best practices.'
                            }
                        }
                    },
                    {
                        name: TemplateFeaturesAnimation,
                        props: {
                            featuresData: [
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
                            ]
                        },
                        slots: {
                            description2: `
                    Fully compatible with <a href="https://primeblocks.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://primeblocks.org/">PrimeBlocks</a> is not included in the
                template and requires a separate purchase.`,
                            description4: `
                    Diamond uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                <a href="https://www.figma.com/file/lKooXEoqqWz7PBYwJ7B8QS/Preview-%7C-Diamond-2022?node-id=271%3A12531">preview the Figma file</a> before the purchase. Note that PrimeVue UI components are excluded from the Diamond Figma file as they
                are available in <PrimeVueNuxtLink to="/uikit">PrimeOne for Figma</PrimeVueNuxtLink> only.`
                        }
                    },
                    {
                        name: TemplateFeatures,
                        props: {
                            featuresData: [
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
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-features2-ready.png'
                                },
                                {
                                    title: 'Mobile Experience',
                                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/diamond/diamond-features2-mobile.png'
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
