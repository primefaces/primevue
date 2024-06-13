
/**
 *
 * Listbox Design Tokens
 *
 * [Live Demo](https://www.primevue.org/listbox/)
 *
 * @module themes/listbox
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface ListboxDesignTokens extends ColorSchemeDesignToken<ListboxDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Background of root
    *
    * @designToken listbox.background
    */
    background?: string;
    /**
    * Disabled background of root
    *
    * @designToken listbox.disabled.background
    */
    disabledBackground?: string;
    /**
    * Border color of root
    *
    * @designToken listbox.border.color
    */
    borderColor?: string;
    /**
    * Hover border color of root
    *
    * @designToken listbox.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Focus border color of root
    *
    * @designToken listbox.focus.border.color
    */
    focusBorderColor?: string;
    /**
    * Invalid border color of root
    *
    * @designToken listbox.invalid.border.color
    */
    invalidBorderColor?: string;
    /**
    * Color of root
    *
    * @designToken listbox.color
    */
    color?: string;
    /**
    * Disabled color of root
    *
    * @designToken listbox.disabled.color
    */
    disabledColor?: string;
    /**
    * Shadow of root
    *
    * @designToken listbox.shadow
    */
    shadow?: string;
    /**
    * Border radius of root
    *
    * @designToken listbox.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of root
    */
    focusRing?: {
        
    /**
    * Focus ring width of root
    *
    * @designToken listbox.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of root
    *
    * @designToken listbox.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of root
    *
    * @designToken listbox.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of root
    *
    * @designToken listbox.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of root
    *
    * @designToken listbox.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Transition duration of root
    *
    * @designToken listbox.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the list section
    */
    list?: {
        
    /**
    * Padding of list
    *
    * @designToken listbox.list.padding
    */
    padding?: string;
    /**
    * Gap of list
    *
    * @designToken listbox.list.gap
    */
    gap?: string;
    /**
    * Header of list
    */
    header?: {
        
    /**
    * Header padding of list
    *
    * @designToken listbox.list.header.padding
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
    * @designToken listbox.option.focus.background
    */
    focusBackground?: string;
    /**
    * Selected background of option
    *
    * @designToken listbox.option.selected.background
    */
    selectedBackground?: string;
    /**
    * Selected focus background of option
    *
    * @designToken listbox.option.selected.focus.background
    */
    selectedFocusBackground?: string;
    /**
    * Color of option
    *
    * @designToken listbox.option.color
    */
    color?: string;
    /**
    * Focus color of option
    *
    * @designToken listbox.option.focus.color
    */
    focusColor?: string;
    /**
    * Selected color of option
    *
    * @designToken listbox.option.selected.color
    */
    selectedColor?: string;
    /**
    * Selected focus color of option
    *
    * @designToken listbox.option.selected.focus.color
    */
    selectedFocusColor?: string;
    /**
    * Padding of option
    *
    * @designToken listbox.option.padding
    */
    padding?: string;
    /**
    * Border radius of option
    *
    * @designToken listbox.option.border.radius
    */
    borderRadius?: string;
    /**
    * Striped background of option
    *
    * @designToken listbox.option.striped.background
    */
    stripedBackground?: string;
    }
    /**
    * Used to pass tokens of the option group section
    */
    optionGroup?: {
        
    /**
    * Background of option group
    *
    * @designToken listbox.option.group.background
    */
    background?: string;
    /**
    * Color of option group
    *
    * @designToken listbox.option.group.color
    */
    color?: string;
    /**
    * Font weight of option group
    *
    * @designToken listbox.option.group.font.weight
    */
    fontWeight?: string;
    /**
    * Padding of option group
    *
    * @designToken listbox.option.group.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the checkmark section
    */
    checkmark?: {
        
    /**
    * Color of checkmark
    *
    * @designToken listbox.checkmark.color
    */
    color?: string;
    /**
    * Gutter start of checkmark
    *
    * @designToken listbox.checkmark.gutter.start
    */
    gutterStart?: string;
    /**
    * Gutter end of checkmark
    *
    * @designToken listbox.checkmark.gutter.end
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
    * @designToken listbox.empty.message.padding
    */
    padding?: string;
    }
}
