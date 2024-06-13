
/**
 *
 * MultiSelect Design Tokens
 *
 * [Live Demo](https://www.primevue.org/multiselect/)
 *
 * @module themes/multiselect
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface MultiSelectDesignTokens extends ColorSchemeDesignToken<MultiSelectDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken multiselect.background
    */
    background?: string;
    /**
    * Disabled background of root
    *
    * @designToken multiselect.disabled.background
    */
    disabledBackground?: string;
    /**
    * Filled background of root
    *
    * @designToken multiselect.filled.background
    */
    filledBackground?: string;
    /**
    * Filled focus background of root
    *
    * @designToken multiselect.filled.focus.background
    */
    filledFocusBackground?: string;
    /**
    * Border color of root
    *
    * @designToken multiselect.border.color
    */
    borderColor?: string;
    /**
    * Hover border color of root
    *
    * @designToken multiselect.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Focus border color of root
    *
    * @designToken multiselect.focus.border.color
    */
    focusBorderColor?: string;
    /**
    * Invalid border color of root
    *
    * @designToken multiselect.invalid.border.color
    */
    invalidBorderColor?: string;
    /**
    * Color of root
    *
    * @designToken multiselect.color
    */
    color?: string;
    /**
    * Disabled color of root
    *
    * @designToken multiselect.disabled.color
    */
    disabledColor?: string;
    /**
    * Placeholder color of root
    *
    * @designToken multiselect.placeholder.color
    */
    placeholderColor?: string;
    /**
    * Shadow of root
    *
    * @designToken multiselect.shadow
    */
    shadow?: string;
    /**
    * Padding x of root
    *
    * @designToken multiselect.padding.x
    */
    paddingX?: string;
    /**
    * Padding y of root
    *
    * @designToken multiselect.padding.y
    */
    paddingY?: string;
    /**
    * Border radius of root
    *
    * @designToken multiselect.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of root
    */
    focusRing?: {
        
    /**
    * Focus ring width of root
    *
    * @designToken multiselect.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of root
    *
    * @designToken multiselect.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of root
    *
    * @designToken multiselect.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of root
    *
    * @designToken multiselect.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of root
    *
    * @designToken multiselect.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Transition duration of root
    *
    * @designToken multiselect.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the dropdown section
    */
    dropdown?: {
        
    /**
    * Width of dropdown
    *
    * @designToken multiselect.dropdown.width
    */
    width?: string;
    /**
    * Color of dropdown
    *
    * @designToken multiselect.dropdown.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the overlay section
    */
    overlay?: {
        
    /**
    * Background of overlay
    *
    * @designToken multiselect.overlay.background
    */
    background?: string;
    /**
    * Border color of overlay
    *
    * @designToken multiselect.overlay.border.color
    */
    borderColor?: string;
    /**
    * Border radius of overlay
    *
    * @designToken multiselect.overlay.border.radius
    */
    borderRadius?: string;
    /**
    * Color of overlay
    *
    * @designToken multiselect.overlay.color
    */
    color?: string;
    /**
    * Shadow of overlay
    *
    * @designToken multiselect.overlay.shadow
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
    * @designToken multiselect.list.padding
    */
    padding?: string;
    /**
    * Gap of list
    *
    * @designToken multiselect.list.gap
    */
    gap?: string;
    /**
    * Header of list
    */
    header?: {
        
    /**
    * Header padding of list
    *
    * @designToken multiselect.list.header.padding
    */
    padding?: string;
    };
    }
    /**
    * Used to pass tokens of the option section
    */
    option?: {
        
    /**
    * Focus background of option
    *
    * @designToken multiselect.option.focus.background
    */
    focusBackground?: string;
    /**
    * Selected background of option
    *
    * @designToken multiselect.option.selected.background
    */
    selectedBackground?: string;
    /**
    * Selected focus background of option
    *
    * @designToken multiselect.option.selected.focus.background
    */
    selectedFocusBackground?: string;
    /**
    * Color of option
    *
    * @designToken multiselect.option.color
    */
    color?: string;
    /**
    * Focus color of option
    *
    * @designToken multiselect.option.focus.color
    */
    focusColor?: string;
    /**
    * Selected color of option
    *
    * @designToken multiselect.option.selected.color
    */
    selectedColor?: string;
    /**
    * Selected focus color of option
    *
    * @designToken multiselect.option.selected.focus.color
    */
    selectedFocusColor?: string;
    /**
    * Padding of option
    *
    * @designToken multiselect.option.padding
    */
    padding?: string;
    /**
    * Border radius of option
    *
    * @designToken multiselect.option.border.radius
    */
    borderRadius?: string;
    /**
    * Gap of option
    *
    * @designToken multiselect.option.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the option group section
    */
    optionGroup?: {
        
    /**
    * Background of option group
    *
    * @designToken multiselect.option.group.background
    */
    background?: string;
    /**
    * Color of option group
    *
    * @designToken multiselect.option.group.color
    */
    color?: string;
    /**
    * Font weight of option group
    *
    * @designToken multiselect.option.group.font.weight
    */
    fontWeight?: string;
    /**
    * Padding of option group
    *
    * @designToken multiselect.option.group.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the chip section
    */
    chip?: {
        
    /**
    * Border radius of chip
    *
    * @designToken multiselect.chip.border.radius
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
    * @designToken multiselect.empty.message.padding
    */
    padding?: string;
    }
}
