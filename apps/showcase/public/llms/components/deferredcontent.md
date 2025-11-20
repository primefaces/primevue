# Vue Deferred Content Component

DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.

## Import

```javascript
import DeferredContent from 'primevue/deferredcontent';
```

## Accessibility

Screen Reader DeferredContent can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so you have full control over the roles like landmark and attributes like aria-live . Keyboard Support Component does not include any interactive elements.

```vue
<DeferredContent role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
    Content
</DeferredContent>
```

## Basic

DeferredContent is used by wrapping the target.

```vue
<DeferredContent @load="onImageLoad">
    <img src="/images/nature/nature4.jpg" alt="Nature" class="rounded-xl w-full md:w-96 block sm:mx-auto" />
</DeferredContent>
```

## DataTable

A practical example that triggers a fetch when the table becomes visible in viewport.

```vue
<DeferredContent @load="onDataLoad" role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
    <DataTable :value="products">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</DeferredContent>
```

## Deferredcontent

## Deferredcontent

