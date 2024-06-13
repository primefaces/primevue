<template>
    <div class="sakai template">
        <TemplateHero :templateHeroData="templateHeroData">
            <template #logo>
                <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3182_1798)">
                        <g clipPath="url(#clip1_3182_1798)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                                :fill="fillColor"
                            />
                            <path d="M27 18.3653C10.5114 19.1945 0 8.88896 0 8.88896C0 8.88896 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88896 54 8.88896C54 8.88896 43.4886 17.5361 27 18.3653Z" :fill="fillColor" />
                        </g>
                        <path
                            d="M79.0753 15.2344C78.9825 14.366 78.5914 13.6899 77.902 13.206C77.2192 12.7221 76.331 12.4801 75.2372 12.4801C74.4683 12.4801 73.8087 12.5961 73.2585 12.8281C72.7083 13.0601 72.2874 13.375 71.9957 13.7727C71.7041 14.1705 71.5549 14.6245 71.5483 15.1349C71.5483 15.5592 71.6444 15.9271 71.8366 16.2386C72.0355 16.5502 72.304 16.8153 72.642 17.0341C72.9801 17.2462 73.3546 17.4252 73.7656 17.571C74.1766 17.7169 74.5909 17.8395 75.0085 17.9389L76.9176 18.4162C77.6866 18.5952 78.4257 18.8371 79.1349 19.142C79.8509 19.447 80.4905 19.8314 81.054 20.2955C81.6241 20.7595 82.0748 21.3196 82.4062 21.9759C82.7377 22.6321 82.9034 23.401 82.9034 24.2827C82.9034 25.4759 82.5985 26.5265 81.9886 27.4347C81.3788 28.3362 80.4972 29.0421 79.3438 29.5526C78.197 30.0563 76.8082 30.3082 75.1776 30.3082C73.5933 30.3082 72.2178 30.063 71.0511 29.5724C69.8911 29.0819 68.983 28.366 68.3267 27.4247C67.6771 26.4834 67.3258 25.3366 67.2727 23.9844H70.902C70.955 24.6937 71.1738 25.2836 71.5582 25.7543C71.9427 26.2249 72.4432 26.5762 73.0597 26.8082C73.6828 27.0402 74.3788 27.1562 75.1477 27.1562C75.9498 27.1562 76.6525 27.0369 77.2557 26.7983C77.8655 26.553 78.3428 26.215 78.6875 25.7841C79.0322 25.3466 79.2079 24.8362 79.2145 24.2528C79.2079 23.7225 79.0521 23.285 78.7472 22.9403C78.4422 22.589 78.0147 22.2973 77.4645 22.0653C76.9209 21.8267 76.2846 21.6146 75.5554 21.429L73.2386 20.8324C71.5616 20.4015 70.2358 19.7486 69.2614 18.8736C68.2936 17.992 67.8097 16.822 67.8097 15.3636C67.8097 14.1638 68.1345 13.1132 68.7841 12.2116C69.4403 11.3101 70.3319 10.6108 71.4588 10.1136C72.5857 9.60985 73.8617 9.35795 75.2869 9.35795C76.732 9.35795 77.9981 9.60985 79.0852 10.1136C80.179 10.6108 81.0374 11.3035 81.6605 12.1918C82.2836 13.0734 82.6051 14.0876 82.625 15.2344H79.0753ZM90.4279 30.3082C89.4601 30.3082 88.5884 30.1359 87.8129 29.7912C87.0439 29.4399 86.4341 28.9228 85.9833 28.2401C85.5392 27.5573 85.3171 26.7154 85.3171 25.7145C85.3171 24.8527 85.4762 24.1402 85.7944 23.5767C86.1126 23.0133 86.5468 22.5625 87.0969 22.2244C87.6471 21.8864 88.2669 21.6312 88.9563 21.4588C89.6523 21.2798 90.3716 21.1506 91.114 21.071C92.0089 20.9782 92.7347 20.8954 93.2915 20.8224C93.8484 20.7429 94.2527 20.6236 94.5046 20.4645C94.7631 20.2988 94.8924 20.0436 94.8924 19.6989V19.6392C94.8924 18.8902 94.6703 18.3101 94.2262 17.8991C93.7821 17.4882 93.1424 17.2827 92.3072 17.2827C91.4255 17.2827 90.7262 17.4749 90.2092 17.8594C89.6987 18.2438 89.354 18.6979 89.1751 19.2216L85.8143 18.7443C86.0794 17.8163 86.5169 17.0407 87.1268 16.4176C87.7366 15.7879 88.4824 15.3172 89.364 15.0057C90.2456 14.6875 91.2201 14.5284 92.2873 14.5284C93.0231 14.5284 93.7556 14.6146 94.4847 14.7869C95.2139 14.9593 95.8801 15.2443 96.4833 15.642C97.0865 16.0331 97.5704 16.5668 97.935 17.2429C98.3062 17.919 98.4918 18.7642 98.4918 19.7784V30H95.0316V27.902H94.9123C94.6935 28.3262 94.3853 28.724 93.9876 29.0952C93.5965 29.4598 93.1026 29.7547 92.506 29.9801C91.9161 30.1989 91.2234 30.3082 90.4279 30.3082ZM91.3626 27.6634C92.0851 27.6634 92.7115 27.5208 93.2418 27.2358C93.7721 26.9441 94.1798 26.5597 94.4648 26.0824C94.7565 25.6051 94.9023 25.0848 94.9023 24.5213V22.7216C94.7897 22.8144 94.5974 22.9006 94.3256 22.9801C94.0605 23.0597 93.7622 23.1293 93.4308 23.1889C93.0993 23.2486 92.7712 23.3016 92.4464 23.348C92.1216 23.3944 91.8398 23.4342 91.6012 23.4673C91.0643 23.5402 90.5837 23.6596 90.1594 23.8253C89.7352 23.991 89.4005 24.223 89.1552 24.5213C88.9099 24.813 88.7873 25.1908 88.7873 25.6548C88.7873 26.3177 89.0292 26.8182 89.5131 27.1562C89.997 27.4943 90.6135 27.6634 91.3626 27.6634ZM105.392 25.2074L105.382 20.8622H105.959L111.448 14.7273H115.654L108.902 22.2443H108.157L105.392 25.2074ZM102.111 30V9.63636H105.711V30H102.111ZM111.696 30L106.725 23.0497L109.151 20.5142L116.002 30H111.696ZM122.447 30.3082C121.48 30.3082 120.608 30.1359 119.832 29.7912C119.063 29.4399 118.454 28.9228 118.003 28.2401C117.559 27.5573 117.337 26.7154 117.337 25.7145C117.337 24.8527 117.496 24.1402 117.814 23.5767C118.132 23.0133 118.566 22.5625 119.116 22.2244C119.667 21.8864 120.286 21.6312 120.976 21.4588C121.672 21.2798 122.391 21.1506 123.134 21.071C124.028 20.9782 124.754 20.8954 125.311 20.8224C125.868 20.7429 126.272 20.6236 126.524 20.4645C126.783 20.2988 126.912 20.0436 126.912 19.6989V19.6392C126.912 18.8902 126.69 18.3101 126.246 17.8991C125.802 17.4882 125.162 17.2827 124.327 17.2827C123.445 17.2827 122.746 17.4749 122.229 17.8594C121.718 18.2438 121.374 18.6979 121.195 19.2216L117.834 18.7443C118.099 17.8163 118.536 17.0407 119.146 16.4176C119.756 15.7879 120.502 15.3172 121.384 15.0057C122.265 14.6875 123.24 14.5284 124.307 14.5284C125.043 14.5284 125.775 14.6146 126.504 14.7869C127.233 14.9593 127.9 15.2443 128.503 15.642C129.106 16.0331 129.59 16.5668 129.955 17.2429C130.326 17.919 130.511 18.7642 130.511 19.7784V30H127.051V27.902H126.932C126.713 28.3262 126.405 28.724 126.007 29.0952C125.616 29.4598 125.122 29.7547 124.526 29.9801C123.936 30.1989 123.243 30.3082 122.447 30.3082ZM123.382 27.6634C124.105 27.6634 124.731 27.5208 125.261 27.2358C125.792 26.9441 126.199 26.5597 126.484 26.0824C126.776 25.6051 126.922 25.0848 126.922 24.5213V22.7216C126.809 22.8144 126.617 22.9006 126.345 22.9801C126.08 23.0597 125.782 23.1293 125.45 23.1889C125.119 23.2486 124.791 23.3016 124.466 23.348C124.141 23.3944 123.859 23.4342 123.621 23.4673C123.084 23.5402 122.603 23.6596 122.179 23.8253C121.755 23.991 121.42 24.223 121.175 24.5213C120.929 24.813 120.807 25.1908 120.807 25.6548C120.807 26.3177 121.049 26.8182 121.533 27.1562C122.017 27.4943 122.633 27.6634 123.382 27.6634ZM134.131 30V14.7273H137.73V30H134.131ZM135.94 12.5597C135.37 12.5597 134.88 12.3707 134.469 11.9929C134.058 11.6084 133.852 11.1477 133.852 10.6108C133.852 10.0672 134.058 9.60653 134.469 9.22869C134.88 8.84422 135.37 8.65199 135.94 8.65199C136.517 8.65199 137.008 8.84422 137.412 9.22869C137.823 9.60653 138.028 10.0672 138.028 10.6108C138.028 11.1477 137.823 11.6084 137.412 11.9929C137.008 12.3707 136.517 12.5597 135.94 12.5597Z"
                            :fill="fillColor"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_3182_1798">
                            <rect width="140" height="40" :fill="fillColor" />
                        </clipPath>
                        <clipPath id="clip1_3182_1798">
                            <rect width="54" height="40" :fill="fillColor" />
                        </clipPath>
                    </defs>
                </svg>
            </template>
        </TemplateHero>
        <SakaiSeparator />
        <TemplateFeatures :featuresData="features1Data" displayType="horizontal" />
        <SakaiSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData2" title="Features" :animationSeconds="3000" />
        <SakaiSeparator />
        <TemplateConfiguration title="Vue based on Vite and Nuxt" description="Sakai is powered by Vite and Nuxt to get started in no time following the best practices." />
        <SakaiSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData1">
            <template #description2>
                Fully compatible with <a href="https://blocks.primevue.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://blocks.primevue.org/">PrimeBlocks</a> is not included in the
                template and requires a separate purchase.
            </template>
        </TemplateFeaturesAnimation>
        <SakaiSeparator />
        <TemplateFeatures :featuresData="features2Data" displayType="vertical" />
    </div>
</template>

<script>
import SakaiSeparator from '@/doc/templates/SakaiSeparator.vue';

export default {
    data() {
        return {
            features2Data: [
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
            animationFeaturesData1: [
                {
                    id: 1,
                    title: 'PrimeFlex CSS Utilities',
                    description: 'PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/sakai/features-animation-utilities.png'
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
            ],
            animationFeaturesData2: [
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
            ],
            features1Data: [
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
            templateHeroData: {
                pattern: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-hero-pattern.png',
                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-hero-dashboard1.png',
                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/sakai/sakai-hero-dashboard2.png',
                description: 'Sakai is a free application template for Vue based on Vite and Nuxt.',
                liveHref: 'https://sakai.primevue.org/',
                docHref: 'https://sakai.primevue.org/documentation',
                free: true,
                storeHref: 'https://github.com/primefaces/sakai-vue',
                supportHref: 'https://github.com/primefaces/sakai-vue/issues'
            }
        };
    },
    computed: {
        fillColor() {
            return this.$appState.darkTheme ? 'var(--p-surface-900)' : 'var(--p-surface-0)';
        }
    },
    components: {
        SakaiSeparator
    }
};
</script>
