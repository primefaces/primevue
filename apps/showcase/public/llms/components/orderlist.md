# Vue OrderList Component

OrderList is used to sort a collection.

## Import

```javascript
import OrderList from 'primevue/orderlist';
```

## Accessibility

Screen Reader Value to describe the listbox can be provided with listProps by passing aria-labelledby or aria-label props. The list element has a listbox role with the aria-multiselectable attribute. Each list item has an option role with aria-selected and aria-disabled as their attributes. Controls buttons are button elements with an aria-label that refers to the aria.moveTop , aria.moveUp , aria.moveDown and aria.moveBottom properties of the locale API by default, alternatively you may use moveTopButtonProps , moveUpButtonProps , moveDownButtonProps and moveBottomButtonProps to customize the buttons like overriding the default aria-label attributes. ListBox Keyboard Support Key Function tab Moves focus to the first selected option, if there is none then first option receives the focus. up arrow Moves focus to the previous option. down arrow Moves focus to the next option. enter Toggles the selected state of the focused option. space Toggles the selected state of the focused option. home Moves focus to the first option. end Moves focus to the last option. shift + down arrow Moves focus to the next option and toggles the selection state. shift + up arrow Moves focus to the previous option and toggles the selection state. shift + space Selects the items between the most recently selected option and the focused option. control + shift + home Selects the focused options and all the options up to the first one. control + shift + end Selects the focused options and all the options down to the first one. control + a Selects all options. Buttons Keyboard Support Key Function enter Executes button action. space Executes button action.

```vue
<span id="lb">Options</span>
<OrderList aria-labelledby="lb" />

<OrderList aria-label="City" />
```

## Basic

OrderList requires an array as its value bound with the v-model directive and option template for its content.

## Template

For custom content support define an option template that gets the item instance as a parameter. In addition header slot is provided for further customization.

## Orderlist

## Orderlist

