<template>
    <TemplateContainer :templateData="poseidonData">
        <template #separator>
            <PoseidonSeparator />
        </template>
    </TemplateContainer>
</template>

<script>
import TemplateConfiguration from '@/components/template/TemplateConfiguration.vue';
import TemplateFeatures from '@/components/template/TemplateFeatures.vue';
import TemplateFeaturesAnimation from '@/components/template/TemplateFeaturesAnimation.vue';
import TemplateHero from '@/components/template/TemplateHero.vue';
import TemplateLicense from '@/components/template/TemplateLicense.vue';
import PoseidonLogo from '@/components/template/logo/PoseidonLogo.vue';
import { markRaw } from 'vue';

export default {
    data() {
        return {
            poseidonData: {
                components: [
                    {
                        name: markRaw(TemplateHero),
                        props: {
                            templateHeroData: {
                                logo: markRaw(PoseidonLogo),
                                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-hero-1.jpg',
                                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-hero-2.jpg',
                                description:
                                    'Experience a modern, user-friendly premium application template featuring a variety of color schemes. Based on flat design principles, it is fully responsive and touch-optimized, built with SASS, CSS3, and HTML5.',
                                liveHref: 'https://poseidon.primevue.org',
                                docHref: 'https://poseidon.primevue.org/documentation',
                                storeHref: 'https://primeui.store/templates/vue/poseidon',
                                pattern: {
                                    className: 'select-none absolute z-[6] w-[72rem] md:w-[100rem] h-auto bottom-[25rem] -left-40 md:-bottom-12 xl:bottom-0 md:-left-48 xl:-left-28 opacity-90',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/hero-background.png'
                                }
                            }
                        }
                    },
                    {
                        name: markRaw(TemplateLicense),
                        props: {
                            license: {
                                documentLink: 'https://poseidon.primevue.org/documentation/',
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
                                    description: 'Poseidon offers light and dark color schemes with alternative color palettes.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-lightdark.png'
                                },
                                {
                                    id: 2,
                                    title: 'Component Themes',
                                    description: 'Poseidon offers 17 fully customizable built-in themes featuring two different presets; Aura and Lara.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-component.png'
                                },
                                {
                                    id: 3,
                                    title: '7 Menu Orientations',
                                    description: 'Poseidon has 7 menu layouts to choose from; Static, Overlay, Horizontal, Compact, Slim, Reveal and Drawer.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/features-animation-orientations.png',
                                    type: 'inline-animation',
                                    inlineFeaturesData: [
                                        {
                                            id: 1,
                                            title: 'Static',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-static.png'
                                        },
                                        {
                                            id: 2,
                                            title: 'Overlay',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-overlay.png'
                                        },
                                        {
                                            id: 3,
                                            title: 'Horizontal',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-horizontal.png'
                                        },
                                        {
                                            id: 4,
                                            title: 'Drawer',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-drawer.png'
                                        },
                                        {
                                            id: 5,
                                            title: 'Slim',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-slim.png'
                                        },
                                        {
                                            id: 6,
                                            title: 'Compact',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-compact.png'
                                        },
                                        {
                                            id: 7,
                                            title: 'Reveal',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-reveal.png'
                                        }
                                    ]
                                },
                                {
                                    id: 4,
                                    title: 'Application Themes',
                                    description: 'The application layout and components seamlessly complements your brand color.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-layout.png'
                                }
                            ]
                        }
                    },
                    {
                        name: markRaw(TemplateConfiguration),
                        props: {
                            configurationData: {
                                title: 'Vue based on Vite',
                                description: 'Poseidon is powered by Vite to get started in no time following the best practices.'
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
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/features-animation-blocks.png'
                                },
                                {
                                    id: 3,
                                    title: 'PrimeIcons',
                                    description: 'Poseidon ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/features-animation-icons.png'
                                },
                                {
                                    id: 4,
                                    title: 'Figma File',
                                    slotType: 'description4',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-figma.png'
                                }
                            ]
                        },
                        slots: {
                            description2: `
                    Fully compatible with <a href="https://primeblocks.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that PrimeBlocks is not included in the
                    template and requires a separate purchase.`,
                            description4: `
                    Poseidon uses Figma as the design tool. It will be possible to download the Figma file after your purchase.
                    You can <a href="https://www.figma.com/design/eMNbyxsMp3H0PQbMyyGK77/Preview-%7C-Poseidon?node-id=0-1&t=wJRSplRnKvjqju9S-1" target="_blank" rel="noopener noreferrer">preview the Figma file</a> the Figma file before the purchase.
                    Note that PrimeVue UI components are excluded from the Poseidon Figma file as they are available in PrimeOne for Figma only.`
                        }
                    },
                    {
                        name: markRaw(TemplateFeatures),
                        props: {
                            featuresData: [
                                {
                                    title: 'Fully Responsive',
                                    description: 'Poseidon is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-responsive.png'
                                },
                                {
                                    title: 'Support',
                                    description: `PrimeTek offers assistance with account management and licensing issues, with the expectation that users have the necessary technical knowledge to use our products, as we do not offer technical support or consulting. Users
                                        can seek assistance in our community via our public <a href="https://discord.com/invite/gzKFYnpmCY">Discord</a> and
                                        <a href="https://github.com/orgs/primefaces/discussions/categories/primevue-templates" class="doc-link">Forum</a>.`,
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-features2-lifetime.png'
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
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-mobile.png'
                                },
                                {
                                    title: 'Ready to Use Pages',
                                    description: 'Landing, dashboards, user management, mail, chat, authentication and many more to discover.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/nextgen/poseidon-pages.png'
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
