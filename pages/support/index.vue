<template>
    <div>
        <img alt="PRO Support" src="https://primefaces.org/cdn/primevue/images/support/support-header.png" class="w-full block mb-8" style="border-radius: 20px" />

        <div class="flex flex-col xl:flex-row mb-8 gap-8">
            <div class="card xl:w-3/12 m-0 relative overflow-hidden">
                <i class="pi pi-github absolute opacity-20" style="bottom: -50px; right: -50px; font-size: 200px; transform: rotateX(45deg) rotateY(0deg) rotateZ(-45deg)"></i>
                <div class="text-2xl font-semibold mb-4 relative">Community Support</div>
                <p class="m-0 leading-normal relative text-lg">
                    <a href="https://github.com/orgs/primefaces/discussions" class="doc-link">Forum</a> and <a href="https://discord.gg/gzKFYnpmCY" class="doc-link">Discord</a> are where the community users gather to seek support, post topics and
                    discuss the technology. GitHub issue tracker is the channel where community users can create tickets however PrimeTek does not guarantee a response time although they are monitored and maintained by our staff. If you need to
                    secure our response within 1 business day, you may consider PRO support instead.
                </p>
            </div>
            <div class="card m-0 xl:w-9/12 text-white bg-cover" style="background-image: url('https://primefaces.org/cdn/primevue/images/support/card-pro.jpg')">
                <div class="text-2xl font-semibold mb-4">PRO Support</div>
                <p class="m-0 leading-normal text-lg">
                    With PRO support, it's easy to support, tune and add features to PrimeVue as if it were an in- house library. PRO is a term based commercial support service. With the exclusive services of PRO account, it is no longer needed to
                    post questions in community forum and issue reports to community issue tracker at GitHub. A JIRA account will be created to the customer by PrimeTek, this account can be shared between any number of users within your organization.
                </p>
            </div>
        </div>

        <div class="card mb-8">
            <div class="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <div class="text-2xl font-semibold mb-4">Enterprise Support</div>
                    <p class="m-0 leading-normal mb-8 text-lg text-surface-500 dark:text-surface-400">1 Year Subscription</p>
                </div>
                <a href="mailto:contact@primetek.com.tr" class="flex items-center justify-center bg-indigo-500 rounded py-4 px-6 mb-6 hover:bg-indigo-600 transition-all duration-300 text-white font-semibold text-lg leading-none"> Get a Quote </a>
            </div>
            <div class="flex flex-wrap -mt-4 gap-4">
                <ul class="flex-auto list-none m-0 text-lg p-4">
                    <li class="flex items-center mb-4">
                        <i class="pi pi-check-circle mr-4 text-green-500"></i>
                        <span class="leading-normal">Access to Private JIRA</span>
                    </li>
                    <li class="flex items-center mb-4">
                        <i class="pi pi-check-circle mr-4 text-green-500"></i>
                        <span class="leading-normal">Response within 1 business day</span>
                    </li>
                    <li class="flex items-center mb-4">
                        <i class="pi pi-check-circle mr-4 text-green-500"></i>
                        <span class="leading-normal">Unlimited Issue Tickets</span>
                    </li>
                    <li class="flex items-center mb-4">
                        <i class="pi pi-check-circle mr-4 text-green-500"></i>
                        <span class="leading-normal">Conference Calls</span>
                    </li>
                </ul>
                <ul class="flex-auto list-none p-0 m-0 text-lg p-4">
                    <li class="flex items-center mb-4">
                        <i class="pi pi-check-circle mr-4 text-green-500"></i>
                        <span class="leading-normal">Maintenance for Any Version</span>
                    </li>
                    <li class="flex items-center mb-4">
                        <i class="pi pi-check-circle mr-4 text-green-500"></i>
                        <span class="leading-normal">PrimeBlocks - Enterprise License</span>
                    </li>
                    <li class="flex items-center mb-4">
                        <i class="pi pi-check-circle mr-4 text-green-500"></i>
                        <span class="leading-normal">Figma UI Kit - Enterprise License</span>
                    </li>
                    <li class="flex items-center mb-4">
                        <i class="pi pi-check-circle mr-4 text-green-500"></i>
                        <span class="leading-normal">1 Premium Template - Extended License</span>
                    </li>
                </ul>
                <ul class="flex-auto list-none p-0 m-0 text-lg p-4">
                    <li class="flex items-center mb-4">
                        <i class="pi pi-check-circle mr-4 text-green-500"></i>
                        <span class="leading-normal">Visual Theme Builder (Soon)</span>
                    </li>
                    <li class="flex items-center mb-4">
                        <i class="pi pi-check-circle mr-4 text-green-500"></i>
                        <span class="leading-normal">Figma to Theme Generator (Soon)</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="card mb-8">
            <div class="text-2xl font-semibold mb-4">Enhancement Credits</div>
            <p class="m-0 leading-normal mb-8 text-lg">
                New features and enhancement requests are not available in core services and provided via a credit based model instead named PrimeCredit. When you have an enhancement request, initially our team will review your requirement to verify
                if it is suitable to be included in the open source core library. We cannot guarantee that all requests can be accepted depending on the project roadmap, workload at the time and type of the requirement. After successful verification,
                we prepare an initial estimate in terms of credits and once this estimate is confirmed by you, implementation will be delivered by our team within an estimated timeframe.
            </p>

            <div class="flex flex-col md:flex-row gap-8">
                <div class="flex-1">
                    <div class="font-semibold mb-2 text-xl">New Components</div>
                    <p class="m-0 leading-normal mb-4 text-lg">Brand new components you need that are not already available in the existing UI suite.</p>
                </div>
                <div class="flex-1">
                    <div class="font-semibold mb-2 text-xl">New Features</div>
                    <p class="m-0 leading-normal mb-4 text-lg">Enhancements to the components you need such as new properties, events and templating.</p>
                </div>
                <div class="flex-1">
                    <div class="font-semibold mb-2 text-xl">UX Customization</div>
                    <p class="m-0 leading-normal mb-4 text-lg">Behavioral changes to the existing components.</p>
                </div>
            </div>
        </div>

        <div class="card m-0">
            <div class="text-2xl font-semibold mb-8">Frequently Asked Questions</div>
            <div class="flex flex-wrap text-lg -ml-8 -mt-8">
                <div class="w-full lg:w-4/12 p-8">
                    <div class="leading-normal mb-2 font-medium">What is the duration of the service?</div>
                    <p class="mt-0 mb-8 p-0 leading-normal">Support service is for one year.</p>

                    <div class="leading-normal mb-2 font-medium">How many JIRA accounts do we get?</div>
                    <p class="mt-0 mb-8 p-0 leading-normal">We provide one shared account per organization that any number of members in your organization can use it.</p>

                    <div class="leading-normal mb-2 font-medium">What happens if we extend after 1 year and we have unused tickets?</div>
                    <p class="mt-0 p-0 leading-normal">Unused tickets expire and cannot be transferred to the new subscription.</p>
                </div>
                <div class="w-full lg:w-4/12 p-8">
                    <div class="leading-normal mb-2 font-medium">When can we purchase PrimeCredits for feature development?</div>
                    <p class="mt-0 mb-8 p-0 leading-normal">PrimeCredits can be purchased anytime during an active subscription.</p>

                    <div class="leading-normal mb-2 font-medium">Are all of our requests guaranteed to be implemented with PrimeCredits?</div>
                    <p class="mt-0 mb-8 p-0 leading-normal">No, PrimeTek does not guarantee the implementation so it is suggested to confirm with us before purchasing credits.</p>

                    <div class="leading-normal mb-2 font-medium">Can we get PrimeCredits without PRO support?</div>
                    <p class="mt-0 p-0 leading-normal">No, feature development is exclusive to PRO members.</p>
                </div>
                <div class="w-full lg:w-4/12 p-8">
                    <div class="leading-normal mb-2 font-medium">Is there a limit on developers in our organization who can use the service?</div>
                    <p class="mt-0 mb-8 p-0 leading-normal">PRO is per organization so there is no limit on the number of developers.</p>

                    <div class="leading-normal mb-2 font-medium">What is not covered by PRO?</div>
                    <p class="mt-0 p-0 leading-normal">As PRO support focuses on the library, application consulting and code reviews are out of scope.</p>
                </div>
            </div>
        </div>
    </div>
</template>
