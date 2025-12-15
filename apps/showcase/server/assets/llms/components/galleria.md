# Vue Gallery Component

Galleria is a content gallery component.

## Import

```javascript
import Galleria from 'primevue/galleria';
```

## AccessibilityDoc

Screen Reader Galleria uses region role and since any attribute is passed to the main container element, attributes such as aria-label and aria-roledescription can be used as well. The slides container has aria-live attribute set as "polite" if galleria is not in autoplay mode, otherwise "off" would be the value in autoplay. A slide has a group role with an aria-label that refers to the aria.slideNumber property of the locale API. Similarly aria.slide is used as the aria-roledescription of the item. Inactive slides are hidden from the readers with aria-hidden . Next and Previous navigators are button elements with aria-label attributes referring to the aria.prevPageLabel and aria.nextPageLabel properties of the locale API by default respectively, you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using nextButtonProps and prevButtonProps . Quick navigation elements and thumnbails follow the tab pattern. They are placed inside an element with a tablist role whereas each item has a tab role with aria-selected and aria-controls attributes. The aria-label attribute of a quick navigation item refers to the aria.pageLabel of the locale API. Current page is marked with aria-current . In full screen mode, modal element uses dialog role with aria-modal enabled. The close button retrieves aria-label from the aria.close property of the locale API. Next/Prev Keyboard Support Key Function tab Moves focus through interactive elements in the carousel. enter Activates navigation. space Activates navigation. Quick Navigation Keyboard Support Key Function tab Moves focus through the active slide link. enter Activates the focused slide link. space Activates the focused slide link. right arrow Moves focus to the next slide link. left arrow Moves focus to the previous slide link. home Moves focus to the first slide link. end Moves focus to the last slide link.

## AdvancedDoc

Advanced Galleria implementation with a custom UI.

