<template>
    <div class="home">
        <div :class="introductionClass">
            <div class="introduction-promo">Now with Vue 3 Support</div>
            <div class="introduction-title">The NextGen UI Component Library</div>
            <div class="introduction-subtitle">for Vue</div>

            <router-link to="/setup" class="action-button">GET STARTED</router-link>
            <img alt="devices" class="introduction-devices" src="../assets/images/home/intro-devices.png" />
        </div>

        <div class="features">
            <h4>Features</h4>
            <p>Congratulations! <span role="img" aria-label="celebrate" class="p-mx-2">🎉</span> Your quest to find the UI library for Vue.js is now complete.</p>

            <div class="p-grid">
                <div class="p-col-12 p-md-4">
                    <div class="feature-card">
                        <img alt="components" src="../assets/images/home/vue-components.png" />
                        <div class="feature-card-detail">
                            <div class="feature-name">80+ COMPONENTS</div>
                            <p>The ultimate set of UI Components to assist you with 80+ impressive Vue Components.</p>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-md-4">
                    <div class="feature-card">
                        <img alt="opensource" src="../assets/images/home/vue-opensource.png" />
                        <div class="feature-card-detail">
                            <div class="feature-name">OPEN SOURCE</div>
                            <p>The complete UI Suite is free to based on the MIT license and the source code is available at GitHub.</p>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-md-4">
                    <div class="feature-card">
                        <img alt="themes" src="../assets/images/home/vue-themes.png" />
                        <div class="feature-card-detail">
                            <div class="feature-name">THEMES</div>
                            <p>Build on a design-agnostic api, choose from a vast amount of themes such as material, bootstrap, custom or develop your own.</p>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-md-4">
                    <div class="feature-card">
                        <img alt="templates" src="../assets/images/home/vue-templates.png" />
                        <div class="feature-card-detail">
                            <div class="feature-name">TEMPLATES</div>
                            <p>Fascinating Vue-CLI application templates designed by professional designers and crafted by Vue Experts.</p>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-md-4">
                    <div class="feature-card">
                        <img alt="accesibility" src="../assets/images/home/vue-accesibility.png" />
                        <div class="feature-card-detail">
                            <div class="feature-name">ACCESSIBILITY</div>
                            <p>UI Components for everyone with full support for Web Content Accessibility Guidelines (WCAG).</p>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-md-4">
                    <div class="feature-card">
                        <img alt="pro" src="../assets/images/home/vue-pro.png" />
                        <div class="feature-card-detail">
                            <div class="feature-name">PRO SUPPORT</div>
                            <p>Exceptional support service featuring response within 1 business day and option to request enhancements and new features for the library.</p>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-md-4">
                    <div class="feature-card">
                        <img alt="productivity" src="../assets/images/home/vue-productivity.png" />
                        <div class="feature-card-detail">
                            <div class="feature-name">PRODUCTIVITY</div>
                            <p>Boost your productivity by achieving more in less time and accomplish amazing results.</p>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-md-4">
                    <div class="feature-card">
                        <img alt="community" src="../assets/images/home/vue-community.png" />
                        <div class="feature-card-detail">
                            <div class="feature-name">COMMUNITY</div>
                            <p>Connect with the other open source community members, collaborate and have a voice in the project roadmap.</p>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-md-4">
                    <div class="feature-card">
                        <img alt="mobile" src="../assets/images/home/vue-mobile.png" />
                        <div class="feature-card-detail">
                            <div class="feature-name">MOBILE</div>
                            <p>First class support for responsive design led by touch optimized elements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="video">
            <h4>Vue.js Global 2020</h4>
            <p>PrimeVue session from Vue.js Global 2020 Conference where we had a remarkable experience of presenting PrimeVue after Evan You announced Vue 3.</p>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3YP6Ob0-jkI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="whouses">
            <h4>Key Users</h4>
            <p>The creator of PrimeVue is PrimeTek Informatics, the distinguished component library vendor who built popular open source projects such as PrimeFaces, PrimeNG and PrimeReact over the past years.</p>
            <div class="p-grid">
                <div class="p-col-6 p-md-2"><img alt="airbus" src="../assets/images/home/airbus.svg"/></div>
                <div class="p-col-6 p-md-2"><img alt="amex" src="../assets/images/home/amex.svg"/></div>
                <div class="p-col-6 p-md-2"><img alt="bmw" src="../assets/images/home/nvidia.svg"/></div>
                <div class="p-col-6 p-md-2"><img alt="ebay" src="../assets/images/home/ebay.svg"/></div>
                <div class="p-col-6 p-md-2"><img alt="ford" src="../assets/images/home/ford.svg"/></div>
                <div class="p-col-6 p-md-2"><img alt="fox" src="../assets/images/home/fox.svg"/></div>
                <div class="p-col-6 p-md-2"><img alt="lufthansa" src="../assets/images/home/lufthansa.svg"/></div>
                <div class="p-col-6 p-md-2"><img alt="mercedes" src="../assets/images/home/mercedes.svg"/></div>
                <div class="p-col-6 p-md-2"><img alt="sap" src="../assets/images/home/sap.svg"/></div>
                <div class="p-col-6 p-md-2"><img alt="unicredit" src="../assets/images/home/unicredit.svg"/></div>
                <div class="p-col-6 p-md-2"><img alt="verizon" src="../assets/images/home/verizon.svg"/></div>
                <div class="p-col-6 p-md-2"><img alt="viacom" src="../assets/images/home/viacom.svg"/></div>
            </div>
        </div>

        <div class="templates">
            <h4>Premium Application Templates</h4>
            <p>Gorgeous Vue-CLI application templates designed by professional designers and implemented by Vue Experts to help you reach your goals in no time.</p>

            <div class="p-grid">
                <div class="p-col-12 p-md-3">
                    <a href="https://www.primefaces.org/sakai-vue">
                        <img alt="Sakai" src="../assets/images/layouts/sakai-vue.jpg">
                    </a>
                </div>
                <div class="p-col-12 p-md-3">
                    <a href="https://www.primefaces.org/layouts/atlantis-vue">
                        <img alt="Atlantis" src="../assets/images/layouts/atlantis-vue.jpg">
                    </a>
                </div>
                <div class="p-col-12 p-md-3">
                    <a href="https://www.primefaces.org/layouts/freya-vue">
                        <img alt="Freya" src="../assets/images/layouts/freya-vue.png">
                    </a>
                </div>
                <div class="p-col-12 p-md-3">
                    <a href="https://www.primefaces.org/layouts/ultima-vue">
                        <img alt="Ultima" src="../assets/images/layouts/ultima-vue.jpg">
                    </a>
                </div>
                <div class="p-col-12 p-md-3">
                    <a href="https://www.primefaces.org/layouts/diamond-vue">
                        <img alt="Diamond" src="../assets/images/layouts/diamond-vue.jpg">
                    </a>
                </div>
                <div class="p-col-12 p-md-3">
                    <a href="https://www.primefaces.org/layouts/sapphire-vue">
                        <img alt="Sapphire" src="../assets/images/layouts/sapphire-vue.jpg">
                    </a>
                </div>
                <div class="p-col-12 p-md-3">
                    <a href="https://www.primefaces.org/layouts/serenity-vue">
                        <img alt="Serenity" src="../assets/images/layouts/serenity-vue.jpg">
                    </a>
                </div>
                <div class="p-col-12 p-md-3">
                    <a href="https://www.primefaces.org/layouts/avalon-vue">
                        <img alt="Avalon" src="../assets/images/layouts/avalon-vue.jpg">
                    </a>
                </div>
                <div class="p-col-12 p-md-3">
                    <a href="https://www.primefaces.org/layouts/babylon-vue">
                        <img alt="Babylon" src="../assets/images/layouts/babylon-vue.jpg">
                    </a>
                </div>
                <div class="p-col-12 p-md-3">
                    <a href="https://www.primefaces.org/layouts/apollo-vue">
                        <img alt="Apollo" src="../assets/images/layouts/apollo-vue.jpg">
                    </a>
                </div>
                <div class="p-col-12 p-md-3">
                    <a href="https://www.primefaces.org/layouts/roma-vue">
                        <img alt="Roma" src="../assets/images/layouts/roma-vue.jpg">
                    </a>
                </div>
                <div class="p-col-12 p-md-3">
                    <a href="https://www.primefaces.org/layouts/prestige-vue">
                        <img alt="Prestige" src="../assets/images/layouts/prestige-vue.jpg">
                    </a>
                </div>
                <div class="p-col-12 p-md-3"></div>
            </div>
        </div>
        <div class="primevue-designer">
            <h4>Theme Designer</h4>
            <p>PrimeVue is a design-agnostic library and the theming system is based on the Theme Designer, the official tool to create themes for the components. Designer includes a SASS enabled infrastructure that has over 500 customizable variables, a live editor
                and a Vue-CLI application to test your themes with ease along with built-in theme samples that are embedded in PrimeVue Core.</p>

            <p>Visit <a href="https://www.primefaces.org/designer/primevue">Designer API HomePage</a> to learn more about the features and interact with the <a href="https://www.primefaces.org/designer-vue">live editor</a>.</p>
            <div class="p-grid">
                <div class="p-col-12">
                    <img alt="PrimeVue Designer" src="../assets/images/primevue-designer.jpg" />

                </div>
            </div>
        </div>

        <div class="primeblocks">
            <div class="p-grid">
                <div class="p-col-12 p-md-6">
                    <h4 class="pro-title">Vue UI Blocks Powered by PrimeVue</h4>
                    <p>150+ ready to use UI blocks to build spectacular applications in no time.</p>
                    <a class="action-button" href="https://www.primefaces.org/primeblocks-vue">LEARN MORE</a>
                </div>
                <div class="p-col-12 p-md-6 p-text-center">
                    <img alt="primeblocks-vue" src="../assets/images/primeblocks.png" class="section-image">
                </div>
            </div>
        </div>

        <div class="primeflex">
            <div class="p-grid">
                <div class="p-col-12 p-md-6">
                    <h3 class="pro-title">PrimeFlex: Perfect CSS Utility Companion</h3>
                    <p>PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well.</p>
                    <a class="action-button" href="https://www.primefaces.org/primeflex">LEARN MORE</a>
                </div>
                <div class="p-col-12 p-md-6 p-text-center">
                    <img alt="primeflex" src="../assets/images/primeflex.png" class="section-image">
                </div>
            </div>
        </div>

        <div class="prosupport">
            <div class="p-grid">
                <div class="p-col-12 p-md-6">
                    <h4>PrimeVue PRO Support</h4>
                    <p>No time to wait for a response at forum or issue tracker? Then PrimeVue PRO Support is definitely for you.</p>
                    <p>PrimeVUE PRO is an exceptional support service where you'll contact the PrimeTek via a private channel and receive assistance just in a couple of hours. Optionally PrimeVue PRO offers the ability to request changes and new features for the component library.</p>
                    <router-link to="/support" class="action-button">LEARN MORE</router-link>
                </div>
                <div class="p-col-12 p-md-6">
                    <img alt="PRO" src="../assets/images/home/asset-pro.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from '@/AppEventBus';

export default {
    data() {
        return {
            dark: false
        }
    },
    themeChangeListener: null,
    mounted() {
        let afId = this.$route.query['af_id'];
        if (afId) {
            let today = new Date();
            let expire = new Date();
            expire.setTime(today.getTime() + 3600000*24*7);
            document.cookie = 'primeaffiliateid=' + afId + ';expires=' + expire.toUTCString() + ';path=/; domain:primefaces.org';
        }

        this.themeChangeListener = (event) => {
            if (event.dark)
                this.dark = true;
            else
                this.dark = false;
        };
        EventBus.on('change-theme', this.themeChangeListener);
    },
    beforeUnmount() {
        EventBus.off('change-theme', this.themeChangeListener);
    },
    computed: {
        introductionClass() {
            return ['introduction', {'introduction-dark': this.dark}];
        }
    }
}
</script>
