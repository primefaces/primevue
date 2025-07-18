<template>
    <TemplateContainer :templateData="genesisData">
        <template #separator>
            <GenesisSeparator />
        </template>
    </TemplateContainer>
</template>

<script>
import GenesisLogo from '@/components/template/logo/GenesisLogo.vue';
import TemplateConfiguration from '@/components/template/TemplateConfiguration.vue';
import TemplateFeatures from '@/components/template/TemplateFeatures.vue';
import TemplateFeaturesAnimation from '@/components/template/TemplateFeaturesAnimation.vue';
import TemplateHero from '@/components/template/TemplateHero.vue';
import TemplateLicense from '@/components/template/TemplateLicense.vue';
import { markRaw } from 'vue';

export default {
    data() {
        return {
            genesisData: {
                components: [
                    {
                        name: markRaw(TemplateHero),
                        props: {
                            templateHeroData: {
                                logo: markRaw(GenesisLogo),
                                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/genesis/dashboard-2.png',
                                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/genesis/dashboard-1.png',
                                description: 'Genesis, crafted by Prime, is the ultimate multi-purpose website template built with Vue and Nuxt. It offers unmatched versatility and performance with a suite of example pages to elevate your projects.',
                                liveHref: 'https://genesis.primevue.org',
                                pattern: {
                                    className: 'select-none absolute z-[6] w-[58rem] md:w-[50rem] h-auto top-12 md:top-32 -left-24 md:-left-12 opacity-75',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/genesis/hero-pattern.png'
                                },
                                isMultipurpose: true
                            }
                        }
                    },
                    {
                        name: markRaw(TemplateLicense),
                        props: {
                            license: {
                                description: 'The download package is a Nuxt-based project containing all application source codes deployed at the live demo. The project code is written in JavaScript.',
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
                                    title: 'Various Landing Pages',
                                    description: 'Choose from 9 templates for industries like SaaS, Travel, and Real Estate, each tailored to specific business needs.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/genesis/animation-landing-pages.png'
                                },
                                {
                                    id: 2,
                                    title: 'Secondary Pages',
                                    description: 'Includes essential pages like About, Pricing, Blog, and Contact for a complete user experience.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/genesis/animation-second-pages.png'
                                },
                                {
                                    id: 3,
                                    title: 'Dark & Light Modes',
                                    description: 'Easily switch between Light and Dark modes to match your aesthetic preferences.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/genesis/animation-dark-light-modes.png'
                                },
                                {
                                    id: 4,
                                    title: 'Themes',
                                    description: 'Customize with 16 color themes to align with your brand effortlessly.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/genesis/animation-menu-themes.png'
                                }
                            ]
                        }
                    },
                    {
                        name: markRaw(TemplateConfiguration),
                        props: {
                            configurationData: {
                                title: 'Nuxt App with No Configuration',
                                description: 'Genesis is powered by Nuxt to get started in no time following the best practices.'
                            }
                        }
                    },
                    {
                        name: markRaw(TemplateFeatures),
                        props: {
                            featuresData: [
                                {
                                    title: 'Modern and Sleek Design',
                                    description: 'Enjoy a contemporary design that looks great on all devices.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/genesis/horizontal-features-img-1.png'
                                },
                                {
                                    title: 'SEO & Performance',
                                    description: 'Optimized for fast loading and high search engine rankings.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/genesis/horizontal-features-img-2.png'
                                },
                                {
                                    title: 'Animation / Effects',
                                    description: 'Enhance engagement with captivating animations and effects.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/genesis/horizontal-features-img-3.png'
                                }
                            ],
                            displayType: 'horizontal'
                        }
                    },
                    {
                        name: markRaw(TemplateFeaturesAnimation),
                        props: {
                            title: 'Features',
                            featuresData: [
                                {
                                    id: 1,
                                    title: 'Tailwind',
                                    description: 'Built with TailwindCSS, offering flexibility and efficiency for responsive design. Enjoy the power of Tailwind, a favorite among developers.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/genesis/animation-tailwind.png'
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
                                    description: 'Genesis ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/apollo/features-animation-icons.png'
                                },
                                {
                                    id: 4,
                                    title: 'Figma File',
                                    slotType: 'description4',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/genesis/animation-figma.png'
                                }
                            ]
                        },
                        slots: {
                            description2: `
                                Fully compatible with <a href="https://primeblocks.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that
                                <a href="https://primeblocks.org/">PrimeBlocks</a> is not included in the template and requires a separate purchase.`,
                            description4: `
                                Genesis uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can
                                <a href="https://www.figma.com/design/bGujrJyznnSatJFMtkXbTN/Preview-%7C-Genesis?node-id=0-1&t=etuXAwkUAEuhJ3p0-1" target="_blank" rel="noopener noreferrer">preview the Figma file</a> before the purchase. Note that PrimeVue UI components are
                                excluded from the Genesis Figma file as they are available in <PrimeVueNuxtLink to="/uikit">PrimeOne for Figma</PrimeVueNuxtLink> only.`
                        }
                    },
                    {
                        name: markRaw(TemplateFeatures),
                        props: {
                            featuresData: [
                                {
                                    title: 'Fully Responsive',
                                    description: 'Genesis is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/genesis/fully-responsive.png'
                                },
                                {
                                    title: 'Support',
                                    description: `PrimeTek offers assistance with account management and licensing issues, with the expectation that users have the necessary technical knowledge to use our products, as we do not offer technical support or consulting. Users
                                        can seek assistance in our community via our public <a href="https://discord.com/invite/gzKFYnpmCY">Discord</a> and
                                        <a href="https://github.com/orgs/primefaces/discussions/categories/primevue-templates" class="doc-link">Forum</a>.`,
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
                            displayType: 'vertical'
                        }
                    }
                ]
            }
        };
    }
};
</script>
