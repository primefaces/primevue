<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Support</h1>
                <p>Professional support for the open source innovation</p>
            </div>
        </div>

        <div class="content-section documentation">
            <h5>Community Support</h5>
            <p><a href="https://forum.primefaces.org/viewforum.php?f=110">Forum</a> is where the community users gather to seek support, post topics and discuss the technology. PrimeTek does not
            guarantee response at forum although it is monitored and maintained by our staff. If you need to secure our response within 1 business day, you may consider PrimeVue PRO support.</p>

            <h5>PrimeVue PRO Support</h5>
            <div class="pro-section p-grid p-nogutter">
                <div class="pro-section-text p-col-12 p-md-8">
                     <p>PrimeVue PRO is a term based commercial support service. With the exclusive services of Pro account,
                            you no longer need to post your questions in the community forum and your issues to community issue tracker.
                    With PrimeVue PRO, it's easy to support, tune and add features to PrimeVue as if it were an in-house framework.</p>
                     <a class="action-button" href="mailto:primevue@primetek.com.tr">GET A QUOTE</a>
                </div>

                <div class="pro-section-image p-col-12 p-md-4">
                    <img alt="PRO" src="../../assets/images/home/icon-pro.svg" />
                </div>
            </div>

            <h5>Standard PRO Services</h5>
            <ul>
                <li>Access to pro.primefaces.org</li>
                <li>Response within 1 business day.</li>
                <li>Defect patches.</li>
                <li>Private branch management in case you need.</li>
                <li>Customized builds.</li>
                <li>Unlimited number of cases.</li>
                <li>Remote desktop connection.</li>
                <li>Conference calls for discussions.</li>
                <li>High priority to your issues.</li>
                <li>Notifications about security updates.</li>
            </ul>

            <h5>New Features (Optional)</h5>

            <p>New feature and enhancement requests are not available in core services and provided via an hour based model instead.  When you have a feature request we provide an estimate, if you confirm we deliver your request within an estimated timeframe and deduct the amount of work from your hours. These requests can be;</p>

            <ul>
                <li>New components.</li>
                <li>New functionality to existing components.</li>
                <li>Changing the way a certain functionality is implemented.</li>
                <li>Accessibility improvements.</li>
                <li>Proof of Concept implementations of a use case.</li>
                <li>Code reviews to offer best practices.</li>
            </ul>

            <p>You can purchase additional hours along with the subscription and also anytime during your subscription period. If your subscription term ends with unused hours, they will be added to your new subscription term in case you extend.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/deep/ .pro-section {
    display: flex;
    margin-top: .75rem;

    .pro-section-text {
        flex: 1 1 auto;
        padding: 0rem 1rem 0 0;

        .action-button {
            display: inline-block;
            margin-top: 1rem;
        }
    }

    .pro-section-image {
        text-align: center;
        padding: 1rem;
    }
}

 li {
        line-height: 1.5;
    }

</style>