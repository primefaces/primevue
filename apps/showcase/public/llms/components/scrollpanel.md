# Vue ScrollPanel Component

ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.

## Import

```javascript
import ScrollPanel from 'primevue/scrollpanel';
```

## Accessibility

Screen Reader Scrollbars of the ScrollPanel has a scrollbar role along with the aria-controls attribute that refers to the id of the scrollable content container and the aria-orientation to indicate the orientation of scrolling. Header Keyboard Support Key Function tab Moves focus through the bar. down arrow Scrolls content down when vertical scrolling is available. up arrow Scrolls content up when vertical scrolling is available. left Scrolls content left when horizontal scrolling is available. right Scrolls content right when horizontal scrolling is available.

## Basic

ScrollPanel is defined using dimensions for the scrollable viewport.

```vue
<ScrollPanel style="width: 100%; height: 200px">
    <p>
        Lorem ipsum dolor ...
    </p>
</ScrollPanel>
```

## Custom

Scrollbar visuals can be styled for a unified look across different platforms.

## Scrollpanel

## Scrollpanel

