# RTL Support

Right-to-left direction support of PrimeVue.

## Configuration

The PrimeVue components natively support Right-to-Left (RTL) text direction through a modern CSS implementation utilizing FlexBox and classes like _-inline-start and _-block-end . Consequently, no JavaScript configuration is necessary; setting the document's text direction to RTL is sufficient to enable this feature. The RTL setting can either be set using the dir attribute or with the direction style property.

```vue
<html dir="rtl">
    html { direction: rtl }
</html>
```

## Limitations

RTL is widely supported by the UI suite except the Galleria and Carousel components. These components will be enhanced with a modern implementation in upcoming versions with built-in support for RTL.
