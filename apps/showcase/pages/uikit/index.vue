<template>
    <div>
        <Head>
            <Title>UI Kit - PrimeVue</Title>
            <Meta name="description" content="Design files for PrimeVue Components." />
        </Head>

        <div>
            <div style="border-radius: 50px; max-height: 500px" class="overflow-hidden mb-8 flex items-center">
                <img alt="PrimeVue Figma UI Kit" :src="coverImage" class="w-full" />
            </div>

            <div class="card !mb-8" style="border-radius: 50px">
                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div class="w-full md:w-6/12">
                        <img v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-4 animate-duration-1000' }" alt="PrimeVue UI Kit" src="https://primefaces.org/cdn/primevue/images/uikit/uikit-figma.png" class="w-full" />
                    </div>
                    <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-4 animate-duration-1000' }" class="w-full md:w-6/12">
                        <div class="text-primary font-bold mb-2">UP-TO-DATE</div>
                        <div class="text-5xl font-bold mb-4">Best Features of Figma</div>
                        <p class="mb-4 text-lg">PrimeOne for Figma uses the latest powerful features like components, variants, auto layout, styles, variables and interactive components. It'll always follow the best practices.</p>

                        <ul class="flex flex-wrap m-0 p-0 text-lg">
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Auto Layout</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Variants</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Variables and Styles</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Interactive Components</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Boolean, Instance Swap and Text Properties</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Nested Instances</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-4 animate-duration-1000' }" class="w-full md:w-6/12">
                        <div class="text-primary font-bold mb-2">ENTERPRISE GRADE</div>
                        <div class="text-5xl font-bold mb-4">Powerful System</div>
                        <p class="mb-4 text-lg">Save countless hours on every project with a carefully designed system that uses Prime UI Suite components. Start producing design results in no time.</p>

                        <ul class="flex flex-wrap m-0 p-0 text-lg">
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Numerous Components</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Icon Library</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Easy Customization</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Atomic Approach</span>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full md:w-6/12">
                        <img v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-4 animate-duration-1000' }" alt="PrimeVue Designer" src="https://primefaces.org/cdn/primevue/images/uikit/uikit-system.png" class="w-full" />
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div class="w-full md:w-6/12">
                        <img v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-4 animate-duration-1000' }" alt="PrimeVue Designer" src="https://primefaces.org/cdn/primevue/images/uikit/uikit-themes.png" class="w-full" />
                    </div>
                    <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-4 animate-duration-1000' }" class="w-full md:w-6/12">
                        <div class="text-primary font-bold mb-2">DARK MODE</div>
                        <div class="text-5xl font-bold mb-4">Two Themes</div>
                        <p class="mb-4 text-lg">PrimeOne is designed based on Aura Light and Aura Dark themes. Easily change the themes of your designs using Figma's Swap Library feature or Tokens Studio Sets.</p>

                        <ul class="flex flex-wrap m-0 p-0 text-lg">
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Aura Light</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Aura Dark</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-4 animate-duration-1000' }" class="w-full md:w-6/12">
                        <div class="text-primary font-bold mb-2">TOKENS STUDIO</div>
                        <div class="text-5xl font-bold mb-4">Tokens Support</div>
                        <p class="mb-4 text-lg">Empower yourself with unprecedented control over your designs. Tokens Studio integration unlocks a whole new level of flexibility, allowing you to create and manage design tokens seamlessly.</p>

                        <ul class="flex flex-wrap m-0 p-0 text-lg">
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Countless Design Tokens</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Light and Dark Sets</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Well Documented</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Primitive, Semantic and Component Tokens</span>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full md:w-6/12">
                        <img v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-4 animate-duration-1000' }" alt="Tokens Support" src="https://primefaces.org/cdn/primevue/images/uikit/uikit-tokens.png" class="w-full" />
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div class="w-full md:w-6/12">
                        <img v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-4 animate-duration-1000' }" alt="PrimeVue Designer" src="https://primefaces.org/cdn/designer/feature-2.png" class="w-full" />
                    </div>
                    <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-4 animate-duration-1000' }" class="w-full md:w-6/12">
                        <div class="text-primary font-bold mb-2">AUTOMATED</div>
                        <div class="text-5xl font-bold mb-4">Figma to Theme</div>
                        <p class="mb-4 text-lg">
                            <i>This feature requires a <NuxtLink to="/designer" class="doc-link">Theme Designer</NuxtLink> subscription.</i>
                        </p>
                        <p class="mb-4 text-lg">
                            Bridge the gap between design and development with our powerful Figma sync technology. Fully integrated with the PrimeVue Figma UI Kit, get started in no time by importing your design token file. Save countless hours in
                            your workflow by eliminating manual theme creation from Figma designs.
                        </p>

                        <ul class="flex flex-wrap m-0 p-0 text-lg">
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Automatic Mapping</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Eliminate Handoff</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Maintain Perfect Fidelity</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Verify Synchorization</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-6 md:gap-6 mb-8">
                <a
                    href="https://www.figma.com/design/JRSFCni27PU4TrqOjoWeOA/Preview-%7C PrimeOne-|-3.1.0?node-id=806-36648&t=CpfshQ7laurr043o-1"
                    class="p-8 w-full md:w-6/12 bg-white flex flex-col items-center border-2 border-transparent hover:border-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="border-radius: 50px"
                >
                    <span class="text-gray-900 text-4xl font-bold mb-8">Preview Light</span>
                    <img alt="Figma Light" src="https://primefaces.org/cdn/primevue/images/uikit/logo-figma-light.svg" class="w-16" />
                </a>
                <a
                    href="https://www.figma.com/design/ybRv6Rx2vGo9vQR0KRRt6G/Preview-%7C-Dark-%7C PrimeOne-|-3.1.0?node-id=6738-55117&t=XXwVln6ycpiKPlSS-1"
                    class="p-8 w-full md:w-6/12 bg-gray-900 flex flex-col items-center border-2 border-transparent hover:border-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="border-radius: 50px"
                >
                    <span class="text-white text-4xl font-bold mb-8">Preview Dark</span>
                    <img alt="Figma Dark" src="https://primefaces.org/cdn/primevue/images/uikit/logo-figma-dark.svg" class="w-16" />
                </a>
            </div>

            <div class="card !mb-8" style="border-radius: 50px">
                <div class="font-bold text-5xl mb-6 text-center">Pricing</div>
                <div class="mb-2 text-center leading-normal text-lg">Choose the right plan for your business. Whether you are an individual or a member of a team, UI Kit is available for affordable prices.</div>
                <div class="text-center mb-8">
                    <a href="https://www.primefaces.org/uikit/licenses" class="doc-link">View License Details</a>
                </div>

                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 lg:col-span-4">
                        <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }" class="p-4 h-full">
                            <div class="shadow p-8 h-full flex flex-col bg-surface-0 dark:bg-surface-900" style="border-radius: 6px">
                                <div class="font-medium text-xl mb-2">Single Designer</div>
                                <div class="text-surface-500 dark:text-surface-400 font-medium">For individual designers</div>
                                <hr class="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <div class="flex flex-wrap gap-4">
                                    <span class="text-2xl font-bold">$249</span>
                                </div>
                                <hr class="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <ul class="list-none p-0 m-0 grow text-lg">
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span class="font-bold">1 Designer</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Auto Layout & Variants</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Interactive Components</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Tokens Studio Support</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span class="inline-flex items-center gap-2">1 Year Free Updates <Badge v-tooltip="'$99 for + 1 Year'" value="?" severity="secondary" /></span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Use on Unlimited Projects</span>
                                    </li>
                                </ul>
                                <hr class="mb-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700 mt-auto" />
                                <a v-ripple href="https://www.primefaces.org/store/uikit.xhtml" class="bg-blue-500 text-white hover:bg-blue-400 p-4 w-full rounded text-center transition-colors duration-300 font-bold p-ripple">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-4">
                        <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }" class="p-4 h-full">
                            <div class="shadow p-8 h-full flex flex-col bg-surface-0 dark:bg-surface-900" style="border-radius: 6px">
                                <div class="font-medium text-xl mb-2">Team</div>
                                <div class="text-surface-500 dark:text-surface-400 font-medium">For small teams</div>
                                <hr class="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <div class="flex flex-wrap gap-4">
                                    <span class="text-2xl font-bold">$990</span>
                                </div>
                                <hr class="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <ul class="list-none p-0 m-0 grow text-lg">
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span class="font-bold">Up to 5 Designers</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Auto Layout & Variants</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Interactive Components</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Tokens Studio Support</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span class="inline-flex items-center gap-2">1 Year Free Updates <Badge v-tooltip="'$249 for + 1 Year'" value="?" severity="secondary" /></span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Use on Unlimited Projects</span>
                                    </li>
                                </ul>
                                <hr class="mb-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <a v-ripple href="https://www.primefaces.org/store/uikit.xhtml" class="bg-purple-500 text-white hover:bg-purple-400 p-4 w-full rounded text-center transition-colors duration-300 font-bold p-ripple">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-4">
                        <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }" class="p-4 h-full">
                            <div class="shadow p-8 flex flex-col bg-surface-0 dark:bg-surface-900" style="border-radius: 6px">
                                <div class="font-medium text-xl mb-2">Enterprise</div>
                                <div class="text-surface-500 dark:text-surface-400 font-medium">For large teams</div>
                                <hr class="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <div class="flex gap-4 flex-wrap">
                                    <span class="text-2xl font-bold">EXCLUSIVE DEALS</span>
                                </div>
                                <hr class="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <ul class="list-none p-0 m-0 grow text-lg">
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span class="font-bold">Custom Team Size</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Auto Layout & Variants</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Interactive Components</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Tokens Studio Support</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span class="inline-flex items-center gap-2">1 Year Free Updates <Badge v-tooltip="'Contact Us'" value="?" severity="secondary" /></span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Use on Unlimited Projects</span>
                                    </li>
                                </ul>
                                <hr class="mb-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <a v-ripple href="mailto:contact@primetek.com.tr" class="bg-gray-500 text-white hover:bg-gray-400 p-4 w-full rounded text-center transition-colors duration-300 font-bold p-ripple">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card" style="border-radius: 50px">
                <span class="block font-bold text-5xl mb-8 text-center">Frequently Asked Questions</span>
                <div class="grid grid-cols-12 gap-4 text-lg">
                    <div class="col-span-12 lg:col-span-4 px-2 lg:px-8">
                        <div class="leading-normal mb-2 font-bold">What do I get when I purchase a license?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">You'll be able to download two Figma files for light and dark themes.</p>

                        <div class="leading-normal mb-2 font-bold">Is there a recurring fee or is the license perpetual?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">UI Kit license is perpetual so requires one time payment with 1 year free updates, not subscription based.</p>

                        <div class="leading-normal mb-2 font-bold">Can I use UI Kit license for commercial projects?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">Yes, your license allows you to sell your projects that utilize the UI Kit implementations.</p>

                        <div class="leading-normal mb-2 font-bold">Can I create multiple projects for multiple clients?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">There is no limit, you are able to use UI Kit in multiple projects for multiple clients.</p>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-2 lg:px-8">
                        <div class="leading-normal mb-2 font-bold">What Does "Free Updates" Mean?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">
                            All updates are completely free for the first year after your purchase. After this one-year period, you will no longer have access to newer versions. However, all versions released within the first year from your purchase
                            date will remain accessible to you indefinitely.
                        </p>

                        <div class="leading-normal mb-2 font-bold">How Can I Extend My Access to Updates After One Year?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">At PrimeStore, you have the option to purchase an additional update term. This will grant you access to all existing versions and updates for another year.</p>

                        <div class="leading-normal mb-2 font-bold">How can I get support?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">
                            PrimeTek offers assistance with account management and licensing issues, with the expectation that users have the necessary technical knowledge to use our products, as we do not offer technical support or consulting. Users
                            can seek assistance in our community via our public <a href="https://discord.com/invite/gzKFYnpmCY" class="doc-link">Discord</a> and
                            <a href="https://github.com/orgs/primefaces/discussions/categories/figma-ui-kit" class="doc-link">Forum</a>.
                        </p>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-2 lg:px-8">
                        <div class="leading-normal mb-2 font-bold">Does the enterprise license include contractors within the organization?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">Yes, contractors are also able to use the UI Kit within your company within the custom team limit.</p>

                        <div class="leading-normal mb-2 font-bold">Can subsidiary company of a larger organization share the enterprise license?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">No, enterprise license is per company so each subsidiary company needs to purchase a separate license.</p>

                        <div class="leading-normal mb-2 font-bold">Can I include UI Kit in an open source project?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">Due to the license, it is not possible to use the UI Kit in an open source project where the design files are publicly available.</p>

                        <div class="leading-normal mb-2 font-bold">We're a reseller, are we able to purchase a license on behalf of our client?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">Yes, after the purchase, please <a href="mailto:contact@primetek.com.tr" class="doc-link">contact us</a> so we can transfer the license to your client.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        coverImage() {
            const image = this.$appState.darkTheme ? 'images/uikit/primeone-cover-dark.jpeg' : 'images/uikit/primeone-cover-light.jpeg';

            return 'https://primefaces.org/cdn/primevue/' + image;
        }
    }
};
</script>