```vue
<Galleria
    ref="galleria"
    v-model:activeIndex="activeIndex"
    :value="images"
    :numVisible="5"
    containerStyle="max-width: 640px"
    :showThumbnails="showThumbnails"
    :showItemNavigators="true"
    :showItemNavigatorsOnHover="true"
    :circular="true"
    :autoPlay="isAutoPlay"
    :transitionInterval="3000"
    :responsiveOptions="responsiveOptions"
    :pt="{
        root: {
            class: [{ 'flex flex-col': fullScreen }]
        },
        content: {
            class: ['relative', { 'flex-1 justify-center': fullScreen }]
        },
        thumbnails: 'absolute w-full left-0 bottom-0'
    }"
>
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
    </template>
    <template #thumbnail="slotProps">
        <div class="grid gap-4 justify-center">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </div>
    </template>
    <template #footer>
        <div class="flex items-stretch bg-surface-950 text-white h-10">
            <button type="button" @click="onThumbnailButtonClick" class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3">
                <i class="pi pi-th-large"></i>
            </button>
            <button type="button" @click="toggleAutoSlide" class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3"><i :class="slideButtonIcon"></i></button>
            <span v-if="images" class="flex items-center gap-4 ml-3">
                <span class="text-sm">{{ activeIndex + 1 }}/{{ images.length }}</span>
                <span class="font-bold text-sm">{{ images[activeIndex].title }}</span>
                <span class="text-sm">{{ images[activeIndex].alt }}</span>
            </span>
            <button type="button" @click="toggleFullScreen" class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3 ml-auto">
                <i :class="fullScreenIcon"></i>
            </button>
        </div>
    </template>
</Galleria>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Galleria
            ref="galleria"
            v-model:activeIndex="activeIndex"
            :value="images"
            :numVisible="5"
            containerStyle="max-width: 640px"
            :showThumbnails="showThumbnails"
            :showItemNavigators="true"
            :showItemNavigatorsOnHover="true"
            :circular="true"
            :autoPlay="isAutoPlay"
            :transitionInterval="3000"
            :responsiveOptions="responsiveOptions"
            :pt="{
                root: {
                    class: [{ 'flex flex-col': fullScreen }]
                },
                content: {
                    class: ['relative', { 'flex-1 justify-center': fullScreen }]
                },
                thumbnails: 'absolute w-full left-0 bottom-0'
            }"
        >
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid gap-4 justify-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </div>
            </template>
            <template #footer>
                <div class="flex items-stretch bg-surface-950 text-white h-10">
                    <button type="button" @click="onThumbnailButtonClick" class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3">
                        <i class="pi pi-th-large"></i>
                    </button>
                    <button type="button" @click="toggleAutoSlide" class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3"><i :class="slideButtonIcon"></i></button>
                    <span v-if="images" class="flex items-center gap-4 ml-3">
                        <span class="text-sm">{{ activeIndex + 1 }}/{{ images.length }}</span>
                        <span class="font-bold text-sm">{{ images[activeIndex].title }}</span>
                        <span class="text-sm">{{ images[activeIndex].alt }}</span>
                    </span>
                    <button type="button" @click="toggleFullScreen" class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3 ml-auto">
                        <i :class="fullScreenIcon"></i>
                    </button>
                </div>
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
    bindDocumentListeners();
});

const galleria = ref();
const images = ref();
const activeIndex = ref(0);
const showThumbnails = ref(false);
const fullScreen = ref(false);
const isAutoPlay = ref(true);

const toggleAutoSlide = () => {
    isAutoPlay.value  = !isAutoPlay.value ;
};
const onThumbnailButtonClick = () => {
    showThumbnails.value  = !showThumbnails.value ;
};

const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

const toggleFullScreen = () => {
    if (fullScreen.value ) {
        closeFullScreen();
    } else {
        openFullScreen();
    }
};
const onFullScreenChange = () => {
    fullScreen.value  = !fullScreen.value ;
};
const openFullScreen = () =>{
    let elem = galleria.value.$el;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
};
const closeFullScreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
};
const bindDocumentListeners = () => {
    document.addEventListener('fullscreenchange', onFullScreenChange);
    document.addEventListener('mozfullscreenchange', onFullScreenChange);
    document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    document.addEventListener('msfullscreenchange', onFullScreenChange);
};
const unbindDocumentListeners = () => {
    document.removeEventListener('fullscreenchange', onFullScreenChange);
    document.removeEventListener('mozfullscreenchange', onFullScreenChange);
    document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
    document.removeEventListener('msfullscreenchange', onFullScreenChange);
};

const fullScreenIcon = computed(() => {
    return \`pi \${fullScreen.value ? 'pi-window-minimize' : 'pi-window-maximize'}\`;
});
const slideButtonIcon = computed(() => {
    return \`pi \${isAutoPlay.value ? 'pi-pause' : 'pi-play'}\`;
});
<\/script>
```

</details>

## AutoPlayDoc

A slideshow implementation is defined by adding circular and autoPlay properties.

```vue
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px" :circular="true" :autoPlay="true" :transitionInterval="2000">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
    </template>
</Galleria>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
            :circular="true" :autoPlay="true" :transitionInterval="2000">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>
```

</details>

## Basic

Galleria requires a value as a collection of images, item template for the higher resolution image and thumbnail template to display as a thumbnail.

```vue
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
    </template>
</Galleria>
```

## CaptionDoc

Description of an image is specified with the caption property that takes the displayed object and returns content.

```vue
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
    </template>
    <template #caption="slotProps">
        <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
        <p class="text-white">{{ slotProps.item.alt }}</p>
    </template>
</Galleria>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
            <template #caption="slotProps">
                <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
                <p class="text-white">{{ slotProps.item.alt }}</p>
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>
```

</details>

## Controlled

Galleria can be controlled programmatically using a binding to activeIndex .

