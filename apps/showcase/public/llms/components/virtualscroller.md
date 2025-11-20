# Vue Virtual Scroller Component

VirtualScroller is a performant approach to render large amounts of data efficiently.

## Import

```javascript
import VirtualScroller from 'primevue/virtualscroller';
```

## Accessibility

Screen Reader VirtualScroller has no specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element. Keyboard Support Component does not include any built-in interactive elements.

## Basic

VirtualScroller requires items as the data to display, itemSize for the dimensions of an item and item template are required on component. In addition, an initial array is required based on the total number of items to display. Size of the viewport is configured using scrollWidth , scrollHeight properties directly or with CSS width and height styles.

## Delay

The delay property adds a threshold to wait in milliseconds during scrolling for render optimization.

## Grid

Scrolling can be enabled vertically and horizontally when orientation is set as both . In this mode, itemSize should be an array where first value is the height of an item and second is the width.

## Horizontal

Setting orientation to horizontal enables scrolling horizontally. In this case, the itemSize should refer to the width of an item.

## Lazy

Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded on demand. To implement lazy loading, enable the lazy property and implement onLazyLoad callback to return data.

## Loading

Busy state is enabled by adding showLoader property which blocks the UI with a modal by default. Alternatively, loader template can be used to customize items e.g. with Skeleton .

## Virtualscroller

## Virtualscroller

