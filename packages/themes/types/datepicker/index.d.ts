
/**
 *
 * DatePicker Design Tokens
 *
 * [Live Demo](https://www.primevue.org/datepicker/)
 *
 * @module themes/datepicker
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface DatePickerDesignTokens extends ColorSchemeDesignToken<DatePickerDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken datepicker.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the panel section
    */
    panel?: {
        
    /**
    * Background of panel
    *
    * @designToken datepicker.panel.background
    */
    background?: string;
    /**
    * Border color of panel
    *
    * @designToken datepicker.panel.border.color
    */
    borderColor?: string;
    /**
    * Color of panel
    *
    * @designToken datepicker.panel.color
    */
    color?: string;
    /**
    * Border radius of panel
    *
    * @designToken datepicker.panel.border.radius
    */
    borderRadius?: string;
    /**
    * Shadow of panel
    *
    * @designToken datepicker.panel.shadow
    */
    shadow?: string;
    /**
    * Padding of panel
    *
    * @designToken datepicker.panel.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the header section
    */
    header?: {
        
    /**
    * Background of header
    *
    * @designToken datepicker.header.background
    */
    background?: string;
    /**
    * Border color of header
    *
    * @designToken datepicker.header.border.color
    */
    borderColor?: string;
    /**
    * Color of header
    *
    * @designToken datepicker.header.color
    */
    color?: string;
    /**
    * Padding of header
    *
    * @designToken datepicker.header.padding
    */
    padding?: string;
    /**
    * Font weight of header
    *
    * @designToken datepicker.header.font.weight
    */
    fontWeight?: string;
    /**
    * Gap of header
    *
    * @designToken datepicker.header.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the title section
    */
    title?: {
        
    /**
    * Gap of title
    *
    * @designToken datepicker.title.gap
    */
    gap?: string;
    /**
    * Font weight of title
    *
    * @designToken datepicker.title.font.weight
    */
    fontWeight?: string;
    }
    /**
    * Used to pass tokens of the dropdown section
    */
    dropdown?: {
        
    /**
    * Width of dropdown
    *
    * @designToken datepicker.dropdown.width
    */
    width?: string;
    /**
    * Border color of dropdown
    *
    * @designToken datepicker.dropdown.border.color
    */
    borderColor?: string;
    /**
    * Hover border color of dropdown
    *
    * @designToken datepicker.dropdown.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Active border color of dropdown
    *
    * @designToken datepicker.dropdown.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Border radius of dropdown
    *
    * @designToken datepicker.dropdown.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of dropdown
    */
    focusRing?: {
        
    /**
    * Focus ring width of dropdown
    *
    * @designToken datepicker.dropdown.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of dropdown
    *
    * @designToken datepicker.dropdown.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of dropdown
    *
    * @designToken datepicker.dropdown.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of dropdown
    *
    * @designToken datepicker.dropdown.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of dropdown
    *
    * @designToken datepicker.dropdown.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Background of dropdown
    *
    * @designToken datepicker.dropdown.background
    */
    background?: string;
    /**
    * Hover background of dropdown
    *
    * @designToken datepicker.dropdown.hover.background
    */
    hoverBackground?: string;
    /**
    * Active background of dropdown
    *
    * @designToken datepicker.dropdown.active.background
    */
    activeBackground?: string;
    /**
    * Color of dropdown
    *
    * @designToken datepicker.dropdown.color
    */
    color?: string;
    /**
    * Hover color of dropdown
    *
    * @designToken datepicker.dropdown.hover.color
    */
    hoverColor?: string;
    /**
    * Active color of dropdown
    *
    * @designToken datepicker.dropdown.active.color
    */
    activeColor?: string;
    }
    /**
    * Used to pass tokens of the input icon section
    */
    inputIcon?: {
        
    /**
    * Color of input icon
    *
    * @designToken datepicker.input.icon.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the select month section
    */
    selectMonth?: {
        
    /**
    * Hover background of select month
    *
    * @designToken datepicker.select.month.hover.background
    */
    hoverBackground?: string;
    /**
    * Color of select month
    *
    * @designToken datepicker.select.month.color
    */
    color?: string;
    /**
    * Hover color of select month
    *
    * @designToken datepicker.select.month.hover.color
    */
    hoverColor?: string;
    /**
    * Padding of select month
    *
    * @designToken datepicker.select.month.padding
    */
    padding?: string;
    /**
    * Border radius of select month
    *
    * @designToken datepicker.select.month.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the select year section
    */
    selectYear?: {
        
    /**
    * Hover background of select year
    *
    * @designToken datepicker.select.year.hover.background
    */
    hoverBackground?: string;
    /**
    * Color of select year
    *
    * @designToken datepicker.select.year.color
    */
    color?: string;
    /**
    * Hover color of select year
    *
    * @designToken datepicker.select.year.hover.color
    */
    hoverColor?: string;
    /**
    * Padding of select year
    *
    * @designToken datepicker.select.year.padding
    */
    padding?: string;
    /**
    * Border radius of select year
    *
    * @designToken datepicker.select.year.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the group section
    */
    group?: {
        
    /**
    * Border color of group
    *
    * @designToken datepicker.group.border.color
    */
    borderColor?: string;
    /**
    * Gap of group
    *
    * @designToken datepicker.group.gap
    */
    gap?: string;
    }
    /**
    * Used to pass tokens of the day view section
    */
    dayView?: {
        
    /**
    * Margin of day view
    *
    * @designToken datepicker.day.view.margin
    */
    margin?: string;
    }
    /**
    * Used to pass tokens of the week day section
    */
    weekDay?: {
        
    /**
    * Padding of week day
    *
    * @designToken datepicker.week.day.padding
    */
    padding?: string;
    /**
    * Font weight of week day
    *
    * @designToken datepicker.week.day.font.weight
    */
    fontWeight?: string;
    /**
    * Color of week day
    *
    * @designToken datepicker.week.day.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the date section
    */
    date?: {
        
    /**
    * Hover background of date
    *
    * @designToken datepicker.date.hover.background
    */
    hoverBackground?: string;
    /**
    * Selected background of date
    *
    * @designToken datepicker.date.selected.background
    */
    selectedBackground?: string;
    /**
    * Range selected background of date
    *
    * @designToken datepicker.date.range.selected.background
    */
    rangeSelectedBackground?: string;
    /**
    * Color of date
    *
    * @designToken datepicker.date.color
    */
    color?: string;
    /**
    * Hover color of date
    *
    * @designToken datepicker.date.hover.color
    */
    hoverColor?: string;
    /**
    * Selected color of date
    *
    * @designToken datepicker.date.selected.color
    */
    selectedColor?: string;
    /**
    * Range selected color of date
    *
    * @designToken datepicker.date.range.selected.color
    */
    rangeSelectedColor?: string;
    /**
    * Width of date
    *
    * @designToken datepicker.date.width
    */
    width?: string;
    /**
    * Height of date
    *
    * @designToken datepicker.date.height
    */
    height?: string;
    /**
    * Border radius of date
    *
    * @designToken datepicker.date.border.radius
    */
    borderRadius?: string;
    /**
    * Padding of date
    *
    * @designToken datepicker.date.padding
    */
    padding?: string;
    /**
    * Focus ring of date
    */
    focusRing?: {
        
    /**
    * Focus ring width of date
    *
    * @designToken datepicker.date.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of date
    *
    * @designToken datepicker.date.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of date
    *
    * @designToken datepicker.date.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of date
    *
    * @designToken datepicker.date.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of date
    *
    * @designToken datepicker.date.focus.ring.shadow
    */
    shadow?: string;
    };
    }
    /**
    * Used to pass tokens of the month view section
    */
    monthView?: {
        
    /**
    * Margin of month view
    *
    * @designToken datepicker.month.view.margin
    */
    margin?: string;
    }
    /**
    * Used to pass tokens of the month section
    */
    month?: {
        
    /**
    * Border radius of month
    *
    * @designToken datepicker.month.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the year view section
    */
    yearView?: {
        
    /**
    * Margin of year view
    *
    * @designToken datepicker.year.view.margin
    */
    margin?: string;
    }
    /**
    * Used to pass tokens of the year section
    */
    year?: {
        
    /**
    * Border radius of year
    *
    * @designToken datepicker.year.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the buttonbar section
    */
    buttonbar?: {
        
    /**
    * Padding of buttonbar
    *
    * @designToken datepicker.buttonbar.padding
    */
    padding?: string;
    /**
    * Border color of buttonbar
    *
    * @designToken datepicker.buttonbar.border.color
    */
    borderColor?: string;
    }
    /**
    * Used to pass tokens of the time picker section
    */
    timePicker?: {
        
    /**
    * Padding of time picker
    *
    * @designToken datepicker.time.picker.padding
    */
    padding?: string;
    /**
    * Border color of time picker
    *
    * @designToken datepicker.time.picker.border.color
    */
    borderColor?: string;
    /**
    * Gap of time picker
    *
    * @designToken datepicker.time.picker.gap
    */
    gap?: string;
    /**
    * Button gap of time picker
    *
    * @designToken datepicker.time.picker.button.gap
    */
    buttonGap?: string;
    }
    /**
    * Used to pass tokens of the today section
    */
    today?: {
        
    /**
    * Background of today
    *
    * @designToken datepicker.today.background
    */
    background?: string;
    /**
    * Color of today
    *
    * @designToken datepicker.today.color
    */
    color?: string;
    }
}
