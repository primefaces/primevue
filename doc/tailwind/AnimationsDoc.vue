<template>
    <DocSectionText v-bind="$attrs">
        <p>The plugin also adds extended animation utilities that can be used with the <NuxtLink to="/styleclass">styleclass</NuxtLink> and <NuxtLink to="/animateonscroll">animateonscroll</NuxtLink> directives.</p>
    </DocSectionText>
    <div class="card">
        <Select v-model="animation" :options="animations" placeholder="Select One" class="w-full sm:w-44" />
        <div class="py-8 overflow-hidden">
            <div :class="`rounded-border bg-primary w-16 h-16 mx-auto animate-${animation} animate-once animate-duration-1000`"></div>
        </div>
    </div>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
    <h3>Animations</h3>
    <div class="doc-tablewrapper">
        <table class="doc-table">
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Property</th>
                </tr>
            </thead>
            <tbody>
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
                    <th>Class</th>
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
            </tbody>
        </table>
    </div>

    <h3>Animation Delay</h3>
    <div class="doc-tablewrapper">
        <table class="doc-table">
            <thead>
                <tr>
                    <th>Class</th>
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
                    <th>Class</th>
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
                    <th>Class</th>
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
                    <th>Class</th>
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
                    <th>Class</th>
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
                    <th>Class</th>
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
                    <th>Class</th>
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
