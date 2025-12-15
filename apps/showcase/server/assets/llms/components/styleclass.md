# Vue StyleClass Directive

StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.

## Import

```javascript
import StyleClass from 'primevue/styleclass';

app.directive('styleclass', StyleClass);
```

## Animation

Classes to apply during enter and leave animations are specified using the enterFromClass , enterActiveClass , enterToClass , leaveFromClass , leaveActiveClass , leaveToClass properties. In addition in case the target is an overlay, hideOnOutsideClick would be handy to hide the target if outside of the popup is clicked. First example uses a custom fade animation, and second one uses animate-slide from tailwind-primeui plugin.

```vue
<div class="card flex items-center justify-center gap-8">
    <div class="flex flex-col items-center">
        <div>
            <Button v-styleclass="{ selector: '.box1', enterFromClass: 'my-hidden', enterActiveClass: 'my-fadein' }" label="FadeIn" class="mr-2" />
            <Button v-styleclass="{ selector: '.box1', leaveActiveClass: 'my-fadeout', leaveToClass: 'my-hidden' }" label="FadeOut" severity="secondary" />
        </div>
        <div class="h-32">
            <div class="my-hidden animate-duration-500 box1">
                <div class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32">Custom</div>
            </div>
        </div>
    </div>
    <div class="flex flex-col items-center">
        <div>
            <Button v-styleclass="{ selector: '.box2', enterFromClass: 'hidden', enterActiveClass: 'animate-slidedown' }" label="SlideDown" class="mr-2" />
            <Button v-styleclass="{ selector: '.box2', leaveActiveClass: 'animate-slideup', leaveToClass: 'hidden' }" label="SlideUp" severity="secondary" />
        </div>
        <div class="h-32">
            <div class="hidden animate-duration-500 box2 overflow-hidden">
                <div class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32">Content</div>
            </div>
        </div>
    </div>
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex items-center justify-center gap-8">
        <div class="flex flex-col items-center">
            <div>
                <Button v-styleclass="{ selector: '.box1', enterFromClass: 'my-hidden', enterActiveClass: 'my-fadein' }" label="FadeIn" class="mr-2" />
                <Button v-styleclass="{ selector: '.box1', leaveActiveClass: 'my-fadeout', leaveToClass: 'my-hidden' }" label="FadeOut" severity="secondary" />
            </div>
            <div class="h-32">
                <div class="my-hidden animate-duration-500 box1">
                    <div class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32">Custom</div>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <div>
                <Button v-styleclass="{ selector: '.box2', enterFromClass: 'hidden', enterActiveClass: 'animate-slidedown' }" label="SlideDown" class="mr-2" />
                <Button v-styleclass="{ selector: '.box2', leaveActiveClass: 'animate-slideup', leaveToClass: 'hidden' }" label="SlideUp" severity="secondary" />
            </div>
            <div class="h-32">
                <div class="hidden animate-duration-500 box2 overflow-hidden">
                    <div class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32">Content</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
<\/script>

<style scoped>
@keyframes my-fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes my-fadeout {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.my-hidden {
    display: none;
}

.my-fadein {
    animation: my-fadein 150ms linear;
}

.my-fadeout {
    animation: my-fadeout 150ms linear;
}
</style>
```

</details>

## HideOnResizeDoc

When hideOnResize is enabled, the leave animation is triggered automatically when resizing occurs. Use the resizeSelector property to specify whether to listen to window resize events or element-specific resize events. Set resizeSelector to "window" (default) or "document" for browser resize, or a CSS selector to observe the target element's dimensions.

```vue
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
```

<details>
<summary>Composition API Example</summary>

```vue
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
```

</details>

## ToggleClassDoc

StyleClass has two modes, toggleClass to simply add-remove a class and enter/leave animations.

```vue
<Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle p-disabled" />
<InputText />
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col items-center gap-4">
        <Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle .p-disabled" />
        <InputText />
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Styleclass
