# Animations

Various PrimeVue Components utilize native CSS animations to provide an enhanced user experience. The default animations are based on the best practices recommended by the usability experts. In case you need to customize the default animations, this documentation covers the entire set of built-in animations.

## Anchored Overlays

Anchored overlays are the components that have a floating ui positioned relatively to another element such as Select, Popover. The enter and leave animations are defined with the .p-anchored-overlay-enter-active and .p-anchored-overlay-leave-active classes.

```vue
.p-anchored-overlay-enter-active { animation: demo-overlay-in 300ms ease-out; } .p-anchored-overlay-leave-active { animation: demo-overlay-out 250ms ease-in; } @keyframes demo-overlay-in { from { opacity: 0; transform: translateY(10%); } } @keyframes
demo-overlay-out { to { opacity: 0; transform: translateY(10%); } }
```

## Collapsibles

Collapsible components have a content that is toggleable including Accordion, Panel, Fieldset, Stepper and PanelMenu. The enter and leave animations are defined with the .p-collapsible-enter-active and .p-collapsible-leave-active classes.

```vue
.p-collapsible-enter-active { animation: demo-collapsible-expand 500ms cubic-bezier(0.65, 0, 0.35, 1); } .p-collapsible-leave-active { animation: demo-collapsible-collapse 500ms cubic-bezier(0.65, 0, 0.35, 1); } @keyframes demo-collapsible-expand {
from { opacity: 0; grid-template-rows: 0fr; transform: scale(0.93); } to { opacity: 1; grid-template-rows: 1fr; } } @keyframes demo-collapsible-collapse { from { opacity: 1; grid-template-rows: 1fr; } to { opacity: 0; grid-template-rows: 0fr;
transform: scale(0.93); } }
```

## Dialog

Overlays such as Dialog and Drawer are positioned relative to the viewport and have their own animations.

```vue
.p-dialog-enter-active { animation: demo-dialog-in 500ms ease-out; } .p-dialog-leave-active { animation: demo-dialog-out 500ms ease-in; } @keyframes demo-dialog-in { from { opacity: 0; transform: translateY(-10%) scale(1.1); filter: blur(10px); } }
@keyframes demo-dialog-out { to { opacity: 0; transform: translateY(200%) rotate(-90deg); } }
```

## Disable

Individual animations can be reduced and even disabled completely using the animation duration.

```vue
@media (prefers-reduced-motion: reduce) { .p-anchored-overlay-enter-active, .p-anchored-overlay-leave-active { animation-duration: 0s !important; } }
```

## Introduction

Various PrimeVue Components utilize native CSS animations to provide an enhanced user experience. The default animations are based on the best practices recommended by the usability experts. In case you need to customize the default animations, this documentation covers the entire set of built-in animations. Animations are defined using a combination of style classes and keyframes. The ⁠ .{classname}-enter-active and ⁠ .{classname}-leave-active classes specify the animation name, duration, and easing function. You can customize animations globally by overriding the default animation classes, affecting all components. Alternatively, you can apply scoped classes to individual components to modify their animations independently. For demo purposes, this second approach is used throughout the next sections.

## Reference

List of class names of the CSS animations used by the components. Component Enter Class Leave Class Accordion .p-collapsible-enter-active .p-collapsible-leave-active AutoComplete .p-anchored-overlay-enter-active .p-anchored-overlay-leave-active CascadeSelect .p-anchored-overlay-enter-active .p-anchored-overlay-leave-active ColorPicker .p-anchored-overlay-enter-active .p-anchored-overlay-leave-active ConfirmPopup .p-anchored-overlay-enter-active .p-anchored-overlay-leave-active ContextMenu .p-anchored-overlay-enter-active .p-anchored-overlay-leave-active DatePicker .p-anchored-overlay-enter-active .p-anchored-overlay-leave-active Dialog .p-dialog-enter-active .p-dialog-leave-active Drawer .p-drawer-enter-active .p-drawer-leave-active Fieldset .p-collapsible-enter-active .p-collapsible-leave-active Galleria .p-galleria-enter-active .p-galleria-leave-active Image .p-image-original-enter-active .p-image-original-leave-active Menu .p-anchored-overlay-enter-active .p-anchored-overlay-leave-active Message .p-message-enter-active .p-message-leave-active Modal Masks .p-overlay-mask-enter-active .p-overlay-mask-leave-active MultiSelect .p-anchored-overlay-enter-active .p-anchored-overlay-leave-active Panel .p-collapsible-enter-active .p-collapsible-leave-active PanelMenu .p-collapsible-enter-active .p-collapsible-leave-active Password .p-anchored-overlay-enter-active .p-anchored-overlay-leave-active Select .p-anchored-overlay-enter-active .p-anchored-overlay-leave-active Stepper .p-collapsible-enter-active .p-collapsible-leave-active TieredMenu .p-anchored-overlay-enter-active .p-anchored-overlay-leave-active Toast .p-toast-message-enter-active .p-toast-message-leave-active TreeSelect .p-anchored-overlay-enter-active .p-anchored-overlay-leave-active
