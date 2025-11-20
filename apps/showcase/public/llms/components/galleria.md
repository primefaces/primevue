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

## AutoPlayDoc

A slideshow implementation is defined by adding circular and autoPlay properties.

```vue
<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
    :circular="true" :autoPlay="true" :transitionInterval="2000">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
    </template>
</Galleria>
```

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

## Galleria

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Unique identifier of the element. |
| value | any[] | - | An array of objects to display. |
| activeIndex | number | 0 | Index of the first item. |
| fullScreen | boolean | false | Whether to display the component on fullscreen. |
| visible | boolean | false | Specifies the visibility of the mask on fullscreen mode. |
| numVisible | number | 3 | Number of items per page. |
| responsiveOptions | GalleriaResponsiveOptions[] | - | An array of options for responsive design. |
| showItemNavigators | boolean | false | Whether to display navigation buttons in item section. |
| showThumbnailNavigators | boolean | true | Whether to display navigation buttons in thumbnail container. |
| showItemNavigatorsOnHover | boolean | false | Whether to display navigation buttons on item hover. |
| changeItemOnIndicatorHover | boolean | false | When enabled, item is changed on indicator hover. |
| circular | boolean | false | Defines if scrolling would be infinite. |
| autoPlay | boolean | false | Items are displayed with a slideshow in autoPlay mode. |
| transitionInterval | number | 4000 | Time in milliseconds to scroll items. |
| showThumbnails | boolean | true | Whether to display thumbnail container. |
| thumbnailsPosition | HintedString<"left" \| "right" \| "top" \| "bottom"> | bottom | Position of thumbnails. |
| verticalThumbnailViewPortHeight | string | 300px | Height of the viewport in vertical thumbnail. |
| showIndicators | boolean | false | Whether to display indicator container. |
| showIndicatorsOnItem | boolean | false | When enabled, indicator container is displayed on item container. |
| indicatorsPosition | HintedString<"left" \| "right" \| "top" \| "bottom"> | bottom | Position of indicators. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| maskClass | string | - | Style class of the mask on fullscreen mode. |
| containerStyle | any | - | Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used. |
| containerClass | any | - | Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used. |
| containerProps | HTMLAttributes | - | Used to pass all properties of the HTMLDivElement to the container element on fullscreen mode. |
| prevButtonProps | ButtonHTMLAttributes | - | Used to pass all properties of the HTMLButtonElement to the previous navigation button. |
| nextButtonProps | ButtonHTMLAttributes | - | Used to pass all properties of the HTMLButtonElement to the next navigation button. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaRoledescription | string | - | Defines a string value that description for the role of the component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<GalleriaPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Galleria

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Unique identifier of the element. |
| value | any[] | - | An array of objects to display. |
| activeIndex | number | 0 | Index of the first item. |
| fullScreen | boolean | false | Whether to display the component on fullscreen. |
| visible | boolean | false | Specifies the visibility of the mask on fullscreen mode. |
| numVisible | number | 3 | Number of items per page. |
| responsiveOptions | GalleriaResponsiveOptions[] | - | An array of options for responsive design. |
| showItemNavigators | boolean | false | Whether to display navigation buttons in item section. |
| showThumbnailNavigators | boolean | true | Whether to display navigation buttons in thumbnail container. |
| showItemNavigatorsOnHover | boolean | false | Whether to display navigation buttons on item hover. |
| changeItemOnIndicatorHover | boolean | false | When enabled, item is changed on indicator hover. |
| circular | boolean | false | Defines if scrolling would be infinite. |
| autoPlay | boolean | false | Items are displayed with a slideshow in autoPlay mode. |
| transitionInterval | number | 4000 | Time in milliseconds to scroll items. |
| showThumbnails | boolean | true | Whether to display thumbnail container. |
| thumbnailsPosition | HintedString<"left" \| "right" \| "top" \| "bottom"> | bottom | Position of thumbnails. |
| verticalThumbnailViewPortHeight | string | 300px | Height of the viewport in vertical thumbnail. |
| showIndicators | boolean | false | Whether to display indicator container. |
| showIndicatorsOnItem | boolean | false | When enabled, indicator container is displayed on item container. |
| indicatorsPosition | HintedString<"left" \| "right" \| "top" \| "bottom"> | bottom | Position of indicators. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| maskClass | string | - | Style class of the mask on fullscreen mode. |
| containerStyle | any | - | Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used. |
| containerClass | any | - | Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used. |
| containerProps | HTMLAttributes | - | Used to pass all properties of the HTMLDivElement to the container element on fullscreen mode. |
| prevButtonProps | ButtonHTMLAttributes | - | Used to pass all properties of the HTMLButtonElement to the previous navigation button. |
| nextButtonProps | ButtonHTMLAttributes | - | Used to pass all properties of the HTMLButtonElement to the next navigation button. |
| ariaLabel | string | - | Defines a string value that labels an interactive element. |
| ariaRoledescription | string | - | Defines a string value that description for the role of the component. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<GalleriaPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | GalleriaPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| closeButton | GalleriaPassThroughOptionType | Used to pass attributes to the close button's DOM element. |
| closeIcon | GalleriaPassThroughOptionType | Used to pass attributes to the close icon's DOM element. |
| header | GalleriaPassThroughOptionType | Used to pass attributes to the header's DOM element. |
| content | GalleriaPassThroughOptionType | Used to pass attributes to the content's DOM element. |
| footer | GalleriaPassThroughOptionType | Used to pass attributes to the footer's DOM element. |
| itemsContainer | GalleriaPassThroughOptionType | Used to pass attributes to the item container's DOM element. |
| items | GalleriaPassThroughOptionType | Used to pass attributes to the items' DOM element. |
| prevButton | GalleriaPassThroughOptionType | Used to pass attributes to the previous item button's DOM element. |
| prevIcon | GalleriaPassThroughOptionType | Used to pass attributes to the previous item icon's DOM element. |
| item | GalleriaPassThroughOptionType | Used to pass attributes to the item's DOM element. |
| nextButton | GalleriaPassThroughOptionType | Used to pass attributes to the next item button's DOM element. |
| nextIcon | GalleriaPassThroughOptionType | Used to pass attributes to the next item icon's DOM element. |
| caption | GalleriaPassThroughOptionType | Used to pass attributes to the caption's DOM element. |
| indicatorList | GalleriaPassThroughOptionType | Used to pass attributes to the indicator list's DOM element. |
| indicator | GalleriaPassThroughOptionType | Used to pass attributes to the indicator's DOM element. |
| indicatorButton | GalleriaPassThroughOptionType | Used to pass attributes to the indicator button's DOM element. |
| thumbnails | GalleriaPassThroughOptionType | Used to pass attributes to the thumbnails' DOM element. |
| thumbnailContent | GalleriaPassThroughOptionType | Used to pass attributes to the thumbnail content's DOM element. |
| thumbnailPrevButton | GalleriaPassThroughOptionType | Used to pass attributes to the previous thumbnail button's DOM element. |
| thumbnailPrevIcon | GalleriaPassThroughOptionType | Used to pass attributes to the previous thumbnail icon's DOM element. |
| thumbnailsViewport | GalleriaPassThroughOptionType | Used to pass attributes to the thumbnails viewport's DOM element. |
| thumbnailItems | GalleriaPassThroughOptionType | Used to pass attributes to the thumbnail items' DOM element. |
| thumbnailItem | GalleriaPassThroughOptionType | Used to pass attributes to the thumbnail item's DOM element. |
| thumbnail | GalleriaPassThroughOptionType | Used to pass attributes to the thumbnail's DOM element. |
| thumbnailNextButton | GalleriaPassThroughOptionType | Used to pass attributes to the next thumbnail button's DOM element. |
| thumbnailNextIcon | GalleriaPassThroughOptionType | Used to pass attributes to the next thumbnail icon's DOM element. |
| mask | GalleriaPassThroughOptionType | Used to pass attributes to the mask's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |
| transition | GalleriaPassThroughTransitionType | Used to control Vue Transition API. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-galleria-mask | Class name of the mask element |
| p-galleria | Class name of the root element |
| p-galleria-close-button | Class name of the close button element |
| p-galleria-close-icon | Class name of the close icon element |
| p-galleria-header | Class name of the header element |
| p-galleria-content | Class name of the content element |
| p-galleria-footer | Class name of the footer element |
| p-galleria-items-container | Class name of the items container element |
| p-galleria-items | Class name of the items element |
| p-galleria-prev-button | Class name of the previous item button element |
| p-galleria-prev-icon | Class name of the previous item icon element |
| p-galleria-item | Class name of the item element |
| p-galleria-next-button | Class name of the next item button element |
| p-galleria-next-icon | Class name of the next item icon element |
| p-galleria-caption | Class name of the caption element |
| p-galleria-indicator-list | Class name of the indicator list element |
| p-galleria-indicator | Class name of the indicator element |
| p-galleria-indicator-button | Class name of the indicator button element |
| p-galleria-thumbnails | Class name of the thumbnails element |
| p-galleria-thumbnails-content | Class name of the thumbnail content element |
| p-galleria-thumbnail-prev-button | Class name of the previous thumbnail button element |
| p-galleria-thumbnail-prev-icon | Class name of the previous thumbnail icon element |
| p-galleria-thumbnails-viewport | Class name of the thumbnails viewport element |
| p-galleria-thumbnail-items | Class name of the thumbnail items element |
| p-galleria-thumbnail-item | Class name of the thumbnail item element |
| p-galleria-thumbnail | Class name of the thumbnail element |
| p-galleria-thumbnail-next-button | Class name of the next thumbnail button element |
| p-galleria-thumbnail-next-icon | Class name of the next thumbnail icon element |

