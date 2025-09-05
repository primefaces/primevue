<template>
    <TemplateContainer :templateData="sakaiData">
        <template #separator>
            <SakaiSeparator />
        </template>
    </TemplateContainer>
</template>

<script>
import TemplateConfiguration from '@/components/template/TemplateConfiguration.vue';
import TemplateFeatures from '@/components/template/TemplateFeatures.vue';
import TemplateFeaturesAnimation from '@/components/template/TemplateFeaturesAnimation.vue';
import TemplateHero from '@/components/template/TemplateHero.vue';
import SakaiLogo from '@/components/template/logo/SakaiLogo.vue';
import { markRaw } from 'vue';

export default {
    data() {
        return {
            sakaiData: {
                components: [
                    {
                        name: markRaw(TemplateHero),
                        props: {
                            templateHeroData: {
                                logo: markRaw(SakaiLogo),
                                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-hero-dashboard1.png',
                                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-hero-dashboard2.png',
                                description: 'Sakai is a free application template for Vue based on Vite.',
                                liveHref: 'https://sakai.primevue.org/',
                                docHref: 'https://sakai.primevue.org/documentation',
                                free: true,
                                storeHref: 'https://github.com/primefaces/sakai-vue',
                                supportHref: 'https://github.com/primefaces/sakai-vue/issues',
                                pattern: {
                                    className: 'select-none absolute z-[6] opacity-60 w-[50rem] h-[18rem] md:w-[52rem] md:h-[20rem] lg:w-[64rem] lg:h-[28rem] bottom-[26rem] md:bottom-0 left-0',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-hero-pattern.png'
                                }
                            }
                        }
                    },
                    {
                        name: markRaw(TemplateFeatures),
                        props: {
                            featuresData: [
                                {
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-github.png',
                                    title: 'Open Source and Free to Use',
                                    description: "Explore Sakai, our versatile, open-source Vue application template. It's free for your every innovation."
                                },
                                {
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-ready.png',
                                    title: 'Ready to Use Pages',
                                    description: 'Landing, login and error pages are provided as template pages to get started with building your app in no time.'
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
                                    title: 'Various Free Themes',
                                    description: 'Sakai has various free themes to choose from; PrimeOne Design, Bootstrap, Material Design with light and dark options.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/features-animation-darkmode.png'
                                },
                                {
                                    id: 2,
                                    title: '2 Menu Orientations',
                                    description: 'Sakai has 2 menu modes; Static and Overlay',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/atlantis/features-animation-orientations.png',
                                    type: 'inline-animation',
                                    inlineFeaturesData: [
                                        {
                                            id: 1,
                                            title: 'Static',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/Static.png'
                                        },
                                        {
                                            id: 2,
                                            title: 'Overlay',
                                            src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/Overlay.png'
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
                                description: 'Sakai is powered by Vite to get started in no time following the best practices.'
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
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/features-animation-blocks.png'
                                },
                                {
                                    id: 3,
                                    title: 'PrimeIcons',
                                    description: "Atlantis ships with PrimeIcons, PrimeTek's modern icon library including a wide range of icons for your applications.",
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/features-animation-icons.png'
                                }
                            ]
                        },
                        slots: {
                            description2: `
                    Fully compatible with <a href="https://primeblocks.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that PrimeBlocks is not included in the
                template and requires a separate purchase.`
                        }
                    },
                    {
                        name: markRaw(TemplateFeatures),
                        props: {
                            featuresData: [
                                {
                                    title: 'Fully Responsive',
                                    description: 'Sakai is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-features2-responsive.png'
                                },
                                {
                                    title: 'Cross Browser Compatible',
                                    description: 'First class support for Firefox, Safari, Chrome and Edge.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-features2-compatible.png',
                                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-features2-compatible-dark.png'
                                },
                                {
                                    title: 'Full SaSS Support',
                                    description: 'Sass is utilized for both the application and components to provide simplicity and flexibility.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-features2-customizable.png',
                                    darkSrc: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-features2-customizable-dark.png'
                                },
                                {
                                    title: 'Mobile Experience',
                                    description: 'Touch optimized enhanced mobile experience with responsive design.',
                                    src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-features2-mobile.png'
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
