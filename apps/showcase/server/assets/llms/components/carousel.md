# Vue Carousel Component

Carousel is a content slider featuring various customization options.

## Import

```javascript
import Carousel from 'primevue/carousel';
```

## Accessibility

Screen Reader Carousel uses region role and since any attribute is passed to the main container element, attributes such as aria-label and aria-roledescription can be used as well. The slides container has aria-live attribute set as "polite" if carousel is not in autoplay mode, otherwise "off" would be the value in autoplay. A slide has a group role with an aria-label that refers to the aria.slideNumber property of the locale API. Similarly aria.slide is used as the aria-roledescription of the item. Inactive slides are hidden from the readers with aria-hidden . Next and Previous navigators are button elements with aria-label attributes referring to the aria.prevPageLabel and aria.nextPageLabel properties of the locale API by default respectively, you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using nextButtonProps and prevButtonProps . Quick navigation elements are button elements with an aria-label attribute referring to the aria.pageLabel of the locale API. Current page is marked with aria-current . Next/Prev Keyboard Support Key Function tab Moves focus through interactive elements in the carousel. enter Activates navigation. space Activates navigation. Quick Navigation Keyboard Support Key Function tab Moves focus through the active slide link. enter Activates the focused slide link. space Activates the focused slide link. right arrow Moves focus to the next slide link. left arrow Moves focus to the previous slide link. home Moves focus to the first slide link. end Moves focus to the last slide link.

## Basic

Carousel requires a collection of items as its value along with a template to render each item.

```vue
<Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                </div>
            </div>
            <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">\${{ slotProps.data.price }}</div>
                <span>
                    <Button icon="pi pi-heart" severity="secondary" variant="outlined" />
                    <Button icon="pi pi-shopping-cart" class="ml-2"/>
                </span>
            </div>
        </div>
    </template>
</Carousel>
```

## Circular

When autoplayInterval is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling circular property needs to be added which is enabled automatically in auto play mode.

```vue
<Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
    <template #item="slotProps">
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                </div>
            </div>
            <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">\${{ slotProps.data.price }}</div>
                <span>
                    <Button icon="pi pi-heart" severity="secondary" variant="outlined" />
                    <Button icon="pi pi-shopping-cart" class="ml-2"/>
                </span>
            </div>
        </div>
    </template>
</Carousel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl">\${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" variant="outlined" />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

<\/script>
```

</details>

## Responsive

Carousel supports specific configuration per screen size with the responsiveOptions property that takes an array of objects where each object defines the max-width breakpoint , numVisible for the number of items items per page and numScroll for number of items to scroll. When responsiveOptions is defined, the numScroll and numVisible properties of the Carousel are used as default when there is breakpoint that applies.

```vue
<Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                </div>
            </div>
            <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">\${{ slotProps.data.price }}</div>
                <span>
                    <Button icon="pi pi-heart" severity="secondary" variant="outlined" />
                    <Button icon="pi pi-shopping-cart" class="ml-2"/>
                </span>
            </div>
        </div>
    </template>
</Carousel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl">\${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" variant="outlined" />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
<\/script>
```

</details>

## Vertical

To create a vertical Carousel, orientation needs to be set to vertical along with a verticalViewPortHeight .

```vue
<Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" containerClass="flex items-center">
    <template #item="slotProps">
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                </div>
            </div>
            <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">\${{ slotProps.data.price }}</div>
                <span>
                    <Button icon="pi pi-heart" severity="secondary" variant="outlined" />
                    <Button icon="pi pi-shopping-cart" class="ml-2"/>
                </span>
            </div>
        </div>
    </template>
</Carousel>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="330px" containerClass="flex items-center">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl">\${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" variant="outlined" />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
                </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

<\/script>
```

</details>

## Carousel

### Props

| Name                   | Type                                    | Default    | Description                                                                          |
| ---------------------- | --------------------------------------- | ---------- | ------------------------------------------------------------------------------------ |
| value                  | any                                     | -          | An array of objects to display.                                                      |
| page                   | number                                  | 0          | Index of the first item.                                                             |
| numVisible             | number                                  | 1          | Number of items per page.                                                            |
| numScroll              | number                                  | 1          | Number of items to scroll.                                                           |
| responsiveOptions      | CarouselResponsiveOptions[]             | -          | An array of options for responsive design.                                           |
| orientation            | "horizontal" \| "vertical"              | horizontal | Specifies the layout of the component, valid values are 'horizontal' and 'vertical'. |
| verticalViewPortHeight | string                                  | 300px      | Height of the viewport in vertical layout.                                           |
| containerClass         | any                                     | -          | Style class of the viewport container.                                               |
| contentClass           | any                                     | -          | Style class of main content.                                                         |
| indicatorsContentClass | any                                     | -          | Style class of the indicator items.                                                  |
| circular               | boolean                                 | false      | Defines if scrolling would be infinite.                                              |
| autoplayInterval       | number                                  | 0          | Time in milliseconds to scroll items automatically.                                  |
| showNavigators         | boolean                                 | true       | Whether to display navigation buttons in container.                                  |
| showIndicators         | boolean                                 | true       | Whether to display indicator container.                                              |
| prevButtonProps        | object                                  | -          | Used to pass attributes to the previous Button component.                            |
| nextButtonProps        | object                                  | -          | Used to pass attributes to the next Button component.                                |
| dt                     | any                                     | -          | It generates scoped CSS variables using design tokens for the component.             |
| pt                     | PassThrough<CarouselPassThroughOptions> | -          | Used to pass attributes to DOM elements inside the component.                        |
| ptOptions              | any                                     | -          | Used to configure passthrough(pt) options of the component.                          |
| unstyled               | boolean                                 | false      | When enabled, it removes component related styles in the core.                       |

