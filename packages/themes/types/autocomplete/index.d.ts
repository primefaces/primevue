
/**
 *
 * AutoComplete Design Tokens
 *
 * [Live Demo](https://www.primevue.org/autocomplete/)
 *
 * @module themes/autocomplete
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface AutoCompleteDesignTokens extends ColorSchemeDesignToken<AutoCompleteDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken autocomplete.background
    */
    background?: string;
    /**
    * Disabled background of root
    *
    * @designToken autocomplete.disabled.background
    */
    disabledBackground?: string;
    /**
    * Filled background of root
    *
    * @designToken autocomplete.filled.background
    */
    filledBackground?: string;
    /**
    * Filled focus background of root
    *
    * @designToken autocomplete.filled.focus.background
    */
    filledFocusBackground?: string;
    /**
    * Border color of root
    *
    * @designToken autocomplete.border.color
    */
    borderColor?: string;
    /**
    * Hover border color of root
    *
    * @designToken autocomplete.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Focus border color of root
    *
    * @designToken autocomplete.focus.border.color
    */
    focusBorderColor?: string;
    /**
    * Invalid border color of root
    *
    * @designToken autocomplete.invalid.border.color
    */
    invalidBorderColor?: string;
    /**
    * Color of root
    *
    * @designToken autocomplete.color
    */
    color?: string;
    /**
    * Disabled color of root
    *
    * @designToken autocomplete.disabled.color
    */
    disabledColor?: string;
    /**
    * Placeholder color of root
    *
    * @designToken autocomplete.placeholder.color
    */
    placeholderColor?: string;
    /**
    * Shadow of root
    *
    * @designToken autocomplete.shadow
    */
    shadow?: string;
    /**
    * Padding x of root
    *
    * @designToken autocomplete.padding.x
    */
    paddingX?: string;
    /**
    * Padding y of root
    *
    * @designToken autocomplete.padding.y
    */
    paddingY?: string;
    /**
    * Border radius of root
    *
    * @designToken autocomplete.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of root
    */
    focusRing?: {
        
    /**
    * Focus ring width of root
    *
    * @designToken autocomplete.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of root
    *
    * @designToken autocomplete.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of root
    *
    * @designToken autocomplete.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of root
    *
    * @designToken autocomplete.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of root
    *
    * @designToken autocomplete.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Transition duration of root
    *
    * @designToken autocomplete.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the overlay section
    */
    overlay?: {
        
    /**
    * Background of overlay
    *
    * @designToken autocomplete.overlay.background
    */
    background?: string;
    /**
    * Border color of overlay
    *
    * @designToken autocomplete.overlay.border.color
    */
    borderColor?: string;
    /**
    * Border radius of overlay
    *
    * @designToken autocomplete.overlay.border.radius
    */
    borderRadius?: string;
    /**
    * Color of overlay
    *
    * @designToken autocomplete.overlay.color
    */
    color?: string;
    /**
    * Shadow of overlay
    *
    * @designToken autocomplete.overlay.shadow
    */
    shadow?: string;
    }
    /**
    * Used to pass tokens of the list section
    */
    list?: {
        
    /**
    * Padding of list
    *
    * @designToken autocomplete.list.padding
    */
    padding?: string;
    /**
    * Gap of list
    *
    * @designToken autocomplete.list.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the option section
    */
    option?: {
        
    /**
    * Focus background of option
    *
    * @designToken autocomplete.option.focus.background
    */
    focusBackground?: string;
    /**
    * Selected background of option
    *
    * @designToken autocomplete.option.selected.background
    */
    selectedBackground?: string;
    /**
    * Selected focus background of option
    *
    * @designToken autocomplete.option.selected.focus.background
    */
    selectedFocusBackground?: string;
    /**
    * Color of option
    *
    * @designToken autocomplete.option.color
    */
    color?: string;
    /**
    * Focus color of option
    *
    * @designToken autocomplete.option.focus.color
    */
    focusColor?: string;
    /**
    * Selected color of option
    *
    * @designToken autocomplete.option.selected.color
    */
    selectedColor?: string;
    /**
    * Selected focus color of option
    *
    * @designToken autocomplete.option.selected.focus.color
    */
    selectedFocusColor?: string;
    /**
    * Padding of option
    *
    * @designToken autocomplete.option.padding
    */
    padding?: string;
    /**
    * Border radius of option
    *
    * @designToken autocomplete.option.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the option group section
    */
    optionGroup?: {
        
    /**
    * Background of option group
    *
    * @designToken autocomplete.option.group.background
    */
    background?: string;
    /**
    * Color of option group
    *
    * @designToken autocomplete.option.group.color
    */
    color?: string;
    /**
    * Font weight of option group
    *
    * @designToken autocomplete.option.group.font.weight
    */
    fontWeight?: string;
    /**
    * Padding of option group
    *
    * @designToken autocomplete.option.group.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the dropdown section
    */
    dropdown?: {
        
    /**
    * Width of dropdown
    *
    * @designToken autocomplete.dropdown.width
    */
    width?: string;
    /**
    * Border color of dropdown
    *
    * @designToken autocomplete.dropdown.border.color
    */
    borderColor?: string;
    /**
    * Hover border color of dropdown
    *
    * @designToken autocomplete.dropdown.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Active border color of dropdown
    *
    * @designToken autocomplete.dropdown.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Border radius of dropdown
    *
    * @designToken autocomplete.dropdown.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of dropdown
    */
    focusRing?: {
        
    /**
    * Focus ring width of dropdown
    *
    * @designToken autocomplete.dropdown.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of dropdown
    *
    * @designToken autocomplete.dropdown.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of dropdown
    *
    * @designToken autocomplete.dropdown.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of dropdown
    *
    * @designToken autocomplete.dropdown.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of dropdown
    *
    * @designToken autocomplete.dropdown.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Background of dropdown
    *
    * @designToken autocomplete.dropdown.background
    */
    background?: string;
    /**
    * Hover background of dropdown
    *
    * @designToken autocomplete.dropdown.hover.background
    */
    hoverBackground?: string;
    /**
    * Active background of dropdown
    *
    * @designToken autocomplete.dropdown.active.background
    */
    activeBackground?: string;
    /**
    * Color of dropdown
    *
    * @designToken autocomplete.dropdown.color
    */
    color?: string;
    /**
    * Hover color of dropdown
    *
    * @designToken autocomplete.dropdown.hover.color
    */
    hoverColor?: string;
    /**
    * Active color of dropdown
    *
    * @designToken autocomplete.dropdown.active.color
    */
    activeColor?: string;
    }
    /**
    * Used to pass tokens of the chip section
    */
    chip?: {
        
    /**
    * Border radius of chip
    *
    * @designToken autocomplete.chip.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the empty message section
    */
    emptyMessage?: {
        
    /**
    * Padding of empty message
    *
    * @designToken autocomplete.empty.message.padding
    */
    padding?: string;
    }
}