```vue
<div>
    <Button icon="pi pi-minus" @click="prev" />
    <Button icon="pi pi-plus" @click="next" severity="secondary" class="ml-2" />
</div>

<Galleria v-model:activeIndex="activeIndex" :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
    </template>
</Galleria>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="mb-4">
            <Button icon="pi pi-minus" @click="prev" />
            <Button icon="pi pi-plus" @click="next" severity="secondary" class="ml-2" />
        </div>

        <Galleria v-model:activeIndex="activeIndex" :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const activeIndex = ref(2);
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

const next = () => {
    activeIndex.value = activeIndex.value === images.value.length - 1 ? images.value.length - 1 : activeIndex.value + 1;
};
const prev = () => {
    activeIndex.value = activeIndex.value === 0 ? 0 : activeIndex.value - 1;
};
<\/script>
```

</details>

## ResponsiveDoc

Settings per screen size is defined via the responsiveOptions property.

```vue
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
</Galleria>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>
```

</details>

## ThumbnailDoc

Thumbnails represent a smaller version of the actual content.

```vue
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :thumbnailsPosition="position" containerStyle="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <div class="grid gap-4 justify-center">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
        </div>
    </template>
</Galleria>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex flex-wrap gap-4 mb-8">
            <div v-for="option in positionOptions" :key="option.label" class="flex items-center">
                <RadioButton v-model="position" :inputId="option.label" name="option" :value="option.value" />
                <label :for="option.label" class="ml-2"> {{ option.label }} </label>
            </div>
        </div>
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="4" :thumbnailsPosition="position" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid gap-4 justify-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                </div>
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

const images = ref();
const position = ref('bottom');
const positionOptions = ref([
    {
        label: 'Bottom',
        value: 'bottom'
    },
    {
        label: 'Top',
        value: 'top'
    },
    {
        label: 'Left',
        value: 'left'
    },
    {
        label: 'Right',
        value: 'right'
    }
]);
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});
<\/script>
```

</details>

## Galleria

### Props

| Name                            | Type                                                 | Default | Description                                                                                    |
| ------------------------------- | ---------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------- |
| id                              | string                                               | -       | Unique identifier of the element.                                                              |
| value                           | any[]                                                | -       | An array of objects to display.                                                                |
| activeIndex                     | number                                               | 0       | Index of the first item.                                                                       |
| fullScreen                      | boolean                                              | false   | Whether to display the component on fullscreen.                                                |
| visible                         | boolean                                              | false   | Specifies the visibility of the mask on fullscreen mode.                                       |
| numVisible                      | number                                               | 3       | Number of items per page.                                                                      |
| responsiveOptions               | GalleriaResponsiveOptions[]                          | -       | An array of options for responsive design.                                                     |
| showItemNavigators              | boolean                                              | false   | Whether to display navigation buttons in item section.                                         |
| showThumbnailNavigators         | boolean                                              | true    | Whether to display navigation buttons in thumbnail container.                                  |
| showItemNavigatorsOnHover       | boolean                                              | false   | Whether to display navigation buttons on item hover.                                           |
| changeItemOnIndicatorHover      | boolean                                              | false   | When enabled, item is changed on indicator hover.                                              |
| circular                        | boolean                                              | false   | Defines if scrolling would be infinite.                                                        |
| autoPlay                        | boolean                                              | false   | Items are displayed with a slideshow in autoPlay mode.                                         |
| transitionInterval              | number                                               | 4000    | Time in milliseconds to scroll items.                                                          |
| showThumbnails                  | boolean                                              | true    | Whether to display thumbnail container.                                                        |
| thumbnailsPosition              | HintedString<"left" \| "right" \| "top" \| "bottom"> | bottom  | Position of thumbnails.                                                                        |
| verticalThumbnailViewPortHeight | string                                               | 300px   | Height of the viewport in vertical thumbnail.                                                  |
| showIndicators                  | boolean                                              | false   | Whether to display indicator container.                                                        |
| showIndicatorsOnItem            | boolean                                              | false   | When enabled, indicator container is displayed on item container.                              |
| indicatorsPosition              | HintedString<"left" \| "right" \| "top" \| "bottom"> | bottom  | Position of indicators.                                                                        |
| baseZIndex                      | number                                               | 0       | Base zIndex value to use in layering.                                                          |
| maskClass                       | string                                               | -       | Style class of the mask on fullscreen mode.                                                    |
| containerStyle                  | any                                                  | -       | Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used. |
| containerClass                  | any                                                  | -       | Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.  |
| containerProps                  | HTMLAttributes                                       | -       | Used to pass all properties of the HTMLDivElement to the container element on fullscreen mode. |
| prevButtonProps                 | ButtonHTMLAttributes                                 | -       | Used to pass all properties of the HTMLButtonElement to the previous navigation button.        |
| nextButtonProps                 | ButtonHTMLAttributes                                 | -       | Used to pass all properties of the HTMLButtonElement to the next navigation button.            |
| ariaLabel                       | string                                               | -       | Defines a string value that labels an interactive element.                                     |
| ariaRoledescription             | string                                               | -       | Defines a string value that description for the role of the component.                         |
| dt                              | any                                                  | -       | It generates scoped CSS variables using design tokens for the component.                       |
| pt                              | PassThrough<GalleriaPassThroughOptions>              | -       | Used to pass attributes to DOM elements inside the component.                                  |
| ptOptions                       | any                                                  | -       | Used to configure passthrough(pt) options of the component.                                    |
| unstyled                        | boolean                                              | false   | When enabled, it removes component related styles in the core.                                 |

