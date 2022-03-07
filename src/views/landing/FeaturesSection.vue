<template>
    <section class="landing-features py-8">
        <div class="section-header">Features</div>
        <p class="section-detail">PrimeVue is the most complete solution for your UI requirements.</p>
        <div class="grid mt-7 pad-section" :style="{backgroundImage:`url('demo/images/landing/wave-${$appState.darkTheme ? 'dark-alt' : 'light-alt'}.svg')`, backgroundSize:'cover'}">
            <div class="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                <div class="box p-4 w-full">
                    <img src="demo/images/landing/features/icon-components.svg" alt="components icon" class="block mb-3"/>
                    <div class="font-semibold mb-3 text-lg">90+ UI Components</div>
                    <p class="m-0 text-secondary font-medium">The ultimate set of UI Components to assist you with 90+ impressive Vue Components.</p>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                <div class="box p-4 w-full">
                    <img src="demo/images/landing/features/icon-community.svg" alt="components icon" class="block mb-3"/>
                    <div class="font-semibold mb-3 text-lg">Community</div>
                    <p class="m-0 text-secondary font-medium">Connect with the other open source community members, collaborate and have a voice in the project roadmap.</p>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                <div class="box p-4 w-full">
                    <img src="demo/images/landing/features/icon-productivity.svg" alt="components icon" class="block mb-3"/>
                    <div class="font-semibold mb-3 text-lg">Productivity</div>
                    <p class="m-0 text-secondary font-medium">Boost your productivity by achieving more in less time and accomplish amazing results.</p>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                <div class="box p-4 w-full">
                    <img src="demo/images/landing/features/icon-accessibility.svg" alt="components icon" class="block mb-3"/>
                    <div class="font-semibold mb-3 text-lg">Accessibility</div>
                    <p class="m-0 text-secondary font-medium">Compliant with the Web Content Accessibility Guidelines (WCAG 2.0).</p>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                <div class="box p-4 w-full">
                    <img src="demo/images/landing/features/icon-support.svg" alt="components icon" class="block mb-3"/>
                    <div class="font-semibold mb-3 text-lg">Enterprise Support</div>
                    <p class="m-0 text-secondary font-medium">Exceptional support service featuring response within 1 business day and option to request enhancements and new features for the library.</p>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                <div class="box p-4 w-full">
                    <img src="demo/images/landing/features/icon-mobile.svg" alt="components icon" class="block mb-3"/>
                    <div class="font-semibold mb-3 text-lg">Mobile</div>
                    <p class="m-0 text-secondary font-medium">First class support for responsive design led by touch optimized elements.</p>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                <div class="box p-4 w-full">
                    <img src="demo/images/landing/features/icon-theme.svg" alt="components icon" class="block mb-3"/>
                    <div class="font-semibold mb-3 text-lg">Themes</div>
                    <p class="m-0 text-secondary font-medium">Built on a design-agnostic api, choose from a vast amount of themes such as material, bootstrap, custom or develop your own.</p>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3 flex justify-content-center p-3">
                <div class="box p-4 w-full">
                    <img src="demo/images/landing/features/icon-ts.svg" alt="components icon" class="block mb-3"/>
                    <div class="font-semibold mb-3 text-lg">Typescript</div>
                    <p class="m-0 text-secondary font-medium">Top-notch support for Typescript with types and tooling assistance.</p>
                </div>
            </div>
        </div>
    </section>
</template>