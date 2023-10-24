<template>
    <section class="landing-features py-8">
        <div class="section-header">Features</div>
        <p class="section-detail">PrimeVue is the most complete solution for your UI requirements.</p>
        <div class="mt-7 px-5 lg:px-8">
            <div class="features-container">
                <div class="grid">
                    <div class="col-12 md:col-6 xl:col-3 flex justify-content-center">
                        <div v-animateonscroll.once="{ enterClass: 'fadein' }" class="box p-4 w-full animation-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-components.svg" alt="components icon" class="block mb-3" />
                            <div class="font-semibold mb-3 text-lg">80+ UI Components</div>
                            <p class="m-0 text-secondary font-medium">The ultimate set of UI Components to assist you with 80+ impressive Vue Components.</p>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 xl:col-3 flex justify-content-center">
                        <div v-animateonscroll.once="{ enterClass: 'fadein' }" class="box p-4 w-full animation-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-theme.svg" alt="components icon" class="block mb-3" />
                            <div class="font-semibold mb-3 text-lg">Styled or Unstyled</div>
                            <p class="m-0 text-secondary font-medium">Choose from a variety of pre-built themes or implement your design systems with the CSS library of your choice like TailwindCSS.</p>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 xl:col-3 flex justify-content-center">
                        <div v-animateonscroll.once="{ enterClass: 'fadein' }" class="box p-4 w-full animation-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-community.svg" alt="components icon" class="block mb-3" />
                            <div class="font-semibold mb-3 text-lg">Community</div>
                            <p class="m-0 text-secondary font-medium">Connect with the other open source community members, collaborate and have a voice in the project roadmap.</p>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 xl:col-3 flex justify-content-center">
                        <div v-animateonscroll.once="{ enterClass: 'fadein' }" class="box p-4 w-full animation-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-accessibility.svg" alt="components icon" class="block mb-3" />
                            <div class="font-semibold mb-3 text-lg">Accessibility</div>
                            <p class="m-0 text-secondary font-medium">Compliant with the Web Content Accessibility Guidelines (WCAG 2.0).</p>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 xl:col-3 flex justify-content-center">
                        <div v-animateonscroll.once="{ enterClass: 'fadein' }" class="box p-4 w-full animation-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-support.svg" alt="components icon" class="block mb-3" />
                            <div class="font-semibold mb-3 text-lg">Enterprise Support</div>
                            <p class="m-0 text-secondary font-medium">Exceptional support service featuring response within 1 business day and option to request enhancements and new features for the library.</p>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 xl:col-3 flex justify-content-center">
                        <div v-animateonscroll.once="{ enterClass: 'fadein' }" class="box p-4 w-full animation-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-mobile.svg" alt="components icon" class="block mb-3" />
                            <div class="font-semibold mb-3 text-lg">Mobile</div>
                            <p class="m-0 text-secondary font-medium">First class support for responsive design led by touch optimized elements.</p>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 xl:col-3 flex justify-content-center">
                        <div v-animateonscroll.once="{ enterClass: 'fadein' }" class="box p-4 w-full animation-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-productivity.svg" alt="components icon" class="block mb-3" />
                            <div class="font-semibold mb-3 text-lg">Blocks</div>
                            <p class="m-0 text-secondary font-medium">400+ pre-designed copy paste ready UI blocks to build spectacular apps in no time.</p>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 xl:col-3 flex justify-content-center">
                        <div v-animateonscroll.once="{ enterClass: 'fadein' }" class="box p-4 w-full animation-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-ts.svg" alt="components icon" class="block mb-3" />
                            <div class="font-semibold mb-3 text-lg">Typescript</div>
                            <p class="m-0 text-secondary font-medium">Top-notch support for Typescript with types and tooling assistance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