## Pass Through Options

| Name                | Type                              | Description                                                             |
| ------------------- | --------------------------------- | ----------------------------------------------------------------------- |
| root                | GalleriaPassThroughOptionType     | Used to pass attributes to the root's DOM element.                      |
| closeButton         | GalleriaPassThroughOptionType     | Used to pass attributes to the close button's DOM element.              |
| closeIcon           | GalleriaPassThroughOptionType     | Used to pass attributes to the close icon's DOM element.                |
| header              | GalleriaPassThroughOptionType     | Used to pass attributes to the header's DOM element.                    |
| content             | GalleriaPassThroughOptionType     | Used to pass attributes to the content's DOM element.                   |
| footer              | GalleriaPassThroughOptionType     | Used to pass attributes to the footer's DOM element.                    |
| itemsContainer      | GalleriaPassThroughOptionType     | Used to pass attributes to the item container's DOM element.            |
| items               | GalleriaPassThroughOptionType     | Used to pass attributes to the items' DOM element.                      |
| prevButton          | GalleriaPassThroughOptionType     | Used to pass attributes to the previous item button's DOM element.      |
| prevIcon            | GalleriaPassThroughOptionType     | Used to pass attributes to the previous item icon's DOM element.        |
| item                | GalleriaPassThroughOptionType     | Used to pass attributes to the item's DOM element.                      |
| nextButton          | GalleriaPassThroughOptionType     | Used to pass attributes to the next item button's DOM element.          |
| nextIcon            | GalleriaPassThroughOptionType     | Used to pass attributes to the next item icon's DOM element.            |
| caption             | GalleriaPassThroughOptionType     | Used to pass attributes to the caption's DOM element.                   |
| indicatorList       | GalleriaPassThroughOptionType     | Used to pass attributes to the indicator list's DOM element.            |
| indicator           | GalleriaPassThroughOptionType     | Used to pass attributes to the indicator's DOM element.                 |
| indicatorButton     | GalleriaPassThroughOptionType     | Used to pass attributes to the indicator button's DOM element.          |
| thumbnails          | GalleriaPassThroughOptionType     | Used to pass attributes to the thumbnails' DOM element.                 |
| thumbnailContent    | GalleriaPassThroughOptionType     | Used to pass attributes to the thumbnail content's DOM element.         |
| thumbnailPrevButton | GalleriaPassThroughOptionType     | Used to pass attributes to the previous thumbnail button's DOM element. |
| thumbnailPrevIcon   | GalleriaPassThroughOptionType     | Used to pass attributes to the previous thumbnail icon's DOM element.   |
| thumbnailsViewport  | GalleriaPassThroughOptionType     | Used to pass attributes to the thumbnails viewport's DOM element.       |
| thumbnailItems      | GalleriaPassThroughOptionType     | Used to pass attributes to the thumbnail items' DOM element.            |
| thumbnailItem       | GalleriaPassThroughOptionType     | Used to pass attributes to the thumbnail item's DOM element.            |
| thumbnail           | GalleriaPassThroughOptionType     | Used to pass attributes to the thumbnail's DOM element.                 |
| thumbnailNextButton | GalleriaPassThroughOptionType     | Used to pass attributes to the next thumbnail button's DOM element.     |
| thumbnailNextIcon   | GalleriaPassThroughOptionType     | Used to pass attributes to the next thumbnail icon's DOM element.       |
| mask                | GalleriaPassThroughOptionType     | Used to pass attributes to the mask's DOM element.                      |
| hooks               | any                               | Used to manage all lifecycle hooks.                                     |
| transition          | GalleriaPassThroughTransitionType | Used to control Vue Transition API.                                     |

