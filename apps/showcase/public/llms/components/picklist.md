# Vue PickList Component

PickList is used to reorder items between different lists.

## Import

```javascript
import PickList from 'primevue/picklist';
```

## Accessibility

Screen Reader Value to describe the source listbox and target listbox can be provided with sourceListProps and targetListProps by passing aria-labelledby or aria-label props. The list elements has a listbox role with the aria-multiselectable attribute. Each list item has an option role with aria-selected as their attributes. Controls buttons are button elements with an aria-label that refers to the aria.moveTop , aria.moveUp , aria.moveDown , aria.moveBottom , aria.moveToTarget , aria.moveAllToTarget , aria.moveToSource and aria.moveAllToSource properties of the locale API by default, alternatively you may use moveTopButtonProps , moveUpButtonProps , moveDownButtonProps , moveToButtonProps , moveAllToButtonProps , moveFromButtonProps , moveFromButtonProps moveAllFromButtonProps moveToTargetProps , moveAllToTargetProps , moveToSourceProps and moveAllToSourceProps to customize the buttons like overriding the default aria-label attributes. ListBox Keyboard Support Key Function tab Moves focus to the first selected option, if there is none then first option receives the focus. up arrow Moves focus to the previous option. down arrow Moves focus to the next option. enter Toggles the selected state of the focused option. space Toggles the selected state of the focused option. home Moves focus to the first option. end Moves focus to the last option. shift + down arrow Moves focus to the next option and toggles the selection state. shift + up arrow Moves focus to the previous option and toggles the selection state. shift + space Selects the items between the most recently selected option and the focused option. control + shift + home Selects the focused options and all the options up to the first one. control + shift + end Selects the focused options and all the options down to the first one. control + a Selects all options. Buttons Keyboard Support Key Function enter Executes button action. space Executes button action.

```vue
<span id="lb">Options</span>
<PickList aria-labelledby="lb" />

<PickList aria-label="City" />
```

## Basic

PickList requires a multidimensional array as its value bound with the v-model directive and a template for its content that gets the option instance and the index via slotProps.

## Template

For custom content support define an option template that gets the item instance as a parameter. In addition sourceheader and targetheader slots are provided for further customization.

## Picklist

## Picklist

