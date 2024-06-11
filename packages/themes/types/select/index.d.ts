
/**
 *
 * Select Design Tokens
 *
 * [Live Demo](https://www.primevue.org/select/)
 *
 * @module themes/select
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface SelectDesignTokens extends ColorSchemeDesignToken<SelectDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken select.background
    */
    background?: string;
    /**
    * Disabled background of root
    *
    * @designToken select.disabled.background
    */
    disabledBackground?: string;
    /**
    * Filled background of root
    *
    * @designToken select.filled.background
    */
    filledBackground?: string;
    /**
    * Filled focus background of root
    *
    * @designToken select.filled.focus.background
    */
    filledFocusBackground?: string;
    /**
    * Border color of root
    *
    * @designToken select.border.color
    */
    borderColor?: string;
    /**
    * Hover border color of root
    *
    * @designToken select.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Focus border color of root
    *
    * @designToken select.focus.border.color
    */
    focusBorderColor?: string;
    /**
    * Invalid border color of root
    *
    * @designToken select.invalid.border.color
    */
    invalidBorderColor?: string;
    /**
    * Color of root
    *
    * @designToken select.color
    */
    color?: string;
    /**
    * Disabled color of root
    *
    * @designToken select.disabled.color
    */
    disabledColor?: string;
    /**
    * Placeholder color of root
    *
    * @designToken select.placeholder.color
    */
    placeholderColor?: string;
    /**
    * Shadow of root
    *
    * @designToken select.shadow
    */
    shadow?: string;
    /**
    * Padding x of root
    *
    * @designToken select.padding.x
    */
    paddingX?: string;
    /**
    * Padding y of root
    *
    * @designToken select.padding.y
    */
    paddingY?: string;
    /**
    * Border radius of root
    *
    * @designToken select.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of root
    */
    focusRing?: {
        
    /**
    * Focus ring width of root
    *
    * @designToken select.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of root
    *
    * @designToken select.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of root
    *
    * @designToken select.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of root
    *
    * @designToken select.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of root
    *
    * @designToken select.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Transition duration of root
    *
    * @designToken select.transition.duration
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
    * @designToken select.dropdown.width
    */
    width?: string;
    /**
    * Color of dropdown
    *
    * @designToken select.dropdown.color
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
    * @designToken select.overlay.background
    */
    background?: string;
    /**
    * Border color of overlay
    *
    * @designToken select.overlay.border.color
    */
    borderColor?: string;
    /**
    * Border radius of overlay
    *
    * @designToken select.overlay.border.radius
    */
    borderRadius?: string;
    /**
    * Color of overlay
    *
    * @designToken select.overlay.color
    */
    color?: string;
    /**
    * Shadow of overlay
    *
    * @designToken select.overlay.shadow
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
    * @designToken select.list.padding
    */
    padding?: string;
    /**
    * Gap of list
    *
    * @designToken select.list.gap
    */
    gap?: string;
    /**
    * Header of list
    */
    header?: {
        
    /**
    * Header padding of list
    *
    * @designToken select.list.header.padding
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
    * @designToken select.option.focus.background
    */
    focusBackground?: string;
    /**
    * Selected background of option
    *
    * @designToken select.option.selected.background
    */
    selectedBackground?: string;
    /**
    * Selected focus background of option
    *
    * @designToken select.option.selected.focus.background
    */
    selectedFocusBackground?: string;
    /**
    * Color of option
    *
    * @designToken select.option.color
    */
    color?: string;
    /**
    * Focus color of option
    *
    * @designToken select.option.focus.color
    */
    focusColor?: string;
    /**
    * Selected color of option
    *
    * @designToken select.option.selected.color
    */
    selectedColor?: string;
    /**
    * Selected focus color of option
    *
    * @designToken select.option.selected.focus.color
    */
    selectedFocusColor?: string;
    /**
    * Padding of option
    *
    * @designToken select.option.padding
    */
    padding?: string;
    /**
    * Border radius of option
    *
    * @designToken select.option.border.radius
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
    * @designToken select.option.group.background
    */
    background?: string;
    /**
    * Color of option group
    *
    * @designToken select.option.group.color
    */
    color?: string;
    /**
    * Font weight of option group
    *
    * @designToken select.option.group.font.weight
    */
    fontWeight?: string;
    /**
    * Padding of option group
    *
    * @designToken select.option.group.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the clear icon section
    */
    clearIcon?: {
        
    /**
    * Color of clear icon
    *
    * @designToken select.clear.icon.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the checkmark section
    */
    checkmark?: {
        
    /**
    * Color of checkmark
    *
    * @designToken select.checkmark.color
    */
    color?: string;
    /**
    * Gutter start of checkmark
    *
    * @designToken select.checkmark.gutter.start
    */
    gutterStart?: string;
    /**
    * Gutter end of checkmark
    *
    * @designToken select.checkmark.gutter.end
    */
    gutterEnd?: string;
    }
    /**
    * Used to pass tokens of the empty message section
    */
    emptyMessage?: {
        
    /**
    * Padding of empty message
    *
    * @designToken select.empty.message.padding
    */
    padding?: string;
    }
}