## Theming

### CSS Classes

| Class                            | Description                                         |
| -------------------------------- | --------------------------------------------------- |
| p-galleria-mask                  | Class name of the mask element                      |
| p-galleria                       | Class name of the root element                      |
| p-galleria-close-button          | Class name of the close button element              |
| p-galleria-close-icon            | Class name of the close icon element                |
| p-galleria-header                | Class name of the header element                    |
| p-galleria-content               | Class name of the content element                   |
| p-galleria-footer                | Class name of the footer element                    |
| p-galleria-items-container       | Class name of the items container element           |
| p-galleria-items                 | Class name of the items element                     |
| p-galleria-prev-button           | Class name of the previous item button element      |
| p-galleria-prev-icon             | Class name of the previous item icon element        |
| p-galleria-item                  | Class name of the item element                      |
| p-galleria-next-button           | Class name of the next item button element          |
| p-galleria-next-icon             | Class name of the next item icon element            |
| p-galleria-caption               | Class name of the caption element                   |
| p-galleria-indicator-list        | Class name of the indicator list element            |
| p-galleria-indicator             | Class name of the indicator element                 |
| p-galleria-indicator-button      | Class name of the indicator button element          |
| p-galleria-thumbnails            | Class name of the thumbnails element                |
| p-galleria-thumbnails-content    | Class name of the thumbnail content element         |
| p-galleria-thumbnail-prev-button | Class name of the previous thumbnail button element |
| p-galleria-thumbnail-prev-icon   | Class name of the previous thumbnail icon element   |
| p-galleria-thumbnails-viewport   | Class name of the thumbnails viewport element       |
| p-galleria-thumbnail-items       | Class name of the thumbnail items element           |
| p-galleria-thumbnail-item        | Class name of the thumbnail item element            |
| p-galleria-thumbnail             | Class name of the thumbnail element                 |
| p-galleria-thumbnail-next-button | Class name of the next thumbnail button element     |
| p-galleria-thumbnail-next-icon   | Class name of the next thumbnail icon element       |

### Design Tokens

