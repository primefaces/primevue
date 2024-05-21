<template>
    <div class="apollo template">
        <TemplateHero :templateHeroData="templateHeroData">
            <template #logo>
                <svg width="168" height="40" viewBox="0 0 168 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2005_187770)">
                        <path
                            d="M52.5781 32.5V24.4873H54.8047C57.5098 24.4873 59.5947 23.8916 61.0596 22.7002C62.5244 21.5088 63.2568 19.7949 63.2568 17.5586C63.2568 15.4297 62.5903 13.8184 61.2573 12.7246C59.9243 11.6309 57.9199 11.084 55.2441 11.084H49.0771V32.5H52.5781ZM54.4385 21.543H52.5781V14.0137H55.0098C56.6016 14.0137 57.7734 14.3164 58.5254 14.9219C59.2773 15.5273 59.6533 16.4453 59.6533 17.6758C59.6533 19.0039 59.2334 19.9805 58.3936 20.6055C57.5537 21.2305 56.2354 21.543 54.4385 21.543ZM72.458 32.793C74.8799 32.793 76.7695 32.0508 78.127 30.5664C79.4844 29.082 80.1631 27.0166 80.1631 24.3701C80.1631 21.8115 79.4795 19.7778 78.1123 18.269C76.7451 16.7603 74.8897 16.0059 72.5459 16.0059C70.0947 16.0059 68.1953 16.7432 66.8477 18.2178C65.5 19.6924 64.8262 21.7432 64.8262 24.3701C64.8262 26.0596 65.1387 27.5439 65.7637 28.8232C66.3887 30.1025 67.2822 31.084 68.4443 31.7676C69.6064 32.4512 70.9443 32.793 72.458 32.793ZM72.5166 29.9805C69.7529 29.9805 68.3711 28.1104 68.3711 24.3701C68.3711 22.583 68.6958 21.2109 69.3452 20.2539C69.9946 19.2969 71.042 18.8184 72.4873 18.8184C75.2412 18.8184 76.6182 20.6689 76.6182 24.3701C76.6182 28.1104 75.251 29.9805 72.5166 29.9805ZM86.9473 32.793C89.0957 32.793 90.7461 32.3706 91.8984 31.5259C93.0508 30.6812 93.627 29.4678 93.627 27.8857C93.627 27.1045 93.4805 26.4331 93.1875 25.8716C92.8945 25.3101 92.4453 24.8145 91.8398 24.3848C91.2344 23.9551 90.2627 23.4814 88.9248 22.9639C87.333 22.3486 86.3003 21.8652 85.8267 21.5137C85.353 21.1621 85.1162 20.7324 85.1162 20.2246C85.1162 19.1895 86.0244 18.6719 87.8408 18.6719C89.0322 18.6719 90.502 19.0332 92.25 19.7559L93.3633 17.1631C91.6641 16.3916 89.8623 16.0059 87.958 16.0059C86.0342 16.0059 84.5132 16.3892 83.395 17.1558C82.2769 17.9224 81.7178 18.999 81.7178 20.3857C81.7178 21.5381 82.0474 22.4756 82.7065 23.1982C83.3657 23.9209 84.6279 24.6436 86.4932 25.3662C87.4502 25.7373 88.1973 26.0693 88.7344 26.3623C89.2715 26.6553 89.6572 26.9385 89.8916 27.2119C90.126 27.4854 90.2432 27.8271 90.2432 28.2373C90.2432 29.5166 89.1836 30.1562 87.0645 30.1562C85.4238 30.1562 83.6514 29.7168 81.7471 28.8379V31.8115C83.0557 32.4658 84.7891 32.793 86.9473 32.793ZM103.048 32.793C104.151 32.793 105.133 32.71 105.992 32.5439C106.852 32.3779 107.701 32.0947 108.541 31.6943V28.8965C107.594 29.3164 106.708 29.6167 105.882 29.7974C105.057 29.978 104.166 30.0684 103.209 30.0684C101.754 30.0684 100.626 29.646 99.8252 28.8013C99.0244 27.9565 98.5996 26.748 98.5508 25.1758H109.347V23.3154C109.347 21.04 108.727 19.2529 107.486 17.9541C106.246 16.6553 104.557 16.0059 102.418 16.0059C100.113 16.0059 98.3018 16.7627 96.9834 18.2764C95.665 19.79 95.0059 21.8701 95.0059 24.5166C95.0059 27.0947 95.7163 29.1187 97.1372 30.5884C98.5581 32.0581 100.528 32.793 103.048 32.793ZM105.963 22.6855H98.6094C98.7363 21.3574 99.1294 20.3467 99.7886 19.6533C100.448 18.96 101.324 18.6133 102.418 18.6133C103.512 18.6133 104.371 18.9575 104.996 19.646C105.621 20.3345 105.943 21.3477 105.963 22.6855ZM113.626 13.8965C114.231 13.8965 114.703 13.728 115.04 13.3911C115.376 13.0542 115.545 12.5928 115.545 12.0068C115.545 11.3916 115.376 10.918 115.04 10.5859C114.703 10.2539 114.231 10.0879 113.626 10.0879C113.001 10.0879 112.52 10.2539 112.183 10.5859C111.846 10.918 111.678 11.3916 111.678 12.0068C111.678 12.5928 111.846 13.0542 112.183 13.3911C112.52 13.728 113.001 13.8965 113.626 13.8965ZM115.325 32.5V16.2988H111.883V32.5H115.325ZM124.336 32.793C126.465 32.793 128.081 31.9873 129.185 30.376H129.346L129.946 32.5H132.642V9.70703H129.185V15.6104C129.185 16.2842 129.268 17.2021 129.434 18.3643H129.258C128.145 16.792 126.523 16.0059 124.395 16.0059C122.363 16.0059 120.774 16.7456 119.626 18.2251C118.479 19.7046 117.905 21.7725 117.905 24.4287C117.905 27.0752 118.472 29.1309 119.604 30.5957C120.737 32.0605 122.314 32.793 124.336 32.793ZM125.259 30.0098C123.989 30.0098 123.037 29.5386 122.402 28.5962C121.768 27.6538 121.45 26.2842 121.45 24.4873C121.45 22.6709 121.777 21.272 122.432 20.2905C123.086 19.3091 124.019 18.8184 125.229 18.8184C126.646 18.8184 127.686 19.248 128.35 20.1074C129.014 20.9668 129.346 22.417 129.346 24.458V24.9414C129.326 26.7285 128.994 28.02 128.35 28.8159C127.705 29.6118 126.675 30.0098 125.259 30.0098ZM142.854 32.793C145.275 32.793 147.165 32.0508 148.522 30.5664C149.88 29.082 150.559 27.0166 150.559 24.3701C150.559 21.8115 149.875 19.7778 148.508 18.269C147.141 16.7603 145.285 16.0059 142.941 16.0059C140.49 16.0059 138.591 16.7432 137.243 18.2178C135.896 19.6924 135.222 21.7432 135.222 24.3701C135.222 26.0596 135.534 27.5439 136.159 28.8232C136.784 30.1025 137.678 31.084 138.84 31.7676C140.002 32.4512 141.34 32.793 142.854 32.793ZM142.912 29.9805C140.148 29.9805 138.767 28.1104 138.767 24.3701C138.767 22.583 139.091 21.2109 139.741 20.2539C140.39 19.2969 141.438 18.8184 142.883 18.8184C145.637 18.8184 147.014 20.6689 147.014 24.3701C147.014 28.1104 145.646 29.9805 142.912 29.9805ZM156.581 32.5V24.4287C156.581 22.4072 156.918 20.9668 157.592 20.1074C158.266 19.248 159.33 18.8184 160.785 18.8184C161.879 18.8184 162.677 19.126 163.18 19.7412C163.683 20.3564 163.935 21.2891 163.935 22.5391V32.5H167.392V21.9385C167.392 17.9834 165.448 16.0059 161.562 16.0059C160.468 16.0059 159.472 16.2158 158.573 16.6357C157.675 17.0557 156.981 17.6514 156.493 18.4229H156.317L155.834 16.2988H153.139V32.5H156.581Z"
                            fill="white"
                        />
                        <path
                            d="M52.5781 32.5V24.4873H54.8047C57.5098 24.4873 59.5947 23.8916 61.0596 22.7002C62.5244 21.5088 63.2568 19.7949 63.2568 17.5586C63.2568 15.4297 62.5903 13.8184 61.2573 12.7246C59.9243 11.6309 57.9199 11.084 55.2441 11.084H49.0771V32.5H52.5781ZM54.4385 21.543H52.5781V14.0137H55.0098C56.6016 14.0137 57.7734 14.3164 58.5254 14.9219C59.2773 15.5273 59.6533 16.4453 59.6533 17.6758C59.6533 19.0039 59.2334 19.9805 58.3936 20.6055C57.5537 21.2305 56.2354 21.543 54.4385 21.543ZM72.458 32.793C74.8799 32.793 76.7695 32.0508 78.127 30.5664C79.4844 29.082 80.1631 27.0166 80.1631 24.3701C80.1631 21.8115 79.4795 19.7778 78.1123 18.269C76.7451 16.7603 74.8897 16.0059 72.5459 16.0059C70.0947 16.0059 68.1953 16.7432 66.8477 18.2178C65.5 19.6924 64.8262 21.7432 64.8262 24.3701C64.8262 26.0596 65.1387 27.5439 65.7637 28.8232C66.3887 30.1025 67.2822 31.084 68.4443 31.7676C69.6064 32.4512 70.9443 32.793 72.458 32.793ZM72.5166 29.9805C69.7529 29.9805 68.3711 28.1104 68.3711 24.3701C68.3711 22.583 68.6958 21.2109 69.3452 20.2539C69.9946 19.2969 71.042 18.8184 72.4873 18.8184C75.2412 18.8184 76.6182 20.6689 76.6182 24.3701C76.6182 28.1104 75.251 29.9805 72.5166 29.9805ZM86.9473 32.793C89.0957 32.793 90.7461 32.3706 91.8984 31.5259C93.0508 30.6812 93.627 29.4678 93.627 27.8857C93.627 27.1045 93.4805 26.4331 93.1875 25.8716C92.8945 25.3101 92.4453 24.8145 91.8398 24.3848C91.2344 23.9551 90.2627 23.4814 88.9248 22.9639C87.333 22.3486 86.3003 21.8652 85.8267 21.5137C85.353 21.1621 85.1162 20.7324 85.1162 20.2246C85.1162 19.1895 86.0244 18.6719 87.8408 18.6719C89.0322 18.6719 90.502 19.0332 92.25 19.7559L93.3633 17.1631C91.6641 16.3916 89.8623 16.0059 87.958 16.0059C86.0342 16.0059 84.5132 16.3892 83.395 17.1558C82.2769 17.9224 81.7178 18.999 81.7178 20.3857C81.7178 21.5381 82.0474 22.4756 82.7065 23.1982C83.3657 23.9209 84.6279 24.6436 86.4932 25.3662C87.4502 25.7373 88.1973 26.0693 88.7344 26.3623C89.2715 26.6553 89.6572 26.9385 89.8916 27.2119C90.126 27.4854 90.2432 27.8271 90.2432 28.2373C90.2432 29.5166 89.1836 30.1562 87.0645 30.1562C85.4238 30.1562 83.6514 29.7168 81.7471 28.8379V31.8115C83.0557 32.4658 84.7891 32.793 86.9473 32.793ZM103.048 32.793C104.151 32.793 105.133 32.71 105.992 32.5439C106.852 32.3779 107.701 32.0947 108.541 31.6943V28.8965C107.594 29.3164 106.708 29.6167 105.882 29.7974C105.057 29.978 104.166 30.0684 103.209 30.0684C101.754 30.0684 100.626 29.646 99.8252 28.8013C99.0244 27.9565 98.5996 26.748 98.5508 25.1758H109.347V23.3154C109.347 21.04 108.727 19.2529 107.486 17.9541C106.246 16.6553 104.557 16.0059 102.418 16.0059C100.113 16.0059 98.3018 16.7627 96.9834 18.2764C95.665 19.79 95.0059 21.8701 95.0059 24.5166C95.0059 27.0947 95.7163 29.1187 97.1372 30.5884C98.5581 32.0581 100.528 32.793 103.048 32.793ZM105.963 22.6855H98.6094C98.7363 21.3574 99.1294 20.3467 99.7886 19.6533C100.448 18.96 101.324 18.6133 102.418 18.6133C103.512 18.6133 104.371 18.9575 104.996 19.646C105.621 20.3345 105.943 21.3477 105.963 22.6855ZM113.626 13.8965C114.231 13.8965 114.703 13.728 115.04 13.3911C115.376 13.0542 115.545 12.5928 115.545 12.0068C115.545 11.3916 115.376 10.918 115.04 10.5859C114.703 10.2539 114.231 10.0879 113.626 10.0879C113.001 10.0879 112.52 10.2539 112.183 10.5859C111.846 10.918 111.678 11.3916 111.678 12.0068C111.678 12.5928 111.846 13.0542 112.183 13.3911C112.52 13.728 113.001 13.8965 113.626 13.8965ZM115.325 32.5V16.2988H111.883V32.5H115.325ZM124.336 32.793C126.465 32.793 128.081 31.9873 129.185 30.376H129.346L129.946 32.5H132.642V9.70703H129.185V15.6104C129.185 16.2842 129.268 17.2021 129.434 18.3643H129.258C128.145 16.792 126.523 16.0059 124.395 16.0059C122.363 16.0059 120.774 16.7456 119.626 18.2251C118.479 19.7046 117.905 21.7725 117.905 24.4287C117.905 27.0752 118.472 29.1309 119.604 30.5957C120.737 32.0605 122.314 32.793 124.336 32.793ZM125.259 30.0098C123.989 30.0098 123.037 29.5386 122.402 28.5962C121.768 27.6538 121.45 26.2842 121.45 24.4873C121.45 22.6709 121.777 21.272 122.432 20.2905C123.086 19.3091 124.019 18.8184 125.229 18.8184C126.646 18.8184 127.686 19.248 128.35 20.1074C129.014 20.9668 129.346 22.417 129.346 24.458V24.9414C129.326 26.7285 128.994 28.02 128.35 28.8159C127.705 29.6118 126.675 30.0098 125.259 30.0098ZM142.854 32.793C145.275 32.793 147.165 32.0508 148.522 30.5664C149.88 29.082 150.559 27.0166 150.559 24.3701C150.559 21.8115 149.875 19.7778 148.508 18.269C147.141 16.7603 145.285 16.0059 142.941 16.0059C140.49 16.0059 138.591 16.7432 137.243 18.2178C135.896 19.6924 135.222 21.7432 135.222 24.3701C135.222 26.0596 135.534 27.5439 136.159 28.8232C136.784 30.1025 137.678 31.084 138.84 31.7676C140.002 32.4512 141.34 32.793 142.854 32.793ZM142.912 29.9805C140.148 29.9805 138.767 28.1104 138.767 24.3701C138.767 22.583 139.091 21.2109 139.741 20.2539C140.39 19.2969 141.438 18.8184 142.883 18.8184C145.637 18.8184 147.014 20.6689 147.014 24.3701C147.014 28.1104 145.646 29.9805 142.912 29.9805ZM156.581 32.5V24.4287C156.581 22.4072 156.918 20.9668 157.592 20.1074C158.266 19.248 159.33 18.8184 160.785 18.8184C161.879 18.8184 162.677 19.126 163.18 19.7412C163.683 20.3564 163.935 21.2891 163.935 22.5391V32.5H167.392V21.9385C167.392 17.9834 165.448 16.0059 161.562 16.0059C160.468 16.0059 159.472 16.2158 158.573 16.6357C157.675 17.0557 156.981 17.6514 156.493 18.4229H156.317L155.834 16.2988H153.139V32.5H156.581Z"
                            fill="white"
                        />
                        <path
                            d="M18.3921 0.104126L22.9311 3.51015L20.8308 6.30945L19.9247 5.63038L19.9209 21.9929L26.6807 24.4556L31.3069 2.27623L36.2254 7.16564L35 10L33.4157 9.30869L29.2817 29.1279L19.9209 25.7191L19.918 38.7797H16.8555L16.8584 25.7041L7.45798 29.1279L3.3342 9.30869L1.25001 10L0.524658 7.16564L5.44487 2.27465L10.0608 24.4556L16.8584 21.9779L16.8622 5.62538L15.9517 6.30945L13.8513 3.51015L18.3921 0.104126Z"
                            fill="url(#paint0_linear_2005_187770)"
                        />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_2005_187770" x1="1785.56" y1="0.104126" x2="1785.56" y2="3867.66" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                        <clipPath id="clip0_2005_187770">
                            <rect width="167.5" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </template>
        </TemplateHero>
        <PoseidonSeparator />
        <div class="hidden">
            <TemplateYoutube imgSrc="https://primefaces.org/cdn/primevue/images/templates/apollo/apollo-youtube-screen.png"></TemplateYoutube>
            <PoseidonSeparator />
        </div>
        <TemplateLicense :license="license"></TemplateLicense>
        <PoseidonSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData2" title="Features"></TemplateFeaturesAnimation>
        <PoseidonSeparator />
        <TemplateConfiguration title="Vue based on Vite" description="Poseidon is powered by Vite to get started in no time following the best practices." />
        <PoseidonSeparator />
        <TemplateFeaturesAnimation :featuresData="animationFeaturesData1"></TemplateFeaturesAnimation>
        <PoseidonSeparator />
        <TemplateFeatures :featuresData="features2Data" displayType="vertical"></TemplateFeatures>
        <PoseidonSeparator />
        <TemplateRelated :relatedData="relatedData" />
    </div>
