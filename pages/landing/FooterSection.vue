<template>
    <section class="landing-footer pt-8 pad-section">
        <div class="flex flex-wrap z-1">
            <div class="w-6 lg:w-3 flex">
                <ul class="list-none p-0 m-0">
                    <li class="font-bold mb-5">General</li>
                    <li class="mb-4">
                        <nuxt-link to="/setup" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Get Started</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="w-6 lg:w-3 flex">
                <ul class="list-none p-0 m-0">
                    <li class="font-bold mb-5">Support</li>
                    <li class="mb-4">
                        <nuxt-link to="https://forum.primefaces.org/viewforum.php?f=57" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Forum</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="https://discord.gg/gzKFYnpmCY" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Discord</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="/support" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">PRO Support</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="w-6 lg:w-3 flex">
                <ul class="list-none p-0 m-0">
                    <li class="font-bold mt-5 lg:mt-0 mb-5">Resources</li>
                    <li class="mb-4">
                        <nuxt-link to="https://www.youtube.com/channel/UCTgmp69aBOlLnPEqlUyetWw" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">PrimeTV</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="https://www.primefaces.org/store/" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Store</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="https://github.com/primefaces/primevue" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Source Code</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="https://twitter.com/primevue" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Twitter</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="https://www.primefaces.org/newsletter" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Newsletter</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="https://gear.primefaces.org/" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">PrimeGear</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="mailto:contact@primetek.com.tr" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Contact Us</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="w-6 lg:w-3 flex">
                <ul class="list-none p-0 m-0">
                    <li class="font-bold mt-5 lg:mt-0 mb-5">Theming</li>
                    <li class="mb-4">
                        <nuxt-link to="/theming" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Guide</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="https://www.primefaces.org/designer/primevue" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Designer</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="/colors" class="text-secondary font-medium hover:text-primary transition-colors transition-duration-150">Colors</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>

        <hr class="section-divider mt-8" />

        <div class="flex justify-content-between py-6">
            <span>
                <img :src="'/demo/images/primevue-logo-' + `${$appState.darkTheme ? 'light' : 'dark'}` + '.svg'" alt="primevue logo" />
            </span>
            <div class="flex align-items-center">
                <nuxt-link to="https://twitter.com/primevue" class="linkbox block w-3rem h-3rem flex align-items-center justify-content-center mr-3">
                    <i class="pi pi-twitter"></i>
                </nuxt-link>
                <nuxt-link to="https://github.com/primefaces/primevue" class="linkbox block w-3rem h-3rem flex align-items-center justify-content-center mr-3">
                    <i class="pi pi-github"></i>
                </nuxt-link>
                <nuxt-link to="https://discord.gg/gzKFYnpmCY" class="linkbox block w-3rem h-3rem flex align-items-center justify-content-center">
                    <i class="pi pi-discord"></i>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>