| Token                                             | CSS Variable                                          | Description                                 |
| ------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------- |
| galleria.border.width                             | --p-galleria-border-width                             | Border width of root                        |
| galleria.border.color                             | --p-galleria-border-color                             | Border color of root                        |
| galleria.border.radius                            | --p-galleria-border-radius                            | Border radius of root                       |
| galleria.transition.duration                      | --p-galleria-transition-duration                      | Transition duration of root                 |
| galleria.nav.button.background                    | --p-galleria-nav-button-background                    | Background of nav button                    |
| galleria.nav.button.hover.background              | --p-galleria-nav-button-hover-background              | Hover background of nav button              |
| galleria.nav.button.color                         | --p-galleria-nav-button-color                         | Color of nav button                         |
| galleria.nav.button.hover.color                   | --p-galleria-nav-button-hover-color                   | Hover color of nav button                   |
| galleria.nav.button.size                          | --p-galleria-nav-button-size                          | Size of nav button                          |
| galleria.nav.button.gutter                        | --p-galleria-nav-button-gutter                        | Gutter of nav button                        |
| galleria.nav.button.prev.border.radius            | --p-galleria-nav-button-prev-border-radius            | Prev border radius of nav button            |
| galleria.nav.button.next.border.radius            | --p-galleria-nav-button-next-border-radius            | Next border radius of nav button            |
| galleria.nav.button.focus.ring.width              | --p-galleria-nav-button-focus-ring-width              | Focus ring width of nav button              |
| galleria.nav.button.focus.ring.style              | --p-galleria-nav-button-focus-ring-style              | Focus ring style of nav button              |
| galleria.nav.button.focus.ring.color              | --p-galleria-nav-button-focus-ring-color              | Focus ring color of nav button              |
| galleria.nav.button.focus.ring.offset             | --p-galleria-nav-button-focus-ring-offset             | Focus ring offset of nav button             |
| galleria.nav.button.focus.ring.shadow             | --p-galleria-nav-button-focus-ring-shadow             | Focus ring shadow of nav button             |
| galleria.nav.icon.size                            | --p-galleria-nav-icon-size                            | Size of nav icon                            |
| galleria.thumbnails.content.background            | --p-galleria-thumbnails-content-background            | Background of thumbnails content            |
| galleria.thumbnails.content.padding               | --p-galleria-thumbnails-content-padding               | Padding of thumbnails content               |
| galleria.thumbnail.nav.button.size                | --p-galleria-thumbnail-nav-button-size                | Size of thumbnail nav button                |
| galleria.thumbnail.nav.button.border.radius       | --p-galleria-thumbnail-nav-button-border-radius       | Border radius of thumbnail nav button       |
| galleria.thumbnail.nav.button.gutter              | --p-galleria-thumbnail-nav-button-gutter              | Gutter of thumbnail nav button              |
| galleria.thumbnail.nav.button.focus.ring.width    | --p-galleria-thumbnail-nav-button-focus-ring-width    | Focus ring width of thumbnail nav button    |
| galleria.thumbnail.nav.button.focus.ring.style    | --p-galleria-thumbnail-nav-button-focus-ring-style    | Focus ring style of thumbnail nav button    |
| galleria.thumbnail.nav.button.focus.ring.color    | --p-galleria-thumbnail-nav-button-focus-ring-color    | Focus ring color of thumbnail nav button    |
| galleria.thumbnail.nav.button.focus.ring.offset   | --p-galleria-thumbnail-nav-button-focus-ring-offset   | Focus ring offset of thumbnail nav button   |
| galleria.thumbnail.nav.button.focus.ring.shadow   | --p-galleria-thumbnail-nav-button-focus-ring-shadow   | Focus ring shadow of thumbnail nav button   |
| galleria.thumbnail.nav.button.hover.background    | --p-galleria-thumbnail-nav-button-hover-background    | Hover background of thumbnail nav button    |
| galleria.thumbnail.nav.button.color               | --p-galleria-thumbnail-nav-button-color               | Color of thumbnail nav button               |
| galleria.thumbnail.nav.button.hover.color         | --p-galleria-thumbnail-nav-button-hover-color         | Hover color of thumbnail nav button         |
| galleria.thumbnail.nav.button.icon.size           | --p-galleria-thumbnail-nav-button-icon-size           | Size of thumbnail nav button icon           |
| galleria.caption.background                       | --p-galleria-caption-background                       | Background of caption                       |
| galleria.caption.color                            | --p-galleria-caption-color                            | Color of caption                            |
| galleria.caption.padding                          | --p-galleria-caption-padding                          | Padding of caption                          |
| galleria.indicator.list.gap                       | --p-galleria-indicator-list-gap                       | Gap of indicator list                       |
| galleria.indicator.list.padding                   | --p-galleria-indicator-list-padding                   | Padding of indicator list                   |
| galleria.indicator.button.width                   | --p-galleria-indicator-button-width                   | Width of indicator button                   |
| galleria.indicator.button.height                  | --p-galleria-indicator-button-height                  | Height of indicator button                  |
| galleria.indicator.button.active.background       | --p-galleria-indicator-button-active-background       | Active background of indicator button       |
| galleria.indicator.button.border.radius           | --p-galleria-indicator-button-border-radius           | Border radius of indicator button           |
| galleria.indicator.button.focus.ring.width        | --p-galleria-indicator-button-focus-ring-width        | Focus ring width of indicator button        |
| galleria.indicator.button.focus.ring.style        | --p-galleria-indicator-button-focus-ring-style        | Focus ring style of indicator button        |
| galleria.indicator.button.focus.ring.color        | --p-galleria-indicator-button-focus-ring-color        | Focus ring color of indicator button        |
| galleria.indicator.button.focus.ring.offset       | --p-galleria-indicator-button-focus-ring-offset       | Focus ring offset of indicator button       |
| galleria.indicator.button.focus.ring.shadow       | --p-galleria-indicator-button-focus-ring-shadow       | Focus ring shadow of indicator button       |
| galleria.indicator.button.background              | --p-galleria-indicator-button-background              | Background of indicator button              |
| galleria.indicator.button.hover.background        | --p-galleria-indicator-button-hover-background        | Hover background of indicator button        |
| galleria.inset.indicator.list.background          | --p-galleria-inset-indicator-list-background          | Background of inset indicator list          |
| galleria.inset.indicator.button.background        | --p-galleria-inset-indicator-button-background        | Background of inset indicator button        |
| galleria.inset.indicator.button.hover.background  | --p-galleria-inset-indicator-button-hover-background  | Hover background of inset indicator button  |
| galleria.inset.indicator.button.active.background | --p-galleria-inset-indicator-button-active-background | Active background of inset indicator button |
| galleria.close.button.size                        | --p-galleria-close-button-size                        | Size of close button                        |
| galleria.close.button.gutter                      | --p-galleria-close-button-gutter                      | Gutter of close button                      |
| galleria.close.button.background                  | --p-galleria-close-button-background                  | Background of close button                  |
| galleria.close.button.hover.background            | --p-galleria-close-button-hover-background            | Hover background of close button            |
| galleria.close.button.color                       | --p-galleria-close-button-color                       | Color of close button                       |
| galleria.close.button.hover.color                 | --p-galleria-close-button-hover-color                 | Hover color of close button                 |
| galleria.close.button.border.radius               | --p-galleria-close-button-border-radius               | Border radius of close button               |
| galleria.close.button.focus.ring.width            | --p-galleria-close-button-focus-ring-width            | Focus ring width of close button            |
| galleria.close.button.focus.ring.style            | --p-galleria-close-button-focus-ring-style            | Focus ring style of close button            |
| galleria.close.button.focus.ring.color            | --p-galleria-close-button-focus-ring-color            | Focus ring color of close button            |
| galleria.close.button.focus.ring.offset           | --p-galleria-close-button-focus-ring-offset           | Focus ring offset of close button           |
| galleria.close.button.focus.ring.shadow           | --p-galleria-close-button-focus-ring-shadow           | Focus ring shadow of close button           |
| galleria.close.button.icon.size                   | --p-galleria-close-button-icon-size                   | Size of close button icon                   |
