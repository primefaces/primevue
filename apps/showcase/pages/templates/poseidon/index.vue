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

export default {
    data() {
        return {
            poseidonData: {
                components: [
                    {
                        name: TemplateHero,
                        props: {
                            templateHeroData: {
                                logo: PoseidonLogo,
                                pattern: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/hero-background.png',
                                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/poseidon-hero-dashboard1.png',
                                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/poseidon-hero-dashboard2.png',
                                description: 'A modern and easy to use premium application template with various color schemes.Based on flat design language, it is fully responsive, touch optimized, built with SASS, CSS3 and HTML5.',
                                liveHref: 'https://poseidon.primevue.org',
                                docHref: 'https://poseidon.primevue.org/documentation',
                                pattern: {
                                    className: 'select-none absolute z-[6] w-[72rem] md:w-[100rem] h-auto bottom-[25rem] -left-40 md:-bottom-12 xl:bottom-0 md:-left-48 xl:-left-28 opacity-90',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/hero-background.png'
                                }
                            }
                        }
                    },
                    {
                        name: TemplateLicense,
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
                                    description: 'Poseidon offers you 3 uniquely designed layout modes to choose from; Light, Dim, and Dark.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/features-animation-darkmode.png'
                                },
                                {
                                    id: 2,
                                    title: 'Component Themes',
                                    description: 'Poseidon offers 12 built-in component themes with dark, light and dim options. Also if you wanna create your own theme you can do it by just defining couple SASS variables.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/features-animation-component-themes.png'
                                },
                                {
                                    id: 3,
                                    title: '3 Menu Orientations',
                                    description: 'Poseidon has 3 menu layouts to choose from; Static, Overlay and Horizontal.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/features-animation-orientations.png',
                                    type: 'inline-animation',
                                    inlineFeaturesData: [
                                        {
                                            id: 1,
                                            title: 'Static',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/Static.png'
                                        },
                                        {
                                            id: 2,
                                            title: 'Overlay',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/Overlay.png'
                                        },
                                        {
                                            id: 3,
                                            title: 'Horizontal',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/Horizontal.png'
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        name: TemplateConfiguration,
                        props: {
                            configurationData: {
                                title: 'Vue based on Vite',
                                description: 'Poseidon is powered by Vite to get started in no time following the best practices.'
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
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/features-animation-utilities.png'
                                },
                                {
                                    id: 2,
                                    title: 'PrimeBlocks',
                                    description: 'Fully compatible with PrimeBlocks, choose from the wide range of blocks and customize the way you like. Note that PrimeBlocks is not included in the template and requires a separate purchase.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/features-animation-blocks.png'
                                },
                                {
                                    id: 3,
                                    title: 'PrimeIcons',
                                    description: 'Poseidon ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/features-animation-icons.png'
                                }
                            ]
                        },
                        slots: {
                            description2: `
                    Fully compatible with <a href="https://primeblocks.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://primeblocks.org/">PrimeBlocks</a> is not included in the
                template and requires a separate purchase.`
                        }
                    },
                    {
                        name: TemplateFeatures,
                        props: {
                            featuresData: [
                                {
                                    title: 'Fully Responsive',
                                    description: 'Apollo is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/poseidon-features2-responsive.png'
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
