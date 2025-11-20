# Vue ImageCompare Component

Compare two images side by side with a slider.

## Import

```javascript
import ImageCompare from 'primevue/imagecompare';
```

## Accessibility

Screen Reader ImageComponent component uses a native range slider internally. Value to describe the component can be defined using aria-labelledby and aria-label props. Keyboard Support Key Function tab Moves focus to the component. left arrow up arrow Decrements the value. right arrow down arrow Increments the value. home Set the minimum value. end Set the maximum value. page up Increments the value by 10 steps. page down Decrements the value by 10 steps.

```vue
<span id="image_label">Compare Images</span>
<ImageCompare class="shadow-lg rounded-2xl" aria-labelledby="image-label">
    ...
</ImageCompare>

<ImageCompare class="shadow-lg rounded-2xl" aria-label="Compare Images">
    ...
</ImageCompare>
```

## Basic

Images are defined using templating with left and right slots. Use the style or class properties to define the size of the container.

```vue
<ImageCompare class="shadow-lg rounded-2xl">
    <template #left>
        <img src="~/assets/images/island1.jpg" />
    </template>
    <template #right>
        <img src="~/assets/images/island2.jpg" />
    </template>
</ImageCompare>
```

## Responsive

Apply responsive styles to the container element to optimize display per screen size.

```vue
<ImageCompare class="sm:!w-96 shadow-lg rounded-2xl">
    <template #left>
        <img src="~/assets/images/island1.jpg" />
    </template>
    <template #right>
        <img src="~/assets/images/island2.jpg" />
    </template>
</ImageCompare>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <ImageCompare class="sm:!w-96 shadow-lg">
            <template #left>
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
            </template>
            <template #right>
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
            </template>
        </ImageCompare>
    </div>
</template>
```
</details>

## Imagecompare

## Imagecompare