</template>

<script>
import PoseidonSeparator from '@/doc/templates/PoseidonSeparator.vue';

export default {
    data() {
        return {
            templateHeroData: {
                pattern: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/hero-background.png',
                dashboard1: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/poseidon-hero-dashboard1.png',
                dashboard2: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/poseidon-hero-dashboard2.png',
                description: 'A modern and easy to use premium application template with various color schemes.Based on flat design language, it is fully responsive, touch optimized, built with SASS, CSS3 and HTML5.',
                liveHref: 'https://poseidon.primevue.org',
                docHref: 'https://poseidon.primevue.org/documentation'
            },
            relatedData: [
                {
                    src: 'https://primefaces.org/cdn/primevue/images/layouts/diamond-vue.jpg',
                    href: '/templates/diamond'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/layouts/freya-vue.png',
                    href: '/templates/freya'
                },
                {
                    src: 'https://primefaces.org/cdn/primevue/images/layouts/ultima-vue.jpg',
                    href: '/templates/ultima'
                }
            ],
            features2Data: [
                {
                    title: 'Fully Responsive',
                    description: 'Apollo is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
                    src: 'https://primefaces.org/cdn/primevue/images/templates/poseidon/poseidon-features2-responsive.png'
                },
                {
                    title: 'Lifetime Support',
                    description: 'Apollo has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
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
            animationFeaturesData1: [
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
            ],
            animationFeaturesData2: [
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
            ],
            license: {
                documentLink: 'https://poseidon.primevue.org/documentation/',
                description: 'The download package is a Vite-based project containing all application source codes deployed at the live demo. The project code is written in JavaScript.',
                showDiscount: false,
                licenseDetails: [
                    {
                        title: 'Basic License',
                        price: '$59',
                        discount: '',
                        included: ['Non Commercial Usage', 'Single End Product, No Multi-Use', 'Lifetime Support', 'Unlimited Updates']
                    },
                    {
                        title: 'Extended License',
                        price: '$590',
                        discount: '',
                        included: ['Commercial Usage', 'Multiple End Products', 'Lifetime Support', 'Unlimited Updates']
                    }
                ]
            }
        };
    },
    components: {
        PoseidonSeparator
    }
};
</script>
