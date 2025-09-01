<template>
    <DocSectionText v-bind="$attrs">
        <p>
            When <i>hideOnResize</i> is enabled, the leave animation is triggered automatically when resizing occurs. Use the <i>resizeSelector</i> property to specify whether to listen to window resize events or element-specific resize events. Set
            <i>resizeSelector</i> to "window" (default) or "document" for browser resize, or a CSS selector to observe the target element's dimensions.
        </p>
    </DocSectionText>
    <div class="card">
        <div class="flex justify-center">
            <div class="flex flex-col items-center gap-4 w-[25rem]">
                <Button v-styleclass="{ selector: '.box', hideOnResize: true, enterFromClass: 'hidden', enterActiveClass: 'animate-fadein', leaveActiveClass: 'animate-fadeout', leaveToClass: 'hidden' }" label="Show Window Responsive Content" />
                <div class="box hidden animate-duration-300 border border-lg border-surface">
                    <div class="p-4 flex flex-col gap-2">
                        <h3 class="text-xl font-bold">Window Responsive Panel</h3>
                        <p class="text-sm">This panel will hide when you resize the browser window.</p>
                        <p class="text-sm">Try resizing your browser window to see the effect.</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center gap-4 w-[25rem]">
                <Button
                    v-styleclass="{
                        selector: '.resizable',
                        resizeSelector: '.resizable',
                        hideOnResize: true,
                        enterFromClass: 'hidden',
                        enterActiveClass: 'animate-fadein',
                        leaveActiveClass: 'animate-fadeout',
                        leaveToClass: 'hidden'
                    }"
                    label="Show Resizable Panel"
                />
                <div class="resizable hidden animate-duration-300 border border-lg border-surface w-[20rem] w-max-[25rem] w-min-[15rem] overflow-auto resize">
                    <div class="p-4 h-full flex flex-col gap-2">
                        <h3 class="text-xl font-bold">Resizable Panel</h3>
                        <p class="text-sm">Drag the resize handle in the bottom-right corner to resize this panel.</p>
                        <p class="text-sm">The panel will hide when you resize it.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button
    v-styleclass="{ selector: '.box', hideOnResize: true, enterFromClass: 'hidden', enterActiveClass: 'animate-fadein', leaveActiveClass: 'animate-fadeout', leaveToClass: 'hidden' }"
    label="Show Window Responsive Content"
/>
<div class="box hidden animate-duration-300 border border-lg border-surface">
    <div class="p-4 flex flex-col gap-2">
        <h3 class="text-xl font-bold">Window Responsive Panel</h3>
        <p class="text-sm">This panel will hide when you resize the browser window.</p>
        <p class="text-sm">Try resizing your browser window to see the effect.</p>
    </div>
</div>

<Button
    v-styleclass="{
        selector: '.resizable',
        resizeSelector: '.resizable',
        hideOnResize: true,
        enterFromClass: 'hidden',
        enterActiveClass: 'animate-fadein',
        leaveActiveClass: 'animate-fadeout',
        leaveToClass: 'hidden'
    }"
    label="Show Resizable Panel"
/>
<div class="resizable hidden animate-duration-300 border border-lg border-surface w-[20rem] w-max-[25rem] w-min-[15rem] overflow-auto resize">
    <div class="p-4 h-full flex flex-col gap-2">
        <h3 class="text-xl font-bold">Resizable Panel</h3>
        <p class="text-sm">Drag the resize handle in the bottom-right corner to resize this panel.</p>
        <p class="text-sm">The panel will hide when you resize it.</p>
    </div>
</div>
`,
                options: `
<template>
    <div class="card">
        <div class="flex justify-center">
            <div class="flex flex-col items-center gap-4 w-[25rem]">
                <Button
                    v-styleclass="{ selector: '.box', hideOnResize: true, enterFromClass: 'hidden', enterActiveClass: 'animate-fadein', leaveActiveClass: 'animate-fadeout', leaveToClass: 'hidden' }"
                    label="Show Window Responsive Content"
                />
                <div class="box hidden animate-duration-300 border border-lg border-surface">
                    <div class="p-4 flex flex-col gap-2">
                        <h3 class="text-xl font-bold">Window Responsive Panel</h3>
                        <p class="text-sm">This panel will hide when you resize the browser window.</p>
                        <p class="text-sm">Try resizing your browser window to see the effect.</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center gap-4 w-[25rem]">
                <Button
                    v-styleclass="{
                        selector: '.resizable',
                        resizeSelector: '.resizable',
                        hideOnResize: true,
                        enterFromClass: 'hidden',
                        enterActiveClass: 'animate-fadein',
                        leaveActiveClass: 'animate-fadeout',
                        leaveToClass: 'hidden'
                    }"
                    label="Show Resizable Panel"
                />
                <div class="resizable hidden animate-duration-300 border border-lg border-surface w-[20rem] w-max-[25rem] w-min-[15rem] overflow-auto resize">
                    <div class="p-4 h-full flex flex-col gap-2">
                        <h3 class="text-xl font-bold">Resizable Panel</h3>
                        <p class="text-sm">Drag the resize handle in the bottom-right corner to resize this panel.</p>
                        <p class="text-sm">The panel will hide when you resize it.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex justify-center">
            <div class="flex flex-col items-center gap-4 w-[25rem]">
                <Button
                    v-styleclass="{ selector: '.box', hideOnResize: true, enterFromClass: 'hidden', enterActiveClass: 'animate-fadein', leaveActiveClass: 'animate-fadeout', leaveToClass: 'hidden' }"
                    label="Show Window Responsive Content"
                />
                <div class="box hidden animate-duration-300 border border-lg border-surface">
                    <div class="p-4 flex flex-col gap-2">
                        <h3 class="text-xl font-bold">Window Responsive Panel</h3>
                        <p class="text-sm">This panel will hide when you resize the browser window.</p>
                        <p class="text-sm">Try resizing your browser window to see the effect.</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center gap-4 w-[25rem]">
                <Button
                    v-styleclass="{
                        selector: '.resizable',
                        resizeSelector: '.resizable',
                        hideOnResize: true,
                        enterFromClass: 'hidden',
                        enterActiveClass: 'animate-fadein',
                        leaveActiveClass: 'animate-fadeout',
                        leaveToClass: 'hidden'
                    }"
                    label="Show Resizable Panel"
                />
                <div class="resizable hidden animate-duration-300 border border-lg border-surface w-[20rem] w-max-[25rem] w-min-[15rem] overflow-auto resize">
                    <div class="p-4 h-full flex flex-col gap-2">
                        <h3 class="text-xl font-bold">Resizable Panel</h3>
                        <p class="text-sm">Drag the resize handle in the bottom-right corner to resize this panel.</p>
                        <p class="text-sm">The panel will hide when you resize it.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