## Pass Through Options

| Name             | Type                          | Description                                                     |
| ---------------- | ----------------------------- | --------------------------------------------------------------- |
| root             | CarouselPassThroughOptionType | Used to pass attributes to the root's DOM element.              |
| header           | CarouselPassThroughOptionType | Used to pass attributes to the header's DOM element.            |
| contentContainer | CarouselPassThroughOptionType | Used to pass attributes to the content container's DOM element. |
| content          | CarouselPassThroughOptionType | Used to pass attributes to the content's DOM element.           |
| pcPrevButton     | any                           | Used to pass attributes to the previous button's DOM element.   |
| viewport         | CarouselPassThroughOptionType | Used to pass attributes to the viewport's DOM element.          |
| itemList         | CarouselPassThroughOptionType | Used to pass attributes to the items list's DOM element.        |
| itemClone        | CarouselPassThroughOptionType | Used to pass attributes to the item clone's DOM element.        |
| item             | CarouselPassThroughOptionType | Used to pass attributes to the item's DOM element.              |
| pcNextButton     | any                           | Used to pass attributes to the next button's DOM element.       |
| indicatorList    | CarouselPassThroughOptionType | Used to pass attributes to the indicator list's DOM element.    |
| indicator        | CarouselPassThroughOptionType | Used to pass attributes to the indicator's DOM element.         |
| indicatorButton  | CarouselPassThroughOptionType | Used to pass attributes to the indicator button's DOM element.  |
| footer           | CarouselPassThroughOptionType | Used to pass attributes to the footer's DOM element.            |
| hooks            | any                           | Used to manage all lifecycle hooks.                             |

## Theming

### CSS Classes

| Class                        | Description                                 |
| ---------------------------- | ------------------------------------------- |
| p-carousel                   | Class name of the root element              |
| p-carousel-header            | Class name of the header element            |
| p-carousel-content-container | Class name of the content container element |
| p-carousel-content           | Class name of the content element           |
| p-carousel-prev-button       | Class name of the previous button element   |
| p-carousel-viewport          | Class name of the viewport element          |
| p-carousel-item-list         | Class name of the item list element         |
| p-carousel-item-clone        | Class name of the item clone element        |
| p-carousel-item              | Class name of the item element              |
| p-carousel-next-button       | Class name of the next button element       |
| p-carousel-indicator-list    | Class name of the indicator list element    |
| p-carousel-indicator         | Class name of the indicator element         |
| p-carousel-indicator-button  | Class name of the indicator button element  |
| p-carousel-footer            | Class name of the footer element            |

### Design Tokens

| Token                                | CSS Variable                             | Description                    |
| ------------------------------------ | ---------------------------------------- | ------------------------------ |
| carousel.transition.duration         | --p-carousel-transition-duration         | Transition duration of root    |
| carousel.content.gap                 | --p-carousel-content-gap                 | Gap of content                 |
| carousel.indicator.list.padding      | --p-carousel-indicator-list-padding      | Padding of indicator list      |
| carousel.indicator.list.gap          | --p-carousel-indicator-list-gap          | Gap of indicator list          |
| carousel.indicator.width             | --p-carousel-indicator-width             | Width of indicator             |
| carousel.indicator.height            | --p-carousel-indicator-height            | Height of indicator            |
| carousel.indicator.border.radius     | --p-carousel-indicator-border-radius     | Border radius of indicator     |
| carousel.indicator.focus.ring.width  | --p-carousel-indicator-focus-ring-width  | Focus ring width of indicator  |
| carousel.indicator.focus.ring.style  | --p-carousel-indicator-focus-ring-style  | Focus ring style of indicator  |
| carousel.indicator.focus.ring.color  | --p-carousel-indicator-focus-ring-color  | Focus ring color of indicator  |
| carousel.indicator.focus.ring.offset | --p-carousel-indicator-focus-ring-offset | Focus ring offset of indicator |
| carousel.indicator.focus.ring.shadow | --p-carousel-indicator-focus-ring-shadow | Focus ring shadow of indicator |
| carousel.indicator.background        | --p-carousel-indicator-background        | Background of indicator        |
| carousel.indicator.hover.background  | --p-carousel-indicator-hover-background  | Hover background of indicator  |
| carousel.indicator.active.background | --p-carousel-indicator-active-background | Active background of indicator |
