<template>
    <div>
        <Head>
            <Title>Theme Designer - PrimeVue</Title>
            <Meta name="description" content="Theme Designer is the ultimate tool to customize and design your own themes featuring a visual editor, figma to theme code, cloud storage, and migration assistant." />
        </Head>

        <div>
            <div style="border-radius: 50px; max-height: 500px" class="overflow-hidden mb-8 flex items-center">
                <img alt="PrimeVue Designer" :src="coverImage" class="w-full" />
            </div>

            <div class="card !mb-8" style="border-radius: 50px">
                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div class="w-full md:w-6/12">
                        <img v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-4 animate-duration-1000' }" alt="PrimeVue UI Kit" src="https://primefaces.org/cdn/designer/feature-1.png" class="w-full" />
                    </div>
                    <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-4 animate-duration-1000' }" class="w-full md:w-6/12">
                        <div class="text-primary font-bold mb-2">POWERFUL</div>
                        <div class="text-5xl font-bold mb-4">Visual Editor</div>
                        <p class="mb-4 text-lg">Transform your PrimeVue components with our advanced visual editor. Design, customize, and preview changes in real-time, all within an intuitive interface.</p>

                        <ul class="flex flex-wrap m-0 p-0 text-lg">
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Intelligent Completion</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Entire Token Set</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Custom Tokens</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Light and Dark Modes</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Real Time Preview</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Starter Kits</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-4 animate-duration-1000' }" class="w-full md:w-6/12">
                        <div class="text-primary font-bold mb-2">AUTOMATED</div>
                        <div class="text-5xl font-bold mb-4">Figma to Theme Code</div>
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
                                <span class="font-bold">CI Pipeline</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Live Preview</span>
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
                    <div class="w-full md:w-6/12">
                        <img v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-4 animate-duration-1000' }" alt="PrimeVue Designer" src="https://primefaces.org/cdn/designer/feature-2.png" class="w-full" />
                    </div>
                </div>

                <div class="flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20">
                    <div class="w-full md:w-6/12">
                        <img v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-4 animate-duration-1000' }" alt="PrimeVue Designer" src="https://primefaces.org/cdn/designer/feature-3.png" class="w-full" />
                    </div>
                    <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-4 animate-duration-1000' }" class="w-full md:w-6/12">
                        <div class="text-primary font-bold mb-2">INTELLIGENT</div>
                        <div class="text-5xl font-bold mb-4">Migration Assistant</div>
                        <p class="mb-4 text-lg">
                            Update your existing themes and design tokens into the latest version effortlessly. Our intelligent migration assistant handles the heavy lifting, ensuring a smooth transition for your design system.
                        </p>

                        <ul class="flex flex-wrap m-0 p-0 text-lg">
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Automatic Updates</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Preview Changes</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-4 animate-duration-1000' }" class="flex flex-col md:flex-row items-center gap-6 md:gap-20">
                    <div class="w-full md:w-6/12">
                        <div class="text-primary font-bold mb-2">REMOTE</div>
                        <div class="text-5xl font-bold mb-4">Cloud Storage</div>
                        <p class="mb-4 text-lg">Store and manage your themes securely in the cloud. Access your design system from anywhere with enterprise-grade cloud storage.</p>

                        <ul class="flex flex-wrap m-0 p-0 text-lg">
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Access Anywhere</span>
                            </li>
                            <li class="flex items-center w-6/12 p-4">
                                <i class="pi pi-check-circle text-green-600 mr-2"></i>
                                <span class="font-bold">Multiple Themes</span>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full md:w-6/12">
                        <img v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-4 animate-duration-1000' }" alt="Tokens Support" src="https://primefaces.org/cdn/designer/feature-4.png" class="w-full" />
                    </div>
                </div>
            </div>

            <div class="card !mb-8" style="border-radius: 50px">
                <div class="font-bold text-5xl mb-6 text-center">Pricing</div>
                <div class="mb-2 text-center leading-normal text-lg">Choose the right plan for your business. Whether you are an individual or a member of a team, Designer is available for affordable prices.</div>
                <div class="text-center mb-8">
                    <Button @click="termsVisible = true" label="View Terms and Conditions" link></Button>
                </div>

                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 lg:col-span-4">
                        <div class="p-4 h-full">
                            <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }" class="shadow p-8 h-full flex flex-col bg-surface-0 dark:bg-surface-900" style="border-radius: 6px">
                                <div class="font-medium text-xl mb-2 text-surface-900 dark:text-surface-0">Basic</div>
                                <div class="text-surface-500 dark:text-surface-400 font-medium">For small teams</div>
                                <hr class="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <div class="flex flex-wrap gap-1 items-center">
                                    <span class="text-2xl font-bold">$249</span>
                                    <span class="text-sm text-muted-color">/ year</span>
                                </div>
                                <hr class="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <ul class="list-none p-0 m-0 grow text-lg">
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-times-circle text-red-500 mr-2"></i>
                                        <span class="font-bold">Figma to Theme Code</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Up to 2 Themes</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>1 Year Service</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Visual Editor</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Migration Assistant</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Cloud Storage</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Use on Unlimited Projects</span>
                                    </li>
                                </ul>
                                <hr class="mb-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700 mt-auto" />
                                <a v-ripple href="https://primeui.store/designer" class="bg-blue-500 text-white hover:bg-blue-400 p-4 w-full rounded text-center transition-colors duration-300 font-bold p-ripple">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-4">
                        <div class="p-4 h-full">
                            <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }" class="shadow p-8 h-full flex flex-col bg-surface-0 dark:bg-surface-900" style="border-radius: 6px">
                                <div class="font-medium text-xl mb-2 text-surface-900 dark:text-surface-0">Extended</div>
                                <div class="text-surface-500 dark:text-surface-400 font-medium">For teams with UI/UX designers</div>
                                <hr class="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <div class="flex flex-wrap gap-1 items-center">
                                    <span class="text-2xl font-bold">$990</span>
                                    <span class="text-sm text-muted-color">/ year</span>
                                </div>
                                <hr class="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <ul class="list-none p-0 m-0 grow text-lg">
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span class="font-bold">Figma to Theme Code</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Up to 10 Themes</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>1 Year Service</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Visual Editor</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Migration Assistant</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Cloud Storage</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Use on Unlimited Projects</span>
                                    </li>
                                </ul>
                                <hr class="mb-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <a v-ripple href="https://primeui.store/designer" class="bg-purple-500 text-white hover:bg-purple-400 p-4 w-full rounded text-center transition-colors duration-300 font-bold p-ripple">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-4">
                        <div class="p-4 h-full">
                            <div v-animateonscroll.once="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000' }" class="shadow p-8 flex flex-col bg-surface-0 dark:bg-surface-900" style="border-radius: 6px">
                                <div class="font-medium text-xl mb-2 text-surface-900 dark:text-surface-0">Enterprise</div>
                                <div class="text-surface-500 dark:text-surface-400 font-medium">For custom requirements</div>
                                <hr class="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <div class="flex gap-4 flex-wrap">
                                    <span class="text-2xl font-bold">EXCLUSIVE DEALS</span>
                                </div>
                                <hr class="my-4 mx-0 border-t border-0 border-surface-200 dark:border-surface-700" />
                                <ul class="list-none p-0 m-0 grow text-lg">
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span class="font-bold">Figma to Theme Code</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Custom Theme Limit</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Multi Year Service</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Visual Editor</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Migration Assistant</span>
                                    </li>
                                    <li class="flex items-center mb-4">
                                        <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Cloud Storage</span>
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
                        <div class="leading-normal mb-2 font-bold">What do I get when I purchase a plan?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">A license key to unlock the features based on your plan.</p>

                        <div class="leading-normal mb-2 font-bold">Is there a recurring fee or is the license perpetual?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">Designer license key is valid for 1 year with no auto renewals.</p>

                        <div class="leading-normal mb-2 font-bold">What happens after the 1 year period is concluded?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">License key will expire and a new license key needs to be renewed to continue using the tool. Downloaded themes can be used indefinitely and does not require a renewal.</p>

                        <div class="leading-normal mb-2 font-bold">Can I have trial access to the Designer?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">Visual Editor is available for trial purposes, various features such as downloads, migration assistant and cloud storage are disabled.</p>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-2 lg:px-8">
                        <div class="leading-normal mb-2 font-bold">Can I create multiple themes?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">Yes, based on the theme limit of your plan.</p>

                        <div class="leading-normal mb-2 font-bold">How can I update my theme?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">Migration Assistant tool automatically scans your theme and adds missing tokens for the latest version.</p>

                        <div class="leading-normal mb-2 font-bold">I have purchased the Figma UI Kit, does Designer require a separate purchase?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">Yes, Figma UI Kit and Designer are different products. The Designer offers Figma to Theme Code generation feature so it is recommended to purchase both for an efficient workflow.</p>

                        <div class="leading-normal mb-2 font-bold">How can I get support?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">
                            PrimeTek offers assistance with account management and licensing issues, with the expectation that users have the necessary technical knowledge to use our products, as we do not offer technical support or consulting. Users
                            can seek assistance in our community via our public <a href="https://discord.com/invite/gzKFYnpmCY" class="doc-link">Discord</a> and
                            <a href="https://github.com/orgs/primefaces/discussions/categories/theme-designer" class="doc-link">Forum</a>.
                        </p>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-2 lg:px-8">
                        <div class="leading-normal mb-2 font-bold">Is there a limit on the team size within the organization?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">No, any team member is able to utilize the tool and the generated themes.</p>

                        <div class="leading-normal mb-2 font-bold">Can subsidiary company of a larger organization share a plan?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">No, plan is per organization so each subsidiary company needs to purchase a separate plan.</p>

                        <div class="leading-normal mb-2 font-bold">Can I include generated theme in an open source project?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">Yes, the generated theme is suitable for usage in an open source project.</p>

                        <div class="leading-normal mb-2 font-bold">We're a reseller, are we able to purchase a license on behalf of our client?</div>
                        <p class="mt-0 mb-12 p-0 leading-normal">Yes, please <a href="mailto:contact@primetek.com.tr" class="doc-link">contact us</a> to initiate the procurement process.</p>
                    </div>
                </div>
            </div>
        </div>

        <Dialog v-model:visible="termsVisible" modal header="Terms and Conditions" class="w-11/12">
            <div class="font-bold mb-4">Effective Date: April 7, 2025</div>
            <p>Welcome to PrimeVue Theme Designer. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>
            <ol>
                <li>
                    <div class="font-bold mb-4">1. Acceptance of Terms</div>
                    <p>By purchasing, and using the PrimeVue Theme Designer, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
                </li>
                <li>
                    <div class="font-bold mb-4">2. Subscription Plans</div>
                    <p>Upon purchase, PrimeTek grants you a non-exclusive, non-transferable access to use the Theme Designer in accordance with the selected plan:</p>
                    <ul class="leading-normal list-disc list-inside mb-4">
                        <li><b>Basic Plan</b>: Allows for up to 2 themes, suitable for small teams.</li>
                        <li><b>Extended Plan</b>: Permits up to 10 themes, ideal for teams with UI/UX designers.</li>
                        <li><b>Enterprise Plan</b>: Customizable options tailored to large organizations.</li>
                    </ul>
                    <p>
                        Each plan is valid for one year from the date of purchase and does not auto-renew. Upon expiration, continued use of the service requires the purchase of a new subscription. The themes generated from the service during the
                        active plan period can be used indefinitely and does not require a renewal.
                    </p>
                </li>
                <li>
                    <div class="font-bold mb-4">3. Usage Restrictions</div>
                    <p>You may not:</p>
                    <ul class="leading-normal list-disc list-inside mb-4">
                        <li>Use the Theme Designer to develop themes for applications that violate any laws or regulations.</li>
                    </ul>
                </li>
                <li>
                    <div class="font-bold mb-4">4. Intellectual Property</div>
                    <p>
                        All intellectual property rights in the Theme Designer service, including but not limited to design, code, and trademarks, are owned by PrimeTek. This agreement does not grant you any rights to use PrimeTek's trademarks or
                        other intellectual property beyond the scope of the license. The ownership of intellectual property rights for the generated themes shall vest in the Client. PrimeTek shall not hold any ownership rights to themes that are
                        stored, managed, generated and downloaded.
                    </p>
                </li>
                <li>
                    <div class="font-bold mb-4">5. Support and Updates</div>
                    <p>
                        PrimeTek offers assistance with account management and licensing issues. Technical support or consulting is not provided. Users can seek assistance via our public Discord and Forum. Updates are provided at PrimeTek's
                        discretion and may include bug fixes, new features, or enhancements.
                    </p>
                </li>
                <li>
                    <div class="font-bold mb-4">6. Refunds</div>
                    <p>Due to the digital nature of the Theme Designer, all sales are final. Refunds will not be provided except as required by applicable law.</p>
                </li>
                <li>
                    <div class="font-bold mb-2">7. Limitation of Liability</div>
                    <p>To the maximum extent permitted by law, PrimeTek shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</p>
                </li>
                <li>
                    <div class="font-bold mb-4">8. Amendments</div>
                    <p>PrimeTek reserves the right to modify these Terms and Conditions at any time. Continued use of the Theme Designer after any such changes shall constitute your consent to such changes.</p>
                </li>
                <li>
                    <div class="font-bold mb-4">9. Governing Law</div>
                    <p>These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Turkiye.</p>
                </li>
                <li>
                    <div class="font-bold mb-4">10. Contact Information</div>
                    <p>
                        For any questions regarding these Terms and Conditions, please contact us through our official channels as listed on our website. By using the PrimeVue Theme Designer, you acknowledge that you have read and agree to these
                        Terms and Conditions.
                    </p>
                </li>
            </ol>
        </Dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            termsVisible: false
        };
    },
    computed: {
        coverImage() {
            const image = this.$appState.darkTheme ? 'hero-dark.png' : 'hero.png';

            return 'https://primefaces.org/cdn/designer/' + image;
        }
    }
};
</script>
