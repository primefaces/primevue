<template>
    <DocSectionText v-bind="$attrs">
        <p>The plugin also adds extended animation utilities that can be used with the <NuxtLink to="/styleclass">styleclass</NuxtLink> and <NuxtLink to="/animateonscroll">animateonscroll</NuxtLink> directives.</p>

        <div class="card">
            <Select v-model="animation" :options="animations" placeholder="Select One" class="w-full sm:w-44" />
            <div class="py-8 overflow-hidden">
                <div :class="`rounded-border bg-primary w-16 h-16 mx-auto animate-${animation} animate-once animate-duration-1000`"></div>
            </div>
        </div>
        <DocSectionCode :code="code" hideToggleCode hideStackBlitz />

        <h3>Enter and Leave</h3>
        <p>
            In addition to the prebuilt animations, you may also build your own declaratively using the <i>animate-enter</i> and <i>animate-leave</i> along with the opacity, rotate, scale and translate parameters. These animations work perfectly with
            the <NuxtLink to="/animateonscroll">AnimateOnScroll</NuxtLink> directive, visit this directive for various examples.
        </p>
        <Button as="router-link" label="Learn More" to="/animateonscroll" class="mb-4" />

        <h3>Animations</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>animate-enter</td>
                        <td>animation-name: enter; <br />--p-enter-opacity: initial; <br />--p-enter-scale: initial; <br />--p-enter-rotate: initial; <br />--p-enter-translate-x: initial; <br />--p-enter-translate-y: initial;</td>
                    </tr>
                    <tr>
                        <td>animate-leave</td>
                        <td>animation-name: leave; <br />--p-leave-opacity: initial; <br />--p-leave-scale: initial; <br />--p-leave-rotate: initial; <br />--p-leave-translate-x: initial; <br />--p-leave-translate-y: initial;</td>
                    </tr>
                    <tr>
                        <td>animate-fadein</td>
                        <td>fadein 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-fadeout</td>
                        <td>fadeout 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-slidedown</td>
                        <td>slidedown 0.45s ease-in-out</td>
                    </tr>
                    <tr>
                        <td>animate-slideup</td>
                        <td>slideup 0.45s cubic-bezier(0, 1, 0, 1)</td>
                    </tr>
                    <tr>
                        <td>animate-scalein</td>
                        <td>scalein 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-fadeinleft</td>
                        <td>fadeinleft 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-fadeoutleft</td>
                        <td>fadeoutleft 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-fadeinright</td>
                        <td>fadeinright 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-fadeoutright</td>
                        <td>fadeoutright 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-fadeinup</td>
                        <td>fadeinup 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-fadeoutup</td>
                        <td>fadeoutup 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-fadeindown</td>
                        <td>fadeindown 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-fadeoutup</td>
                        <td>fadeoutup 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-width</td>
                        <td>width 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-flip</td>
                        <td>flip 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-flipup</td>
                        <td>flipup 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-flipleft</td>
                        <td>fadein 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-flipright</td>
                        <td>flipright 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-zoomin</td>
                        <td>zoomin 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-zoomindown</td>
                        <td>zoomindown 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-zoominleft</td>
                        <td>zoominleft 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-zoominright</td>
                        <td>zoominright 0.15s linear</td>
                    </tr>
                    <tr>
                        <td>animate-zoominup</td>
                        <td>zoominup 0.15s linear</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Animation Duration</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>animate-duration-0</td>
                        <td>animation-duration: 0s</td>
                    </tr>
                    <tr>
                        <td>animate-duration-75</td>
                        <td>animation-duration: 75ms</td>
                    </tr>
                    <tr>
                        <td>animate-duration-100</td>
                        <td>animation-duration: 100ms</td>
                    </tr>
                    <tr>
                        <td>animate-duration-200</td>
                        <td>animation-duration: 200ms</td>
                    </tr>
                    <tr>
                        <td>animate-duration-300</td>
                        <td>animation-duration: 300ms</td>
                    </tr>
                    <tr>
                        <td>animate-duration-400</td>
                        <td>animation-duration: 400ms</td>
                    </tr>
                    <tr>
                        <td>animate-duration-500</td>
                        <td>animation-duration: 500ms</td>
                    </tr>
                    <tr>
                        <td>animate-duration-700</td>
                        <td>animation-duration: 700ms</td>
                    </tr>
                    <tr>
                        <td>animate-duration-1000</td>
                        <td>animation-duration: 1000ms</td>
                    </tr>
                    <tr>
                        <td>animate-duration-2000</td>
                        <td>animation-duration: 2000ms</td>
                    </tr>
                    <tr>
                        <td>animate-duration-3000</td>
                        <td>animation-duration: 300ms</td>
                    </tr>
                    <tr>
                        <td>animate-duration-[value]</td>
                        <td>animation-duration: value</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Animation Delay</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>animate-delay-none</td>
                        <td>animation-duration: 0s</td>
                    </tr>
                    <tr>
                        <td>animate-delay-75</td>
                        <td>animation-delay: 75ms</td>
                    </tr>
                    <tr>
                        <td>animate-delay-100</td>
                        <td>animation-delay: 100ms</td>
                    </tr>
                    <tr>
                        <td>animate-delay-150</td>
                        <td>animation-delay: 150ms</td>
                    </tr>
                    <tr>
                        <td>animate-delay-200</td>
                        <td>animation-delay: 200ms</td>
                    </tr>
                    <tr>
                        <td>animate-delay-300</td>
                        <td>animation-delay: 300ms</td>
                    </tr>
                    <tr>
                        <td>animate-delay-400</td>
                        <td>animation-delay: 400ms</td>
                    </tr>
                    <tr>
                        <td>animate-delay-500</td>
                        <td>animation-delay: 500ms</td>
                    </tr>
                    <tr>
                        <td>animate-delay-700</td>
                        <td>animation-delay: 700ms</td>
                    </tr>
                    <tr>
                        <td>animate-delay-1000</td>
                        <td>animation-delay: 1000ms</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Iteration Count</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>animate-infinite</td>
                        <td>animation-iteration-count: infinite</td>
                    </tr>
                    <tr>
                        <td>animate-once</td>
                        <td>animation-iteration-count: 1</td>
                    </tr>
                    <tr>
                        <td>animate-twice</td>
                        <td>animation-iteration-count: 2</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Direction</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>animate-normal</td>
                        <td>animation-direction: normal</td>
                    </tr>
                    <tr>
                        <td>animate-reverse</td>
                        <td>animation-direction: reverse</td>
                    </tr>
                    <tr>
                        <td>animate-alternate</td>
                        <td>animation-direction: alternate</td>
                    </tr>
                    <tr>
                        <td>animate-alternate-reverse</td>
                        <td>animation-direction: alternate-reverse</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Timing Function</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>animate-ease-linear</td>
                        <td>animation-timing-function: linear</td>
                    </tr>
                    <tr>
                        <td>animate-ease-in</td>
                        <td>animation-timing-function: cubic-bezier(0.4, 0, 1, 1)</td>
                    </tr>
                    <tr>
                        <td>animate-ease-out</td>
                        <td>animation-timing-function: cubic-bezier(0, 0, 0.2, 1)</td>
                    </tr>
                    <tr>
                        <td>animate-ease-in-out</td>
                        <td>animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Fill Mode</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>animate-fill-none</td>
                        <td>animation-fill-mode: normal</td>
                    </tr>
                    <tr>
                        <td>animate-fill-forwards</td>
                        <td>animation-fill-mode: forwards</td>
                    </tr>
                    <tr>
                        <td>animate-fill-backwards</td>
                        <td>animation-fill-mode: backwards</td>
                    </tr>
                    <tr>
                        <td>animate-fill-both</td>
                        <td>animation-fill-mode: both</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Play State</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>animate-running</td>
                        <td>animation-play-state: running</td>
                    </tr>
                    <tr>
                        <td>animate-paused</td>
                        <td>animation-play-state: paused</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Backface Visibility State</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>backface-visible</td>
                        <td>backface-visibility: visible</td>
                    </tr>
                    <tr>
                        <td>backface-hidden</td>
                        <td>backface-visibility: hidden</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Fade In and Out</h3>
        <p>
            Values are derived from the Tailwind CSS <a href="https://tailwindcss.com/docs/opacity" target="_blank" rel="noopener noreferrer">opacity</a> e.g. <i>fade-in-50</i> and <i>fade-out-20</i>. Arbitrary values such as <i>fade-in-[15]</i> are
            also supported.
        </p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>fade-in-{value}</td>
                        <td>--p-enter-opacity: {value}</td>
                    </tr>
                    <tr>
                        <td>fade-out-{value}</td>
                        <td>--p-leave-opacity: {value}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Zoom In and Out</h3>
        <p>
            Values are derived from the Tailwind CSS <a href="https://tailwindcss.com/docs/scale" target="_blank" rel="noopener noreferrer">scale</a> e.g. <i>zoom-in-50</i> and <i>zoom-out-75</i>. Arbitrary values such as <i>zoom-in-[0.8]</i> are
            also supported.
        </p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>zoom-in-{value}</td>
                        <td>--p-enter-scale: {value}</td>
                    </tr>
                    <tr>
                        <td>zoom-out-{value}</td>
                        <td>--p-leave-scale: {value}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Spin In and Out</h3>
        <p>
            Values are derived from the Tailwind CSS <a href="https://tailwindcss.com/docs/rotate" target="_blank" rel="noopener noreferrer">rotate</a> e.g. <i>spin-in-45</i> and <i>spin-out-90</i>. Arbitrary values such as <i>spin-in-[60deg]</i> are
            also supported.
        </p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>spin-in-{value}</td>
                        <td>--p-enter-rotate: {value}</td>
                    </tr>
                    <tr>
                        <td>spin-out-{value}</td>
                        <td>--p-leave-rotate: {value}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Slide In and Out</h3>
        <p>
            Values are derived from the Tailwind CSS <a href="https://tailwindcss.com/docs/translate" target="_blank" rel="noopener noreferrer">translate</a> e.g. <i>slide-in-from-t-50</i> and <i>slide-out-to-l-8</i>. Arbitrary values such as
            <i>slide-in-from-b-[8px]</i> are also supported.
        </p>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th class="w-1/3">Class</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>slide-in-from-t-{value}</td>
                        <td>--p-enter-translate-y: -{value}</td>
                    </tr>
                    <tr>
                        <td>slide-in-from-b-{value}</td>
                        <td>--p-enter-translate-y: {value}</td>
                    </tr>
                    <tr>
                        <td>slide-in-from-l-{value}</td>
                        <td>--p-enter-translate-x: -{value}</td>
                    </tr>
                    <tr>
                        <td>slide-in-from-r-{value}</td>
                        <td>--p-enter-translate-x: {value}</td>
                    </tr>
                    <tr>
                        <td>slide-out-to-t-{value}</td>
                        <td>--p-leave-translate-y: -{value}</td>
                    </tr>
                    <tr>
                        <td>slide-out-to-b-{value}</td>
                        <td>--p-leave-translate-y: {value}</td>
                    </tr>
                    <tr>
                        <td>slide-out-to-l-{value}</td>
                        <td>--p-leave-translate-x: -{value}</td>
                    </tr>
                    <tr>
                        <td>slide-out-to-r-{value}</td>
                        <td>--p-leave-translate-x: {value}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            animation: null,
            animations: [
                'fadein',
                'fadeout',
                'slideup',
                'scalein',
                'fadeinleft',
                'fadeoutleft',
                'fadeinright',
                'fadeoutright',
                'fadeinup',
                'fadeoutup',
                'width',
                'flipup',
                'flipleft',
                'flipright',
                'zoomin',
                'zoomindown',
                'zoominleft',
                'zoominright',
                'zoominup'
            ],
            code: {
                basic: `
<Select v-model="animation" :options="animations" placeholder="Select One" class="w-full sm:w-44" />
<div class="py-8 overflow-hidden">
    <div :class="\`rounded-border bg-primary w-16 h-16 mx-auto animate-\${animation} animate-once animate-duration-1000\`"></div>
</div>
`
            }
        };
    }
};
</script>
