# Vue Speed Dial Component

When pressed, a floating action button can display multiple primary actions that can be performed on a page.

## Import

```javascript
import SpeedDial from 'primevue/speeddial';
```

## Accessibility

Screen Reader SpeedDial component renders a native button element that implicitly includes any passed prop. Text to describe the button can be defined with the aria-labelledby or aria-label props. Addititonally the button includes includes aria-haspopup , aria-expanded for states along with aria-controls to define the relation between the popup and the button. The popup overlay uses menu role on the list and each action item has a menuitem role with an aria-label as the menuitem label. The id of the menu refers to the aria-controls of the button. Menu Button Keyboard Support Key Function enter Toggles the visibility of the menu. space Toggles the visibility of the menu. down arrow Opens the menu and moves focus to the first item. up arrow Opens the menu and moves focus to the last item. right arrow Opens the menu and moves focus to the last item. left arrow Opens the menu and moves focus to the first item. escape Closes the menu. Menu Keyboard Support Key Function enter Actives the menuitem, closes the menu and sets focus on the menu button. space Actives the menuitem, closes the menu and sets focus on the menu button. escape Closes the menu and sets focus on the menu button. arrow keys Navigates between the menu items. home Moves focus to the first item. end Moves focus to the last item.

```vue
<SpeedDial aria-label="Options" />
```

## Circle

Items can be displayed around the button when type is set to circle . Additional radius property defines the radius of the circle.

```vue
<SpeedDial :model="items" :radius="80" type="circle" :style="{ position: 'absolute' }" :buttonProps="{ severity: 'warn', rounded: true }" />
```

## Linear

SpeedDial items are defined with the model property based on MenuModel API. Default orientation of the items is linear and direction property is used to define the position of the items related to the button.

```vue
<SpeedDial :model="items" direction="up" style="position: absolute; left: calc(50% - 2rem); bottom: 0" />
<SpeedDial :model="items" direction="down" style="position: absolute; left: calc(50% - 2rem); top: 0" />
<SpeedDial :model="items" direction="left" style="position: absolute; top: calc(50% - 2rem); right: 0" />
<SpeedDial :model="items" direction="right" style="position: absolute; top: calc(50% - 2rem); left: 0" />
```

## Mask

Adding mask property displays a modal layer behind the popup items.

```vue
<SpeedDial :model="items" direction="up" mask :style="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />
```

## QuarterCircleDoc

Setting type as quarter-circle displays the items at one of four corners of a button based on the direction .

```vue
<SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-left" :style="{ position: 'absolute', right: 0, bottom: 0 }" />
<SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-right" :style="{ position: 'absolute', left: 0, bottom: 0 }" />
<SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-left" :style="{ position: 'absolute', right: 0, top: 0 }" />
<SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-right" :style="{ position: 'absolute', left: 0, top: 0 }" />
```

## SemiCircleDoc

When type is defined as semi-circle , items are displayed in a half-circle around the button.

```vue
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="up" style="position: absolute; left: calc(50% - 2rem); bottom: 0" />
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="down" style="position: absolute; left: calc(50% - 2rem); top: 0" />
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="left" style="position: absolute; top: calc(50% - 2rem); right: 0" />
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="right" style="position: absolute; top: calc(50% - 2rem); left: 0" />
```

## Template

SpeedDial offers item customization with the item template that receives the menuitem instance from the model as a parameter. The button has its own button template, additional slot named icon is provided to embed icon content for default button.

## Tooltip

Items display a tooltip on hover when a standalone Tooltip is present with a target that matches the items.

```vue
<SpeedDial :model="items" direction="up" :style="{ position: 'absolute', right: 0, bottom: 0 }" :buttonProps="{ severity: 'help', rounded: true }" :tooltipOptions="{ position: 'left' }" />
<SpeedDial :model="items" direction="up" :style="{ position: 'absolute', left: 0, bottom: 0 }" :buttonProps="{ severity: 'danger', rounded: true }" :tooltipOptions="{ position: 'right' }" />
```

## Speeddial

## Speeddial

